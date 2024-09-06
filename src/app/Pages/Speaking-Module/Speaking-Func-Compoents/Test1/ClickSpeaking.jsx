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

// import NotAnsweringTimer from "../Pages/TimerForNotRes";
// import SStopTimer from "../Pages/S-secTimer";
// import Timer from "../../WritingAllTests/Writing-All-Pages/Writing-Importand/Pages/Timer";

import { ClockLoader } from "react-spinners";
import { useRouter } from 'next/navigation';
import PermissionDenieP from "../Pages/PermissionDenieP.jsx";
//import NetworkCom from "../../Network/index";
import audioPlaySound from "../../../../../assets/Audios/playAudioForSpeaking.wav"
import { CheckPaymentStatus } from "../../../Payments/CkeckPayment/CheckPayments.js";
import { useStateContext } from "../../../../../contexts/ContextProvider";
import { localeCompare } from "../Pages/CompareFunction.js"

import { SPEAKING_POST_FOR_SET_SCORES, SPEAKING_POST_TO_GET_RESPONSE_USERDATA } from "../../../../../assets/URL's/AllUrl.js";
import { StepShowFunction } from "../Pages/StepShowFunction.js";
import AnswerSelectCom from "../Pages/AnswerSelectCom.js";
import ShowTestName from "../Pages/ShowTestName.jsx";


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

// let speechConfig = SpeechSDK.SpeechConfig.fromSubscription(SUBSCRIPTION_KEY, REGION);
// speechConfig.speechSynthesisVoiceName = "en-US-DavisNeural";
// player = new SpeechSDK.SpeakerAudioDestination();
// player.onAudioStart = function(_) {
//     window.console.log("playback started");
//
// }
// player.onAudioEnd = function (_) {
//     window.console.log("playback finished");
//
// };
// let audioConfig  = SpeechSDK.AudioConfig.fromSpeakerOutput(player);
// // new Speech object
// synthesizer = new SpeechSDK.SpeechSynthesizer(speechConfig, audioConfig);
// synthesizer.synthesisStarted = function (s, e) {
//     window.console.log("adDFdsf");
//     window.console.log(e);
//
// };
//
// // The event synthesis completed signals that the synthesis is completed.
// synthesizer.synthesisCompleted = function (s, e) {
//     console.log("kkkk");
//     console.log(e);
//
// };

//connect the indexDB for storing data -----------------------
//prefixes of implementation that we want to test
const windowIndexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

//prefixes of window.IDB objects
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange

const createCollectionsInIndexesDB = () => {
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


// Function to convert audio blob to base64 encoded string
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


    useEffect(() => {
        //collect all user localstorage data...
        setuserMainToken(localStorage.getItem("loginTOken"))
        setuserEmail(localStorage.getItem('userEmail'));
        setuserName(localStorage.getItem("userName"));
        setuserSpeakingTestNo(localStorage.getItem("SpeakingTestNo"))



        createCollectionsInIndexesDB();
        //function below is for how many collecting the numbers of a test that how many questions exist 
        // into that test
        StepShowFunction(setSpeakingStepNo, testNo);
    }, [])

    // console.log(bdPaidStatus);
    // console.log(otherPaidStatus);
    useEffect(() => {
        setTimeout(() => {
            // console.log(testNo);
            //call the function below for check those status
            localeCompare(testNo, bdPaidStatus, otherPaidStatus, history);
        }, 1000);
    }, [])


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




    // const msg = new SpeechSynthesisUtterance();
    // msg.rate = .8;
    var recordedText = "";
    var doubleNotSpeaking = true;
    var converstionSteps = 0;
    var converstionStepsText = "";
    var recordControlFlag = false;
    var smallTalkWarningIndex = 0;
    var spokenText = '';

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

    // history.listen((location, action) => {
    //     SpeechRecognition.abortListening();
    //     SpeechRecognition.stopListening();
    //     clearInterval(timeoutSpeechBreak);
    //     clearInterval(StopPlay);
    //     StopPlay = null;
    //     //  clearInterval(firstStopPlayTimer);
    //     try {
    //         stream.getTracks()[0].stop();
    //         useReactMediaRecorder.stop();
    //         window.playerG.pause();
    //         firstplay = true;
    //     } catch (error) {
    //         console.log(error)
    //     }
    // })

    async function sendSpeakingtextToBackend(mainText) {
        useReactMediaRecorder.stop();
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
                //  clearInterval(firstStopPlayTimer);
                // console.log(res.data);
                if (res.data && userName && userEmail) {
                    // PostSpeakingScores(res.data);
                    // ShowSpeakingTestScors(res.data);
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
                // console.log(forSaveData);
                ShowSpeakingTestScors(totalIeltsScores);
                //save Question Steps color 
                localStorage.setItem("questionStepColorArr", JSON.stringify(storeQuesStepOkArray))

                // PostSpeakingScores(forSaveData);
                //store user data to the data base ------


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
                        // console.log(typeof res.data.ieltsRate);
                        setisloading(false);
                        //after getting the result make those variable empty below---
                        storeUserSpeechAns = "";
                        storeQuesStepOkArray = []

                        history.push("/Speaking-user-Result-Page");
                        // window.location.reload();
                        // stopRecording();

                    })
                    .catch((e) => {
                        console.log(e);
                        setisloading(false);
                        //after getting the result make those variable empty below---
                        storeUserSpeechAns = "";
                        storeQuesStepOkArray = []

                        history.push("/Speaking-user-Result-Page");
                        // window.location.reload();
                        // stopRecording();
                    })

            })
            .catch((err) => {
                setisloading(false);
                alert("Server error please try again or wait for the server response..")
                console.log(err)
            });
    }
    async function smallTalkError(text) {
        await playScript(smallTalkWarningSentence[smallTalkWarningIndex] + text)
        smallTalkWarningIndex++;
        converstionSteps--;

    }
    async function Test1() {

        if (converstionSteps == 0 && converstionStepsText == '') {
            await playScript(
                "Are you comfortable?"
            );
        }
        converstionSteps++;
        if (converstionStepsText != '') {
            if (converstionStepsText.length < 10) {
                await smallTalkError();
            }
            if (converstionSteps == 0) {
                await playScript(
                    "Are you comfortable?"
                );
            }
            else if (converstionSteps == 1) {
                await playScript(
                    "Let me begin your test. My name is RP. Could you tell me your name."
                );
            } else if (converstionSteps == 2) {
                if (converstionStepsText.match("name") || converstionStepsText.match("call")) {
                    if (converstionStepsText.match("call")) {
                        await playScript(
                            "So Lets talk about your home town. Is your hometown is a good place too leave?"
                        );
                    } else {
                        await playScript("So what can i call you.");
                        converstionSteps--;
                    }
                }
                else {
                    await playScript("Sorry.... What is your name?");
                    converstionSteps--;
                }

            } else if (converstionSteps == 3) {
                await playScript("Okay. How long have you been leaving there?");
            } else if (converstionSteps == 4) {
                await playScript("Okay. Do you think it is a good place too leave?");
            } else if (converstionSteps == 5) {
                await playScript(
                    "Okay. is there anything you dislike about your hometown?"
                );
            } else if (converstionSteps == 6) {
                await playScript(
                    "Lets move on talk about watching movies. So do you like to watch movies?"
                );
            } else if (converstionSteps == 7) {
                await playScript("Okay. why do you like watching movies?");
            } else if (converstionSteps == 8) {
                await playScript("Okay. Do you prefer foreign films or indian films?");
            } else if (converstionSteps == 9) {
                await playScript(
                    "Lets move on talk about holidays. Where do you go for your last holidays."
                );
            } else if (converstionSteps == 10) {
                await playScript("Okay. Which public holiday do you like the best.");
            } else if (converstionSteps == 11) {
                await playScript("Okay. What do you do to stay happy.");
            } else if (converstionSteps == 12) {
                await playScript("Okay. Can you stay happy all the time.");
            } else if (converstionSteps == 13) {
                await playScript("Is it important to be happy? ");
            } else if (converstionSteps == 14) {
                await playScript("Okay , that was about section 1. Thanks.");

                await sendSpeakingtextToBackend(recordedText);

            }

        }

        console.log("converstionStepsText");
        console.log(converstionStepsText);
        converstionStepsText = "";

    }

    async function Test2() {

        if (converstionSteps == 0 && converstionStepsText == '') {
            converstionSteps++;
            console.log('converstionSteps')
            console.log(converstionSteps)
            await playScript(
                "Hello and welcome to this practice exam conducted iPractest. My name is Mr. Smart and i am your practice examiner. So let's begin. What is your full name?"
            );
        }

        if (converstionStepsText != '') {

            if (converstionStepsText.length < 10) {
                await smallTalkError();
            }
            if (converstionSteps == 0) {
                await playScript(
                    "Hello and welcome to this practice exam conducted iPractest. My name is Mr. Smart and i am your practice examiner. So let's begin. What is your full name?"
                );
            }

            else if (converstionSteps == 1) {
                if (converstionStepsText.match("name") || converstionStepsText.match("call")) {

                    await playScript(
                        "So now in the first part of the test i am going to ask you some questions about yourself. Did you learn to swim when you were a child?"
                    );

                }
                else {
                    await playScript("Sorry.... What is your name?");
                    converstionSteps--;
                }

            } else if (converstionSteps == 2) {
                await playScript("How often do you go swimming now?");
            } else if (converstionSteps == 3) {
                await playScript("Okay. what places are there for swimming where" +
                    "you live?");
            } else if (converstionSteps == 4) {
                await playScript(
                    "Do you think it would be more enjoyable to go swimming Outdoors or at an indoor pool?"
                );
            } else if (converstionSteps == 5) {
                // await playScript(
                //     "thank you, this is the end of part one. now move on to part two in this part I'm going to give you a topic and you have to talk about it for one or two minutes before you talk you have one minute to think about what you're going to say you can take some notes if you wish is the paper and the pencil and this is your topic I would like you to describe a famous person that you know about and from now your time starts"
                // );
                await playScript(
                    "thank you, this is the end of part one.");
                //
                // } else if (converstionSteps == 7) {
                //     await playScript("Okay. why do you like watching movies?");
                // } else if (converstionSteps == 8) {
                //     await playScript("Okay. Do you prefer foreign films or indian films?");
                // } else if (converstionSteps == 9) {
                //     await playScript(
                //         "Lets move on talk about holidays. Where do you go for your last holidays."
                //     );
                // } else if (converstionSteps == 10) {
                //     await playScript("Okay. Which public holiday do you like the best.");
                // } else if (converstionSteps == 11) {
                //     await playScript("Okay. What do you do to stay happy.");
                // } else if (converstionSteps == 12) {
                //     await playScript("Okay. Can you stay happy all the time.");
                // } else if (converstionSteps == 13) {
                //     await playScript("Is it important to be happy? ");
                // } else if (converstionSteps == 14) {


                await sendSpeakingtextToBackend(recordedText);

            }
            converstionSteps++;
            console.log('converstionSteps')
            console.log(converstionSteps)
        }

        console.log("converstionStepsText");
        console.log(converstionStepsText);
        converstionStepsText = "";

    }


    async function Test3() {

        if (converstionSteps == 0 && converstionStepsText == '') {
            await playScript(
                "good morning my name is William Harris. can you tell me your full name please."
            );
        }
        converstionSteps++;
        if (converstionStepsText != '') {
            if (converstionStepsText.length < 10) {
                await smallTalkError();
            }
            if (converstionSteps == 0) {
                await playScript(
                    "good morning my name is William Harris. can you tell me your full name please."
                );
            }
            else if (converstionSteps == 1) {
                if (converstionStepsText.match("name") || converstionStepsText.match("call")) {
                    if (converstionStepsText.match("call")) {
                        await playScript(
                            "so ... I'm going to ask you some questions about yourself do you work or are you a student?"
                        );
                    } else {
                        await playScript("thank you and what shall I call you");
                        converstionSteps--;
                    }
                }
                else {
                    await playScript("Sorry.... What is your name?");
                    converstionSteps--;
                }

            } else if (converstionSteps == 2) {
                await playScript("Okay. That's nice. Now let's talk about hot beverages. Do you like hot drinks? why or why not?");
            } else if (converstionSteps == 3) {
                await playScript("So, is tea very popular in your home country?");
            } else if (converstionSteps == 4) {
                await playScript(
                    "so, what drink would you offer to guests at home?"
                );
            } else if (converstionSteps == 5) {
                await playScript(
                    "so, when was the last time you had a cup of tea?"
                );
            } else if (converstionSteps == 6) {
                await playScript("Okay , that was about section 1. Thanks.");

                await sendSpeakingtextToBackend(recordedText);

            }

        }

        console.log("converstionStepsText");
        console.log(converstionStepsText);
        converstionStepsText = "";

    }

    async function Test4() {

        if (converstionSteps == 0 && converstionStepsText == '') {
            await playScript(
                "good morning my name is William Harris."
            );
        }
        converstionSteps++;
        if (converstionStepsText != '') {
            if (converstionStepsText.length < 10) {
                await smallTalkError();
            }
            if (converstionSteps == 0) {
                await playScript(
                    "Are you comfortable?"
                );
            }
            else if (converstionSteps == 1) {
                await playScript(
                    "Let me begin your test. My name is RP. Could you tell me your name."
                );
            } else if (converstionSteps == 2) {
                if (converstionStepsText.match("name") || converstionStepsText.match("call")) {
                    if (converstionStepsText.match("call")) {
                        await playScript(
                            "So Lets talk about your home town. Is your hometown is a good place too leave?"
                        );
                    } else {
                        await playScript("So what can i call you.");
                        converstionSteps--;
                    }
                }
                else {
                    await playScript("Sorry.... What is your name?");
                    converstionSteps--;
                }

            } else if (converstionSteps == 3) {
                await playScript("Okay. How long have you been leaving there?");
            } else if (converstionSteps == 4) {
                await playScript("Okay. Do you think it is a good place too leave?");
            } else if (converstionSteps == 5) {
                await playScript(
                    "Okay. is there anything you dislike about your hometown?"
                );
            } else if (converstionSteps == 6) {
                await playScript(
                    "Lets move on talk about watching movies. So do you like to watch movies?"
                );
            } else if (converstionSteps == 7) {
                await playScript("Okay. why do you like watching movies?");
            } else if (converstionSteps == 8) {
                await playScript("Okay. Do you prefer foreign films or indian films?");
            } else if (converstionSteps == 9) {
                await playScript(
                    "Lets move on talk about holidays. Where do you go for your last holidays."
                );
            } else if (converstionSteps == 10) {
                await playScript("Okay. Which public holiday do you like the best.");
            } else if (converstionSteps == 11) {
                await playScript("Okay. What do you do to stay happy.");
            } else if (converstionSteps == 12) {
                await playScript("Okay. Can you stay happy all the time.");
            } else if (converstionSteps == 13) {
                await playScript("Is it important to be happy? ");
            } else if (converstionSteps == 14) {
                await playScript("Okay. that was about section 1. Thanks.");

                await sendSpeakingtextToBackend(recordedText);

            }

        }

        console.log("converstionStepsText");
        console.log(converstionStepsText);
        converstionStepsText = "";

    }



    // Test1Sec1 , Test1Sec1 , Test1Sec1
    // Test2Sec1 , Test2Sec1 , Test2Sec1
    // Test3Sec1 , Test3Sec1 , Test3Sec1
    // Test4Sec1 , Test4Sec1 , Test4Sec1
    // Test5Sec1 , Test5Sec1 , Test5Sec1
    // Test6Sec1 , Test6Sec1 , Test6Sec1
    // Test7Sec1 , Test7Sec1 , Test7Sec1
    // Test8Sec1 , Test8Sec1 , Test8Sec1
    // Test9Sec1 , Test9Sec1 , Test9Sec1
    // Test10Sec1 , Test10Sec1 , Test10Sec1 i9
    // Test11Sec1 , Test11Sec1 , Test11Sec1
    // Test11Sec1 , Test12Sec1 , Test12Sec1

    //function for make conditions depend on user speech time & user Speech words
    const conditionsDependsOnUserSpeech = (StepNumber) => {
        console.log(collectUserSpeechTime);
        console.log(userEveryAnsCount)
        console.log(typeof collectUserSpeechTime)
        // console.log(Time);
        // console.log(SpechWords);


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


    async function Test1Sec1() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            if (!userSpeakingTestNo) {
                await playScript(
                    "Hello and welcome to the IELTS speaking test. Jone is my name. I am your examiner. Are you Ready?"
                );
                setSampleAns(["Simply you can say the positive answer. As like Yes i am Ready to give the test. ", "2, Yes, I am reay.You can proceed the test"])

            } else {
                await playScript("Are you ready to take the test then?");
                setSampleAns(["Simply you can say the positive answer. As like Yes i am Ready to give the test. ", "2, Yes, I am reay.You can proceed the test"]);
            }

        }
        converstionSteps++;
        if (converstionStepsText != '') {
            // if (converstionStepsText.length < 10) {
            //     await smallTalkError();
            // } 

            // else if (converstionStepsText.match('repeat') || converstionStepsText.match(" understand")) {
            //     await playScript(
            //         "Ok , I am repeating.");
            //     converstionSteps--;
            // }
            if (converstionSteps == 0 && converstionStepsText == '') {
                if (!userSpeakingTestNo) {
                    await playScript(
                        "Hello and welcome to the IELTS speaking test. Jone is my name. I am your examiner. Are you Ready?"
                    );
                    setSampleAns(["Simply you can say the positive answer. As like Yes i am Ready to give the test.", "2, Yes, I am reay.You can proceed the test"]);

                } else {
                    await playScript("Are you ready to take the test?");
                    setSampleAns(["Simply you can say the positive answer. As like Yes i am Ready to give the test. ", "2, Yes, I am reay.You can proceed the test"]);
                }

            }
            if (!userSpeakingTestNo) {
                if (converstionSteps == 1) {
                    await playScript(
                        "I'll start your exam now. What's your full name, please?"
                    );

                } else if (converstionSteps == 2) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError(" What's your full name, please?");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("Ok , I am repeating.  What's your full name?");
                        converstionSteps--;
                    }
                    else if (converstionStepsText.match("name") || converstionStepsText.match("call")) {
                        await playScript("So,for this section. I'm going to ask some general questions. Where do you live? ");
                        setSampleAns(["Simply you can say your area/ or place where you are live in. As like I am living in Dhaka,Bangladesh"])
                        localStorage.setItem("SpeakingTestNo", testNo);
                        conditionsDependsOnUserSpeech(0)

                    }
                    else {
                        await playScript("Sorry, what's your name?");
                        converstionSteps--;
                    }

                } else if (converstionSteps == 3) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError(" What is your favorite food?");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("Ok , I am repeating.  What is your favorite food?");
                        converstionSteps--;
                    }
                    else if (converstionStepsText.match(/live/gi) || converstionStepsText.match(/leaving/gi) ||
                        converstionStepsText.match(/in/gi) || converstionStepsText.match(/at/gi) ||
                        converstionStepsText.match(/from/gi) || converstionStepsText.match(/i am living/gi)) {
                        await playScript("OK, let's talk about food. What is your favorite food?");
                        setSampleAns(["My favorite food is ramen noodles because ramen is so tasty and convenient. You only need to add hot water to prepare it. And it comes in so many flavors. My favorite flavors of ramen are shrimp and spicy beef.", "I love fried chicken, especially chicken from KFC. My favorite is the big bucket of chicken legs. I would eat it every day if it wasn’t so unhealthy. ", "My favorite food is a vegetarian dish. It’s a kind of stir fry with tofu and all sorts of vegetables, including broccoli, carrots, and asparagus, with olive oil and soy sauce for flavoring. "]);
                        conditionsDependsOnUserSpeech(1)
                    } else {
                        await playScript("Sorry I cannot understand your answer. What is your favorite food?");
                        setSampleAns([" My favorite food is ramen noodles because ramen is so tasty and convenient. You only need to add hot water to prepare it. And it comes in so many flavors. My favorite flavors of ramen are shrimp and spicy beef.", "2, I live in kolkata,India"])
                        converstionSteps--;
                    }

                }
            } else {
                if (converstionSteps == 1) {
                    await playScript("Okay. Are you happy today?");
                    setSampleAns(["Yes, I am feelling well today", "Umm, yeah i am good.Just felling kind of nervous"]);

                }
                if (converstionSteps == 2) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError("Are you happy today?");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("Ok , I am repeating.Are you happy today?");
                        converstionSteps--;
                    }
                    else {
                        conditionsDependsOnUserSpeech(0)
                        await playScript("Okay. What do you do?");
                        setSampleAns([" I’m currently working as a lawyer for an immigration law firm. In fact, just last week my firm settled a case in which we were able to reunite a father with his family and prevented him from being deported.", "2, I help people understand how to do research before job interviews, and how to answer difficult interview questions. I also give advice on how to ask for raises and negotiate salary after getting a job offer.", "3, I make websites that look great and are easy to use. It’s fun seeing the different ways people interact with my creations and I love getting to make something that’s useful for people."])
                    }


                }
                if (converstionSteps == 3) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError(" What do you do?");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("Ok , I am repeating. What do you do?");
                        converstionSteps--;
                    }
                    else {
                        await playScript("So, let's talk about food. What is your favorite food?");
                        setSampleAns(["1. My favorite food is ramen noodles because ramen is so tasty and convenient. You only need to add hot water to prepare it. And it comes in so many flavors. My favorite flavors of ramen are shrimp and spicy beef.", "I love fried chicken, especially chicken from KFC. My favorite is the big bucket of chicken legs. I would eat it every day if it wasn’t so unhealthy. ", "My favorite food is a vegetarian dish. It’s a kind of stir fry with tofu and all sorts of vegetables, including broccoli, carrots, and asparagus, with olive oil and soy sauce for flavoring. "]);
                        conditionsDependsOnUserSpeech(1)
                    }


                }
            }

            if (converstionSteps == 4) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("What is your favorite food?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("Ok , I am repeating.What is your favorite food?");
                    converstionSteps--;
                }
                else if (converstionStepsText.match(/my/gi) || converstionStepsText.match(/food/gi) ||
                    converstionStepsText.match(/favorite/gi) || converstionStepsText.match(/pizza/gi) ||
                    converstionStepsText.match(/noodles/gi) || converstionStepsText.match(/flavor/gi) ||
                    converstionStepsText.match(/spicy/gi) || converstionStepsText.match(/beef/gi) ||
                    converstionStepsText.match(/dish/gi) || converstionStepsText.match(/cheese/gi) ||
                    converstionStepsText.match(/pasta/gi) || converstionStepsText.match(/fish/gi) ||
                    converstionStepsText.match(/chicken/gi) || converstionStepsText.match(/delicious/gi)
                ) {
                    await playScript("Okay. Do you like trying new foods?");

                    setSampleAns([" Yes i do.There are so many dishes in other countries that you would never try if you do not traveled outside the U.S. Traveling somewhere new opens your eyes and your taste buds to a whole new range of authentic flavor profiles and foods that you would’ve otherwise been missing out on."]);
                    conditionsDependsOnUserSpeech(2)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  What is your favorite food?");
                    converstionSteps--;
                }

            }

            else if (converstionSteps == 5) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Do you like trying new foods?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("Ok , I am repeating.Do you like trying new foods?");
                    converstionSteps--;
                }
                else if (converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/actually/gi) || converstionStepsText.match(/basically/gi) ||
                    converstionStepsText.match(/do/gi) || converstionStepsText.match(/like/gi) ||
                    converstionStepsText.match(/love/gi) || converstionStepsText.match(/try/gi) ||
                    converstionStepsText.match(/new/gi) || converstionStepsText.match(/food/gi) ||
                    converstionStepsText.match(/many/gi) || converstionStepsText.match(/time/gi)
                ) {
                    await playScript("Great. So, What do you usually have in the morning, coffee or tea?");
                    setSampleAns(["Basically i take tea in the morning.Tea has less caffeine than coffee. Like coffee, tea can also help relieve morning fatigue. But coffee can give you more energy than tea, but its disadvantages are also different on an empty stomach. Additionally, the caffeine in tea is not the only thing that will help you wake up and kick-start your brain in the morning. Tea also contains L-theanine and amino acids that can be metabolized by the body."
                        , "2, Whether tea is better than coffee or vice versa first thing in the morning really depends on the person who is consuming it,” she said. “That’s true of everything we consume. A lot of my clients are New Yorkers, for example, and they are wired and in front of technology all day. They tend to be too responsive to caffeine, so I suggest they drink tea instead. But a handful of people can have coffee before bed and be able to sleep after."]);
                    conditionsDependsOnUserSpeech(3)
                } else {
                    await playScript("Sorry, Your answer is not relevent.I'm saying it again. Do you like trying new foods?");

                    converstionSteps--;
                }
            }
            else if (converstionSteps == 6) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("What do you usually have in the morning, coffee or tea?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("Ok , What do you usually have in the morning, coffee or tea?");
                    converstionSteps--;
                }
                else if (converstionStepsText.match(/actually/gi) || converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/take/gi) || converstionStepsText.match(/get/gi) ||
                    converstionStepsText.match(/make/gi) || converstionStepsText.match(/breakfat/gi) ||
                    converstionStepsText.match(/early/gi) || converstionStepsText.match(/wake/gi) ||
                    converstionStepsText.match(/can/gi) || converstionStepsText.match(/yes/gi) ||
                    converstionStepsText.match(/no/gi) || converstionStepsText.match(/usually/gi) ||
                    converstionStepsText.match(/morning/gi) || converstionStepsText.match(/coffee/gi) ||
                    converstionStepsText.match(/tea/gi) || converstionStepsText.match(/water/gi) ||
                    converstionStepsText.match(/make/gi) || converstionStepsText.match(/breakfat/gi)

                ) {
                    await playScript("OK . So, do you like fast food?");
                    setSampleAns([" Yes i love or like fast food.I’m guilty of it; all of us have been at some point; there are days where you just don’t feel like cooking, and it’s as simple as that. Maybe you feel tired – or have had a long day; exhaustion soon sinks in, as you find yourself one step closer to just drifting to sleep, and worrying about food tomorrow. Fortunately, fast food comes in handy during these times – by buying you a little extra time to rest – or work on  whatever other tasks you need to get done.",
                        "2, No i don't like fast foods.Fast food has its advantages and disadvantages. Some of the advantages include the option to eat something instead of skipping a meal, convenience, and affordability 2. However, fast food is often high in calories, fat, sugar, and salt, and can lead to health problems such as obesity, high cholesterol, and cardiovascular disease 12.It’s important to maintain a balanced diet and consume fast food in moderation. If you’re looking for healthier fast food options, consider choosing grilled or baked items instead of fried, opting for smaller portion sizes, and avoiding sugary drinks",
                        "3, I never eat fast food but I’m not a vegetarian. I love my wife’s cooking and it is healthier than any other restaurant, not to speak of fast food. Even though I am busy with working or in a hurry, I will bring homemade sandwich for lunch. But my children like fast food."
                    ]);
                    conditionsDependsOnUserSpeech(4)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. What do you usually have in the morning coffee or tea?");
                    converstionSteps--;
                }

            }
            else if (converstionSteps == 7) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" do you like fast food?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am Repeatin ,  do you like fast food?");
                    converstionSteps--;
                }
                else if (converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/actually/gi) || converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                    converstionStepsText.match(/fast/gi) || converstionStepsText.match(/food/gi) ||
                    converstionStepsText.match(/Yeah/gi) || converstionStepsText.match(/tast/gi) ||
                    converstionStepsText.match(/calorie/gi) || converstionStepsText.match(/course/gi) ||
                    converstionStepsText.match(/healthy/gi) || converstionStepsText.match(/high/gi) ||
                    converstionStepsText.match(/fat/gi) || converstionStepsText.match(/gym/gi) ||
                    converstionStepsText.match(/few/gi) || converstionStepsText.match(/many/gi) ||
                    converstionStepsText.match(/more/gi) || converstionStepsText.match(/time/gi) ||
                    converstionStepsText.match(/once/gi) || converstionStepsText.match(/some/gi) ||
                    converstionStepsText.match(/week/gi) || converstionStepsText.match(/day/gi) ||
                    converstionStepsText.match(/month/gi) || converstionStepsText.match(/sometime/gi)

                ) {
                    await playScript("OK . That was about section 1. Thanks.");
                    setSampleAns([
                        "Cooking meals at home takes time. It takes time to shop for the ingredients, prep and cook the food, and then eat the meal and clear up the dishes. Fast food is certainly popular because it is a quick and easy meal. No time is spent shopping, prepping, or cooking at all.",
                        "3, Fast food can be used as a reward system for children. A highly effective reward’s system at that! Want the kids to get their homework finished in record time? Promise them their favorite fast food. Want the house cleaned and chores done without moans and groans? Promise the kids their favorite fast foods. Need a way to lure a child into eating some form of vegetables? Use clever, fast food choices to do so."]);
                    await playScript("Okay. That was about section 1. Thanks.");
                    conditionsDependsOnUserSpeech(5)
                    await sendSpeakingtextToBackend(recordedText);
                } else {
                    await playScript("Sorry, Your answer is not relevent.  I'm saying it again.  do you like fast food?");
                    converstionSteps--;
                }

            }


            // else if (converstionSteps == 8) {
            //     if (converstionStepsText.length < 10) {
            //         await smallTalkError("Why do people love fast food?");
            //     }
            //     else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
            //         await playScript("I am Repeatin ,Why do people love fast food?");
            //         converstionSteps--;
            //     }
            //     else if (converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
            //         converstionStepsText.match(/actually/gi) || converstionStepsText.match(/do/gi) ||
            //         converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
            //         converstionStepsText.match(/fast/gi) || converstionStepsText.match(/food/gi) ||
            //         converstionStepsText.match(/good/gi) || converstionStepsText.match(/tast/gi) ||
            //         converstionStepsText.match(/people/gi) || converstionStepsText.match(/convenient/gi) || converstionStepsText.match(/inexpensive/gi) ||
            //         converstionStepsText.match(/think/gi) || converstionStepsText.match(/great/gi) ||
            //         converstionStepsText.match(/cook/gi) || converstionStepsText.match(/usually/gi) ||
            //         converstionStepsText.match(/cheaper/gi) || converstionStepsText.match(/budget/gi) ||

            //         converstionStepsText.match(/from/gi) || converstionStepsText.match(/because/gi)) {
            //         await playScript("Okay. What country food do you love?");
            //         setSampleAns([" When it comes to countries famous for its food, it is impossible not to mention Italy.Millions of people all over the world adore Italian cuisine.Italian dishes – it is a perfect mixture of colors and incredible taste.Just try a simple pasta made by an Italian chef and you’ll never forget its amazing taste.Moreover, you can be sure that your plate of pasta will look absolutely stunning.Among the most popular Italian dishes, there are pizza, pasta, and cheesy risottos.",
            //             "2, India is one other country that is known for its unique and absolutely incredible cuisine.It is a great choice for those who like vegetarian dishes with lots of spices.Because cows are sacred animals in India, there are no dishes with beef in Indian cuisine.The truth is that Indian cuisine is considered one of the best in the world. It is famous for its great spices such as a variety of curries and spicy peppers.Among the best dishes, there are Chai and Dal."
            //         ]);
            //         await playScript("Okay. That was about section 1. Thanks.");
            //         conditionsDependsOnUserSpeech(6)
            //         await sendSpeakingtextToBackend(recordedText);
            //     } else {
            //         await playScript("Sorry, Your answer is not relevent.  I'm saying it again. Why do people love fast food?");
            //         converstionSteps--;
            //     }

            // } 

            // else if (converstionSteps == 9) {

            //     if (converstionStepsText.length < 10) {
            //         await smallTalkError(" What unhealthy food do you prefer?");
            //     }
            //     else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
            //         await playScript("I am Repeatin , What unhealthy food do you prefer?");
            //         converstionSteps--;
            //     }
            //     else if (
            //         converstionStepsText.match(/will/gi) || converstionStepsText.match(/make/gi) ||
            //         converstionStepsText.match(/would/gi) || converstionStepsText.match(/think/gi) ||
            //         converstionStepsText.match(/if/gi) || converstionStepsText.match(/possible/gi) ||
            //         converstionStepsText.match(/do/gi) || converstionStepsText.match(/could/gi) ||
            //         converstionStepsText.match(/healthy/gi) || converstionStepsText.match(/food/gi) ||
            //         converstionStepsText.match(/actually/gi) || converstionStepsText.match(/food/gi) ||
            //         converstionStepsText.match(/prefer/gi) || converstionStepsText.match(/like/gi) ||
            //         converstionStepsText.match(/people/gi) || converstionStepsText.match(/right/gi) ||
            //         converstionStepsText.match(/fat/gi) || converstionStepsText.match(/calorie/gi) ||
            //         converstionStepsText.match(/essential/gi) || converstionStepsText.match(/vegetables/gi) ||
            //         converstionStepsText.match(/sickness/gi) || converstionStepsText.match(/ill/gi) ||
            //         converstionStepsText.match(/want/gi) || converstionStepsText.match(/give/gi) ||
            //         converstionStepsText.match(/advice/gi) || converstionStepsText.match(/sugar/gi) ||
            //         converstionStepsText.match(/through/gi) || converstionStepsText.match(/chips/gi) ||
            //         converstionStepsText.match(/actually/gi) || converstionStepsText.match(/cake/gi) ||
            //         converstionStepsText.match(/pastry/gi) || converstionStepsText.match(/fast/gi) ||
            //         converstionStepsText.match(/candy/gi) || converstionStepsText.match(/pizza/gi) ||

            //         converstionStepsText.match(/pasta/gi) || converstionStepsText.match(/burger/gi) ||
            //         converstionStepsText.match(/French/gi) || converstionStepsText.match(/frie/gi)

            //     ) {
            //         await playScript("Okay. That was about section 1. Thanks.");
            //         conditionsDependsOnUserSpeech(7)
            //         await sendSpeakingtextToBackend(recordedText);
            //     } else {
            //         await playScript("Sorry, Your answer is not relevent. I'm saying it again. What unhealthy food do you prefer?");
            //         converstionSteps--;
            //     }



            // }

        }

        console.log("converstionStepsText");
        console.log(converstionStepsText);
        converstionStepsText = "";

    }

    async function Test1Sec2() {

    }
    async function Test1Sec3() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            await playScript(
                "Welcome to the third section. So, are you ready ?"
            );

            setSampleAns([" Simply you can say the positive answer. As like Yes i am Ready to give the test. ", "2, Yes, I am reay.You can proceed the test"]);
        }
        converstionSteps++;
        if (converstionStepsText != '') {

            if (converstionSteps == 1) {
                await playScript(
                    "Okay. can you repeat that please"
                );
                setSampleAns([" Yes i can & you can simply repeat the answer that you gave"])
            }

            else if (converstionSteps == 2) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" are you ready");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("Ok , I am repeating. are you ready");
                    converstionSteps--;
                }
                else {
                    await playScript("Okay. Let's talk about children. Who motivates children the most?");
                    setSampleAns([" I think at an early age, parents and teachers motivate children the most. They are role models, and children naturally look up to them. Once they are older, children start idolizing movie and sport  stars, and they can motivate children too. "]);
                    //here will call a function which have 2 peramitter one is this stepNumber & second will be the wordCount & speech time
                    conditionsDependsOnUserSpeech(0)
                }
            }
            else if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Who motivates children the most?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("Ok , I am repeating.Who motivates children the most?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/teacher/gi) || converstionStepsText.match(/brother/gi) ||
                    converstionStepsText.match(/parent/gi) || converstionStepsText.match(/sister/gi) ||
                    converstionStepsText.match(/friend/gi) || converstionStepsText.match(/father/gi) ||
                    converstionStepsText.match(/mother/gi) || converstionStepsText.match(/grand/gi) ||
                    converstionStepsText.match(/motivate/gi) || converstionStepsText.match(/belive/gi) ||
                    converstionStepsText.match(/help/gi) || converstionStepsText.match(/children/gi) ||
                    converstionStepsText.match(/most/gi) || converstionStepsText.match(/every/gi) ||
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/early/gi) || converstionStepsText.match(/age/gi) ||
                    converstionStepsText.match(/role/gi) || converstionStepsText.match(/them/gi) ||
                    converstionStepsText.match(/can/gi) || converstionStepsText.match(/could/gi)

                ) {
                    await playScript("Okay. How can teachers motivate children?");
                    setSampleAns([" Teachers can motivate children by encouraging them, recognizing their efforts, setting achievable goals, and allowing them to explore their curiosity and think outside the box."]);
                    conditionsDependsOnUserSpeech(1)
                } else {

                    await playScript("Sorry,the reply is irrelevant. I am repeating. Who motivates children the most?");
                    converstionSteps--;
                }

            }
            else if (converstionSteps == 4) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("How can teachers motivate children?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("Ok , I am repeating.How can teachers motivate children?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/encourag/gi) || converstionStepsText.match(/effort/gi) ||
                    converstionStepsText.match(/setting/gi) || converstionStepsText.match(/achievable/gi) ||
                    converstionStepsText.match(/person/gi) || converstionStepsText.match(/overall/gi) ||
                    converstionStepsText.match(/goals/gi) || converstionStepsText.match(/allow/gi) ||
                    converstionStepsText.match(/explore/gi) || converstionStepsText.match(/curiosity/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/outside/gi) ||
                    converstionStepsText.match(/usually/gi) || converstionStepsText.match(/basically/gi) ||
                    converstionStepsText.match(/do/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/will/gi) || converstionStepsText.match(/would/gi) ||
                    converstionStepsText.match(/help/gi) || converstionStepsText.match(/children/gi) ||
                    converstionStepsText.match(/most/gi) || converstionStepsText.match(/every/gi) ||
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/early/gi) || converstionStepsText.match(/age/gi) ||
                    converstionStepsText.match(/role/gi) || converstionStepsText.match(/them/gi) ||
                    converstionStepsText.match(/can/gi) || converstionStepsText.match(/could/gi)

                ) {
                    await playScript("Okay. How is it different from teaching kids?");
                    setSampleAns([" Students who are not motivated will not learn effectively and teaching alone won’t improve academic performance. Motivated students are more excited to participate in class, and unmotivated students can disrupt the whole class"]);
                    // conditionsDependsOnUserSpeech(2, collectUserSpeechTime, userEveryAnsCount)
                    conditionsDependsOnUserSpeech(2)
                } else {
                    await playScript("Sorry,the reply is irrelevant. I am repeating.How can teachers motivate children?");
                    converstionSteps--;
                }

            }
            else if (converstionSteps == 5) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("How is it different from teaching kids?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("Ok , I am repeating.How is it different from teaching kids?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/different/gi) || converstionStepsText.match(/difference/gi) ||
                    converstionStepsText.match(/from/gi) || converstionStepsText.match(/between/gi) ||
                    converstionStepsText.match(/teach/gi) || converstionStepsText.match(/kid/gi) ||
                    converstionStepsText.match(/adult/gi) || converstionStepsText.match(/childen/gi) ||
                    converstionStepsText.match(/Student/gi) || converstionStepsText.match(/motivat/gi) ||
                    converstionStepsText.match(/learn/gi) || converstionStepsText.match(/effectively/gi) ||
                    converstionStepsText.match(/perfect/gi) || converstionStepsText.match(/great/gi) ||
                    converstionStepsText.match(/role/gi) || converstionStepsText.match(/alone/gi) ||
                    converstionStepsText.match(/academic/gi) || converstionStepsText.match(/performance/gi) ||
                    converstionStepsText.match(/excit/gi) || converstionStepsText.match(/joy/gi) ||
                    converstionStepsText.match(/participate/gi) || converstionStepsText.match(/class/gi)

                ) {
                    await playScript("Okay. What should teenagers have?");
                    setSampleAns([" Teenagers want to be accepted and valued by their friends, which can sometimes lead them to risky  behavior. If parents are supportive and take the time to communicate with their children, they can influence teens to remain motivated and achieve their goals. Parents need to keep a watch on them and respect their independence"]);
                    conditionsDependsOnUserSpeech(3)
                } else {
                    await playScript("Sorry,the reply is irrelevant. I am repeating.How is it different from teaching kids?");
                    converstionSteps--;
                }

            }
            else if (converstionSteps == 6) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("What should teenagers have?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("Ok , I am repeating.What should teenagers have?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/should/gi) || converstionStepsText.match(/teenager/gi) ||
                    converstionStepsText.match(/adult/gi) || converstionStepsText.match(/kid/gi) ||
                    converstionStepsText.match(/children/gi) || converstionStepsText.match(/have/gi) ||
                    converstionStepsText.match(/need/gi) || converstionStepsText.match(/essensial/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/would/gi) || converstionStepsText.match(/will/gi) ||
                    converstionStepsText.match(/essensial/gi) || converstionStepsText.match(/want/gi) ||
                    converstionStepsText.match(/accept/gi) || converstionStepsText.match(/friend/gi) ||
                    converstionStepsText.match(/lead/gi) || converstionStepsText.match(/behavior/gi) ||
                    converstionStepsText.match(/parent/gi) || converstionStepsText.match(/support/gi) ||
                    converstionStepsText.match(/Discover/gi) || converstionStepsText.match(/knowledge/gi) ||
                    converstionStepsText.match(/communicate/gi) || converstionStepsText.match(/influence/gi) ||
                    converstionStepsText.match(/time/gi) || converstionStepsText.match(/remain/gi) ||
                    converstionStepsText.match(/achieve/gi) || converstionStepsText.match(/goal/gi) ||
                    converstionStepsText.match(/aim/gi) || converstionStepsText.match(/independence/gi) ||
                    converstionStepsText.match(/respect/gi)
                ) {
                    await playScript("Okay. What is the greatest challenge facing teachers today?");
                    setSampleAns([" The greatest challenges facing teachers today include *Balancing the different learning needs of students *Respecting expectations from school admins*Helping parents and students meet long-term goals. *Knowing their students well *Understanding the different learning abilities and capacities of the students"]);
                    conditionsDependsOnUserSpeech(4)
                } else {
                    await playScript("Sorry,the reply is irrelevant. I am repeating. What should teenagers have?");
                    converstionSteps--;
                }


            }
            else if (converstionSteps == 7) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("What is the greatest challenge facing teachers today?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("Ok , I am repeating.What is the greatest challenge facing teachers today?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/many/gi) || converstionStepsText.match(/today/gi) ||
                    converstionStepsText.match(/lot/gi) || converstionStepsText.match(/actually/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/great/gi) || converstionStepsText.match(/most/gi) ||
                    converstionStepsText.match(/challenge/gi) || converstionStepsText.match(/facing/gi) ||
                    converstionStepsText.match(/face/gi) || converstionStepsText.match(/teacher/gi) ||
                    converstionStepsText.match(/reality/gi) || converstionStepsText.match(/make/gi) ||
                    converstionStepsText.match(/challenging/gi) || converstionStepsText.match(/Staying/gi) ||
                    converstionStepsText.match(/date/gi) || converstionStepsText.match(/learn/gi) ||
                    converstionStepsText.match(/technology/gi) || converstionStepsText.match(/Communicat/gi) ||
                    converstionStepsText.match(/Pressure/gi) || converstionStepsText.match(/administrators/gi) ||
                    converstionStepsText.match(/Creat/gi) || converstionStepsText.match(/engaging/gi) ||
                    converstionStepsText.match(/lesson/gi) || converstionStepsText.match(/plan/gi) ||
                    converstionStepsText.match(/Behavior/gi) || converstionStepsText.match(/management/gi) ||
                    converstionStepsText.match(/Lack/gi) || converstionStepsText.match(/Burnout/gi)
                ) {
                    await playScript("Okay. That was about section 3. Thanks.");
                    conditionsDependsOnUserSpeech(5)
                    await sendSpeakingtextToBackend(recordedText);
                } else {
                    await playScript("Sorry, the reply is irrelevant. I am repeating.What is the greatest challenge facing teachers today?");
                    converstionSteps--;
                }


            }

        }

        console.log("converstionStepsText");
        console.log(converstionStepsText);
        converstionStepsText = "";



    }


    // text-2-sections

    async function Test2Sec1() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            if (!userSpeakingTestNo) {
                await playScript(
                    "Hello and welcome to the IELTS speaking portion of the test. Jone is my name. & For this portion of the exam, I will serve as your examiner. We are carrying out this. Would you kindly tell me your entire name?"
                );
                setSampleAns([" Simply you can say your full name. As like my name is Jone dow.You can call me Jone"])
            } else {
                await playScript("Are you ready to take the test then?")
                setSampleAns([" Simply you can say the positive answer. As like Yes i am Ready to give the test. ", "2, Yes, I am reay.You can proceed the test"])
            }

        }


        converstionSteps++;
        if (converstionStepsText != '') {

            if (!userSpeakingTestNo) {
                if (converstionSteps == 1) {
                    if (converstionStepsText.length < 3) {
                        await smallTalkError("Would you kindly tell me your entire name?");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am Repeatin ,Would you kindly tell me your entire name?");
                        converstionSteps--;
                    }
                    else {
                        await playScript("I'll start your exam now. What's your full name, please?");
                        setSampleAns([" Simply you can say your full name. As like my name is Jone dow.You can call me Jone"])
                    }

                } else if (converstionSteps == 2) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError("Would you kindly tell me your entire name?");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am Repeatin ,Would you kindly tell me your entire name?");
                        converstionSteps--;
                    }
                    else if (converstionStepsText.match("name") || converstionStepsText.match("call")) {
                        if (converstionStepsText.match("call")) {
                            await playScript("So, for this section. I'm going to ask some general questions. Where do you live?");
                            setSampleAns([" Simply you can say your area/ or place where you are live in.As like I am living in Dhaka,Bangladesh", "2, I live in kolkata,India"])
                            localStorage.setItem("SpeakingTestNo", testNo);
                            conditionsDependsOnUserSpeech(0)
                        } else {
                            await playScript("Alright. What can I call you?");
                            converstionSteps--;
                        }
                    }
                    else {
                        await playScript("Alright, what's your name?");
                        converstionSteps--;
                    }

                } else if (converstionSteps == 3) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError("Where do you live?");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am Repeatin ,Where do you live?");
                        converstionSteps--;
                    }
                    else if (converstionStepsText.match(/live/gi) || converstionStepsText.match(/leaving/gi) ||
                        converstionStepsText.match(/in/gi) || converstionStepsText.match(/at/gi) ||
                        converstionStepsText.match(/from/gi) || converstionStepsText.match(/i am living/gi)) {
                        await playScript("Okay. That's nice. Let's talk about Hometown. What is the name of your hometown?");
                        setSampleAns(["Thanks for asking i am from Mymenshing & my Home town  is Jamalpur"]);
                        conditionsDependsOnUserSpeech(1)

                    } else {
                        await playScript("Sorry, Your answer is not relevent. I'm saying it again. Where do you live? ");

                        converstionSteps--;
                    }

                }
            } else {
                if (converstionSteps == 1) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError("Would you kindly tell me your entire name?");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am Repeatin ,Would you kindly tell me your entire name?");
                        converstionSteps--;
                    }
                    else {
                        await playScript("All right. How is weather today?");
                        setSampleAns(["I think today's weather is very nice"])
                    }

                }
                if (converstionSteps == 2) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError("How is your mood today?");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am Repeatin ,How is your mood today?");
                        converstionSteps--;
                    }
                    else {
                        await playScript("Alright. Are you a pet lover?");
                        setSampleAns([" I love pets. I have had dogs, cats and rabbits (it's a great responsability to have them). However I like dogs because you can play and you can go for a walk with them.",
                            "2, I bought my pet, shi tzu one month ago because I really adore their characteristics. My dog can give positive views about different things and it so rewarding to take care of her. Her name is Kendra, isn't a lovely name? "
                        ]);
                        conditionsDependsOnUserSpeech(0)
                    }
                }
                if (converstionSteps == 3) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError("Are you a pet lover?");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am Repeatin ,Are you a pet lover?");
                        converstionSteps--;
                    }
                    else {
                        await playScript("Okay. That's nice. Let's talk about Hometown. What is the name of your hometown?");
                        setSampleAns(["Thanks for asking i am from Mymenshing & my Home town  is Jamalpur"]);
                        conditionsDependsOnUserSpeech(1)
                    }
                }
            }
            if (converstionSteps == 4) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("What is the name of your hometown?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am Repeatin , What is the name of your hometown?");
                    converstionSteps--;
                }
                else if (converstionStepsText.match(/from/gi) || converstionStepsText.match(/form/gi) ||
                    converstionStepsText.match(/live/gi) || converstionStepsText.match(/at/gi) ||
                    converstionStepsText.match(/sure/gi) || converstionStepsText.match(/in/gi) ||
                    converstionStepsText.match(/Home/gi) || converstionStepsText.match(/town/gi) ||
                    converstionStepsText.match(/Thank/gi) || converstionStepsText.match(/actually/gi)) {

                    await playScript("Okay. Where is your hometown located?");
                    setSampleAns([" As i said that i am from small city called jamalpur it's in Mymensingh Division."]);
                    conditionsDependsOnUserSpeech(2)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. What is the name of your hometown?");
                    converstionSteps--;
                }
            } else if (converstionSteps == 5) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Where is your hometown located?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am Repeatin. Where is your hometown located?");
                    converstionSteps--;
                }
                else if (converstionStepsText.match(/hometown/gi) || converstionStepsText.match(/locat/gi) ||
                    converstionStepsText.match(/home/gi) || converstionStepsText.match(/town/gi) ||
                    converstionStepsText.match(/in/gi) || converstionStepsText.match(/at/gi) ||
                    converstionStepsText.match(/city/gi) || converstionStepsText.match(/division/gi) ||
                    converstionStepsText.match(/village/gi) || converstionStepsText.match(/near/gi) ||
                    converstionStepsText.match(/oposite/gi)
                ) {

                    await playScript("Okay. Is your hometown a big city or a small place?");
                    setSampleAns(["Kochi is a medium-sized city with a cozy atmosphere and a population of somewhere in between 80,000 and 1 lakh people."
                    ]);
                    conditionsDependsOnUserSpeech(3)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Where is your hometown located?");
                    converstionSteps--;
                }
            } else if (converstionSteps == 6) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Is your hometown a big city or a small place?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am Repeatin. Is your hometown a big city or a small place?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/home/gi) || converstionStepsText.match(/town/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/belive/gi) ||
                    converstionStepsText.match(/big/gi) || converstionStepsText.match(/people/gi) ||
                    converstionStepsText.match(/city/gi) || converstionStepsText.match(/small/gi) ||
                    converstionStepsText.match(/place/gi) || converstionStepsText.match(/medium/gi) ||

                    converstionStepsText.match(/population/gi) || converstionStepsText.match(/many/gi) ||
                    converstionStepsText.match(/few/gi) || converstionStepsText.match(/somewhere/gi)

                ) {

                    await playScript("Okay. How long have you been living there?");
                    setSampleAns(["I had lived there for around 15 years before my family left for Bangalore. It’s been more than ten years since I left my hometown."]);

                    conditionsDependsOnUserSpeech(4)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Is your hometown a big city or a small place?");
                    converstionSteps--;
                }
            } else if (converstionSteps == 7) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" How long have you been living there?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am Repeatin. How long have you been living there?");
                    converstionSteps--;
                }
                else if (converstionStepsText.match(/was/gi) || converstionStepsText.match(/long/gi) ||
                    converstionStepsText.match(/have/gi) || converstionStepsText.match(/been/gi) ||
                    converstionStepsText.match(/liv/gi) || converstionStepsText.match(/there/gi) ||
                    converstionStepsText.match(/young/gi) || converstionStepsText.match(/old/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/around/gi) ||
                    converstionStepsText.match(/before/gi) || converstionStepsText.match(/familly/gi) ||
                    converstionStepsText.match(/when/gi) || converstionStepsText.match(/where/gi) ||
                    converstionStepsText.match(/than/gi) || converstionStepsText.match(/since/gi)

                ) {

                    await playScript("Okay. Do you like your hometown? If yes, what do you like (most) about your hometown?");
                    setSampleAns([
                        "Yes, I do like my hometown! I like the hospitality of people in my hometown. Also, everyone was willing to give others a hand when they needed help."]);
                    conditionsDependsOnUserSpeech(5)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  How long have you been living there?");
                    converstionSteps--;
                }
            } else if (converstionSteps == 8) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Do you like your hometown? If yes, what do you like (most) about your hometown?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am Repeatin. Do you like your hometown? If yes, what do you like (most) about your hometown?");
                    converstionSteps--;
                }
                else if (converstionStepsText.match(/home/gi) || converstionStepsText.match(/town/gi) ||
                    converstionStepsText.match(/being/gi) || converstionStepsText.match(/to/gi) ||
                    converstionStepsText.match(/most/gi) || converstionStepsText.match(/like/gi) ||
                    converstionStepsText.match(/love/gi) || converstionStepsText.match(/very/gi) ||
                    converstionStepsText.match(/lot/gi) || converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/no/gi) || converstionStepsText.match(/yes/gi) ||
                    converstionStepsText.match(/make/gi) || converstionStepsText.match(/huge/gi) ||

                    converstionStepsText.match(/place/gi) || converstionStepsText.match(/beauty/gi) ||
                    converstionStepsText.match(/willing/gi) || converstionStepsText.match(/human/gi) ||
                    converstionStepsText.match(/people/gi) || converstionStepsText.match(/give/gi) ||
                    converstionStepsText.match(/help/gi) || converstionStepsText.match(/need/gi) ||
                    converstionStepsText.match(/fewer/gi)
                ) {

                    await playScript("Okay. Is there anything you dislike about it?");
                    setSampleAns([
                        " I love my hometown Kochi, but I wish the traffic was better. It can be hard to get around sometimes, and it’s not always peaceful. But the city is getting better every day, and I think it has the potential to be a major tourist destination."]);
                    conditionsDependsOnUserSpeech(6)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you like your hometown? If yes, what do you like (most) about your hometown?");
                    converstionSteps--;
                }
            } else if (converstionSteps == 9) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Is there anything you dislike about it?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am Repeatin. Is there anything you dislike about it?");
                    converstionSteps--;
                }
                else if (converstionStepsText.match(/love/gi) || converstionStepsText.match(/home/gi) ||
                    converstionStepsText.match(/town/gi) || converstionStepsText.match(/at/gi) ||
                    converstionStepsText.match(/wish/gi) || converstionStepsText.match(/traffic/gi) ||
                    converstionStepsText.match(/important/gi) || converstionStepsText.match(/better/gi) ||
                    converstionStepsText.match(/being/gi) || converstionStepsText.match(/hard/gi) ||
                    converstionStepsText.match(/from/gi) || converstionStepsText.match(/person/gi) ||
                    converstionStepsText.match(/most/gi) || converstionStepsText.match(/around/gi) ||
                    converstionStepsText.match(/lot/gi) || converstionStepsText.match(/peace/gi) ||
                    converstionStepsText.match(/city/gi) || converstionStepsText.match(/every/gi) ||
                    converstionStepsText.match(/make/gi) || converstionStepsText.match(/huge/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/potential/gi) ||
                    converstionStepsText.match(/major/gi) || converstionStepsText.match(/tourist/gi) ||
                    converstionStepsText.match(/major/gi) || converstionStepsText.match(/destination/gi)


                ) {

                    await playScript("Okay.So, What is your hometown famous for?");
                    setSampleAns(["My hometown is famous for its beauty, which remains constant throughout the year. It’s also known for its rich culture and kind people. The stunning architecture, music, and fashion contribute to its global reputation"]);
                    conditionsDependsOnUserSpeech(7)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Is there anything you dislike about it?");
                    converstionSteps--;
                }
            } else if (converstionSteps == 10) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("What is your hometown famous for?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am Repeatin. What is your hometown famous for?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/hometown/gi) || converstionStepsText.match(/home/gi) ||
                    converstionStepsText.match(/town/gi) || converstionStepsText.match(/actually/gi) ||
                    converstionStepsText.match(/generally/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/famou/gi) || converstionStepsText.match(/for/gi) ||
                    converstionStepsText.match(/beauty/gi) || converstionStepsText.match(/happy/gi) ||
                    converstionStepsText.match(/Sad/gi) || converstionStepsText.match(/remain/gi) ||
                    converstionStepsText.match(/constant/gi) || converstionStepsText.match(/through/gi) ||
                    converstionStepsText.match(/culture/gi) || converstionStepsText.match(/people/gi) ||
                    converstionStepsText.match(/architecture/gi) || converstionStepsText.match(/music/gi) ||
                    converstionStepsText.match(/person/gi) || converstionStepsText.match(/fashion/gi) ||
                    converstionStepsText.match(/contribute/gi) || converstionStepsText.match(/global/gi) ||
                    converstionStepsText.match(/reputation/gi) || converstionStepsText.match(/feel/gi)
                ) {
                    await playScript("Okay. That was about section 1. Thanks.");
                    conditionsDependsOnUserSpeech(8)
                    await sendSpeakingtextToBackend(recordedText);
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Does smiling always make a person happy & why?");
                    converstionSteps--;
                }



            }

        }

        console.log("converstionStepsText");
        console.log(converstionStepsText);
        converstionStepsText = "";

    }

    async function Test2Sec2() {

    }

    async function Test2Sec3() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            await playScript(
                " My name is Adrian. I will be your examiner for this part of the test, part three. Are you comfortable?"
            );
            setSampleAns(["Yes, I am comfortable you please proceed the test"])
        }
        converstionSteps++;
        if (converstionStepsText != '') {
            if (converstionSteps == 1) {
                await playScript(
                    "Sorry.... Can you repeat that please"
                );
                setSampleAns([` You can simply repeat your previous answer`])
            } else if (converstionSteps == 2) {
                if (converstionStepsText.length < 5) {
                    await smallTalkError("Are you ready?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.Are you ready?");
                    converstionSteps--;
                }
                else {
                    await playScript("Let's talk about Noice. Is noise pollution serious in your city?");
                    setSampleAns([`Yes, it is. We have noise all around us, most of which can be avoided. There is unnecessary honking  of pressure horns from vehicles. Industries are making noise. People use loudspeakers for personal functions, and neighbours are forced to bear the noise. `])
                    conditionsDependsOnUserSpeech(0)
                }
            }
            else if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Is noise pollution serious in your city?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Is noise pollution serious in your city?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/Yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/Noice/gi) || converstionStepsText.match(/pollution/gi) ||
                    converstionStepsText.match(/India/gi) || converstionStepsText.match(/avoided/gi) ||
                    converstionStepsText.match(/unnecessary/gi) || converstionStepsText.match(/honking/gi) ||
                    converstionStepsText.match(/vehicles/gi) || converstionStepsText.match(/Indust/gi) ||
                    converstionStepsText.match(/loudspeaker/gi) || converstionStepsText.match(/neighbour/gi)

                ) {
                    await playScript("Do you like to live in a noisy place?");
                    setSampleAns([`No, definitely not. But, unfortunately it is difficult to find places in cities, which are noise free. `])
                    conditionsDependsOnUserSpeech(1)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Is noise pollution serious in your city?");
                    converstionSteps--;
                }
            }
            else if (converstionSteps == 4) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Do you like to live in a noisy place?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.Do you like to live in a noisy place?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/definit/gi) || converstionStepsText.match(/fortunate/gi) ||
                    converstionStepsText.match(/difficult/gi) || converstionStepsText.match(/find/gi) ||
                    converstionStepsText.match(/places/gi) || converstionStepsText.match(/culture/gi) ||
                    converstionStepsText.match(/cit/gi) || converstionStepsText.match(/situation/gi) ||
                    converstionStepsText.match(/noise/gi) || converstionStepsText.match(/free/gi)
                ) {
                    await playScript("Okey. Where can you hear a loud noise?");
                    setSampleAns([` We can hear loud noise all around us. There is unnecessary honking of pressure horns from 
                    vehicles. Industries are making noise. People use loudspeakers for personal functions, and 
                    neighbours are forced to bear the noise. `])
                    conditionsDependsOnUserSpeech(2)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you like to live in a noisy place?");
                    converstionSteps--;
                }



            }
            else if (converstionSteps == 5) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("  Where can you hear a loud noise?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Where can you hear a loud noise?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/hear/gi) || converstionStepsText.match(/control/gi) ||
                    converstionStepsText.match(/loud/gi) || converstionStepsText.match(/noise/gi) ||
                    converstionStepsText.match(/around/gi) || converstionStepsText.match(/most/gi) ||
                    converstionStepsText.match(/us/gi) || converstionStepsText.match(/socity/gi) ||
                    converstionStepsText.match(/road/gi) || converstionStepsText.match(/public/gi) ||
                    converstionStepsText.match(/pressure/gi) || converstionStepsText.match(/horns/gi) ||
                    converstionStepsText.match(/vehicles/gi) || converstionStepsText.match(/noise/gi) ||
                    converstionStepsText.match(/personal/gi) || converstionStepsText.match(/function/gi) ||
                    converstionStepsText.match(/Moving/gi) || converstionStepsText.match(/bear/gi) ||
                    converstionStepsText.match(/force/gi) || converstionStepsText.match(/suddenly/gi) ||
                    converstionStepsText.match(/change/gi) || converstionStepsText.match(/life/gi)
                ) {
                    await playScript("So.  Do you think that there is more noise in people’s lives today than in the past?");
                    setSampleAns([`Yes, I think so. The number of vehicles is growing day by day. All these are making noise. Industries  are also growing in numbers. These are also making too much noise. As these sources of noise are increasing, so definitely we are suffering from more and more noise these days.`])
                    conditionsDependsOnUserSpeech(3)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Where can you hear a loud noise?");
                    converstionSteps--;
                }


            } else if (converstionSteps == 6) {

                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Do you think that there is more noise in people’s lives today than in the past?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Do you think that there is more noise in people’s lives today than in the past?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/more/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/common/gi) || converstionStepsText.match(/because/gi) ||
                    converstionStepsText.match(/most/gi) || converstionStepsText.match(/people/gi) ||
                    converstionStepsText.match(/today/gi) || converstionStepsText.match(/than/gi) ||
                    converstionStepsText.match(/past/gi) || converstionStepsText.match(/number/gi) ||

                    converstionStepsText.match(/grow/gi) || converstionStepsText.match(/noise/gi) ||
                    converstionStepsText.match(/make/gi) || converstionStepsText.match(/negative/gi) ||
                    converstionStepsText.match(/increas/gi) || converstionStepsText.match(/definitely/gi) ||
                    converstionStepsText.match(/suffer/gi) || converstionStepsText.match(/these days/gi) || converstionStepsText.match(/expect/gi)
                ) {
                    await playScript("So,  Do you think that cities will become noisier in the future?");
                    setSampleAns([` Yes, I suppose so. Whether we like it or not, the noise producing things are increasing and so it is  quite probable that cities will become noisier in the future.
                    `])
                    conditionsDependsOnUserSpeech(4)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Do you think that there is more noise in people’s lives today than in the past?");
                    converstionSteps--;
                }


            } else if (converstionSteps == 7) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Do you think that cities will become noisier in the future?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.Do you think that cities will become noisier in the future?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/cities/gi) || converstionStepsText.match(/city/gi) ||
                    converstionStepsText.match(/become/gi) || converstionStepsText.match(/future/gi) ||

                    converstionStepsText.match(/suppose/gi) || converstionStepsText.match(/will/gi) ||
                    converstionStepsText.match(/would/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/Whether/gi) || converstionStepsText.match(/produc/gi) ||
                    converstionStepsText.match(/increas/gi) || converstionStepsText.match(/quite/gi) ||
                    converstionStepsText.match(/probable/gi) || converstionStepsText.match(/negative/gi)

                ) {
                    await playScript(" What is the noise in life?")
                    setSampleAns([` The noise in our life means the distractions that do not let us focus on the goals in our life. For example, nowadays, people do not concentrate on their studies or work, and are often busy scrolling unimportant feeds/updates on their mobile phones. The loads of data that they consume  everyday becomes the noise in their life. `])
                    conditionsDependsOnUserSpeech(5)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you think that cities will become noisier in the future?");
                    converstionSteps--;
                }




            } else if (converstionSteps == 8) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("What is the noise in life?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.What is the noise in life?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/noise/gi) || converstionStepsText.match(/life/gi) ||
                    converstionStepsText.match(/mean/gi) || converstionStepsText.match(/distraction/gi) ||
                    converstionStepsText.match(/focus/gi) || converstionStepsText.match(/goal/gi) ||

                    converstionStepsText.match(/nowadays/gi) || converstionStepsText.match(/people/gi) ||
                    converstionStepsText.match(/concentrate/gi) || converstionStepsText.match(/studies/gi) ||

                    converstionStepsText.match(/work/gi) || converstionStepsText.match(/keep/gi) ||
                    converstionStepsText.match(/consume/gi) || converstionStepsText.match(/people/gi) ||
                    converstionStepsText.match(/become/gi) || converstionStepsText.match(/everyday/gi) ||
                    converstionStepsText.match(/their/gi)
                ) {
                    await playScript(
                        "Okey.  How is the noise level in your city?")
                    setSampleAns([`My city is an industrial city and on top of that it is on the national highway. So, the noise levels are 
                    very high. `])
                    conditionsDependsOnUserSpeech(6)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. What is the noise in life?");
                    converstionSteps--;
                }



            }
            else if (converstionSteps == 9) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("How is the noise level in your city?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.How is the noise level in your city?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/How/gi) || converstionStepsText.match(/noise/gi) ||
                    converstionStepsText.match(/level/gi) || converstionStepsText.match(/generally/gi) ||

                    converstionStepsText.match(/city/gi) || converstionStepsText.match(/industrial/gi) ||
                    converstionStepsText.match(/most/gi) || converstionStepsText.match(/will/gi) ||
                    converstionStepsText.match(/national/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/highway/gi) || converstionStepsText.match(/keep/gi) ||

                    converstionStepsText.match(/level/gi) || converstionStepsText.match(/high/gi) ||
                    converstionStepsText.match(/low/gi) || converstionStepsText.match(/negative/gi) ||
                    converstionStepsText.match(/Can/gi) || converstionStepsText.match(/important/gi)
                ) {
                    await playScript("Okey.Where does noise in urban areas come from? ")
                    setSampleAns([`The noise in urban areas comes from pressure horns of vehicles, industries and loud speakers.`])
                    conditionsDependsOnUserSpeech(7)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. How is the noise level in your city?");
                    converstionSteps--;
                }

            }
            else if (converstionSteps == 10) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Where does noise in urban areas come from?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.Where does noise in urban areas come from?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/Where/gi) || converstionStepsText.match(/noise/gi) ||
                    converstionStepsText.match(/does/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/good/gi) || converstionStepsText.match(/because/gi) ||
                    converstionStepsText.match(/from/gi) || converstionStepsText.match(/urban/gi) ||

                    converstionStepsText.match(/come/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/pressure/gi) || converstionStepsText.match(/keep/gi) ||
                    converstionStepsText.match(/vehicle/gi) || converstionStepsText.match(/horn/gi) ||

                    converstionStepsText.match(/indust/gi) || converstionStepsText.match(/loud/gi) ||
                    converstionStepsText.match(/speaker/gi) || converstionStepsText.match(/important/gi) ||
                    converstionStepsText.match(/step/gi) ||
                    converstionStepsText.match(/main/gi) || converstionStepsText.match(/take/gi) ||
                    converstionStepsText.match(/possible/gi) || converstionStepsText.match(/outcome/gi) || converstionStepsText.match(/way/gi) || converstionStepsText.match(/process/gi)

                ) {
                    await playScript("Okey. That was about section 3. Thanks.");
                    await sendSpeakingtextToBackend(recordedText);
                    conditionsDependsOnUserSpeech(8)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.Where does noise in urban areas come from?");
                    converstionSteps--;
                }
            }


        }

        console.log("converstionStepsText");
        console.log(converstionStepsText);
        converstionStepsText = "";



    }





    // text-3-sections 
    async function Test3Sec1() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            if (!userSpeakingTestNo) {
                await playScript(
                    "Hello and welcome to the IELTS speaking portion of the test. Jone is my name. & For this portion of the exam, I will serve as your examiner. We are carrying out this. Would you kindly tell me your entire name?"
                );
                setSampleAns([" Simply you can say your full name. As like my name is Jone dow.You can call me Jone"])
            } else {
                await playScript("Are you ready to take the test then?")
                setSampleAns([" Simply you can say the positive answer. As like Yes i am Ready to give the test. ", "2, Yes, I am reay.You can proceed the test"])
            }

        }
        converstionSteps++;
        if (converstionStepsText != '') {
            if (!userSpeakingTestNo) {
                if (converstionSteps == 1) {
                    await playScript(
                        "I'll start your exam now. What's your full name, please??"
                    );
                } else if (converstionSteps == 2) {
                    if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am Repeatin , what's your name?");
                        converstionSteps--;
                    }
                    else if (converstionStepsText.match("name") || converstionStepsText.match("call")) {
                        if (converstionStepsText.match("call")) {
                            await playScript("So, for this section. I'm going to ask some general questions. Where do you live?");
                            setSampleAns([" Simply you can say your area/ or place where you are live in.As like I am living in Dhaka,Bangladesh", "2, I live in kolkata,India"])
                            localStorage.setItem("SpeakingTestNo", testNo);
                            conditionsDependsOnUserSpeech(0)
                        } else {
                            await playScript("Alright. What can I call you?");
                            converstionSteps--;
                        }
                    }
                    else {
                        await playScript("Alright, what's your name?");
                        converstionSteps--;
                    }

                } else if (converstionSteps == 3) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError("Where do you live?");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am Repeatin ,Where do you live?");
                        converstionSteps--;
                    }
                    else if (converstionStepsText.match(/live/gi) || converstionStepsText.match(/leaving/gi) ||
                        converstionStepsText.match(/in/gi) || converstionStepsText.match(/at/gi) ||
                        converstionStepsText.match(/from/gi) || converstionStepsText.match(/i am living/gi)) {
                        await playScript("Okay. Let's talk about family members. How many menbers are in your family?");
                        setSampleAns([" You can simply say that how many member exist into your family. like I have 4 members in my family & i am younger than all", "2, We have 2 or 3 members into our family", "3, We are a join family that why we have a lot of members into our family nearly 20 prople"])
                        conditionsDependsOnUserSpeech(1)
                    } else {
                        await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Where do you live? ");
                        converstionSteps--;
                    }

                }
            } else {
                if (converstionSteps == 1) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError("What is your full name?");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am Repeatin ,What is your full name?");
                        converstionSteps--;
                    }
                    else {
                        await playScript("So, do you like sports?");
                        setSampleAns([" Yes, I do. I really enjoy sports, especially football, which I like to play with my friends at the weekends. ", "2, Yes, I love sports because they’re a lot of fun and playing sports is very important for my health. I find that sports are also a great way to spend time with my friends."])
                    }
                }
                if (converstionSteps == 2) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError("do you like sports?");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am Repeatin. do you like sports?");
                        converstionSteps--;
                    }
                    else {
                        await playScript("Okay. So, do you work or study?");
                        setSampleAns(["  I work. I’ve been working as a freelance web designer for two years now. ", "2, I’m working in a specialist medical field that deals with diseases related to aging. My employer is a large multinational company. ", "3,  I study. I’m still in high school, in my final year. So I’m studying for my final exams now. "])
                        conditionsDependsOnUserSpeech(0)
                    }
                }
                if (converstionSteps == 3) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError("do you work or study?");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am Repeatin ,do you work or study?");
                        converstionSteps--;
                    }
                    else {
                        await playScript("Okay. Let's talk about family members. How many menbers are in your family?");
                        setSampleAns([" You can simply say that how many member exist into your family. like I have 4 members in my family & i am younger than all", "2, We have 2 or 3 members into our family", "3, We are a join family that why we have a lot of members into our family nearly 20 prople"])
                        conditionsDependsOnUserSpeech(1)
                    }
                }
            }


            if (converstionSteps == 4) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" How many menbers are in your family?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am Repeatin , How many menbers are in your family?");
                    converstionSteps--;
                }
                else if (converstionStepsText.match(/one/gi) || converstionStepsText.match(/two/gi) ||
                    converstionStepsText.match(/three/gi) || converstionStepsText.match(/four/gi) ||
                    converstionStepsText.match(/five/gi) || converstionStepsText.match(/six/gi) ||
                    converstionStepsText.match(/seven/gi) || converstionStepsText.match(/eight/gi) ||
                    converstionStepsText.match(/nine/gi) || converstionStepsText.match(/ten/gi) ||
                    converstionStepsText.match(/many/gi) || converstionStepsText.match(/menber/gi) ||
                    converstionStepsText.match(/family/gi) || converstionStepsText.match(/my/gi)
                ) {
                    await playScript("Okay. Do you have siblings?");
                    setSampleAns([" Yes, i have 2 siblings.", "2, No, i don't have any siblings i am alone of my parents."])
                    conditionsDependsOnUserSpeech(2)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  How many menbers are in your family?");
                    converstionSteps--;
                }

            } else if (converstionSteps == 5) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Do you have siblings?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am Repeatin ,Do you have siblings?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/actually/gi) || converstionStepsText.match(/alone/gi) ||
                    converstionStepsText.match(/family/gi) || converstionStepsText.match(/parents/gi) ||
                    converstionStepsText.match(/one/gi) || converstionStepsText.match(/two/gi) ||
                    converstionStepsText.match(/three/gi) || converstionStepsText.match(/four/gi) ||
                    converstionStepsText.match(/five/gi) || converstionStepsText.match(/six/gi) ||
                    converstionStepsText.match(/have/gi) || converstionStepsText.match(/elder/gi) ||
                    converstionStepsText.match(/big/gi) || converstionStepsText.match(/younger/gi) ||
                    converstionStepsText.match(/little/gi) || converstionStepsText.match(/small/gi)
                ) {
                    await playScript("Okay. Which time is best for you and your family?");
                    setSampleAns([' Spending time with family strengthens family ties. Also, families who enjoy group activities will develop strong relationships and handle stressful situations with ease.In this busy day and age, it is a luxury for parents to spend time with their children. Making time for the family will allow you to teach your kids valuable life lessons like kindness and fairness.', "2, When everyone sit together that moments is on of the best moment for me."])
                    conditionsDependsOnUserSpeech(3)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you have siblings?");
                    converstionSteps--;
                }

            } else if (converstionSteps == 6) {

                if (converstionStepsText.length < 10) {
                    await smallTalkError("Which time is best for you and your family?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am Repeatin. Which time is best for you and your family?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/when/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/basically/gi) || converstionStepsText.match(/together/gi) ||
                    converstionStepsText.match(/time/gi) || converstionStepsText.match(/best/gi) ||
                    converstionStepsText.match(/family/gi) || converstionStepsText.match(/me/gi) ||
                    converstionStepsText.match(/dinner/gi) || converstionStepsText.match(/show/gi) ||
                    converstionStepsText.match(/at/gi) || converstionStepsText.match(/in/gi) ||
                    converstionStepsText.match(/beautiful/gi) || converstionStepsText.match(/make/gi) ||
                    converstionStepsText.match(/moment/gi)
                ) {
                    await playScript("Okay. Do you look like anyone in your family?");
                    setSampleAns([' Yes , maybe i am some kind of similar of my father', "2, No, maybe i am defferent from every one from my family", "3, Yes, mabe be i am look like my elder type."])
                    conditionsDependsOnUserSpeech(4)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Which time is best for you and your family?");
                    converstionSteps--;
                }

            } else if (converstionSteps == 7) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Do you look like anyone in your family?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am Repeatin ,Do you look like anyone in your family?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/actually/gi) || converstionStepsText.match(/alone/gi) ||
                    converstionStepsText.match(/family/gi) || converstionStepsText.match(/parents/gi) ||
                    converstionStepsText.match(/Do/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/like/gi) || converstionStepsText.match(/look/gi) ||
                    converstionStepsText.match(/actually/gi) || converstionStepsText.match(/anyone/gi) ||
                    converstionStepsText.match(/family/gi) || converstionStepsText.match(/my/gi)
                ) {
                    await playScript("Okay. Who is the closest to you in your family?");
                    setSampleAns([" My father is so much closer to me", "2, My mother is so much closer to me more than other members my my family", "3, My sister or Brother is more closer with me"])
                    conditionsDependsOnUserSpeech(5)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you look like anyone in your family?");
                    converstionSteps--;
                }
            } else if (converstionSteps == 8) {

                if (converstionStepsText.length < 10) {
                    await smallTalkError("Who is the closest to you in your family?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am Repeatin. Who is the closest to you in your family?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/close/gi) ||
                    converstionStepsText.match(/would/gi) || converstionStepsText.match(/alone/gi) ||
                    converstionStepsText.match(/time/gi) || converstionStepsText.match(/close/gi) ||
                    converstionStepsText.match(/basically/gi) || converstionStepsText.match(/prefer/gi) ||
                    converstionStepsText.match(/while/gi) || converstionStepsText.match(/According/gi) ||
                    converstionStepsText.match(/my/gi) || converstionStepsText.match(/family/gi) ||
                    converstionStepsText.match(/anyone/gi) || converstionStepsText.match(/everyone/gi) ||
                    converstionStepsText.match(/all/gi) || converstionStepsText.match(/parent/gi) ||
                    converstionStepsText.match(/father/gi) || converstionStepsText.match(/mother/gi) ||
                    converstionStepsText.match(/sister/gi) || converstionStepsText.match(/brother/gi) ||
                    converstionStepsText.match(/grand/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/similar /gi)

                ) {
                    await playScript("Okay. That was about section 1. Thanks.");
                    conditionsDependsOnUserSpeech(6)
                    await sendSpeakingtextToBackend(recordedText);
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Who is the closest to you in your family?");
                    converstionSteps--;
                }
            }


        }

        console.log("converstionStepsText");
        console.log(converstionStepsText);
        converstionStepsText = "";
    }

    async function Test3Sec2() {

    }

    async function Test3Sec3() {

        if (converstionSteps == 0 && converstionStepsText == '') {
            await playScript(
                "Welcome to the third section. Let's talk about good news. So, are you ready?"
            );
            setSampleAns([" Simply you can say the positive answer. As like Yes i am Ready to give the test. ", "2, Yes, I am reay.You can proceed the test"])
        }
        converstionSteps++;
        if (converstionStepsText != '') {
            if (converstionSteps == 1) {
                await playScript(
                    "Let me begin your test. Can you tell me your full name again?"
                );
                setSampleAns([" Simply you can say your full name. As like my name is Jone dow.You can call me Jone"])
            }

            else if (converstionSteps == 2) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("are you ready?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am Repeatin ,are you ready?");
                    converstionSteps--;
                }
                else {
                    await playScript("So, how do people share good news?");
                    setSampleAns([" People share good news in many ways. They just tell each other face to face. They also use social media like Facebook, Twitter and Whatsapp. They also call the other person and tell about any good news. They write e-mails also for this purpose."])
                    conditionsDependsOnUserSpeech(0)
                }
            }
            else if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("How do people share good news?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am Repeatin ,How do people share good news?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/people/gi) || converstionStepsText.match(/share/gi) ||
                    converstionStepsText.match(/good/gi) || converstionStepsText.match(/new/gi) ||
                    converstionStepsText.match(/way/gi) || converstionStepsText.match(/face/gi) ||
                    converstionStepsText.match(/front/gi) || converstionStepsText.match(/social/gi) ||
                    converstionStepsText.match(/use/gi) || converstionStepsText.match(/Facebook/gi) ||
                    converstionStepsText.match(/media/gi) || converstionStepsText.match(/write/gi) ||
                    converstionStepsText.match(/do/gi) || converstionStepsText.match(/make/gi) ||
                    converstionStepsText.match(/generally/gi) || converstionStepsText.match(/basically/gi) ||
                    converstionStepsText.match(/purpose/gi) || converstionStepsText.match(/can/gi)
                ) {
                    await playScript("Okay. What kind of good news do people often share in the community?");
                    setSampleAns(["The good news is that they share in the community. People often share the news of getting a job or getting an excellent college to study in the community because it is an outstanding achievement if a student gets a job in an urban city area with a very nice salary and a student receives admission to a very high-profile college so he can pursue an excellent job. So, it is fantastic news that people share with the community."])
                    conditionsDependsOnUserSpeech(1)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. How do people share good news?");
                    converstionSteps--;
                }
            }
            else if (converstionSteps == 4) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("What kind of good news do people often share in the community?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am Repeatin. What kind of good news do people often share in the community?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/kind/gi) || converstionStepsText.match(/good/gi) ||
                    converstionStepsText.match(/new/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/people/gi) || converstionStepsText.match(/often/gi) ||
                    converstionStepsText.match(/share/gi) || converstionStepsText.match(/community/gi) ||
                    converstionStepsText.match(/job/gi) || converstionStepsText.match(/birthday/gi) ||
                    converstionStepsText.match(/many/gi) || converstionStepsText.match(/excellent/gi) ||

                    converstionStepsText.match(/achievement/gi) || converstionStepsText.match(/receive/gi) ||
                    converstionStepsText.match(/update/gi) || converstionStepsText.match(/incress/gi) ||
                    converstionStepsText.match(/admission/gi) || converstionStepsText.match(/profile/gi)
                ) {
                    await playScript("So, when do people share good news?");
                    setSampleAns([" People share good news when they want their near and dear ones to know what good has  happened to them. For example, if anyone becomes a parent, he wants to share this news with everyone. If anyone buys a new home or a new car then he wants his friends and relatives to know about that. If anybody clears an exam or gets a new job, he wants others to know about it."])
                    conditionsDependsOnUserSpeech(2)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. What kind of good news do people often share in the community?");
                    converstionSteps--;
                }
            }


            else if (converstionSteps == 5) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("when do people share good news?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am Repeatin ,when do people share good news?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/do/gi) || converstionStepsText.match(/can/gi) ||
                    converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                    converstionStepsText.match(/people/gi) || converstionStepsText.match(/share/gi) ||
                    converstionStepsText.match(/good/gi) || converstionStepsText.match(/new/gi) ||
                    converstionStepsText.match(/they/gi) || converstionStepsText.match(/happen/gi) ||
                    converstionStepsText.match(/example/gi) || converstionStepsText.match(/anyone/gi)
                ) {
                    await playScript("OK, what kinds of good news have you received before?");
                    setSampleAns([' I have received many kinds of good news. I received the good news that my cousin was blessed with a baby girl. I also received the good news that my cousin had topped in his 8th grade exam'])
                    conditionsDependsOnUserSpeech(3)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. when do people share good news?");
                    converstionSteps--;
                }
            }

            else if (converstionSteps == 6) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("what kinds of good news have you received before?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am Repeatin ,what kinds of good news have you received before?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/remember/gi) ||
                    converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                    converstionStepsText.match(/actually/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/kind/gi) || converstionStepsText.match(/good/gi) ||
                    converstionStepsText.match(/new/gi) || converstionStepsText.match(/receive/gi) ||
                    converstionStepsText.match(/before/gi) || converstionStepsText.match(/have/gi) ||
                    converstionStepsText.match(/many/gi) || converstionStepsText.match(/baby/gi) ||
                    converstionStepsText.match(/child/gi)
                ) {
                    await playScript("OK, what kind of good news do people like to hear?");
                    setSampleAns([" People like to hear good news about any achievements of their friends and relatives, any celebrity  visiting their town or city, any festival celebration and any new movie released of their favourite actor or actress."])
                    conditionsDependsOnUserSpeech(4)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. what kinds of good news have you received before?");
                    converstionSteps--;
                }
            }

            else if (converstionSteps == 7) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("what kind of good news do people like to hear?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am Repeatin ,what kind of good news do people like to hear?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                    converstionStepsText.match(/actually/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/kind/gi) || converstionStepsText.match(/good/gi) ||
                    converstionStepsText.match(/news/gi) || converstionStepsText.match(/receive/gi) ||
                    converstionStepsText.match(/people/gi) || converstionStepsText.match(/like/gi) ||
                    converstionStepsText.match(/love/gi) || converstionStepsText.match(/hear/gi) ||
                    converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/about/gi) || converstionStepsText.match(/achievement/gi) ||
                    converstionStepsText.match(/social/gi) || converstionStepsText.match(/city/gi) ||
                    converstionStepsText.match(/festival/gi) ||
                    converstionStepsText.match(/celebration/gi) || converstionStepsText.match(/favourite/gi)

                ) {
                    await playScript("OK, why do people share news on social media?");
                    setSampleAns([" Social media is a quick and time-saving platform for sharing news. People just have to post one  message and it reaches a very wide audience instantaneously."])
                    conditionsDependsOnUserSpeech(5)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. what kind of good news do people like to hear?");
                    converstionSteps--;
                }
            }
            else if (converstionSteps == 8) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("why do people share news on social media?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am Repeating. why do people share news on social media?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/share/gi) ||
                    converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                    converstionStepsText.match(/actually/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/kind/gi) || converstionStepsText.match(/good/gi) ||
                    converstionStepsText.match(/news/gi) || converstionStepsText.match(/receive/gi) ||
                    converstionStepsText.match(/people/gi) || converstionStepsText.match(/like/gi) ||
                    converstionStepsText.match(/love/gi) || converstionStepsText.match(/hear/gi) ||
                    converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/social/gi) || converstionStepsText.match(/media/gi) ||
                    converstionStepsText.match(/quick/gi) || converstionStepsText.match(/platform/gi) ||
                    converstionStepsText.match(/time/gi) ||
                    converstionStepsText.match(/post/gi) || converstionStepsText.match(/message/gi) ||
                    converstionStepsText.match(/reache/gi) || converstionStepsText.match(/wide/gi) ||
                    converstionStepsText.match(/can/gi) || converstionStepsText.match(/could/gi) ||
                    converstionStepsText.match(/make/gi) || converstionStepsText.match(/would/gi)
                ) {
                    await playScript("Okay. That was about section 3. Thanks.");
                    conditionsDependsOnUserSpeech(6)
                    await sendSpeakingtextToBackend(recordedText);
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. why do people share news on social media?");
                    converstionSteps--;
                }



            }

        }

        console.log("converstionStepsText");
        console.log(converstionStepsText);
        converstionStepsText = "";
    }


    // test-4-Sections

    async function Test4Sec1() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            if (!userSpeakingTestNo) {
                await playScript(
                    "Hello and welcome to the IELTS speaking portion of the test. Jone is my name. & For this portion of the exam, I will serve as your examiner. We are carrying out this. Would you kindly tell me your entire name?"
                );
                setSampleAns([" Simply you can say your full name. As like my name is Jone dow.You can call me Jone"])
            } else {
                await playScript("Are you ready to take the test then?")
                setSampleAns([" Simply you can say the positive answer. As like Yes i am Ready to give the test. ", "2, Yes, I am reay.You can proceed the test"])

            }

        }


        converstionSteps++;
        if (converstionStepsText != '') {


            if (!userSpeakingTestNo) {
                if (converstionSteps == 1) {
                    await playScript(
                        "I'll start your exam now. What's your full name, please?"
                    );
                } else if (converstionSteps == 2) {
                    if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am Repeatin ,What's your full name, please?");
                        converstionSteps--;
                    }
                    else if (converstionStepsText.match("name") || converstionStepsText.match("call")) {
                        if (converstionStepsText.match("call")) {
                            await playScript("So, for this section. I'm going to ask some general questions. Where do you live?");
                            setSampleAns([" Simply you can say your area/ or place where you are live in.As like I am living in Dhaka,Bangladesh", "2, I live in kolkata,India"])
                            localStorage.setItem("SpeakingTestNo", testNo);
                            conditionsDependsOnUserSpeech(0)
                        } else {
                            await playScript("Alright. What can I call you?");
                            setSampleAns([" You can simply say your name. As like I am Mr. Jone Dow. You can call me Jone"])
                            converstionSteps--;
                        }
                    }
                    else {
                        await playScript("Alright. what's your name?");
                        setSampleAns([" Hello i am Jone dow. You can call me dow"]);
                        converstionSteps--;
                    }

                } else if (converstionSteps == 3) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError("Where do you live? ");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am Repeatin. Where do you live? ");
                        converstionSteps--;
                    }
                    else if (converstionStepsText.match(/live/gi) || converstionStepsText.match(/leaving/gi) ||
                        converstionStepsText.match(/in/gi) || converstionStepsText.match(/at/gi) ||
                        converstionStepsText.match(/from/gi) || converstionStepsText.match(/i am living/gi)) {
                        await playScript("Okay. Let's talk about reading books. What is your favorite book of all time?");
                        setSampleAns([" This is a subjective question, and there is no one correct answer. People have different tastes in books, and their favorite book may change over time. Some people prefer recent bestsellers by popular authors, while others prefer classics or less well-known books. For example, one person's favorite book is the science-fiction classic The Mote in Gods Eye by Larry Niven and Jerry Pournelle1. Another person's favorite books include The Secret History by Donna Tartt, The Bell Jar by Sylvia Plath, For Whom the Bell Tolls by Ernest Hemingway, and The Gargoyle by Andrew Davidson"])
                        conditionsDependsOnUserSpeech(1)
                    } else {
                        await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Where do you live? ");
                        converstionSteps--;
                    }

                }
            } else {
                if (converstionSteps == 1) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError("What is your full name please? ");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am Repeatin. What is your full name please");
                        converstionSteps--;
                    }
                    else {
                        await playScript("Okay. Are you happy today?");
                        setSampleAns(["Yes, I am felling well today", "Umm, yeah i am good.Just felling kind of nervous"])
                    }
                }
                if (converstionSteps == 2) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError("Are you happy today? ");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am Repeatin. Are you happy today?");
                        converstionSteps--;
                    }
                    else {
                        await playScript("Okay. So, what do you do for fun?");
                        setSampleAns([" Reading, learning, documentaries, podcasts, etc.", "2, “Travel is my passion. I’ve been to 21 countries so far, and I’m not done yet! I love learning and adapting to new cultures, finding commonalities between people everywhere, and just trying a bunch of new foods. There’s a real magic to communication in that so much of it is nonverbal, and I’ve learned to pick up on body language and read the room, even if I can’t always read the menu.”"])
                        conditionsDependsOnUserSpeech(0)
                    }
                }
                if (converstionSteps == 3) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError("what do you do for fun? ");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am Repeatin. what do you do for fun?");
                        converstionSteps--;
                    }
                    else {
                        await playScript("Okay. Let's talk about reading books. What is your favorite book of all time?");
                        setSampleAns([" This is a subjective question, and there is no one correct answer. People have different tastes in books, and their favorite book may change over time. Some people prefer recent bestsellers by popular authors, while others prefer classics or less well-known books. For example, one person's favorite book is the science-fiction classic The Mote in Gods Eye by Larry Niven and Jerry Pournelle1. Another person's favorite books include The Secret History by Donna Tartt, The Bell Jar by Sylvia Plath, For Whom the Bell Tolls by Ernest Hemingway, and The Gargoyle by Andrew Davidson"])
                        conditionsDependsOnUserSpeech(1)
                    }
                }
            }
            if (converstionSteps == 4) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("What is your favorite book of all time?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am Repeatin. What is your favorite book of all time?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/me/gi) || converstionStepsText.match(/my/gi) ||
                    converstionStepsText.match(/favorite/gi) || converstionStepsText.match(/favourite/gi) ||
                    converstionStepsText.match(/book/gi) || converstionStepsText.match(/time/gi) ||
                    converstionStepsText.match(/difficult /gi) || converstionStepsText.match(/read/gi) ||
                    converstionStepsText.match(/all/gi) || converstionStepsText.match(/are/gi) ||
                    converstionStepsText.match(/for/gi)

                ) {
                    await playScript("Okay. What is your favorite place to read?");
                    setSampleAns([" Home is where the books are, right? There’s nothing better than getting into bed after a long day and snugging up with a boOkay. Pros: can be as comfy as you want with instant access to your own books. Cons: a roommate who needs to get up for an 8 a.m. class which forces you to read under the covers with a flashlight like you’re eight years old. So my search for the perfect place to read continues. I might be a bit cynical, but I have actually given up reading during class. (I’ve been told it looks suspicious to have a novel hidden in your accounting textbook"])
                    conditionsDependsOnUserSpeech(2)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. What is your favorite book of all time?");
                    converstionSteps--;
                }


            } else if (converstionSteps == 5) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("What is your favorite place to read?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am Repeatin. What is your favorite place to read?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/have/gi) ||
                    converstionStepsText.match(/no/gi) || converstionStepsText.match(/home/gi) || converstionStepsText.match(/room/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/actually/gi) ||
                    converstionStepsText.match(/generally/gi) || converstionStepsText.match(/special/gi) ||
                    converstionStepsText.match(/favorite/gi) || converstionStepsText.match(/place/gi) ||
                    converstionStepsText.match(/read/gi) || converstionStepsText.match(/spot /gi) ||
                    converstionStepsText.match(/neighborhood/gi) || converstionStepsText.match(/garden/gi) ||
                    converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                    converstionStepsText.match(/would/gi) || converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/make/gi) || converstionStepsText.match(/anywhere/gi) ||
                    converstionStepsText.match(/every/gi) || converstionStepsText.match(/librar/gi)
                ) {
                    await playScript("Alright. What makes you love to read  books?");
                    setSampleAns([" Learning, gaining knowledge, and discovering information1", "2 , Escaping reality, becoming immersed in another world, and the enjoyment they get from using their imaginations"])
                    conditionsDependsOnUserSpeech(3)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. What is your favorite place to read?");
                    converstionSteps--;
                }


            } else if (converstionSteps == 6) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("What makes you love to read  books?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am Repeatin ,What makes you love to read  books?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/good/gi) ||
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/make/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/live/gi) || converstionStepsText.match(/me/gi) ||
                    converstionStepsText.match(/cost/gi) || converstionStepsText.match(/love/gi) ||
                    converstionStepsText.match(/Safety/gi) || converstionStepsText.match(/book/gi) ||
                    converstionStepsText.match(/like/gi) || converstionStepsText.match(/adventure/gi) ||
                    converstionStepsText.match(/Entertainment/gi) || converstionStepsText.match(/emotions/gi) ||
                    converstionStepsText.match(/Imagination/gi) || converstionStepsText.match(/knowledgeable/gi) ||
                    converstionStepsText.match(/Identity/gi) ||
                    converstionStepsText.match(/can/gi) || converstionStepsText.match(/would/gi) ||
                    converstionStepsText.match(/reality/gi) || converstionStepsText.match(/Smell/gi) ||
                    converstionStepsText.match(/Magic/gi) ||
                    converstionStepsText.match(/teach/gi) || converstionStepsText.match(/feel/gi)
                ) {
                    await playScript("Okay. Did anyone read to you when you were a kid?");
                    setSampleAns([" Yes, My parents read me when i was kid.", "No, there has no one ot read me when i was kid"])
                    conditionsDependsOnUserSpeech(4)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  What makes you love to read  books?");
                    converstionSteps--;
                }


            } else if (converstionSteps == 7) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Did anyone read to you when you were a kid?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am Repeatin ,Did anyone read to you when you were a kid?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/actually/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                    converstionStepsText.match(/could/gi) || converstionStepsText.match(/anyone/gi) ||
                    converstionStepsText.match(/my/gi) || converstionStepsText.match(/mother/gi) ||
                    converstionStepsText.match(/sister/gi) || converstionStepsText.match(/brother/gi) ||
                    converstionStepsText.match(/teacher/gi) || converstionStepsText.match(/father/gi) ||
                    converstionStepsText.match(/when/gi) || converstionStepsText.match(/kid/gi) ||
                    converstionStepsText.match(/child/gi) ||
                    converstionStepsText.match(/little/gi) || converstionStepsText.match(/grand/gi) ||
                    converstionStepsText.match(/knew/gi) || converstionStepsText.match(/perhap/gi) ||
                    converstionStepsText.match(/story/gi) || converstionStepsText.match(/comic/gi) ||
                    converstionStepsText.match(/read/gi) || converstionStepsText.match(/listen/gi) ||
                    converstionStepsText.match(/many/gi) ||
                    converstionStepsText.match(/few/gi) || converstionStepsText.match(/one/gi)
                ) {
                    await playScript("Okay. Do you prefer reading physical books?");
                    setSampleAns([" Yes, I will. Ten years ago, I would have answered otherwise, but as of today, I prefer e-books over traditional books. I have changed my mind because of three main reasons: availability, ecology, and content.", "2, Digital for sure. Physical books are a hassle - lighting, folding, the weight can also be an issue if the book is too large. It sounds superfluous, but I went from reading a book every few months to reading two books a month when I got my Kindle. It was a game changer for me.", "3, I prefer physical, but these days I buy digital. I had like 1000 books at one point and I was struggling to find space for them. When I find a book I own on a deep sale on digital, I buy it and give the physical version to a charity shop, so my collection is slowly thinning."])
                    conditionsDependsOnUserSpeech(5)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Did anyone read to you when you were a kid?");
                    converstionSteps--;
                }


            } else if (converstionSteps == 8) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Do you prefer reading physical books?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am Repeatin ,Do you prefer reading physical books?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/because/gi) ||
                    converstionStepsText.match(/prefer/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                    converstionStepsText.match(/read/gi) || converstionStepsText.match(/will/gi) ||
                    converstionStepsText.match(/should/gi) || converstionStepsText.match(/physical/gi) ||
                    converstionStepsText.match(/would/gi) || converstionStepsText.match(/book/gi) ||
                    converstionStepsText.match(/study/gi) || converstionStepsText.match(/time/gi) ||
                    converstionStepsText.match(/comfort/gi) || converstionStepsText.match(/respondent/gi) ||
                    converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/want/gi) || converstionStepsText.match(/carry/gi) ||
                    converstionStepsText.match(/become/gi) || converstionStepsText.match(/person/gi) ||
                    converstionStepsText.match(/better/gi) || converstionStepsText.match(/good/gi) ||
                    converstionStepsText.match(/bad/gi) || converstionStepsText.match(/positive/gi) ||
                    converstionStepsText.match(/negative/gi) ||
                    converstionStepsText.match(/retain/gi) || converstionStepsText.match(/librarie/gi) ||
                    converstionStepsText.match(/appreciate/gi) || converstionStepsText.match(/done/gi)

                ) {
                    await playScript("Okay. Who is your favorite author?");
                    setSampleAns([" For me, there are several writers I appreciate reading (it varies depending on my mood).Who is your favorite writer?C.S. Lewis is one of my favorite writers of all time.When I need my heart to be rejuvenated by simple themes of beauty and truth, I read John Eldredge.", "2, I read the Bible — often an epistle of Paul, the Gospel of John, or the Psalms. & they all are my favorite authors"])
                    conditionsDependsOnUserSpeech(6)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you prefer reading physical books?");
                    converstionSteps--;
                }



            } else if (converstionSteps == 9) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Who is your favorite author?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am Repeatin ,Who is your favorite author?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/author/gi) || converstionStepsText.match(/because/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                    converstionStepsText.match(/favorite/gi) || converstionStepsText.match(/my/gi) ||
                    converstionStepsText.match(/he/gi) || converstionStepsText.match(/she/gi) ||
                    converstionStepsText.match(/both/gi) || converstionStepsText.match(/prefer/gi) ||
                    converstionStepsText.match(/would/gi) || converstionStepsText.match(/they/gi) ||
                    converstionStepsText.match(/recent/gi) || converstionStepsText.match(/day/gi) ||
                    converstionStepsText.match(/effect/gi) ||
                    converstionStepsText.match(/read/gi) || converstionStepsText.match(/all/gi) ||
                    converstionStepsText.match(/book/gi)
                ) {
                    await playScript("So, what living author would you love to meet?");
                    setSampleAns([" I would like to meet with Stephen King: An American author, King is best known for his horror and supernatural fiction. He has published over 60 novels and has sold more than 350 million copies of his books worldwide. He has won numerous awards for his work, including the Bram Stoker Award, World Fantasy Award, and the National Medal of Arts3."])
                    conditionsDependsOnUserSpeech(7)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Who is your favorite author?");
                    converstionSteps--;
                }

            } else if (converstionSteps == 10) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("what living author would you love to meet?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating , what living author would you love to meet?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/basically/gi) ||
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/because/gi) ||
                    converstionStepsText.match(/no/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                    converstionStepsText.match(/actually/gi) || converstionStepsText.match(/want/gi) ||
                    converstionStepsText.match(/living/gi) || converstionStepsText.match(/author/gi) ||
                    converstionStepsText.match(/go/gi) || converstionStepsText.match(/have/gi) ||
                    converstionStepsText.match(/would/gi) || converstionStepsText.match(/meet/gi) ||
                    converstionStepsText.match(/he/gi) || converstionStepsText.match(/she/gi) ||
                    converstionStepsText.match(/read/gi) ||
                    converstionStepsText.match(/book/gi) || converstionStepsText.match(/specially/gi) ||
                    converstionStepsText.match(/me/gi) || converstionStepsText.match(/really/gi) ||
                    converstionStepsText.match(/chance/gi) || converstionStepsText.match(/could/gi) ||
                    converstionStepsText.match(/curious/gi) || converstionStepsText.match(/alive/gi) ||
                    converstionStepsText.match(/favorite/gi) || converstionStepsText.match(/favourite/gi)
                ) {
                    await playScript("Okay. That was about section 1. Thanks.");
                    conditionsDependsOnUserSpeech(8)
                    await sendSpeakingtextToBackend(recordedText);
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. what living author would you love to meet?");
                    converstionSteps--;
                }
            }

        }

        console.log("converstionStepsText");
        console.log(converstionStepsText);
        converstionStepsText = "";
    }

    async function Test4Sec2() {

    }

    async function Test4Sec3() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            await playScript(
                " My name is Adrian & I will be your examiner for this part of the test,  part three.  Are you comfortable?"
            );
            setSampleAns([" Yes, I am comfortable. You can procced now please"])
        }
        converstionSteps++;
        if (converstionStepsText != '') {

            if (converstionSteps == 1) {
                await playScript(
                    "Sorry.... Can you repeat that please"
                );
                setSampleAns([" You can simply repeated your previous answer."])
            } else if (converstionSteps == 2) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Are you comfortabel?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating, Are you comfortabel?");
                    converstionSteps--;
                }
                else {
                    await playScript("Let's talk about success or achievement. How do you measure a person’s success?");
                    setSampleAns([" It is very difficult to measure success. Success is a very subjective term. Different people give different meaning to success. For some earning a lot of money means success. For others, leading alife in which they can help others, means success. For a student, passing the exams with flying colours, means success. So measuring success is not easy."])
                    conditionsDependsOnUserSpeech(0)
                }
            }
            else if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("How do you measure a person’s success?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating, How do you measure a person’s success?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/we/gi) ||
                    converstionStepsText.match(/can/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/measure/gi) || converstionStepsText.match(/person/gi) ||
                    converstionStepsText.match(/man/gi) || converstionStepsText.match(/success/gi) ||
                    converstionStepsText.match(/difficult/gi) || converstionStepsText.match(/term/gi) ||
                    converstionStepsText.match(/no/gi) || converstionStepsText.match(/different/gi) ||
                    converstionStepsText.match(/money/gi) || converstionStepsText.match(/huge/gi) ||
                    converstionStepsText.match(/lot/gi) || converstionStepsText.match(/few/gi) ||
                    converstionStepsText.match(/lead/gi) || converstionStepsText.match(/pass/gi) ||
                    converstionStepsText.match(/easy/gi) || converstionStepsText.match(/not/gi) ||
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/measuring/gi)

                ) {
                    await playScript("So, do you think the way people gain success has changed?");
                    setSampleAns([" Yes, definitely, the way people gain success has changed. Earlier, people did a lot of hard work success was limited to a small area. Only politicians and film stars and sportsmen who were in the news or national TV were successful over a wider area. But, nowadays, because of the reality shows, any person with some talent can become successful overnight. People can get worldwide success through the Internet, through YouTube and other such networks. Today, people know of  Indian successful businessmen, all over the world, because the world has shrunk. "])
                    conditionsDependsOnUserSpeech(1)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. How do you measure a person’s success?");
                    converstionSteps--;
                }




            }
            else if (converstionSteps == 4) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("ok. Do you think the way people gain success has changed?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating, Do you think the way people gain success has changed?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/way/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/common/gi) || converstionStepsText.match(/most/gi) ||
                    converstionStepsText.match(/people/gi) || converstionStepsText.match(/gain/gi) ||
                    converstionStepsText.match(/all/gi) || converstionStepsText.match(/situation/gi) ||
                    converstionStepsText.match(/belive/gi) || converstionStepsText.match(/because/gi) ||
                    converstionStepsText.match(/like/gi) || converstionStepsText.match(/success/gi) ||
                    converstionStepsText.match(/have/gi) || converstionStepsText.match(/change/gi) ||
                    converstionStepsText.match(/definite/gi) || converstionStepsText.match(/Earl/gi) ||
                    converstionStepsText.match(/lot/gi) || converstionStepsText.match(/work/gi) ||
                    converstionStepsText.match(/small/gi) || converstionStepsText.match(/wider/gi) ||
                    converstionStepsText.match(/day/gi) || converstionStepsText.match(/show/gi) ||
                    converstionStepsText.match(/talent/gi) || converstionStepsText.match(/Internet/gi) ||
                    converstionStepsText.match(/business/gi) || converstionStepsText.match(/world/gi) ||
                    converstionStepsText.match(/has/gi) || converstionStepsText.match(/shrunk/gi)
                ) {
                    await playScript("Okay. How do you define success?");
                    setSampleAns([" It is very difficult to define success. Success is a very subjective term. Different people give different meaning to success. For some earning a lot of money means success. For others, leading a life in which they can help others, means success. For a student, passing the exams with flying colours, means success. So defining success is not easy."])
                    conditionsDependsOnUserSpeech(2)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Do you think the way people gain success has changed?");
                    converstionSteps--;
                }



            }
            else if (converstionSteps == 5) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("How do you define success?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. How do you define success?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/control/gi) ||
                    converstionStepsText.match(/can/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/could/gi) || converstionStepsText.match(/will/gi) ||
                    converstionStepsText.match(/would/gi) || converstionStepsText.match(/define/gi) ||
                    converstionStepsText.match(/success/gi) || converstionStepsText.match(/example/gi) ||
                    converstionStepsText.match(/belive/gi) || converstionStepsText.match(/because/gi) ||
                    converstionStepsText.match(/difficult/gi) || converstionStepsText.match(/term/gi) ||
                    converstionStepsText.match(/Different/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/life/gi) || converstionStepsText.match(/mean/gi) ||
                    converstionStepsText.match(/lead/gi) || converstionStepsText.match(/suddenly/gi) ||
                    converstionStepsText.match(/change/gi) || converstionStepsText.match(/easy/gi)
                ) {
                    await playScript("So. How do you reward successful people?");
                    setSampleAns([" We can reward successful people by acknowledging their work. Some awards can be given. Some monetary benefits can be given. Sometimes giving promotions is a good way to reward successful people."]);
                    conditionsDependsOnUserSpeech(3)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  How do you define success?");
                    converstionSteps--;
                }


            } else if (converstionSteps == 6) {

                if (converstionStepsText.length < 10) {
                    await smallTalkError("How do you reward successful people?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,How do you reward successful people?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/reward/gi) || converstionStepsText.match(/because/gi) ||
                    converstionStepsText.match(/most/gi) || converstionStepsText.match(/will/gi) ||
                    converstionStepsText.match(/would/gi) || converstionStepsText.match(/success/gi) ||
                    converstionStepsText.match(/can/gi) || converstionStepsText.match(/knowledging/gi) ||
                    converstionStepsText.match(/could/gi) || converstionStepsText.match(/will/gi) ||
                    converstionStepsText.match(/people/gi) || converstionStepsText.match(/award/gi) ||
                    converstionStepsText.match(/benefit/gi) || converstionStepsText.match(/Sometime/gi) ||
                    converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                    converstionStepsText.match(/promotion/gi) || converstionStepsText.match(/give/gi)
                ) {
                    await playScript("Okay. What’s the most difficult thing you have ever done?");
                    setSampleAns([" I am very stage shy. I remember, in the annual science fair of my school, I had to speak on a model,which I had prepared. The model was on different types of pollution. I found it very difficult, but somehow I managed it. That was the most difficult thing I did. "])
                    conditionsDependsOnUserSpeech(4)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. How do you reward successful people?");
                    converstionSteps--;
                }


            } else if (converstionSteps == 7) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("What’s the most difficult thing you have ever done?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,What’s the most difficult thing you have ever done?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/good/gi) || converstionStepsText.match(/because/gi) ||
                    converstionStepsText.match(/most/gi) || converstionStepsText.match(/will/gi) ||
                    converstionStepsText.match(/would/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/can/gi) || converstionStepsText.match(/could/gi) ||
                    converstionStepsText.match(/Stay/gi) || converstionStepsText.match(/focus/gi) ||
                    converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                    converstionStepsText.match(/difficult/gi) || converstionStepsText.match(/thing/gi) ||
                    converstionStepsText.match(/have/gi) || converstionStepsText.match(/done/gi) ||
                    converstionStepsText.match(/shy/gi) || converstionStepsText.match(/remember/gi) ||
                    converstionStepsText.match(/annual/gi) || converstionStepsText.match(/school/gi) ||
                    converstionStepsText.match(/prepare/gi) || converstionStepsText.match(/financial/gi) ||
                    converstionStepsText.match(/type/gi) || converstionStepsText.match(/especially/gi) ||
                    converstionStepsText.match(/found/gi) || converstionStepsText.match(/did/gi)

                ) {
                    await playScript(" What qualities does a person need to have to be successful?")
                    setSampleAns([" The person should be hard working. He should have good communication skills. He should have the courage to take calculated risks. He should have a helping and caring nature."])
                    conditionsDependsOnUserSpeech(5)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  What’s the most difficult thing you have ever done?");
                    converstionSteps--;
                }




            } else if (converstionSteps == 8) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("What qualities does a person need to have to be successful?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,What qualities does a person need to have to be successful?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/good/gi) || converstionStepsText.match(/because/gi) ||
                    converstionStepsText.match(/most/gi) || converstionStepsText.match(/will/gi) ||
                    converstionStepsText.match(/would/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/sure/gi) || converstionStepsText.match(/keep/gi) ||
                    converstionStepsText.match(/Can/gi) || converstionStepsText.match(/people/gi) ||
                    converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                    converstionStepsText.match(/qualit/gi) || converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/person/gi) || converstionStepsText.match(/have/gi) ||
                    converstionStepsText.match(/success/gi) || converstionStepsText.match(/being/gi) ||
                    converstionStepsText.match(/become/gi) || converstionStepsText.match(/be/gi) ||
                    converstionStepsText.match(/should/gi) || converstionStepsText.match(/work/gi) ||
                    converstionStepsText.match(/communicat/gi) || converstionStepsText.match(/courage/gi) ||
                    converstionStepsText.match(/risk/gi) || converstionStepsText.match(/help/gi) ||
                    converstionStepsText.match(/car/gi) || converstionStepsText.match(/nature/gi)
                ) {
                    await playScript("Okay. Do you feel terrible when you fail to do something?")
                    setSampleAns([" I feel terrible, but only for a short period of time. Then, I try to learn from my failure and work even  harder to succeed the next time. "])
                    conditionsDependsOnUserSpeech(6)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. What qualities does a person need to have to be successful?");
                    converstionSteps--;
                }



            }
            else if (converstionSteps == 9) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Do you feel terrible when you fail to do something?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating, Do you feel terrible when you fail to do something?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/good/gi) || converstionStepsText.match(/because/gi) ||
                    converstionStepsText.match(/do/gi) || converstionStepsText.match(/because/gi) ||
                    converstionStepsText.match(/most/gi) || converstionStepsText.match(/will/gi) ||
                    converstionStepsText.match(/would/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/feel/gi) || converstionStepsText.match(/terrible/gi) ||
                    converstionStepsText.match(/when/gi) || converstionStepsText.match(/people/gi) ||
                    converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                    converstionStepsText.match(/Can/gi) || converstionStepsText.match(/fail/gi) ||
                    converstionStepsText.match(/something/gi) || converstionStepsText.match(/period/gi) ||
                    converstionStepsText.match(/big/gi) || converstionStepsText.match(/time/gi) ||
                    converstionStepsText.match(/possible/gi) || converstionStepsText.match(/outcome/gi) ||
                    converstionStepsText.match(/try/gi) || converstionStepsText.match(/failure/gi) ||
                    converstionStepsText.match(/harder/gi) || converstionStepsText.match(/advice/gi)
                ) {
                    await playScript("Okay. Is it important for young people to have some achievements?")
                    setSampleAns([" I think it is an interesting question, having achievement at a young age certainly helps in gaining confidence and teaches us the importance of hard work."])
                    conditionsDependsOnUserSpeech(7)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.   Do you feel terrible when you fail to do something?");
                    converstionSteps--;
                }

            }

            else if (converstionSteps == 10) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Is it important for young people to have some achievements?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating, Is it important for young people to have some achievements?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/it/gi) || converstionStepsText.match(/search/gi) ||
                    converstionStepsText.match(/avoiding/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/important/gi) || converstionStepsText.match(/because/gi) ||
                    converstionStepsText.match(/most/gi) || converstionStepsText.match(/will/gi) ||
                    converstionStepsText.match(/would/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/young/gi) ||
                    converstionStepsText.match(/people/gi) || converstionStepsText.match(/have/gi) ||
                    converstionStepsText.match(/to/gi) || converstionStepsText.match(/some/gi) ||
                    converstionStepsText.match(/achievement/gi) || converstionStepsText.match(/success/gi) ||

                    converstionStepsText.match(/interesting/gi) || converstionStepsText.match(/certain/gi) ||
                    converstionStepsText.match(/help/gi) || converstionStepsText.match(/gain/gi) ||
                    converstionStepsText.match(/confidence/gi) || converstionStepsText.match(/work/gi)
                ) {
                    await playScript("Okay. That was about section 3. Thanks.");
                    conditionsDependsOnUserSpeech(8)
                    await sendSpeakingtextToBackend(recordedText);
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Is it important for young people to have some achievements?");
                    converstionSteps--;
                }



            }

        }

        console.log("converstionStepsText");
        console.log(converstionStepsText);
        converstionStepsText = "";



    }





    //test-5 -- all sections
    async function Test5Sec1() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            if (!userSpeakingTestNo) {
                await playScript(
                    "Hello and welcome to the IELTS speaking portion of the test. Jone is my name. & For this portion of the exam, I will serve as your examiner. We are carrying out this. Would you kindly tell me your entire name?"
                );
                setSampleAns([" Simply you can say your full name. As like my name is Jone dow.You can call me Jone"])
            } else {
                await playScript("Are you ready to take the test then?");
                setSampleAns([" Simply you can say the positive answer. As like Yes i am Ready to give the test. ", "2, Yes, I am reay.You can proceed the test"])
            }

        }

        converstionSteps++;
        if (converstionStepsText != '') {

            if (!userSpeakingTestNo) {
                if (converstionSteps == 1) {
                    await playScript(
                        "I'll start your exam now. What's your full name, please?"
                    );
                    setSampleAns(["You an simply tell your full name . As like I am Mr. JOne Dow . You can call me jone."])
                } else if (converstionSteps == 2) {
                    if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating.  What's your full name, please?");
                        converstionSteps--;
                    }
                    else if (converstionStepsText.match("name") || converstionStepsText.match("call")) {
                        if (converstionStepsText.match("call")) {
                            await playScript(
                                "So, for this section. I'm going to ask some general questions. Where do you live?"
                            );
                            setSampleAns([" Simply you can say your area/ or place where you are live in.As like I am living in Dhaka,Bangladesh", "2, I live in kolkata,India"])
                            localStorage.setItem("SpeakingTestNo", testNo);
                            conditionsDependsOnUserSpeech(0)
                        } else {
                            await playScript("Alright. What can I call you?");
                            setSampleAns(["You can call me Jone or you simply tell your nickname."])
                            converstionSteps--;
                        }
                    }
                    else {
                        await playScript("Alright, what's your name?");
                        setSampleAns(["You an simply tell your full name . As like I am Mr. JOne Dow . You can call me jone."])
                        converstionSteps--;
                    }

                } else if (converstionSteps == 3) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError(" Where do you live? ");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating. Where do you live? ");
                        converstionSteps--;
                    }
                    else if (converstionStepsText.match(/live/gi) || converstionStepsText.match(/leaving/gi) ||
                        converstionStepsText.match(/in/gi) || converstionStepsText.match(/at/gi) ||
                        converstionStepsText.match(/from/gi) || converstionStepsText.match(/i am living/gi)) {
                        await playScript("Okey. Let's Talk about watching movies. So, do you like to watch movies?");
                        setSampleAns(["Definitely, I love watching films, all genres of them. I try to absorb and enjoy as many different kinds of films as I can, whether it be the blockbuster Avengers: End Game, emotional rollercoaster-like Parasite, or visual effects such as The Lion King. Film is a medium that can transport you to radically different worlds and environments. That’s why I and so many others love it."]);
                        conditionsDependsOnUserSpeech(1)
                    } else {
                        await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Where do you live? ");
                        converstionSteps--;
                    }

                }
            } else {
                if (converstionSteps == 1) {
                    await playScript("Okey. Are you happy today?");
                    setSampleAns([" Yes, sir i am really happly today. thanks for asking."])
                }
                if (converstionSteps == 2) {
                    if (converstionStepsText.length < 5) {
                        await smallTalkError(" Are you ready? ");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating. Are you ready?");
                        converstionSteps--;
                    }
                    else {
                        await playScript("Okey. So, How is today's weather for you?");
                        setSampleAns([`It's really good, and I just love this weather since the morning.`])
                        conditionsDependsOnUserSpeech(0)
                    }
                }
                if (converstionSteps == 3) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError(" What do you do for fun? ");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating. What do you do for fun? ");
                        converstionSteps--;
                    }
                    else {
                        await playScript("Okey. Let's Talk about watching movies. So, do you like to watch movies?");
                        setSampleAns(["Definitely, I love watching films, all genres of them. I try to absorb and enjoy as many different kinds of films as I can, whether it be the blockbuster Avengers: End Game, emotional rollercoaster-like Parasite, or visual effects such as The Lion King. Film is a medium that can transport you to radically different worlds and environments. That’s why I and so many others love it."])
                        conditionsDependsOnUserSpeech(1)
                    }
                }
            }
            if (converstionSteps == 4) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Do you like to watch movies? ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Do you like to watch movies? ");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                    converstionStepsText.match(/watch/gi) || converstionStepsText.match(/will/gi) ||
                    converstionStepsText.match(/movie/gi) || converstionStepsText.match(/would/gi) ||
                    converstionStepsText.match(/film/gi) || converstionStepsText.match(/absorb/gi) ||
                    converstionStepsText.match(/different/gi) || converstionStepsText.match(/blockbuster/gi) ||
                    converstionStepsText.match(/emotion/gi) || converstionStepsText.match(/visual/gi) ||
                    converstionStepsText.match(/effect/gi) ||
                    converstionStepsText.match(/environment/gi) || converstionStepsText.match(/many/gi)
                ) {
                    await playScript("Okey. Why do you like watching movies?");
                    setSampleAns([` Here are some reasons why people like watching movies:
                    Watching a film or TV series you've seen loads of times is comforting.,
                    Some viewers find metaphors or symbols in films that help them grapple with major life ,challenges.,
                    Movies are a form of entertainment and escape.,
                    They can inspire you to be a better person.,
                    They make you smarter,
                    `])
                    conditionsDependsOnUserSpeech(2)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Do you like to watch movies?");
                    converstionSteps--;
                }


            } else if (converstionSteps == 5) {

                if (converstionStepsText.length < 10) {
                    await smallTalkError("Why do you like watching movies?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Why do you like watching movies? ");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/because/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                    converstionStepsText.match(/watch/gi) || converstionStepsText.match(/will/gi) ||
                    converstionStepsText.match(/movie/gi) || converstionStepsText.match(/just/gi) ||
                    converstionStepsText.match(/film/gi) || converstionStepsText.match(/load/gi) ||
                    converstionStepsText.match(/would/gi) || converstionStepsText.match(/time/gi) ||
                    converstionStepsText.match(/comfort/gi) || converstionStepsText.match(/visual/gi) ||
                    converstionStepsText.match(/effect/gi) ||
                    converstionStepsText.match(/environment/gi) || converstionStepsText.match(/many/gi) ||
                    converstionStepsText.match(/viewer/gi) || converstionStepsText.match(/metaphor/gi) ||
                    converstionStepsText.match(/major/gi) || converstionStepsText.match(/entertainment/gi) ||
                    converstionStepsText.match(/fun/gi) || converstionStepsText.match(/joy/gi) ||
                    converstionStepsText.match(/better/gi) ||
                    converstionStepsText.match(/make/gi) || converstionStepsText.match(/process/gi) ||
                    converstionStepsText.match(/appreciate/gi) || converstionStepsText.match(/social/gi)

                ) {
                    await playScript("Okey. Do you prefer foreign films or Indian films?");
                    setSampleAns([` Actually, I like both as both have their individual importance for me while watching them. For instance, by watching Hollywood films, I can learn English vocabulary and grammar skills while watching other online Bollywood movies make my mind calm and relax after exploring them.`])
                    conditionsDependsOnUserSpeech(3)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Why do you like watching movies?");
                    converstionSteps--;
                }



            } else if (converstionSteps == 6) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Do you prefer foreign films or Indian films?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.Do you prefer foreign films or Indian films? ");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/because/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                    converstionStepsText.match(/watch/gi) || converstionStepsText.match(/will/gi) ||
                    converstionStepsText.match(/movie/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/both/gi) || converstionStepsText.match(/prefer/gi) ||
                    converstionStepsText.match(/would/gi) || converstionStepsText.match(/foreign/gi) ||
                    converstionStepsText.match(/film/gi) || converstionStepsText.match(/visual/gi) ||
                    converstionStepsText.match(/effect/gi) ||
                    converstionStepsText.match(/indian/gi) || converstionStepsText.match(/Actually/gi) ||
                    converstionStepsText.match(/individual/gi) || converstionStepsText.match(/instance/gi) ||
                    converstionStepsText.match(/major/gi) || converstionStepsText.match(/entertainment/gi) ||
                    converstionStepsText.match(/fun/gi) || converstionStepsText.match(/provide/gi) ||
                    converstionStepsText.match(/Bollywood/gi) ||
                    converstionStepsText.match(/make/gi) || converstionStepsText.match(/adventure/gi) ||
                    converstionStepsText.match(/appreciate/gi) || converstionStepsText.match(/social/gi) ||
                    converstionStepsText.match(/experience/gi) || converstionStepsText.match(/knowledge/gi)
                ) {
                    await playScript("Okey. What’s the best movie you’ve seen this year?");
                    setSampleAns([`The best movie I've seen this year is "Everything Everywhere All at Once." It's a mind-bending, genre-blending film that combines elements of science fiction, action, and heartfelt drama. The story follows a woman who discovers she can access parallel universes and must use this power to save her family and the multiverse. The movie is visually stunning, incredibly imaginative, and emotionally powerful, making it a standout film of the year.`])
                    conditionsDependsOnUserSpeech(4)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you prefer foreign films or Indian films?");
                    converstionSteps--;
                }

            } else if (converstionSteps == 7) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("What’s the best movie you’ve seen this year?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.What’s the best movie you’ve seen this year?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/best/gi) || converstionStepsText.match(/movie/gi) ||
                    converstionStepsText.match(/seen/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                    converstionStepsText.match(/watch/gi) || converstionStepsText.match(/year/gi) ||
                    converstionStepsText.match(/movie/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/recent/gi) || converstionStepsText.match(/this/gi) ||
                    converstionStepsText.match(/Everywhere/gi) || converstionStepsText.match(/action/gi) ||
                    converstionStepsText.match(/film/gi) || converstionStepsText.match(/visual/gi) ||
                    converstionStepsText.match(/effect/gi) ||
                    converstionStepsText.match(/story/gi) || converstionStepsText.match(/discover/gi) ||
                    converstionStepsText.match(/stun/gi) || converstionStepsText.match(/visually/gi)
                ) {
                    await playScript("Okey. Do you like watching movie trailers before seeing the film?");
                    setSampleAns([`Yes, I do enjoy watching movie trailers before seeing the film. Trailers give a sneak peek into the storyline, characters, and overall vibe of the movie, helping me decide if it's something I'd be interested in watching. They can build excitement and anticipation, making the movie experience even more enjoyable. However, I try to avoid trailers that reveal too much about the plot to keep some surprises for the actual viewing.`])
                    conditionsDependsOnUserSpeech(5)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. What’s the best movie you’ve seen this year?");
                    converstionSteps--;
                }
            } else if (converstionSteps == 8) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Do you like watching movie trailers before seeing the film?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Do you like watching movie trailers before seeing the film?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/watch/gi) ||
                    converstionStepsText.match(/no/gi) || converstionStepsText.match(/movie/gi) ||
                    converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                    converstionStepsText.match(/watch/gi) || converstionStepsText.match(/trailer/gi) ||
                    converstionStepsText.match(/before/gi) || converstionStepsText.match(/seeing/gi) ||

                    converstionStepsText.match(/enjoy/gi) || converstionStepsText.match(/story/gi) ||
                    converstionStepsText.match(/overall/gi) || converstionStepsText.match(/decide/gi) ||
                    converstionStepsText.match(/film/gi) || converstionStepsText.match(/visual/gi) ||
                    converstionStepsText.match(/effect/gi) ||
                    converstionStepsText.match(/actual/gi) || converstionStepsText.match(/surprises/gi)
                ) {
                    await playScript("Okey. That was about section 1. Thanks.");
                    conditionsDependsOnUserSpeech(6)
                    await sendSpeakingtextToBackend(recordedText);
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you like watching movie trailers before seeing the film?");
                    converstionSteps--;
                }

            }


        }

        console.log("converstionStepsText");
        console.log(converstionStepsText);
        converstionStepsText = "";
    }

    async function Test5Sec2() { }

    async function Test5Sec3() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            await playScript(
                " My name is Adrian. I will be your examiner for this part of the test, part three. Are you comfortable?"
            );
            setSampleAns(["Yes, I am comfortable you please proceed the test"])
        }
        converstionSteps++;
        if (converstionStepsText != '') {
            if (converstionSteps == 1) {
                await playScript(
                    "Sorry.... Can you repeat that please"
                );
                setSampleAns([` You can simply repeat your previous answer`])
            } else if (converstionSteps == 2) {
                if (converstionStepsText.length < 5) {
                    await smallTalkError(" I will as you the qustion related of question two. so , Are you ready?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.Are you ready?");
                    converstionSteps--;
                }
                else {
                    await playScript("I am asking you the question related of section 2 . so, Let's start.Are there any positive effects of working with a family member?");
                    setSampleAns([`Certainly, there are many benefits of working with a family member. A family member would be  more supportive if an occasional time off is needed. Secondly, the family member would also be  satisfied as he would not have the fear of any outsider cheating him in business. However, one  must realise that some work ethics have to be maintained even if one is working for a family  member. own.
                     `])
                    conditionsDependsOnUserSpeech(0)
                }
            }
            else if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Are there any positive effects of working with a family member?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.Are there any positive effects of working with a family member?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/Yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                    converstionStepsText.match(/effect/gi) || converstionStepsText.match(/work/gi) ||

                    converstionStepsText.match(/family/gi) || converstionStepsText.match(/member/gi) ||
                    converstionStepsText.match(/Certainly/gi) || converstionStepsText.match(/benefit/gi) ||
                    converstionStepsText.match(/supportive/gi) || converstionStepsText.match(/occasional/gi) ||

                    converstionStepsText.match(/need/gi) || converstionStepsText.match(/would/gi) ||
                    converstionStepsText.match(/satisfi/gi) || converstionStepsText.match(/realise/gi) ||
                    converstionStepsText.match(/maintain/gi) || converstionStepsText.match(/own/gi)

                ) {
                    await playScript("What kinds of family businesses are there in India?");
                    setSampleAns([`India is a diverse country and a fast growing one too. All sorts of family businesses are there in  India. My hometown Phagwara is a hub of small scale industry. Many people are into making auto  spare parts. I visited Rajkot in Gujarat and I saw many households run the business of Patola sarees.  You name a business, and you will find it in India.`])
                    conditionsDependsOnUserSpeech(1)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.Are there any positive effects of working with a family member?");
                    converstionSteps--;
                }

            } else if (converstionSteps == 4) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("What kinds of family businesses are there in India?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.What kinds of family businesses are there in India?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/kind/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/most/gi) || converstionStepsText.match(/family/gi) ||
                    converstionStepsText.match(/business/gi) || converstionStepsText.match(/India/gi) ||
                    converstionStepsText.match(/diverse/gi) || converstionStepsText.match(/country/gi) ||
                    converstionStepsText.match(/fast/gi) || converstionStepsText.match(/grow/gi) ||
                    converstionStepsText.match(/hometown/gi) || converstionStepsText.match(/industry/gi) ||

                    converstionStepsText.match(/spare/gi) || converstionStepsText.match(/life/gi) ||
                    converstionStepsText.match(/visit/gi) || converstionStepsText.match(/keep/gi) ||
                    converstionStepsText.match(/saw/gi) || converstionStepsText.match(/many/gi)
                ) {
                    await playScript("Okey. Why do people like to set up a family business? ");
                    setSampleAns([`Family business ensures employment within a family. If a person has some business know-how, he  can start a small business and make it grow with family support. One does not have to go out  hunting for jobs. By having a family business, one can be a job provider rather than being a job seeker.  `])
                    conditionsDependsOnUserSpeech(2)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. What kinds of family businesses are there in India?");
                    converstionSteps--;
                }
            } else if (converstionSteps == 5) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Why do people like to set up a family business?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Why do people like to set up a family business?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                    converstionStepsText.match(/people/gi) || converstionStepsText.match(/family/gi) ||
                    converstionStepsText.match(/business/gi) || converstionStepsText.match(/ensures/gi) ||

                    converstionStepsText.match(/comfortable/gi) || converstionStepsText.match(/faster/gi) ||
                    converstionStepsText.match(/employment/gi) || converstionStepsText.match(/improve/gi) ||
                    converstionStepsText.match(/person/gi) || converstionStepsText.match(/make/gi) ||

                    converstionStepsText.match(/grow/gi) || converstionStepsText.match(/support/gi) ||
                    converstionStepsText.match(/hunt/gi) || converstionStepsText.match(/job/gi) ||
                    converstionStepsText.match(/provider/gi) || converstionStepsText.match(/being/gi) ||
                    converstionStepsText.match(/seeker/gi)
                ) {
                    await playScript("What are the advantages and disadvantages of a family business?");
                    setSampleAns([`The advantages are that one does not have to go out hunting for jobs. By having a family business,  one can be a job provider rather than being a job seeker. An entrepreneur is his own boss. If the  whole family works hard and the business flourishes, it can be a rags to riches story.  The disadvantages are that if the business faces a slump, the whole family can turn from riches to  rags overnight. The family members may also have conflicts if they feel that some of them are just  reaping benefits without actually working hard`])
                    conditionsDependsOnUserSpeech(3)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.Why do people like to set up a family business??");
                    converstionSteps--;
                }
            }

            else if (converstionSteps == 6) {

                if (converstionStepsText.length < 10) {
                    await smallTalkError("What are the advantages and disadvantages of a family business?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. What are the advantages and disadvantages of a family business?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/advantage/gi) || converstionStepsText.match(/disadvantage/gi) ||
                    converstionStepsText.match(/family/gi) || converstionStepsText.match(/business/gi) ||
                    converstionStepsText.match(/does/gi) || converstionStepsText.match(/hunt/gi) ||

                    converstionStepsText.match(/job/gi) || converstionStepsText.match(/provider/gi) ||
                    converstionStepsText.match(/rather/gi) || converstionStepsText.match(/entrepreneur/gi) ||
                    converstionStepsText.match(/comfortable/gi) || converstionStepsText.match(/boss/gi) ||

                    converstionStepsText.match(/rich/gi) || converstionStepsText.match(/overnight/gi) ||
                    converstionStepsText.match(/member/gi) || converstionStepsText.match(/conflict/gi) ||
                    converstionStepsText.match(/feel/gi) || converstionStepsText.match(/reap/gi) ||
                    converstionStepsText.match(/suffer/gi) || converstionStepsText.match(/actual/gi) ||
                    converstionStepsText.match(/hard/gi)
                ) {
                    await playScript("So, What are the causes for the success of a family business?");
                    setSampleAns([`The success of a family business are dependent on mutual trust among the family members,  disciplined atmosphere at work and recognition of each others inputs. `])
                    conditionsDependsOnUserSpeech(4)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I am say it again .What are the advantages and disadvantages of a family business?");
                    converstionSteps--;
                }
            }

            else if (converstionSteps == 7) {

                if (converstionStepsText.length < 10) {
                    await smallTalkError("What are the causes for the success of a family business?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. What are the causes for the success of a family business?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/causes/gi) || converstionStepsText.match(/success/gi) ||
                    converstionStepsText.match(/family/gi) || converstionStepsText.match(/business/gi) ||
                    converstionStepsText.match(/does/gi) || converstionStepsText.match(/dependent/gi) ||

                    converstionStepsText.match(/mutual/gi) || converstionStepsText.match(/provider/gi) ||
                    converstionStepsText.match(/rather/gi) || converstionStepsText.match(/trust/gi) ||
                    converstionStepsText.match(/among/gi) || converstionStepsText.match(/member/gi) ||

                    converstionStepsText.match(/discipline/gi) || converstionStepsText.match(/atmosphere/gi) ||
                    converstionStepsText.match(/recognition/gi) || converstionStepsText.match(/inputs/gi) || converstionStepsText.match(/actual/gi) ||
                    converstionStepsText.match(/hard/gi)
                ) {
                    await playScript("So,How is the relation among members of a family business?");
                    setSampleAns([`For any family business to thrive, good relation among family members is of paramount importance. If this is not there then the family business can see its doom very soon.`])
                    conditionsDependsOnUserSpeech(5)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I am say it again .What are the causes for the success of a family business?");
                    converstionSteps--;
                }
            } else if (converstionSteps == 8) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" How is the relation among members of a family business? ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.How is the relation among members of a family business?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/Will/gi) || converstionStepsText.match(/relation/gi) ||
                    converstionStepsText.match(/live/gi) || converstionStepsText.match(/among/gi) ||
                    converstionStepsText.match(/member/gi) || converstionStepsText.match(/family/gi) ||

                    converstionStepsText.match(/many/gi) || converstionStepsText.match(/business/gi) ||
                    converstionStepsText.match(/thrive/gi) || converstionStepsText.match(/good/gi) ||
                    converstionStepsText.match(/importance/gi) || converstionStepsText.match(/see/gi) ||
                    converstionStepsText.match(/become/gi) || converstionStepsText.match(/very/gi)

                ) {
                    await playScript("Okey. That was about section 3. Thanks.");
                    conditionsDependsOnUserSpeech(6)
                    await sendSpeakingtextToBackend(recordedText);
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.How is the relation among members of a family business?？");
                    converstionSteps--;
                }
            }

        }

        console.log("converstionStepsText");
        console.log(converstionStepsText);
        converstionStepsText = "";



    }


    //test-6 --all sections--

    async function Test6Sec1() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            if (!userSpeakingTestNo) {
                await playScript(
                    "Hello and welcome to the IELTS speaking portion of the test. Jone is my name. & For this portion of the exam, I will serve as your examiner. We are carrying out this. Would you kindly tell me your entire name?"
                );
                setSampleAns([" Simply you can say your full name. As like my name is Jone dow.You can call me Jone"])
            } else {
                await playScript("Are you ready to take the test then?");
                setSampleAns([" Simply you can say the positive answer. As like Yes i am Ready to give the test. ", "2, Yes, I am reay.You can proceed the test"])
            }

        }

        converstionSteps++;
        if (converstionStepsText != '') {

            if (!userSpeakingTestNo) {
                if (converstionSteps == 1) {
                    await playScript(
                        "I'll start your exam now. What's your full name, please?"
                    );
                    setSampleAns(["You an simply tell your full name . As like I am Mr. JOne Dow . You can call me jone."])
                } else if (converstionSteps == 2) {
                    if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating.  What's your full name, please?");
                        converstionSteps--;
                    }
                    else if (converstionStepsText.match("name") || converstionStepsText.match("call")) {
                        if (converstionStepsText.match("call")) {
                            await playScript(
                                "So, for this section. I'm going to ask some general questions. Where do you live?"
                            );
                            setSampleAns([" Simply you can say your area/ or place where you are live in.As like I am living in Dhaka,Bangladesh", "2, I live in Bangladesh."])
                            localStorage.setItem("SpeakingTestNo", testNo);
                            conditionsDependsOnUserSpeech(0)
                        } else {
                            await playScript("Alright. What can I call you?");
                            setSampleAns(["You can call me Jone or you simply tell your nickname."])
                            converstionSteps--;
                        }
                    }
                    else {
                        await playScript("Alright, what's your name?");
                        setSampleAns(["You an simply tell your full name . As like I am Mr. JOne Dow . You can call me jone."])
                        converstionSteps--;
                    }

                } else if (converstionSteps == 3) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError(" Where do you live? ");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating. Where do you live? ");
                        converstionSteps--;
                    }
                    else if (converstionStepsText.match(/live/gi) || converstionStepsText.match(/leaving/gi) ||
                        converstionStepsText.match(/in/gi) || converstionStepsText.match(/at/gi) ||
                        converstionStepsText.match(/from/gi) || converstionStepsText.match(/i am living/gi)) {
                        await playScript("Okey. Lets talk about Talent.Do you have a talent, or something you are good at?");
                        setSampleAns(["I think everyone is born with some talent or the other. I have a talent to embroider. "]);
                        conditionsDependsOnUserSpeech(1)
                    } else {
                        await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Where do you live? ");
                        converstionSteps--;
                    }

                }
            } else {
                if (converstionSteps == 1) {
                    await playScript("Okey. Are you happy today?");
                    setSampleAns([" Yes, sir i am really happly today. thanks for asking."])
                }
                if (converstionSteps == 2) {
                    if (converstionStepsText.length < 5) {
                        await smallTalkError(" Are you ready? ");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating. Are you ready? ");
                        converstionSteps--;
                    }
                    else {
                        await playScript("Okey. So, is your health is well today?");
                        setSampleAns([`Yes i do , i always make smile. it makes me happy.`])
                        conditionsDependsOnUserSpeech(0)
                    }
                }
                if (converstionSteps == 3) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError("is your health is well today?");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating. is your health is well today?");
                        converstionSteps--;
                    }
                    else {
                        await playScript("Okey. Lets talk about Talent.Do you have a talent, or something you are good at?");
                        setSampleAns(["I think everyone is born with some talent or the other. I have a talent to embroider. "]);
                        conditionsDependsOnUserSpeech(1)
                    }
                }
            }

            if (converstionSteps == 4) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Do you have a talent, or something you are good at?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Do you have a talent, or something you are good at?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/Talent/gi) || converstionStepsText.match(/something/gi) ||
                    converstionStepsText.match(/good/gi) || converstionStepsText.match(/at/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/everyone/gi) ||
                    converstionStepsText.match(/born/gi) || converstionStepsText.match(/some/gi) ||
                    converstionStepsText.match(/embroider/gi) || converstionStepsText.match(/special/gi)

                ) {
                    await playScript("Okey.  Was it mastered recently or when you were young? ");
                    setSampleAns([`I was lucky to have discovered it in my school, where the nuns would teach us varied handcrafts like knitting, sewing, painting and embroidering  `])
                    conditionsDependsOnUserSpeech(2)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.Do you have a talent, or something you are good at?");
                    converstionSteps--;
                }


            } else if (converstionSteps == 5) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Was it mastered recently or when you were young? ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.  Was it mastered recently or when you were young? ");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/master/gi) || converstionStepsText.match(/did/gi) ||
                    converstionStepsText.match(/Was/gi) || converstionStepsText.match(/were/gi) ||
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/young/gi) ||
                    converstionStepsText.match(/lucky/gi) || converstionStepsText.match(/discover/gi) ||
                    converstionStepsText.match(/school/gi) || converstionStepsText.match(/teach/gi) ||
                    converstionStepsText.match(/varied/gi) || converstionStepsText.match(/handcraft/gi) ||
                    converstionStepsText.match(/embroid/gi) || converstionStepsText.match(/paint/gi)
                ) {
                    await playScript("Okey.  Do you think your talent can be useful for your future work? Why?");
                    setSampleAns([`Yes, my talent like any other talent can be used in time of need whether to earn a living or to  pass my time productively `])
                    conditionsDependsOnUserSpeech(3)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Was it mastered recently or when you were young?");
                    converstionSteps--;
                }
            } else if (converstionSteps == 6) {

                if (converstionStepsText.length < 10) {
                    await smallTalkError("  Do you think your talent can be useful for your future work? Why? ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Do you think your talent can be useful for your future work? Why? ");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/talent/gi) ||
                    converstionStepsText.match(/useful/gi) || converstionStepsText.match(/future/gi) ||
                    converstionStepsText.match(/work/gi) || converstionStepsText.match(/other/gi) ||

                    converstionStepsText.match(/People/gi) || converstionStepsText.match(/different/gi) ||
                    converstionStepsText.match(/use/gi) || converstionStepsText.match(/need/gi) ||
                    converstionStepsText.match(/whether/gi) || converstionStepsText.match(/earn/gi) ||
                    converstionStepsText.match(/livin/gi) || converstionStepsText.match(/productive/gi)
                ) {
                    await playScript("Okey. Do you think anyone in your family has the same talent? ");
                    setSampleAns([`Yes, my mother and aunts have similar talents. In fact it’s from my mother that I learnt a lot of this craft.  `])
                    conditionsDependsOnUserSpeech(4)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you think your talent can be useful for your future work? Why?");
                    converstionSteps--;
                }


            }
            else if (converstionSteps == 7) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("  Do you think anyone in your family has the same talent?  ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.  Do you think anyone in your family has the same talent?  ");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/important/gi) ||
                    converstionStepsText.match(/anyone/gi) || converstionStepsText.match(/family/gi) ||
                    converstionStepsText.match(/has/gi) || converstionStepsText.match(/had/gi) ||
                    converstionStepsText.match(/same/gi) || converstionStepsText.match(/talent/gi) ||
                    converstionStepsText.match(/mother/gi) || converstionStepsText.match(/father/gi) ||
                    converstionStepsText.match(/sister/gi) || converstionStepsText.match(/brother/gi) ||
                    converstionStepsText.match(/similar/gi) || converstionStepsText.match(/fact/gi) ||
                    converstionStepsText.match(/learnt/gi) || converstionStepsText.match(/craft/gi)
                ) {
                    await playScript("Okey. What talent or skill would you like to develop in the future?");
                    setSampleAns([`I would like to develop my public speaking skills in the future. Effective communication is crucial in many aspects of life, from professional settings to personal interactions. By improving my public speaking abilities, I can better convey my ideas, inspire others, and confidently participate in various events and discussions. Additionally, strong public speaking skills can enhance leadership capabilities and open up new opportunities for personal and career growth. `])
                    conditionsDependsOnUserSpeech(5)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.   Do you think anyone in your family has the same talent? ");
                    converstionSteps--;
                }
            } else if (converstionSteps == 8) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("What talent or skill would you like to develop in the future? ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. What talent or skill would you like to develop in the future? ");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/talent/gi) || converstionStepsText.match(/skill/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/would/gi) ||
                    converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                    converstionStepsText.match(/future/gi) || converstionStepsText.match(/develop/gi) ||
                    converstionStepsText.match(/public/gi) || converstionStepsText.match(/personal/gi) ||
                    converstionStepsText.match(/various/gi) || converstionStepsText.match(/inspire/gi) ||
                    converstionStepsText.match(/confident/gi) || converstionStepsText.match(/leadership/gi)
                ) {
                    await playScript("Okey. That was about section 1. Thanks.");
                    await sendSpeakingtextToBackend(recordedText);
                    conditionsDependsOnUserSpeech(6)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. What talent or skill would you like to develop in the future? ");
                    converstionSteps--;
                }


            }
        }

        console.log("converstionStepsText");
        console.log(converstionStepsText);
        converstionStepsText = "";
    }
    async function Test6Sec2() {

    }
    async function Test6Sec3() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            await playScript(
                " My name is Adrian. I will be your examiner for this part of the test, part three. Are you comfortable?"
            );
            setSampleAns(["Yes, I am comfortable you please proceed the test"])
        }
        converstionSteps++;
        if (converstionStepsText != '') {
            if (converstionSteps == 1) {
                await playScript(
                    "Sorry.... Can you repeat that please"
                );
                setSampleAns([` You can simply repeat your previous answer`])
            } else if (converstionSteps == 2) {
                if (converstionStepsText.length < 5) {
                    await smallTalkError(" I will as you the qustion related of question two. so , Are you ready?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.Are you ready?");
                    converstionSteps--;
                }
                else {
                    await playScript("I am asking you the question related of section 2 . so, Let's talk about lake or river .Why do many people like going to places with water such as lakes, rivers, or seas?");
                    setSampleAns([`People like to go to such places because they can do various activities there and have a fun time. They can do swimming, boating, rafting, surfing, snorkeling, scuba diving and so on. Moreover,  India has a long coastline. People can find such places easily and so these places have become important tourist destinations.`])
                    conditionsDependsOnUserSpeech(0)
                }
            }
            else if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Why do many people like going to places with water such as lakes, rivers, or seas?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.Why do many people like going to places with water such as lakes, rivers, or seas?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/many/gi) || converstionStepsText.match(/swimm/gi) ||
                    converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                    converstionStepsText.match(/go/gi) || converstionStepsText.match(/places/gi) ||

                    converstionStepsText.match(/water/gi) || converstionStepsText.match(/lake/gi) ||
                    converstionStepsText.match(/river/gi) || converstionStepsText.match(/seas/gi) ||
                    converstionStepsText.match(/various/gi) || converstionStepsText.match(/activitie/gi) ||

                    converstionStepsText.match(/fun/gi) || converstionStepsText.match(/time/gi) ||
                    converstionStepsText.match(/satisfi/gi) || converstionStepsText.match(/boating/gi) ||
                    converstionStepsText.match(/easily/gi) || converstionStepsText.match(/important/gi) || converstionStepsText.match(/tourist/gi) || converstionStepsText.match(/destinations/gi)

                ) {
                    await playScript(" What kinds of leisure activities do people like to do in water places?");
                    setSampleAns([`They can do swimming, boating, rafting, surfing, snorkeling, scuba diving and so on.`])
                    conditionsDependsOnUserSpeech(1)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.Why do many people like going to places with water such as lakes, rivers, or seas?");
                    converstionSteps--;
                }

            } else if (converstionSteps == 4) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" What kinds of leisure activities do people like to do in water places?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. What kinds of leisure activities do people like to do in water places?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/kind/gi) || converstionStepsText.match(/leisure/gi) ||
                    converstionStepsText.match(/activitie/gi) || converstionStepsText.match(/people/gi) ||
                    converstionStepsText.match(/do/gi) || converstionStepsText.match(/like/gi) ||
                    converstionStepsText.match(/water/gi) || converstionStepsText.match(/place/gi) ||

                    converstionStepsText.match(/swimming/gi) || converstionStepsText.match(/boat/gi) ||
                    converstionStepsText.match(/raft/gi) || converstionStepsText.match(/surfing/gi) ||

                    converstionStepsText.match(/snorkeling/gi) || converstionStepsText.match(/scuba/gi) ||
                    converstionStepsText.match(/visit/gi) || converstionStepsText.match(/diving/gi) ||
                    converstionStepsText.match(/so on/gi) || converstionStepsText.match(/etc/gi)
                ) {
                    await playScript("Okey. Do children and old people relax in the same ways when they go to beach? ");
                    setSampleAns([`No, they relax in different ways as their age allows them. The elderly just sit there and watch their  children and grandchildren play with the waves. Children run around the beach, play beach  volleyball, swim, splash in water and relax by sweating out their energy.  `])
                    conditionsDependsOnUserSpeech(2)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  What kinds of leisure activities do people like to do in water places?");
                    converstionSteps--;
                }
            } else if (converstionSteps == 5) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Do children and old people relax in the same ways when they go to beach?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Do children and old people relax in the same ways when they go to beach?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/children/gi) || converstionStepsText.match(/people/gi) ||
                    converstionStepsText.match(/old/gi) || converstionStepsText.match(/relax/gi) ||
                    converstionStepsText.match(/same/gi) || converstionStepsText.match(/way/gi) ||

                    converstionStepsText.match(/beach/gi) || converstionStepsText.match(/different/gi) ||
                    converstionStepsText.match(/allow/gi) || converstionStepsText.match(/elderly/gi) ||
                    converstionStepsText.match(/sit/gi) || converstionStepsText.match(/make/gi) ||

                    converstionStepsText.match(/volleyball/gi) || converstionStepsText.match(/splash/gi) ||
                    converstionStepsText.match(/swim/gi) || converstionStepsText.match(/water/gi) ||
                    converstionStepsText.match(/relax/gi) || converstionStepsText.match(/sweating/gi) ||
                    converstionStepsText.match(/energy/gi)
                ) {
                    await playScript("Why do people like water sports?");
                    setSampleAns([`People like water sports because they are fun especially during the long summer months. For  people who don’t live near the coastal areas or any other water bodies, such places are a change  and so they are fun and exciting. `])
                    conditionsDependsOnUserSpeech(3)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.Do children and old people relax in the same ways when they go to beach?");
                    converstionSteps--;
                }
            }

            else if (converstionSteps == 6) {

                if (converstionStepsText.length < 10) {
                    await smallTalkError("Why do people like water sports?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Why do people like water sports?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/people/gi) || converstionStepsText.match(/like/gi) ||
                    converstionStepsText.match(/love/gi) || converstionStepsText.match(/sport/gi) ||
                    converstionStepsText.match(/water/gi) || converstionStepsText.match(/fun/gi) ||
                    converstionStepsText.match(/summer/gi) || converstionStepsText.match(/provider/gi) ||
                    converstionStepsText.match(/especially/gi) || converstionStepsText.match(/summer/gi) ||
                    converstionStepsText.match(/near/gi) || converstionStepsText.match(/coastal/gi) ||
                    converstionStepsText.match(/areas/gi) || converstionStepsText.match(/bodies/gi) ||
                    converstionStepsText.match(/excit/gi)
                ) {
                    await playScript("So, Do you think beach or seaside is more suitable for children or old people to spend their  leisure time at? ");
                    setSampleAns([`Yes, it is. However, they should refrain from going near water during high tide. Beaches where a lot  of people are there are relatively safer than those which are isolated.  `])
                    conditionsDependsOnUserSpeech(4)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I am say it again .Why do people like water sports?");
                    converstionSteps--;
                }
            } else if (converstionSteps == 7) {

                if (converstionStepsText.length < 10) {
                    await smallTalkError("Do you think beach or seaside is more suitable for children or old people to spend their  leisure time at? ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.Do you think beach or seaside is more suitable for children or old people to spend their  leisure time at? ");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/do/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/beach/gi) || converstionStepsText.match(/seaside/gi) ||

                    converstionStepsText.match(/suitable/gi) || converstionStepsText.match(/children/gi) ||
                    converstionStepsText.match(/people/gi) || converstionStepsText.match(/spend/gi) ||
                    converstionStepsText.match(/leisure/gi) || converstionStepsText.match(/time/gi) ||

                    converstionStepsText.match(/However/gi) || converstionStepsText.match(/should/gi) ||
                    converstionStepsText.match(/refrain/gi) || converstionStepsText.match(/inputs/gi) || converstionStepsText.match(/near/gi) || converstionStepsText.match(/water/gi) ||

                    converstionStepsText.match(/during/gi) || converstionStepsText.match(/high/gi) ||
                    converstionStepsText.match(/tide/gi) || converstionStepsText.match(/Beaches/gi) || converstionStepsText.match(/relative/gi) || converstionStepsText.match(/isolated/gi)
                ) {
                    await playScript("Okey. Is there much water transportation in your country? ");
                    setSampleAns([`I live in the north of India. There is no water transportation here, but as you go south, there is a  long coastline where water transportation is very common. `])
                    conditionsDependsOnUserSpeech(5)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I am say it again .Do you think beach or seaside is more suitable for children or old people to spend their  leisure time at? ");
                    converstionSteps--;
                }
            } else if (converstionSteps == 8) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Is there much water transportation in your country? ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.Is there much water transportation in your country? ");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/there/gi) || converstionStepsText.match(/water/gi) ||
                    converstionStepsText.match(/transport/gi) || converstionStepsText.match(/country/gi) ||
                    converstionStepsText.match(/live/gi) || converstionStepsText.match(/north/gi) ||

                    converstionStepsText.match(/India/gi) || converstionStepsText.match(/business/gi) ||
                    converstionStepsText.match(/south/gi) || converstionStepsText.match(/long/gi) ||
                    converstionStepsText.match(/coastline/gi) || converstionStepsText.match(/sea/gi) ||
                    converstionStepsText.match(/become/gi) || converstionStepsText.match(/common/gi)

                ) {
                    await playScript("Okey. That was about section 3. Thanks.");
                    conditionsDependsOnUserSpeech(6)
                    await sendSpeakingtextToBackend(recordedText);
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.Is there much water transportation in your country? ");
                    converstionSteps--;
                }
            }

        }

        console.log("converstionStepsText");
        console.log(converstionStepsText);
        converstionStepsText = "";



    }


    //test-7 all sections---
    async function Test7Sec1() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            if (!userSpeakingTestNo) {
                await playScript(
                    "Hello and welcome to the IELTS speaking portion of the test. Jone is my name. & For this portion of the exam, I will serve as your examiner. We are carrying out this. Would you kindly tell me your entire name?"
                );
                setSampleAns([" Simply you can say your full name. As like my name is Jone dow.You can call me Jone"])
            } else {
                await playScript("Are you ready to take the test then?");
                setSampleAns([" Simply you can say the positive answer. As like Yes i am Ready to give the test. ", "2, Yes, I am reay.You can proceed the test"])
            }

        }


        converstionSteps++;
        if (converstionStepsText != '') {
            // if (converstionStepsText.length < 10) {
            //     await smallTalkError();
            // }

            // else if (converstionStepsText.match('repeat') || converstionStepsText.match(" understand")) {
            //     await playScript(
            //         "Ok , I am repeating.");
            //     converstionSteps--;
            // }

            // if (converstionSteps == 0) {
            //     await playScript(
            //         "Welcome to the speaking portion of the ielts exam. My name is adrian.& I will be your examiner for this part of the test. I will give you instructions for each of the parts. What is your full name?"
            //     );
            // } 

            if (!userSpeakingTestNo) {
                if (converstionSteps == 1) {
                    await playScript(
                        "I'll start your exam now. What's your full name, please?"
                    );
                } else if (converstionSteps == 2) {
                    if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating,What's your full name, please?");
                        converstionSteps--;
                    }
                    else if (converstionStepsText.match("name") || converstionStepsText.match("call")) {
                        if (converstionStepsText.match("call")) {
                            await playScript(
                                "So, for this section. I'm going to ask some general questions. Where do you live?"
                            );
                            setSampleAns([" Simply you can say your area/ or place where you are live in.As like I am living in Dhaka,Bangladesh", "2, I live in kolkata,India"])
                            localStorage.setItem("SpeakingTestNo", testNo);
                            conditionsDependsOnUserSpeech(0)
                        } else {
                            await playScript("Alright. What can I call you?");
                            setSampleAns(["You can simply say . You can call me jonw"])
                            converstionSteps--;
                        }
                    }
                    else {
                        await playScript("Alright, what's your name?");
                        setSampleAns(["Hello sir, I am Parvez . You can call me Ronok"])
                        converstionSteps--;
                    }

                } else if (converstionSteps == 3) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError(" Where do you live?");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating, Where do you live?");
                        converstionSteps--;
                    }
                    else if (converstionStepsText.match(/live/gi) || converstionStepsText.match(/leaving/gi) ||
                        converstionStepsText.match(/in/gi) || converstionStepsText.match(/at/gi) ||
                        converstionStepsText.match(/from/gi) || converstionStepsText.match(/i am living/gi)) {
                        await playScript("Let's talk about newspapers and magazines. How often do you read a newspaper? How about a magazine?");
                        setSampleAns([" i haven't bought a paper magazine or newspaper as long as i remember i may have flipped through one in a superstore but that's about it but i do follow um subscriptions on my mobile i read a magazine called femina on internet every week ",
                            `2 , According to a survey held in the United States in August 2022, just 16 percent of U.S. adults used national newspapers as a source of news on a daily basis or a few times each week1. Meanwhile, 22 percent read local papers daily or several times per week1. The frequency of using newspapers as a source of news among adults in the United States varies by age group2As an AI language model, I don’t have personal experiences or preferences. However, I can provide you with some general information. In the United States, the average daily time spent reading among adults was just 15 minutes in 20221. This marked a return to pre-pandemic levels. The time spent reading in the U.S. surpassed 20 minutes per day in 2020 but dropped again the following year1.
                        Reading habits can vary from person to person. Some people read newspapers and magazines regularly, while others may not read them at all. According to a survey conducted in 2017, 26% of respondents aged 18 to 29 years stated that they read print magazines less than once a month
                        `])
                        conditionsDependsOnUserSpeech(1)
                    } else {
                        await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Where do you live? ");
                        converstionSteps--;
                    }

                }
            } else {
                if (converstionSteps == 1) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError("Are you ready");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating, Are you ready");
                        converstionSteps--;
                    }
                    else {
                        await playScript("Okay. Are you happy today?");
                        setSampleAns(['yes, I am today you may proceed now'])
                    }
                }
                if (converstionSteps == 2) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError("Are you ready");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating, Are you ready");
                        converstionSteps--;
                    }
                    else {
                        await playScript("Okay. Do you like to do exercise?");
                        setSampleAns([" Yes, i love to do exercies", "2, Generally i don't like to do exercise"]);
                        conditionsDependsOnUserSpeech(0)
                    }
                }
                if (converstionSteps == 3) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError("Do you like to do exercise?");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating,Do you like to do exercise?");
                        converstionSteps--;
                    }
                    else {
                        await playScript("Let's talk about newspapers and magazines. How often do you read a newspaper? How about a magazine?");
                        setSampleAns([" i haven't bought a paper magazine or newspaper as long as i remember i may have flipped through one in a superstore but that's about it but i do follow um subscriptions on my mobile i read a magazine called femina on internet every week ",
                            `2 , According to a survey held in the United States in August 2022, just 16 percent of U.S. adults used national newspapers as a source of news on a daily basis or a few times each week1. Meanwhile, 22 percent read local papers daily or several times per week1. The frequency of using newspapers as a source of news among adults in the United States varies by age group2As an AI language model, I don’t have personal experiences or preferences. However, I can provide you with some general information. In the United States, the average daily time spent reading among adults was just 15 minutes in 20221. This marked a return to pre-pandemic levels. The time spent reading in the U.S. surpassed 20 minutes per day in 2020 but dropped again the following year1.
                   Reading habits can vary from person to person. Some people read newspapers and magazines regularly, while others may not read them at all. According to a survey conducted in 2017, 26% of respondents aged 18 to 29 years stated that they read print magazines less than once a month
                   `])
                        conditionsDependsOnUserSpeech(1)
                    }
                }
            }

            if (converstionSteps == 4) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" How often do you read a newspaper? How about a magazine?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating, How often do you read a newspaper? How about a magazine?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/do/gi) || converstionStepsText.match(/time/gi) ||
                    converstionStepsText.match(/read/gi) || converstionStepsText.match(/Newspaper/gi) ||
                    converstionStepsText.match(/Magazine/gi) || converstionStepsText.match(/money/gi) ||
                    converstionStepsText.match(/actually/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/Learn/gi) || converstionStepsText.match(/have/gi) ||
                    converstionStepsText.match(/internet/gi) || converstionStepsText.match(/Spend/gi) ||
                    converstionStepsText.match(/frequency/gi) || converstionStepsText.match(/relieves/gi) ||
                    converstionStepsText.match(/Take/gi) || converstionStepsText.match(/personal/gi) ||
                    converstionStepsText.match(/do/gi) || converstionStepsText.match(/However/gi)
                ) {
                    await playScript("What articles do you like reading?");
                    setSampleAns([`1 , I love reading about health, fashion and recent trends. These are also related to my hobbies. The cupcake that I baked yesterday was vegan, healthy and delicious.
                    The types of articles people like reading
                    1. News articles
                    2. How-to articles
                    3. Listicles
                    4. Opinion pieces
                    5. Personal essays
                    6. Entertainment news and reviews
                    7. Health and wellness articles
                    8. Travel articles
                    9. Technology articles
                    10. Business and finance articles
                    Conclusion
                    `])
                    conditionsDependsOnUserSpeech(2)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.   How often do you read a newspaper? How about a magazine?");
                    converstionSteps--;
                }



            } else if (converstionSteps == 5) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("What articles do you like reading?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating, What articles do you like reading?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/do/gi) || converstionStepsText.match(/article/gi) ||
                    converstionStepsText.match(/read/gi) || converstionStepsText.match(/News/gi) ||
                    converstionStepsText.match(/Magazine/gi) || converstionStepsText.match(/like/gi) ||
                    converstionStepsText.match(/actually/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/about/gi) || converstionStepsText.match(/health/gi) ||
                    converstionStepsText.match(/hobbie/gi) || converstionStepsText.match(/love/gi) ||
                    converstionStepsText.match(/Opinion/gi) || converstionStepsText.match(/personal/gi) ||
                    converstionStepsText.match(/Entertainment/gi) || converstionStepsText.match(/Health/gi) ||
                    converstionStepsText.match(/Travel/gi) || converstionStepsText.match(/Technology/gi) ||
                    converstionStepsText.match(/Business/gi)
                ) {
                    await playScript(" Okay. When was the last time you bought a magazine or newspaper?");
                    setSampleAns([` as i mentioned before, I don't remember buying a newspaper or a magazine in a long time. However, I do have a digital subscription to femina which I read each week. It is not much but just a few rupees each month and they do have really good information .`])
                    conditionsDependsOnUserSpeech(3)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. What articles do you like reading?");
                    converstionSteps--;
                }



            } else if (converstionSteps == 6) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("When was the last time you bought a magazine or newspaper?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating, When was the last time you bought a magazine or newspaper?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/last/gi) || converstionStepsText.match(/bought/gi) ||
                    converstionStepsText.match(/read/gi) || converstionStepsText.match(/News/gi) ||
                    converstionStepsText.match(/Magazine/gi) || converstionStepsText.match(/like/gi) ||
                    converstionStepsText.match(/actually/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/no/gi) || converstionStepsText.match(/yes/gi) ||
                    converstionStepsText.match(/do/gi) || converstionStepsText.match(/did/gi) ||
                    converstionStepsText.match(/mention/gi) || converstionStepsText.match(/health/gi) ||
                    converstionStepsText.match(/hobbie/gi) || converstionStepsText.match(/love/gi) ||
                    converstionStepsText.match(/Opinion/gi) || converstionStepsText.match(/personal/gi) ||
                    converstionStepsText.match(/Entertainment/gi) || converstionStepsText.match(/Health/gi) ||
                    converstionStepsText.match(/Travel/gi) || converstionStepsText.match(/Technology/gi) ||
                    converstionStepsText.match(/Business/gi)
                ) {
                    await playScript("Have you ever written an article for a magazine or newspaper?");
                    setSampleAns([` let me think about it i did write an article for my school newsletter when i was in middle school i wrote an article for a school newsletter club stating the importance of planting trees and taking care of the environment`])
                    conditionsDependsOnUserSpeech(4)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. When was the last time you bought a magazine or newspaper?");
                    converstionSteps--;
                }



            } else if (converstionSteps == 7) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Have you ever written an article for a magazine or newspaper?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,Have you ever written an article for a magazine or newspaper?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/write/gi) || converstionStepsText.match(/written/gi) ||
                    converstionStepsText.match(/read/gi) || converstionStepsText.match(/News/gi) ||
                    converstionStepsText.match(/Magazine/gi) || converstionStepsText.match(/like/gi) ||
                    converstionStepsText.match(/actually/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/no/gi) || converstionStepsText.match(/yes/gi) ||
                    converstionStepsText.match(/do/gi) || converstionStepsText.match(/did/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/about/gi) ||
                    converstionStepsText.match(/hobbie/gi) || converstionStepsText.match(/love/gi) ||
                    converstionStepsText.match(/Opinion/gi) || converstionStepsText.match(/personal/gi) ||
                    converstionStepsText.match(/Entertainment/gi) || converstionStepsText.match(/Health/gi) ||
                    converstionStepsText.match(/Travel/gi) || converstionStepsText.match(/Technology/gi) ||
                    converstionStepsText.match(/Business/gi) ||
                    converstionStepsText.match(/school/gi) || converstionStepsText.match(/college/gi) ||
                    converstionStepsText.match(/child/gi) || converstionStepsText.match(/ago/gi)
                ) {
                    await playScript("If you subscribed to a Monthly Magazine, what would it be and why?");
                    setSampleAns([`  aside from femina i would love to subscribe to verve and women's era
                    all of these publications are not only originated from india but they also really have good updated information
                    `,
                        `2, A magazine subscription is a recurring delivery of your chosen magazine on either a weekly, monthly, bi-monthly or quarterly basis. A magazine subscription is designed to ensure you get every issue of the magazine during the duration of your subscription, as well as added … If I were to subscribe to a monthly magazine, I would choose National Geographic. It is a magazine that has been around for over 130 years and has a reputation for publishing high-quality articles and photographs on geography, science, history, and culture. The magazine’s content is both informative and visually stunning, making it an excellent choice for anyone who wants to learn more about the world around them. Additionally, National Geographic has a strong commitment to environmentalism and conservation, which is an issue that I care deeply about. Overall, I think that National Geographic would be a great choice for anyone who wants to stay informed about the world while also enjoying beautiful photography and engaging articles 1.`
                    ])
                    conditionsDependsOnUserSpeech(5)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Have you ever written an article for a magazine or newspaper?");
                    converstionSteps--;
                }




            } else if (converstionSteps == 8) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("If you subscribed to a Monthly Magazine, what would it be and why?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,If you subscribed to a Monthly Magazine, what would it be and why?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/subscribe/gi) || converstionStepsText.match(/Month/gi) ||
                    converstionStepsText.match(/read/gi) || converstionStepsText.match(/News/gi) ||
                    converstionStepsText.match(/Magazine/gi) || converstionStepsText.match(/like/gi) ||
                    converstionStepsText.match(/actually/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/no/gi) || converstionStepsText.match(/yes/gi) ||
                    converstionStepsText.match(/do/gi) || converstionStepsText.match(/did/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/about/gi) ||
                    converstionStepsText.match(/would/gi) || converstionStepsText.match(/will/gi) ||
                    converstionStepsText.match(/may/gi) || converstionStepsText.match(/personal/gi) ||
                    converstionStepsText.match(/might/gi) || converstionStepsText.match(/Health/gi) ||
                    converstionStepsText.match(/aside/gi) || converstionStepsText.match(/Technology/gi) ||
                    converstionStepsText.match(/Business/gi) ||
                    converstionStepsText.match(/publication/gi) || converstionStepsText.match(/information/gi) ||
                    converstionStepsText.match(/delivery/gi) || converstionStepsText.match(/ensure/gi) ||
                    converstionStepsText.match(/National/gi) || converstionStepsText.match(/quality/gi) ||
                    converstionStepsText.match(/photograph/gi) ||
                    converstionStepsText.match(/geography/gi) || converstionStepsText.match(/culture/gi)
                ) {
                    await playScript("Okay. That was about section 1. Thanks.");
                    conditionsDependsOnUserSpeech(6)
                    await sendSpeakingtextToBackend(recordedText);
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. If you subscribed to a Monthly Magazine, what would it be and why?");
                    converstionSteps--;
                }

            }

        }

        console.log("converstionStepsText");
        console.log(converstionStepsText);
        converstionStepsText = "";
    }

    async function Test7Sec2() {

    }

    async function Test7Sec3() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            await playScript(
                " My name is Adrian &  I will be your examiner for this part of the test for part three. Are you comfortable?"
            );
            setSampleAns(["Yes, I am comfortable you please proceed the test"])
        }
        converstionSteps++;
        if (converstionStepsText != '') {
            // if (converstionStepsText.length < 10) {
            //     await smallTalkError();
            // }
            // if (converstionStepsText.match('repeat') || converstionStepsText.match("don't understand")) {
            //     await playScript(
            //         "Ok , I am repeating.");
            //     converstionSteps--;
            // }
            // if (converstionSteps == 0) {
            //     await playScript(

            //         " My name is Adrian. &  I will be your examiner for this part of the test for this part three. Are you confortable?"
            //     );
            // }
            if (converstionSteps == 1) {
                await playScript(
                    "Sorry.... Can you repeat that please?"
                );
                setSampleAns([' You can simply repeated the answer that you have given a little momemnt before'])
            } else if (converstionSteps == 2) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Are you ready?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,Are you ready?");
                    converstionSteps--;
                }
                else {
                    await playScript("Let's talk about successful restaurants. What are the most popular types of restaurants these days?");
                    setSampleAns([`1 , it is sad to say but uh the most popular restaurants these days are the fast food chains like mcdonald's and kfc because they provide fast food and at a cheaper cost and also they are addictive because of all the msg and sugar however i must say that restaurants like under the mango tree are also popular for their quality `
                    ])
                    conditionsDependsOnUserSpeech(0)
                }
            }
            else if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("What are the most popular types of restaurants these days?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,What are the most popular types of restaurants these days?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/restaurant/gi) || converstionStepsText.match(/popular/gi) ||
                    converstionStepsText.match(/these/gi) || converstionStepsText.match(/day/gi) ||
                    converstionStepsText.match(/Fine/gi) || converstionStepsText.match(/dining/gi) ||
                    converstionStepsText.match(/Casual/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/Cafés/gi) || converstionStepsText.match(/Buffet/gi) ||
                    converstionStepsText.match(/Food/gi) || converstionStepsText.match(/Pubs/gi) ||
                    converstionStepsText.match(/Seafood/gi) || converstionStepsText.match(/Diner/gi) ||
                    converstionStepsText.match(/Vegetarian/gi) || converstionStepsText.match(/Family/gi)
                ) {
                    await playScript("And. Why are these so popular?");
                    setSampleAns([" as i mentioned before these places uh provide fast food and cheap food and people nowadays are busy in their life and they don't have much money so they prefer uh fast food and especially a lot of young people go out to these outlets for a quick bite"])
                    conditionsDependsOnUserSpeech(1)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. What are the most popular types of restaurants these days?");
                    converstionSteps--;
                }



            }
            else if (converstionSteps == 4) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Why are these so popular?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating, Why are these so popular?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/restaurant/gi) || converstionStepsText.match(/popular/gi) ||
                    converstionStepsText.match(/these/gi) || converstionStepsText.match(/day/gi) ||
                    converstionStepsText.match(/Fine/gi) || converstionStepsText.match(/dining/gi) ||
                    converstionStepsText.match(/Casual/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/Cafés/gi) || converstionStepsText.match(/Buffet/gi) ||
                    converstionStepsText.match(/Food/gi) || converstionStepsText.match(/Pubs/gi) ||
                    converstionStepsText.match(/Seafood/gi) || converstionStepsText.match(/Diner/gi) ||
                    converstionStepsText.match(/Vegetarian/gi) || converstionStepsText.match(/Family/gi) ||
                    converstionStepsText.match(/mention/gi) || converstionStepsText.match(/because/gi) ||
                    converstionStepsText.match(/so/gi) || converstionStepsText.match(/People/gi) ||
                    converstionStepsText.match(/love/gi) || converstionStepsText.match(/like/gi) ||
                    converstionStepsText.match(/become/gi) || converstionStepsText.match(/Depend/gi) ||
                    converstionStepsText.match(/alway/gi) || converstionStepsText.match(/delicious/gi)
                ) {
                    await playScript("What is needed for a restaurant to be successful?");
                    setSampleAns([`1 ,  
                    for a restaurant to be successful i believe like under the mango tree the quality of food is
                    Firstly, apart from that the service is important and it should have a unique selling point like a beautiful view.
                    To ensure the success of a restaurant, you need to focus on the following key factors1:
                    Concept: Every successful restaurant has a clear, distinct concept.
                    Food and drink quality: At the heart of a successful restaurant is the quality of food and drink.
                    Customer service: A friendly, efficient, and attentive staff can enhance a customer’s overall dining experience and generate repeat business.
                    Location
                    Menu innovation
                    In addition to practical skills, education regarding business practices, financing, and marketing are equally imperative2.`])
                    conditionsDependsOnUserSpeech(2)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Why are these so popular?");
                    converstionSteps--;
                }



            }
            else if (converstionSteps == 5) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" What is needed for a restaurant to be successful?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating, What is needed for a restaurant to be successful?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/restaurant/gi) || converstionStepsText.match(/popular/gi) ||
                    converstionStepsText.match(/these/gi) || converstionStepsText.match(/day/gi) ||
                    converstionStepsText.match(/need/gi) || converstionStepsText.match(/dining/gi) ||
                    converstionStepsText.match(/Casual/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/Cafés/gi) || converstionStepsText.match(/Buffet/gi) ||
                    converstionStepsText.match(/food/gi) || converstionStepsText.match(/Pubs/gi) ||
                    converstionStepsText.match(/feedback/gi) || converstionStepsText.match(/Diner/gi) ||
                    converstionStepsText.match(/Vegetarian/gi) || converstionStepsText.match(/success/gi) ||
                    converstionStepsText.match(/mention/gi) || converstionStepsText.match(/because/gi) ||
                    converstionStepsText.match(/so/gi) || converstionStepsText.match(/People/gi) ||
                    converstionStepsText.match(/love/gi) || converstionStepsText.match(/like/gi) ||
                    converstionStepsText.match(/become/gi) || converstionStepsText.match(/Depend/gi) ||
                    converstionStepsText.match(/alway/gi) || converstionStepsText.match(/delicious/gi) ||
                    converstionStepsText.match(/believe/gi) || converstionStepsText.match(/apart/gi) ||
                    converstionStepsText.match(/concept/gi) || converstionStepsText.match(/service/gi) ||
                    converstionStepsText.match(/Location/gi) || converstionStepsText.match(/menu/gi) ||
                    converstionStepsText.match(/skill/gi) || converstionStepsText.match(/staff/gi) ||
                    converstionStepsText.match(/Right/gi) || converstionStepsText.match(/Effective/gi)
                ) {
                    await playScript("How do negative experiences affect a restaurant?");
                    setSampleAns([` Negative experiences can have a significant impact on a restaurant’s reputation and revenue. When customers have negative experiences, they are more likely to leave negative reviews,which can deter potential clients from visiting the restaurant1. In fact, a single one-star decrease in a restaurant’s rating can reduce its revenue by nearly 9%2. Negative reviews can also affect the restaurant’s search ranking and brand reputation1. It is important for restaurant owners to respond professionally to negative reviews and address customer concerns to mitigate the impact of negative experiences12.
                    Moreover, during the COVID-19 pandemic, customers’ dining behavior has been altered, and fewer customers are willing to dine in restaurants.
                    If you are a restaurant owner or manager, it is crucial to address negative experiences promptly and take steps to improve customer satisfaction. This may involve addressing issues with food quality, service, cleanliness, or other aspects of the dining experience4. By actively working to resolve negative experiences and providing exceptional customer service, restaurants can enhance their reputation and attract more customers.
                    Please let me know if you need further assistance or have any other questions!
                    `])
                    conditionsDependsOnUserSpeech(3)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. What is needed for a restaurant to be successful?");
                    converstionSteps--;
                }


            } else if (converstionSteps == 6) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("How do negative experiences affect a restaurant?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating, How do negative experiences affect a restaurant?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/negative/gi) || converstionStepsText.match(/affect/gi) ||
                    converstionStepsText.match(/restaurant/gi) || converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/no/gi) || converstionStepsText.match(/actually/gi) ||
                    converstionStepsText.match(/food/gi) || converstionStepsText.match(/bad/gi) ||
                    converstionStepsText.match(/feedback/gi) || converstionStepsText.match(/good/gi) ||
                    converstionStepsText.match(/positive/gi) || converstionStepsText.match(/provid/gi) ||
                    converstionStepsText.match(/business/gi) || converstionStepsText.match(/because/gi) ||
                    converstionStepsText.match(/customer/gi) || converstionStepsText.match(/People/gi) ||
                    converstionStepsText.match(/love/gi) || converstionStepsText.match(/like/gi) ||
                    converstionStepsText.match(/become/gi) || converstionStepsText.match(/Depend/gi) ||
                    converstionStepsText.match(/consequences/gi) || converstionStepsText.match(/Potential/gi) ||
                    converstionStepsText.match(/believe/gi) || converstionStepsText.match(/apart/gi) ||
                    converstionStepsText.match(/concept/gi) || converstionStepsText.match(/service/gi) ||
                    converstionStepsText.match(/brand/gi) || converstionStepsText.match(/review/gi) ||
                    converstionStepsText.match(/impact/gi) || converstionStepsText.match(/reputation/gi) ||
                    converstionStepsText.match(/decrease/gi) || converstionStepsText.match(/incress/gi)

                ) {
                    await playScript("Okay. How has technology affected the success or failure of a restaurant?");
                    setSampleAns([` the modern technologies are used for preparing food ordering and serving has very much helped in restaurants to be successful uh so many restaurants nowadays use digital menus they have a qr code at the table to order food also reviews online can make or break a restaurant as i mentioned earlier the reason i chose to go to under the mango tree was uh because of the online reviews it had 4.5 from almost 400 guests .`])
                    conditionsDependsOnUserSpeech(4)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. How do negative experiences affect a restaurant?");
                    converstionSteps--;
                }



            } else if (converstionSteps == 7) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("How has technology affected the success or failure of a restaurant?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating, How has technology affected the success or failure of a restaurant?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/technology/gi) || converstionStepsText.match(/affect/gi) ||
                    converstionStepsText.match(/restaurant/gi) || converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/no/gi) || converstionStepsText.match(/actually/gi) ||
                    converstionStepsText.match(/food/gi) || converstionStepsText.match(/bad/gi) ||
                    converstionStepsText.match(/feedback/gi) || converstionStepsText.match(/good/gi) ||
                    converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                    converstionStepsText.match(/business/gi) || converstionStepsText.match(/sufficient/gi) ||
                    converstionStepsText.match(/customer/gi) || converstionStepsText.match(/success/gi) ||
                    converstionStepsText.match(/use/gi) || converstionStepsText.match(/help/gi) ||
                    converstionStepsText.match(/digital/gi) || converstionStepsText.match(/Depend/gi) ||
                    converstionStepsText.match(/review/gi) || converstionStepsText.match(/online/gi) ||
                    converstionStepsText.match(/believe/gi) || converstionStepsText.match(/apart/gi) ||
                    converstionStepsText.match(/concept/gi) || converstionStepsText.match(/impact/gi) ||
                    converstionStepsText.match(/brand/gi) || converstionStepsText.match(/According/gi) ||
                    converstionStepsText.match(/franchise/gi) || converstionStepsText.match(/disclosure/gi) ||
                    converstionStepsText.match(/decrease/gi) || converstionStepsText.match(/incress/gi)

                ) {
                    await playScript(
                        "Let's talk about improving business. What are the best ways to improve the operations of a business?"
                    )
                    setSampleAns([` Improving the operations of a business is a complex and ongoing process that requires a lot of effort and attention to detail. There are many ways to improve operational efficiency, and the best approach depends on the specific needs and goals of your business. Here are some general tips to get you started:
                    Streamline processes: I
                    Invest in technology:
                    Focus on customer needs: 
                    Train your employees: 
                    Measure performance: 
                    Collaborate with partners: 
                    Stay up-to-date: 
                    `])
                    conditionsDependsOnUserSpeech(5)

                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. How has technology affected the success or failure of a restaurant?");
                    converstionSteps--;
                }


            }
            else if (converstionSteps == 8) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("What are the best ways to improve the operations of a business?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,What are the best ways to improve the operations of a business?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/technology/gi) || converstionStepsText.match(/affect/gi) ||
                    converstionStepsText.match(/restaurant/gi) || converstionStepsText.match(/best/gi) ||
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/way/gi) || converstionStepsText.match(/actually/gi) ||
                    converstionStepsText.match(/operation/gi) || converstionStepsText.match(/improve/gi) ||
                    converstionStepsText.match(/feedback/gi) || converstionStepsText.match(/failure/gi) ||
                    converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                    converstionStepsText.match(/business/gi) || converstionStepsText.match(/sufficient/gi) ||
                    converstionStepsText.match(/customer/gi) || converstionStepsText.match(/success/gi) ||
                    converstionStepsText.match(/through/gi) || converstionStepsText.match(/help/gi) ||
                    converstionStepsText.match(/feedback/gi) || converstionStepsText.match(/Depend/gi) ||
                    converstionStepsText.match(/review/gi) || converstionStepsText.match(/company/gi) ||
                    converstionStepsText.match(/believe/gi) || converstionStepsText.match(/apart/gi) ||
                    converstionStepsText.match(/concept/gi) || converstionStepsText.match(/impact/gi) ||
                    converstionStepsText.match(/brand/gi) || converstionStepsText.match(/According/gi) ||
                    converstionStepsText.match(/mistake/gi) || converstionStepsText.match(/simplify/gi) ||
                    converstionStepsText.match(/Resolve/gi) || converstionStepsText.match(/Keep/gi) ||
                    converstionStepsText.match(/complex/gi) || converstionStepsText.match(/process/gi) ||
                    converstionStepsText.match(/require/gi) || converstionStepsText.match(/efficiency/gi) ||
                    converstionStepsText.match(/Focus/gi) || converstionStepsText.match(/Measure/gi) ||
                    converstionStepsText.match(/Collaborate/gi)
                ) {
                    await playScript("Ok . Who is responsible for improving a business?")
                    setSampleAns([` The responsibility of improving a business can be divided into several roles, depending on the methodology used. For instance, in the Six Sigma methodology, the following roles are required: Six Sigma Deployment Leader, Six Sigma Champion, Six Sigma Master Black Belt (MBB), Six Sigma Black Belt (BB), Six Sigma Green Belt (GB), and Six Sigma Yellow Belt (YB) 1.
                    The Six Sigma Deployment Leader is responsible for establishing business objectives and the role of Six Sigma to achieve those goals. They also create an environment that enables success, including goals, measures, coaching, and communication, among others. The Six Sigma Champion is responsible for ensuring that process improvements are captured and sustained. They typically manage Six Sigma Green Belts (GB’s) and must understand the challenges faced by GB associates. The Six Sigma Master Black Belt (MBB) is responsible for training and coaching Black Belts and Green Belts. The Black Belt (BB) is responsible for taking the process improvements to the next level in the organization using statistical analysis and Six Sigma tools. The Green Belt (GB) is responsible for executing process improvement projects under the guidance of a Black Belt 1.
                    Another role that is responsible for improving a business is a Process Improvement Manager. Their main role is to provide an objective assessment of how well a business operates and give actionable tips to refine all aspects of the business
                    `])
                    conditionsDependsOnUserSpeech(6)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. What are the best ways to improve the operations of a business?");
                    converstionSteps--;
                }

            } else if (converstionSteps == 9) {

                if (converstionStepsText.length < 10) {
                    await smallTalkError("Who is responsible for improving a business?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,Who is responsible for improving a business?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/responsible/gi) || converstionStepsText.match(/team/gi) ||
                    converstionStepsText.match(/improving/gi) || converstionStepsText.match(/teamwork/gi) ||
                    converstionStepsText.match(/staff/gi) || converstionStepsText.match(/owner/gi) ||
                    converstionStepsText.match(/Business/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/management/gi) || converstionStepsText.match(/frontline/gi) ||
                    converstionStepsText.match(/worker/gi) || converstionStepsText.match(/provide/gi) ||
                    converstionStepsText.match(/quality/gi) || converstionStepsText.match(/service/gi) ||
                    converstionStepsText.match(/skill/gi) || converstionStepsText.match(/problem/gi) ||
                    converstionStepsText.match(/result/gi) || converstionStepsText.match(/negative/gi) ||
                    converstionStepsText.match(/positive/gi) || converstionStepsText.match(/impact/gi) ||
                    converstionStepsText.match(/action/gi) || converstionStepsText.match(/performance/gi) ||
                    converstionStepsText.match(/during/gi) || converstionStepsText.match(/organization/gi)

                ) {
                    await playScript("So, what resources are available to help businesses operate well?")
                    setSampleAns([` i think there are many resources available for companies to function especially in capitalist society where small and medium businesses are the backbone of the economy there are different kinds of business loans trainings and tax benefits available for companies to try during the pandemic the government provided relief funds for companies to survive the hardship .
                    Employees – money for salaries, tax, 
                    Expenses – travel, meetings, food, hotels…
                    Insurance – insure your business against normal risks.
                    Accountant – these may be outsourced or internal.
                    Project Management Tools – software for managing projects.
                    `])
                    conditionsDependsOnUserSpeech(7)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Who is responsible for improving a business?");
                    converstionSteps--;
                }



            } else if (converstionSteps == 10) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("what resources are available to help businesses operate well?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,what resources are available to help businesses operate well?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/responsible/gi) || converstionStepsText.match(/team/gi) ||
                    converstionStepsText.match(/improving/gi) || converstionStepsText.match(/resources/gi) ||
                    converstionStepsText.match(/available/gi) || converstionStepsText.match(/help/gi) ||
                    converstionStepsText.match(/Business/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/management/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/worker/gi) || converstionStepsText.match(/provide/gi) ||
                    converstionStepsText.match(/quality/gi) || converstionStepsText.match(/service/gi) ||
                    converstionStepsText.match(/operate/gi) || converstionStepsText.match(/problem/gi) ||
                    converstionStepsText.match(/Emotional/gi) || converstionStepsText.match(/negative/gi) ||
                    converstionStepsText.match(/positive/gi) || converstionStepsText.match(/impact/gi) ||
                    converstionStepsText.match(/action/gi) || converstionStepsText.match(/performance/gi) ||
                    converstionStepsText.match(/well/gi) || converstionStepsText.match(/Employee/gi) ||
                    converstionStepsText.match(/Expenses/gi) || converstionStepsText.match(/money/gi) ||
                    converstionStepsText.match(/salarie/gi) || converstionStepsText.match(/tax/gi) ||
                    converstionStepsText.match(/health/gi) || converstionStepsText.match(/travel/gi) ||
                    converstionStepsText.match(/meeting/gi) || converstionStepsText.match(/Insurance/gi) ||
                    converstionStepsText.match(/Accountant/gi) || converstionStepsText.match(/Tool/gi) ||
                    converstionStepsText.match(/Funding/gi) || converstionStepsText.match(/crucial/gi)
                ) {
                    await playScript("How can Entrepreneurs find resources to improve their business?")
                    setSampleAns([` the best way to support startups or growing companies is to search online or network with others in the industry it is wise to get more information from experienced companies that have already gone through growing pains 
                    Business websites
                   Business blogs
                   Crowdfunding platforms
                    Incubators and AcceleratorsStartup apps
                   Website creation resources
                   Project management resources
                   Customer communication tools
                    Professional communication technologies
                   Writing resources
                   Analytics tools
                   Competition research
                   Productivity tools
                   `])
                    conditionsDependsOnUserSpeech(8)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  what resources are available to help businesses operate well?");
                    converstionSteps--;
                }


            } else if (converstionSteps == 11) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("How can Entrepreneurs find resources to improve their business?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,How can Entrepreneurs find resources to improve their business?");
                    converstionSteps--;
                }
                else if (

                    converstionStepsText.match(/Entrepreneur/gi) || converstionStepsText.match(/find/gi) ||
                    converstionStepsText.match(/improving/gi) || converstionStepsText.match(/resources/gi) ||
                    converstionStepsText.match(/improve/gi) || converstionStepsText.match(/help/gi) ||
                    converstionStepsText.match(/Business/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/management/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/worker/gi) || converstionStepsText.match(/provide/gi) ||
                    converstionStepsText.match(/quality/gi) || converstionStepsText.match(/service/gi) ||
                    converstionStepsText.match(/operate/gi) || converstionStepsText.match(/problem/gi) ||
                    converstionStepsText.match(/support/gi) || converstionStepsText.match(/start/gi) ||
                    converstionStepsText.match(/companies/gi) || converstionStepsText.match(/company/gi) ||
                    converstionStepsText.match(/online/gi) || converstionStepsText.match(/performance/gi) ||
                    converstionStepsText.match(/grow/gi) || converstionStepsText.match(/Employee/gi) ||
                    converstionStepsText.match(/blog/gi) || converstionStepsText.match(/website/gi) ||
                    converstionStepsText.match(/platform/gi) || converstionStepsText.match(/Project /gi) ||
                    converstionStepsText.match(/resources/gi) || converstionStepsText.match(/Customer/gi) ||
                    converstionStepsText.match(/meeting/gi) || converstionStepsText.match(/communication/gi) ||
                    converstionStepsText.match(/Analytics/gi) || converstionStepsText.match(/Tool/gi) ||
                    converstionStepsText.match(/Productivity/gi) || converstionStepsText.match(/crucial/gi)
                ) {
                    await playScript("Okay. That was about section 3. Thanks.");
                    conditionsDependsOnUserSpeech(9)
                    await sendSpeakingtextToBackend(recordedText);
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. How can Entrepreneurs find resources to improve their business?");
                    converstionSteps--;
                }


            }

        }

        console.log("converstionStepsText");
        console.log(converstionStepsText);
        converstionStepsText = "";


    }
    //test-8 all sections---
    async function Test8Sec1() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            if (!userSpeakingTestNo) {
                await playScript(
                    "Hello and welcome to the IELTS speaking portion of the test. Jone is my name. & For this portion of the exam, I will serve as your examiner. We are carrying out this. Would you kindly tell me your entire name?"
                );
                setSampleAns([" Simply you can say your full name. As like my name is Jone dow.You can call me Jone"])
            } else {
                await playScript("Are you ready to take the test then?");
                setSampleAns([" Simply you can say the positive answer. As like Yes i am Ready to give the test. ", "2, Yes, I am reay.You can proceed the test"])
            }

        }

        converstionSteps++;
        if (converstionStepsText != '') {
            // if (converstionStepsText.length < 10) {
            //     await smallTalkError();
            // }

            // else if (converstionStepsText.match('repeat') || converstionStepsText.match(" understand")) {
            //     await playScript(
            //         "Ok , I am repeating.");
            //     converstionSteps--;
            // }

            // if (converstionSteps == 0) {
            //     await playScript(
            //         "Welcome to the speaking portion of the ielts exam. My name is adrian. & I will be your examiner for this part of the test. I will give you instructions for each of the parts. What is your full name?"
            //     );
            // } 

            if (!userSpeakingTestNo) {
                if (converstionSteps == 1) {
                    await playScript(
                        "I'll start your exam now. What's your full name, please?"
                    );
                } else if (converstionSteps == 2) {
                    if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating, What's your full name, please?");
                        converstionSteps--;
                    }
                    else if (converstionStepsText.match("name") || converstionStepsText.match("call")) {
                        if (converstionStepsText.match("call")) {
                            await playScript(
                                "So, for this section. I'm going to ask some general questions. Where do you live?"
                            );
                            setSampleAns([" Simply you can say your area/ or place where you are live in.As like I am living in Dhaka,Bangladesh", "2, I live in kolkata,India"])
                            localStorage.setItem("SpeakingTestNo", testNo);
                            conditionsDependsOnUserSpeech(0)
                        } else {
                            await playScript("Alright. What can I call you?");
                            setSampleAns(["You can simply say . You can call me Jone or your name here"]);
                            converstionSteps--;
                        }
                    }
                    else {
                        await playScript("Alright, what's your name?");
                        setSampleAns([" Hellow sir , I am jone dow . You can call me Mr. Jone"]);
                        converstionSteps--;
                    }

                } else if (converstionSteps == 3) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError(" Where do you live?");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating,  Where do you live?");
                        converstionSteps--;
                    }
                    else if (converstionStepsText.match(/live/gi) || converstionStepsText.match(/leaving/gi) ||
                        converstionStepsText.match(/in/gi) || converstionStepsText.match(/at/gi) ||
                        converstionStepsText.match(/from/gi) || converstionStepsText.match(/i am living/gi)) {
                        await playScript("So, what do you do in your free time?");
                        setSampleAns([` in my leisure time i like to watch movies and reading books just last night i finished reading book this summer i turned pretty.`, `2,  in my spare time i love to do photography and upload short videos on instagram i baked cupcakes and photographed and uploaded it on my social media profile just yesterday.`])
                        conditionsDependsOnUserSpeech(1)
                    } else {
                        await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Where do you live? ");
                        converstionSteps--;
                    }

                }
            } else {
                if (converstionSteps == 1) {
                    await playScript("Okay. Are you happy today?");
                    setSampleAns(["Yes or No that you can simply answer.", "2, you can simply say what you are feeling now"])
                }
                if (converstionSteps == 2) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError(" Are you ready?");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating,  Are you ready?");
                        converstionSteps--;
                    }
                    else {
                        await playScript("Okay. Do you work or study?");
                        setSampleAns(["  I work. I’ve been working as a freelance web designer for two years now. ", "2, I’m working in a specialist medical field that deals with diseases related to aging. My employer is a large multinational company. ", "3,  I study. I’m still in high school, in my final year. So I’m studying for my final exams now. "])
                        conditionsDependsOnUserSpeech(0)
                    }
                }
                if (converstionSteps == 3) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError(" Do you work or study?");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating,   Do you work or study?");
                        converstionSteps--;
                    }
                    else {
                        await playScript("So, what do you do in your free time?");
                        setSampleAns([` in my leisure time i like to watch movies and reading books just last night i finished reading book this summer i turned pretty.`, `2,  in my spare time i love to do photography and upload short videos on instagram i baked cupcakes and photographed and uploaded it on my social media profile just yesterday.`])
                        conditionsDependsOnUserSpeech(1)
                    }
                }
            }


            if (converstionSteps == 4) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" what do you do in your free time?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,   what do you do in your free time?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/free/gi) || converstionStepsText.match(/time/gi) ||
                    converstionStepsText.match(/spare/gi) || converstionStepsText.match(/upload/gi) ||
                    converstionStepsText.match(/do/gi) || converstionStepsText.match(/Work/gi) ||
                    converstionStepsText.match(/Exercise/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/Read/gi) || converstionStepsText.match(/write/gi) ||
                    converstionStepsText.match(/Take/gi) || converstionStepsText.match(/Invest/gi) ||
                    converstionStepsText.match(/money/gi) || converstionStepsText.match(/relieves/gi) ||
                    converstionStepsText.match(/make/gi) || converstionStepsText.match(/learn/gi) ||
                    converstionStepsText.match(/Play /gi) || converstionStepsText.match(/Pray/gi) ||
                    converstionStepsText.match(/meditate/gi) || converstionStepsText.match(/Spend/gi) ||
                    converstionStepsText.match(/Pursue/gi) || converstionStepsText.match(/hobby/gi) ||
                    converstionStepsText.match(/Deliver/gi) || converstionStepsText.match(/relieves/gi) ||
                    converstionStepsText.match(/skill/gi) || converstionStepsText.match(/Grow/gi) ||
                    converstionStepsText.match(/walt/gi) || converstionStepsText.match(/run/gi) ||
                    converstionStepsText.match(/fell/gi) || converstionStepsText.match(/watch/gi) ||
                    converstionStepsText.match(/see/gi) || converstionStepsText.match(/sleep/gi) ||
                    converstionStepsText.match(/bike/gi) || converstionStepsText.match(/travel/gi)

                ) {
                    await playScript("Okay. Let's talk about the home. Do you live in an apartment or house?");
                    setSampleAns([` i live in an
                    The apartment is on the sixth floor of a high rise building in the suburbs of ahmedabad. I have lived there since I was born.`, "2, A sample answer to this question is “I live in an apartment. I find it convenient as it is located in the city center and is close to my work and other amenities. The apartment is also well-maintained and equipped with modern amenities, such as a gym and a swimming pool”2."])
                    conditionsDependsOnUserSpeech(2)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  what do you do in your free time?");
                    converstionSteps--;
                }




            } else if (converstionSteps == 5) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Do you live in an apartment or house?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,   Do you live in an apartment or house?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/live/gi) || converstionStepsText.match(/living/gi) ||
                    converstionStepsText.match(/leave/gi) || converstionStepsText.match(/house/gi) ||
                    converstionStepsText.match(/do/gi) || converstionStepsText.match(/apartment/gi) ||
                    converstionStepsText.match(/parent/gi) || converstionStepsText.match(/alone/gi) ||
                    converstionStepsText.match(/self/gi) || converstionStepsText.match(/city /gi) ||
                    converstionStepsText.match(/area/gi) || converstionStepsText.match(/resident/gi) ||
                    converstionStepsText.match(/Do/gi) || converstionStepsText.match(/yes/gi) ||
                    converstionStepsText.match(/no/gi) || converstionStepsText.match(/younger/gi) ||
                    converstionStepsText.match(/elder/gi)

                ) {
                    await playScript("Which is your favorite room and why?");
                    setSampleAns([" really love my bedroom because it is my own private place and i have decorated it to my liking. I can find comfort and solitude there. I really like to study in my bedroom and i have spent many hours preparing for this exam over the past few months .Your favorite room is the one that makes you feel comfortable, relaxed, and happy12. It could be your bedroom, where you can enjoy the calmness and peace1. It could be your family room, where you can admire the colors and patterns of your decor1. It could be a special space that you created for your hobbies and interests, such as a man cave, a shed, or a garage corner2. Your favorite room is the one that reflects your personality and preferences.This question is quite easy to answer. Simply choose a room that you like, then explain why you like it. For reasons to like a room, you could talk about: 1. How comfy it is 2. How private it is 3. How sociable it is 4. Things you like to do there 5. Things you and your family or flatmates do there 6. The pleasant decor"])
                    conditionsDependsOnUserSpeech(3)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you live in an apartment or house?");
                    converstionSteps--;
                }


            } else if (converstionSteps == 6) {

                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Which is your favorite room and why?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,  Which is your favorite room and why?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/favorite/gi) || converstionStepsText.match(/because/gi) ||
                    converstionStepsText.match(/leave/gi) || converstionStepsText.match(/house/gi) ||
                    converstionStepsText.match(/room/gi) || converstionStepsText.match(/apartment/gi) ||
                    converstionStepsText.match(/love/gi) || converstionStepsText.match(/alone/gi) ||
                    converstionStepsText.match(/self/gi) || converstionStepsText.match(/like/gi) ||
                    converstionStepsText.match(/really/gi) || converstionStepsText.match(/private/gi) ||
                    converstionStepsText.match(/place/gi) || converstionStepsText.match(/actually/gi) ||
                    converstionStepsText.match(/find/gi) || converstionStepsText.match(/comfort/gi) ||
                    converstionStepsText.match(/solitude/gi) ||
                    converstionStepsText.match(/feel/gi) || converstionStepsText.match(/comfort/gi) ||
                    converstionStepsText.match(/relaxed/gi) || converstionStepsText.match(/happy/gi) ||
                    converstionStepsText.match(/space/gi) || converstionStepsText.match(/personality/gi) ||
                    converstionStepsText.match(/preferences/gi) || converstionStepsText.match(/explain/gi) ||
                    converstionStepsText.match(/decor/gi)
                ) {
                    await playScript(" How often do you clean your home?");
                    setSampleAns([" I regularly tidy up my house whether i am taking out the trash washing dishes or doing bit of dusting. I always do my part to keep my home clean. Just yesterday I swept and vacuumed the floors."])
                    conditionsDependsOnUserSpeech(4)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Which is your favorite room and why?");
                    converstionSteps--;
                }


            } else if (converstionSteps == 7) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("How often do you clean your home?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,  How often do you clean your home?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/often/gi) || converstionStepsText.match(/home/gi) ||
                    converstionStepsText.match(/clean/gi) || converstionStepsText.match(/love/gi) ||
                    converstionStepsText.match(/like/gi) || converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/no/gi) || converstionStepsText.match(/actually/gi) ||
                    converstionStepsText.match(/regularly/gi) || converstionStepsText.match(/taking/gi) ||
                    converstionStepsText.match(/dust/gi) || converstionStepsText.match(/swept/gi) ||
                    converstionStepsText.match(/vacuumed/gi) || converstionStepsText.match(/depend/gi) ||
                    converstionStepsText.match(/time/gi) || converstionStepsText.match(/day/gi) ||
                    converstionStepsText.match(/week/gi) || converstionStepsText.match(/month/gi) ||
                    converstionStepsText.match(/year/gi) || converstionStepsText.match(/few /gi) ||
                    converstionStepsText.match(/replace/gi)
                ) {
                    await playScript("What is your least favorite chore, and why?");
                    setSampleAns([` i don't like to clean the windows because i find it to be tiring and time taking task
                    it is really tough to get all the dirt off and really make it clean
                    Cleaning the Bathroom/Toilet
                    2. Washing the Dishes
                    3. Cleaning the Stovetop and Oven
                    4. Doing Laundry and Ironing
                    5. Dusting
                    6. Sweeping and Vacuuming
                    7. Mopping
                    8. Grocery Shopping and Cooking
                    9. Cleaning the Windows
                    Wrapping it all Up
                    `])
                    conditionsDependsOnUserSpeech(5)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. How often do you clean your home?");
                    converstionSteps--;
                }



            } else if (converstionSteps == 8) {

                if (converstionStepsText.length < 10) {
                    await smallTalkError(" What is your least favorite chore, and why?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,  What is your least favorite chore, and why?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/least/gi) || converstionStepsText.match(/list/gi) ||
                    converstionStepsText.match(/favorite/gi) || converstionStepsText.match(/chore/gi) ||
                    converstionStepsText.match(/because/gi) || converstionStepsText.match(/clean/gi) ||
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/no/gi) || converstionStepsText.match(/actually/gi) ||
                    converstionStepsText.match(/do/gi) || converstionStepsText.match(/like/gi) ||
                    converstionStepsText.match(/love/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/Doing/gi) || converstionStepsText.match(/Bathroom/gi) ||
                    converstionStepsText.match(/Dishes/gi) || converstionStepsText.match(/Dust/gi) ||
                    converstionStepsText.match(/Sweep/gi) || converstionStepsText.match(/Mop/gi) ||
                    converstionStepsText.match(/Grocery/gi) || converstionStepsText.match(/shop/gi) ||
                    converstionStepsText.match(/cook/gi)
                ) {
                    await playScript("So , when do you feel your home is pleasant?");
                    setSampleAns([` :i find my home to be comfortable when it is organized and filled with aroma of my home cooking this means that dinner is almost ready and the family is about to sit and enjoy the meal together yesterday we had a good conversation while eating my mom's famous chicken biryani First, privacy and my things. I also feel good if the temperature is not that hot or cold. What’s the difference between where you are living now and where you have lived in the past? In the past, I lived in a big house, I have my own toilet and I have a place for my office that is a bit far from 
                    `])
                    conditionsDependsOnUserSpeech(6)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. What is your least favorite chore, and why?");
                    converstionSteps--;
                }



            } else if (converstionSteps == 9) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" when do you feel your home is pleasant?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,  when do you feel your home is pleasant?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/feel/gi) || converstionStepsText.match(/home/gi) ||
                    converstionStepsText.match(/favorite/gi) || converstionStepsText.match(/pleasant/gi) ||
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/no/gi) || converstionStepsText.match(/actually/gi) ||
                    converstionStepsText.match(/do/gi) || converstionStepsText.match(/like/gi) ||
                    converstionStepsText.match(/love/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/because/gi) || converstionStepsText.match(/every/gi) ||
                    converstionStepsText.match(/comfortable/gi) || converstionStepsText.match(/find/gi) ||
                    converstionStepsText.match(/dinner/gi) || converstionStepsText.match(/enjoy/gi) ||
                    converstionStepsText.match(/family/gi) || converstionStepsText.match(/younger/gi) ||
                    converstionStepsText.match(/elder/gi) || converstionStepsText.match(/sister/gi) ||
                    converstionStepsText.match(/brother/gi) ||
                    converstionStepsText.match(/father/gi) || converstionStepsText.match(/mother/gi) ||
                    converstionStepsText.match(/grand/gi) || converstionStepsText.match(/little/gi) ||
                    converstionStepsText.match(/together/gi) || converstionStepsText.match(/preferences/gi)
                ) {
                    await playScript("Okay. That was about section 1. Thanks.");
                    conditionsDependsOnUserSpeech(7)
                    await sendSpeakingtextToBackend(recordedText);
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. when do you feel your home is pleasant?");
                    converstionSteps--;
                }



            }

        }

        console.log("converstionStepsText");
        console.log(converstionStepsText);
        converstionStepsText = "";
    }

    async function Test8Sec2() {

    }

    async function Test8Sec3() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            await playScript(
                " My name is Adrian &  I will be your examiner for this part of the test for part three. Are you comfortable?"
            );
            setSampleAns(["Yes, I am comfortable you please proceed the test"])
        }
        converstionSteps++;
        if (converstionStepsText != '') {
            // if (converstionStepsText.length < 10) {
            //     await smallTalkError();
            // }
            // if (converstionStepsText.match('repeat') || converstionStepsText.match("don't understand")) {
            //     await playScript(
            //         "Ok , I am repeating.");
            //     converstionSteps--;
            // }
            // if (converstionSteps == 0) {
            //     await playScript(
            //         " My name is Adrian.&  I will be your examiner for this part of the test for this part three. Are you confortable?"
            //     );
            // }
            if (converstionSteps == 1) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Are you comfortable?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating, Are you comfortable?");
                    converstionSteps--;
                }
                else {
                    await playScript("Sorry... Can you repeat that please");
                    setSampleAns([' You can simply repeated the answer that you have given a little momemnt before'])
                }
            } else if (converstionSteps == 2) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Are you comfortable?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating, Are you comfortable?");
                    converstionSteps--;
                }
                else {
                    await playScript("Let's talk about making decisions generally. Who supports young people in decision-making?");
                    setSampleAns([`1 , Most commonly parents, teachers, siblings and friends are the one who give guidance to teenagers and children about their impending decisions. This is because they care about them and have much more experience to share. This is the reason I asked my mom and my former teacher when I was deciding my career path .In some countries National Youth Councils, umbrella organizations for youth organizations, are the highest decision-making bodies on youth issues. They have purely symbolic status in others. At the community level, young people can establish university or school clubs aimed at educating each other on youth rights and civic education.
                `])
                    conditionsDependsOnUserSpeech(0)
                }
            }
            else if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Who supports young people in decision-making?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating, Who supports young people in decision-making?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/support/gi) || converstionStepsText.match(/young/gi) ||
                    converstionStepsText.match(/people/gi) || converstionStepsText.match(/making/gi) ||
                    converstionStepsText.match(/make/gi) || converstionStepsText.match(/decision/gi) ||
                    converstionStepsText.match(/big/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/Most/gi) || converstionStepsText.match(/common/gi) ||
                    converstionStepsText.match(/parent/gi) || converstionStepsText.match(/brother/gi) ||
                    converstionStepsText.match(/sister/gi) || converstionStepsText.match(/friend/gi) ||
                    converstionStepsText.match(/guidance/gi) || converstionStepsText.match(/teenager/gi) ||
                    converstionStepsText.match(/teachers/gi) || converstionStepsText.match(/sibling/gi) ||
                    converstionStepsText.match(/Youth/gi) || converstionStepsText.match(/Council/gi) ||
                    converstionStepsText.match(/community/gi) || converstionStepsText.match(/education/gi)
                ) {
                    await playScript("Where can young people get good advice for making decisions?");
                    setSampleAns([` apart from the ones i mentioned already youngsters can get good advice from the professional on the internet and in their community these people can share their in-depth knowledge about the life situations fortunately my school has some career counselors that are well versed in career development and i got some good advice from them and i also learned some strategies to make up my mind Here are some ways to help young adults make decisions1234:
                    Encourage young adults to seek God’s heart.
                    Encourage young adults to “not settle”.
                    Encourage young adults to follow through.
                    Help young people learn how to identify options and ideas.
                    Explore consequences
                    `])
                    conditionsDependsOnUserSpeech(1)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Who supports young people in decision-making?");
                    converstionSteps--;
                }


            }
            else if (converstionSteps == 4) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Where can young people get good advice for making decisions?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating, Where can young people get good advice for making decisions?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/get/gi) || converstionStepsText.match(/young/gi) ||
                    converstionStepsText.match(/people/gi) || converstionStepsText.match(/making/gi) ||
                    converstionStepsText.match(/make/gi) || converstionStepsText.match(/advice/gi) ||
                    converstionStepsText.match(/decisions/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/Most/gi) || converstionStepsText.match(/common/gi) ||
                    converstionStepsText.match(/parent/gi) || converstionStepsText.match(/apart/gi) ||
                    converstionStepsText.match(/guidance/gi) || converstionStepsText.match(/teenager/gi) ||
                    converstionStepsText.match(/teachers/gi) || converstionStepsText.match(/sibling/gi) ||
                    converstionStepsText.match(/good/gi) || converstionStepsText.match(/bad/gi) ||
                    converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                    converstionStepsText.match(/community/gi) || converstionStepsText.match(/education/gi) ||
                    converstionStepsText.match(/professional/gi) || converstionStepsText.match(/develop/gi) ||
                    converstionStepsText.match(/help/gi) || converstionStepsText.match(/Encourage/gi) ||
                    converstionStepsText.match(/adult/gi) || converstionStepsText.match(/resources /gi) ||
                    converstionStepsText.match(/available/gi) || converstionStepsText.match(/making/gi) ||
                    converstionStepsText.match(/provid/gi) || converstionStepsText.match(/life/gi)
                ) {
                    await playScript("So, how does decision-making influence people's lives?");
                    setSampleAns([` the process of making the season has a critical impact on everybody's life. Ultimately life is really a series of decisions from early childhood. I mean choices of friends, hobbies and interests. With good decisions a person can lead a happy and healthy life .`, "2, The decision making influence refers to how the quality of decisions affects the outcomes and performance of individuals, teams and organizations12. Good decisions can positively contribute to the accomplishment of goals and objectives, while poor decisions can result in mistakes and inefficiencies1. Strong decision-making helps solve problems promptly and creates a leadership position for the decision-makers, while weak decision-making can be biased and illogical2."])
                    conditionsDependsOnUserSpeech(2)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Where can young people get good advice for making decisions?");
                    converstionSteps--;
                }


            }
            else if (converstionSteps == 5) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("How does decision-making influence people's lives?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating, How does decision-making influence people's lives?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/do/gi) || converstionStepsText.match(/yes/gi) ||
                    converstionStepsText.match(/no/gi) || converstionStepsText.match(/making/gi) ||
                    converstionStepsText.match(/make/gi) || converstionStepsText.match(/influence/gi) ||
                    converstionStepsText.match(/decisions/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/Most/gi) || converstionStepsText.match(/live/gi) ||
                    converstionStepsText.match(/leave/gi) || converstionStepsText.match(/apart/gi) ||
                    converstionStepsText.match(/Ultimately/gi) || converstionStepsText.match(/process/gi) ||
                    converstionStepsText.match(/season/gi) || converstionStepsText.match(/childhood/gi) ||
                    converstionStepsText.match(/early/gi) || converstionStepsText.match(/interest/gi) ||
                    converstionStepsText.match(/positive/gi) || converstionStepsText.match(/shape/gi) ||
                    converstionStepsText.match(/hobbies/gi) || converstionStepsText.match(/education/gi) ||
                    converstionStepsText.match(/quality/gi) || converstionStepsText.match(/develop/gi) ||
                    converstionStepsText.match(/help/gi) || converstionStepsText.match(/Encourage/gi) ||
                    converstionStepsText.match(/outcome/gi) || converstionStepsText.match(/resources/gi) ||
                    converstionStepsText.match(/crucial/gi) || converstionStepsText.match(/aspect/gi) ||
                    converstionStepsText.match(/provid/gi) || converstionStepsText.match(/life/gi)
                ) {
                    await playScript("What are effective steps to making good decisions?");
                    setSampleAns([` Making good decisions is a crucial skill that can be developed over time. Here are some effective steps to follow when making decisions:
                    Identify the decision that needs to be made: 
                    Gather relevant information: 
                    Identify alternative solutions: 
                    Evaluate alternatives: 
                    Choose the best alternative3.
                    Take action: 
                    Evaluate your decision:.
                    Remember that making good decisions is a process that requires time and effort. By following these steps, you can make informed decisions that lead to better outcomes.
                    `])
                    conditionsDependsOnUserSpeech(3)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  How does decision-making influence people's lives?");
                    converstionSteps--;
                }



            } else if (converstionSteps == 6) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("What are effective steps to making good decisions?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating, What are effective steps to making good decisions?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/effective/gi) || converstionStepsText.match(/decision/gi) ||
                    converstionStepsText.match(/positive/gi) || converstionStepsText.match(/step/gi) ||
                    converstionStepsText.match(/good/gi) || converstionStepsText.match(/bad/gi) ||
                    converstionStepsText.match(/actually/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/important/gi) || converstionStepsText.match(/plan/gi) ||
                    converstionStepsText.match(/ability/gi) || converstionStepsText.match(/should/gi) ||
                    converstionStepsText.match(/choosing/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/career/gi) || converstionStepsText.match(/learn/gi) ||
                    converstionStepsText.match(/overthink/gi) || converstionStepsText.match(/Take/gi) ||
                    converstionStepsText.match(/Remove/gi) || converstionStepsText.match(/situation/gi) ||
                    converstionStepsText.match(/relevant/gi) || converstionStepsText.match(/Identify/gi) ||
                    converstionStepsText.match(/effective /gi) || converstionStepsText.match(/Evaluate/gi) ||
                    converstionStepsText.match(/alternative/gi)
                ) {
                    await playScript("What are negative ways to make decisions?");
                    setSampleAns([`  the opposite of what i just mentioned is negative i mean rushing the season andnot thinking about the decision from multiple perspectives this will often lead a person down the wrong path i have a friend who rushed into the university and he just dropped out because he was disinterested in his major
                    `])
                    conditionsDependsOnUserSpeech(4)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. What are effective steps to making good decisions?");
                    converstionSteps--;
                }



            } else if (converstionSteps == 7) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" What are negative ways to make decisions?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,  What are negative ways to make decisions?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/effective/gi) || converstionStepsText.match(/decision/gi) ||
                    converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                    converstionStepsText.match(/good/gi) || converstionStepsText.match(/bad/gi) ||
                    converstionStepsText.match(/actually/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/important/gi) || converstionStepsText.match(/way/gi) ||
                    converstionStepsText.match(/make/gi) || converstionStepsText.match(/opposite/gi) ||
                    converstionStepsText.match(/choosing/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/rushing/gi) || converstionStepsText.match(/mention/gi) ||
                    converstionStepsText.match(/overthink/gi) || converstionStepsText.match(/drop/gi) ||
                    converstionStepsText.match(/Remove/gi) || converstionStepsText.match(/situation/gi) ||
                    converstionStepsText.match(/relevant/gi) || converstionStepsText.match(/Identify/gi) ||
                    converstionStepsText.match(/Evaluate/gi) || converstionStepsText.match(/alternative/gi)

                ) {
                    await playScript(
                        "Okay. Does the information available on the internet influence decisions?")
                    setSampleAns([` absolutely i mean internet has such a wealth of knowledge that it has become atreasure i mean a person can find a lot of up-to-date information on the internet and research is critical for making good decisions.Influence: Online information is generally modest in its impact on decisions, but looms larger when a purchase requires a big commitment. No more than one-tenth of buyers in each product category said that online information had a major impact on their purchasing decision.
                        `])
                    conditionsDependsOnUserSpeech(5)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  What are negative ways to make decisions?");
                    converstionSteps--;
                }


            }
            else if (converstionSteps == 8) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Does the information available on the internet influence decisions?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating, Does the information available on the internet influence decisions?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/do/gi) || converstionStepsText.match(/decision/gi) ||
                    converstionStepsText.match(/information/gi) || converstionStepsText.match(/Internet/gi) ||
                    converstionStepsText.match(/influence/gi) || converstionStepsText.match(/available/gi) ||
                    converstionStepsText.match(/actually/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/important/gi) || converstionStepsText.match(/way/gi) ||
                    converstionStepsText.match(/make/gi) || converstionStepsText.match(/opposite/gi) ||
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/choosing/gi) || converstionStepsText.match(/knowledge/gi) ||
                    converstionStepsText.match(/absolutely /gi) || converstionStepsText.match(/become/gi) ||
                    converstionStepsText.match(/research/gi) || converstionStepsText.match(/modest/gi) ||
                    converstionStepsText.match(/loom/gi) || converstionStepsText.match(/purchase/gi) ||
                    converstionStepsText.match(/decid/gi) || converstionStepsText.match(/Identify/gi) ||
                    converstionStepsText.match(/domain/gi) || converstionStepsText.match(/computer/gi) ||
                    converstionStepsText.match(/intriguing/gi) || converstionStepsText.match(/online/gi)
                ) {

                    await playScript("Okay. That was about section 3. Thanks.");
                    conditionsDependsOnUserSpeech(6)
                    await sendSpeakingtextToBackend(recordedText);
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Does the information available on the internet influence decisions?");
                    converstionSteps--;
                }

            }

        }

        console.log("converstionStepsText");
        console.log(converstionStepsText);
        converstionStepsText = "";
    }






    //test-9 all sections---
    async function Test9Sec1() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            if (!userSpeakingTestNo) {
                await playScript(
                    "Hello and welcome to the IELTS speaking portion of the test. Jone is my name. & For this portion of the exam, I will serve as your examiner. We are carrying out this. Would you kindly tell me your entire name?"
                );
                setSampleAns([" Simply you can say your full name. As like my name is Jone dow.You can call me Jone"])
            } else {
                await playScript("Are you ready to take the test then?");
                setSampleAns([" Simply you can say the positive answer. As like Yes i am Ready to give the test. ", "2, Yes, I am reay.You can proceed the test"])
            }

        }


        converstionSteps++;
        if (converstionStepsText != '') {
            // if (converstionStepsText.length < 10) {
            //     await smallTalkError();
            // }

            // else if (converstionStepsText.match('repeat') || converstionStepsText.match(" understand")) {
            //     await playScript(
            //         "Ok , I am repeating.");
            //     converstionSteps--;
            // }

            // if (converstionSteps == 0) {
            //     await playScript(
            //         "Welcome to the speaking section 1 of the IELTS exam. My name is Adrian & I will be your examiner. Are you comfortable?"
            //     );
            // }
            if (!userSpeakingTestNo) {
                if (converstionSteps == 1) {
                    await playScript(
                        "I'll start your exam now. What's your full name, please?"
                    );
                } else if (converstionSteps == 2) {
                    if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating,  What's your full name, please?");
                        converstionSteps--;
                    }
                    else if (converstionStepsText.match("name") || converstionStepsText.match("call")) {
                        if (converstionStepsText.match("call")) {
                            await playScript(
                                "So, for this section. I'm going to ask some general questions. Where do you live?"
                            );
                            setSampleAns([" Simply you can say your area/ or place where you are live in.As like I am living in Dhaka,Bangladesh", "2, I live in kolkata,India"])
                            localStorage.setItem("SpeakingTestNo", testNo);
                            conditionsDependsOnUserSpeech(0)
                        } else {
                            await playScript("Alright. What can I call you?");
                            setSampleAns(["You can say, You can call me jone or here you can use your name simply"])
                            converstionSteps--;
                        }
                    }
                    else {
                        await playScript("Alright, what's your name?");
                        setSampleAns(["Hellow i am Mr. Jone dow. You can call me jone"]);
                        converstionSteps--;
                    }

                } else if (converstionSteps == 3) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError("Where do you live?");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating,Where do you live?");
                        converstionSteps--;
                    }
                    else if (converstionStepsText.match(/live/gi) || converstionStepsText.match(/leaving/gi) ||
                        converstionStepsText.match(/in/gi) || converstionStepsText.match(/at/gi) ||
                        converstionStepsText.match(/from/gi) || converstionStepsText.match(/i am living/gi)) {
                        await playScript("Okay. What do you do at the weekends?");
                        setSampleAns([` Catch up on sleep (have a ‘lie in,’ which means staying in bed for longer)
                        Spend time with your kids
                        Meet up with friends
                        Relax at home watching TV, playing games, reading books
                        Do household chores
                        Run errands
                        Go grocery shopping
                        Do a hobby
                        Exercise 
                        Attend English classes
                        Work
                        Do overtime work
                        Do your homework
                        Go on trips 
                        Anything else that you do at the weekend
                       `, `2, Usually, on Saturdays I study as I'm planning to pursue my PhD in computer Management in the US. On Sundays I generally hang out with my friends. Last Sunday we went to the stadium hosting a cricket game between Bengaluru and Mumbai which was interesting.`])
                        conditionsDependsOnUserSpeech(1)
                    } else {
                        await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Where do you live? ");
                        setSampleAns([" Simply you can say your area/ or place where you are live in.As like I am living in Dhaka,Bangladesh", "2, I live in kolkata,India"])
                        converstionSteps--;
                    }

                }
            } else {
                if (converstionSteps == 1) {
                    await playScript("Okay. Are you happy today?");
                    setSampleAns(["Yes , i am happy today thanks for asking", "2, You can share your felling that your are feel"]);
                }
                if (converstionSteps == 2) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError("Are you ready?");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating,Are you ready?");
                        converstionSteps--;
                    }
                    else {
                        await playScript("Okay. So, what do you do for a living?");
                        setSampleAns([" No matter who asks you the question, they likely don’t want to hear statistics. Keep informative details of your job out of the conversation. Instead, focus on what’s interesting and keep your answer short and sweet. In other words, only describe what’s important on the surface (your resume can describe the details if needed).[3]"])
                        conditionsDependsOnUserSpeech(0)
                    }
                }
                if (converstionSteps == 3) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError("what do you do for a living?");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating,what do you do for a living?");
                        converstionSteps--;
                    }
                    else {
                        await playScript("Okay. What do you do at the weekends?");
                        setSampleAns([` Catch up on sleep (have a ‘lie in,’ which means staying in bed for longer)
                    Spend time with your kids
                    Meet up with friends
                    Relax at home watching TV, playing games, reading books
                    Do household chores
                    Run errands
                    Go grocery shopping
                    Do a hobby
                    Exercise 
                    Attend English classes
                    Work
                    Do overtime work
                    Do your homework
                    Go on trips 
                    Anything else that you do at the weekend
                   `, `2, Usually, on Saturdays I study as I'm planning to pursue my PhD in computer Management in the US. On Sundays I generally hang out with my friends. Last Sunday we went to the stadium hosting a cricket game between Bengaluru and Mumbai which was interesting.`])
                        conditionsDependsOnUserSpeech(1)
                    }
                }
            }

            if (converstionSteps == 4) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("What  do you do at the weekends?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,What  do you do at the weekends?");
                    converstionSteps--;
                }
                else if (converstionStepsText.match(/Spend/gi) || converstionStepsText.match(/time/gi) ||
                    converstionStepsText.match(/friends/gi) || converstionStepsText.match(/home/gi) ||
                    converstionStepsText.match(/watching/gi) || converstionStepsText.match(/play/gi) ||
                    converstionStepsText.match(/games/gi) || converstionStepsText.match(/weekend/gi) ||
                    converstionStepsText.match(/game/gi) || converstionStepsText.match(/shop/gi) ||
                    converstionStepsText.match(/hobby/gi) || converstionStepsText.match(/exercise/gi) ||
                    converstionStepsText.match(/class/gi) || converstionStepsText.match(/work/gi) ||
                    converstionStepsText.match(/trip/gi) || converstionStepsText.match(/travel/gi) ||
                    converstionStepsText.match("do") || converstionStepsText.match(/like/gi) || converstionStepsText.match(/go/gi) ||
                    converstionStepsText.match(/watch/gi) || converstionStepsText.match(/read/gi) ||
                    converstionStepsText.match(/generally /gi) || converstionStepsText.match(/Meet  /gi) ||
                    converstionStepsText.match(/Run/gi) || converstionStepsText.match(/Anything/gi)
                ) {
                    await playScript("Okay. Let's talk about art. Do you like to draw or paint?");
                    setSampleAns([`  Not really. I mean it is not one of my hobbies. Last time I
                        painted in Middle School was for an art  project and I sketched  my grandparents house which 
                        `, "2, - I have a lifelong passion for art since I was a child. Besides the conventional art classes in school, I also joined a drawing class in “The Childrens’ House” where my teachers ", "3, Yes, i like drawing & painting"])
                    conditionsDependsOnUserSpeech(2)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. I am repeating. What  do you do at the weekends?");
                    converstionSteps--;
                }


            } else if (converstionSteps == 5) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Do you like to draw or paint?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating, Do you like to draw or paint?");
                    converstionSteps--;
                }
                else if (converstionStepsText.match(/like/gi) || converstionStepsText.match(/draw/gi) |
                    converstionStepsText.match(/paint/gi) || converstionStepsText.match(/yes/gi) ||
                    converstionStepsText.match(/draw/gi) || converstionStepsText.match(/about/gi) ||
                    converstionStepsText.match(/join/gi) || converstionStepsText.match(/participate/gi) ||
                    converstionStepsText.match(/no/gi) || converstionStepsText.match(/not really/gi)) {
                    await playScript("Okay. Did you study art in school, and did you like it?");
                    setSampleAns([" : Yes, I did some beginner-level classes in my early schooling or maybe between grades one or two and six or seven but not after that uh I felt that I'm not that talented in art so I did not pursue it when I got an option to choose mystudies and my hobbies.", "2, Yes, I’ve always loved art. My parents used to take me to art galleries in the city center. And even when I was young, I remember that I was very moved by some of the amazing paintings I saw.", "3,  Yes, I do. I’m no good at art myself, but I do love looking at beautiful paintings. I really like Van Gogh’s paintings, like that famous painting Sunflowers, I think it’s called. It’s so cheerful and vivid and lively."])
                    conditionsDependsOnUserSpeech(3)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Do you like to draw or paint?");
                    converstionSteps--;
                }



            } else if (converstionSteps == 6) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Did you study art in school, and did you like it?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,  Did you study art in school, and did you like it?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/study/gi) ||
                    converstionStepsText.match(/art/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/beginner/gi) || converstionStepsText.match(/love/gi) ||
                    converstionStepsText.match(/like/gi) || converstionStepsText.match(/paint/gi) ||
                    converstionStepsText.match(/yet/gi) || converstionStepsText.match(/parents/gi) ||
                    converstionStepsText.match(/do/gi) || converstionStepsText.match(/art/gi) ||
                    converstionStepsText.match(/when/gi) || converstionStepsText.match(/use/gi) ||
                    converstionStepsText.match(/To be honest/gi) || converstionStepsText.match(/don’t/gi) ||
                    converstionStepsText.match(/but/gi) || converstionStepsText.match(/school/gi)

                ) {
                    await playScript("Do you have any art in your home and can you tell me about it?");
                    setSampleAns([" Yes, we have Painting ,Architecture,Music ,Theater,Cinema,,Visual Art,Plastic Art,Natural beauty art,Painting, colors, Abstract Art Forms,Pop ,Cubism,Contemporary ,Stained ,Aboriginal ,Japanese ,Impressionism,Surrealism,Fantasy ,Graffiti ,Calligraphy,Mosaic,Sculpture ,", "2,  yes we do uh we have a couple of pictures of uh sceneries a real nice picture of the Himalayas and most interesting we have an awesome looking elephant statue in my room"])
                    conditionsDependsOnUserSpeech(4)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Did you study art in school, and did you like it?");
                    converstionSteps--;
                }


            } else if (converstionSteps == 7) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Do you have any art in your home and can you tell me about it?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,  Do you have any art in your home and can you tell me about it?");
                    converstionSteps--;
                }
                else if (converstionStepsText.match(/yes/gi) || converstionStepsText.match(/art/gi) || converstionStepsText.match(/my home/gi) ||
                    converstionStepsText.match(/at/gi) || converstionStepsText.match(/in/gi) ||
                    converstionStepsText.match(/house/gi) || converstionStepsText.match(/do/gi) || converstionStepsText.match(/picture/gi) ||
                    converstionStepsText.match(/have /gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/not really/gi) || converstionStepsText.match(/don’t/gi)

                ) {
                    await playScript("Okay. what is your favorite type of art and why?");
                    setSampleAns([" yes that's tricky to answer because I do consider music and movies as art forms too and there's a lot of shows and music that I like if I were to pick one I would say the movies because it actually gets out the visual as well as the audio Talent um I would say my favorite movie is uh gangs of wasseypur it is an action-packed movie with a real great story .", "2, Almost everyone is drawn to music in some form or another. And many of us aspire to become musicians or singers, creating our own music for others to enjoy. Even if you’re not a musician, you can appreciate music as an art form. Music organizes sounds into a composition that is attractive to the ear. But as with any other type of art, there are endless types of music. You can probably think of everything from classical music to pop, rock, and more.There’s evidence that we’ve been creating music as far back as history. Basic instruments date back thousands of years. And you can find some form of singing in almost every culture around the world.", "3, Music is a unique art form. It is a lyrical and auditory representation of the story. Through patterned constructions of words, rhythm, and instrumental collaboration, music provides listeners with insight to personal experiences and even in-depth interpretations of the world around us."])
                    conditionsDependsOnUserSpeech(5)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Do you have any art in your home and can you tell me about it?")
                    converstionSteps--;
                }

            } else if (converstionSteps == 8) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" What is your favorite type of art and why?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,   What is your favorite type of art and why?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/favorite/gi) || converstionStepsText.match(/art/gi) ||
                    converstionStepsText.match(/tricky /gi) || converstionStepsText.match(/don’t/gi) ||
                    converstionStepsText.match(/type/gi) || converstionStepsText.match(/forms/gi) ||
                    converstionStepsText.match(/would  /gi) || converstionStepsText.match(/will/gi) ||
                    converstionStepsText.match(/music/gi) || converstionStepsText.match(/movie/gi) ||
                    converstionStepsText.match(/painting/gi) || converstionStepsText.match(/like/gi) ||
                    converstionStepsText.match(/love/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/basecally/gi)

                ) {
                    await playScript("Okay. Have you ever been to an art show?");
                    setSampleAns([" oh yes uh we'd been to this Art Exhibit at the government Museum it was related to native art and I went there with my friend who was really interested in it.", `2, Yes, I have. I remember going to an art gallery on a school trip when I was quite young. I think it was classical art. I remember there were lots of colorful oil paintings of kings and battles.`, "3, No, to be honest, I’ve never been to an art gallery. The only kind of artwork I enjoy is the drawings in comic books and simple cartoons. But I’m not sure there are any galleries for that kind of art."])
                    conditionsDependsOnUserSpeech(6)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  What is your favorite type of art and why?");
                    converstionSteps--;
                }

            } else if (converstionSteps == 9) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Have you ever been to an art show?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,   Have you ever been to an art show?");
                    converstionSteps--;
                }
                else if (converstionStepsText.match(/yes/gi) || converstionStepsText.match(/have/gi) ||
                    converstionStepsText.match(/been/gi) || converstionStepsText.match(/no/gi) || converstionStepsText.match(/art/gi) ||
                    converstionStepsText.match(/show/gi) || converstionStepsText.match(/painting/gi) ||

                    converstionStepsText.match(/love/gi) || converstionStepsText.match(/like/gi) ||
                    converstionStepsText.match(/when/gi) || converstionStepsText.match(/parent/gi) ||
                    converstionStepsText.match(/went/gi) || converstionStepsText.match(/gallery/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/visit/gi) ||
                    converstionStepsText.match(/interested/gi)


                ) {
                    await playScript("If you could make any artwork what would you make?");
                    setSampleAns([" interesting question uh if given a chance I would direct my own movie uh something like The Gangs of wasseypur uh it would be a action-packed movie with a provoking philosophy at the end stating that two wrongs do not do a right it would be fun.", "2, As a non-artist, I am not skillful enough to paint those complicated and colorful subjects, such as landscapes (mountains and trees), portraits, animals, and so on.Even so, I still want to create some pieces because of love. I may want to paint some geometric patterns with my favorite colors. Every pattern and every color will be given a special meaning. For example, a black rectangle, which I think can show my feeling of loneliness at midnight.If I have to show what my work looks like, it's probably like Kazimir Malevich's artworks. But I can't be that good."])
                    conditionsDependsOnUserSpeech(7)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Have you ever been to an art show?")
                    converstionSteps--;
                }



            } else if (converstionSteps == 10) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" If you could make any artwork what would you make?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,   If you could make any artwork what would you make?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/will/gi) || converstionStepsText.match(/make/gi) ||
                    converstionStepsText.match(/would/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/if/gi) || converstionStepsText.match(/possible/gi) ||
                    converstionStepsText.match(/do/gi) || converstionStepsText.match(/could/gi) ||
                    converstionStepsText.match(/art/gi) || converstionStepsText.match(/piece/gi) ||
                    converstionStepsText.match(/i/gi) || converstionStepsText.match(/have/gi) ||
                    converstionStepsText.match(/gallery/gi) || converstionStepsText.match(/color/gi) ||
                    converstionStepsText.match(/paint/gi) || converstionStepsText.match(/actually/gi) ||
                    converstionStepsText.match(/interesting/gi) || converstionStepsText.match(/chance /gi) ||
                    converstionStepsText.match(/given/gi) || converstionStepsText.match(/like/gi) ||
                    converstionStepsText.match(/as/gi) || converstionStepsText.match(/favorite /gi)
                ) {
                    await playScript("Okay. That was about section 1. Thanks.");
                    conditionsDependsOnUserSpeech(8)
                    await sendSpeakingtextToBackend(recordedText);
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  If you could make any artwork what would you make?");
                    converstionSteps--;
                }



            }

        }

        console.log("converstionStepsText");
        console.log(converstionStepsText);
        converstionStepsText = "";
    }

    async function Test9Sec2() {

    }

    async function Test9Sec3() {

        if (converstionSteps == 0 && converstionStepsText == '') {
            await playScript(
                "For part three. Let's talk about social activities & football. So, are you ready ?"
            );
            setSampleAns(["Yes, I am comfortable you please proceed the test"])
        }
        converstionSteps++;
        if (converstionStepsText != '') {
            // if (converstionStepsText.length < 10) {
            //     await smallTalkError();
            // }
            // if (converstionStepsText.match('repeat') || converstionStepsText.match("don't understand")) {
            //     await playScript(
            //         "Ok , I am repeating.");
            //     converstionSteps--;
            // }
            // if (converstionSteps == 0) {
            //     await playScript(
            //         "For this part three. I will ask you some questions related to the topic of part two. And some questions connected to your response. Let's talk about social activities & football. So, are you ready ?"
            //     );
            // }
            if (converstionSteps == 1) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" are you ready ?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,  are you ready ?");
                    converstionSteps--;
                }
                else {
                    await playScript("Let me begin your test. Can you tell me your full name again?");
                    setSampleAns(["Yes, My name is Mr. Jone dow. you can call me jone"])
                }
            }

            else if (converstionSteps == 2) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" are you ready ?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,  are you ready ?");
                    converstionSteps--;
                }
                else {
                    await playScript("So, what are the most positive aspects of our team?");
                    setSampleAns([` Teamwork Reduces Your Workload,Teamwork Fosters Creativity,
                Working Within a Team Builds Trust. Teamwork Combines Multiple Strengths.
                , Working Within a Team Relieves Pressure,Teamwork Helps Keep Your Mind Open,
                Working Within a Team Teaches New Skills,Teamwork Helps New Workers Adapt,
                Teamwork Helps Employees Tackle Problems,
                Working Within a Team Promotes Responsibility,Working Within a Team Allows for Greater Risks,
                 Teamwork Provides Clear Objectives,Working Within a Team Provides Faster Results, Teamwork Promotes Enthusiasm for Work,Working in a Team Benefits Your Company,
                ,Teamwork May Produce Unexpected Results
                `, `2, The most important aspect of working as a team is the ability to share the workload. When each team member handles their share of the work, they each have less work to complete.
                Reducing the burden on each member of the team leads to a wide range of additional benefits, from increased productivity to greater creativity.
                `]);
                    conditionsDependsOnUserSpeech(0)
                }
            }
            else if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("  what are the most positive aspects of our team?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. what are the most positive aspects of our team?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/aspect/gi) || converstionStepsText.match(/team/gi) ||
                    converstionStepsText.match(/positive/gi) || converstionStepsText.match(/teamwork/gi) ||
                    converstionStepsText.match(/creativity/gi) || converstionStepsText.match(/Work/gi) ||
                    converstionStepsText.match(/collaborative /gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/creativity/gi) || converstionStepsText.match(/chance/gi) ||
                    converstionStepsText.match(/ability/gi) || converstionStepsText.match(/in/gi) ||
                    converstionStepsText.match(/as/gi) || converstionStepsText.match(/relieves/gi) ||
                    converstionStepsText.match(/skill/gi) || converstionStepsText.match(/learn/gi)


                ) {
                    await playScript("Okay. Can you tell me three specific things? That we can improve as a team?");
                    setSampleAns([" Ensure alignment and buy-inClarify goals, roles, and responsibilitiesEngage in proper planning and rapid executionInvolve team leaders in corporate communicationAvoid cringe-worthy team-building exercises", `2, Involve team leaders in corporate communication,
                    Avoid cringe-worthy team-building exercises,
                    Create teamwork recognition programs,
                    Clarify ownership early on,
                    Make communication a two-way Street,
                    Have a clear organizational purpose,
                    Set clear team goals,
                     Identify communication problems,
                     Stop micromanaging,
                    Talk less, listen more,
                    Let teams use multiple methods of communication,
                    Mediate disputes,
                    Use better collaboration tools,
                    Ask team members for feedback,
                    Start a culture committee,
                     Create a mentor program,
                    Create team traditions,
                    Eliminate unnecessary meetings
                    `])
                    conditionsDependsOnUserSpeech(1)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  I am repeating. what are the most positive aspects of our team?");
                    converstionSteps--;
                }
            }
            else if (converstionSteps == 4) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Can you tell me three specific things? That we can improve as a team?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Can you tell me three specific things? That we can improve as a team?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/thing/gi) || converstionStepsText.match(/improve/gi) ||
                    converstionStepsText.match(/creativity/gi) || converstionStepsText.match(/chance/gi) ||
                    converstionStepsText.match(/would/gi) || converstionStepsText.match(/will/gi) ||
                    converstionStepsText.match(/as/gi) || converstionStepsText.match(/team/gi) ||
                    converstionStepsText.match(/skill/gi) || converstionStepsText.match(/learn/gi) ||
                    converstionStepsText.match(/ensure/gi) || converstionStepsText.match(/goal/gi) ||
                    converstionStepsText.match(/aim/gi) || converstionStepsText.match(/rapid/gi) ||
                    converstionStepsText.match(/engage /gi) || converstionStepsText.match(/involve/gi) ||
                    converstionStepsText.match(/as/gi) || converstionStepsText.match(/team/gi) ||
                    converstionStepsText.match(/Avoid/gi) || converstionStepsText.match(/create/gi) ||
                    converstionStepsText.match(/problem/gi) || converstionStepsText.match(/Stop/gi) ||
                    converstionStepsText.match(/Make/gi) || converstionStepsText.match(/exercise/gi) ||
                    converstionStepsText.match(/proper/gi) || converstionStepsText.match(/build/gi)
                ) {
                    await playScript("Okay. What are we hoping to achieve this season?");
                    setSampleAns([` We are hoping to have an abundant harvest this season.`, "2, should I say in response to I hope next year is better", "3, Define your personal and career goals The first step is to define what your life goals are, because this can provide you withdirection for developing an appropriate answer. These goals don't require any complexity. For example, your personal goals may include becoming a better listener or exploring travel destinations. Similarly, your career goals may include starting a personal brand, obtaining a leadership role or improving professional performance. Whatever these goals are, take note of them so that you remember them easi "])
                    conditionsDependsOnUserSpeech(2)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Can you tell me three specific things? That we can improve as a team?");
                    converstionSteps--;
                }
            }
            else if (converstionSteps == 5) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("What are we hoping to achieve this season?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. What are we hoping to achieve this season?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/hoping/gi) || converstionStepsText.match(/hope/gi) ||
                    converstionStepsText.match(/achieve/gi) || converstionStepsText.match(/yes/gi) ||
                    converstionStepsText.match(/no/gi) || converstionStepsText.match(/season/gi) ||
                    converstionStepsText.match(/are/gi) || converstionStepsText.match(/abundant/gi) ||
                    converstionStepsText.match(/harvest/gi) || converstionStepsText.match(/year/gi) ||
                    converstionStepsText.match(/should/gi) || converstionStepsText.match(/define/gi) ||
                    converstionStepsText.match(/direction/gi) || converstionStepsText.match(/answer/gi) ||
                    converstionStepsText.match(/develop/gi) || converstionStepsText.match(/goal/gi)
                    ||
                    converstionStepsText.match(/aim/gi) || converstionStepsText.match(/to Be/gi) ||
                    converstionStepsText.match(/want/gi) || converstionStepsText.match(/next/gi)

                ) {
                    await playScript("Okay. How would you rate your performances of late?");
                    setSampleAns([" I rate myself as a six out of 10 this review cycle because I missed a few deadlines in October. Unfortunately, I had some personal troubles that prevented me from coming to work for several days and caused me to miss deadlines. The company was patient and flexible, but I'm ultimately responsible for those deadlines. I hope to learn to better manage personal affairs to prevent interference next time.", "2, It’s important that self-ratings are aligned with the feedback you've gotten from your manager throughout the year. in my opinion i would like to give 7 rate on my late performance"])
                    conditionsDependsOnUserSpeech(3)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  What are we hoping to achieve this season?");
                    converstionSteps--;
                }


            } else if (converstionSteps == 6) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("How would you rate your performances of late?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. How would you rate your performances of late?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/would/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/Will/gi) || converstionStepsText.match(/performances/gi) ||
                    converstionStepsText.match(/late/gi) || converstionStepsText.match(/give/gi) ||
                    converstionStepsText.match(/want/gi) || converstionStepsText.match(/could/gi) ||
                    converstionStepsText.match(/because/gi) || converstionStepsText.match(/unfortunately/gi) ||
                    converstionStepsText.match(/company/gi) || converstionStepsText.match(/was/gi) ||
                    converstionStepsText.match(/important/gi)
                ) {
                    await playScript("What aspect of training or coaching has helped you? Improve as an individual for this club?");
                    setSampleAns([" Coaching is a highly personalized and individualized well-being intervention. In the last million coaching sessions with BetterUp members, we’ve learned quite a lot about how to reliably deliver positive coaching outcomes for all kinds of people. Whether you are pursuing business coaching for your company or career coaching for yourself, the relationship with a coach is unlike any other personal or professional relationship. A coach, through their training and expertise, sees the coach holistically and encourages the coach to bring their whole self to the coaching sessions.", "2, Coaching validates, supports, and empowers the individuals within an organization. It gives them a neutral party to tackle concerns about professional development with, as well as a safe space to practice having difficult conversations."])
                    conditionsDependsOnUserSpeech(4)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  How would you rate your performances of late?");
                    converstionSteps--;
                }


            } else if (converstionSteps == 7) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("What aspect of training or coaching has helped you? Improve as an individual for this club?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. What aspect of training or coaching has helped you? Improve as an individual for this club?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/aspect/gi) || converstionStepsText.match(/help/gi) ||
                    converstionStepsText.match(/train/gi) || converstionStepsText.match(/performances/gi) ||
                    converstionStepsText.match(/improve/gi) || converstionStepsText.match(/individual/gi) ||
                    converstionStepsText.match(/club/gi) || converstionStepsText.match(/lot /gi) ||
                    converstionStepsText.match(/have/gi) || converstionStepsText.match(/unfortunately/gi) ||
                    converstionStepsText.match(/coaching/gi) || converstionStepsText.match(/has/gi) ||
                    converstionStepsText.match(/outcome/gi) || converstionStepsText.match(/give/gi) ||
                    converstionStepsText.match(/teach/gi) || converstionStepsText.match(/learn/gi) ||
                    converstionStepsText.match(/Self awareness/gi) || converstionStepsText.match(/Resilience/gi) ||
                    converstionStepsText.match(/Collaboration/gi) || converstionStepsText.match(/life/gi) ||
                    converstionStepsText.match(/health/gi) || converstionStepsText.match(/Increase/gi)
                ) {
                    await playScript("Okay. Do you find our training sessions challenging?");
                    setSampleAns(" As a trainer/student, you want to create a positive and engaging learning environment for your participants. However, sometimes you may encounter learners who are disruptive, resistant, or disinterested in your training sessions. How can you manage these challenging learners and keep your training sessions positive? Here are some tips to help you deal with different types of difficult learners and maintain a productive and respectful atmosphere.", "2, No, not really i didn’t get so more challenging sessions at the training sessions ")
                    conditionsDependsOnUserSpeech(5)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. What aspect of training or coaching has helped you? Improve as an individual for this club?");
                    converstionSteps--;
                }

            } else if (converstionSteps == 8) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Do you find our training sessions challenging?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Do you find our training sessions challenging?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/challenging/gi) || converstionStepsText.match(/challenges/gi) ||
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/train/gi) || converstionStepsText.match(/session/gi) ||

                    converstionStepsText.match(/student/gi) || converstionStepsText.match(/find/gi) ||
                    converstionStepsText.match(/found/gi) || converstionStepsText.match(/not/gi) ||
                    converstionStepsText.match(/positive/gi) || converstionStepsText.match(/environment/gi) ||
                    converstionStepsText.match(/participant/gi) || converstionStepsText.match(/difficult/gi) ||
                    converstionStepsText.match(/got/gi) || converstionStepsText.match(/type/gi) ||
                    converstionStepsText.match(/too many/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/basically/gi) || converstionStepsText.match(/Increase/gi)
                ) {
                    await playScript("What extra drills can you do to improve?");
                    setSampleAns([" Personal development skills are qualities and abilities that help you grow both personally and professionally. In other words, they are skills that help you nurture your personal development. Understanding and improving these skills is a process also known as self-development or personal growth", `2, Butterfly drill: A good drill to improve conditioning while practicing passing and controlled serving skills.
                    Serve and chase your ball: A drill to improve serving accuracy and footwork.
                    Peppering: A drill to improve ball control and communication.
                    Blocks along the net: A drill to improve blocking and footwork.
                    Hustle to touch 10 balls: A drill to improve speed and agility.
                    `])
                    conditionsDependsOnUserSpeech(6)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you find our training sessions challenging?");
                    converstionSteps--;
                }


            } else if (converstionSteps == 9) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" What extra drills can you do to improve?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.  What extra drills can you do to improve?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/extra/gi) || converstionStepsText.match(/improve/gi) ||
                    converstionStepsText.match(/do/gi) || converstionStepsText.match(/can/gi) ||
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/dicress/gi) ||
                    converstionStepsText.match(/could/gi) || converstionStepsText.match(/will/gi) ||
                    converstionStepsText.match(/would/gi) || converstionStepsText.match(/drill/gi) ||
                    converstionStepsText.match(/Butterfly/gi) || converstionStepsText.match(/personal/gi) ||
                    converstionStepsText.match(/development/gi) || converstionStepsText.match(/communication/gi) ||
                    converstionStepsText.match(/speed/gi) || converstionStepsText.match(/increase/gi) ||
                    converstionStepsText.match(/growing/gi) || converstionStepsText.match(/progress/gi) ||
                    converstionStepsText.match(/basically/gi)

                ) {
                    await playScript("What should you do to improve your weaker foot?");
                    setSampleAns([" Becoming two-footed will lead to more goals.  Being accurate with both feet will lead to even more.  It’s during the crucial moments after you have been going one way all game that you are able to shock your opponents with a clinical finish using your weak foot.Adding targets, a keeper and pressure will replicate that moment.  There are no magic tricks to shooting. Keep doing it over and over again until your shots become accurate and they feel natural.Start with setting up targets and then invite a goalkeeper friend.  Shoot from all angles incorporating finishing and dribbling.", `2, To improve your weak foot, you can:
                    Develop a growth mindset
                    Spend more time juggling
                    Play 1v1 against younger friends
                    Grab a ball and find a wall
                    Decide to use your weak foot in practice
                    `])
                    conditionsDependsOnUserSpeech(7)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  What extra drills can you do to improve?");
                    converstionSteps--;
                }

            } else if (converstionSteps == 10) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("What should you do to improve your weaker foot?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.  What should you do to improve your weaker foot?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/should/gi) || converstionStepsText.match(/improve/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/practice/gi) ||
                    converstionStepsText.match(/develop/gi) || converstionStepsText.match(/communication/gi) ||
                    converstionStepsText.match(/speed/gi) || converstionStepsText.match(/increase/gi) ||
                    converstionStepsText.match(/grow/gi) || converstionStepsText.match(/progress/gi) ||
                    converstionStepsText.match(/basically/gi) ||
                    converstionStepsText.match(/foot/gi) || converstionStepsText.match(/weaker/gi) ||
                    converstionStepsText.match(/AGAINST/gi) || converstionStepsText.match(/TARGETS/gi) ||
                    converstionStepsText.match(/aim/gi) || converstionStepsText.match(/define/gi) ||
                    converstionStepsText.match(/goal/gi)
                ) {
                    await playScript("Okay. What should you work on to enhance your dribbling ability?");
                    setSampleAns([` To improve dribbling, you need to:
                    Use your fingers, not your palm, to control the ball15
                    Keep your head up while dribbling and keep the ball close to your feet12
                    Practice dribbling with both hands and both feet124
                    Use the leading edge of the foot to dribble galloping and change the pace2
                    Use your body to shield the ball from defenders and initiate a dribble with a jab step or a fake12`])
                    conditionsDependsOnUserSpeech(8)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  What should you do to improve your weaker foot?");
                    converstionSteps--;
                }



            } else if (converstionSteps == 11) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" What should you work on to enhance my dribbling ability??");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.   What should you work on to enhance my dribbling ability?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/should/gi) || converstionStepsText.match(/improve/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/practice/gi) ||
                    converstionStepsText.match(/enhance/gi) || converstionStepsText.match(/dribbling/gi) ||
                    converstionStepsText.match(/ability/gi) || converstionStepsText.match(/increase/gi) ||
                    converstionStepsText.match(/grow/gi) || converstionStepsText.match(/progress/gi) ||
                    converstionStepsText.match(/basically/gi) ||
                    converstionStepsText.match(/Use/gi) || converstionStepsText.match(/Keep/gi) ||
                    converstionStepsText.match(/technique/gi) || converstionStepsText.match(/Pass /gi) ||
                    converstionStepsText.match(/Repeat/gi) || converstionStepsText.match(/define/gi) ||
                    converstionStepsText.match(/pattern/gi)
                ) {
                    await playScript("Okay. What advice can you give to an up coming player?");
                    setSampleAns([` Always play fairly, according to the spirit and letter of the rules.
                    Stay calm under difficult conditions. It’s easy to maintain composure when things go right; when they don’t real athletes step forward and stand up to the test.
                    Support and encourage your teammates at all times. All of us make mistakes at times and they are not done on purpose. Encourage your teammates to be the best they can be.
                    Play as hard as you can in practice and in games. Never be beaten because of lack of effort. Even opponents who are bigger or more skilled than you can be beaten if you out-hustle them.
                    Show respect to your coaches, referees, and your opponents; win or lose.
                    A good soccer player must have conditioning, skills and tactical knowledge. A player must work on all three to be the best they can be.
                    When your team has the football, everyone is an attacker; when your opponent has the ball everyone is a defender.
                    No matter what position you are in, you are first a soccer player and you will have to be able to receive, shoot, pass, dribble, head, make space, etc., regardless of your position.
                    Do not just “kick” the ball unless it is in a dangerous position in front of your goal. Instead take a ” picture ” of the situation before you get the ball. In this way you can perceive the situation, determine the best solution, and act accordingly when the ball arrives. Develop Field Vision. Always send the ball to someplace or someone.
                    Always maintain your position. Don’t run following the movement of the ball. Know where you are on the field in relation to where the other players and positions are on the field. `])
                    conditionsDependsOnUserSpeech(9)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.   What should you work on to enhance my dribbling ability?");
                    converstionSteps--;
                }


            } else if (converstionSteps == 12) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("  What advice can you give to an up coming player?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.  What advice can you give to an up coming player?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/advice/gi) || converstionStepsText.match(/up coming/gi) ||
                    converstionStepsText.match(/want/gi) || converstionStepsText.match(/will/gi) ||
                    converstionStepsText.match(/Would/gi) || converstionStepsText.match(/player/gi) ||
                    converstionStepsText.match(/ability/gi) || converstionStepsText.match(/increase/gi) ||
                    converstionStepsText.match(/grow/gi) || converstionStepsText.match(/progress/gi) ||
                    converstionStepsText.match(/basically/gi) ||
                    converstionStepsText.match(/Use/gi) || converstionStepsText.match(/Keep/gi) ||
                    converstionStepsText.match(/game/gi) || converstionStepsText.match(/Pass/gi) ||
                    converstionStepsText.match(/fairly/gi) || converstionStepsText.match(/define/gi) ||
                    converstionStepsText.match(/Always/gi) ||
                    converstionStepsText.match(/soccer/gi) || converstionStepsText.match(/skill/gi) ||
                    converstionStepsText.match(/defender/gi) || converstionStepsText.match(/position/gi) ||
                    converstionStepsText.match(/maintain/gi) || converstionStepsText.match(/field/gi)
                ) {
                    await playScript("Okay. That was about section 3. Thanks.");
                    conditionsDependsOnUserSpeech(10)
                    await sendSpeakingtextToBackend(recordedText);
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. What advice can you give to an up coming player?");
                    converstionSteps--;
                }



            }

        }

        console.log("converstionStepsText");
        console.log(converstionStepsText);
        converstionStepsText = "";
    }




    //test-10 all sections---
    async function Test10Sec1() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            if (!userSpeakingTestNo) {
                await playScript(
                    "Hello and welcome to the IELTS speaking portion of the test. Jone is my name. & For this portion of the exam, I will serve as your examiner. We are carrying out this. Would you kindly tell me your entire name?"
                );
                setSampleAns([" Simply you can say your full name. As like my name is Jone dow.You can call me Jone"])
            } else {
                await playScript("Are you ready to take the test then?");
                setSampleAns([" Simply you can say the positive answer. As like Yes i am Ready to give the test. ", "2, Yes, I am reay.You can proceed the test"])
            }

        }
        converstionSteps++;
        if (converstionStepsText != '') {
            // if (converstionStepsText.length < 10) {
            //     await smallTalkError();
            // }

            // else if (converstionStepsText.match('repeat') || converstionStepsText.match(" understand")) {
            //     await playScript(
            //         "Ok , I am repeating.");
            //     converstionSteps--;
            // }
            // if (converstionSteps == 0) {
            //     await playScript(
            //         "Welcome to the speaking section of the IELTS exam. My name is Adrian. And i will be your examiner for this part of the test. We're conducting. Can you tell me your full name please?"
            //     );
            // }
            if (!userSpeakingTestNo) {
                if (converstionSteps == 1) {
                    await playScript("I'll start your exam now. What's your full name, please?");
                } else if (converstionSteps == 2) {
                    if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating.  What's your full name, please?");
                        converstionSteps--;
                    }
                    else if (converstionStepsText.match("name") || converstionStepsText.match("call")) {
                        if (converstionStepsText.match("call")) {
                            await playScript(
                                "So, for this section. I'm going to ask some general questions. Where do you live?"
                            );
                            setSampleAns([" Simply you can say your area/ or place where you are live in.As like I am living in Dhaka,Bangladesh", "2, I live in kolkata,India"])
                            localStorage.setItem("SpeakingTestNo", testNo);
                            conditionsDependsOnUserSpeech(0)
                        } else {
                            await playScript("Alright. What can I call you?");
                            setSampleAns([" You can call me Jone or say your sort name"]);
                            converstionSteps--;
                        }
                    }
                    else {
                        await playScript("Alright, what's your name?");
                        setSampleAns([" Hellow sir, My name is Mr.jone dow you can call me jone"]);
                        converstionSteps--;
                    }

                } else if (converstionSteps == 3) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError(" Where do you live?");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating.  Where do you live?");
                        converstionSteps--;
                    }
                    else if (converstionStepsText.match(/live/gi) || converstionStepsText.match(/leaving/gi) ||
                        converstionStepsText.match(/in/gi) || converstionStepsText.match(/at/gi) ||
                        converstionStepsText.match(/from/gi) || converstionStepsText.match(/i am living/gi)) {
                        await playScript("Okay. That's nice. Now let's talk about colors. Do you have a favorite color and if yes why do you like it ?");
                        setSampleAns([` uh yes my favorite color is blue I find it calming and soothing blue also reminds me of the Serene Waters of the brahmaputra river that flows through my hometown it has a peaceful and tranquil effect on me which allows me to relax and feel refreshed`, `2, Umm, generally i love/like all the colors but i say specifically i like yellow color, because that effect in my mind`])
                        conditionsDependsOnUserSpeech(1)
                    } else {
                        await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Where do you live? ");
                        converstionSteps--;
                    }

                }
            } else {
                if (converstionSteps == 1) {
                    await playScript("Okay. Are you happy today?");
                    setSampleAns(["Yes, sir i really happy today. Thanks for asking."])
                }
                if (converstionSteps == 2) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError("Are You ready?");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating.  Are you ready?");
                        converstionSteps--;
                    }
                    else {
                        await playScript("Okay. S0,What sports do you like to play?");
                        setSampleAns([`Football,
                    Basketball,
                    Tennis,
                    Swimming,
                    Mixed Martial Arts`])
                        conditionsDependsOnUserSpeech(0)
                    }
                }
                if (converstionSteps == 3) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError("What sports do you like to play?");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating.  What sports do you like to play?");
                        converstionSteps--;
                    }
                    else {
                        await playScript("Okay. That's nice. Now let's talk about colors. Do you have a favorite color, and if yes, why?");
                        setSampleAns([` uh yes my favorite color is blue I find it calming and soothing blue also reminds me of the Serene Waters of the brahmaputra river that flows through my hometown it has a peaceful and tranquil effect on me which allows me to relax and feel refreshed`, `2, Umm, generally i love/like all the colors but i say specifically i like yellow color, because that effect in my mind`])
                        conditionsDependsOnUserSpeech(1)
                    }
                }
            }



            if (converstionSteps == 4) {

                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Do you have a favorite color, and if yes, why?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.   Do you have a favorite color, and if yes, why?");
                    converstionSteps--;
                }
                else if (converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/basically/gi) || converstionStepsText.match(/favorite /gi) ||
                    converstionStepsText.match(/color /gi) || converstionStepsText.match(/colour/gi) ||
                    converstionStepsText.match(/remind/gi) || converstionStepsText.match(/peaceful/gi) ||
                    converstionStepsText.match(/effect/gi) || converstionStepsText.match(/refresh/gi) ||
                    converstionStepsText.match(/certainly/gi) || converstionStepsText.match(/preference/gi) ||
                    converstionStepsText.match(/love/gi) || converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/impact/gi) || converstionStepsText.match(/like/gi)) {
                    await playScript("Okay. Do you think colors can affect a person's mood? Why or why not?");
                    setSampleAns([`  yes I do believe colors have a significant impact on a person's mood different colors
                    evoke different emotions and can influence our psychological state for example warm colors like red and orange are often associated with energy and excitement while cool colors like cream
                    and blue creates a sense of calmness and relaxation by using Color strategically we can enhance our mood and create a desired atmosphere.
                    `])
                    conditionsDependsOnUserSpeech(2)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Do you have a favorite color, and if yes, why?");
                    converstionSteps--;
                }




            } else if (converstionSteps == 5) {

                if (converstionStepsText.length < 10) {
                    await smallTalkError("Do you think colors can affect a person's mood? Why or why not?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Do you think colors can affect a person's mood? Why or why not?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/basically/gi) || converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/color/gi) || converstionStepsText.match(/colour/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/belive/gi) ||
                    converstionStepsText.match(/effect/gi) || converstionStepsText.match(/mood/gi) ||
                    converstionStepsText.match(/person/gi) || converstionStepsText.match(/evoke/gi) ||
                    converstionStepsText.match(/create/gi) || converstionStepsText.match(/enhance/gi) ||
                    converstionStepsText.match(/behavior/gi) || converstionStepsText.match(/stress /gi) ||

                    converstionStepsText.match(/usually/gi) || converstionStepsText.match(/mind/gi) ||
                    converstionStepsText.match(/as/gi) || converstionStepsText.match(/includ/gi) ||
                    converstionStepsText.match(/give/gi) || converstionStepsText.match(/depend/gi) ||
                    converstionStepsText.match(/individual/gi)
                ) {
                    await playScript("Okay. How do colors play a role in your everyday life?");
                    setSampleAns([` colors do play a significant role in my everyday life from the moment I wake up and chose my clothing to the interior Decor of my living space her colors surround me and contribute towards my overall mood and well-being I often find myself gravitating towards the colors that reflect an Ambience that I desire for a particular day or an occasion I feel optimistic today so I'm wearing my favorite color of blue.`])
                    conditionsDependsOnUserSpeech(3)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Do you think colors can affect a person's mood? Why or why not?");
                    converstionSteps--;
                }



            } else if (converstionSteps == 6) {

                if (converstionStepsText.length < 10) {
                    await smallTalkError("How do colors play a role in your everyday life?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. How do colors play a role in your everyday life?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/color/gi) || converstionStepsText.match(/colour/gi) ||
                    converstionStepsText.match(/play/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/Many/gi) || converstionStepsText.match(/some/gi) ||
                    converstionStepsText.match(/role /gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/life/gi) || converstionStepsText.match(/everyday/gi) ||
                    converstionStepsText.match(/ability/gi) || converstionStepsText.match(/action/gi) ||
                    converstionStepsText.match(/as/gi) || converstionStepsText.match(/relieve/gi) ||
                    converstionStepsText.match(/Influence/gi) || converstionStepsText.match(/reaction/gi) ||
                    converstionStepsText.match(/perception/gi) || converstionStepsText.match(/Change/gi) ||
                    converstionStepsText.match(/mood/gi) || converstionStepsText.match(/mind/gi) ||
                    converstionStepsText.match(/senses/gi) || converstionStepsText.match(/important /gi) ||
                    converstionStepsText.match(/importance/gi) || converstionStepsText.match(/worth /gi)
                ) {
                    await playScript(
                        "Have you ever changed your opinion about a color over time? And if so, which color, and why did your opinion change?"
                    );
                    setSampleAns([` uh yes I have changed my opinion about the color yellow over time in my younger years I
                    used to associate yellow with brightness and positivity but as I grew up I
                    developed a preference for more calm and subtle colors. Yellow started to appear too vibrant and too energetic for my taste and I found myself gravitating towards more softer and muted tones and hence over the time I have changed my opinion about yellow as my personal preferences and style have evolved.
                    `])
                    conditionsDependsOnUserSpeech(4)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  How do colors play a role in your everyday life?");
                    converstionSteps--;
                }




            } else if (converstionSteps == 7) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Have you ever changed your opinion about a color over time? And if so, which color, and why did your opinion change?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Have you ever changed your opinion about a color over time? And if so, which color, and why did your opinion change?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/color/gi) || converstionStepsText.match(/when/gi) ||
                    converstionStepsText.match(/do/gi) || converstionStepsText.match(/make/gi) ||
                    converstionStepsText.match(/made/gi) || converstionStepsText.match(/Where/gi) ||
                    converstionStepsText.match(/changed /gi) || converstionStepsText.match(/have/gi) ||
                    converstionStepsText.match(/time/gi) || converstionStepsText.match(/opinion/gi) ||

                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/younger/gi) ||
                    converstionStepsText.match(/personal/gi) || converstionStepsText.match(/preferences/gi) ||
                    converstionStepsText.match(/ability/gi) || converstionStepsText.match(/language/gi) ||
                    converstionStepsText.match(/conversion/gi)
                ) {
                    await playScript(
                        "Okay. Do you think people's preferences for certain colors change with age? Why or why not?");
                    setSampleAns([` uh I do think I do believe uh people's preference uh over certain colors change with time uh as people age and uh grow and they go through different stages of Life uh their personality tastes and environment can influence their color preferences for example children may be drawn towards more playful and bright colors while adults maybe adults might prefer more sophisticated and neutral tones additionally cultural and societal factors also play a role in shaping color preferences and hence it's not very uncommon for people to change their opinion about certain colors as they mature and undergo different lives Experiences.`]);
                    conditionsDependsOnUserSpeech(5)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Have you ever changed your opinion about a color over time? And if so, which color, and why did your opinion change?");
                    converstionSteps--;
                }


            } else if (converstionSteps == 8) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Do you think people's preferences for certain colors change with age? Why or why not?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Do you think people's preferences for certain colors change with age? Why or why not?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/color/gi) || converstionStepsText.match(/people/gi) ||
                    converstionStepsText.match(/positive/gi) || converstionStepsText.match(/Think/gi) ||
                    converstionStepsText.match(/do/gi) || converstionStepsText.match(/yes/gi) ||
                    converstionStepsText.match(/no/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/chance/gi) ||
                    converstionStepsText.match(/preference/gi) || converstionStepsText.match(/age/gi) ||
                    converstionStepsText.match(/time/gi) || converstionStepsText.match(/relieves/gi) ||
                    converstionStepsText.match(/toward/gi) || converstionStepsText.match(/learn/gi) ||

                    converstionStepsText.match(/Apparently/gi) || converstionStepsText.match(/proof/gi) ||
                    converstionStepsText.match(/grow/gi) || converstionStepsText.match(/mature/gi) ||
                    converstionStepsText.match(/Adult/gi) || converstionStepsText.match(/child/gi) ||
                    converstionStepsText.match(/kid/gi) || converstionStepsText.match(/preference/gi)
                ) {

                    await playScript("Can you think of any advertisements or logos? That use colors effectively. And why do you think these colors were chosen?");
                    setSampleAns([` one such example of effective color use in advertising would be the logo of Coca-Cola the logo features a vibrant red color red is often associated with energy excitement and stimulation the
                    choice of red in the logo of Coca-Cola is strategic as it aims to evoke the feelings of enthusiasm and creates a strong brand identity another example would be the logo of Facebook which has a blue color scheme blue is often associated with trust reliability and communication the Facebook's choice of blue in their logo is reflects their commitment towards creating a safe and trustworthy platform for connecting and sharing.
                    `])
                    conditionsDependsOnUserSpeech(6)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you think people's preferences for certain colors change with age? Why or why not?");
                    converstionSteps--;
                }




            } else if (converstionSteps == 9) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Can you think of any advertisements or logos? That use colors effectively. And why do you think these colors were chosen?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Can you think of any advertisements or logos? That use colors effectively. And why do you think these colors were chosen?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/advertisement/gi) || converstionStepsText.match(/logo/gi) ||
                    converstionStepsText.match(/color/gi) || converstionStepsText.match(/colour/gi) ||
                    converstionStepsText.match(/effective/gi) || converstionStepsText.match(/chosen/gi) ||
                    converstionStepsText.match(/choice /gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/example/gi) || converstionStepsText.match(/stimulation/gi) ||
                    converstionStepsText.match(/create/gi) || converstionStepsText.match(/make/gi) ||
                    converstionStepsText.match(/associate/gi) || converstionStepsText.match(/trust/gi) ||
                    converstionStepsText.match(/reliability /gi) || converstionStepsText.match(/communication /gi) ||
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/can/gi) ||
                    converstionStepsText.match(/would/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/sure/gi)


                ) {
                    await playScript("Okay. Do you believe that colors convey emotion?");
                    setSampleAns([` Anyone who has ever felt blue, seen red, blacked out, or turned green knows we're prone to make emotional associations with different shades" wrote Winifred Gallagher. I believe this to be true. The connection between colors and feelings is probably the most simple and profound. I would suggest it is even more powerful for young children without the words to convey their feelings.
                    Scratching the surface
                    Modern science has just started to scratch the surface of the enormous influence (i.e. consciously, unconsciously) color has upon our mental states, mood and emotions. Hemphill and Lange have concluded that colors do indeed impact our feelings. It's the start of the all-important fact gathering process. Interestingly enough, color has been used medicinally since as far back as the Ancient Egyptians and Chinese.
                    It seems reasonable that color influences mood. Ask anyone how they feel watching a sunset, rainbow or snowstorm...it sets a mood. Commercially there is even such as thing as "mood lighting" to stimulate certain feelings via varying colors and wavelengths of light. My real question is: Can it work the other way around? Can children express their initial feeling states via color?
                    `])
                    conditionsDependsOnUserSpeech(7)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Can you think of any advertisements or logos? That use colors effectively. And why do you think these colors were chosen?");
                    converstionSteps--;
                }


            } else if (converstionSteps == 10) {

                if (converstionStepsText.length < 10) {
                    await smallTalkError("Okay. Do you believe that colors convey emotion?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Okay. Do you believe that colors convey emotion?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/believe/gi) || converstionStepsText.match(/color/gi) ||
                    converstionStepsText.match(/colour/gi) || converstionStepsText.match(/convey/gi) ||
                    converstionStepsText.match(/creativity/gi) || converstionStepsText.match(/Work/gi) ||
                    converstionStepsText.match(/emotion /gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/think/gi) ||

                    converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/no/gi) || converstionStepsText.match(/not/gi) ||
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/sure/gi) ||
                    converstionStepsText.match(/anger/gi) || converstionStepsText.match(/happy/gi)
                ) {
                    await playScript("Imagine being in a room where everything is a certain color. How would you feel?");
                    setSampleAns([`Do you feel anxious in a yellow room? Does the color blue make you feel calm and relaxed? Artists and interior designers have long believed that color can dramatically affect moods, feelings, and emotions. "Colors, like features, follow the changes of the emotions," the artist Pablo Picasso once remarked. 
                    Color is a powerful communication tool and can be used to signal action, influence mood, and even influence physiological reactions. Certain colors have been associated with physiological changes, including increased blood pressure, increased metabolism, and eyestrain.
                    This article discusses what color psychology means and how colors affect the mind and body. It also explores research on the effect of color and the psychological reactions people may experience.
                    `])
                    conditionsDependsOnUserSpeech(8)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Okay. Do you believe that colors convey emotion?");
                    converstionSteps--;
                }


            } else if (converstionSteps == 11) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Imagine being in a room where everything is a certain color. How would you feel?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Imagine being in a room where everything is a certain color. How would you feel?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/room/gi) || converstionStepsText.match(/color/gi) ||
                    converstionStepsText.match(/colour/gi) || converstionStepsText.match(/will/gi) ||
                    converstionStepsText.match(/creativity/gi) || converstionStepsText.match(/Work/gi) ||
                    converstionStepsText.match(/would/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/everything/gi) || converstionStepsText.match(/chance/gi) ||
                    converstionStepsText.match(/feel/gi) ||

                    converstionStepsText.match(/emotion/gi) ||
                    converstionStepsText.match(/artist/gi) || converstionStepsText.match(/powerful/gi) ||
                    converstionStepsText.match(/communication/gi) || converstionStepsText.match(/Certain/gi) ||
                    converstionStepsText.match(/associated/gi) || converstionStepsText.match(/relieves/gi) ||
                    converstionStepsText.match(/psychological/gi) || converstionStepsText.match(/explores/gi)
                ) {
                    await playScript("Okay. What colors do you associate with happiness, sadness, anger, etc.?");
                    setSampleAns([`Here's a list of colours commonly used to identify several emotions: Red: Anger, embarrassment, passion, or lust. Blue: Shyness, sadness, or calmness. Yellow: Cowardice, happiness, or caution. Green: Disgust, envy, friendliness, or greed.`])
                    conditionsDependsOnUserSpeech(9)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Imagine being in a room where everything is a certain color. How would you feel?");
                    converstionSteps--;
                }


            } else if (converstionSteps == 12) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" What colors do you associate with happiness, sadness, anger, etc.?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.  What colors do you associate with happiness, sadness, anger, etc.?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/associate/gi) || converstionStepsText.match(/color/gi) ||
                    converstionStepsText.match(/colour/gi) || converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/creativity/gi) || converstionStepsText.match(/Work/gi) ||
                    converstionStepsText.match(/belive /gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/Happy/gi) || converstionStepsText.match(/Anger/gi) ||
                    converstionStepsText.match(/Sadness/gi) ||
                    converstionStepsText.match(/character/gi) ||
                    converstionStepsText.match(/identif/gi) || converstionStepsText.match(/mood /gi) ||
                    converstionStepsText.match(/mind/gi) || converstionStepsText.match(/associate/gi) ||
                    converstionStepsText.match(/character/gi) ||
                    converstionStepsText.match(/red/gi) || converstionStepsText.match(/green/gi) ||
                    converstionStepsText.match(/blue/gi) || converstionStepsText.match(/black/gi) ||
                    converstionStepsText.match(/white/gi) ||
                    converstionStepsText.match(/yellow/gi) || converstionStepsText.match(/orange/gi) ||
                    converstionStepsText.match(/purple/gi) || converstionStepsText.match(/pink/gi)
                ) {
                    await playScript("Okay. that was about section 1. Thanks.");
                    conditionsDependsOnUserSpeech(10)
                    await sendSpeakingtextToBackend(recordedText);
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  What colors do you associate with happiness, sadness, anger, etc.?");
                    converstionSteps--;
                }



            }

        }

        console.log("converstionStepsText");
        console.log(converstionStepsText);
        converstionStepsText = "";
    }

    async function Test10Sec2() {

    }

    async function Test10Sec3() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            await playScript(
                "My name is Adrian, and for this part, I will ask you questions related to the topic of Part 2. So, are you comfortable?"
            );
            setSampleAns(["Yes, I am comfortable you please proceed the test"])
        }
        converstionSteps++;
        if (converstionStepsText != '') {
            // if (converstionStepsText.length < 10) {
            //     await smallTalkError();
            // }
            // if (converstionStepsText.match('repeat') || converstionStepsText.match("don't understand")) {
            //     await playScript(
            //         "Ok , I am repeating.");
            //     converstionSteps--;
            // }
            // if (converstionSteps == 0) {
            //     await playScript(
            //         "For this part three. I will ask you some questions related to the topic of part two. And some questions connected to your response. Let's talk about social activities & football. So, are you ready ?"
            //     );
            // }
            if (converstionSteps == 1) {
                await playScript("Let me begin your test. Can you tell me your full name again?");
                setSampleAns([" My name is Parvez ahamed. You can call me ronok."]);
            }


            else if (converstionSteps == 2) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Are you ready?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Are you ready?");
                    converstionSteps--;
                }
                else {
                    await playScript("Let's talk about effective learning. Learning in what ways? Do you believe innovative ideas can enhance the learning experience?");
                    setSampleAns([` I believe innovative ideas have the have the potential to greatly enhance learning experience in several ways firstly they can provide fresh and engaging methods of content delivery
                making learning more enjoyable and memorable for example incorporating gamification or multimedia interactive multimedia into into educational materials can stimulate interest and active participation among learners secondly innovative ideas can cater to diverse learning styles individual needs allowing for personalized and adaptive learning experiences with the advancements in technology adaptive
                Learning platforms can assess the candidates strengths and weaknesses and tailor the content accordingly to ensure effective and efficient learning.
                `])
                    conditionsDependsOnUserSpeech(0)
                }
            }
            else if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Do you believe innovative ideas can enhance the learning experience?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Do you believe innovative ideas can enhance the learning experience?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/effective/gi) || converstionStepsText.match(/learning/gi) ||
                    converstionStepsText.match(/do/gi) || converstionStepsText.match(/make/gi) ||
                    converstionStepsText.match(/belive/gi) || converstionStepsText.match(/Work/gi) ||
                    converstionStepsText.match(/innovative/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/enhance/gi) || converstionStepsText.match(/chance/gi) ||
                    converstionStepsText.match(/ability/gi) || converstionStepsText.match(/experience/gi) ||
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/idea/gi) ||
                    converstionStepsText.match(/will/gi) || converstionStepsText.match(/would/gi) ||
                    converstionStepsText.match(/potential/gi) || converstionStepsText.match(/several/gi) ||
                    converstionStepsText.match(/enjoyable/gi) || converstionStepsText.match(/diverse/gi) ||
                    converstionStepsText.match(/individual/gi) || converstionStepsText.match(/adapt/gi) ||
                    converstionStepsText.match(/Mindset/gi) || converstionStepsText.match(/Self Reflection/gi) ||
                    converstionStepsText.match(/Problem/gi) || converstionStepsText.match(/Process/gi) ||
                    converstionStepsText.match(/create/gi) || converstionStepsText.match(/creativity /gi) ||
                    converstionStepsText.match(/necessary /gi)


                ) {
                    await playScript("What role does technology play in enhancing learning outcomes? And can you provide some specific examples of this?");
                    setSampleAns([` The pandemic has generated universal demand for technology in education, there’s no doubt it is essential for the continuation of teaching. However, aside from the fact it’s a minimum requirement to be able to conduct lessons, there are numerous benefits that have an impact for both the teacher and students. Bruna Caltabiano discusses how she embraces technology in an online world and how to use it to build rapport.
                    Building rapport
                    3. Giving feedback on tasks and activities
                    It is important to “board” the answers when correcting activities with students. It is much easier to do so when students can visualise the activity.
                    4. Clarifying language
                    When we share the page from the book with students with examples and rules, it is easier to elicit them from students rather than giving long teacher-centered explanations.
                    5. Avoiding narration of stages and procedures
                    As the teacher will just need to share one screen and everything they need will be there, there will be no need to keep telling students what they are doing, as students can already see the correct page.
                    6. Teaching more contextualised and meaningful lessons
                    `])
                    conditionsDependsOnUserSpeech(1)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Do you believe innovative ideas can enhance the learning experience?");
                    converstionSteps--;
                }

            } else if (converstionSteps == 4) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("What role does technology play in enhancing learning outcomes? And can you provide some specific examples of this?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. What role does technology play in enhancing learning outcomes? And can you provide some specific examples of this?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/role/gi) || converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/does/gi) || converstionStepsText.match(/sure/gi) ||
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/will/gi) || converstionStepsText.match(/would/gi) ||
                    converstionStepsText.match(/technology/gi) || converstionStepsText.match(/enhancing/gi) ||
                    converstionStepsText.match(/learning/gi) || converstionStepsText.match(/outcome/gi) ||
                    converstionStepsText.match(/experience/gi) || converstionStepsText.match(/relieves/gi) ||
                    converstionStepsText.match(/skill/gi) || converstionStepsText.match(/learn/gi) ||

                    converstionStepsText.match(/pandemic/gi) || converstionStepsText.match(/technology/gi) ||
                    converstionStepsText.match(/education/gi) || converstionStepsText.match(/requirement/gi) ||
                    converstionStepsText.match(/example/gi) || converstionStepsText.match(/feedback/gi) ||
                    converstionStepsText.match(/Clarifying/gi) || converstionStepsText.match(/language/gi) ||
                    converstionStepsText.match(/correct/gi) || converstionStepsText.match(/universal/gi)

                ) {
                    await playScript("OK . Are there any other ideas? Or techniques you have come across have that aim to improve learning?");
                    setSampleAns([` yes there are several other ideas and techniques that I've come across that can aim that aims to improve learning one such technique would be the use of multimedia and visual aids like videos
                    presentations infographics visual elements can enhance comprehension and
                    retention especially for visual Learners it can make it easy to access complex
                    information and get a deep understanding of the topic I always visualize the information I read or hear to help me learn better.
                    `])
                    conditionsDependsOnUserSpeech(2)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  What role does technology play in enhancing learning outcomes? And can you provide some specific examples of this?");
                    converstionSteps--;
                }

            } else if (converstionSteps == 5) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Are there any other ideas? Or techniques you have come across have that aim to improve learning?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Are there any other ideas? Or techniques you have come across have that aim to improve learning?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/sure/gi) || converstionStepsText.match(/english/gi) ||
                    converstionStepsText.match(/improve/gi) || converstionStepsText.match(/across/gi) ||
                    converstionStepsText.match(/creativity/gi) || converstionStepsText.match(/learning/gi) ||
                    converstionStepsText.match(/several/gi) || converstionStepsText.match(/technique/gi) ||
                    converstionStepsText.match(/as/gi) || converstionStepsText.match(/presentation/gi) ||
                    converstionStepsText.match(/skill/gi) || converstionStepsText.match(/visual/gi) ||
                    converstionStepsText.match(/especially/gi) || converstionStepsText.match(/variety/gi) ||
                    converstionStepsText.match(/information/gi) || converstionStepsText.match(/opportunitie/gi) ||
                    converstionStepsText.match(/Focu/gi)
                ) {
                    await playScript("Okay. How can individuals stay motivated? And committed to implementing new ideas for enhanced learning outcomes?");
                    setSampleAns([` to stay motivated and committed towards implementing new new ideas for enhanced learning outcomes individuals can employ several strategies first and foremost
                    setting a clear goal is crucial by defining specific targets and Milestones Learners can track their progress and stay focused to the goal I set a goal to score in the top 10 percent of the civil
                    services examination so I knew exactly what I need to do additionally seeking
                    support and accountability from peers and mentors can provide motivation and encouragement joining study groups and online communities centered around the shared interest can foster a sense of community and provide a platform for idea sharing and
                    Support that is the end of part three that concludes the speaking section of the IELTS exam you will have your mark in two days after you finish the other sections online and your official certificate will be in the mail in about 10 days. Please remember your passport goodbye. thank you
                    `])
                    conditionsDependsOnUserSpeech(3)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Are there any other ideas? Or techniques you have come across have that aim to improve learning?");
                    converstionSteps--;
                }


            } else if (converstionSteps == 6) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("How can individuals stay motivated? And committed to implementing new ideas for enhanced learning outcomes?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. How can individuals stay motivated? And committed to implementing new ideas for enhanced learning outcomes?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/motivat/gi) || converstionStepsText.match(/individual/gi) ||
                    converstionStepsText.match(/positive/gi) || converstionStepsText.match(/implement/gi) ||
                    converstionStepsText.match(/commit/gi) || converstionStepsText.match(/Work/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/belive/gi) || converstionStepsText.match(/learning/gi) ||
                    converstionStepsText.match(/toward/gi) || converstionStepsText.match(/outcome/gi) ||
                    converstionStepsText.match(/foremost/gi) || converstionStepsText.match(/relieves/gi) ||
                    converstionStepsText.match(/skill/gi) || converstionStepsText.match(/learn/gi) ||
                    converstionStepsText.match(/ability/gi) || converstionStepsText.match(/define/gi) ||
                    converstionStepsText.match(/encouragement/gi) || converstionStepsText.match(/community/gi) ||
                    converstionStepsText.match(/Prioritize/gi) || converstionStepsText.match(/interesting/gi) ||
                    converstionStepsText.match(/specific/gi) || converstionStepsText.match(/Adopt/gi) ||
                    converstionStepsText.match(/support/gi) || converstionStepsText.match(/seek/gi) ||
                    converstionStepsText.match(/social/gi) || converstionStepsText.match(/Demonstrate/gi)
                ) {
                    await playScript("Okay. That was about section 3. Thanks.");
                    conditionsDependsOnUserSpeech(4)
                    await sendSpeakingtextToBackend(recordedText);
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  How can individuals stay motivated? And committed to implementing new ideas for enhanced learning outcomes?");
                    converstionSteps--;
                }


            }

        }

        console.log("converstionStepsText");
        console.log(converstionStepsText);
        converstionStepsText = "";
    }





    // text-11-sections
    async function Test11Sec1() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            if (!userSpeakingTestNo) {
                await playScript(
                    "Hello and welcome to the IELTS speaking portion of the test. Jone is my name. & For this portion of the exam, I will serve as your examiner. We are carrying out this. Would you kindly tell me your entire name?"
                );
                setSampleAns([" Simply you can say your full name. As like my name is Jone dow.You can call me Jone"])
            } else {
                await playScript("Are you ready to take the test then?");
                setSampleAns([" Simply you can say the positive answer. As like Yes i am Ready to give the test. ", "2, Yes, I am reay.You can proceed the test"])

            }

        }


        converstionSteps++;
        if (converstionStepsText != '') {

            if (!userSpeakingTestNo) {
                if (converstionSteps == 1) {
                    await playScript(
                        "I'll start your exam now. What's your full name, please?"
                    );
                } else if (converstionSteps == 2) {
                    if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating.What's your full name, please?");
                        converstionSteps--;
                    }
                    else if (converstionStepsText.match("name") || converstionStepsText.match("call")) {
                        if (converstionStepsText.match("call")) {
                            await playScript(
                                "So, for this section. I'm going to ask some general questions. Where do you live?"
                            );
                            setSampleAns([" Simply you can say your area/ or place where you are live in.As like I am living in Dhaka,Bangladesh", "2, I live in kolkata,India"])
                            localStorage.setItem("SpeakingTestNo", testNo);
                            conditionsDependsOnUserSpeech(0)
                        } else {
                            await playScript("Alright. What can I call you?");
                            setSampleAns([" You can simply say.You can call me Jone"])
                            converstionSteps--;
                        }
                    }
                    else {
                        await playScript("Alright, what's your name?");
                        setSampleAns(["My name is Parvez Ahamed. You can call me Ronok"]);
                        converstionSteps--;
                    }

                } else if (converstionSteps == 3) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError(" Where do you live?");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating. Where do you live?");
                        converstionSteps--;
                    }
                    else if (converstionStepsText.match(/live/gi) || converstionStepsText.match(/leaving/gi) ||
                        converstionStepsText.match(/in/gi) || converstionStepsText.match(/at/gi) ||
                        converstionStepsText.match(/from/gi) || converstionStepsText.match(/i am living/gi)) {
                        await playScript("Do you work or study?");
                        setSampleAns(["  I am currently pursuing studies and enrolled in The Bachelor degrees in mathematics.", "2, Currenty I working somwhere for my livlihood."])
                        conditionsDependsOnUserSpeech(1)
                    } else {
                        await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Where do you live? ");
                        converstionSteps--;
                    }

                }
            } else {
                if (converstionSteps == 1) {
                    await playScript("Okay. Are you happy today?");
                    setSampleAns([" Yes, sir i am happy to day.Thanks for asking."])
                }
                if (converstionSteps == 2) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError("Are you ready?");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating. Are you ready?");
                        converstionSteps--;
                    }
                    else {
                        await playScript("Okay. Do you like music?");
                        setSampleAns([" Yes, sir i love music. When i get spair time i always listen musics"]);
                        conditionsDependsOnUserSpeech(0)
                    }
                }
                if (converstionSteps == 3) {
                    if (converstionStepsText.length < 5) {
                        await smallTalkError("Do you like music?");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating. Do you like music?");
                        converstionSteps--;
                    }
                    else {
                        await playScript("Do you work or study?");
                        setSampleAns(["  I am currently pursuing studies and enrolled in The Bachelor degrees in mathematics.", "2, Currenty I working somwhere for my livlihood."])
                        conditionsDependsOnUserSpeech(1)
                    }
                }
            }



            if (converstionSteps == 4) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Do you work or study?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.  Do you work or study?");
                    converstionSteps--;
                }
                else if (converstionStepsText.match(/work/gi) || converstionStepsText.match(/study/gi) ||
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/working/gi) || converstionStepsText.match(/studying/gi) ||
                    converstionStepsText.match(/currently  /gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/studies /gi) || converstionStepsText.match(/pursuing/gi)) {
                    await playScript("Okay. Let's talk about spending time in nature. Do you enjoy spending time in nature? Why or why not?");
                    setSampleAns([` enjoy spending time in nature why why not yes I enjoy spending time in nature in Ranchi with its picturesque landscape and Syrian surrounding helps me to unwind and stay away from`, `2, the bustling of the city life nature helps me to reconnect with myself and find inner peace
                    Spending time in nature can help relieve stress and anxiety, improve your mood, and boost feelings of happiness and wellbeing123. Humans evolved in the great outdoors, and your brain benefits from a journey back to nature1. Time spent outside can reduce stress, anxiety, and depression, and the calming nature sounds and even outdoor silence can lower blood pressure and levels of the stress hormone cortisol, which calms the body's fight-or-flight response`])
                    conditionsDependsOnUserSpeech(2)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you work or study?");
                    converstionSteps--;
                }

            } else if (converstionSteps == 5) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Do you enjoy spending time in nature? Why or why not?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Do you enjoy spending time in nature? Why or why not?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/spend/gi) || converstionStepsText.match(/love/gi) ||
                    converstionStepsText.match(/like/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/enjoy/gi) ||
                    converstionStepsText.match(/nature /gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/landscape /gi) || converstionStepsText.match(/chance/gi) ||
                    converstionStepsText.match(/outdoor/gi) || converstionStepsText.match(/calm/gi) ||
                    converstionStepsText.match(/help/gi) || converstionStepsText.match(/relieve/gi)
                ) {
                    await playScript("Okay. What are some activities you like to do when you are in nature?");
                    setSampleAns([` when I am in nature I like to 
                    go for exploring the beautiful Scenic landscape of of Ranchi capturing the breathtaking um of waterfall of him through photography
                   `])
                    conditionsDependsOnUserSpeech(3)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Do you enjoy spending time in nature? Why or why not?");
                    converstionSteps--;
                }

            } else if (converstionSteps == 6) {

                if (converstionStepsText.length < 10) {
                    await smallTalkError("What are some activities you like to do when you are in nature?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. What are some activities you like to do when you are in nature?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/activitie/gi) || converstionStepsText.match(/nature/gi) ||
                    converstionStepsText.match(/positive/gi) || converstionStepsText.match(/want/gi) ||
                    converstionStepsText.match(/will/gi) || converstionStepsText.match(/would/gi) ||
                    converstionStepsText.match(/Want /gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                    converstionStepsText.match(/explor/gi) || converstionStepsText.match(/photography/gi) ||
                    converstionStepsText.match(/beautiful/gi) || converstionStepsText.match(/make/gi) ||
                    converstionStepsText.match(/Collect/gi) || converstionStepsText.match(/butterflie/gi) ||
                    converstionStepsText.match(/Paint/gi) || converstionStepsText.match(/decorate/gi) ||
                    converstionStepsText.match(/tree/gi)
                ) {
                    await playScript(" How often do you have the opportunity to spend time in nature?");
                    setSampleAns([`  being in Ranchi I am very enough to start I make sure that I spend time in weekends on weekends or um or during holidays to venture into Lush Green Hills of Ranchi and its landscape around the city I spend few hours of the week in nature to reconnect with myself`, `2, According to a survey, over half of American adults report spending 5 hours or fewer outside in nature each week1. Here are some suggestions for spending time in nature2:
                    1 30 minute walk or run 6 days a week.,
                    2 45 minute walk or run 4 - 6 days a week.,
                    3 60 minute walk or run 3 - 5 days a week.,
                    4 Two-hour walk or hike twice a week.,
                    `])
                    conditionsDependsOnUserSpeech(4)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  What are some activities you like to do when you are in nature?");
                    converstionSteps--;
                }

            } else if (converstionSteps == 7) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" How often do you have the opportunity to spend time in nature?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.  How often do you have the opportunity to spend time in nature?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/opportunity/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                    converstionStepsText.match(/explor/gi) || converstionStepsText.match(/photography/gi) ||
                    converstionStepsText.match(/beautiful/gi) || converstionStepsText.match(/make/gi) ||
                    converstionStepsText.match(/Collect/gi) || converstionStepsText.match(/butterflie/gi) ||
                    converstionStepsText.match(/Paint/gi) || converstionStepsText.match(/decorate/gi) ||
                    converstionStepsText.match(/tree/gi) ||
                    converstionStepsText.match(/nature/gi) || converstionStepsText.match(/some/gi) ||
                    converstionStepsText.match(/do/gi) || converstionStepsText.match(/spend/gi) ||
                    converstionStepsText.match(/time/gi) || converstionStepsText.match(/yes/gi) ||
                    converstionStepsText.match(/no/gi) || converstionStepsText.match(/not/gi) ||
                    converstionStepsText.match(/basically/gi) || converstionStepsText.match(/minute/gi) ||
                    converstionStepsText.match(/hour/gi) || converstionStepsText.match(/According/gi) ||
                    converstionStepsText.match(/enough /gi) ||
                    converstionStepsText.match(/venture/gi) || converstionStepsText.match(/landscape/gi) ||
                    converstionStepsText.match(/connect /gi)

                ) {
                    await playScript("Do you prefer spending time in nature alone? Or with others, why while?");
                    setSampleAns([`  I enjoy the Solitude in nature for introspection and self-reflection. I also enjoy the company of my close friend exploring the beauty of Ranchi. With a companion, help me to share memories and reconnect with the person.
                    laughter and cherish lifelong memories which we look back on with fondness. Last weekend I went for a hike with my friend Puneet and we had a lot of fun.
                    `])
                    conditionsDependsOnUserSpeech(5)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  How often do you have the opportunity to spend time in nature?");
                    converstionSteps--;
                }



            } else if (converstionSteps == 8) {

                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Do you prefer spending time in nature alone? Or with others, why while?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.  Do you prefer spending time in nature alone? Or with others, why while?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/Yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/will/gi) ||
                    converstionStepsText.match(/would/gi) || converstionStepsText.match(/alone/gi) ||
                    converstionStepsText.match(/time/gi) || converstionStepsText.match(/nature/gi) ||
                    converstionStepsText.match(/basically/gi) || converstionStepsText.match(/prefer/gi) ||
                    converstionStepsText.match(/while/gi) || converstionStepsText.match(/According/gi) ||
                    converstionStepsText.match(/enough /gi) || converstionStepsText.match(/connect /gi) ||
                    converstionStepsText.match(/venture/gi) || converstionStepsText.match(/landscape/gi) ||
                    converstionStepsText.match(/self/gi) || converstionStepsText.match(/companion/gi) ||
                    converstionStepsText.match(/laught/gi) || converstionStepsText.match(/memorie/gi) ||
                    converstionStepsText.match(/weeken/gi) || converstionStepsText.match(/fun/gi) ||
                    converstionStepsText.match(/everyday/gi) || converstionStepsText.match(/calm/gi) ||
                    converstionStepsText.match(/similar /gi) || converstionStepsText.match(/particularly/gi) ||
                    converstionStepsText.match(/through/gi) || converstionStepsText.match(/research/gi)

                ) {
                    await playScript("Have you ever had any memorable experiences? Or adventures while spending time in nature?");
                    setSampleAns([`  memorable experiences spending spending time in nature I would like to tell you about my experience when I was trekking in the top on the top of the pahari Monday where I witness a mesmerizing Sunset painting the sky with its vibrant colors
                    it filled my heart with joy and tranquility.
                    `, `2, How often do you spend time in nature? How closely do you observe your surroundings? Has the pandemic changed your relationship with the natural world in any way? If so, how?
                    In honor of Earth Day, we invite you to ponder these questions and tell us, too, about the coolest and most memorable things you’ve ever seen or experienced outside — whether on a camping trip in a remote place or in your own backyard.
                    `])
                    conditionsDependsOnUserSpeech(6)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Do you prefer spending time in nature alone? Or with others, why while?");
                    converstionSteps--;
                }



            } else if (converstionSteps == 9) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Have you ever had any memorable experiences? Or adventures while spending time in nature?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Have you ever had any memorable experiences? Or adventures while spending time in nature?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/memorable/gi) || converstionStepsText.match(/nature/gi) ||
                    converstionStepsText.match(/while/gi) || converstionStepsText.match(/According/gi) ||
                    converstionStepsText.match(/Yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/self/gi) || converstionStepsText.match(/Adventure/gi) ||
                    converstionStepsText.match(/experience/gi) || converstionStepsText.match(/memorie/gi) ||
                    converstionStepsText.match(/time/gi) || converstionStepsText.match(/fun/gi) ||
                    converstionStepsText.match(/would/gi) || converstionStepsText.match(/calm/gi) ||
                    converstionStepsText.match(/similar /gi) || converstionStepsText.match(/particularly/gi) ||
                    converstionStepsText.match(/through/gi) || converstionStepsText.match(/like/gi) ||
                    converstionStepsText.match(/love/gi) || converstionStepsText.match(/Sunset/gi) ||
                    converstionStepsText.match(/color/gi) || converstionStepsText.match(/heart/gi) ||
                    converstionStepsText.match(/tranquility /gi)
                ) {
                    await playScript("Okay. Are there any challenges or obstacles you face? When trying to spend time in nature , And if so, what are they?");
                    setSampleAns([`  yes uh staying in Ranchi there are obstacles of rainy season due to rain there are few um sites in Ranchi which become inaccessible due to Slippery conditions not because of the work I get very less time to spend in nature. Additionally, time constraints and work pressure don't allow me to spend a lot of time in Nature.
                    `])
                    conditionsDependsOnUserSpeech(7)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Have you ever had any memorable experiences? Or adventures while spending time in nature?");
                    converstionSteps--;
                }


            } else if (converstionSteps == 10) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Are there any challenges or obstacles you face? When trying to spend time in nature , And if so, what are they?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Are there any challenges or obstacles you face? When trying to spend time in nature , And if so, what are they?");
                    converstionSteps--;
                }
                else if (

                    converstionStepsText.match(/challenge/gi) || converstionStepsText.match(/nature/gi) ||
                    converstionStepsText.match(/while/gi) || converstionStepsText.match(/According/gi) ||
                    converstionStepsText.match(/Yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/self/gi) || converstionStepsText.match(/Adventure/gi) ||
                    converstionStepsText.match(/experience/gi) || converstionStepsText.match(/memorie/gi) ||
                    converstionStepsText.match(/time/gi) || converstionStepsText.match(/trying/gi) ||
                    converstionStepsText.match(/would/gi) || converstionStepsText.match(/obstacle/gi) ||
                    converstionStepsText.match(/face/gi) || converstionStepsText.match(/particularly/gi) ||
                    converstionStepsText.match(/through/gi) || converstionStepsText.match(/become/gi) ||
                    converstionStepsText.match(/love/gi) || converstionStepsText.match(/condition/gi) ||
                    converstionStepsText.match(/color/gi) || converstionStepsText.match(/heart/gi) ||
                    converstionStepsText.match(/Additionally/gi) ||
                    converstionStepsText.match(/pressure /gi) || converstionStepsText.match(/Disadvantage/gi) ||
                    converstionStepsText.match(/Apart/gi) || converstionStepsText.match(/trip/gi) ||
                    converstionStepsText.match(/problem/gi) || converstionStepsText.match(/comfortable/gi) ||
                    converstionStepsText.match(/reserve/gi) || converstionStepsText.match(/quite/gi) ||
                    converstionStepsText.match(/reserve/gi)


                ) {
                    await playScript("What can we do to combat deforestation?");
                    setSampleAns([` Some ways to combat deforestation are:
                    Plant more trees in your community or through global organizations,
                    Use less paper and go paperless at home and in the office,
                    Recycle paper and cardboard and buy recycled products,
                    Buy only sustainable wood products and avoid products containing palm oil,
                    Reduce meat consumption and food waste,
                    `])
                    conditionsDependsOnUserSpeech(8)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Are there any challenges or obstacles you face? When trying to spend time in nature , And if so, what are they?");
                    converstionSteps--;
                }

            } else if (converstionSteps == 11) {

                if (converstionStepsText.length < 10) {
                    await smallTalkError(" What can we do to combat deforestation?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.What can we do to combat deforestation?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/combat/gi) || converstionStepsText.match(/can/gi) ||
                    converstionStepsText.match(/while/gi) || converstionStepsText.match(/According/gi) ||
                    converstionStepsText.match(/Yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/self/gi) || converstionStepsText.match(/belive/gi) ||
                    converstionStepsText.match(/will/gi) || converstionStepsText.match(/would/gi) ||
                    converstionStepsText.match(/time/gi) || converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/deforestation/gi) || converstionStepsText.match(/obstacle/gi) ||
                    converstionStepsText.match(/face/gi) || converstionStepsText.match(/particularly/gi) ||
                    converstionStepsText.match(/through/gi) || converstionStepsText.match(/Plant/gi) ||
                    converstionStepsText.match(/love/gi) || converstionStepsText.match(/condition/gi) ||
                    converstionStepsText.match(/tree/gi) || converstionStepsText.match(/organization/gi) ||
                    converstionStepsText.match(/paper/gi) ||
                    converstionStepsText.match(/Recycle/gi) || converstionStepsText.match(/contain/gi) ||
                    converstionStepsText.match(/approach/gi) || converstionStepsText.match(/grocery/gi) ||
                    converstionStepsText.match(/vegetable/gi) || converstionStepsText.match(/Support/gi) ||
                    converstionStepsText.match(/Donat/gi) || converstionStepsText.match(/might/gi)
                ) {
                    await playScript("Okay. Why do we need to stop deforestation?");
                    setSampleAns([` Stopping deforestation is vitally important for many reasons12. Some of these reasons are:
                    Protecting millions of animal and plant species from extinction1.,
                    Reducing global warming and climate change by preventing the release of massive amounts of carbon dioxide into the atmosphere.,
                    Preventing floods and soil erosion by maintaining the natural water cycle and soil quality.,`])
                    conditionsDependsOnUserSpeech(9)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  What can we do to combat deforestation? ");
                    converstionSteps--;
                }



            } else if (converstionSteps == 12) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Why do we need to stop deforestation?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.Why do we need to stop deforestation?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/need/gi) || converstionStepsText.match(/deforestation/gi) ||
                    converstionStepsText.match(/while/gi) || converstionStepsText.match(/According/gi) ||
                    converstionStepsText.match(/Yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/because/gi) || converstionStepsText.match(/belive/gi) ||
                    converstionStepsText.match(/will/gi) || converstionStepsText.match(/would/gi) ||
                    converstionStepsText.match(/time/gi) || converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/stop/gi) || converstionStepsText.match(/important/gi) ||
                    converstionStepsText.match(/face/gi) || converstionStepsText.match(/particularly/gi) ||
                    converstionStepsText.match(/through/gi) || converstionStepsText.match(/Plant/gi) ||
                    converstionStepsText.match(/reason/gi) || converstionStepsText.match(/condition/gi) ||
                    converstionStepsText.match(/tree/gi) || converstionStepsText.match(/prevent/gi) ||
                    converstionStepsText.match(/release/gi) ||
                    converstionStepsText.match(/Recycle/gi) || converstionStepsText.match(/atmosphere/gi) ||
                    converstionStepsText.match(/maintain/gi) || converstionStepsText.match(/Restor/gi) ||
                    converstionStepsText.match(/livelihood/gi) || converstionStepsText.match(/Support/gi) ||
                    converstionStepsText.match(/Donat/gi) || converstionStepsText.match(/might/gi) ||
                    converstionStepsText.match(/ecosystem/gi) || converstionStepsText.match(/climate/gi) ||
                    converstionStepsText.match(/increase/gi) ||
                    converstionStepsText.match(/gase/gi) || converstionStepsText.match(/activitie/gi) ||
                    converstionStepsText.match(/effort/gi) || converstionStepsText.match(/forest/gi) ||
                    converstionStepsText.match(/emission/gi) || converstionStepsText.match(/leader/gi)

                ) {
                    await playScript("Okay. that was about section 1. Thanks.");
                    conditionsDependsOnUserSpeech(10)
                    await sendSpeakingtextToBackend(recordedText);
                } else {
                    await playScript("Sorry,the reply is irrelevant. I am repeating.  Why do we need to stop deforestation?");
                    converstionSteps--;
                }



            }

        }

        console.log("converstionStepsText");
        console.log(converstionStepsText);
        converstionStepsText = "";
    }

    async function Test11Sec2() {

    }

    async function Test11Sec3() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            await playScript(
                "My name is Adrian, and I will be your examiner for this part of the test in Part 3. Are you comfortable?"
            );
            setSampleAns(["Yes, I am comfortable you please proceed the test"])
        }
        converstionSteps++;
        if (converstionStepsText != '') {
            // if (converstionStepsText.length < 10) {
            //     await smallTalkError();
            // }
            // if (converstionStepsText.match('repeat') || converstionStepsText.match("don't understand")) {
            //     await playScript(
            //         "Ok , I am repeating.");
            //     converstionSteps--;
            // }
            // if (converstionSteps == 0) {
            //     await playScript(

            //         "My name is Adrian, &  I will be your examiner for this part of the test    of the part three. Are you confortable?"
            //     );
            // }
            if (converstionSteps == 1) {
                await playScript(
                    "Sorry.... can you repeat that please");
                setSampleAns([" You can simply repeated the asnwer that you said little moment ago."])
            } else if (converstionSteps == 2) {
                if (converstionStepsText.length < 6) {
                    await smallTalkError("Are you ready");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.Are you ready?");
                    converstionSteps--;
                }
                else {
                    await playScript("Okay. Let's talk about vacations and traveling. In what ways can going on a vacation contribute to a person's overall well-being and happiness?");
                    setSampleAns([` um going for a vacation contributes to persons well-being and happiness in number of ways it helps a person to go out from his rooting routine activities allows individuals to uh to relax
                unwind and rejuvenate exploring new places doing different activities can broader the perspective perception of a person and bring joy and happiness I'm sure I will feel great after going for my dream vacation in incident
                `])
                    conditionsDependsOnUserSpeech(0)
                }
            }
            else if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" In what ways can going on a vacation contribute to a person's overall well-being and happiness?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. In what ways can going on a vacation contribute to a person's overall well-being and happiness?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/dream/gi) || converstionStepsText.match(/vacation/gi) ||
                    converstionStepsText.match(/travel/gi) || converstionStepsText.match(/contribute/gi) ||
                    converstionStepsText.match(/person/gi) || converstionStepsText.match(/overall/gi) ||
                    converstionStepsText.match(/happiness/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/go/gi) || converstionStepsText.match(/chance/gi) ||
                    converstionStepsText.match(/help/gi) || converstionStepsText.match(/activitie/gi) ||
                    converstionStepsText.match(/relax/gi) || converstionStepsText.match(/relieves/gi) ||
                    converstionStepsText.match(/joy/gi) || converstionStepsText.match(/great/gi)

                ) {
                    await playScript("Okay. How do you think the choice of destination impacts the experience of a perfect vacation?");
                    setSampleAns([` the choice of us every destination has its unique Landscapes and activities my dream vacation aligns with the activities which I will be doing in New Zealand so it perfectly aligns with my dream vacation choosing a destination with aligns with one's interests and preferences will allow a person to enjoy the dream vacation more and give them happiness and satisfaction`])
                    conditionsDependsOnUserSpeech(1)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  In what ways can going on a vacation contribute to a person's overall well-being and happiness?");
                    converstionSteps--;
                }

            }
            else if (converstionSteps == 4) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" How do you think the choice of destination impacts the experience of a perfect vacation?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. How do you think the choice of destination impacts the experience of a perfect vacation?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/dream/gi) || converstionStepsText.match(/vacation/gi) ||
                    converstionStepsText.match(/travel/gi) || converstionStepsText.match(/contribute/gi) ||
                    converstionStepsText.match(/person/gi) || converstionStepsText.match(/overall/gi) ||
                    converstionStepsText.match(/happiness/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/destination/gi) ||
                    converstionStepsText.match(/impact/gi) || converstionStepsText.match(/experience/gi) ||
                    converstionStepsText.match(/perfect/gi) || converstionStepsText.match(/great/gi) ||
                    converstionStepsText.match(/every/gi) || converstionStepsText.match(/unique/gi) ||
                    converstionStepsText.match(/Landscape/gi) || converstionStepsText.match(/experience/gi) ||
                    converstionStepsText.match(/satisfaction/gi) || converstionStepsText.match(/joy/gi)

                ) {
                    await playScript("Okay. Are there any factors, such as weather or seasonal events, that you would consider when deciding when to go on your dream vacation?");
                    setSampleAns([`Yes , the weather and seasonal events plays an important role in deciding the um the destination of your vacation I would choose to go in New Zealand during spring vacation which is from September to October because during that season the landscape are very vibrant because of the blooming flowers and the weather is very mild so choosing a destination with a favorable weather condition can enhance the overall experience of the dream vacation`])
                    conditionsDependsOnUserSpeech(2)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  How do you think the choice of destination impacts the experience of a perfect vacation?");
                    converstionSteps--;
                }

            }
            else if (converstionSteps == 5) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Are there any factors, such as weather or seasonal events, that you would consider when deciding when to go on your dream vacation?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Are there any factors, such as weather or seasonal events, that you would consider when deciding when to go on your dream vacation?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/destination/gi) ||
                    converstionStepsText.match(/dream/gi) || converstionStepsText.match(/vacation/gi) ||
                    converstionStepsText.match(/travel/gi) || converstionStepsText.match(/contribute/gi) ||
                    converstionStepsText.match(/factor/gi) || converstionStepsText.match(/weather/gi) ||
                    converstionStepsText.match(/seasonal/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/would/gi) || converstionStepsText.match(/will/gi) ||
                    converstionStepsText.match(/perfect/gi) || converstionStepsText.match(/great/gi) ||
                    converstionStepsText.match(/role/gi) || converstionStepsText.match(/vibrant/gi) ||
                    converstionStepsText.match(/flower/gi) || converstionStepsText.match(/favorable/gi) ||
                    converstionStepsText.match(/satisfaction/gi) || converstionStepsText.match(/joy/gi) ||
                    converstionStepsText.match(/enhance /gi) || converstionStepsText.match(/overall/gi)

                ) {
                    await playScript("Okay. Where are some potential benefits of traveling with companions on a dream vacation?");
                    setSampleAns([` traveling with companions in dream Vacation would enhance the experience of the vacation because companions can share a sense of responsibility they can there can be a deeper connection you can cherish a memories together and it also creates a sense of security when you are traveling with the companions so this is the reason why I would like to go to New Zealand with my family.`])
                    conditionsDependsOnUserSpeech(3)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Are there any factors, such as weather or seasonal events, that you would consider when deciding when to go on your dream vacation?");
                    converstionSteps--;
                }

            }
            else if (converstionSteps == 6) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("  What are some potential benefits of traveling with companions on a dream vacation?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.  What are some potential benefits of traveling with companions on a dream vacation??");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/destination/gi) ||
                    converstionStepsText.match(/dream/gi) || converstionStepsText.match(/vacation/gi) ||
                    converstionStepsText.match(/travel/gi) || converstionStepsText.match(/contribute/gi) ||
                    converstionStepsText.match(/potential/gi) || converstionStepsText.match(/benefit/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/would/gi) || converstionStepsText.match(/will/gi) ||
                    converstionStepsText.match(/companion/gi) || converstionStepsText.match(/role/gi) ||
                    converstionStepsText.match(/stress/gi) || converstionStepsText.match(/reliease/gi) ||
                    converstionStepsText.match(/Boost/gi) || converstionStepsText.match(/creativity/gi) ||
                    converstionStepsText.match(/satisfaction/gi) || converstionStepsText.match(/joy/gi) ||
                    converstionStepsText.match(/Discover/gi) || converstionStepsText.match(/knowledge/gi)
                ) {
                    await playScript("Okey. Do you think it's important to strike a balance? Between planned activities and relaxation time during a vacation. Why or why not?");
                    setSampleAns([` yes it is very important to have scheduled activities and downtime during your vacation schedule activities will help you to explore the place more and enjoy the vacation to its fullest and uh and and downtime will help you to unwind relax and absorb the surroundings balance of both will help a person to enjoy the whole vacation to its full potential `]);
                    conditionsDependsOnUserSpeech(4)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  What are some potential benefits of traveling with companions on a dream vacation?");
                    converstionSteps--;
                }


            } else if (converstionSteps == 7) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Do you think it's important to strike a balance? Between planned activities and relaxation time during a vacation. Why or why not?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Do you think it's important to strike a balance? Between planned activities and relaxation time during a vacation. Why or why not?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/destination/gi) ||
                    converstionStepsText.match(/dream/gi) || converstionStepsText.match(/vacation/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/travel/gi) || converstionStepsText.match(/contribute/gi) ||
                    converstionStepsText.match(/Between/gi) || converstionStepsText.match(/benefit/gi) ||
                    converstionStepsText.match(/would/gi) || converstionStepsText.match(/will/gi) ||
                    converstionStepsText.match(/plan/gi) || converstionStepsText.match(/activit/gi) ||
                    converstionStepsText.match(/stress/gi) || converstionStepsText.match(/reliease/gi) ||
                    converstionStepsText.match(/Boost/gi) || converstionStepsText.match(/creativity/gi) ||
                    converstionStepsText.match(/satisfaction/gi) || converstionStepsText.match(/joy/gi) ||
                    converstionStepsText.match(/Discover/gi) || converstionStepsText.match(/knowledge/gi) ||
                    converstionStepsText.match(/schedule/gi) || converstionStepsText.match(/help/gi) ||
                    converstionStepsText.match(/absorb/gi) || converstionStepsText.match(/balance/gi) ||
                    converstionStepsText.match(/potential/gi)
                ) {
                    await playScript("Okey. How do you think about an international vacation? Can it broaden a person's perspective and understanding of different cultures and lifestyles?");
                    setSampleAns([` International vacation can broaden a person's perception in several ways exploring different location doing different activities meeting with the local people or exploring the the historical side can broaden the perspective of a person they they exchange their culture they learn new things and going for vacation in New Zealand helped me to understand the Maori tradition `])
                    conditionsDependsOnUserSpeech(5)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Do you think it's important to strike a balance? Between planned activities and relaxation time during a vacation. Why or why not?");
                    converstionSteps--;
                }

            } else if (converstionSteps == 8) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("  How do you think about an international vacation? Can it broaden a person's perspective and understanding of different cultures and lifestyles?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.  How do you think about an international vacation? Can it broaden a person's perspective and understanding of different cultures and lifestyles?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/destination/gi) ||
                    converstionStepsText.match(/dream/gi) || converstionStepsText.match(/vacation/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/travel/gi) || converstionStepsText.match(/contribute/gi) ||
                    converstionStepsText.match(/international/gi) || converstionStepsText.match(/benefit/gi) ||
                    converstionStepsText.match(/would/gi) || converstionStepsText.match(/will/gi) ||
                    converstionStepsText.match(/perspective/gi) || converstionStepsText.match(/different/gi) ||
                    converstionStepsText.match(/stress/gi) || converstionStepsText.match(/reliease/gi) ||
                    converstionStepsText.match(/understand/gi) || converstionStepsText.match(/Lifestyles/gi) ||
                    converstionStepsText.match(/satisfaction/gi) || converstionStepsText.match(/joy/gi) ||
                    converstionStepsText.match(/Discover/gi) || converstionStepsText.match(/knowledge/gi) ||
                    converstionStepsText.match(/broaden/gi) || converstionStepsText.match(/help/gi) ||
                    converstionStepsText.match(/absorb/gi) || converstionStepsText.match(/balance/gi) ||
                    converstionStepsText.match(/perception/gi) ||
                    converstionStepsText.match(/location/gi) || converstionStepsText.match(/place/gi) ||
                    converstionStepsText.match(/local/gi) || converstionStepsText.match(/exchange/gi) ||
                    converstionStepsText.match(/learn/gi)
                ) {
                    await playScript("What role do budget and financial planning play in making a dream vacation a reality?");
                    setSampleAns([` it helps you to take a decision and save for your dream vacation for example if I want to have my dream vacation in New Zealand so I know that I have to save 10 000 US dollar for my dream vacation to New Zealand and that gives me a clear idea on what I need to do to achieve this goal. `])
                    conditionsDependsOnUserSpeech(6)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  How do you think about an international vacation? Can it broaden a person's perspective and understanding of different cultures and lifestyles?");
                    converstionSteps--;
                }



            } else if (converstionSteps == 9) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" What role do budget and financial planning play in making a dream vacation a reality?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.  What role do budget and financial planning play in making a dream vacation a reality?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/budget/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/big/gi) ||
                    converstionStepsText.match(/dream/gi) || converstionStepsText.match(/vacation/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/travel/gi) || converstionStepsText.match(/small/gi) ||
                    converstionStepsText.match(/financial/gi) || converstionStepsText.match(/Play/gi) ||
                    converstionStepsText.match(/would/gi) || converstionStepsText.match(/will/gi) ||
                    converstionStepsText.match(/reality/gi) || converstionStepsText.match(/different/gi) ||
                    converstionStepsText.match(/stress/gi) || converstionStepsText.match(/reliease/gi) ||
                    converstionStepsText.match(/understand/gi) || converstionStepsText.match(/plan/gi) ||
                    converstionStepsText.match(/help/gi) || converstionStepsText.match(/decision/gi) ||
                    converstionStepsText.match(/Discover/gi) || converstionStepsText.match(/money/gi) ||
                    converstionStepsText.match(/need/gi) || converstionStepsText.match(/achieve/gi) ||
                    converstionStepsText.match(/goal/gi) || converstionStepsText.match(/balance/gi)
                ) {
                    await playScript("What would be your dream vacation ?And why?");
                    setSampleAns([` A dream vacation is a personal preference that depends on one's interests, budget, and goals. One way to describe a dream vacation is to use the following structure1:
                    Where the vacation would be,
                    Who would be with you,
                    What you would like to do there,
                    Why you think it would be a perfect vacation for youFor example, someone who loves music and adventure might say that their dream vacation would be a summer cross country trip in a motor home, starting from the east coast of the United States and working their way to the west coast by attending music festivals and concerts along the way2.
                    `])
                    conditionsDependsOnUserSpeech(7)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  What role do budget and financial planning play in making a dream vacation a reality?");
                    converstionSteps--;
                }


            } else if (converstionSteps == 10) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" What would your dream vacation be?And why?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.  What would your dream vacation be?And why?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/big/gi) ||
                    converstionStepsText.match(/dream/gi) || converstionStepsText.match(/vacation/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/travel/gi) || converstionStepsText.match(/small/gi) ||
                    converstionStepsText.match(/financial/gi) || converstionStepsText.match(/Play/gi) ||
                    converstionStepsText.match(/would/gi) || converstionStepsText.match(/will/gi) ||
                    converstionStepsText.match(/reality/gi) || converstionStepsText.match(/make/gi) ||
                    converstionStepsText.match(/stress/gi) || converstionStepsText.match(/reliease/gi) ||
                    converstionStepsText.match(/understand/gi) || converstionStepsText.match(/plan/gi) ||
                    converstionStepsText.match(/help/gi) || converstionStepsText.match(/decision/gi) ||
                    converstionStepsText.match(/Discover/gi) || converstionStepsText.match(/money/gi) ||
                    converstionStepsText.match(/need/gi) || converstionStepsText.match(/achieve/gi) ||
                    converstionStepsText.match(/goal/gi) || converstionStepsText.match(/balance/gi) ||
                    converstionStepsText.match(/describe/gi) || converstionStepsText.match(/perfect/gi) ||
                    converstionStepsText.match(/example/gi) || converstionStepsText.match(/summer/gi) ||
                    converstionStepsText.match(/adventure/gi) || converstionStepsText.match(/coast/gi) ||
                    converstionStepsText.match(/concert/gi)

                ) {
                    await playScript("Okey. How do you think? The choice of destination impacts the experience of a perfect vacation.")
                    setSampleAns([` A recent TRAVELSAT report listed 5 Factors Influencing Tourist Destination and Tourism when it comes to tourists picking their travel destination. These are: Recommendations from friends & relatives Popularity as renowned destination Comprehensive information online Availability of special offers Closeness of the destination`])
                    conditionsDependsOnUserSpeech(8)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  What would your dream vacation be?And why?");
                    converstionSteps--;
                }





            } else if (converstionSteps == 11) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("  How do you think? The choice of destination impacts the experience of a perfect vacation.");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.  How do you think? The choice of destination impacts the experience of a perfect vacation.");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/big/gi) ||
                    converstionStepsText.match(/dream/gi) || converstionStepsText.match(/vacation/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/travel/gi) || converstionStepsText.match(/small/gi) ||
                    converstionStepsText.match(/financial/gi) || converstionStepsText.match(/Play/gi) ||
                    converstionStepsText.match(/would/gi) || converstionStepsText.match(/will/gi) ||
                    converstionStepsText.match(/reality/gi) || converstionStepsText.match(/make/gi) ||
                    converstionStepsText.match(/stress/gi) || converstionStepsText.match(/reliease/gi) ||
                    converstionStepsText.match(/destination/gi) || converstionStepsText.match(/impact/gi) ||
                    converstionStepsText.match(/help/gi) || converstionStepsText.match(/decision/gi) ||
                    converstionStepsText.match(/Discover/gi) || converstionStepsText.match(/money/gi) ||
                    converstionStepsText.match(/experience/gi) || converstionStepsText.match(/achieve/gi) ||
                    converstionStepsText.match(/recent/gi) || converstionStepsText.match(/TRAVEL/gi) ||
                    converstionStepsText.match(/relative/gi) || converstionStepsText.match(/Tourism/gi) ||
                    converstionStepsText.match(/Recommend/gi) || converstionStepsText.match(/summer/gi) ||
                    converstionStepsText.match(/adventure/gi) || converstionStepsText.match(/friend/gi) ||
                    converstionStepsText.match(/concert/gi) ||
                    converstionStepsText.match(/information/gi) || converstionStepsText.match(/Availability/gi) ||
                    converstionStepsText.match(/special/gi)


                ) {
                    await playScript("Okey. that was about section 3. Thanks.");
                    conditionsDependsOnUserSpeech(9)
                    await sendSpeakingtextToBackend(recordedText);
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  How do you think? The choice of destination impacts the experience of a perfect vacation.");
                    converstionSteps--;
                }


            }

        }

        console.log("converstionStepsText");
        console.log(converstionStepsText);
        converstionStepsText = "";



    }

    // test-12-Sections
    async function Test12Sec1() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            if (!userSpeakingTestNo) {
                await playScript(
                    "Hello and welcome to the IELTS speaking portion of the test. Jone is my name. & For this portion of the exam, I will serve as your examiner. We are carrying out this. Would you kindly tell me your entire name?"
                );
                setSampleAns([" Simply you can say your full name. As like my name is Jone dow.You can call me Jone"])
            } else {
                await playScript("Are you ready to take the test then?");
                setSampleAns([" Simply you can say the positive answer. As like Yes i am Ready to give the test. ", "2, Yes, I am reay.You can proceed the test"])

            }

        }

        converstionSteps++;
        if (converstionStepsText != '') {
            // if (converstionStepsText.length < 10) {
            //     await smallTalkError();
            // }

            // else if (converstionStepsText.match('repeat') || converstionStepsText.match(" understand")) {
            //     await playScript(
            //         "Ok , I am repeating.");
            //     converstionSteps--;
            // }

            // if (converstionSteps == 0) {
            //     await playScript(
            //         "Hello, And Welcome to this"
            //     );
            // }

            if (!userSpeakingTestNo) {
                if (converstionSteps == 1) {
                    await playScript(
                        "I'll start your exam now. What's your full name, please?"
                    );
                } else if (converstionSteps == 2) {
                    if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating, What's your full name, please?");
                        converstionSteps--;
                    }
                    else if (converstionStepsText.match("name") || converstionStepsText.match("call")) {
                        if (converstionStepsText.match("call")) {
                            await playScript(
                                "So, for this section. I'm going to ask some general questions. Where do you live?"
                            );
                            setSampleAns([" Simply you can say your area/ or place where you are live in.As like I am living in Dhaka,Bangladesh", "2, I live in kolkata,India"])
                            localStorage.setItem("SpeakingTestNo", testNo);
                            conditionsDependsOnUserSpeech(0)
                        } else {
                            await playScript("Alright. What can I call you?");
                            setSampleAns([" You can call me Mr. Jone dow"])
                            converstionSteps--;
                        }
                    }
                    else {
                        await playScript("Alright, what's your name?");
                        setSampleAns([" Hellow sir, I am Mr. Jone dow. You can call me Jone"])
                        converstionSteps--;
                    }

                } else if (converstionSteps == 3) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError("  Where do you live?");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating,  Where do you live?");
                        converstionSteps--;
                    }
                    else if (converstionStepsText.match(/live/gi) || converstionStepsText.match(/leaving/gi) ||
                        converstionStepsText.match(/in/gi) || converstionStepsText.match(/at/gi) ||
                        converstionStepsText.match(/from/gi) || converstionStepsText.match(/i am living/gi)) {
                        await playScript("Okay. Do you like math?");
                        setSampleAns([" Yes, i do because Math so much interesting subject for me", "2 , Basically i don't like math because math is so much complicated to me when i try to solve any kind of math problems"])
                        conditionsDependsOnUserSpeech(1)
                    } else {
                        await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Where do you live? ");
                        // setSampleAns([" Simply you can say your area/ or place where you are live in.As like I am living in Dhaka,Bangladesh", "2, I live in kolkata,India"])
                        converstionSteps--;
                    }

                }
            } else {
                if (converstionSteps == 1) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError("Are you ready to take the test then?");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating, Are you ready to take the test then?");
                        converstionSteps--;
                    }
                    else {
                        await playScript("Okay. Do you study or work?");
                        setSampleAns(["  I work. I’ve been working as a freelance web designer for two years now. ", "2, I’m working in a specialist medical field that deals with diseases related to aging. My employer is a large multinational company. ", "3,  I study. I’m still in high school, in my final year. So I’m studying for my final exams now. "])
                    }

                }
                if (converstionSteps == 2) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError("Do you study or work?");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating, Do you study or work?");
                        converstionSteps--;
                    }
                    else {
                        await playScript("So, do you like reading?");
                        setSampleAns([" Yes i love to read books", "2, Basically i real books when i get some spair time"]);
                        conditionsDependsOnUserSpeech(0)
                    }
                }
                if (converstionSteps == 3) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError(" do you like reading?");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating,  do you like reading?");
                        converstionSteps--;
                    }
                    else {
                        await playScript("Okay. Do you like math?");
                        setSampleAns([" Yes, i do because Math so much interesting subject for me", "2 , Basically i don't like math because math is so much complicated to me when i try to solve any kind of math problems"])
                        conditionsDependsOnUserSpeech(1)
                    }
                }

            }


            if (converstionSteps == 4) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Do you like math?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating, Do you like math?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/like/gi) ||
                    converstionStepsText.match(/Do/gi) || converstionStepsText.match(/Love/gi) ||
                    converstionStepsText.match(/math/gi) || converstionStepsText.match(/understand/gi) ||
                    converstionStepsText.match(/logic/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/rely/gi) || converstionStepsText.match(/challenge/gi)
                ) {
                    await playScript("Okay. Why is math so important?");
                    setSampleAns([" Mathematics is an essential subject that has a significant impact on our daily lives. It is a universal language that helps us understand and make sense of the world around us. Here are some reasons why math is important:1. **Problem-solving**: Math helps us develop critical thinking and problem-solving skills that are essential in our daily lives. It enables us to analyze and solve problems in various fields, including science, engineering, economics, and finance ¹.2. **Real-life skills**: Math is an integral part of our daily lives. We use it to perform real-life skills, such as grocery shopping, cooking, and tracking our finances. It helps us understand measurements, fractions, and percentages, which are essential in cooking and baking ¹. 3. **Career opportunities**: Math is a fundamental subject that is required in many professions, including engineering, finance, medicine, and technology. A strong foundation in math can help you succeed professionally and cognitively ¹.4. **Improved cognitive function**: Math is a great way to exercise your brain. It improves our cognitive skills over time and promotes healthy brain function ¹. 5. **Universal language**: Math is a universal language that has the same meaning across the globe. It allows us to work together towards new innovations and ideas ¹.In conclusion, math is an essential subject that has a significant impact on our daily lives. It helps us develop critical thinking and problem-solving skills, understand real-life skills, and opens up many career opportunities. It is a universal language that unites us and allows us to work together towards new innovations and ideas."]);

                    conditionsDependsOnUserSpeech(2)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you like math?");
                    converstionSteps--;
                }



            } else if (converstionSteps == 5) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Why is math so important?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating, Why is math so important?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/math/gi) || converstionStepsText.match(/because/gi) ||
                    converstionStepsText.match(/logic/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/develop/gi) || converstionStepsText.match(/understand/gi) ||
                    converstionStepsText.match(/important/gi) || converstionStepsText.match(/challenge/gi) ||
                    converstionStepsText.match(/fundamental/gi) || converstionStepsText.match(/educat/gi) ||
                    converstionStepsText.match(/every/gi) || converstionStepsText.match(/Information/gi) ||
                    converstionStepsText.match(/Communication/gi) || converstionStepsText.match(/Solving/gi) ||
                    converstionStepsText.match(/Help/gi) || converstionStepsText.match(/make/gi)
                ) {
                    await playScript("And is math easy for everyone?");
                    setSampleAns(["I don't think thats true. I had a friend who used to practice maths with her dad (who did a lot of maths as his job) for a few hours every week, yet she never went past the 5/20 grade (i dunno the equivalent in America). I never practiced ever, i didnt particularly like maths, and yet i always had pretty good grades. I think this Can apply to everybody.", "2, Maths is a subject that can be easy or difficult depending on how you approach it12. Maths is based on logical concepts and rules, not on the subjective opinion of an examiner2. To make maths easier, you need to have a strong foundation of concepts, practice problems, get guidance from teachers or mentors, and prepare a study schedule1. Maths can be challenging, but also rewarding if you master it"])
                    conditionsDependsOnUserSpeech(3)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Why is math so important?");
                    converstionSteps--;
                }



            } else if (converstionSteps == 6) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" is math easy for everyone?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,  is math easy for everyone?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/math/gi) || converstionStepsText.match(/because/gi) ||
                    converstionStepsText.match(/logic/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/every/gi) || converstionStepsText.match(/Information/gi) ||
                    converstionStepsText.match(/will/gi) || converstionStepsText.match(/would/gi) ||
                    converstionStepsText.match(/important/gi) || converstionStepsText.match(/easy/gi) ||
                    converstionStepsText.match(/Help/gi) || converstionStepsText.match(/make/gi)

                ) {
                    await playScript("Great!. Now I want to talk about smiling. What makes you smile?");
                    setSampleAns([" Smiling is triggered by the production of endorphins and neuronal signals in the brain12. The types of things that make most of us smile include3:*A positive relationship experience *A joyful or significant positive event*Something humorous or witty*Beauty and kindness  *A happy memory or anticipation of a positive event"])
                    conditionsDependsOnUserSpeech(4)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  is math easy for everyone?");
                    converstionSteps--;
                }


            } else if (converstionSteps == 7) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("What makes you smile?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,What makes you smile?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/make/gi) || converstionStepsText.match(/smile/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/do/gi) || converstionStepsText.match(/because/gi) ||
                    converstionStepsText.match(/logic/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/taking/gi) || converstionStepsText.match(/Something/gi) ||
                    converstionStepsText.match(/mirror/gi) || converstionStepsText.match(/control/gi) ||
                    converstionStepsText.match(/heart/gi) || converstionStepsText.match(/easy/gi) ||
                    converstionStepsText.match(/Help/gi) || converstionStepsText.match(/brings/gi)
                ) {
                    await playScript("How often do you smile?");
                    setSampleAns([" The average adult smiles 20 times a day, while children smile much more, about 400 times a day12."])
                    conditionsDependsOnUserSpeech(5)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Now I want to talk about smiling. What makes you smile?");
                    converstionSteps--;
                }


            } else if (converstionSteps == 8) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" How often do you smile?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating, How often do you smile?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/logic/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/make/gi) || converstionStepsText.match(/smile/gi) ||
                    converstionStepsText.match(/do/gi) || converstionStepsText.match(/because/gi) ||
                    converstionStepsText.match(/taking/gi) || converstionStepsText.match(/Something/gi) ||
                    converstionStepsText.match(/often/gi) || converstionStepsText.match(/specific/gi) ||
                    converstionStepsText.match(/heart/gi) || converstionStepsText.match(/frequency/gi) ||
                    converstionStepsText.match(/Help/gi) || converstionStepsText.match(/anywhere/gi) ||
                    converstionStepsText.match(/Time/gi) || converstionStepsText.match(/Everywhere/gi) ||
                    converstionStepsText.match(/generate/gi) || converstionStepsText.match(/every/gi)
                ) {
                    await playScript("Okay. When do people smile at each other?");
                    setSampleAns([" We smile for social reasons, to put people at ease, and to show more complex emotions1. To produce a genuine smile, we must genuinely feel like smiling2. Smiling at strangers is a small exercise in compassion2. When our brains feel happy, endorphins are produced and neuronal signals are transmitted to your facial muscles to trigger a smile3. Smiling at the misfortunes of others can be a sure way to make you feel better about yourself"])
                    conditionsDependsOnUserSpeech(6)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  How often do you smile?");
                    converstionSteps--;
                }




            } else if (converstionSteps == 9) {

                if (converstionStepsText.length < 10) {
                    await smallTalkError(" When do people smile at each other?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating, When do people smile at each other?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/logic/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/make/gi) || converstionStepsText.match(/smile/gi) ||
                    converstionStepsText.match(/do/gi) || converstionStepsText.match(/because/gi) ||
                    converstionStepsText.match(/people/gi) || converstionStepsText.match(/automatically/gi) ||
                    converstionStepsText.match(/mood/gi) || converstionStepsText.match(/reflect/gi) ||
                    converstionStepsText.match(/heart/gi) || converstionStepsText.match(/frequency/gi) ||
                    converstionStepsText.match(/Help/gi) || converstionStepsText.match(/anywhere/gi) ||
                    converstionStepsText.match(/Time/gi) || converstionStepsText.match(/Seeing/gi) ||
                    converstionStepsText.match(/generate/gi) || converstionStepsText.match(/every/gi) ||
                    converstionStepsText.match(/could/gi) || converstionStepsText.match(/would/gi) ||
                    converstionStepsText.match(/each/gi) || converstionStepsText.match(/nervous/gi) ||
                    converstionStepsText.match(/happy/gi) || converstionStepsText.match(/love/gi) ||
                    converstionStepsText.match(/excite/gi) || converstionStepsText.match(/sad/gi) ||
                    converstionStepsText.match(/sympathetic/gi) || converstionStepsText.match(/convey/gi) ||
                    converstionStepsText.match(/genuine/gi) || converstionStepsText.match(/attraction/gi)

                ) {
                    await playScript(" So, do you smile when you're taking a photo?");
                    setSampleAns([" If you want your picture taken, you should smile at the camera12345. However, you should also smile with your eyes and show some teeth for a more natural and attractive look135. You can find your best angle and hold your face level with the camera to avoid unflattering poses35. You can also say a word that ends in uh to relax your mouth and lips3. Some cameras have an auto-smile capture option that can take the picture when you smile4."])
                    conditionsDependsOnUserSpeech(7)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. When do people smile at each other?");
                    converstionSteps--;
                }

            } else if (converstionSteps == 10) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Do you smile when you're taking a photo?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating, Do you smile when you're taking a photo?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/logic/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/make/gi) || converstionStepsText.match(/smile/gi) ||
                    converstionStepsText.match(/do/gi) || converstionStepsText.match(/because/gi) ||
                    converstionStepsText.match(/will/gi) || converstionStepsText.match(/would/gi) ||
                    converstionStepsText.match(/mood/gi) || converstionStepsText.match(/reflect/gi) ||
                    converstionStepsText.match(/camera/gi) || converstionStepsText.match(/photo/gi) ||
                    converstionStepsText.match(/Help/gi) || converstionStepsText.match(/try/gi) ||
                    converstionStepsText.match(/Time/gi) || converstionStepsText.match(/look/gi) ||
                    converstionStepsText.match(/sympathetic/gi) || converstionStepsText.match(/convey/gi) ||
                    converstionStepsText.match(/genuine/gi) || converstionStepsText.match(/attraction/gi) ||
                    converstionStepsText.match(/generate/gi) || converstionStepsText.match(/every/gi)
                ) {
                    await playScript("Okay. That was about section 1. Thanks.");
                    conditionsDependsOnUserSpeech(8)
                    await sendSpeakingtextToBackend(recordedText);
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you smile when you're taking a photo?");
                    converstionSteps--;
                }



            }

        }

        console.log("converstionStepsText");
        console.log(converstionStepsText);
        converstionStepsText = "";
    }

    async function Test12Sec2() {

    }

    async function Test12Sec3() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            await playScript(
                " My name is Adrian. I will be your examiner for this part of the test, part three. Are you comfortable?"
            );
            setSampleAns(["Yes, I am comfortable you please proceed the test"])
        }
        converstionSteps++;
        if (converstionStepsText != '') {
            // if (converstionStepsText.length < 10) {
            //     await smallTalkError();
            // }
            // if (converstionStepsText.match('repeat') || converstionStepsText.match("don't understand")) {
            //     await playScript(
            //         "Ok , I am repeating.");
            //     converstionSteps--;
            // }
            // if (converstionSteps == 0) {
            //     await playScript(

            //         " My name is Adrian.& I will be your examiner for this part of the test  part three.  Are you confortable?"
            //     );
            // }
            if (converstionSteps == 1) {
                await playScript(
                    "Sorry.... Can you repeat that please"
                );
                setSampleAns([` You can simply repeat your previous answer`])
            } else if (converstionSteps == 2) {
                if (converstionStepsText.length < 5) {
                    await smallTalkError("Are you ready?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.Are you ready?");
                    converstionSteps--;
                }
                else {
                    await playScript("Let's talk about life-changing situations. What are the most common planned situations? When do people's lives change drastically?");
                    setSampleAns([` i think that the most common uh situations where people's lives change is as i said education career goals and marriage`])
                    conditionsDependsOnUserSpeech(0)
                }
            }
            else if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("What are the most common planned situations? When do people's lives change drastically?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.What are the most common planned situations? When do people's lives change drastically?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/live/gi) || converstionStepsText.match(/start/gi) ||
                    converstionStepsText.match(/living/gi) || converstionStepsText.match(/most/gi) ||
                    converstionStepsText.match(/common/gi) || converstionStepsText.match(/plan/gi) ||
                    converstionStepsText.match(/change/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/drastically/gi) || converstionStepsText.match(/situation/gi) ||
                    converstionStepsText.match(/belive/gi) || converstionStepsText.match(/education/gi) ||
                    converstionStepsText.match(/career/gi) || converstionStepsText.match(/goal/gi) ||
                    converstionStepsText.match(/marriage/gi) || converstionStepsText.match(/destinaion/gi)

                ) {
                    await playScript("So, is this common to all cultures?");
                    setSampleAns([`Yes because whether you are in tunisia brazil france or china you're most likely to make these decisions these personal decisions by yourself yes most school expectations and system school systems are the same in every country teenagers are expected to go to school go to university graduate and get a job and then get married `])
                    conditionsDependsOnUserSpeech(1)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. What are the most common planned situations? When do people's lives change drastically?");
                    converstionSteps--;
                }




            }
            else if (converstionSteps == 4) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Is this common to all cultures?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.Is this common to all cultures?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/common/gi) || converstionStepsText.match(/most/gi) ||
                    converstionStepsText.match(/plan/gi) || converstionStepsText.match(/culture/gi) ||
                    converstionStepsText.match(/all/gi) || converstionStepsText.match(/situation/gi) ||
                    converstionStepsText.match(/belive/gi) || converstionStepsText.match(/because/gi) ||
                    converstionStepsText.match(/like/gi) || converstionStepsText.match(/decision/gi) ||
                    converstionStepsText.match(/expect/gi) || converstionStepsText.match(/job/gi) ||
                    converstionStepsText.match(/goal/gi) || converstionStepsText.match(/marriage/gi)
                ) {
                    await playScript("Okey. What are unplanned circumstances. That can suddenly change a person's life?");
                    setSampleAns([`  there are certainly unplanned situations that people have no control over such as the loss of a loved one an accident a car accident for example or simply winning the lottery
                    `])
                    conditionsDependsOnUserSpeech(2)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Is this common to all cultures?");
                    converstionSteps--;
                }



            }
            else if (converstionSteps == 5) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("What are unplanned circumstances. That can suddenly change a person's life?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.What are unplanned circumstances. That can suddenly change a person's life?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/control/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/common/gi) || converstionStepsText.match(/most/gi) ||
                    converstionStepsText.match(/plan/gi) || converstionStepsText.match(/there/gi) ||
                    converstionStepsText.match(/as/gi) || converstionStepsText.match(/example/gi) ||
                    converstionStepsText.match(/belive/gi) || converstionStepsText.match(/because/gi) ||
                    converstionStepsText.match(/most/gi) || converstionStepsText.match(/will/gi) ||
                    converstionStepsText.match(/would/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/Moving/gi) || converstionStepsText.match(/travel/gi) ||
                    converstionStepsText.match(/circumstance/gi) || converstionStepsText.match(/suddenly/gi) ||
                    converstionStepsText.match(/change/gi) || converstionStepsText.match(/life/gi)
                ) {
                    await playScript("So. Are these always positive or negative?");
                    setSampleAns([` it can be both people get surprised by good news like expecting to have a child but in other cases it can be negative`])
                    conditionsDependsOnUserSpeech(3)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. What are unplanned circumstances. That can suddenly change a person's life?");
                    converstionSteps--;
                }


            } else if (converstionSteps == 6) {

                if (converstionStepsText.length < 10) {
                    await smallTalkError("Are these always positive or negative?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.Are these always positive or negative?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/common/gi) || converstionStepsText.match(/because/gi) ||
                    converstionStepsText.match(/most/gi) || converstionStepsText.match(/will/gi) ||
                    converstionStepsText.match(/would/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/plan/gi) || converstionStepsText.match(/always/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/example/gi) ||
                    converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                    converstionStepsText.match(/suddenly/gi) || converstionStepsText.match(/travel/gi) ||
                    converstionStepsText.match(/circumstance/gi) || converstionStepsText.match(/suddenly/gi) ||
                    converstionStepsText.match(/both/gi) || converstionStepsText.match(/can/gi) ||
                    converstionStepsText.match(/might/gi) || converstionStepsText.match(/could/gi) ||
                    converstionStepsText.match(/case/gi) || converstionStepsText.match(/expect/gi)
                ) {
                    await playScript("So, what is good advice for people to keep in mind? If they feel that their lives have turned for the worse");
                    setSampleAns([` i think the most important notion to remember is that life changes there are ups and downs and it is important to remember the good times when the going is rough Serious stress, such as major relationship, financial or work-related issues. Depression or anxiety, especially serious depression, depression that lasts a long time or anxiety with 
                    `])
                    conditionsDependsOnUserSpeech(4)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Are these always positive or negative?");
                    converstionSteps--;
                }


            } else if (converstionSteps == 7) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("what is good advice for people to keep in mind? If they feel that their lives have turned for the worse");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.what is good advice for people to keep in mind? If they feel that their lives have turned for the worse");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/good/gi) || converstionStepsText.match(/because/gi) ||
                    converstionStepsText.match(/most/gi) || converstionStepsText.match(/will/gi) ||
                    converstionStepsText.match(/would/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/advice/gi) || converstionStepsText.match(/keep/gi) ||
                    converstionStepsText.match(/Stay/gi) || converstionStepsText.match(/focus/gi) ||
                    converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                    converstionStepsText.match(/flexible/gi) || converstionStepsText.match(/bad/gi) ||
                    converstionStepsText.match(/live/gi) || converstionStepsText.match(/suddenly/gi) ||
                    converstionStepsText.match(/important/gi) || converstionStepsText.match(/most/gi) ||
                    converstionStepsText.match(/remember/gi) || converstionStepsText.match(/down/gi) ||
                    converstionStepsText.match(/stress/gi) || converstionStepsText.match(/financial/gi) ||
                    converstionStepsText.match(/anxiety/gi) || converstionStepsText.match(/especially/gi) ||
                    converstionStepsText.match(/seriou/gi) || converstionStepsText.match(/panic/gi)

                ) {
                    await playScript("Can you elaborate on that?")
                    setSampleAns([` :yes/sure/whynot/ no    if someone loses a loved one say a father it's saddening but it is also good to remember the good times that they shared with their father so that he or she would live on um his memory and children
                    `])
                    conditionsDependsOnUserSpeech(5)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. what is good advice for people to keep in mind? If they feel that their lives have turned for the worse");
                    converstionSteps--;
                }




            } else if (converstionSteps == 8) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Can you elaborate give some details in that?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.Can you elaborate give some details in that?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/good/gi) || converstionStepsText.match(/because/gi) ||
                    converstionStepsText.match(/most/gi) || converstionStepsText.match(/will/gi) ||
                    converstionStepsText.match(/would/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/sure/gi) || converstionStepsText.match(/keep/gi) ||
                    converstionStepsText.match(/Can/gi) || converstionStepsText.match(/people/gi) ||
                    converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                    converstionStepsText.match(/Can/gi) || converstionStepsText.match(/bad/gi) ||
                    converstionStepsText.match(/live/gi) || converstionStepsText.match(/live/gi) ||
                    converstionStepsText.match(/important/gi) || converstionStepsText.match(/lose/gi) ||
                    converstionStepsText.match(/time/gi) || converstionStepsText.match(/share/gi)
                ) {
                    await playScript(
                        "Okey. Let's talk about making big decisions. Which steps are important to consider? When making big decisions in order to reach the best possible outcomes")
                    setSampleAns([` i think that doing researching as much as possible is a good idea or opting for professional advice that's what i did when i when i was looking to which university i should go to i researched as much as possible before making up my mind `])
                    conditionsDependsOnUserSpeech(6)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Can you elaborate give some details in that?");
                    converstionSteps--;
                }



            }
            else if (converstionSteps == 9) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Which steps are important to consider? When making big decisions in order to reach the best possible outcomes?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.Which steps are important to consider? When making big decisions in order to reach the best possible outcomes?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/Taking/gi) || converstionStepsText.match(/using/gi) ||
                    converstionStepsText.match(/avoiding/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/good/gi) || converstionStepsText.match(/because/gi) ||
                    converstionStepsText.match(/most/gi) || converstionStepsText.match(/will/gi) ||
                    converstionStepsText.match(/would/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/step/gi) || converstionStepsText.match(/keep/gi) ||
                    converstionStepsText.match(/mind/gi) || converstionStepsText.match(/people/gi) ||
                    converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                    converstionStepsText.match(/Can/gi) || converstionStepsText.match(/important/gi) ||
                    converstionStepsText.match(/consider/gi) || converstionStepsText.match(/making/gi) ||
                    converstionStepsText.match(/big/gi) || converstionStepsText.match(/reach/gi) ||
                    converstionStepsText.match(/possible/gi) || converstionStepsText.match(/outcome/gi) ||
                    converstionStepsText.match(/doing/gi) || converstionStepsText.match(/research/gi) ||
                    converstionStepsText.match(/opting/gi) || converstionStepsText.match(/advice/gi) ||
                    converstionStepsText.match(/possible/gi) || converstionStepsText.match(/outcome/gi)
                ) {
                    await playScript("Okey. How can people remember to take these important steps?")
                    setSampleAns([`  a good way to do this to remember is to write down the decision-making process also keeping a cool head is important`])
                    conditionsDependsOnUserSpeech(7)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Which steps are important to consider? When making big decisions in order to reach the best possible outcomes?");
                    converstionSteps--;
                }

            }
            else if (converstionSteps == 10) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("How can people remember to take these important steps?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.How can people remember to take these important steps?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/Taking/gi) || converstionStepsText.match(/using/gi) ||
                    converstionStepsText.match(/avoiding/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/good/gi) || converstionStepsText.match(/because/gi) ||
                    converstionStepsText.match(/most/gi) || converstionStepsText.match(/remember/gi) ||
                    converstionStepsText.match(/would/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/step/gi) || converstionStepsText.match(/keep/gi) ||
                    converstionStepsText.match(/mind/gi) || converstionStepsText.match(/people/gi) ||
                    converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                    converstionStepsText.match(/Can/gi) || converstionStepsText.match(/important/gi) ||
                    converstionStepsText.match(/step/gi) || converstionStepsText.match(/making/gi) ||
                    converstionStepsText.match(/main/gi) || converstionStepsText.match(/take/gi) ||
                    converstionStepsText.match(/possible/gi) || converstionStepsText.match(/outcome/gi) ||
                    converstionStepsText.match(/doing/gi) || converstionStepsText.match(/way/gi) ||
                    converstionStepsText.match(/important/gi) || converstionStepsText.match(/process/gi)

                ) {
                    await playScript("Okey. What social support is available to help make big decisions?");
                    setSampleAns([`  I mean society can give a helping hand to people who are looking for help. There are tons of online reviews that can guide people. There is also professional advice and I thought the advice of a career counselor when I wanted to decide which university I should go to. `])
                    conditionsDependsOnUserSpeech(8)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  How can people remember to take these important steps?");
                    converstionSteps--;
                }


            }
            else if (converstionSteps == 11) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("What social support is available to help make big decisions?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.What social support is available to help make big decisions?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/Taking/gi) || converstionStepsText.match(/using/gi) ||
                    converstionStepsText.match(/avoiding/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/social/gi) || converstionStepsText.match(/because/gi) ||
                    converstionStepsText.match(/most/gi) || converstionStepsText.match(/remember/gi) ||
                    converstionStepsText.match(/would/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/step/gi) || converstionStepsText.match(/keep/gi) ||
                    converstionStepsText.match(/support/gi) || converstionStepsText.match(/available/gi) ||
                    converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                    converstionStepsText.match(/Can/gi) || converstionStepsText.match(/important/gi) ||
                    converstionStepsText.match(/step/gi) || converstionStepsText.match(/making/gi) ||
                    converstionStepsText.match(/decision/gi) || converstionStepsText.match(/take/gi) ||
                    converstionStepsText.match(/possible/gi) || converstionStepsText.match(/outcome/gi) ||
                    converstionStepsText.match(/make/gi) || converstionStepsText.match(/help/gi) ||
                    converstionStepsText.match(/important/gi) || converstionStepsText.match(/looking/gi) ||
                    converstionStepsText.match(/career /gi)
                ) {
                    await playScript("Okey. Where can people search for these?");
                    setSampleAns([`  they can find in governmental offices or they can simply find them online`])
                    conditionsDependsOnUserSpeech(9)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  What social support is available to help make big decisions?");
                    converstionSteps--;
                }


            } else if (converstionSteps == 12) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Where can people search for these?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Where can people search for these?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/people/gi) || converstionStepsText.match(/search/gi) ||
                    converstionStepsText.match(/avoiding/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/social/gi) || converstionStepsText.match(/because/gi) ||
                    converstionStepsText.match(/most/gi) || converstionStepsText.match(/will/gi) ||
                    converstionStepsText.match(/would/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/step/gi) || converstionStepsText.match(/keep/gi) ||
                    converstionStepsText.match(/support/gi) || converstionStepsText.match(/office/gi) ||
                    converstionStepsText.match(/get/gi) || converstionStepsText.match(/online/gi) ||
                    converstionStepsText.match(/Can/gi) || converstionStepsText.match(/important/gi) ||
                    converstionStepsText.match(/step/gi) || converstionStepsText.match(/making/gi) ||
                    converstionStepsText.match(/decision/gi) || converstionStepsText.match(/make/gi) ||
                    converstionStepsText.match(/possible/gi) || converstionStepsText.match(/outcome/gi) ||
                    converstionStepsText.match(/make/gi) || converstionStepsText.match(/find/gi) ||
                    converstionStepsText.match(/important/gi)
                ) {
                    await playScript("Okey. That was about section 3. Thanks.");
                    conditionsDependsOnUserSpeech(10)
                    await sendSpeakingtextToBackend(recordedText);
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Where can people search for these?");
                    converstionSteps--;
                }



            }

        }

        console.log("converstionStepsText");
        console.log(converstionStepsText);
        converstionStepsText = "";



    }


    // test-13-Sections

    async function Test13Sec1() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            if (!userSpeakingTestNo) {
                await playScript(
                    "Hello and welcome to the IELTS speaking portion of the test. Jone is my name. & For this portion of the exam, I will serve as your examiner. We are carrying out this. Would you kindly tell me your entire name?"
                );
                setSampleAns([" Simply you can say your full name. As like my name is Jone dow.You can call me Jone"])
            } else {
                await playScript("Are you ready to take the test then?");
                setSampleAns([" Simply you can say the positive answer. As like Yes i am Ready to give the test. ", "2, Yes, I am reay.You can proceed the test"])
            }

        }

        converstionSteps++;
        if (converstionStepsText != '') {

            if (!userSpeakingTestNo) {
                if (converstionSteps == 1) {
                    await playScript(
                        "I'll start your exam now. What's your full name, please?"
                    );
                    setSampleAns(["You an simply tell your full name . As like I am Mr. JOne Dow . You can call me jone."])
                } else if (converstionSteps == 2) {
                    if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating.  What's your full name, please?");
                        converstionSteps--;
                    }
                    else if (converstionStepsText.match("name") || converstionStepsText.match("call")) {
                        if (converstionStepsText.match("call")) {
                            await playScript(
                                "So, for this section. I'm going to ask some general questions. Where do you live?"
                            );
                            setSampleAns([" Simply you can say your area/ or place where you are live in.As like I am living in Dhaka,Bangladesh", "2, I live in kolkata,India"])
                            localStorage.setItem("SpeakingTestNo", testNo);
                            conditionsDependsOnUserSpeech(0)
                        } else {
                            await playScript("Alright. What can I call you?");
                            setSampleAns(["You can call me Jone or you simply tell your nickname."])
                            converstionSteps--;
                        }
                    }
                    else {
                        await playScript("Alright, what's your name?");
                        setSampleAns(["You an simply tell your full name . As like I am Mr. JOne Dow . You can call me jone."])
                        converstionSteps--;
                    }

                } else if (converstionSteps == 3) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError(" Where do you live? ");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating. Where do you live? ");
                        converstionSteps--;
                    }
                    else if (converstionStepsText.match(/live/gi) || converstionStepsText.match(/leaving/gi) ||
                        converstionStepsText.match(/in/gi) || converstionStepsText.match(/at/gi) ||
                        converstionStepsText.match(/from/gi) || converstionStepsText.match(/i am living/gi)) {
                        await playScript("Okey. Lets talk about city populations. What is the current population of your city");
                        setSampleAns(["Houston has a 2024 population of 2,305,889. It is also the county seat of Harris County. Houston is currently growing at a rate of 0.07% annually and its population has increased by 0.26% since the most recent census, which recorded a population of 2,299,867 in 2020."]);
                        conditionsDependsOnUserSpeech(1)
                    } else {
                        await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Where do you live? ");
                        converstionSteps--;
                    }

                }
            } else {
                if (converstionSteps == 1) {
                    await playScript("Okey. Are you happy today?");
                    setSampleAns([" Yes, sir i am really happly today. thanks for asking."])
                }
                if (converstionSteps == 2) {
                    if (converstionStepsText.length < 5) {
                        await smallTalkError(" Are you ready? ");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating. Are you ready? ");
                        converstionSteps--;
                    }
                    else {
                        await playScript("Okey. Thanks , What do you do for fun?");
                        setSampleAns([` Some possible answers for what you do for fun you an say like:
                    Arts and crafts, Board games and puzzles,Collecting (coins, antiques, gems, etc.), Cooking`])
                        conditionsDependsOnUserSpeech(0)
                    }
                }
                if (converstionSteps == 3) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError(" What do you do for fun? ");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating. What do you do for fun? ");
                        converstionSteps--;
                    }
                    else {
                        await playScript("Okey. Lets talk about city populations. What is the current population of your city");
                        setSampleAns(["Houston has a 2024 population of 2,305,889. It is also the county seat of Harris County. Houston is currently growing at a rate of 0.07% annually and its population has increased by 0.26% since the most recent census, which recorded a population of 2,299,867 in 2020."])
                        conditionsDependsOnUserSpeech(1)
                    }
                }
            }

            if (converstionSteps == 4) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Lets talk about city populations. What is the current population of your city ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.Lets talk about city populations. What is the current population of your city ");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/city/gi) || converstionStepsText.match(/population/gi) ||
                    converstionStepsText.match(/current/gi) || converstionStepsText.match(/county/gi) ||
                    converstionStepsText.match(/from/gi) || converstionStepsText.match(/living/gi) ||
                    converstionStepsText.match(/seat/gi) || converstionStepsText.match(/since/gi) ||
                    converstionStepsText.match(/recent/gi) || converstionStepsText.match(/census/gi) ||
                    converstionStepsText.match(/in/gi) || converstionStepsText.match(/live/gi)

                ) {
                    await playScript("Okey. How has the city's population changed over the past decade?");
                    setSampleAns([`The United Nations cites two intertwined reasons for urbanization: an overall population increase that’s unevenly distributed by region, and an upward trend in people flocking to cities. Since 1950, the world’s urban populationhas risen almost six-fold, from 751 million to 4.2 billion in 2018.`])
                    conditionsDependsOnUserSpeech(2)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Lets talk about city populations. What is the current population of your city");
                    converstionSteps--;
                }


            } else if (converstionSteps == 5) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("How has the city's population changed over the past decade? ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. How has the city's population changed over the past decade? ");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/live/gi) || converstionStepsText.match(/city/gi) ||
                    converstionStepsText.match(/population/gi) || converstionStepsText.match(/decade/gi) ||
                    converstionStepsText.match(/intertwined/gi) ||

                    converstionStepsText.match(/urbanization/gi) || converstionStepsText.match(/living/gi) ||
                    converstionStepsText.match(/overall/gi) || converstionStepsText.match(/since/gi) ||
                    converstionStepsText.match(/unevenly/gi) || converstionStepsText.match(/distributed/gi) ||
                    converstionStepsText.match(/region/gi) || converstionStepsText.match(/flocking/gi) ||
                    converstionStepsText.match(/almost/gi) || converstionStepsText.match(/six-fold/gi) ||
                    converstionStepsText.match(/billion/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/million/gi) || converstionStepsText.match(/do/gi)
                ) {
                    await playScript("Okey. What is the projected population growth or decline for the next 10 years?");
                    setSampleAns([` The latest UN projections suggest that the world’s population could grow to around 8.5 billion in 2030 and 9.7 billion in 2050, before reaching a peak of around 10.4 billion people during the 2080s. The population is expected to remain at that level until 2100.
                    `])
                    conditionsDependsOnUserSpeech(3)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. How has the city's population changed over the past decade?");
                    converstionSteps--;
                }


            } else if (converstionSteps == 6) {

                if (converstionStepsText.length < 10) {
                    await smallTalkError(" What is the projected population growth or decline for the next 10 years?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.  What is the projected population growth or decline for the next 10 years?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/project/gi) || converstionStepsText.match(/population/gi) ||
                    converstionStepsText.match(/decline/gi) || converstionStepsText.match(/next/gi) ||
                    converstionStepsText.match(/year/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/live/gi) || converstionStepsText.match(/latest/gi) ||

                    converstionStepsText.match(/cost/gi) || converstionStepsText.match(/suggest/gi) ||
                    converstionStepsText.match(/grow/gi) || converstionStepsText.match(/living/gi) ||
                    converstionStepsText.match(/billion/gi) || converstionStepsText.match(/around/gi) ||

                    converstionStepsText.match(/pollution/gi) || converstionStepsText.match(/remain/gi) ||
                    converstionStepsText.match(/level/gi) || converstionStepsText.match(/concerns/gi) ||
                    converstionStepsText.match(/until/gi)
                ) {
                    await playScript("Okey. What is the population density of the city?");
                    setSampleAns([` The area that Mexico City occupies comes to a total of 1,485 square kilometers (573 square miles). In combination with the growing number of residents, the population density was last measured at 6,000 people living per square kilometer (16,000 residents per square mile)`])
                    conditionsDependsOnUserSpeech(4)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  What is the projected population growth or decline for the next 10 years?");
                    converstionSteps--;
                }


            } else if (converstionSteps == 7) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("What is the population density of the city?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. What is the population density of the city? ");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/population/gi) || converstionStepsText.match(/city/gi) ||
                    converstionStepsText.match(/area/gi) || converstionStepsText.match(/Mexico/gi) ||
                    converstionStepsText.match(/occupies/gi) || converstionStepsText.match(/total/gi) ||
                    converstionStepsText.match(/kilometer/gi) || converstionStepsText.match(/square/gi) ||

                    converstionStepsText.match(/mile/gi) || converstionStepsText.match(/combination/gi) ||
                    converstionStepsText.match(/number/gi) || converstionStepsText.match(/residents/gi) ||
                    converstionStepsText.match(/measur/gi) || converstionStepsText.match(/resident/gi)
                ) {
                    await playScript("Okey.How does the city's population compare to other cities in the same region or country?");
                    setSampleAns([` Hong Kong: With a population of approximately 7.08 million, Hong Kong is a bustling metropolis known for its vibrant culture and impressive skyline 1.
                    Wichita, United States: Wichita has a population of around 0.38 million and is known for its aviation industry 1.
                    San Jose, CA, United States: San Jose has about 0.98 million residents and is a major tech hub in Silicon Valley 1.
                    Beijing, China: The capital city of China, Beijing, boasts a population of 21.5 million 1.
                    Tokyo, Japan: Tokyo, one of the most populous cities globally, has around 13.18 million inhabitants 1.
                    London, United Kingdom: London’s population stands at 9.78 million, making it a diverse and dynamic city 1.
                    Moscow, Russia: Moscow is home to approximately 12.6 million people 1.
                    Panama City, Panama: With a population of 1.8 million, Panama City is a vibrant hub in Central America 1
                    `])
                    conditionsDependsOnUserSpeech(5)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  What is the population density of the city?");
                    converstionSteps--;
                }


            } else if (converstionSteps == 8) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("How does the city's population compare to other cities in the same region or country?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.How does the city's population compare to other cities in the same region or country? ");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/population/gi) || converstionStepsText.match(/other/gi) ||
                    converstionStepsText.match(/cit/gi) || converstionStepsText.match(/same/gi) ||
                    converstionStepsText.match(/region/gi) || converstionStepsText.match(/country/gi) ||
                    converstionStepsText.match(/approximate/gi) || converstionStepsText.match(/million/gi) ||
                    converstionStepsText.match(/billion/gi) || converstionStepsText.match(/bustling/gi) ||
                    converstionStepsText.match(/vibrant/gi) || converstionStepsText.match(/culture/gi) ||
                    converstionStepsText.match(/impressive/gi) || converstionStepsText.match(/skyline/gi) ||

                    converstionStepsText.match(/Central/gi) || converstionStepsText.match(/dynamic/gi) ||
                    converstionStepsText.match(/comfort/gi) || converstionStepsText.match(/visual/gi) ||
                    converstionStepsText.match(/effect/gi)

                ) {
                    await playScript("Okey. What are the primary factors contributing to population growth or decline in the city?");
                    setSampleAns([` Correct understanding of the relationship between population growth 
                    and environmental degradation, and of the factors that lead to 
                    imbalance in developing countries, is essential to the development 
                    of an effective policy to reduce the impact of the 'population explosion' on the environment. This chapter presents a case study of 
                    the factors that contribute to population growth in Bangladesh, as 
                    well as some specific suggestions for tailoring policies to establish 
                    equilibrium. 
                    Bangladesh is a deltaic country with an area of nearly 145 000 
                    square kilometres (roughly the size of Wisconsin) with 230 rivers, 
                    tributaries and rivulets. Its neighbour to the north, west and east is 
                    India, while the south is delineated by the Bay of Bengal. The country 
                    also shares a small border with Burma. Bangladesh's total population has increased from 42 million in 1947, to nearly 90 million
                    today, and some projections suggest that the population will double again by the year 2025. 1 According to a 1994 estimate, the 
                    population density is roughly 800 people per square kilometer. 2 
                    Despite a decline in the fertility rate since the early 1990s, Bangladesh's population growth rate still exceeds its rate of economic 
                    growth. Meeting basic needs is difficult for the majority of the 
                    population, which struggles to eke out a subsistence standard of 
                    living of two balanced meals per day and basic shelter. Under these 
                    conditions, protecting the environment remains a low priority. The 
                    lack of fuel for cooking leads to indiscriminate felling of trees for 
                    firewood, while the lack of availability of adequate food leads to 
                    overuse of fertilizers and other unsound agricultural practices. `])
                    conditionsDependsOnUserSpeech(6)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.How does the city's population compare to other cities in the same region or country?");
                    converstionSteps--;
                }



            } else if (converstionSteps == 9) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("What are the primary factors contributing to population growth or decline in the city?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.What are the primary factors contributing to population growth or decline in the city? ");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/primary/gi) || converstionStepsText.match(/factors/gi) ||
                    converstionStepsText.match(/contributing/gi) || converstionStepsText.match(/population/gi) ||
                    converstionStepsText.match(/growth/gi) ||
                    converstionStepsText.match(/decline/gi) || converstionStepsText.match(/city/gi) ||
                    converstionStepsText.match(/environmental/gi) ||
                    converstionStepsText.match(/imbalance/gi) || converstionStepsText.match(/develop/gi) ||
                    converstionStepsText.match(/factor/gi) || converstionStepsText.match(/deltaic/gi) ||
                    converstionStepsText.match(/equilibrium/gi) || converstionStepsText.match(/According/gi) ||
                    converstionStepsText.match(/economic/gi) || converstionStepsText.match(/Despite/gi) ||

                    converstionStepsText.match(/condition/gi) || converstionStepsText.match(/visual/gi) ||
                    converstionStepsText.match(/effect/gi) ||
                    converstionStepsText.match(/majority/gi)
                ) {
                    await playScript("How does the city's birth rate compare to its death rate?");
                    setSampleAns([` Comparing the birth rate and death rate of a given area provides insight into whether that population is increasing or decreasing. When the birth rate is larger than the death rate, we know that more people are being “added” to the area than are being “taken away”, meaning the population is growing.
                    `])
                    conditionsDependsOnUserSpeech(7)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. What are the primary factors contributing to population growth or decline in the city?");
                    converstionSteps--;
                }



            } else if (converstionSteps == 10) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("How does the city's birth rate compare to its death rate?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.How does the city's birth rate compare to its death rate?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/birth/gi) || converstionStepsText.match(/does/gi) ||
                    converstionStepsText.match(/compare/gi) || converstionStepsText.match(/city/gi) ||
                    converstionStepsText.match(/death/gi) || converstionStepsText.match(/rate/gi) ||
                    converstionStepsText.match(/Compar/gi) || converstionStepsText.match(/provide/gi) ||
                    converstionStepsText.match(/give/gi) || converstionStepsText.match(/insight/gi) ||
                    converstionStepsText.match(/whether/gi) || converstionStepsText.match(/population/gi) ||
                    converstionStepsText.match(/increas/gi) || converstionStepsText.match(/decreas/gi) ||
                    converstionStepsText.match(/larger/gi) || converstionStepsText.match(/being/gi) ||

                    converstionStepsText.match(/“taken/gi) || converstionStepsText.match(/away/gi) ||
                    converstionStepsText.match(/effect/gi) ||
                    converstionStepsText.match(/Instead/gi) || converstionStepsText.match(/stay/gi) ||
                    converstionStepsText.match(/individual/gi) || converstionStepsText.match(/mean/gi)
                ) {
                    await playScript("Okey. Which public holiday do you like the best?");
                    setSampleAns([`Income: Income levels significantly impact people’s quality of life. Higher income allows access to better housing, education, healthcare, and other essential services. In cities, income disparities can be stark, with some neighborhoods having higher average incomes than others1.
                    Education: Education is a key determinant of socioeconomic status. Areas with better educational institutions tend to attract higher-income residents. Conversely, neighborhoods with limited educational opportunities may face economic challenges. Educational attainment affects employment prospects and overall well-being.
                    Occupational Prestige: Certain professions are considered more prestigious than others. Occupations in fields like medicine, law, or technology often lead to higher incomes and social status. In contrast, low-wage jobs may be prevalent in specific neighborhoods.
                    Poverty: Poverty rates differ across city neighborhoods. High-poverty areas face challenges related to housing instability, food insecurity, and limited access to healthcare. Addressing poverty requires targeted policies and community support.
                    Access to Services: Socioeconomic factors influence access to essential services such as`])
                    conditionsDependsOnUserSpeech(8)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.How does the city's birth rate compare to its death rate?");
                    converstionSteps--;
                }



            } else if (converstionSteps == 11) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Which public holiday do you like the best?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.  Which public holiday do you like the best?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/public/gi) || converstionStepsText.match(/holiday/gi) ||
                    converstionStepsText.match(/best/gi) ||
                    converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                    converstionStepsText.match(/Income/gi) || converstionStepsText.match(/Education/gi) ||
                    converstionStepsText.match(/Occupational/gi) || converstionStepsText.match(/Prestige/gi) ||

                    converstionStepsText.match(/status/gi) || converstionStepsText.match(/contrast/gi) ||
                    converstionStepsText.match(/access/gi) || converstionStepsText.match(/requires/gi) ||
                    converstionStepsText.match(/Alternatively/gi) || converstionStepsText.match(/service/gi)
                ) {
                    await playScript("Okey. What are the key challenges and opportunities related to managing the city's population growth or decline?");
                    setSampleAns([`Population growth is the increase in the number of people in a population or dispersed group. Actual global human population growth amounts to around 83 million annually, or 1.1% per year. The global population has grown from 1 billion in 1800 to 7.9 billion in 2020. The UN projected population to keep growing, and estimates have put the total population at 8.6 billion by mid-2030, 9.8 billion by mid-2050 and 11.2 billion by 2100. However, some academics outside the UN have increasingly developed human population models that account for additional downward pressures on population growth; in such a scenario population would peak before 2100. Others have challenged many recent population projections as having underestimated population growth. `])
                    conditionsDependsOnUserSpeech(9)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Which public holiday do you like the best?");
                    converstionSteps--;
                }
            }

            else if (converstionSteps == 12) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("What are the key challenges and opportunities related to managing the city's population growth or decline?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.What are the key challenges and opportunities related to managing the city's population growth or decline?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/challenges/gi) || converstionStepsText.match(/opportunities/gi) ||
                    converstionStepsText.match(/decline/gi) || converstionStepsText.match(/related /gi) ||
                    converstionStepsText.match(/managing/gi) || converstionStepsText.match(/population/gi) ||
                    converstionStepsText.match(/growth/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/global/gi) || converstionStepsText.match(/human/gi) ||
                    converstionStepsText.match(/group/gi) || converstionStepsText.match(/billion/gi) ||

                    converstionStepsText.match(/However/gi) || converstionStepsText.match(/additional/gi) ||
                    converstionStepsText.match(/challenge/gi) || converstionStepsText.match(/underestimate/gi) ||
                    converstionStepsText.match(/growth/gi) || converstionStepsText.match(/effect/gi)
                ) {
                    await playScript("Okey. That was about section 1. Thanks.");
                    conditionsDependsOnUserSpeech(10)
                    await sendSpeakingtextToBackend(recordedText);
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. What are the key challenges and opportunities related to managing the city's population growth or decline?");
                    converstionSteps--;
                }


            }

        }

        console.log("converstionStepsText");
        console.log(converstionStepsText);
        converstionStepsText = "";
    }


    async function Test13Sec3() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            await playScript(
                "Welcome to the third section. So, are you ready ?"
            );
            setSampleAns([" Simply you can say the positive answer. As like Yes i am Ready to give the test. ", "2, Yes, I am reay.You can proceed the test"])
        }
        converstionSteps++;
        if (converstionStepsText != '') {
            if (converstionSteps == 1) {
                await playScript(
                    "Let me begin your test. Can you tell me your full name again?"
                );
                setSampleAns([" Simply you can say your full name. As like my name is Jone dow. You can call me Jone"])
            }

            else if (converstionSteps == 2) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" are you ready ?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am Repeatin , are you ready ?");
                    converstionSteps--;
                }
                else {
                    await playScript("So,are you ever late for anything?");
                    setSampleAns([" No, I am a very punctual person. I value time and am never late for anything, unless it is due to some unavoidable and unforeseen circumstances."]);
                    conditionsDependsOnUserSpeech(0)
                }
            }
            else if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("are you ever late for anything?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am Repeatin ,are you ever late for anything?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/actually/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/basically/gi) || converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/did/gi) || converstionStepsText.match(/ever/gi) ||
                    converstionStepsText.match(/many/gi) || converstionStepsText.match(/few/gi) ||
                    converstionStepsText.match(/time/gi) || converstionStepsText.match(/anything/gi) ||
                    converstionStepsText.match(/circumstances/gi) || converstionStepsText.match(/unavoidable/gi) ||
                    converstionStepsText.match(/some/gi)
                ) {
                    await playScript("Okay. What excuses do you use when you are late?");
                    setSampleAns([" I am usually not late for any meetings or appointments. However, if at all I am getting late due to anunavoidable circumstance, then I inform the person I am meeting, beforehand. I don’t make excuses."]);
                    conditionsDependsOnUserSpeech(1)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. are you ever late for anything?");
                    converstionSteps--;
                }
            }
            else if (converstionSteps == 4) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("What excuses do you use when you are late?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am Repeatin , What excuses do you use when you are late?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/do/gi) || converstionStepsText.match(/can/gi) ||
                    converstionStepsText.match(/could/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/excuses/gi) || converstionStepsText.match(/late/gi) ||
                    converstionStepsText.match(/usually/gi) || converstionStepsText.match(/yes/gi) ||
                    converstionStepsText.match(/no/gi) || converstionStepsText.match(/any/gi) ||
                    converstionStepsText.match(/many/gi) || converstionStepsText.match(/due/gi) ||
                    converstionStepsText.match(/reach/gi) || converstionStepsText.match(/circumstance/gi) ||
                    converstionStepsText.match(/new/gi)
                ) {
                    await playScript("So, what excuses do people have when they are late?");
                    setSampleAns([" People give excuses like car or bike breakdown or that they were stuck in traffic, when they are late"])
                    conditionsDependsOnUserSpeech(2)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. What excuses do you use when you are late?");
                    converstionSteps--;
                }
            }


            else if (converstionSteps == 5) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("what excuses do people have when they are late?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am Repeatin , what excuses do people have when they are late?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/do/gi) || converstionStepsText.match(/can/gi) ||
                    converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                    converstionStepsText.match(/people/gi) || converstionStepsText.match(/could/gi) ||
                    converstionStepsText.match(/good/gi) || converstionStepsText.match(/new/gi) ||
                    converstionStepsText.match(/excuses/gi) || converstionStepsText.match(/when/gi) ||
                    converstionStepsText.match(/example/gi) || converstionStepsText.match(/late/gi) ||
                    converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                    converstionStepsText.match(/breakdown/gi) || converstionStepsText.match(/stuck/gi) ||
                    converstionStepsText.match(/traffic/gi) || converstionStepsText.match(/they/gi) ||
                    converstionStepsText.match(/good/gi)
                ) {
                    await playScript("Okay. Are you good at organizing time?");
                    setSampleAns(["Yes, I am good at organizing time. I set up reminders for important events and meetings. I am never late for an appointment."]);
                    conditionsDependsOnUserSpeech(3)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. what excuses do people have when they are late?");
                    converstionSteps--;
                }
            }

            else if (converstionSteps == 6) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Are you good at organizing time?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am Repeatin , Are you good at organizing time?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/actually/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/kind/gi) || converstionStepsText.match(/good/gi) ||
                    converstionStepsText.match(/organizing/gi) || converstionStepsText.match(/time/gi) ||
                    converstionStepsText.match(/good/gi) || converstionStepsText.match(/bad/gi) ||
                    converstionStepsText.match(/many/gi) || converstionStepsText.match(/reminder/gi) ||
                    converstionStepsText.match(/important/gi) ||
                    converstionStepsText.match(/meeting/gi) || converstionStepsText.match(/never/gi) ||
                    converstionStepsText.match(/late/gi) || converstionStepsText.match(/appointment/gi)
                ) {
                    await playScript("OK, how do you usually organize time?");
                    setSampleAns([" I sometimes set up reminders for important events or meetings, sometimes I make lists of tasks tocomplete, sometimes I set deadlines for myself, especially when working on an importantassignment/project. "]);
                    conditionsDependsOnUserSpeech(4)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Are you good at organizing time?");
                    converstionSteps--;
                }
            }

            else if (converstionSteps == 7) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("How do you usually organize your time?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am Repeatin ,How do you usually organize your time?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                    converstionStepsText.match(/actually/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/kind/gi) || converstionStepsText.match(/good/gi) ||
                    converstionStepsText.match(/usually/gi) || converstionStepsText.match(/organize/gi) ||
                    converstionStepsText.match(/people/gi) || converstionStepsText.match(/like/gi) ||
                    converstionStepsText.match(/love/gi) || converstionStepsText.match(/time/gi) ||
                    converstionStepsText.match(/sometime/gi) || converstionStepsText.match(/many/gi) ||
                    converstionStepsText.match(/flew/gi) || converstionStepsText.match(/reminder/gi) ||
                    converstionStepsText.match(/event/gi) || converstionStepsText.match(/meeting/gi) ||
                    converstionStepsText.match(/task/gi) || converstionStepsText.match(/complete/gi) ||
                    converstionStepsText.match(/especially/gi) || converstionStepsText.match(/work/gi) ||
                    converstionStepsText.match(/project/gi) || converstionStepsText.match(/like/gi) ||
                    converstionStepsText.match(/love/gi) || converstionStepsText.match(/important/gi)

                ) {
                    await playScript("OK, do you think planning is important for time management?");
                    setSampleAns([" Yes, planning is essential for good time management. If we don’t plan ahead, we will tend to waste time doing tasks/things which are unimportant or unnecessary. "]);
                    conditionsDependsOnUserSpeech(5)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. How do you usually organize your time?");
                    converstionSteps--;
                }
            }



            else if (converstionSteps == 8) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Do you think planning is important for time management?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am Repeatin , Do you think planning is important for time management?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                    converstionStepsText.match(/actually/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/definite/gi) || converstionStepsText.match(/course/gi) ||
                    converstionStepsText.match(/people/gi) || converstionStepsText.match(/like/gi) ||
                    converstionStepsText.match(/love/gi) || converstionStepsText.match(/plan/gi) ||
                    converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/important/gi) || converstionStepsText.match(/management/gi) ||
                    converstionStepsText.match(/time/gi) || converstionStepsText.match(/essential/gi) ||
                    converstionStepsText.match(/ahead/gi) || converstionStepsText.match(/tend/gi) ||
                    converstionStepsText.match(/will/gi) || converstionStepsText.match(/would/gi) ||
                    converstionStepsText.match(/waste/gi) || converstionStepsText.match(/loss/gi)

                ) {
                    await playScript("Ok, do you think children should learn to manage their time?");
                    setSampleAns([" Yes, definitely. We live in a fast paced world and children too need to manage their time well, so that they can deal with the competition and do well at their studies and later, at their jobs. "])
                    conditionsDependsOnUserSpeech(6)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you think planning is important for time management?");
                    converstionSteps--;
                }
            }

            else if (converstionSteps == 9) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("do you think children should learn to manage their time??");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am Repeatin ,do you think children should learn to manage their time?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/children/gi) ||
                    converstionStepsText.match(/should/gi) || converstionStepsText.match(/learn/gi) ||
                    converstionStepsText.match(/because/gi) || converstionStepsText.match(/most/gi) ||
                    converstionStepsText.match(/very/gi) || converstionStepsText.match(/good/gi) ||
                    converstionStepsText.match(/fast/gi) || converstionStepsText.match(/need/gi) ||
                    converstionStepsText.match(/deal/gi) || converstionStepsText.match(/can/gi) ||
                    converstionStepsText.match(/would/gi) || converstionStepsText.match(/competition/gi) ||
                    converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                    converstionStepsText.match(/actually/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/definite/gi) || converstionStepsText.match(/course/gi) ||
                    converstionStepsText.match(/people/gi) || converstionStepsText.match(/like/gi) ||
                    converstionStepsText.match(/love/gi) || converstionStepsText.match(/plan/gi) ||
                    converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/important/gi) || converstionStepsText.match(/manage/gi) ||
                    converstionStepsText.match(/time/gi) || converstionStepsText.match(/essential/gi) ||
                    converstionStepsText.match(/ahead/gi) || converstionStepsText.match(/tend/gi) ||
                    converstionStepsText.match(/will/gi) || converstionStepsText.match(/would/gi) ||
                    converstionStepsText.match(/waste/gi) || converstionStepsText.match(/loss/gi)

                ) {
                    await playScript("Ok, do old people and young people manage time in a similar way?");
                    setSampleAns([" No, old and young people do not manage their time the same way. Old people have more life experience and they understand the importance of time management better than the young generation. The young people may be too impulsive or impatient and may not understand the importance of planning ahead. Another difference is the way the younger generation manages time. They make more use of technology and the old people may use the traditional methods, like a timetable or writing down a list of tasks."])
                    conditionsDependsOnUserSpeech(7)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. do you think children should learn to manage their time?");
                    converstionSteps--;
                }
            }

            else if (converstionSteps == 10) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("do old people and young people manage time in a similar way?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am Repeatin , do old people and young people manage time in a similar way?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/young/gi) || converstionStepsText.match(/similar/gi) ||
                    converstionStepsText.match(/way/gi) || converstionStepsText.match(/different/gi) ||
                    converstionStepsText.match(/experience/gi) || converstionStepsText.match(/life/gi) ||
                    converstionStepsText.match(/generation/gi) || converstionStepsText.match(/patient/gi) ||
                    converstionStepsText.match(/understand/gi) || converstionStepsText.match(/technology/gi) ||
                    converstionStepsText.match(/methods/gi) || converstionStepsText.match(/list/gi) ||
                    converstionStepsText.match(/children/gi) ||
                    converstionStepsText.match(/should/gi) || converstionStepsText.match(/learn/gi) ||
                    converstionStepsText.match(/because/gi) || converstionStepsText.match(/most/gi) ||
                    converstionStepsText.match(/very/gi) || converstionStepsText.match(/good/gi) ||
                    converstionStepsText.match(/fast/gi) || converstionStepsText.match(/need/gi) ||
                    converstionStepsText.match(/deal/gi) || converstionStepsText.match(/can/gi) ||
                    converstionStepsText.match(/would/gi) || converstionStepsText.match(/competition/gi) ||
                    converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                    converstionStepsText.match(/actually/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/definite/gi) || converstionStepsText.match(/course/gi) ||
                    converstionStepsText.match(/people/gi) || converstionStepsText.match(/like/gi) ||
                    converstionStepsText.match(/love/gi) || converstionStepsText.match(/plan/gi) ||
                    converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/important/gi) || converstionStepsText.match(/manage/gi) ||
                    converstionStepsText.match(/time/gi) || converstionStepsText.match(/essential/gi) ||
                    converstionStepsText.match(/ahead/gi) || converstionStepsText.match(/tend/gi) ||
                    converstionStepsText.match(/will/gi) || converstionStepsText.match(/would/gi) ||
                    converstionStepsText.match(/waste/gi) || converstionStepsText.match(/loss/gi)

                ) {
                    await playScript("Okay. That was about section 3. Thanks.");
                    conditionsDependsOnUserSpeech(8)
                    await sendSpeakingtextToBackend(recordedText);
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Do old people and young people manage time in a similar way?");
                    converstionSteps--;
                }



            }

        }

        console.log("converstionStepsText");
        console.log(converstionStepsText);
        converstionStepsText = "";
    }





    // test-14-Sections

    async function Test14Sec1() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            if (!userSpeakingTestNo) {
                await playScript(
                    "Hello and welcome to the IELTS speaking portion of the test. Jone is my name. & For this portion of the exam, I will serve as your examiner. We are carrying out this. Would you kindly tell me your entire name?"
                );
                setSampleAns([" Simply you can say your full name. As like my name is Jone dow.You can call me Jone"])
            } else {
                await playScript("Are you ready to take the test then?");
                setSampleAns([" Simply you can say the positive answer. As like Yes i am Ready to give the test. ", "2, Yes, I am reay.You can proceed the test"])
            }

        }

        converstionSteps++;
        if (converstionStepsText != '') {

            if (!userSpeakingTestNo) {
                if (converstionSteps == 1) {
                    await playScript(
                        "I'll start your exam now. What's your full name, please?"
                    );
                    setSampleAns(["You an simply tell your full name . As like I am Mr. JOne Dow . You can call me jone."])
                } else if (converstionSteps == 2) {
                    if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating.  What's your full name, please?");
                        converstionSteps--;
                    }
                    else if (converstionStepsText.match("name") || converstionStepsText.match("call")) {
                        if (converstionStepsText.match("call")) {
                            await playScript(
                                "So, for this section. I'm going to ask some general questions. Where do you live?"
                            );
                            setSampleAns([" Simply you can say your area/ or place where you are live in.As like I am living in Dhaka,Bangladesh", "2, I live in kolkata,India"])
                            localStorage.setItem("SpeakingTestNo", testNo);
                            conditionsDependsOnUserSpeech(0)
                        } else {
                            await playScript("Alright. What can I call you?");
                            setSampleAns(["You can call me Jone or you simply tell your nickname."])
                            converstionSteps--;
                        }
                    }
                    else {
                        await playScript("Alright, what's your name?");
                        setSampleAns(["You an simply tell your full name . As like I am Mr. JOne Dow . You can call me jone."])
                        converstionSteps--;
                    }

                } else if (converstionSteps == 3) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError(" Where do you live? ");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating. Where do you live? ");
                        converstionSteps--;
                    }
                    else if (converstionStepsText.match(/live/gi) || converstionStepsText.match(/leaving/gi) ||
                        converstionStepsText.match(/in/gi) || converstionStepsText.match(/at/gi) ||
                        converstionStepsText.match(/from/gi) || converstionStepsText.match(/i am living/gi)) {
                        await playScript("Okey. Lets talk about sports.  Do you like watching sports programs on TV?");
                        setSampleAns(["Yes, I enjoy watching sports programs on TV and would rather them than daily soaps. I really  enjoy cricket, soccer, and tennis and love to watch sports programs related to them. "]);
                        conditionsDependsOnUserSpeech(1)
                    } else {
                        await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Where do you live? ");
                        converstionSteps--;
                    }

                }
            } else {
                if (converstionSteps == 1) {
                    await playScript("Okey. Are you happy today?");
                    setSampleAns([" Yes, sir i am really happly today. thanks for asking."])
                }
                if (converstionSteps == 2) {
                    if (converstionStepsText.length < 5) {
                        await smallTalkError(" Are you ready? ");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating. Are you ready? ");
                        converstionSteps--;
                    }
                    else {
                        await playScript("Okey. So, it look nice when you make smile.Do you like to smile all the time?");
                        setSampleAns([`Yes i do , i always make smile. it makes me happy.`])
                        conditionsDependsOnUserSpeech(0)
                    }
                }
                if (converstionSteps == 3) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError(" What do you do for fun? ");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating. What do you do for fun? ");
                        converstionSteps--;
                    }
                    else {
                        await playScript("Okey. Okey. Lets talk about sports.  Do you like watching sports programs on TV?");
                        setSampleAns(["Yes, I enjoy watching sports programs on TV and would rather them than daily soaps. I really  enjoy cricket, soccer, and tennis and love to watch sports programs related to them. "])
                        conditionsDependsOnUserSpeech(1)
                    }
                }
            }

            if (converstionSteps == 4) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Do you like watching sports programs on TV?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Do you like watching sports programs on TV? ");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/sport/gi) || converstionStepsText.match(/watch/gi) ||
                    converstionStepsText.match(/Yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/enjoy/gi) || converstionStepsText.match(/program/gi) ||

                    converstionStepsText.match(/TV/gi) || converstionStepsText.match(/rather/gi) ||
                    converstionStepsText.match(/daily/gi) || converstionStepsText.match(/cricket/gi) ||
                    converstionStepsText.match(/love/gi) || converstionStepsText.match(/relate/gi) ||
                    converstionStepsText.match(/Like/gi)

                ) {
                    await playScript("Okey. Where did you learn to play?");
                    setSampleAns([`I think I learnt playing cricket by watching it on TV and from the other children in the 
                    neighbourhood. In India, everyone likes to play cricket, so it not very hard to learn it.`])
                    conditionsDependsOnUserSpeech(2)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you like watching sports programs on TV?");
                    converstionSteps--;
                }


            } else if (converstionSteps == 5) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Where did you learn to play? ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.  Where did you learn to play? ");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/learn/gi) || converstionStepsText.match(/did/gi) ||
                    converstionStepsText.match(/play/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/learnt/gi) ||
                    converstionStepsText.match(/cricket/gi) || converstionStepsText.match(/watch/gi) ||
                    converstionStepsText.match(/overall/gi) || converstionStepsText.match(/TV/gi) ||
                    converstionStepsText.match(/from/gi) || converstionStepsText.match(/children/gi) ||
                    converstionStepsText.match(/neighbourhood/gi) || converstionStepsText.match(/everyone/gi) ||
                    converstionStepsText.match(/almost/gi) || converstionStepsText.match(/hard/gi) ||
                    converstionStepsText.match(/learn/gi)
                ) {
                    await playScript("Okey.  Did you do some sports when you were young? ");
                    setSampleAns([` Yes, I have been playing cricket since my childhood. In my childhood, I also used to play hockey  and volleyball, but now I don’t.  `])
                    conditionsDependsOnUserSpeech(3)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Where did you learn to play?");
                    converstionSteps--;
                }


            } else if (converstionSteps == 6) {

                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Did you do some sports when you were young? ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Did you do some sports when you were young? ");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/Did/gi) || converstionStepsText.match(/some/gi) ||
                    converstionStepsText.match(/sports/gi) || converstionStepsText.match(/when/gi) ||
                    converstionStepsText.match(/were/gi) || converstionStepsText.match(/young/gi) ||
                    converstionStepsText.match(/been/gi) || converstionStepsText.match(/play/gi) ||

                    converstionStepsText.match(/since/gi) || converstionStepsText.match(/cricket/gi) ||
                    converstionStepsText.match(/grow/gi) || converstionStepsText.match(/childhood/gi) ||
                    converstionStepsText.match(/used/gi) || converstionStepsText.match(/around/gi) ||

                    converstionStepsText.match(/hockey/gi) || converstionStepsText.match(/volleyball/gi) ||
                    converstionStepsText.match(/football/gi) || converstionStepsText.match(/tanis/gi) ||
                    converstionStepsText.match(/hadud/gi)
                ) {
                    await playScript("Okey.  Do you think children need more exercise?");
                    setSampleAns([`Yes certainly. I think the number of children who are unfit and obese is increasing day by day. So, 
                    I think it is absolutely necessary that they get more exercise. `])
                    conditionsDependsOnUserSpeech(4)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Did you do some sports when you were young? ");
                    converstionSteps--;
                }


            } else if (converstionSteps == 7) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Do you think children need more exercise?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Do you think children need more exercise? ");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/no/gi) || converstionStepsText.match(/children/gi) ||
                    converstionStepsText.match(/need/gi) || converstionStepsText.match(/more/gi) ||
                    converstionStepsText.match(/exercise/gi) || converstionStepsText.match(/certainly/gi) ||

                    converstionStepsText.match(/unfit/gi) || converstionStepsText.match(/obese/gi) ||
                    converstionStepsText.match(/increas/gi) || converstionStepsText.match(/absolutely/gi) ||
                    converstionStepsText.match(/necessary/gi) || converstionStepsText.match(/get/gi)
                ) {
                    await playScript("Okey. Do you have a favorite sports team? If so, which one?");
                    setSampleAns([`Yes, my favorite sports team is the Golden State Warriors. I love watching their fast-paced games and how they excel in teamwork and shooting.`])
                    conditionsDependsOnUserSpeech(5)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you think children need more exercise?");
                    converstionSteps--;
                }


            } else if (converstionSteps == 8) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Do you have a favorite sports team? If so, which one?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.Do you have a favorite sports team? If so, which one? ");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/favorite/gi) || converstionStepsText.match(/team/gi) ||
                    converstionStepsText.match(/sport/gi) || converstionStepsText.match(/Yes/gi) ||
                    converstionStepsText.match(/no/gi) || converstionStepsText.match(/many/gi) ||
                    converstionStepsText.match(/Golden/gi) || converstionStepsText.match(/Warrior/gi) ||

                    converstionStepsText.match(/love/gi) || converstionStepsText.match(/watch/gi) ||
                    converstionStepsText.match(/vibrant/gi) || converstionStepsText.match(/game/gi) ||
                    converstionStepsText.match(/teamwork/gi) || converstionStepsText.match(/shoot/gi)

                ) {
                    await playScript("Okey. That was about section 1. Thanks.");
                    await sendSpeakingtextToBackend(recordedText);
                    conditionsDependsOnUserSpeech(6)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.Do you have a favorite sports team? If so, which one?");
                    converstionSteps--;
                }



            }




        }

        console.log("converstionStepsText");
        console.log(converstionStepsText);
        converstionStepsText = "";
    }


    async function Test14Sec3() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            await playScript(
                " My name is Adrian. I will be your examiner for this part of the test, part three. Are you comfortable?"
            );
            setSampleAns(["Yes, I am comfortable you please proceed the test"])
        }
        converstionSteps++;
        if (converstionStepsText != '') {
            if (converstionSteps == 1) {
                await playScript(
                    "Sorry.... Can you repeat that please"
                );
                setSampleAns([` You can simply repeat your previous answer`])
            } else if (converstionSteps == 2) {
                if (converstionStepsText.length < 5) {
                    await smallTalkError("Are you ready?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.Are you ready?");
                    converstionSteps--;
                }
                else {
                    await playScript("Let's start.  Are traffic jams common in Indian cities?");
                    setSampleAns([`Yes, India has a huge population and traffic jams are not uncommon especially in big cities like  Delhi, Bombay, Chennai and Kokatta. Moreover, there is also a bad culture of parking cars on the  roads in India, which reduces available space for parking and leads to jams. `])
                    conditionsDependsOnUserSpeech(0)
                }
            }
            else if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Are traffic jams common in Indian cities?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Are traffic jams common in Indian cities?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/Yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/traffic/gi) || converstionStepsText.match(/pollution/gi) ||
                    converstionStepsText.match(/India/gi) || converstionStepsText.match(/jam/gi) ||

                    converstionStepsText.match(/cit/gi) || converstionStepsText.match(/huge/gi) ||
                    converstionStepsText.match(/population/gi) || converstionStepsText.match(/uncommon/gi) ||
                    converstionStepsText.match(/especially/gi) || converstionStepsText.match(/culture/gi) ||

                    converstionStepsText.match(/road/gi) || converstionStepsText.match(/reduces/gi) ||
                    converstionStepsText.match(/available/gi) || converstionStepsText.match(/park/gi) ||

                    converstionStepsText.match(/lead/gi) || converstionStepsText.match(/car/gi) ||
                    converstionStepsText.match(/bus/gi) || converstionStepsText.match(/pollice/gi)

                ) {
                    await playScript("Why are cities today facing serious traffic issues?");
                    setSampleAns([`I think the main reason for the serious traffic issues is increasing urbanisation. More and more people are moving to cities for the better quality of life but this leads to more cars than roads can  handle. Moreover, some older cities have narrow roads as they were not designed keeping today’s  use of cars in minds. These narrow roads restrict traffic flow and lead to jams. `])
                    conditionsDependsOnUserSpeech(1)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Are traffic jams common in Indian cities?");
                    converstionSteps--;
                }

            } else if (converstionSteps == 4) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Why are cities today facing serious traffic issues?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.Why are cities today facing serious traffic issues?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/cities/gi) || converstionStepsText.match(/today/gi) ||
                    converstionStepsText.match(/facing/gi) || converstionStepsText.match(/serious/gi) ||
                    converstionStepsText.match(/traffic/gi) || converstionStepsText.match(/issues/gi) ||

                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/situation/gi) ||
                    converstionStepsText.match(/reason/gi) || converstionStepsText.match(/increasing/gi) ||

                    converstionStepsText.match(/better/gi) || converstionStepsText.match(/life/gi) ||
                    converstionStepsText.match(/design/gi) || converstionStepsText.match(/keep/gi) ||
                    converstionStepsText.match(/mind/gi) || converstionStepsText.match(/restrict/gi)
                ) {
                    await playScript("Okey. What can be done to improve traffic conditions in cities?");
                    setSampleAns([`First, I think the government should promote the use of public transportation by making it more comfortable and faster. For example, the traffic conditions in Delhi have improved considerably  after the launch of Delhi Metro. Also, the roads need to be widened wherever possible to accommodate more cars. `])
                    conditionsDependsOnUserSpeech(2)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Why are cities today facing serious traffic issues?");
                    converstionSteps--;
                }
            } else if (converstionSteps == 5) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(". What can be done to improve traffic conditions in cities?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. . What can be done to improve traffic conditions in cities?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/improve/gi) || converstionStepsText.match(/traffic/gi) ||
                    converstionStepsText.match(/condition/gi) || converstionStepsText.match(/cit/gi) ||
                    converstionStepsText.match(/First/gi) || converstionStepsText.match(/think/gi) ||

                    converstionStepsText.match(/government/gi) || converstionStepsText.match(/should/gi) ||
                    converstionStepsText.match(/promote/gi) || converstionStepsText.match(/public/gi) ||
                    converstionStepsText.match(/pressure/gi) || converstionStepsText.match(/horns/gi) ||

                    converstionStepsText.match(/transportation/gi) || converstionStepsText.match(/mak/gi) ||
                    converstionStepsText.match(/improve/gi) || converstionStepsText.match(/consider/gi) ||
                    converstionStepsText.match(/launch/gi) || converstionStepsText.match(/road/gi) ||
                    converstionStepsText.match(/need/gi) || converstionStepsText.match(/widened/gi) ||
                    converstionStepsText.match(/wherever/gi) || converstionStepsText.match(/possible/gi)
                ) {
                    await playScript(" Can developing public transport help resolve traffic issues in cities?");
                    setSampleAns([`I think public transportation can resolve traffic issues but if it is fast and comfortable. Delhi had  local trains for long time and people did not prefer them because they were slow. However, the  construction of Delhi metro, which is quite fast and comfortable, made a real dent in traffic.`])
                    conditionsDependsOnUserSpeech(3)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.. What can be done to improve traffic conditions in cities?");
                    converstionSteps--;
                }
            } else if (converstionSteps == 6) {

                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Can developing public transport help resolve traffic issues in cities?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.  Can developing public transport help resolve traffic issues in cities?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/develop/gi) || converstionStepsText.match(/public/gi) ||
                    converstionStepsText.match(/transport/gi) || converstionStepsText.match(/resolve/gi) ||
                    converstionStepsText.match(/traffic/gi) || converstionStepsText.match(/issues/gi) ||
                    converstionStepsText.match(/cit/gi) || converstionStepsText.match(/fast/gi) ||
                    converstionStepsText.match(/comfortable/gi) || converstionStepsText.match(/slow/gi) ||

                    converstionStepsText.match(/grow/gi) || converstionStepsText.match(/However/gi) ||
                    converstionStepsText.match(/train/gi) || converstionStepsText.match(/long/gi) ||
                    converstionStepsText.match(/prefer/gi) || converstionStepsText.match(/dent/gi) ||
                    converstionStepsText.match(/suffer/gi)
                ) {
                    await playScript("So, How do you typically pass the time while stuck in a traffic jam?");
                    setSampleAns([`"I usually listen to my favorite music or podcasts to make the time pass more pleasantly."
                    "I often catch up on phone calls with family or friends, using hands-free, of course."
                    "I like to listen to audiobooks; it feels productive and entertaining at the same time."
                    "I take the opportunity to practice mindfulness and do some deep breathing exercises to stay calm."
                    "Sometimes, I use the time to plan my day or go over my schedule mentally."
                    "I play word or trivia games on my phone when the traffic is at a standstill."
                    "I use traffic apps to check for alternate routes and see if I can find a quicker way."
                    `])
                    conditionsDependsOnUserSpeech(4)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Can developing public transport help resolve traffic issues in cities?");
                    converstionSteps--;
                }
            } else if (converstionSteps == 7) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("How do you typically pass the time while stuck in a traffic jam");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.How do you typically pass the time while stuck in a traffic jam");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/typically/gi) || converstionStepsText.match(/pass/gi) ||
                    converstionStepsText.match(/time/gi) || converstionStepsText.match(/while/gi) ||
                    converstionStepsText.match(/traffic/gi) || converstionStepsText.match(/jam/gi) ||

                    converstionStepsText.match(/usually/gi) || converstionStepsText.match(/listen/gi) ||
                    converstionStepsText.match(/pleasant/gi) || converstionStepsText.match(/often/gi) ||
                    converstionStepsText.match(/book/gi) || converstionStepsText.match(/entertain/gi) ||
                    converstionStepsText.match(/practice/gi) || converstionStepsText.match(/breath/gi) ||
                    converstionStepsText.match(/schedule/gi) || converstionStepsText.match(/game/gi) ||
                    converstionStepsText.match(/play/gi) || converstionStepsText.match(/alternate/gi)

                ) {
                    await playScript("Okey. That was about section 3. Thanks.");
                    conditionsDependsOnUserSpeech(5)
                    await sendSpeakingtextToBackend(recordedText);
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.How do you typically pass the time while stuck in a traffic jam");
                    converstionSteps--;
                }
            }

        }

        console.log("converstionStepsText");
        console.log(converstionStepsText);
        converstionStepsText = "";



    }


    // test-15-Sections
    async function Test15Sec1() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            if (!userSpeakingTestNo) {
                await playScript(
                    "Hello and welcome to the IELTS speaking portion of the test. Jone is my name. & For this portion of the exam, I will serve as your examiner. We are carrying out this. Would you kindly tell me your entire name?"
                );
                setSampleAns([" Simply you can say your full name. As like my name is Jone dow.You can call me Jone"])
            } else {
                await playScript("Are you ready to take the test then?");
                setSampleAns([" Simply you can say the positive answer. As like Yes i am Ready to give the test. ", "2, Yes, I am reay.You can proceed the test"])
            }

        }

        converstionSteps++;
        if (converstionStepsText != '') {

            if (!userSpeakingTestNo) {
                if (converstionSteps == 1) {
                    await playScript(
                        "I'll start your exam now. What's your full name, please?"
                    );
                    setSampleAns(["You an simply tell your full name . As like I am Mr. JOne Dow . You can call me jone."])
                } else if (converstionSteps == 2) {
                    if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating.  What's your full name, please?");
                        converstionSteps--;
                    }
                    else if (converstionStepsText.match("name") || converstionStepsText.match("call")) {
                        if (converstionStepsText.match("call")) {
                            await playScript(
                                "So, for this section. I'm going to ask some general questions. Where do you live?"
                            );
                            setSampleAns([" Simply you can say your area/ or place where you are live in.As like I am living in Dhaka,Bangladesh", "2, I live in kolkata,India"])
                            localStorage.setItem("SpeakingTestNo", testNo);
                            conditionsDependsOnUserSpeech(0)
                        } else {
                            await playScript("Alright. What can I call you?");
                            setSampleAns(["You can call me Jone or you simply tell your nickname."])
                            converstionSteps--;
                        }
                    }
                    else {
                        await playScript("Alright, what's your name?");
                        setSampleAns(["You an simply tell your full name . As like I am Mr. JOne Dow . You can call me jone."])
                        converstionSteps--;
                    }

                } else if (converstionSteps == 3) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError(" Where do you live? ");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating. Where do you live? ");
                        converstionSteps--;
                    }
                    else if (converstionStepsText.match(/live/gi) || converstionStepsText.match(/leaving/gi) ||
                        converstionStepsText.match(/in/gi) || converstionStepsText.match(/at/gi) ||
                        converstionStepsText.match(/from/gi) || converstionStepsText.match(/i am living/gi)) {
                        await playScript("Okey. Lets talk about Mirror.  How often do you look at yourself in the mirror everyday");
                        setSampleAns(["I look at the mirror at least once a day when I go out for my work. Apart from that whenever I get a chance I flatter myself by looking at the mirror. I think if you are a confident person, looking at the  mirror always boosts your confidence "]);
                        conditionsDependsOnUserSpeech(1)
                    } else {
                        await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Where do you live? ");
                        converstionSteps--;
                    }

                }
            } else {
                if (converstionSteps == 1) {
                    await playScript("Okey. Are you happy today?");
                    setSampleAns([" Yes, sir i am really happly today. thanks for asking."])
                }
                if (converstionSteps == 2) {
                    if (converstionStepsText.length < 5) {
                        await smallTalkError(" Are you ready? ");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating. Are you ready? ");
                        converstionSteps--;
                    }
                    else {
                        await playScript("Okey. So, Which city do you live?");
                        setSampleAns([`Yes i do , i always make smile. it makes me happy.`])
                        conditionsDependsOnUserSpeech(0)
                    }
                }
                if (converstionSteps == 3) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError("Which city do you live? ");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating. Which city do you live?");
                        converstionSteps--;
                    }
                    else {
                        await playScript("Okey. Lets talk about Mirror.  How often do you look at yourself in the mirror everyday");
                        setSampleAns(["I look at the mirror at least once a day when I go out for my work. Apart from that whenever I get a chance I flatter myself by looking at the mirror. I think if you are a confident person, looking at the  mirror always boosts your confidence "]);
                        conditionsDependsOnUserSpeech(1)
                    }
                }
            }

            if (converstionSteps == 4) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("How often do you look at yourself in the mirror everyday");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.How often do you look at yourself in the mirror everyday ");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/mirror/gi) || converstionStepsText.match(/least/gi) ||
                    converstionStepsText.match(/work/gi) || converstionStepsText.match(/Apart/gi) ||
                    converstionStepsText.match(/whenever/gi) || converstionStepsText.match(/chance/gi) ||

                    converstionStepsText.match(/flatter/gi) || converstionStepsText.match(/rather/gi) ||
                    converstionStepsText.match(/daily/gi) || converstionStepsText.match(/myself/gi) ||
                    converstionStepsText.match(/love/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/Like/gi) || converstionStepsText.match(/confident/gi) ||
                    converstionStepsText.match(/confidence/gi)

                ) {
                    await playScript("Okey. Have you ever bought mirrors? ");
                    setSampleAns([`Yes, I bought a beautiful mirror when I went to Jodhpur last month, it has a nice wooden frame and a  clear mirror to look at. It also has carving on the frame`])
                    conditionsDependsOnUserSpeech(2)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. How often do you look at yourself in the mirror everyday?");
                    converstionSteps--;
                }


            } else if (converstionSteps == 5) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Have you ever bought mirrors? ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Have you ever bought mirrors?  ");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/ever/gi) || converstionStepsText.match(/did/gi) ||
                    converstionStepsText.match(/been/gi) || converstionStepsText.match(/bought/gi) ||
                    converstionStepsText.match(/mirror/gi) ||
                    converstionStepsText.match(/beautiful/gi) || converstionStepsText.match(/month/gi) ||
                    converstionStepsText.match(/wooden/gi) || converstionStepsText.match(/nice/gi) ||
                    converstionStepsText.match(/carv/gi) || converstionStepsText.match(/frame/gi)
                ) {
                    await playScript("Okey.   Would you use Mirrors to decorate rooms? ");
                    setSampleAns([`Yes I would like to use Mirrors to decorate the rooms. Mirrors add space to the room and also enhance  the lighting effect. My interior decorator friend also recommended it for my study room recently.  `])
                    conditionsDependsOnUserSpeech(3)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Have you ever bought mirrors? ");
                    converstionSteps--;
                }


            } else if (converstionSteps == 6) {

                if (converstionStepsText.length < 10) {
                    await smallTalkError("  Would you use Mirrors to decorate rooms?  ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.  Would you use Mirrors to decorate rooms?  ");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/Would/gi) || converstionStepsText.match(/will/gi) ||
                    converstionStepsText.match(/Mirror/gi) || converstionStepsText.match(/decorate/gi) ||
                    converstionStepsText.match(/room/gi) || converstionStepsText.match(/like/gi) ||
                    converstionStepsText.match(/space/gi) || converstionStepsText.match(/enhance/gi) ||

                    converstionStepsText.match(/effect/gi) || converstionStepsText.match(/recommended/gi) ||
                    converstionStepsText.match(/grow/gi) || converstionStepsText.match(/childhood/gi) ||
                    converstionStepsText.match(/used/gi) || converstionStepsText.match(/interior/gi) ||

                    converstionStepsText.match(/friend/gi) || converstionStepsText.match(/study/gi) ||
                    converstionStepsText.match(/ room/gi) || converstionStepsText.match(/recently/gi)
                ) {
                    await playScript("Okey. Do you check yourself when you decide to buy a mirror? ");
                    setSampleAns([`Yes, I check for any defects or flaws in the reflection, when buying a mirror. I also check for any  physical damage, like cracks. `])
                    conditionsDependsOnUserSpeech(4)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Would you use Mirrors to decorate rooms? ");
                    converstionSteps--;
                }


            } else if (converstionSteps == 7) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Do you check yourself when you decide to buy a mirror? ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Do you check yourself when you decide to buy a mirror?  ");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/check/gi) || converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/yourself/gi) || converstionStepsText.match(/when/gi) ||
                    converstionStepsText.match(/decide/gi) || converstionStepsText.match(/buy/gi) ||
                    converstionStepsText.match(/mirror/gi) || converstionStepsText.match(/check/gi) ||

                    converstionStepsText.match(/any/gi) || converstionStepsText.match(/defects/gi) ||
                    converstionStepsText.match(/flaws/gi) || converstionStepsText.match(/reflection/gi) ||
                    converstionStepsText.match(/when/gi) || converstionStepsText.match(/buyi/gi) ||
                    converstionStepsText.match(/check/gi) || converstionStepsText.match(/physical/gi)
                ) {
                    await playScript("Okey. That was about section 1. Thanks.");
                    await sendSpeakingtextToBackend(recordedText);
                    conditionsDependsOnUserSpeech(5)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you think children need more exercise?");
                    converstionSteps--;
                }


            }

        }

        console.log("converstionStepsText");
        console.log(converstionStepsText);
        converstionStepsText = "";
    }


    async function Test15Sec3() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            await playScript(
                " My name is Adrian. I will be your examiner for this part of the test, part three. Are you comfortable?"
            );
            setSampleAns(["Yes, I am comfortable you please proceed the test"])
        }
        converstionSteps++;
        if (converstionStepsText != '') {
            if (converstionSteps == 1) {
                await playScript(
                    "Sorry.... Can you repeat that please"
                );
                setSampleAns([` You can simply repeat your previous answer`])
            } else if (converstionSteps == 2) {
                if (converstionStepsText.length < 5) {
                    await smallTalkError(" I will as you the qustion related of question two. s0 , Are you ready?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.Are you ready?");
                    converstionSteps--;
                }
                else {
                    await playScript("Let's start. How has technology made our life easier?");
                    setSampleAns([`Different technologies have made our lives easier in different ways. However, in effect most  technologies reduce our labour and save us valuable time, thus improving our quality of life  considerably. They also in a way reduce our need on others because we can do everything on our .
                    own.
                     `])
                    conditionsDependsOnUserSpeech(0)
                }
            }
            else if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" How has technology made our life easier?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. How has technology made our life easier?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/Yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/technology/gi) || converstionStepsText.match(/made/gi) ||
                    converstionStepsText.match(/life/gi) || converstionStepsText.match(/easier/gi) ||

                    converstionStepsText.match(/Different/gi) || converstionStepsText.match(/way/gi) ||
                    converstionStepsText.match(/However/gi) || converstionStepsText.match(/effect/gi) ||
                    converstionStepsText.match(/reduce/gi) || converstionStepsText.match(/culture/gi) ||

                    converstionStepsText.match(/road/gi) || converstionStepsText.match(/reduces/gi) ||
                    converstionStepsText.match(/quality/gi) || converstionStepsText.match(/consider/gi) ||
                    converstionStepsText.match(/lead/gi) || converstionStepsText.match(/everything/gi)

                ) {
                    await playScript(" Which invention do you think is the most useful at home?");
                    setSampleAns([`I think it’s very hard to choose one. It really depends upon the person and their use. For example, I find dishwashers as very useful because in my house, I have the responsibility of washing utensils.  For my mother the answer might be the vacuum cleaner as she is responsible for cleaning. `])
                    conditionsDependsOnUserSpeech(1)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  How has technology made our life easier?");
                    converstionSteps--;
                }

            } else if (converstionSteps == 4) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Which invention do you think is the most useful at home?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Which invention do you think is the most useful at home?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/invention/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/most/gi) || converstionStepsText.match(/today/gi) ||
                    converstionStepsText.match(/useful/gi) || converstionStepsText.match(/home/gi) ||
                    converstionStepsText.match(/choose/gi) || converstionStepsText.match(/because/gi) ||

                    converstionStepsText.match(/responsi/gi) || converstionStepsText.match(/clean/gi) ||
                    converstionStepsText.match(/vacuum/gi) || converstionStepsText.match(/increasing/gi) ||

                    converstionStepsText.match(/better/gi) || converstionStepsText.match(/life/gi) ||
                    converstionStepsText.match(/design/gi) || converstionStepsText.match(/keep/gi) ||
                    converstionStepsText.match(/can/gi) || converstionStepsText.match(/house/gi)
                ) {
                    await playScript("Okey. Is it more difficult for old people to accept new technologies?");
                    setSampleAns([`First, I think the government should promote the use of public transportation by making it more comfortable and faster. For example, the traffic conditions in Delhi have improved considerably  after the launch of Delhi Metro. Also, the roads need to be widened wherever possible to accommodate more cars. `])
                    conditionsDependsOnUserSpeech(2)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Which invention do you think is the most useful at home?");
                    converstionSteps--;
                }
            } else if (converstionSteps == 5) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(". Is it more difficult for old people to accept new technologies?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Is it more difficult for old people to accept new technologies?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/more/gi) || converstionStepsText.match(/difficult/gi) ||
                    converstionStepsText.match(/people/gi) || converstionStepsText.match(/people/gi) ||
                    converstionStepsText.match(/accept/gi) || converstionStepsText.match(/technolog/gi) ||

                    converstionStepsText.match(/comfortable/gi) || converstionStepsText.match(/faster/gi) ||
                    converstionStepsText.match(/promote/gi) || converstionStepsText.match(/improve/gi) ||
                    converstionStepsText.match(/pressure/gi) || converstionStepsText.match(/horns/gi) ||

                    converstionStepsText.match(/Metro/gi) || converstionStepsText.match(/possible/gi) ||
                    converstionStepsText.match(/improve/gi) || converstionStepsText.match(/consider/gi) ||
                    converstionStepsText.match(/launch/gi) || converstionStepsText.match(/road/gi) ||
                    converstionStepsText.match(/need/gi) || converstionStepsText.match(/widened/gi) ||
                    converstionStepsText.match(/wherever/gi) || converstionStepsText.match(/possible/gi)
                ) {
                    await playScript("What can be done to help old people learn to make use of new technologies?");
                    setSampleAns([`Many steps can be taken to encourage the use of new technologies. Firstly, these big technology 
                    companies can organise seminars where older people can be taught about use of latest gadgets. 
                    members can also be helpful in helping their parents and grandparents when they are finding 
                    something difficult..`])
                    conditionsDependsOnUserSpeech(3)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Is it more difficult for old people to accept new technologies?");
                    converstionSteps--;
                }
            } else if (converstionSteps == 6) {

                if (converstionStepsText.length < 10) {
                    await smallTalkError(" What can be done to help old people learn to make use of new technologies?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.  What can be done to help old people learn to make use of new technologies?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/done/gi) || converstionStepsText.match(/help/gi) ||
                    converstionStepsText.match(/people/gi) || converstionStepsText.match(/public/gi) ||
                    converstionStepsText.match(/technolog/gi) || converstionStepsText.match(/these/gi) ||

                    converstionStepsText.match(/organise/gi) || converstionStepsText.match(/seminar/gi) ||
                    converstionStepsText.match(/cit/gi) || converstionStepsText.match(/fast/gi) ||
                    converstionStepsText.match(/comfortable/gi) || converstionStepsText.match(/slow/gi) ||

                    converstionStepsText.match(/accommodate/gi) || converstionStepsText.match(/However/gi) ||
                    converstionStepsText.match(/train/gi) || converstionStepsText.match(/long/gi) ||
                    converstionStepsText.match(/prefer/gi) || converstionStepsText.match(/dent/gi) ||
                    converstionStepsText.match(/suffer/gi)
                ) {
                    await playScript("So,  Will our life be better if we live without technology？");
                    setSampleAns([`Technology has improved our life in many ways but it has also brought many challenges. Life would 
                    certainly be simpler, but I wouldn’t call it better. Moreover, I think we have become so accustomed 
                    to technology just the idea of living without it is unfathomable. `])
                    conditionsDependsOnUserSpeech(4)
                } else {
                    await playScript("Sorry, Your answer is not relevent . What can be done to help old people learn to make use of new technologies?");
                    converstionSteps--;
                }
            } else if (converstionSteps == 7) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Will our life be better if we live without technology？");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Will our life be better if we live without technology？");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/Will/gi) || converstionStepsText.match(/life/gi) ||
                    converstionStepsText.match(/live/gi) || converstionStepsText.match(/without/gi) ||
                    converstionStepsText.match(/technology/gi) || converstionStepsText.match(/improve/gi) ||

                    converstionStepsText.match(/many/gi) || converstionStepsText.match(/brought/gi) ||
                    converstionStepsText.match(/challenge/gi) || converstionStepsText.match(/often/gi) ||
                    converstionStepsText.match(/certainly/gi) || converstionStepsText.match(/simpler/gi) ||
                    converstionStepsText.match(/become/gi) || converstionStepsText.match(/accusto/gi) ||
                    converstionStepsText.match(/unfathomable/gi)

                ) {
                    await playScript("Okey. That was about section 3. Thanks.");
                    conditionsDependsOnUserSpeech(5)
                    await sendSpeakingtextToBackend(recordedText);
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Will our life be better if we live without technology？");
                    converstionSteps--;
                }
            }

        }

        console.log("converstionStepsText");
        console.log(converstionStepsText);
        converstionStepsText = "";



    }

    // test-16-Sections---------------------------------

    async function Test16Sec1() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            if (!userSpeakingTestNo) {
                await playScript(
                    "Hello and welcome to the IELTS speaking portion of the test. Jone is my name. & For this portion of the exam, I will serve as your examiner. We are carrying out this. Would you kindly tell me your entire name?"
                );
                setSampleAns([" Simply you can say your full name. As like my name is Jone dow.You can call me Jone"])
            } else {
                await playScript("Are you ready to take the test then?");
                setSampleAns([" Simply you can say the positive answer. As like Yes i am Ready to give the test. ", "2, Yes, I am reay.You can proceed the test"])
            }

        }

        converstionSteps++;
        if (converstionStepsText != '') {

            if (!userSpeakingTestNo) {
                if (converstionSteps == 1) {
                    await playScript(
                        "I'll start your exam now. What's your full name, please?"
                    );
                    setSampleAns(["You an simply tell your full name . As like I am Mr. JOne Dow . You can call me jone."])
                } else if (converstionSteps == 2) {
                    if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating.  What's your full name, please?");
                        converstionSteps--;
                    }
                    else if (converstionStepsText.match("name") || converstionStepsText.match("call")) {
                        if (converstionStepsText.match("call")) {
                            await playScript(
                                "So, for this section. I'm going to ask some general questions. Where do you live?"
                            );
                            setSampleAns([" Simply you can say your area/ or place where you are live in.As like I am living in Dhaka,Bangladesh", "2, I live in Bangladesh."])
                            localStorage.setItem("SpeakingTestNo", testNo);
                            conditionsDependsOnUserSpeech(0)
                        } else {
                            await playScript("Alright. What can I call you?");
                            setSampleAns(["You can call me Jone or you simply tell your nickname."])
                            converstionSteps--;
                        }
                    }
                    else {
                        await playScript("Alright, what's your name?");
                        setSampleAns(["You an simply tell your full name . As like I am Mr. JOne Dow . You can call me jone."])
                        converstionSteps--;
                    }

                } else if (converstionSteps == 3) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError(" Where do you live? ");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating. Where do you live? ");
                        converstionSteps--;
                    }
                    else if (converstionStepsText.match(/live/gi) || converstionStepsText.match(/leaving/gi) ||
                        converstionStepsText.match(/in/gi) || converstionStepsText.match(/at/gi) ||
                        converstionStepsText.match(/from/gi) || converstionStepsText.match(/i am living/gi)) {
                        await playScript("Okey. Lets talk about Watch.Do you wear a watch?");
                        setSampleAns(["Yes, I do wear Titan Watch. It is an integral part of my daily dressing up routine. "]);
                        conditionsDependsOnUserSpeech(1)
                    } else {
                        await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Where do you live? ");
                        converstionSteps--;
                    }

                }
            } else {
                if (converstionSteps == 1) {
                    await playScript("Okey. Are you happy today?");
                    setSampleAns([" Yes, sir i am really happly today. thanks for asking."])
                }
                if (converstionSteps == 2) {
                    if (converstionStepsText.length < 5) {
                        await smallTalkError(" Are you ready? ");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating. Are you ready? ");
                        converstionSteps--;
                    }
                    else {
                        await playScript("Okey. So, Which city do you live?");
                        setSampleAns([`Yes i do , i always make smile. it makes me happy.`])
                        conditionsDependsOnUserSpeech(0)
                    }
                }
                if (converstionSteps == 3) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError("Which city do you live? ");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating. Which city do you live?");
                        converstionSteps--;
                    }
                    else {
                        await playScript("Okey. Lets talk about Watch.Do you wear a watch?");
                        setSampleAns(["Yes, I do wear Titan Watch. It is an integral part of my daily dressing up routine. "]);
                        conditionsDependsOnUserSpeech(1)
                    }
                }
            }

            if (converstionSteps == 4) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Do you wear a watch?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("Do you wear a watch? ");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/Watch/gi) || converstionStepsText.match(/wear/gi) ||
                    converstionStepsText.match(/Yes/gi) || converstionStepsText.match(/on/gi) ||
                    converstionStepsText.match(/Titan/gi) || converstionStepsText.match(/simple/gi) ||
                    converstionStepsText.match(/integral/gi) || converstionStepsText.match(/rather/gi) ||
                    converstionStepsText.match(/daily/gi) || converstionStepsText.match(/integral/gi) ||
                    converstionStepsText.match(/love/gi) || converstionStepsText.match(/part/gi) ||
                    converstionStepsText.match(/dress/gi) || converstionStepsText.match(/routine/gi) ||
                    converstionStepsText.match(/confidence/gi)

                ) {
                    await playScript("Okey. Have you ever got a watch as a gift? ");
                    setSampleAns([`Yes, I got this watch as a gift from my parents at my wedding. `])
                    conditionsDependsOnUserSpeech(2)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.Do you wear a watch?");
                    converstionSteps--;
                }


            } else if (converstionSteps == 5) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Have you ever got a watch as a gift? ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.  Have you ever got a watch as a gift? ");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/Have/gi) || converstionStepsText.match(/did/gi) ||
                    converstionStepsText.match(/been/gi) || converstionStepsText.match(/bought/gi) ||
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/ever/gi) ||
                    converstionStepsText.match(/beautiful/gi) || converstionStepsText.match(/got/gi) ||
                    converstionStepsText.match(/gift/gi) || converstionStepsText.match(/from/gi) ||
                    converstionStepsText.match(/parent/gi) || converstionStepsText.match(/wedding/gi)
                ) {
                    await playScript("Okey. Why do some people wear expensive watches?");
                    setSampleAns([`People have fads for different things, some may like expensive clothes, and others may be fond of  good stationery while many others may like to wear expensive pieces of jewellery. Similarly those  who are used to wearing a watch may like to spend on an expensive watch. An expensive watch is  also used to make a statement about one’s personality and ability to buy one. `])
                    conditionsDependsOnUserSpeech(3)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Have you ever got a watch as a gift? ");
                    converstionSteps--;
                }


            } else if (converstionSteps == 6) {

                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Why do some people wear expensive watches? ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Why do some people wear expensive watches? ");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/some/gi) || converstionStepsText.match(/people/gi) ||
                    converstionStepsText.match(/wear/gi) || converstionStepsText.match(/expensive/gi) ||
                    converstionStepsText.match(/watch/gi) || converstionStepsText.match(/like/gi) ||
                    converstionStepsText.match(/have/gi) || converstionStepsText.match(/different/gi) ||

                    converstionStepsText.match(/thing/gi) || converstionStepsText.match(/cloth/gi) ||
                    converstionStepsText.match(/stationery/gi) || converstionStepsText.match(/spend/gi) ||
                    converstionStepsText.match(/jewellery/gi) || converstionStepsText.match(/Similarly/gi) ||
                    converstionStepsText.match(/ability/gi) || converstionStepsText.match(/buy/gi)
                ) {
                    await playScript("Okey. Do you think it is important to wear a watch? Why?  ");
                    setSampleAns([`Till a few years ago it was considered an integral part of one’s attire because without a watch one  could not have functioned effectively in one’s daily routine. Since the advent of mobile phones wrist watches have become quite dispensable as most people use their mobiles to check on time.  `])
                    conditionsDependsOnUserSpeech(4)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Why do some people wear expensive watches?");
                    converstionSteps--;
                }


            } else if (converstionSteps == 7) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Do you think it is important to wear a watch? Why?  ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Do you think it is important to wear a watch? Why?   ");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/important/gi) ||
                    converstionStepsText.match(/wear/gi) || converstionStepsText.match(/watch/gi) ||
                    converstionStepsText.match(/Till/gi) || converstionStepsText.match(/check/gi) ||

                    converstionStepsText.match(/year/gi) || converstionStepsText.match(/ago/gi) ||
                    converstionStepsText.match(/effective/gi) || converstionStepsText.match(/reflection/gi) ||
                    converstionStepsText.match(/routine/gi) || converstionStepsText.match(/Since/gi) ||
                    converstionStepsText.match(/check/gi) || converstionStepsText.match(/mobile/gi) ||
                    converstionStepsText.match(/phones/gi) || converstionStepsText.match(/time/gi)
                ) {
                    await playScript("Okey. That was about section 1. Thanks.");
                    await sendSpeakingtextToBackend(recordedText);
                    conditionsDependsOnUserSpeech(5)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Do you think it is important to wear a watch? Why? ");
                    converstionSteps--;
                }


            }

        }

        console.log("converstionStepsText");
        console.log(converstionStepsText);
        converstionStepsText = "";
    }

    async function Test16Sec3() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            await playScript(
                " My name is Adrine. I will be your examiner for this part of the test Part three. Are you comfortable?"
            );
            setSampleAns([" Yes, I am comfortable. You can procced now please"])
        }
        converstionSteps++;
        if (converstionStepsText != '') {
            // if (converstionStepsText.length < 10) {
            //     await smallTalkError();
            // }
            // if (converstionStepsText.match('repeat') || converstionStepsText.match("don't understand")) {
            //     await playScript(
            //         "Ok , I am repeating.");
            //     converstionSteps--;
            // }
            // if (converstionSteps == 0) {
            //     await playScript(

            //         " My name is Adrine. I will be your examiner for this part of the test Part three. Are you confortable?"
            //     );
            // }
            if (converstionSteps == 1) {
                await playScript(
                    "Sorry.. Can you repeat that please"
                );
                setSampleAns([" You can simply repeated your previous ans that you have already given"]);
            } else if (converstionSteps == 2) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Are you comfortable?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,  Are you comfortable?");
                    converstionSteps--;
                }
                else {
                    await playScript("Now, let's talk about advertisements generally. Why do companies advertise?");
                    setSampleAns(["Increase the number of people who buy their productPersuade customers that their product is high-quality, useful or desirable Generate leads, make sales, increase profits and grow the business Display the unique selling points of their products and services Establish a brand positioning in the minds of their target consumers while associating their brand with an idea or category that they want their consumers to remember them as"]);
                    conditionsDependsOnUserSpeech(0)
                }
            }
            else if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Why do companies advertise?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,  Why do companies advertise?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/advertise/gi) || converstionStepsText.match(/brand/gi) ||
                    converstionStepsText.match(/would/gi) || converstionStepsText.match(/service/gi) ||
                    converstionStepsText.match(/collaborative /gi) || converstionStepsText.match(/people/gi) ||
                    converstionStepsText.match(/product/gi) || converstionStepsText.match(/photo/gi) ||
                    converstionStepsText.match(/companies/gi) || converstionStepsText.match(/Because/gi) ||
                    converstionStepsText.match(/attention/gi) || converstionStepsText.match(/powerful/gi) ||
                    converstionStepsText.match(/customer/gi) || converstionStepsText.match(/persuade/gi) ||
                    converstionStepsText.match(/important/gi) || converstionStepsText.match(/multiple/gi) ||
                    converstionStepsText.match(/reason/gi) || converstionStepsText.match(/sale/gi)
                ) {
                    await playScript("Is advertising becoming too commonplace?");
                    setSampleAns([
                        "Yes, Advertising has become an integral part of our daily lives, and it is hard to imagine a world without it. It is ubiquitous and has infiltrated every aspect of our lives, from the shows we watch to the music we listen to, and even the magazines we read 1. However, the question of whether advertising has become too commonplace is subjective and open to interpretation. Some people may argue that advertising has become too pervasive and intrusive, while others may argue that it is a necessary part of our economy and society."
                        , "2, It is important to note that advertising has a significant impact on our culture and society. It shapes our perceptions of beauty, success, and happiness, and influences our purchasing decisions 1. However, it is up to us as consumers to be aware of the messages that advertisers are trying to convey and to make informed decisions about the products and services we choose to buy.",
                        "3, In conclusion, advertising has become an integral part of our daily lives, and while some may argue that it has become too commonplace, it is ultimately up to us as consumers to be aware of the messages that advertisers are trying to convey and to make informed decisions about the products and services we choose to buy."
                    ])
                    conditionsDependsOnUserSpeech(1)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Why do companies advertise?");
                    converstionSteps--;
                }




            } else if (converstionSteps == 4) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Is advertising becoming too commonplace?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,  Is advertising becoming too commonplace?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/baically/gi) ||
                    converstionStepsText.match(/may/gi) || converstionStepsText.match(/becoming/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/advertis/gi) || converstionStepsText.match(/brand/gi) ||
                    converstionStepsText.match(/would/gi) || converstionStepsText.match(/service/gi) ||
                    converstionStepsText.match(/commonplace/gi) || converstionStepsText.match(/people/gi) ||
                    converstionStepsText.match(/product/gi) || converstionStepsText.match(/might /gi) ||
                    converstionStepsText.match(/companies/gi) || converstionStepsText.match(/Because/gi) ||
                    converstionStepsText.match(/attention/gi) || converstionStepsText.match(/powerful/gi) ||
                    converstionStepsText.match(/customer/gi) || converstionStepsText.match(/placement/gi) ||
                    converstionStepsText.match(/important/gi) || converstionStepsText.match(/multiple/gi) ||
                    converstionStepsText.match(/reason/gi) || converstionStepsText.match(/sale/gi) ||
                    converstionStepsText.match(/actually/gi) || converstionStepsText.match(/point/gi) ||
                    converstionStepsText.match(/agree /gi) || converstionStepsText.match(/increase/gi) ||
                    converstionStepsText.match(/awareness/gi)
                ) {
                    await playScript("Should advertising be regulated?");
                    setSampleAns([" I think yes, Advertising should be regulated to prevent the spread of false advertisements about products and to establish laws to regulate advertising and not to lie about it1. Positive experiences in some countries and among international organizations prove that advertising can be regulated for the benefit of everyone involved2. Advertising regulation is complex and happens on many levels in nearly all countries2."])
                    conditionsDependsOnUserSpeech(2)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Is advertising becoming too commonplace?");
                    converstionSteps--;
                }




            }
            else if (converstionSteps == 5) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Should advertising be regulated?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,  Should advertising be regulated?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/baically/gi) ||
                    converstionStepsText.match(/may/gi) || converstionStepsText.match(/becoming/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/advertis/gi) || converstionStepsText.match(/brand/gi) ||
                    converstionStepsText.match(/would/gi) || converstionStepsText.match(/regulate/gi) ||
                    converstionStepsText.match(/need/gi) || converstionStepsText.match(/Should/gi) ||
                    converstionStepsText.match(/economy/gi) || converstionStepsText.match(/might /gi) ||
                    converstionStepsText.match(/companies/gi) || converstionStepsText.match(/Because/gi) ||
                    converstionStepsText.match(/spending/gi) || converstionStepsText.match(/control/gi) ||
                    converstionStepsText.match(/way/gi) || converstionStepsText.match(/placement/gi) ||
                    converstionStepsText.match(/important/gi) || converstionStepsText.match(/enterprise/gi) ||
                    converstionStepsText.match(/reason/gi) || converstionStepsText.match(/across/gi) ||
                    converstionStepsText.match(/actually/gi) || converstionStepsText.match(/point/gi) ||
                    converstionStepsText.match(/agree /gi) || converstionStepsText.match(/increase/gi) ||
                    converstionStepsText.match(/awareness/gi) ||
                    converstionStepsText.match(/significant/gi) || converstionStepsText.match(/platform/gi) ||
                    converstionStepsText.match(/ensure/gi) || converstionStepsText.match(/truthful/gi)
                ) {
                    await playScript("Alright, is celebrity endorsement a good or a bad thing?");
                    setSampleAns([" I think i can be good. Celebrity endorsement can be effectively used as a promotional strategy12. It can help reach new audiences, increase brand awareness, generate excitement, and improve brand recognition2. However, there are risks associated with using celebrities for endorsements. These include: *Images change. Celebrities make mistakes. And when they do, they can affect the brands they endorse.*Celebrities become overexposed. When a celebrity works with so many companies, the celebrity’s credibility may suffer.*Celebrities can overshadow brands. Consumers may focus on the celebrity, not the product3."])
                    conditionsDependsOnUserSpeech(3)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Should advertising be regulated?");
                    converstionSteps--;
                }




            } else if (converstionSteps == 6) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Is celebrity endorsement a good or a bad thing?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating, Is celebrity endorsement a good or a bad thing?");
                    converstionSteps--;
                }
                else if (

                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/baically/gi) ||
                    converstionStepsText.match(/may/gi) || converstionStepsText.match(/becoming/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/celebrity/gi) || converstionStepsText.match(/endorsement/gi) ||
                    converstionStepsText.match(/would/gi) || converstionStepsText.match(/good/gi) ||
                    converstionStepsText.match(/bad/gi) || converstionStepsText.match(/Should/gi) ||
                    converstionStepsText.match(/economy/gi) || converstionStepsText.match(/might/gi) ||
                    converstionStepsText.match(/company/gi) || converstionStepsText.match(/Because/gi) ||
                    converstionStepsText.match(/believe/gi) || converstionStepsText.match(/control/gi) ||
                    converstionStepsText.match(/way/gi) || converstionStepsText.match(/Celebrity/gi) ||
                    converstionStepsText.match(/important/gi) || converstionStepsText.match(/enterprise/gi) ||
                    converstionStepsText.match(/reason/gi) || converstionStepsText.match(/across/gi) ||
                    converstionStepsText.match(/awareness/gi) ||
                    converstionStepsText.match(/actually/gi) ||
                    converstionStepsText.match(/agree /gi) || converstionStepsText.match(/increase/gi) ||
                    converstionStepsText.match(/significant/gi) || converstionStepsText.match(/platform/gi)

                ) {
                    await playScript("Have you ever found yourself buying something? Because a celebrity promoted it.");
                    setSampleAns([" No, but I think Twilight was guilty of subliminal messaging. I heard about it by chance when looking up something else on Wikipedia (I get sidetracked very easily), and then kept hearing references to it everywhere for about 3 weeks, before buying the books. I actually liked it, surprisingly. Plus, this was all long before the film came out so it wasn't even movie promotion.", "2, Only One time. I was a kid. I saw a commercial on tv for a thing called POX or something of the sort. They were like these little devices that had creatures that you would fight with other people who had the device. The commercial made them look awesome with a 3D battle and all. When I actually got it, it was like a 2d little piece of trash that reminded me of the earliest tomagachi things."])
                    conditionsDependsOnUserSpeech(4)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Is celebrity endorsement a good or a bad thing?");
                    converstionSteps--;
                }




            } else if (converstionSteps == 7) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Have you ever found yourself buying something. Because a celebrity promoted it.");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,  Have you ever found yourself buying something. Because a celebrity promoted it.");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/baically/gi) ||
                    converstionStepsText.match(/have/gi) || converstionStepsText.match(/found/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/find/gi) || converstionStepsText.match(/celebrity/gi) ||
                    converstionStepsText.match(/would/gi) || converstionStepsText.match(/good/gi) ||
                    converstionStepsText.match(/buy/gi) || converstionStepsText.match(/Promote/gi) ||
                    converstionStepsText.match(/economy/gi) || converstionStepsText.match(/might/gi) ||
                    converstionStepsText.match(/something/gi) || converstionStepsText.match(/Because/gi) ||
                    converstionStepsText.match(/believe/gi) || converstionStepsText.match(/control/gi) ||
                    converstionStepsText.match(/to be/gi) || converstionStepsText.match(/Celebrity/gi) ||
                    converstionStepsText.match(/important/gi) || converstionStepsText.match(/Idea/gi) ||
                    converstionStepsText.match(/market/gi) || converstionStepsText.match(/across/gi) ||
                    converstionStepsText.match(/awareness/gi) ||
                    converstionStepsText.match(/actually/gi) ||
                    converstionStepsText.match(/preference/gi) || converstionStepsText.match(/increase/gi) ||
                    converstionStepsText.match(/significant/gi) || converstionStepsText.match(/platform/gi)
                ) {
                    await playScript("Okay, and what celebrity might that be?")
                    setSampleAns([" Oprah Winfrey’s remarkable career as a media mogul and philanthropist has showcased her exceptional leadership skills. Her ability to connect with people from diverse backgrounds and address pressing social issues could translate into effective governance. Winfrey’s compassionate nature and dedication to empowering individuals make her a potential candidate for the presidency. Her experience advocating for education, healthcare, and women’s rights could shape policies that benefit the nation."])
                    conditionsDependsOnUserSpeech(5)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Have you ever found yourself buying something. Because a celebrity promoted it.");
                    converstionSteps--;
                }




            } else if (converstionSteps == 8) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("what celebrity might that be?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,  Have you ever found yourself buying something. what celebrity might that be?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/celebrity/gi) || converstionStepsText.match(/might/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/baically/gi) ||
                    converstionStepsText.match(/may/gi) || converstionStepsText.match(/found/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/would/gi) || converstionStepsText.match(/will/gi) ||
                    converstionStepsText.match(/could/gi) || converstionStepsText.match(/good/gi) ||
                    converstionStepsText.match(/some/gi) || converstionStepsText.match(/model/gi) ||
                    converstionStepsText.match(/remember/gi) || converstionStepsText.match(/industrie/gi) ||
                    converstionStepsText.match(/model/gi) || converstionStepsText.match(/Because/gi) ||
                    converstionStepsText.match(/believe/gi) || converstionStepsText.match(/control/gi) ||
                    converstionStepsText.match(/to be/gi) || converstionStepsText.match(/increase/gi) ||
                    converstionStepsText.match(/significant/gi) || converstionStepsText.match(/platform/gi)
                ) {
                    await playScript("Okay. That was about section 3. Thanks.");
                    conditionsDependsOnUserSpeech(6)
                    await sendSpeakingtextToBackend(recordedText);
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. what celebrity might that be?");
                    converstionSteps--;
                }



            }

        }

        console.log("converstionStepsText");
        console.log(converstionStepsText);
        converstionStepsText = "";


    }


    // test-17-Sections---------------------------------
    async function Test17Sec1() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            if (!userSpeakingTestNo) {
                await playScript(
                    "Hello and welcome to the IELTS speaking portion of the test. Jone is my name. & For this portion of the exam, I will serve as your examiner. We are carrying out this. Would you kindly tell me your entire name?"
                );
                setSampleAns([" Simply you can say your full name. As like my name is Jone dow.You can call me Jone"])
            } else {
                await playScript("Are you ready to take the test then?")
                setSampleAns([" Simply you can say the positive answer. As like Yes i am Ready to give the test. ", "2, Yes, I am reay.You can proceed the test"])
            }

        }
        converstionSteps++;
        if (converstionStepsText != '') {
            // if (converstionStepsText.length < 10) {
            //     await smallTalkError();
            // }

            // else if (converstionStepsText.match('repeat') || converstionStepsText.match(" understand")) {
            //     await playScript(
            //         "Ok , I am repeating.");
            //     converstionSteps--;
            // }
            // if (converstionSteps == 0) {
            //     await playScript(
            //         "Welcome to the speaking portion of the ielts exam.  My name is adrian & I will be your examiner for this part of the test. I will give you instructions for each of the parts. What is your full name?"
            //     );
            // }

            if (!userSpeakingTestNo) {
                if (converstionSteps == 1) {
                    await playScript(
                        "I'll start your exam now. What's your full name, please?"
                    );
                } else if (converstionSteps == 2) {
                    if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating, What's your full name, please?");
                        converstionSteps--;
                    }
                    else if (converstionStepsText.match("name") || converstionStepsText.match("call")) {
                        if (converstionStepsText.match("call")) {
                            await playScript(
                                "So, for this section. I'm going to ask some general questions. Where do you live?"
                            );
                            setSampleAns([" Simply you can say your area/ or place where you are live in.As like I am living in Dhaka,Bangladesh", "2, I live in kolkata,India"])
                            localStorage.setItem("SpeakingTestNo", testNo);
                            conditionsDependsOnUserSpeech(0)
                        } else {
                            await playScript("Alright. What can I call you?");
                            setSampleAns(["You can simply say.You can call me Jone"])
                            converstionSteps--;
                        }
                    }
                    else {
                        await playScript("Alright, what's your name?");
                        setSampleAns(["My name is jone dow . You can call me Jone"])
                        converstionSteps--;
                    }

                } else if (converstionSteps == 3) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError(" Where do you live? ");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating,  Where do you live? ");
                        converstionSteps--;
                    }
                    else if (converstionStepsText.match(/live/gi) || converstionStepsText.match(/leaving/gi) ||
                        converstionStepsText.match(/in/gi) || converstionStepsText.match(/at/gi) ||
                        converstionStepsText.match(/from/gi) || converstionStepsText.match(/i am living/gi)) {
                        await playScript("Do you have any hobbies?");
                        setSampleAns([" Yes i do have a couple of different hobbies i really like to cook and i liketo saw last week i made a nice dress for my best friendIf you enjoy doing anything or learning about anything in your free time, talk about that. Even if it’s something simple like shopping, hanging out with friends, eating good food, watching TV, or browsing social media. Any answer is fine. You just have to talk about it using good English. In part one, you need to focus "])
                        conditionsDependsOnUserSpeech(1)
                    } else {
                        await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Where do you live? ");
                        converstionSteps--;
                    }

                }
            } else {
                if (converstionSteps == 1) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError("Are you ready to take the test then? ");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating,  Are you ready to take the test then? ");
                        converstionSteps--;
                    }
                    else {
                        await playScript("So, Are you happy today?");
                        setSampleAns([" Simply can say Yes, I am happy or as you are feeling now."])
                    }
                }
                if (converstionSteps == 2) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError("Are you happy today?");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating,  Are you happy today?");
                        converstionSteps--;
                    }
                    else {
                        await playScript("Okay. Do you watch movies?");
                        setSampleAns([" Yes , i love to watch movies", "2, generally i don't like movies"]);
                        conditionsDependsOnUserSpeech(0)
                    }
                }
                if (converstionSteps == 3) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError("Do you watch movies?");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating,  Do you watch movies?");
                        converstionSteps--;
                    }
                    else {
                        await playScript("Do you have any hobbies?");
                        setSampleAns([" Yes i do have a couple of different hobbies i really like to cook and i liketo saw last week i made a nice dress for my best friendIf you enjoy doing anything or learning about anything in your free time, talk about that. Even if it’s something simple like shopping, hanging out with friends, eating good food, watching TV, or browsing social media. Any answer is fine. You just have to talk about it using good English. In part one, you need to focus "])
                        conditionsDependsOnUserSpeech(1)
                    }
                }
            }

            if (converstionSteps == 4) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Do you have any hobbies?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating, Do you have any hobbies?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/have/gi) ||
                    converstionStepsText.match(/hobbies/gi) || converstionStepsText.match(/hobby/gi) ||
                    converstionStepsText.match(/different/gi) || converstionStepsText.match(/enjoy/gi) ||
                    converstionStepsText.match(/doing/gi) || converstionStepsText.match(/shopping/gi) ||
                    converstionStepsText.match(/eat/gi) || converstionStepsText.match(/food/gi) ||
                    converstionStepsText.match(/using/gi) || converstionStepsText.match(/reading/gi) ||
                    converstionStepsText.match(/learn/gi) || converstionStepsText.match(/going/gi)

                ) {
                    await playScript("Let's talk about numbers. Do you have a favorite number?");
                    setSampleAns([" I don’t have personal preferences or consciousness, so I don’t have a favorite number. However, there are many interesting numbers in mathematics. For example, π (pi) is a fascinating number that represents the ratio of a circle’s circumference to its diameter. It is approximately equal to 3.14159. Another interesting number is e, Euler’s number, which is an important mathematical constant that arises in many areas of mathematics and science. It is approximately equal to 2.71828. These numbers have unique properties and are widely used in various mathematical formulas and equations.", "2,  uh yes i do the number i favor most is number nine because it has brought me luck over the years in fact on the ninth of the last month i got a good news that i got a scholarship"])
                    conditionsDependsOnUserSpeech(2)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you have any hobbies?");
                    converstionSteps--;
                }


            } else if (converstionSteps == 5) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Do you have a favorite number?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating, Do you have a favorite number?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/have/gi) ||
                    converstionStepsText.match(/number/gi) || converstionStepsText.match(/favorite/gi) ||
                    converstionStepsText.match(/different/gi) || converstionStepsText.match(/because /gi) ||
                    converstionStepsText.match(/0-9/gi) || converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/chose/gi) || converstionStepsText.match(/variety/gi)
                ) {
                    await playScript("What are some important numbers for you to remember?");
                    setSampleAns([" there are some crucial numbers that we have to remember like our home address and our phone number as well as our social security number i use this quite often in society like a few weeks ago i had to use this for to register for this test", "2, You have so many important numbers to remember—your bank account PIN, your kids' phone numbers, and your alarm system code, just to name a few."])
                    conditionsDependsOnUserSpeech(3)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Do you have a favorite number?");
                    converstionSteps--;
                }



            } else if (converstionSteps == 6) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("What are some important numbers for you to remember?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating, What are some important numbers for you to remember?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/have/gi) ||
                    converstionStepsText.match(/number/gi) || converstionStepsText.match(/important/gi) ||
                    converstionStepsText.match(/different/gi) || converstionStepsText.match(/because/gi) ||
                    converstionStepsText.match(/0-9/gi) || converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/remember/gi) || converstionStepsText.match(/variety/gi) ||
                    converstionStepsText.match(/crucial/gi) || converstionStepsText.match(/phone/gi) ||
                    converstionStepsText.match(/address/gi) || converstionStepsText.match(/register/gi) ||
                    converstionStepsText.match(/account/gi) || converstionStepsText.match(/contact/gi) ||
                    converstionStepsText.match(/Credit/gi) || converstionStepsText.match(/Birthday/gi)
                ) {
                    await playScript("Okay. How do numbers affect our lives?");
                    setSampleAns([" :I suppose that our numbers have lots of impact on people's everyday activities. We use the numbers to quantify the world around us like measuring time also for communication, like telling a person our age ."])
                    conditionsDependsOnUserSpeech(4)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. What are some important numbers for you to remember?");
                    converstionSteps--;
                }



            }
            else if (converstionSteps == 7) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("How do numbers affect our lives?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating, How do numbers affect our lives?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/suppose/gi) ||
                    converstionStepsText.match(/number/gi) || converstionStepsText.match(/important/gi) ||
                    converstionStepsText.match(/different/gi) || converstionStepsText.match(/because/gi) ||
                    converstionStepsText.match(/0-9/gi) || converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/use/gi) || converstionStepsText.match(/variety/gi) ||
                    converstionStepsText.match(/quantify/gi) || converstionStepsText.match(/Develop/gi) ||
                    converstionStepsText.match(/Explain/gi) || converstionStepsText.match(/Increasing/gi) ||
                    converstionStepsText.match(/Making/gi) || converstionStepsText.match(/know/gi)

                ) {
                    await playScript("If you could choose two lucky numbers, what would they be?");
                    setSampleAns(["  well i think the number nine would be the one and another would be 18. I'm not sure why but I always like these numbers. If you want to try this try with two numbers like 32,33 – the odds will be in your favor. You can also try another sequence like 9 and 18 (9×2) or the Fibonacci sequence –   2, 3, 5, 8, 13, 2 34.", "2, In number theory, a lucky number is a natural number in a set which is generated by a certain sieve. This sieve is similar to the Sieve of Eratosthenes that generates the primes, but it eliminates n… Their lucky numbers numerology is number 7 which especially holds significance, and doing anything of importance on the 7th day of a month might be a good idea.  1 The number 8 is an extremely lucky number in Chinese numerology. It is the closest thing to the West’s “lucky number 7.” It represents prosperity and completeness."])
                    conditionsDependsOnUserSpeech(5)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. How do numbers affect our lives?");
                    converstionSteps--;
                }



            }


            else if (converstionSteps == 8) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("If you could choose two lucky numbers, what would they be?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,If you could choose two lucky numbers, what would they be?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/suppose/gi) ||
                    converstionStepsText.match(/number/gi) || converstionStepsText.match(/important/gi) ||
                    converstionStepsText.match(/different/gi) || converstionStepsText.match(/because/gi) ||
                    converstionStepsText.match(/0-9/gi) || converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/use/gi) || converstionStepsText.match(/would/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/Develop/gi) ||
                    converstionStepsText.match(/Explain/gi) || converstionStepsText.match(/will/gi) ||
                    converstionStepsText.match(/Making/gi) || converstionStepsText.match(/will/gi) ||
                    converstionStepsText.match(/alway/gi) || converstionStepsText.match(/Fibonacci/gi) ||
                    converstionStepsText.match(/sequence/gi)


                ) {
                    await playScript("Okay. Have you ever forgotten an important number?");
                    setSampleAns([" Yes, it’s common to forget important numbers. According to a Harvard Health Publishing article, forgetfulness is a normal part of aging and can be caused by various factors such as stress, lack of sleep, and certain medications. The article lists seven types of normal memory problems, including transience, absentmindedness, blocking, misattribution, suggestibility, bias, and persistence"])
                    conditionsDependsOnUserSpeech(6)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. If you could choose two lucky numbers, what would they be?");

                    converstionSteps--;
                }



            }

            else if (converstionSteps == 9) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Have you ever forgotten an important number?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,Have you ever forgotten an important number?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/suppose/gi) ||
                    converstionStepsText.match(/number/gi) || converstionStepsText.match(/important/gi) ||
                    converstionStepsText.match(/different/gi) || converstionStepsText.match(/because/gi) ||
                    converstionStepsText.match(/0-9/gi) || converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/use/gi) || converstionStepsText.match(/have/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/forgot/gi) ||
                    converstionStepsText.match(/forget/gi) || converstionStepsText.match(/embarrass/gi) ||
                    converstionStepsText.match(/actually/gi) || converstionStepsText.match(/common/gi) ||
                    converstionStepsText.match(/alway/gi) || converstionStepsText.match(/various/gi) ||
                    converstionStepsText.match(/sequence/gi) ||
                    converstionStepsText.match(/stress/gi) || converstionStepsText.match(/normal/gi) ||
                    converstionStepsText.match(/problem/gi)

                ) {
                    await playScript("Okay. That was about section 1. Thanks.");
                    conditionsDependsOnUserSpeech(7)
                    await sendSpeakingtextToBackend(recordedText);
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Have you ever forgotten an important number?");
                    converstionSteps--;
                }





            }

        }

        console.log("converstionStepsText");
        console.log(converstionStepsText);
        converstionStepsText = "";
    }

    async function Test17Sec3() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            await playScript(
                "My name is Adrian. I will be your examiner for this part of the test for part three. Are you comfortable?"
            );
            setSampleAns([" Yes i am comfortable you can procced the test please"])
        }
        converstionSteps++;
        if (converstionStepsText != '') {
            // if (converstionStepsText.length < 10) {
            //     await smallTalkError();
            // }
            // if (converstionStepsText.match('repeat') || converstionStepsText.match("don't understand")) {
            //     await playScript(
            //         "Ok , I am repeating.");
            //     converstionSteps--;
            // }
            // if (converstionSteps == 0) {
            //     await playScript(

            //         " My name is Adrian, I will be your examiner for this part of the test for this part three. Are you confortable?"
            //     );
            // }
            if (converstionSteps == 1) {
                await playScript("sorry can you repeat that please");
                setSampleAns([" You can just simply repeated theanswer that you can said just time ago"])
            }
            else if (converstionSteps == 2) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Are you ready?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,Are you ready?");
                    converstionSteps--;
                }
                else {
                    await playScript("Let's talk about helping in the community. What are ways that people can help their communities be better places?");
                    setSampleAns([" there are so many different ways which people can adapt to assist their communities like i just mentioned like a soup kitchen also they can organize some cleanup events like picking up garbage on the streets also volunteering at a local hospital i used to volunteer at a local hospital a few hours to help elderly with the meal time and it was very rewarding "]);
                    conditionsDependsOnUserSpeech(0)
                }
            }
            else if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("What are ways that people can help their communities be better places?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,What are ways that people can help their communities be better places?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/way/gi) || converstionStepsText.match(/people/gi) ||
                    converstionStepsText.match(/positive/gi) || converstionStepsText.match(/teamwork/gi) ||
                    converstionStepsText.match(/communit/gi) || converstionStepsText.match(/place/gi) ||
                    converstionStepsText.match(/better/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/different/gi) || converstionStepsText.match(/adapt/gi) ||
                    converstionStepsText.match(/can/gi) || converstionStepsText.match(/will/gi) ||
                    converstionStepsText.match(/would/gi) || converstionStepsText.match(/organize/gi) ||
                    converstionStepsText.match(/Take/gi) || converstionStepsText.match(/Start/gi) ||
                    converstionStepsText.match(/Be/gi) || converstionStepsText.match(/Support/gi) ||
                    converstionStepsText.match(/compost/gi) || converstionStepsText.match(/Donate/gi) ||
                    converstionStepsText.match(/charity/gi)

                ) {
                    await playScript("Ok . How much funding would you need for this event to be a success?");
                    setSampleAns([" To get funding for your charity event, you can explore several options: *Recurring Donations: Encourage your supporters to make regular donations to your organization. *This can provide a steady stream of income to support your cause1.*Grants: Research and apply for grants that align with your mission and programs. Many *organizations offer grants to support non profit initiatives1.*Fundraising Events: Organize events such as galas, auctions, or charity runs to raise funds. *These events can attract donors and sponsors who are passionate about your cause12.*Corporate Sponsorships: Reach out to local businesses and corporations for potential *sponsorships. They may be interested in supporting your event in exchange for exposure and *positive brand association34.*Online Fundraising Platforms: Utilize online platforms that specialize in nonprofit *fundraising. These platforms provide tools to create donation forms, fundraising pages, and *manage donor relationships1.*Remember, it’s important to plan ahead and evaluate which funding sources align with your organization’s mission, vision, and values1. Good luck with your charity event! 🌟"]);
                    conditionsDependsOnUserSpeech(1)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  What are ways that people can help their communities be better places?");
                    converstionSteps--;
                }



            }
            else if (converstionSteps == 4) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" How much funding would you need for this event to be a success?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating, How much funding would you need for this event to be a success?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/fund/gi) || converstionStepsText.match(/would/gi) ||
                    converstionStepsText.match(/will/gi) || converstionStepsText.match(/need/gi) ||
                    converstionStepsText.match(/event/gi) || converstionStepsText.match(/success/gi) ||
                    converstionStepsText.match(/may/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/different/gi) || converstionStepsText.match(/actual/gi) ||
                    converstionStepsText.match(/might/gi) || converstionStepsText.match(/estimate/gi) ||
                    converstionStepsText.match(/Donation/gi) || converstionStepsText.match(/Research/gi) ||
                    converstionStepsText.match(/Take/gi) || converstionStepsText.match(/Start/gi) ||
                    converstionStepsText.match(/positive /gi) || converstionStepsText.match(/Support/gi) ||
                    converstionStepsText.match(/program/gi) || converstionStepsText.match(/Donate/gi) ||
                    converstionStepsText.match(/charity/gi)
                ) {
                    await playScript("OK . Some individuals feel that people are less involved with their communities than 20 years ago. Do you agree with this?");
                    setSampleAns([" :i don't think that i agree with this statement but i think this may be the case recently due to social distancing but i think in bihar the people are as selfless as before and dedicate considerable time to their local neighborhoods.", "2, Among those who have lived in their community for more than a decade, 69% say they feel very or somewhat attached to their community. The shares are significantly lower among those who have lived in their community six to 10 years (54%) or less than six years (44%). Some people say that people are less involved with their communities than 20 years ago. It is difficult to measure community involvement, but there are several factors that may contribute to this perception. For example, the rise of technology and social media has changed the way people interact and communicate with each other. People may spend more time online and less time participating in local community activities. Additionally, changes in work and family dynamics may also play a role. With longer working hours and increased demands on personal time, people may have less time and energy to devote to community involvement. However, it is important to note that community involvement can take many forms, and people may still be engaged in their communities in different ways. Some people may volunteer their time or donate to local charities, while others may participate in online communities or advocate for causes they care about. Overall, community involvement is a complex issue, and it is difficult to make generalizations about trends over time."]);
                    conditionsDependsOnUserSpeech(2)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  How much funding would you need for this event to be a success?");
                    converstionSteps--;
                }





            } else if (converstionSteps == 5) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Some individuals feel that people are less involved with their communities than 20 years ago. Do you agree with this?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating, Some individuals feel that people are less involved with their communities than 20 years ago. Do you agree with this?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/actually/gi) ||
                    converstionStepsText.match(/generally/gi) || converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/individual/gi) || converstionStepsText.match(/feel/gi) ||
                    converstionStepsText.match(/less/gi) || converstionStepsText.match(/involve/gi) ||
                    converstionStepsText.match(/agree/gi) || converstionStepsText.match(/communit/gi) ||
                    converstionStepsText.match(/statement/gi) || converstionStepsText.match(/Research/gi) ||
                    converstionStepsText.match(/recent/gi) || converstionStepsText.match(/Among/gi) ||
                    converstionStepsText.match(/difficult /gi) || converstionStepsText.match(/Support/gi) ||
                    converstionStepsText.match(/program/gi) || converstionStepsText.match(/Donate/gi) ||
                    converstionStepsText.match(/charity/gi)
                ) {
                    await playScript("So , how can governments motivate citizens? To be more helpful in their communities?");
                    setSampleAns([" authorities can run various campaigns like ads on social media and on tv to encourage people to contribute more also they can provide incentives like scholarships or grants to the students who contribute the most to help their communities thrive ", "2, Local governments can remedy this by promoting these opportunities on social media channels, creating a calendar on municipal websites, or even putting together a monthly newsletter of upcoming opportunities for citizen participation. Be sure to include city and school board meetings open to the public! Have the right meeting management software Governments can motivate citizens to be more helpful in their communities by using nudges. Nudges are small changes to the context in which decisions are made, without meaningfully changing financial incentives. They can be a cost-effective way for governments to get citizens to do the right thing 1. For instance, local governments can post contact numbers and program information on the community’s website, follow local government offices’ social media channels and share posts about upcoming events on the community’s social media channels or mobile app, and include city event, program, and contact information in their newsletter"]);
                    conditionsDependsOnUserSpeech(3)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Some individuals feel that people are less involved with their communities than 20 years ago. Do you agree with this?");
                    converstionSteps--;
                }





            } else if (converstionSteps == 6) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("How can governments motivate citizens? To be more helpful in their communities?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,How can governments motivate citizens? To be more helpful in their communities?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/actually/gi) ||
                    converstionStepsText.match(/generally/gi) || converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/individual/gi) || converstionStepsText.match(/government/gi) ||
                    converstionStepsText.match(/local/gi) || converstionStepsText.match(/motivate/gi) ||
                    converstionStepsText.match(/citizen/gi) || converstionStepsText.match(/To be/gi) ||
                    converstionStepsText.match(/agree/gi) || converstionStepsText.match(/communit/gi) ||
                    converstionStepsText.match(/authorit/gi) || converstionStepsText.match(/various/gi) ||
                    converstionStepsText.match(/encourage /gi) || converstionStepsText.match(/Support/gi) ||
                    converstionStepsText.match(/program/gi) || converstionStepsText.match(/Donate/gi) ||
                    converstionStepsText.match(/charity/gi) ||
                    converstionStepsText.match(/opportunit/gi)
                ) {
                    await playScript("Okay. Let's talk about charities. Many people give lots of money to charities. Is this always good?")
                    setSampleAns([" although it is good to donate money for a good cause like helping environment and animals but i don't think it is always good to spend lots of money to charities all the time but i think it is more important to be personally involved and volunteer and this is often much more effective that funds are not spent on administration and advertising ", "2 , What they found is that for more than 85 percent of charitable donations, people gave because someone asked them to. Yet that doesn’t solve the question of how donors who are approached by many causes choose which ones they will support. Most people give to causes that affirm important values, including compassion for those in need."])
                    conditionsDependsOnUserSpeech(4)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  How can governments motivate citizens? To be more helpful in their communities?");
                    converstionSteps--;
                }





            }
            else if (converstionSteps == 7) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Many people give lots of money to charities. Is this always good?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,Many people give lots of money to charities. Is this always good?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/actually/gi) ||
                    converstionStepsText.match(/generally/gi) || converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/good/gi) || converstionStepsText.match(/bad/gi) ||
                    converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                    converstionStepsText.match(/lot/gi) || converstionStepsText.match(/To be/gi) ||
                    converstionStepsText.match(/agree/gi) || converstionStepsText.match(/communit/gi) ||
                    converstionStepsText.match(/money/gi) || converstionStepsText.match(/charitie/gi) ||
                    converstionStepsText.match(/encourage /gi) || converstionStepsText.match(/Support/gi) ||
                    converstionStepsText.match(/program/gi) || converstionStepsText.match(/Donate/gi) ||
                    converstionStepsText.match(/charity/gi) ||
                    converstionStepsText.match(/opportunit/gi) ||
                    converstionStepsText.match(/because/gi) || converstionStepsText.match(/solution/gi) ||
                    converstionStepsText.match(/Social/gi) || converstionStepsText.match(/impact/gi)
                ) {
                    await playScript("What are some different kinds of charities, and how do they help society?");
                    setSampleAns([" :that's a big question because there are so many different charities in the world today there are so many charities that help sick children animals and the environment like unicef world wildlife fund and red cross these help society to improve the quality of their life and they provide help and jobs to many individuals nowadays ",
                        `2, There are different types of charities, including12:
                  Food banks and other food distribution charities
                  Children’s and family services
                  Homeless services
                  Rescue missions
                  Social services
                  Charitable organizations, religious or church organizations, private foundations and political organizations are some of the nonprofit exempt statuses that exist Charities are organizations that help people or communities in need. They are usually non-profit and rely on donations from individuals, corporations, foundations, and governments to fund their activities1. There are various types of charities, each with its own objectives and programs. Here are some common types of charities and how they contribute to society:
                  Environmental Charities: 
                  Children’s Charities: 
                  Human Rights Charities: 
                  Sports-Based Charities:.
                  Cultural and Arts-Based Charities:.
                  Health Charities: 
                  Disaster Relief Charities: 
                  `
                    ])
                    conditionsDependsOnUserSpeech(5)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.   Many people give lots of money to charities. Is this always good?");
                    converstionSteps--;
                }





            } else if (converstionSteps == 8) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("What are some different kinds of charities, and how do they help society?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,What are some different kinds of charities, and how do they help society?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/some/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/different/gi) || converstionStepsText.match(/actually/gi) ||
                    converstionStepsText.match(/generally/gi) || converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/charities/gi) || converstionStepsText.match(/help/gi) ||
                    converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                    converstionStepsText.match(/society/gi) || converstionStepsText.match(/different/gi) ||
                    converstionStepsText.match(/bank/gi) || converstionStepsText.match(/communit/gi) ||
                    converstionStepsText.match(/service/gi) || converstionStepsText.match(/Homeless/gi) ||
                    converstionStepsText.match(/Rescue/gi) || converstionStepsText.match(/Support/gi) ||
                    converstionStepsText.match(/Social/gi) || converstionStepsText.match(/Donate/gi) ||
                    converstionStepsText.match(/charity/gi) ||
                    converstionStepsText.match(/religious/gi) ||
                    converstionStepsText.match(/Environmental/gi) || converstionStepsText.match(/Human/gi) ||
                    converstionStepsText.match(/Health/gi) || converstionStepsText.match(/Relief/gi)
                ) {
                    await playScript("Okay. Will there be new kinds of charities in the future? That does not exist today.")
                    setSampleAns([` :that's a tough prediction but if i have to i would answer yes as we know future always brings some sort of nobility and i don't think that charities would be any different maybe in the far future i think there would be some charities that will help save the planet moons and stars and i do think that it requires quite an imagination .`, `2 , It is likely that new kinds of charities will emerge in the future as the world changes and new challenges arise. For instance, the Charities Aid Foundation (CAF) has identified several trends that could impact the charity landscape in 2022 1. One of these trends is the sustained changes to funder behavior, which could lead to new types of charities emerging. Additionally, technology is constantly evolving, and it is possible that new charities will emerge to address issues related to technology 2.However, it is difficult to predict exactly what types of charities will emerge in the future. Charities are often created in response to specific needs or issues, and these needs and issues can be unpredictable. Nonetheless, it is likely that new charities will continue to emerge as people seek to address new challenges and make a positive impact on the world.`])
                    conditionsDependsOnUserSpeech(6)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. What are some different kinds of charities, and how do they help society?");
                    converstionSteps--;
                }



            } else if (converstionSteps == 9) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Will there be new kinds of charities in the future? That does not exist today.");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,Will there be new kinds of charities in the future? That does not exist today.");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/not/gi) || converstionStepsText.match(/actually/gi) ||
                    converstionStepsText.match(/generally/gi) || converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/charities/gi) || converstionStepsText.match(/help/gi) ||
                    converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                    converstionStepsText.match(/society/gi) || converstionStepsText.match(/different/gi) ||
                    converstionStepsText.match(/new/gi) || converstionStepsText.match(/communit/gi) ||
                    converstionStepsText.match(/kind/gi) || converstionStepsText.match(/future/gi) ||
                    converstionStepsText.match(/exist/gi) || converstionStepsText.match(/Support/gi) ||
                    converstionStepsText.match(/Social/gi) || converstionStepsText.match(/answer/gi) ||
                    converstionStepsText.match(/bring/gi) || converstionStepsText.match(/may/gi) ||
                    converstionStepsText.match(/might/gi) || converstionStepsText.match(/imagination/gi)
                ) {
                    await playScript("Okay. That was about section 3. Thanks.");
                    conditionsDependsOnUserSpeech(7)
                    await sendSpeakingtextToBackend(recordedText);
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Will there be new kinds of charities in the future? That does not exist today.");
                    converstionSteps--;
                }






            }

        }

        console.log("converstionStepsText");
        console.log(converstionStepsText);
        converstionStepsText = "";


    }


    // test-18-Sections---------------------------------
    async function Test18Sec1() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            if (!userSpeakingTestNo) {
                await playScript(
                    "Hello and welcome to the IELTS speaking portion of the test. Jone is my name. & For this portion of the exam, I will serve as your examiner. We are carrying out this. Would you kindly tell me your entire name?"
                );
                setSampleAns([" Simply you can say your full name. As like my name is Jone dow.You can call me Jone"])
            } else {
                await playScript("Are you ready to take the test then?");
                setSampleAns([" Simply you can say the positive answer. As like Yes i am Ready to give the test. ", "2, Yes, I am reay.You can proceed the test"])
            }

        }

        converstionSteps++;
        if (converstionStepsText != '') {

            if (!userSpeakingTestNo) {
                if (converstionSteps == 1) {
                    await playScript(
                        "I'll start your exam now. What's your full name, please?"
                    );
                    setSampleAns(["You an simply tell your full name . As like I am Mr. JOne Dow . You can call me jone."])
                } else if (converstionSteps == 2) {
                    if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating.  What's your full name, please?");
                        converstionSteps--;
                    }
                    else if (converstionStepsText.match("name") || converstionStepsText.match("call")) {
                        if (converstionStepsText.match("call")) {
                            await playScript(
                                "So, for this section. I'm going to ask some general questions. Where do you live?"
                            );
                            setSampleAns([" Simply you can say your area/ or place where you are live in.As like I am living in Dhaka,Bangladesh", "2, I live in Bangladesh."])
                            localStorage.setItem("SpeakingTestNo", testNo);
                            conditionsDependsOnUserSpeech(0)
                        } else {
                            await playScript("Alright. What can I call you?");
                            setSampleAns(["You can call me Jone or you simply tell your nickname."])
                            converstionSteps--;
                        }
                    }
                    else {
                        await playScript("Alright, what's your name?");
                        setSampleAns(["You an simply tell your full name . As like I am Mr. JOne Dow . You can call me jone."])
                        converstionSteps--;
                    }

                } else if (converstionSteps == 3) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError(" Where do you live? ");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating. Where do you live? ");
                        converstionSteps--;
                    }
                    else if (converstionStepsText.match(/live/gi) || converstionStepsText.match(/leaving/gi) ||
                        converstionStepsText.match(/in/gi) || converstionStepsText.match(/at/gi) ||
                        converstionStepsText.match(/from/gi) || converstionStepsText.match(/i am living/gi)) {
                        await playScript("Okey. Lets talk about Sitting down.Where is your favorite place to sit? ");
                        setSampleAns(["I love to sit in my sofa chair next to the window "]);
                        conditionsDependsOnUserSpeech(1)
                    } else {
                        await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Where do you live? ");
                        converstionSteps--;
                    }

                }
            } else {
                if (converstionSteps == 1) {
                    await playScript("Okey. Are you happy today?");
                    setSampleAns([" Yes, sir i am really happly today. thanks for asking."])
                }
                if (converstionSteps == 2) {
                    if (converstionStepsText.length < 5) {
                        await smallTalkError(" Are you ready? ");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating. Are you ready? ");
                        converstionSteps--;
                    }
                    else {
                        await playScript("Okey. So, What do you think about today's weather?");
                        setSampleAns([`Yeah. this is really nice day & i am felling happy with todays weather`])
                        conditionsDependsOnUserSpeech(0)
                    }
                }
                if (converstionSteps == 3) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError("What do you think about today's weather?");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating.What do you think about today's weather");
                        converstionSteps--;
                    }
                    else {
                        await playScript("Okey. Lets talk about Sitting down. Where is your favorite place to sit? ");
                        setSampleAns(["I love to sit in my sofa chair next to the window"]);
                        conditionsDependsOnUserSpeech(1)
                    }
                }
            }

            if (converstionSteps == 4) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Where is your favorite place to sit?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Where is your favorite place to sit?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/Sit/gi) || converstionStepsText.match(/down/gi) ||
                    converstionStepsText.match(/favorite/gi) || converstionStepsText.match(/place/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/love/gi) ||
                    converstionStepsText.match(/like/gi) || converstionStepsText.match(/sofa/gi) ||
                    converstionStepsText.match(/chair/gi) || converstionStepsText.match(/window/gi)

                ) {
                    await playScript("Okey.  Do you always sit down for a long time?");
                    setSampleAns([`Yes, once I sit down I don’t like to get up frequently.`])
                    conditionsDependsOnUserSpeech(2)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.Where is your favorite place to sit?");
                    converstionSteps--;
                }


            } else if (converstionSteps == 5) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("  Do you always sit down for a long time? ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.  Do you always sit down for a long time? ");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/Do/gi) || converstionStepsText.match(/always/gi) ||
                    converstionStepsText.match(/down/gi) || converstionStepsText.match(/long/gi) ||
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/time/gi) ||
                    converstionStepsText.match(/once/gi) || converstionStepsText.match(/sit/gi) ||
                    converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                    converstionStepsText.match(/get/gi) || converstionStepsText.match(/frequently/gi) ||
                    converstionStepsText.match(/up/gi) || converstionStepsText.match(/chair/gi)
                ) {
                    await playScript("Okey. Do you feel sleepy when you are sitting down?");
                    setSampleAns([`Yes, I feel quite lethargic when I sit down in a comfortable seat.`])
                    conditionsDependsOnUserSpeech(3)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Do you always sit down for a long time?");
                    converstionSteps--;
                }
            } else if (converstionSteps == 6) {

                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Do you feel sleepy when you are sitting down? ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Do you feel sleepy when you are sitting down? ");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/Do/gi) ||
                    converstionStepsText.match(/feel/gi) || converstionStepsText.match(/sleepy/gi) ||
                    converstionStepsText.match(/sit/gi) || converstionStepsText.match(/down/gi) ||
                    converstionStepsText.match(/quite/gi) || converstionStepsText.match(/lethargic/gi) ||
                    converstionStepsText.match(/when/gi) || converstionStepsText.match(/comfortable/gi) ||
                    converstionStepsText.match(/seat/gi)
                ) {
                    await playScript("Okey. When you were a kid, did you usually sit on the floor? ");
                    setSampleAns([`Yes, my mom tells me that I sat a lot on the floor when I was a kid. Infact, we didn’t have a dining  table back then and we used to have our meals while sitting on the floor.   `])
                    conditionsDependsOnUserSpeech(4)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.Do you feel sleepy when you are sitting down? ");
                    converstionSteps--;
                }


            } else if (converstionSteps == 7) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("When you were a kid, did you usually sit on the floor? ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.  When you were a kid, did you usually sit on the floor? ");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/Do/gi) ||
                    converstionStepsText.match(/When/gi) || converstionStepsText.match(/were/gi) ||
                    converstionStepsText.match(/did/gi) || converstionStepsText.match(/usually/gi) ||
                    converstionStepsText.match(/sit/gi) || converstionStepsText.match(/on/gi) ||
                    converstionStepsText.match(/floor/gi) || converstionStepsText.match(/comfortable/gi) ||
                    converstionStepsText.match(/seat/gi) ||
                    converstionStepsText.match(/tell/gi) || converstionStepsText.match(/was/gi) ||
                    converstionStepsText.match(/kid/gi) || converstionStepsText.match(/Infact/gi) ||
                    converstionStepsText.match(/table/gi)
                ) {
                    await playScript("Okey. That was about section 1. Thanks.");
                    await sendSpeakingtextToBackend(recordedText);
                    conditionsDependsOnUserSpeech(5)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. When you were a kid, did you usually sit on the floor? ");
                    converstionSteps--;
                }


            }

        }

        console.log("converstionStepsText");
        console.log(converstionStepsText);
        converstionStepsText = "";
    }

    async function Test18Sec3() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            await playScript(
                " My name is Adrian. I will be your examiner for this part of the test, part three. Are you comfortable?"
            );
            setSampleAns(["Yes, I am comfortable you please proceed the test"])
        }
        converstionSteps++;
        if (converstionStepsText != '') {
            if (converstionSteps == 1) {
                await playScript(
                    "Sorry.... Can you repeat that please"
                );
                setSampleAns([` You can simply repeat your previous answer`])
            } else if (converstionSteps == 2) {
                if (converstionStepsText.length < 5) {
                    await smallTalkError(" I will as you the qustion related of question two. so , Are you ready?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.Are you ready?");
                    converstionSteps--;
                }
                else {
                    await playScript("I am asking you the question related of section 2 . so, Let's talk about Country product .Describe another traditional product from your country (apart from what you spoke about in section 2) ");
                    setSampleAns([`India is a diverse country. There are many traditional products here. We have earthen pots, ceramic  pottery of Jaipur, puppets of Rajasthan, phulkari embroidery of Punjab, hand-knotted carpets of  Srinagar and many more. `])
                    conditionsDependsOnUserSpeech(0)
                }
            }
            else if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Describe another traditional product from your country (apart from what you spoke about) ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.Describe another traditional product from your country (apart from what you spoke about) ");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/traditional/gi) || converstionStepsText.match(/product/gi) ||
                    converstionStepsText.match(/country/gi) || converstionStepsText.match(/from/gi) ||
                    converstionStepsText.match(/diverse/gi) || converstionStepsText.match(/many/gi) ||

                    converstionStepsText.match(/have/gi) || converstionStepsText.match(/earthen/gi) ||
                    converstionStepsText.match(/ceramic/gi) || converstionStepsText.match(/pottery/gi) ||
                    converstionStepsText.match(/embroidery/gi) || converstionStepsText.match(/more/gi) ||
                    converstionStepsText.match(/our/gi) || converstionStepsText.match(/this/gi)

                ) {
                    await playScript(" What are the benefits of traditional products to locals?");
                    setSampleAns([`Traditional products keep the locals in touch with their culture and tradition. They also become a  source of earning, when tourists show interest in these products and buy them. `])
                    conditionsDependsOnUserSpeech(1)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.Describe another traditional product from your country (apart from what you spoke about) ");
                    converstionSteps--;
                }

            } else if (converstionSteps == 4) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" What are the benefits of traditional products to locals?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. What are the benefits of traditional products to locals?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/benefits/gi) || converstionStepsText.match(/traditional/gi) ||
                    converstionStepsText.match(/products/gi) || converstionStepsText.match(/people/gi) ||
                    converstionStepsText.match(/local/gi) || converstionStepsText.match(/touch/gi) ||
                    converstionStepsText.match(/earn/gi) || converstionStepsText.match(/culture/gi) ||

                    converstionStepsText.match(/become/gi) || converstionStepsText.match(/source/gi) ||
                    converstionStepsText.match(/raft/gi) || converstionStepsText.match(/tourist/gi) ||

                    converstionStepsText.match(/interest/gi) || converstionStepsText.match(/buy/gi) || converstionStepsText.match(/etc/gi)
                ) {
                    await playScript("Okey. Do you think the government should help in the promotion of traditional products? ");
                    setSampleAns([`Definitely, it should. If governments promotes traditional products, only then these will remain alive,  otherwise these products will die and so will our culture and tradition. `])
                    conditionsDependsOnUserSpeech(2)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  What are the benefits of traditional products to locals?");
                    converstionSteps--;
                }
            } else if (converstionSteps == 5) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Do you think the government should help in the promotion of traditional products?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Do you think the government should help in the promotion of traditional products?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/government/gi) || converstionStepsText.match(/should/gi) ||

                    converstionStepsText.match(/help/gi) || converstionStepsText.match(/promotion/gi) ||
                    converstionStepsText.match(/traditional/gi) || converstionStepsText.match(/product/gi) ||
                    converstionStepsText.match(/Definitely/gi) || converstionStepsText.match(/make/gi) ||

                    converstionStepsText.match(/promote/gi) || converstionStepsText.match(/remain/gi) ||
                    converstionStepsText.match(/alive/gi) || converstionStepsText.match(/otherwise/gi) ||
                    converstionStepsText.match(/culture/gi)
                ) {
                    await playScript("Okey. Do you think because of globalization countries are adopting each other’s traditions.");
                    setSampleAns([`Yes, as countries know about these traditions, they adopt them. In a way it is good. Diwali is  celebrated by many people outside India also. We have also started celebrating Valentine’s Day,  Grandparents’ Day, Father’s Day and Mother’s Day etc
                     `])
                    conditionsDependsOnUserSpeech(3)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.Do you think the government should help in the promotion of traditional products?");
                    converstionSteps--;
                }
            }

            else if (converstionSteps == 6) {

                if (converstionStepsText.length < 10) {
                    await smallTalkError("Do you think because of globalization countries are adopting each other’s traditions.");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.Do you think because of globalization countries are adopting each other’s traditions.");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/Do/gi) || converstionStepsText.match(/yes/gi) ||
                    converstionStepsText.match(/no/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/global/gi) || converstionStepsText.match(/count/gi) ||
                    converstionStepsText.match(/adopt/gi) || converstionStepsText.match(/provider/gi) ||
                    converstionStepsText.match(/especially/gi) || converstionStepsText.match(/celebrat/gi) ||
                    converstionStepsText.match(/people/gi) || converstionStepsText.match(/outside/gi) ||
                    converstionStepsText.match(/start/gi) || converstionStepsText.match(/etc/gi) ||
                    converstionStepsText.match(/excit/gi)
                ) {
                    await playScript("So,Why do people buy traditional products because of their traditional value or because of they  are handmade");
                    setSampleAns([`People buy these products for both these reasons. Handmade things have their own charm and only  handmade things can have the real traditional value. When things are made in bulk using machines, then the whole traditional value of the thing is lost. `])
                    conditionsDependsOnUserSpeech(4)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I am say it again .Do you think because of globalization countries are adopting each other’s traditions.");
                    converstionSteps--;
                }
            } else if (converstionSteps == 7) {

                if (converstionStepsText.length < 10) {
                    await smallTalkError("Why do people buy traditional products because of their traditional value or because of they  are handmade");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("Why do people buy traditional products because of their traditional value or because of they  are handmade ");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/people/gi) || converstionStepsText.match(/buy/gi) ||
                    converstionStepsText.match(/traditional/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/product/gi) || converstionStepsText.match(/because/gi) ||

                    converstionStepsText.match(/value/gi) || converstionStepsText.match(/handmade/gi) ||
                    converstionStepsText.match(/reasons/gi) || converstionStepsText.match(/thing/gi) ||
                    converstionStepsText.match(/us/gi) || converstionStepsText.match(/time/gi) ||

                    converstionStepsText.match(/However/gi) || converstionStepsText.match(/should/gi) ||
                    converstionStepsText.match(/lost/gi)
                ) {
                    await playScript("Okey. Did the traditional things of the past have more value than the present things? ");
                    setSampleAns([`Yes, of course. We must remember that the things we consider new and modern today will become  traditions for the future. So, the traditional things of the past were different and as time passes those things become antiques and so become more valuable. `])
                    conditionsDependsOnUserSpeech(5)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I am say it again .Why do people buy traditional products because of their traditional value or because of they  are handmade ");
                    converstionSteps--;
                }
            } else if (converstionSteps == 8) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("  Did the traditional things of the past have more value than the present things? ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Did the traditional things of the past have more value than the present things?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/traditional/gi) || converstionStepsText.match(/thing/gi) ||
                    converstionStepsText.match(/past/gi) || converstionStepsText.match(/have/gi) ||
                    converstionStepsText.match(/value/gi) || converstionStepsText.match(/than/gi) ||

                    converstionStepsText.match(/present/gi) || converstionStepsText.match(/Yes/gi) ||
                    converstionStepsText.match(/no/gi) || converstionStepsText.match(/remember/gi) ||
                    converstionStepsText.match(/course/gi) || converstionStepsText.match(/consider/gi) ||
                    converstionStepsText.match(/today/gi) || converstionStepsText.match(/common/gi) ||

                    converstionStepsText.match(/different/gi) || converstionStepsText.match(/time/gi) ||
                    converstionStepsText.match(/become/gi) || converstionStepsText.match(/more/gi) || converstionStepsText.match(/valuable/gi)

                ) {
                    await playScript("Okey. That was about section 3. Thanks.");
                    conditionsDependsOnUserSpeech(6)
                    await sendSpeakingtextToBackend(recordedText);
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Did the traditional things of the past have more value than the present things? ");
                    converstionSteps--;
                }
            }

        }

        console.log("converstionStepsText");
        console.log(converstionStepsText);
        converstionStepsText = "";



    }




    // test-19-Sections---------------------------------
    async function Test19Sec1() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            if (!userSpeakingTestNo) {
                await playScript(
                    "Hello and welcome to the IELTS speaking portion of the test. Jone is my name. & For this portion of the exam, I will serve as your examiner. We are carrying out this. Would you kindly tell me your entire name?"
                );
                setSampleAns([" Simply you can say your full name. As like my name is Jone dow.You can call me Jone"])
            } else {
                await playScript("Are you ready to take the test then?");
                setSampleAns([" Simply you can say the positive answer. As like Yes i am Ready to give the test. ", "2, Yes, I am reay.You can proceed the test"])
            }

        }

        converstionSteps++;
        if (converstionStepsText != '') {

            if (!userSpeakingTestNo) {
                if (converstionSteps == 1) {
                    await playScript(
                        "I'll start your exam now. What's your full name, please?"
                    );
                    setSampleAns(["You an simply tell your full name . As like I am Mr. JOne Dow . You can call me jone."])
                } else if (converstionSteps == 2) {
                    if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating.  What's your full name, please?");
                        converstionSteps--;
                    }
                    else if (converstionStepsText.match("name") || converstionStepsText.match("call")) {
                        if (converstionStepsText.match("call")) {
                            await playScript(
                                "So, for this section. I'm going to ask some general questions. Where do you live?"
                            );
                            setSampleAns([" Simply you can say your area/ or place where you are live in.As like I am living in Dhaka,Bangladesh", "2, I live in Bangladesh."])
                            localStorage.setItem("SpeakingTestNo", testNo);
                            conditionsDependsOnUserSpeech(0)
                        } else {
                            await playScript("Alright. What can I call you?");
                            setSampleAns(["You can call me Jone or you simply tell your nickname."])
                            converstionSteps--;
                        }
                    }
                    else {
                        await playScript("Alright, what's your name?");
                        setSampleAns(["You an simply tell your full name . As like I am Mr. JOne Dow . You can call me jone."])
                        converstionSteps--;
                    }

                } else if (converstionSteps == 3) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError(" Where do you live? ");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating. Where do you live? ");
                        converstionSteps--;
                    }
                    else if (converstionStepsText.match(/live/gi) || converstionStepsText.match(/leaving/gi) ||
                        converstionStepsText.match(/in/gi) || converstionStepsText.match(/at/gi) ||
                        converstionStepsText.match(/from/gi) || converstionStepsText.match(/i am living/gi)) {
                        await playScript("Okey. Lets talk about Old Buildings.Have you ever seen some old buildings in the city? ");
                        setSampleAns(["Yes, there are many old buildings in my city, especially in the old city area.  "]);
                        conditionsDependsOnUserSpeech(1)
                    } else {
                        await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Where do you live? ");
                        converstionSteps--;
                    }

                }
            } else {
                if (converstionSteps == 1) {
                    await playScript("Okey. Are you happy today?");
                    setSampleAns([" Yes, sir i am really happly today. thanks for asking."])
                }
                if (converstionSteps == 2) {
                    if (converstionStepsText.length < 5) {
                        await smallTalkError(" Are you ready? ");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating. Are you ready? ");
                        converstionSteps--;
                    }
                    else {
                        await playScript("Okey. So, Do you like to read books?");
                        setSampleAns([`Yeah. this is really nice day & i am felling happy with todays weather`])
                        conditionsDependsOnUserSpeech(0)
                    }
                }
                if (converstionSteps == 3) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError("Do you like to read books?");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating.Do you like to read books?");
                        converstionSteps--;
                    }
                    else {
                        await playScript("Okey. Lets talk about Old Buildings.Have you ever seen some old buildings in the city? ");
                        setSampleAns(["Yes, there are many old buildings in my city, especially in the old city area. "]);
                        conditionsDependsOnUserSpeech(1)
                    }
                }
            }

            if (converstionSteps == 4) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Have you ever seen some old buildings in the city?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Have you ever seen some old buildings in the city?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/been/gi) || converstionStepsText.match(/have/gi) ||
                    converstionStepsText.match(/Old/gi) || converstionStepsText.match(/Build/gi) ||
                    converstionStepsText.match(/some/gi) || converstionStepsText.match(/city/gi) ||
                    converstionStepsText.match(/especially/gi) || converstionStepsText.match(/area/gi)

                ) {
                    await playScript("Okey. Do you think we should preserve old buildings in cities? ");
                    setSampleAns([`I am very fond of History and anything old always fascinates me, I always feel we need to take our  past along into the future, so old buildings being an important part of our legacy need to be protected. `])
                    conditionsDependsOnUserSpeech(2)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.Have you ever seen some old buildings in the city?");
                    converstionSteps--;
                }
            } else if (converstionSteps == 5) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Do you think we should preserve old buildings in cities?  ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Do you think we should preserve old buildings in cities? ");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/do/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/should/gi) || converstionStepsText.match(/preserve/gi) ||
                    converstionStepsText.match(/old/gi) ||
                    converstionStepsText.match(/build/gi) || converstionStepsText.match(/cit/gi) ||
                    converstionStepsText.match(/fond/gi) || converstionStepsText.match(/History/gi) ||
                    converstionStepsText.match(/anything/gi) || converstionStepsText.match(/fascinate/gi) ||
                    converstionStepsText.match(/past/gi) || converstionStepsText.match(/important/gi) || converstionStepsText.match(/protect/gi)
                ) {
                    await playScript("Okey.  Do you prefer living in an old building or a modern house?");
                    setSampleAns([`Much as I like to see old buildings and imagine them in their hey days, I prefer to live in a modern  house`])
                    conditionsDependsOnUserSpeech(3)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you think we should preserve old buildings in cities? ");
                    converstionSteps--;
                }
            } else if (converstionSteps == 6) {

                if (converstionStepsText.length < 10) {
                    await smallTalkError("  Do you prefer living in an old building or a modern house?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.  Do you prefer living in an old building or a modern house? ");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/prefer/gi) ||
                    converstionStepsText.match(/liv/gi) || converstionStepsText.match(/buil/gi) ||
                    converstionStepsText.match(/modern/gi) || converstionStepsText.match(/house/gi) ||
                    converstionStepsText.match(/Much/gi) || converstionStepsText.match(/like/gi) ||
                    converstionStepsText.match(/imagine/gi) || converstionStepsText.match(/comfortable/gi) ||
                    converstionStepsText.match(/house/gi)
                ) {
                    await playScript("Are there any old buildings you want to see in the future? Why?  ");
                    setSampleAns([`Yes, definitely there are many old buildings on my bucket list. Starting with my own country, I’d like to  see all the well-known monuments in the length and breadth of my country. Then there are many  buildings like the Colossus Colosseum in Rome, The Angkor Wat Temples in Cambodia, Buildings in  the forbidden city in Beijing, Hagia Sophia in Turkey, The pyramids of Giza etc.   `])
                    conditionsDependsOnUserSpeech(4)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you prefer living in an old building or a modern house? ");
                    converstionSteps--;
                }

            } else if (converstionSteps == 7) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Are there any old buildings you want to see in the future? Why?  ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.  Are there any old buildings you want to see in the future? Why?  ");
                    converstionSteps--;
                } else if (
                    converstionStepsText.match(/build/gi) || converstionStepsText.match(/want/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/future/gi) ||
                    converstionStepsText.match(/because/gi) || converstionStepsText.match(/reason/gi) ||
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/definitely/gi) || converstionStepsText.match(/many/gi) ||
                    converstionStepsText.match(/list/gi) || converstionStepsText.match(/Start/gi) ||
                    converstionStepsText.match(/country/gi) ||
                    converstionStepsText.match(/Colos/gi) || converstionStepsText.match(/cit/gi) ||
                    converstionStepsText.match(/pyramid/gi) || converstionStepsText.match(/Giza/gi) ||
                    converstionStepsText.match(/etc/gi)
                ) {
                    await playScript("Okey. That was about section 1. Thanks.");
                    await sendSpeakingtextToBackend(recordedText);
                    conditionsDependsOnUserSpeech(5)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Are there any old buildings you want to see in the future? Why?  ");
                    converstionSteps--;
                }


            }

        }

        console.log("converstionStepsText");
        console.log(converstionStepsText);
        converstionStepsText = "";
    }

    async function Test19Sec3() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            await playScript(
                " My name is Adrian. I will be your examiner for this part of the test, part three. Are you comfortable?"
            );
            setSampleAns(["Yes, I am comfortable you please proceed the test"])
        }
        converstionSteps++;
        if (converstionStepsText != '') {
            if (converstionSteps == 1) {
                await playScript(
                    "Sorry.... Can you repeat that please"
                );
                setSampleAns([` You can simply repeat your previous answer`])
            } else if (converstionSteps == 2) {
                if (converstionStepsText.length < 5) {
                    await smallTalkError(" I will as you the qustion related of question two. so , Are you ready?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.Are you ready?");
                    converstionSteps--;
                }
                else {
                    await playScript("I am asking you the question related of section 2 . so, Let's talk about changing .Is your country changing rapidly? ");
                    setSampleAns([`Yes, my country is changing rapidly. India is a developing country and is changing day-by-day for the  better. With the advancement of technology it is stepping fast from a developing to a developed  country. Change has always been happening, but technology has hastened the process of change.
                     `])
                    conditionsDependsOnUserSpeech(0)
                }
            }
            else if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Is your country changing rapidly? ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.Is your country changing rapidly? ");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/country/gi) || converstionStepsText.match(/chang/gi) ||
                    converstionStepsText.match(/rapidly/gi) || converstionStepsText.match(/many/gi) ||

                    converstionStepsText.match(/have/gi) || converstionStepsText.match(/develop/gi) ||
                    converstionStepsText.match(/day/gi) || converstionStepsText.match(/better/gi) ||
                    converstionStepsText.match(/advancement/gi) || converstionStepsText.match(/technology/gi) ||
                    converstionStepsText.match(/stepp/gi) || converstionStepsText.match(/hastened/gi) ||
                    converstionStepsText.match(/process/gi) || converstionStepsText.match(/change/gi)

                ) {
                    await playScript(" How is your country changing? ");
                    setSampleAns([`I think my country is changing in many ways. Firstly, I can see the effect of globalisation, people are 
                    wearing western clothes, eating western cuisines and watching foreign shows more and more. 
                    Secondly, people are also becoming modern in their thinking and views. Many wrong traditional 
                    practices like dowry are losing ground. Finally, we are developing in infrastructure and facilities. Many 
                    modern facilities like fast internet connectivity , subways are accessible to people today.
                    `])
                    conditionsDependsOnUserSpeech(1)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.Is your country changing rapidly? ");
                    converstionSteps--;
                }
            } else if (converstionSteps == 4) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" How is your country changing? ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.  How is your country changing? ");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/country/gi) ||
                    converstionStepsText.match(/chang/gi) || converstionStepsText.match(/many/gi) ||
                    converstionStepsText.match(/ways/gi) || converstionStepsText.match(/effect/gi) ||
                    converstionStepsText.match(/earn/gi) || converstionStepsText.match(/culture/gi) ||

                    converstionStepsText.match(/globalisation/gi) || converstionStepsText.match(/wearing/gi) ||
                    converstionStepsText.match(/watch/gi) || converstionStepsText.match(/tourist/gi) ||

                    converstionStepsText.match(/becom/gi) || converstionStepsText.match(/view/gi) || converstionStepsText.match(/practice/gi) || converstionStepsText.match(/develop/gi) || converstionStepsText.match(/modern/gi) || converstionStepsText.match(/connect/gi) || converstionStepsText.match(/subways/gi) || converstionStepsText.match(/accessible/gi)
                ) {
                    await playScript("Okey. Do you believe that the changes your country went through are positive? ");
                    setSampleAns([`For me, most of the changes have been positive. But I think this is also due to the fact that I am optimist and I like to look at things from a positive side. Moreover, although I consider that most of the changes have been positive, some have happened at a slower pace than I had hoped.`])
                    conditionsDependsOnUserSpeech(2)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. How is your country changing? ");
                    converstionSteps--;
                }
            } else if (converstionSteps == 5) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Do you believe that the changes your country went through are positive?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Do you believe that the changes your country went through are positive?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/believe/gi) ||
                    converstionStepsText.match(/change/gi) || converstionStepsText.match(/country/gi) ||

                    converstionStepsText.match(/did/gi) || converstionStepsText.match(/through/gi) ||
                    converstionStepsText.match(/positive/gi) || converstionStepsText.match(/optimist/gi) ||
                    converstionStepsText.match(/side/gi) || converstionStepsText.match(/Moreover/gi) ||

                    converstionStepsText.match(/although/gi) || converstionStepsText.match(/consider/gi) ||
                    converstionStepsText.match(/slower/gi) || converstionStepsText.match(/happen/gi) ||
                    converstionStepsText.match(/culture/gi)
                ) {
                    await playScript("Okey. Do you think change is good？");
                    setSampleAns([`Well change can be both good and bad. It really depends upon on the change and why we are making  the change. In the end, if we are changing for the right reasons, to make our ourselves better, then  change is definitely good. However, if we are being forced to change or if we are developing negative   habits like drinking, smoking due to stress or peer pressure, I would consider it bad.`])
                    conditionsDependsOnUserSpeech(3)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.Do you believe that the changes your country went through are positive?");
                    converstionSteps--;
                }
            } else if (converstionSteps == 6) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Do you think change is good？");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.Do you think change is good？.");
                    converstionSteps--;
                } else if (
                    converstionStepsText.match(/change/gi) || converstionStepsText.match(/yes/gi) ||
                    converstionStepsText.match(/no/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/good/gi) || converstionStepsText.match(/bad/gi) ||
                    converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                    converstionStepsText.match(/especially/gi) || converstionStepsText.match(/depend/gi) ||
                    converstionStepsText.match(/In the end/gi) || converstionStepsText.match(/reason/gi) ||
                    converstionStepsText.match(/consider/gi) || converstionStepsText.match(/would/gi) ||
                    converstionStepsText.match(/will/gi)
                ) {
                    await playScript("So, What are some of the major changes that usually occur in people in their lives?");
                    setSampleAns([`I think changes occur throughout our life. First are the physical and hormonal changes which occur  when we go through puberty like developing facial hair, deepening of voice and so on. Then, it is  mental maturity, which occurs as we experience and face different things. We learn how to deal with issues and face challenges. `])
                    conditionsDependsOnUserSpeech(4)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I am say it again .Do you think change is good？");
                    converstionSteps--;
                }
            } else if (converstionSteps == 7) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" What are some of the major changes that usually occur in people in their lives?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript(" What are some of the major changes that usually occur in people in their lives?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/some/gi) || converstionStepsText.match(/major/gi) ||
                    converstionStepsText.match(/change/gi) || converstionStepsText.match(/usually/gi) ||
                    converstionStepsText.match(/occur/gi) || converstionStepsText.match(/live/gi) ||

                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/through/gi) ||
                    converstionStepsText.match(/physical/gi) || converstionStepsText.match(/hormonal/gi) ||
                    converstionStepsText.match(/puberty/gi) || converstionStepsText.match(/develop/gi) ||

                    converstionStepsText.match(/maturity/gi) || converstionStepsText.match(/experience/gi) ||
                    converstionStepsText.match(/different/gi) || converstionStepsText.match(/issue/gi) ||
                    converstionStepsText.match(/challenge/gi)
                ) {
                    await playScript("Okey. Is it important for people to make changes according to their surroundings? ");
                    setSampleAns([`Yes, I think there is no problem in changing according to surroundings as long we don’t feel like we  are changing our identity because of these changes. For example, when in a foreign country, it is   perfectly fine to try out foreign clothes and dishes. At the same time, if a person is a vegetarian, I  wouldn’t consider it fine to try non-vegetarian just to fit in
                     `])
                    conditionsDependsOnUserSpeech(5)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I am say it again . What are some of the major changes that usually occur in people in their lives? ");
                    converstionSteps--;
                }
            } else if (converstionSteps == 8) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Is it important for people to make changes according to their surroundings? ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Is it important for people to make changes according to their surroundings?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/important/gi) || converstionStepsText.match(/yes/gi) ||
                    converstionStepsText.match(/no/gi) || converstionStepsText.match(/people/gi) ||
                    converstionStepsText.match(/change/gi) || converstionStepsText.match(/accord/gi) ||

                    converstionStepsText.match(/surround/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/problem/gi) || converstionStepsText.match(/identity/gi) ||
                    converstionStepsText.match(/course/gi) || converstionStepsText.match(/consider/gi) ||
                    converstionStepsText.match(/foreign/gi) || converstionStepsText.match(/dish/gi) ||

                    converstionStepsText.match(/cloth/gi) || converstionStepsText.match(/person/gi) ||
                    converstionStepsText.match(/become/gi) || converstionStepsText.match(/consider/gi) || converstionStepsText.match(/vegetarian/gi)

                ) {
                    await playScript("Okey. That was about section 3. Thanks.");
                    conditionsDependsOnUserSpeech(6)
                    await sendSpeakingtextToBackend(recordedText);
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Is it important for people to make changes according to their surroundings? ");
                    converstionSteps--;
                }
            }

        }

        console.log("converstionStepsText");
        console.log(converstionStepsText);
        converstionStepsText = "";



    }


    // test-20-Sections---------------------------------
    async function Test20Sec1() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            if (!userSpeakingTestNo) {
                await playScript(
                    "Hello and welcome to the IELTS speaking portion of the test. Jone is my name. & For this portion of the exam, I will serve as your examiner. We are carrying out this. Would you kindly tell me your entire name?"
                );
                setSampleAns([" Simply you can say your full name. As like my name is Jone dow.You can call me Jone"])
            } else {
                await playScript("Are you ready to take the test then?");
                setSampleAns([" Simply you can say the positive answer. As like Yes i am Ready to give the test. ", "2, Yes, I am reay.You can proceed the test"])
            }

        }

        converstionSteps++;
        if (converstionStepsText != '') {

            if (!userSpeakingTestNo) {
                if (converstionSteps == 1) {
                    await playScript(
                        "I'll start your exam now. What's your full name, please?"
                    );
                    setSampleAns(["You an simply tell your full name . As like I am Mr. JOne Dow . You can call me jone."])
                } else if (converstionSteps == 2) {
                    if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating.  What's your full name, please?");
                        converstionSteps--;
                    }
                    else if (converstionStepsText.match("name") || converstionStepsText.match("call")) {
                        if (converstionStepsText.match("call")) {
                            await playScript(
                                "So, for this section. I'm going to ask some general questions. Where do you live?"
                            );
                            setSampleAns([" Simply you can say your area/ or place where you are live in.As like I am living in Dhaka,Bangladesh", "2, I live in Bangladesh."])
                            localStorage.setItem("SpeakingTestNo", testNo);
                            conditionsDependsOnUserSpeech(0)
                        } else {
                            await playScript("Alright. What can I call you?");
                            setSampleAns(["You can call me Jone or you simply tell your nickname."])
                            converstionSteps--;
                        }
                    }
                    else {
                        await playScript("Alright, what's your name?");
                        setSampleAns(["You an simply tell your full name . As like I am Mr. JOne Dow . You can call me jone."])
                        converstionSteps--;
                    }

                } else if (converstionSteps == 3) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError(" Where do you live? ");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating. Where do you live? ");
                        converstionSteps--;
                    }
                    else if (converstionStepsText.match(/live/gi) || converstionStepsText.match(/leaving/gi) ||
                        converstionStepsText.match(/in/gi) || converstionStepsText.match(/at/gi) ||
                        converstionStepsText.match(/from/gi) || converstionStepsText.match(/i am living/gi)) {
                        await playScript("Okey. Lets talk about Meeting places.Where is your favorite place to meet with your friends?  ");
                        setSampleAns(["I like to explore new places with my friends, they maybe a new restaurant in town or a park we’ve never seen before.  "]);
                        conditionsDependsOnUserSpeech(1)
                    } else {
                        await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Where do you live? ");
                        converstionSteps--;
                    }

                }
            } else {
                if (converstionSteps == 1) {
                    await playScript("Okey. Are you happy today?");
                    setSampleAns([" Yes, sir i am really happly today. thanks for asking."])
                }
                if (converstionSteps == 2) {
                    if (converstionStepsText.length < 5) {
                        await smallTalkError(" Are you ready? ");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating. Are you ready? ");
                        converstionSteps--;
                    }
                    else {
                        await playScript("Okey. So, Do you like to write?");
                        setSampleAns([`Yeah. this is really nice day & i am felling happy with todays weather`])
                        conditionsDependsOnUserSpeech(0)
                    }
                }
                if (converstionSteps == 3) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError("Do you like to write?");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating.Do you like to write?");
                        converstionSteps--;
                    }
                    else {
                        await playScript("Okey. Lets talk about Meeting places.Where is your favorite place to meet with your friends?  ");
                        setSampleAns(["I like to explore new places with my friends, they maybe a new restaurant in town or a park we’ve never seen before.  "]);
                        conditionsDependsOnUserSpeech(1)
                    }
                }
            }

            if (converstionSteps == 4) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Where is your favorite place to meet with your friends?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Where is your favorite place to meet with your friends?");
                    converstionSteps--;
                } else if (
                    converstionStepsText.match(/Meet/gi) || converstionStepsText.match(/place/gi) ||
                    converstionStepsText.match(/favorite/gi) || converstionStepsText.match(/friend/gi) ||
                    converstionStepsText.match(/Old/gi) || converstionStepsText.match(/like/gi) ||
                    converstionStepsText.match(/love/gi) || converstionStepsText.match(/explore/gi) ||
                    converstionStepsText.match(/especially/gi) || converstionStepsText.match(/area/gi) ||
                    converstionStepsText.match(/restaurant/gi) || converstionStepsText.match(/park/gi) || converstionStepsText.match(/before/gi)

                ) {
                    await playScript("Okey. Do you think there are some places more suitable for meeting with others? ");
                    setSampleAns([`Yes, places that have a relaxed seating, low low level of noise and are comfortable to be in are most 
                    suited for meeting others `])
                    conditionsDependsOnUserSpeech(2)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.Where is your favorite place to meet with your friends?");
                    converstionSteps--;
                }
            } else if (converstionSteps == 5) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Do you think there are some places more suitable for meeting with others?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Do you think there are some places more suitable for meeting with others? ");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/do/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/should/gi) || converstionStepsText.match(/place/gi) ||
                    converstionStepsText.match(/suitable/gi) ||
                    converstionStepsText.match(/meet/gi) || converstionStepsText.match(/other/gi) ||
                    converstionStepsText.match(/relax/gi) || converstionStepsText.match(/seat/gi) ||
                    converstionStepsText.match(/level/gi) || converstionStepsText.match(/noise/gi) ||
                    converstionStepsText.match(/comfortable/gi) || converstionStepsText.match(/important/gi)
                ) {
                    await playScript("So,  Are there any differences between your favorite meeting places in the present and in your childhood?");
                    setSampleAns([`In my childhood places like public parks, loud noisey areas all seemed attractive whereas now I’d   prefer quieter and comfortable areas. `])
                    conditionsDependsOnUserSpeech(3)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.Do you think there are some places more suitable for meeting with others? ");
                    converstionSteps--;
                }
            } else if (converstionSteps == 6) {

                if (converstionStepsText.length < 10) {
                    await smallTalkError("Are there any differences between your favorite meeting places in the present and in your childhood?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.  Are there any differences between your favorite meeting places in the present and in your childhood?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/difference/gi) || converstionStepsText.match(/between/gi) ||
                    converstionStepsText.match(/favorite/gi) || converstionStepsText.match(/meet/gi) ||
                    converstionStepsText.match(/place/gi) || converstionStepsText.match(/present/gi) ||
                    converstionStepsText.match(/childhood/gi) || converstionStepsText.match(/public/gi) ||
                    converstionStepsText.match(/park/gi) || converstionStepsText.match(/comfortable/gi) ||
                    converstionStepsText.match(/loud/gi) ||
                    converstionStepsText.match(/area/gi) || converstionStepsText.match(/attractive/gi) ||
                    converstionStepsText.match(/prefer/gi)
                ) {
                    await playScript("Okey.  Why are some meeting places better than others?  ");
                    setSampleAns([`I think the meeting places that provide a quite ambience are better than the one’s which are very noisy. `])
                    conditionsDependsOnUserSpeech(4)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Are there any differences between your favorite meeting places in the present and in your childhood? ");
                    converstionSteps--;
                }

            } else if (converstionSteps == 7) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Why are some meeting places better than others?   ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.  Why are some meeting places better than others?   ");
                    converstionSteps--;
                } else if (
                    converstionStepsText.match(/some/gi) || converstionStepsText.match(/meet/gi) ||
                    converstionStepsText.match(/place/gi) || converstionStepsText.match(/better/gi) ||
                    converstionStepsText.match(/than/gi) || converstionStepsText.match(/other/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/provide/gi) ||
                    converstionStepsText.match(/quite/gi) || converstionStepsText.match(/ambience/gi) ||
                    converstionStepsText.match(/which/gi) || converstionStepsText.match(/noisy/gi) ||
                    converstionStepsText.match(/yes/gi) ||
                    converstionStepsText.match(/no/gi)
                ) {
                    await playScript("Okey. That was about section 1. Thanks.");
                    await sendSpeakingtextToBackend(recordedText);
                    conditionsDependsOnUserSpeech(5)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Why are some meeting places better than others?   ");
                    converstionSteps--;
                }


            }

        }

        console.log("converstionStepsText");
        console.log(converstionStepsText);
        converstionStepsText = "";
    }

    async function Test20Sec3() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            await playScript(
                " My name is Adrian. I will be your examiner for this part of the test, part three. Are you comfortable?"
            );
            setSampleAns(["Yes, I am comfortable you please proceed the test"])
        }
        converstionSteps++;
        if (converstionStepsText != '') {
            if (converstionSteps == 1) {
                await playScript(
                    "Sorry.... Can you repeat that please"
                );
                setSampleAns([` You can simply repeat your previous answer`])
            } else if (converstionSteps == 2) {
                if (converstionStepsText.length < 5) {
                    await smallTalkError(" I will as you the qustion related of question two. so , Are you ready?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.Are you ready?");
                    converstionSteps--;
                }
                else {
                    await playScript("I am asking you the question related of section 2 . so, Let's talk about celebrate events .How do people in your country celebrate events?");
                    setSampleAns([`People celebrate events in many ways. Some hold family get-togethers, others properties and some  celebrate by burning crackers. Some people celebrate by just going out for a lunch or dinner, while  some others celebrate by donating to charities.`])
                    conditionsDependsOnUserSpeech(0)
                }
            }
            else if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("How do people in your country celebrate events? ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.How do people in your country celebrate events?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/celebrate/gi) || converstionStepsText.match(/event/gi) ||
                    converstionStepsText.match(/country/gi) || converstionStepsText.match(/people/gi) ||
                    converstionStepsText.match(/get/gi) || converstionStepsText.match(/many/gi) ||

                    converstionStepsText.match(/propert/gi) || converstionStepsText.match(/burning/gi) ||
                    converstionStepsText.match(/cracker/gi) || converstionStepsText.match(/better/gi) ||
                    converstionStepsText.match(/lunch/gi) || converstionStepsText.match(/dinner/gi) ||
                    converstionStepsText.match(/donat/gi) || converstionStepsText.match(/charit/gi)

                ) {
                    await playScript(" What events do Indian people like to celebrate?");
                    setSampleAns([`Indian people like to celebrate birthdays, anniversaries, festivals like Deepawali and Dussehra. Some  people celebrate if they do well in their exams, other people celebrate if they win any competition. `])
                    conditionsDependsOnUserSpeech(1)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.How do people in your country celebrate events? ");
                    converstionSteps--;
                }
            } else if (converstionSteps == 4) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" What events do Indian people like to celebrate?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. What events do Indian people like to celebrate? ");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/country/gi) ||
                    converstionStepsText.match(/event/gi) || converstionStepsText.match(/many/gi) ||
                    converstionStepsText.match(/Indian/gi) || converstionStepsText.match(/people/gi) ||
                    converstionStepsText.match(/like/gi) || converstionStepsText.match(/culture/gi) ||

                    converstionStepsText.match(/celebrate/gi) || converstionStepsText.match(/birthday/gi) ||
                    converstionStepsText.match(/annivers/gi) || converstionStepsText.match(/festival/gi) ||

                    converstionStepsText.match(/Deepawali/gi) || converstionStepsText.match(/Dussehra/gi) || converstionStepsText.match(/exam/gi) || converstionStepsText.match(/win/gi)
                ) {
                    await playScript("Okey. Why do you think celebration is important?");

                    setSampleAns([`Celebration is very important. It is a time when people spend some time together and share the  happiness of each other. Such events also bring about social harmony and peace`])
                    conditionsDependsOnUserSpeech(2)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. What events do Indian people like to celebrate? ");
                    converstionSteps--;
                }
            } else if (converstionSteps == 5) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Why do you think celebration is important?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Why do you think celebration is important?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/celebration/gi) ||
                    converstionStepsText.match(/change/gi) || converstionStepsText.match(/country/gi) ||

                    converstionStepsText.match(/important/gi) || converstionStepsText.match(/through/gi) ||
                    converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                    converstionStepsText.match(/side/gi) || converstionStepsText.match(/very/gi) ||

                    converstionStepsText.match(/people/gi) || converstionStepsText.match(/consider/gi) ||
                    converstionStepsText.match(/spend/gi) || converstionStepsText.match(/time/gi) ||
                    converstionStepsText.match(/culture/gi) || converstionStepsText.match(/together/gi) ||
                    converstionStepsText.match(/share/gi) || converstionStepsText.match(/happ/gi) ||
                    converstionStepsText.match(/social/gi)
                ) {
                    await playScript("Okey. Do you prefer big or small celebrations?？");
                    setSampleAns([`I personally prefer small celebrations, because in these we can interact with all the people present. 
                    Big celebrations are just a show-off and the hosts hardly even come to know who all were there.`])
                    conditionsDependsOnUserSpeech(3)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.Why do you think celebration is important?");
                    converstionSteps--;
                }
            } else if (converstionSteps == 6) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Do you prefer big or small celebrations?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.Do you prefer big or small celebrations?.");
                    converstionSteps--;
                } else if (
                    converstionStepsText.match(/prefer/gi) || converstionStepsText.match(/yes/gi) ||
                    converstionStepsText.match(/no/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/small/gi) || converstionStepsText.match(/big/gi) ||
                    converstionStepsText.match(/celebrate/gi) || converstionStepsText.match(/personally/gi) ||
                    converstionStepsText.match(/especially/gi) || converstionStepsText.match(/depend/gi) ||
                    converstionStepsText.match(/interact/gi) || converstionStepsText.match(/present/gi) ||
                    converstionStepsText.match(/people/gi) || converstionStepsText.match(/show-off/gi) ||
                    converstionStepsText.match(/hardly/gi)
                ) {
                    await playScript("So, Why do some people like expensive and grand celebrations? ");
                    setSampleAns([`Some people like expensive and grand celebrations because they want to show their status, and they  want such events to be an everlasting memory in their minds. `])
                    conditionsDependsOnUserSpeech(4)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I am say it again .Do you prefer big or small celebrations?");
                    converstionSteps--;
                }
            } else if (converstionSteps == 7) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Why do some people like expensive and grand celebrations?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("Okey. i am repeating. Why do some people like expensive and grand celebrations?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/some/gi) || converstionStepsText.match(/like/gi) ||
                    converstionStepsText.match(/expensive/gi) || converstionStepsText.match(/usually/gi) ||
                    converstionStepsText.match(/grand/gi) || converstionStepsText.match(/celebration/gi) ||

                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/change/gi) ||
                    converstionStepsText.match(/people/gi) || converstionStepsText.match(/status/gi) ||
                    converstionStepsText.match(/want/gi) || converstionStepsText.match(/event/gi) ||

                    converstionStepsText.match(/to be/gi) || converstionStepsText.match(/everlast/gi) ||
                    converstionStepsText.match(/memory/gi) || converstionStepsText.match(/mind/gi)
                ) {
                    await playScript("Okey. That was about section 3. Thanks.");
                    await sendSpeakingtextToBackend(recordedText);
                    conditionsDependsOnUserSpeech(5)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I am say it again . Why do some people like expensive and grand celebrations? ");
                    converstionSteps--;
                }
            }



        }

        console.log("converstionStepsText");
        console.log(converstionStepsText);
        converstionStepsText = "";



    }












    // end-of-all-test-sections------
    const ShowSpeakingTestScors = (totalIeltsScores) => {
        // alert(totalIeltsScores)
        if (testNo === "Test1Sec1") {
            if (userEmail) {
                localStorage.setItem("S_OkmoduleNo1", "Test1_Ok");
                localStorage.setItem("S_ScorModuleNo1", Number(totalIeltsScores).toFixed(1));
                // getUserLatestDataFromDatabaseSave("S_ScorModuleNo1")
            }

        };

        if (testNo === "Test1Sec3") {
            if (userEmail) {
                localStorage.setItem("S_OkmoduleNo1", "Test1_Ok");
                localStorage.setItem("S_ScorModuleNo3", Number(totalIeltsScores).toFixed(1))
                // getUserLatestDataFromDatabaseSave("S_ScorModuleNo3")
            }

        }
        //number-2

        if (testNo === "Test2Sec1") {
            localStorage.setItem("S_OkmoduleNo2", "Test2_Ok");
            localStorage.setItem("S_ScorModuleNo4", Number(totalIeltsScores).toFixed(1))
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo4")
        };

        if (testNo === "Test2Sec3") {
            localStorage.setItem("S_OkmoduleNo2", "Test2_Ok");
            localStorage.setItem("S_ScorModuleNo6", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo6")
        }
        //number-3
        if (testNo === "Test3Sec1") {
            localStorage.setItem("S_OkmoduleNo3", "Test3_Ok");
            localStorage.setItem("S_ScorModuleNo7", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo7")
        };

        if (testNo === "Test3Sec3") {
            localStorage.setItem("S_OkmoduleNo3", "Test3_Ok");
            localStorage.setItem("S_ScorModuleNo9", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo9")
        }

        //number-4
        if (testNo === "Test4Sec1") {
            localStorage.setItem("S_OkmoduleNo4", "Test4_Ok");
            localStorage.setItem("S_ScorModuleNo10", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo10")
        };

        if (testNo === "Test4Sec3") {
            localStorage.setItem("S_OkmoduleNo4", "Test4_Ok");
            localStorage.setItem("S_ScorModuleNo12", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo12")
        }
        //number-5
        if (testNo === "Test5Sec1") {
            localStorage.setItem("S_OkmoduleNo5", "Test5_Ok");
            localStorage.setItem("S_ScorModuleNo13", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo13")
        };

        if (testNo === "Test5Sec3") {
            localStorage.setItem("S_OkmoduleNo5", "Test5_Ok");
            localStorage.setItem("S_ScorModuleNo15", Number(totalIeltsScores).toFixed(1))
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo15")
        }
        //number-6
        if (testNo === "Test6Sec1") {
            localStorage.setItem("S_OkmoduleNo6", "Test6_Ok");
            localStorage.setItem("S_ScorModuleNo16", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo16")
        };

        if (testNo === "Test6Sec3") {
            localStorage.setItem("S_OkmoduleNo6", "Test6_Ok");
            localStorage.setItem("S_ScorModuleNo18", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo18")
        }
        //number-7
        if (testNo === "Test7Sec1") {
            localStorage.setItem("S_OkmoduleNo7", "Test7_Ok");
            localStorage.setItem("S_ScorModuleNo19", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo19")
        };

        if (testNo === "Test7Sec3") {
            localStorage.setItem("S_OkmoduleNo7", "Test7_Ok");
            localStorage.setItem("S_ScorModuleNo21", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo21")
        }
        //test-8
        if (testNo === "Test8Sec1") {
            localStorage.setItem("S_OkmoduleNo8", "Test8_Ok");
            localStorage.setItem("S_ScorModuleNo22", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo22")
        };

        if (testNo === "Test8Sec3") {
            localStorage.setItem("S_OkmoduleNo8", "Test8_Ok");
            localStorage.setItem("S_ScorModuleNo24", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo24")
        }


        //test-9
        if (testNo === "Test9Sec1") {
            localStorage.setItem("S_OkmoduleNo9", "Test9_Ok");
            localStorage.setItem("S_ScorModuleNo25", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo25")
        };

        if (testNo === "Test9Sec3") {
            localStorage.setItem("S_OkmoduleNo9", "Test9_Ok");
            localStorage.setItem("S_ScorModuleNo27", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo27")
        }

        //test-10
        if (testNo === "Test10Sec1") {
            localStorage.setItem("S_OkmoduleNo10", "Test10_Ok");
            localStorage.setItem("S_ScorModuleNo28", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo28")
        };

        if (testNo === "Test10Sec3") {
            localStorage.setItem("S_OkmoduleNo10", "Test10_Ok");
            localStorage.setItem("S_ScorModuleNo30", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo30")
        }


        //test-11
        if (testNo === "Test11Sec1") {
            localStorage.setItem("S_OkmoduleNo11", "Test11_Ok");
            localStorage.setItem("S_ScorModuleNo31", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo31")
        };

        if (testNo === "Test11Sec3") {
            localStorage.setItem("S_OkmoduleNo11", "Test11_Ok");
            localStorage.setItem("S_ScorModuleNo33", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo33")
        }



        //test-12
        if (testNo === "Test12Sec1") {
            localStorage.setItem("S_OkmoduleNo12", "Test12_Ok");
            localStorage.setItem("S_ScorModuleNo34", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo34")
        };

        if (testNo === "Test12Sec3") {
            localStorage.setItem("S_OkmoduleNo12", "Test12_Ok");
            localStorage.setItem("S_ScorModuleNo36", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo36")
        }



        //test-13
        if (testNo === "Test13Sec1") {
            localStorage.setItem("S_OkmoduleNo13", "Test13_Ok");
            localStorage.setItem("S_ScorModuleNo37", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo37")
        };

        if (testNo === "Test13Sec3") {
            localStorage.setItem("S_OkmoduleNo13", "Test13_Ok");
            localStorage.setItem("S_ScorModuleNo39", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo39")
        }


        //test-14------------------->>>>>>
        if (testNo === "Test14Sec1") {
            localStorage.setItem("S_OkmoduleNo14", "Test14_Ok");
            localStorage.setItem("S_ScorModuleNo40", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo40")
        };

        if (testNo === "Test14Sec3") {
            localStorage.setItem("S_OkmoduleNo14", "Test14_Ok");
            localStorage.setItem("S_ScorModuleNo42", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo42")
        }

        //test-15------------------->>>>>>
        if (testNo === "Test15Sec1") {
            localStorage.setItem("S_OkmoduleNo15", "Test15_Ok");
            localStorage.setItem("S_ScorModuleNo43", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo43")
        };

        if (testNo === "Test15Sec3") {
            localStorage.setItem("S_OkmoduleNo15", "Test15_Ok");
            localStorage.setItem("S_ScorModuleNo45", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo45")
        }


        //test-16------------------->>>>>>
        if (testNo === "Test16Sec1") {
            localStorage.setItem("S_OkmoduleNo16", "Test16_Ok");
            localStorage.setItem("S_ScorModuleNo46", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo46")
        };

        if (testNo === "Test16Sec3") {
            localStorage.setItem("S_OkmoduleNo16", "Test16_Ok");
            localStorage.setItem("S_ScorModuleNo48", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo48")
        }


        //test-17------------------->>>>>>
        if (testNo === "Test17Sec1") {
            localStorage.setItem("S_OkmoduleNo17", "Test17_Ok");
            localStorage.setItem("S_ScorModuleNo49", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo49")
        };

        if (testNo === "Test17Sec3") {
            localStorage.setItem("S_OkmoduleNo17", "Test17_Ok");
            localStorage.setItem("S_ScorModuleNo51", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo51")
        }
        //test-18------------------->>>>>>
        if (testNo === "Test18Sec1") {
            localStorage.setItem("S_OkmoduleNo18", "Test18_Ok");
            localStorage.setItem("S_ScorModuleNo52", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo52")
        };

        if (testNo === "Test18Sec3") {
            localStorage.setItem("S_OkmoduleNo18", "Test18_Ok");
            localStorage.setItem("S_ScorModuleNo54", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo54")
        }

        //test-19------------------->>>>>>
        if (testNo === "Test19Sec1") {
            localStorage.setItem("S_OkmoduleNo19", "Test19_Ok");
            localStorage.setItem("S_ScorModuleNo55", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo55")
        };

        if (testNo === "Test19Sec3") {
            localStorage.setItem("S_OkmoduleNo19", "Test19_Ok");
            localStorage.setItem("S_ScorModuleNo57", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo57")
        }
        //test-20------------------->>>>>>
        if (testNo === "Test20Sec1") {
            localStorage.setItem("S_OkmoduleNo20", "Test20_Ok");
            localStorage.setItem("S_ScorModuleNo58", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo58")
        };

        if (testNo === "Test20Sec3") {
            localStorage.setItem("S_OkmoduleNo20", "Test20_Ok");
            localStorage.setItem("S_ScorModuleNo60 ", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo60")
        }


        //test-21------------------->>>>>>
        if (testNo === "Test21Sec1") {
            localStorage.setItem("S_OkmoduleNo21", "Test21_Ok");
            localStorage.setItem("S_ScorModuleNo61", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo61")
        };

        if (testNo === "Test21Sec3") {
            localStorage.setItem("S_OkmoduleNo21", "Test21_Ok");
            localStorage.setItem("S_ScorModuleNo63 ", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo63")
        }


        //test-22------------------->>>>>>
        if (testNo === "Test22Sec1") {
            localStorage.setItem("S_OkmoduleNo22", "Test22_Ok");
            localStorage.setItem("S_ScorModuleNo64", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo64")
        };

        if (testNo === "Test22Sec3") {
            localStorage.setItem("S_OkmoduleNo22", "Test22_Ok");
            localStorage.setItem("S_ScorModuleNo66 ", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo66")
        }


        //test-23------------------->>>>>>
        if (testNo === "Test23Sec1") {
            localStorage.setItem("S_OkmoduleNo23", "Test23_Ok");
            localStorage.setItem("S_ScorModuleNo67", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo67")
        };

        if (testNo === "Test23Sec3") {
            localStorage.setItem("S_OkmoduleNo23", "Test23_Ok");
            localStorage.setItem("S_ScorModuleNo69 ", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo69")
        }


        //test-24------------------->>>>>>
        if (testNo === "Test24Sec1") {
            localStorage.setItem("S_OkmoduleNo24", "Test24_Ok");
            localStorage.setItem("S_ScorModuleNo70", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo70")
        };

        if (testNo === "Test24Sec3") {
            localStorage.setItem("S_OkmoduleNo24", "Test24_Ok");
            localStorage.setItem("S_ScorModuleNo72 ", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo72")
        }

        //test-25------------------->>>>>>
        if (testNo === "Test25Sec1") {
            localStorage.setItem("S_OkmoduleNo25", "Test25_Ok");
            localStorage.setItem("S_ScorModuleNo73", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo73")
        };

        if (testNo === "Test25Sec3") {
            localStorage.setItem("S_OkmoduleNo25", "Test25_Ok");
            localStorage.setItem("S_ScorModuleNo75 ", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo75")
        }












    }




    async function checkingReplyofUser() {
        console.log('checkingReplyofUser')
        if (testNo == "Test1Sec1") {
            await Test1Sec1();
            // setStepNumbers(10);
            // alert(StepNumbers);
        }
        else if (testNo == "Test1Sec2") {
            await Test1Sec2();
        }
        else if (testNo == "Test1Sec3") {
            await Test1Sec3();
        }
        else if (testNo == "Test2Sec1") {
            await Test2Sec1();
        }
        else if (testNo == "Test2Sec2") {
            await Test2Sec2();
        }
        else if (testNo == "Test2Sec3") {
            await Test2Sec3();
        }
        else if (testNo == "Test3Sec1") {
            await Test3Sec1();
        }
        else if (testNo == "Test3Sec2") {
            await Test3Sec2();
        }
        else if (testNo == "Test3Sec3") {
            await Test3Sec3();
        }
        else if (testNo == "Test4Sec1") {
            await Test4Sec1();
        }
        else if (testNo == "Test4Sec2") {
            await Test4Sec2();
        }
        else if (testNo == "Test4Sec3") {
            await Test4Sec3();
        }
        else if (testNo == "Test5Sec1") {
            await Test5Sec1();
        }
        else if (testNo == "Test5Sec2") {
            await Test5Sec2();
        }
        else if (testNo == "Test5Sec3") {
            await Test5Sec3();
        }
        else if (testNo == "Test6Sec1") {
            await Test6Sec1();
        }
        else if (testNo == "Test6Sec2") {
            await Test6Sec2();
        }
        else if (testNo == "Test6Sec3") {
            await Test6Sec3();
        }
        else if (testNo == "Test7Sec1") {
            await Test7Sec1();
        }
        else if (testNo == "Test7Sec2") {
            await Test7Sec2();
        }
        else if (testNo == "Test7Sec3") {
            await Test7Sec3();
        }
        else if (testNo == "Test8Sec1") {
            await Test8Sec1();
        }
        else if (testNo == "Test8Sec2") {
            await Test8Sec2();
        }
        else if (testNo == "Test8Sec3") {
            await Test8Sec3();
        }



        else if (testNo == "Test9Sec1") {
            await Test9Sec1();
        }
        else if (testNo == "Test9Sec2") {
            await Test9Sec2();
        }
        else if (testNo == "Test9Sec3") {
            await Test9Sec3();
        }
        else if (testNo == "Test10Sec1") {
            await Test10Sec1();
        }
        else if (testNo == "Test10Sec2") {
            await Test10Sec2();
        }
        else if (testNo == "Test10Sec3") {
            await Test10Sec3();
        }
        else if (testNo == "Test11Sec1") {
            await Test11Sec1();
        }
        else if (testNo == "Test11Sec2") {
            await Test11Sec2();
        }
        else if (testNo == "Test11Sec3") {
            await Test11Sec3();
        }
        else if (testNo == "Test12Sec1") {
            await Test12Sec1();
        }
        else if (testNo == "Test12Sec2") {
            await Test12Sec2();
        }
        else if (testNo == "Test12Sec3") {
            await Test12Sec3();
        }
        //test-13----------
        else if (testNo == "Test13Sec1") {
            await Test13Sec1();
        }

        else if (testNo == "Test13Sec3") {
            await Test13Sec3();
        }
        //test-14----------
        else if (testNo == "Test14Sec1") {
            await Test14Sec1();
        }

        else if (testNo == "Test14Sec3") {
            await Test14Sec3();
        }

        //test-15----------
        else if (testNo == "Test15Sec1") {
            await Test15Sec1();
        }

        else if (testNo == "Test15Sec3") {
            await Test15Sec3();
        }

        //test-16------------------------

        else if (testNo == "Test16Sec1") {
            await Test16Sec1();
        }

        else if (testNo == "Test16Sec3") {
            await Test16Sec3();
        }

        //test-17-------------------------

        else if (testNo == "Test17Sec1") {
            await Test17Sec1();
        }

        else if (testNo == "Test17Sec3") {
            await Test17Sec3();
        }

        //test-18-------------------------

        else if (testNo == "Test18Sec1") {
            await Test18Sec1();
        }

        else if (testNo == "Test18Sec3") {
            await Test18Sec3();
        }

        //test-19-------------------------

        else if (testNo == "Test19Sec1") {
            await Test19Sec1();
        }

        else if (testNo == "Test19Sec3") {
            await Test19Sec3();
        }

        //test-20-------------------------

        else if (testNo == "Test20Sec1") {
            await Test20Sec1();
        }

        else if (testNo == "Test20Sec3") {
            await Test20Sec3();
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

    var firstStopPlayTimer;

    async function playScript(msgText) {

        recordControlFlag = false;


        if (useReactMediaRecorder.state === "recording")
            // useReactMediaRecorder.stop();
            var ssmlFile = "Shakespeare.xml";
        // store all Questiion data into the state
        // setAllSpeechDataSTR(preSTR => preSTR + "Question:" + msgText + "~")
        // userSpeechMainData += "Question:" + " " + msgText + "~";
        //store Examiner speech data to a variable For storing Ansqwe & Question data when get the punctuation currestion when go to the next question

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

        // synthesizer.speakSsmlAsync(str)

        // synthesizer.speakSsmlAsync(
        //     str,
        //     function (result) {
        //
        //         // Success function
        //
        //         // display status
        //         if (result.reason === SpeechSDK.ResultReason.SynthesizingAudioCompleted) {
        //
        //             // load client-side audio control from Azure response
        //
        //
        //         } else if (result.reason === SpeechSDK.ResultReason.Canceled) {
        //             // display Error
        //             throw (result.errorDetails);
        //         }
        //         recordControlFlag = true;
        //         converstionStepsText = ''
        //         resetTranscript();
        //
        //
        //         // clean up
        //         // synthesizer.close();
        //         // synthesizer = undefined;
        //
        //     },
        //     function (err) {
        //
        //         // Error function
        //         throw (err);
        //
        //
        //         // clean up
        //         synthesizer.close();
        //         synthesizer = undefined;
        //     });

        // synthesizer.speakTextAsync(
        //     msgText,
        //     function (result) {
        //
        //         // Success function
        //
        //         // display status
        //         if (result.reason === SpeechSDK.ResultReason.SynthesizingAudioCompleted) {
        //
        //             // load client-side audio control from Azure response
        //
        //
        //         } else if (result.reason === SpeechSDK.ResultReason.Canceled) {
        //             // display Error
        //             throw (result.errorDetails);
        //         }
        //         recordControlFlag = true;
        //         converstionStepsText = ''
        //         resetTranscript();
        //
        //
        //         // clean up
        //         // synthesizer.close();
        //         // synthesizer = undefined;
        //
        //     },
        //     function (err) {
        //
        //         // Error function
        //         throw (err);
        //
        //         player.play();
        //         // clean up
        //         synthesizer.close();
        //         synthesizer = undefined;
        //     });

        // setSpeakingState('Waiting for your speech...');


        // recordControlFlag = false;
        // if (useReactMediaRecorder.state === "recording")
        //     useReactMediaRecorder.stop();
        // msg.text = msgText;
        // console.log(useReactMediaRecorder.state);
        // window.speechSynthesis.speak(msg);
        // msg.onend = function () {
        //     recordControlFlag = true;
        //     converstionStepsText = ''
        //     resetTranscript();
        //     // resetTranscript();
        // };
    }

    const record = async () => {

        //         let speechConfig = SpeechSDK.SpeechConfig.fromSubscription(SUBSCRIPTION_KEY, REGION);
        //         speechConfig.speechSynthesisVoiceName = "en-US-DavisNeural";
        //         player = new SpeechSDK.SpeakerAudioDestination();
        //
        //         let audioConfig  = SpeechSDK.AudioConfig.fromSpeakerOutput(player);
        // // new Speech object
        //         synthesizer = new SpeechSDK.SpeechSynthesizer(speechConfig, audioConfig);



        setIsIconClicked(!isIconClicked);
        // synthesizer = new SpeechSDK.SpeechSynthesizer(speechConfig, audioConfig);

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
                    // speakInterval = 0;
                    // firstStopPlayTimer = setInterval(function () {
                    //     speakInterval++;
                    //     console.log(speakInterval)
                    //     if (speakInterval == 25) {
                    //         console.log("Warningn message...")
                    //         playScript("You are not responding we are going to finished the test...")
                    //     }
                    //     if (speakInterval === 33) {
                    //         console.log("Leaving messages...");
                    //         stopRecording();
                    //         history.push("/SpeakingPage");

                    //     }
                    // }, 1000)
                    // Get audio stream


                    // navigator.mediaDevices
                    //     .getUserMedia({video: false, audio: true})
                    //     .then((stream) => {
                    //         window.localStream = stream; // A
                    //         window.localAudio.srcObject = stream; // B
                    //         window.localAudio.autoplay = true; // C
                    //     })
                    //     .catch((err) => {
                    //         console.error(`you got an error: ${err}`);
                    //     }); 
                    stream = await navigator.mediaDevices.getUserMedia({
                        audio: true,
                        video: false,
                    });
                    // useReactMediaRecorder = new MediaRecorder(stream);
                    // Also pass the stream to hark to create speaking events
                    var speech = hark(stream, {});
                    // Start the recording when hark recognizes someone is speakign in the mic

                    speech.on("speaking", function () {
                        setMakeWave(true);
                        setPlayAudio(false)
                        console.log("Speaking!..............");
                        console.log('window.speechFinished');
                        console.log(window.speechFinished);
                        clearTimeout(timeoutSpeechBreak);
                        // clearInterval(StopPlay);

                        if (globalSpeakingState == 'ExaminerAudioEnd') {

                            setSpeakingState('You are Speaking...');
                            clearInterval(StopPlay);
                            StopPlay = null;
                            console.log("Speaking!");
                            // setNotAnswering(false);

                            doubleNotSpeaking = false;
                            if (useReactMediaRecorder.state != "recording") {
                                useReactMediaRecorder.start();
                            }

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
                                    // converstionStepsText = document.getElementById('transcriptText').textContent;
                                    let wordCount = converstionStepsText.trim().split(/\s+/).length;
                                    console.log(wordCount);
                                    //collect the user Speech word count into the variable
                                    userEveryAnsCount = wordCount

                                    let questionData = document.getElementById("getQuestionData").textContent;
                                    //get user every answer words count by below code-----
                                    let conversationalTextWordCount = converstionStepsText.split(" ").filter((e) => e != "");
                                    // console.log(conversationalTextWordCount.length)
                                    // console.log(typeof conversationalTextWordCount.length)
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




                                // if (useReactMediaRecorder.state === "recording") useReactMediaRecorder.stop();


                            }, 3000);
                            console.log("Not Speaking second time");
                            if (useReactMediaRecorder.state === "recording")
                                // useReactMediaRecorder.stop();
                                console.log(recordControlFlag);
                            console.log(doubleNotSpeaking);
                        }
                        if (recordControlFlag && useReactMediaRecorder.state != "recording") {
                            useReactMediaRecorder.start();
                        }
                        doubleNotSpeaking = true;
                        //   if(converstionStepsText === ""){
                        //     setTimeout(() => {

                        //     }, 20000);
                        //   }

                    });
                    useReactMediaRecorder.ondataavailable = (e) => {
                        console.log(e.data + "Audio data----")
                        sendRecording(e.data);



                        if (recordControlFlag) {
                            // sendRecording(e.data).then(async (newMessage) => {
                            //     console.log(JSON.stringify(newMessage));
                            //     recordedText = recordedText + newMessage.text;
                            //     if (!speech.speaking) {

                            //     }

                            // sendPrompt(newMessage).then(aiRes => {
                            //   setMessages([...chat, newMessage.text, aiRes.data.choices[0].text]);
                            //
                            //
                            //
                            //   console.log(JSON.stringify(newMessage))
                            //   console.log(JSON.stringify(aiRes))
                            // })
                            // });
                        }
                    };


                    await checkingReplyofUser();
                    // Generate the media recorder with stream from media devices
                    // Starting position is paused recording
                    //

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

    const stopRecording = async () => {
        // clean up
        setSpeakingState('Play to start..');
        window.playerG.pause();
        setIsIconClicked(!isIconClicked);
        // if (useReactMediaRecorder) {
        //     if (useReactMediaRecorder.state === "recording")
        //         useReactMediaRecorder.stop();
        //
        //     useReactMediaRecorder.stream.getTracks().forEach((track) => track.stop());
        // }
    };
    //examiner speaking process

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
                    history.push("/SpeakingPage");

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



    console.log(checkStatusForSpeechMethod)
    // console.log(transcript && transcript)
    // console.log(transcriptTextbyOpenAi && transcriptTextbyOpenAi)

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

            {/* main section */}
            {/* <div className="w-full mt-[-10px] grid  justify-center gap-0 h-auto  box-border " >
                <div className=" w-[90vw] sm:w-[500px] bg-white p-2  rounded ">
                    <div className="flex justify-between w-full  p-1">
                        <h5 className="">Examiner's Speech</h5>
                        <button
                            className="p-2 rounded-[50%] text-center"
                            style={{ background: ShowQuestion ? "orange" : "pink" }}
                            onClick={() => { setShowQuestion(!ShowQuestion) }}>
                            {ShowQuestion ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </button>

                    </div>
                    {ShowQuestion && (<div>{SQuestion} </div>)}
                    {isIconClicked && (<div className="w-full flex justify-end">
                        <button className=" mr-2 p-2 mt-3 bg-blue-600 text-white rounded text-[14px]"
                            onClick={() => { setAnswerPop(!AnswerPop) }}
                        >Sample Answer</button></div>)}
                </div>
            </div> */}
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
                                {/* <div className="w-full flex justify-end">
                                    <button className=" mr-2 p-2 mt-3 bg-blue-600 text-white rounded text-[11px] sm:text-[14px]"
                                        onClick={() => { setAnswerPop(!AnswerPop) }}
                                    >Sample Answer</button>
                                </div> */}
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





            {/* <div className="w-full grid  justify-center gap-0 mt-3  h-auto  box-border " >
                <div className=" w-[90vw] sm:w-[500px] bg-white p-2  rounded ">
                    <div className="flex justify-between  w-full  p-1">
                        <h5 className="">Your Speech</h5>
                        <button
                            className=" p-2 rounded-[50%] text-center"
                            style={{ background: ShowAnswers ? "orange" : "pink" }}
                            onClick={() => { setShowAnswers(!ShowAnswers) }}>
                            {ShowAnswers ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </button>
                    </div>
                    {ShowAnswers && (<div id={'transcriptText'}>{transcript}</div>)}
                </div>

            </div> */}




















            {/* before comment-out codes */}

            {/*<button onClick={handlePush} className={buttonChange.class}>*/}
            {/*<span style={{ color: "transparent" }}>*/}
            {/*  {buttonChange.buttonText}*/}
            {/*</span>*/}
            {/*</button>*/}


            {/* <div className="w-full flex flex-wrap mt-2 justify-center h-auto align-middle pl-2 pr-2 box-border text-white"> */}
            {/*<button onClick={stsrSpeechRec}>Start</button>*/}
            {/*<button onClick={SpeechRecognition.abortListening}>Abort</button>*/}
            {/*<button onClick={resetTranscript}>Reset</button>*/}
            {/*<p style={{'display': 'none'}} id={'transcriptText'}>{transcript}</p>*/}
            {/* <i id={'transcriptText'}>{transcript}</i> */}
            {/* </div> */}



            {/* for-Result-Pop-Up */}
            <div className="Result-PopUp pt-[120px]  fixed top-2 left-0 sm:left-2 w-[92%] sm:w-[100%]">
                {/* {
                    postIeltsRate && (
                        <div className="grid w-[100vw] h-[100%] justify-center align-middle">
                            <section className=' grid grid-cols-1 mt-2 rounded  justify-center align-middle w-[100vw] sm:w-[600px] p-4 h-[440px]  bg-white shadow-2xl border-2 border-gray-400 z-[100000] '>
                                <div className="w-full flex justify-end ">

                                    <Image src={logo} alt="" className="w-[30%] sm:w-[20%] h-[60px]  cursor-pointer"
                                        onClick={() => { history.push("/") }}
                                    />
                                </div>

                                {
                                    localStorage.getItem("userEmail") ? "" : (
                                        <div className='w-full h-[50px] flex justify-center align-middle pt-2 font-bold text-xl bg-red-200 text-black rounded'>
                                            Please login if you want to save your speech.
                                        </div>
                                    )
                                }

                                <div className="m-auto translate-y-[-26px]">
                                    <div className="translate-x-[65px] mb-2">
                                        <Flex gap="small" wrap="wrap">
                                            <Progress type="circle" strokeWidth={12} percent={Number(postIeltsRate) / 9 * 100} format={(percent) => `${postIeltsRate}`} size={85} strokeColor="rgb(255, 145, 0)" trailColor="rgb(192,192,192)" />
                                        </Flex>
                                        <p className="text-[11px] font-bold ml-3">Ielts Score</p>
                                    </div>
                                    <div className="ml-2">
                                        <div>
                                            <div className="relative w-[200px] bg-[rgb(192,192,192)] rounded h-[25px] mb-1 ">
                                                <div className="bg-[rgb(255,145,0)] h-[25px] rounded" style={{ width: Number(LexicalResourceScore) / 10 * 100 + "%" }}></div>
                                                <div className="barTexts w-[200px] flex justify-between align-middle absolute top-0 left-0">
                                                    <p className='ml-2 text-black font-bold text-[12px]'>LexicalResource</p>
                                                    <p className='font-bold text-black text-xl mr-2'>{LexicalResourceScore}</p>
                                                </div>
                                            </div>
                                            <div className="relative w-[200px] bg-[rgb(192,192,192)] rounded h-[25px] mb-1 ">
                                                <div className="bg-[rgb(255,175,0)] h-[25px] rounded" style={{ width: Number(GrammarScore) / 10 * 100 + "%" }}></div>
                                                <div className="barTexts w-[200px] flex justify-between align-middle absolute top-0 left-0">
                                                    <p className='ml-2 text-black font-bold text-[12px]'>Grammar</p>
                                                    <p className='font-bold text-black text-xl mr-2'>{GrammarScore}</p>
                                                </div>
                                            </div>
                                            <div className="relative w-[200px] bg-[rgb(192,192,192)] rounded h-[25px] mb-1 ">
                                                <div className="bg-[rgba(255,179,0,0.80)] h-[25px] rounded" style={{ width: Number(ieltswordscore) / 9 * 100 + "%" }}></div>
                                                <div className="barTexts w-[200px] flex justify-between align-middle absolute top-0 left-0">
                                                    <p className='ml-2 text-black font-bold text-[12px]'>Fluency Score</p>
                                                    <p className='font-bold text-black text-xl mr-2'>{(ieltswordscore)}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className='w-full flex justify-end '>
                                    <button
                                        className='w-[100px] h-[40px] mt-auto border-2 border-gray-300 text-black rounded bg-blue-300 hover:bg-white'
                                        onClick={() => { stopRecording(); history.push("/SpeakingPage"); }}>Close
                                    </button>

                                </div>

                            </section>
                        </div>
                    )
                } */}

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
            {/* Showing the sample Ans Popup  */}

            {
                // AnswerPop && <div className="Result-PopUp  pt-[115px]   fixed top-2 left-2 w-[90%] sm:w-[100%] z-[345678900000] ">
                //     <div className="grid w-[100vw] h-[100%] justify-center align-middle">
                //         <section className='mt-2 rounded box-border overflow-auto w-[100vw] sm:w-[600px] p-4 min-h-auto max-h-[460px]  z-[100000]  bg-sky-100 '>
                //             <div className="w-full flex justify-end mb-2 h-auto">
                //                 {/* <Image src={logo} alt="" className="w-[120px] sm:w-[150px] h-[70px] sm:h-[80px] cursor-pointer mt-[-10px] sm:mr-[10px] mr-0"
                //                     onClick={() => { history.push("/") }}
                //                 /> */}
                //                 <button
                //                     style={{ color: 'rgb(153, 17 180)' }}
                //                     className="text-3xl  hover:drop-shadow-xl rounded-[50%] pt-[13px] sm:mr-5 mr-1
                //                    hover:bg-light-gray w-[56px] h-[56px] flex justify-center align-middle"
                //                     onClick={() => { setAnswerPop(false) }}>  <MdOutlineCancel />
                //                 </button>
                //             </div>

                //             <div className=' z-[100000] mt-3'>
                //                 <h4 className="font-bold text-center underline text-blue-500 mb-3">Sample Answer's for this question</h4>
                //                 <p className="font-bold text-justify">
                //                     {sampleAns[0]} <br /> <br />
                //                     {sampleAns[1]}<br /> <br />
                //                     {sampleAns[2]}<br />
                //                 </p>
                //             </div>

                //         </section>
                //     </div>
                // </div>
            }




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

            {/* hidden timer for of the recorder */}
            {/* <div className="w-full text-center invisible  p-1">
                <SStopTimer Second={1000} stopRecording={stopRecording} LeaveSpeech={LeaveSpeech} />
            </div> */}

            {/* if user not answering the time will be start */}
            {/* <div className="w-full text-center invisible p-1">
                {notAnswering && <NotAnsweringTimer Second={40} LeaveSpeech={LeaveSpeech} />}
            </div> */}

            {/* Network Error PopUp */}
            {/*<NetworkCom />*/}


            {/* Show the introductions PopUps when user will comme 
           for the first time into this area  */}


        </section>

    );
}

export default ClickSpeaking;

















