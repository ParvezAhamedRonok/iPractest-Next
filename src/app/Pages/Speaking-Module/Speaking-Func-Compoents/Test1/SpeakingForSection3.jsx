"use client"
import React, { useState, useEffect, useRef } from "react";
import "../allStyle/ClickSpeaking.css";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

import { BiTimer } from "react-icons/bi"
import { useReactMediaRecorder } from "react-media-recorder";
import axios from "axios";
import hark from "hark";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { isMobile } from "react-device-detect";
import Timer from "./Timer";
import SStopTimer from "../Pages/S-secTimer"
import PermissionDenieP from "../Pages/PermissionDenieP";
import { ClockLoader } from "react-spinners";
import { useRouter } from "next/navigation";

import { localeCompare } from "../Pages/CompareFunction.js"
import Image from "next/image";
import { SPEAKING_GET_SPECIFIC_USER_READING_LAST_DATA, SPEAKING_POST_FOR_SET_SCORES, SPEAKING_POST_TO_GET_RESPONSE_USERDATA } from "../../../../../assets/URL's/AllUrl.js"
import { useStateContext } from "../../../../../contexts/ContextProvider";
import ShowTestName from "../Pages/ShowTestName.jsx";
import { BiWifiOff } from "react-icons/bi";
// END OF THE IMPORTING....


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


const createCollectionsInIndexesDB = () => {
    //connect the indexDB for storing data -----------------------
    //prefixes of implementation that we want to test
    const windowIndexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

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
    const { bdPaidStatus, setBdPaidSatus, otherPaidStatus, setOtherPaidStatus, showSpeakingResult, setShoeSpeakingResult } = useStateContext();
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

    history.listen = ((location, action) => {

        SpeechRecognition.abortListening();
        SpeechRecognition.stopListening();
        clearInterval(timer);
        clearTimeout(oneMinuteTimeout)
        clearTimeout(TwoMinuteTimeout);
        clearInterval(StopPlay);
        StopPlay = null;

        try {
            stream.getTracks()[0].stop();
            useReactMediaRecorder.stop();
            window.playerG.pause();
            firstplay = true;
        } catch (error) {
            console.log(error)
        }


    })


    if (!browserSupportsSpeechRecognition) {
        return null;
    }
    function stsrSpeechRec() {
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






    const getUserLatestDataFromDatabaseSave = (localItem) => {
        setTimeout(() => {
            axios({
                method: "get",
                // url: 'http://localhost:8080/api/user/get-SpecificUser-Speaking-Data-last-One/' + userEmail + "+" + testNo,
                url: SPEAKING_GET_SPECIFIC_USER_READING_LAST_DATA + userEmail + "+" + testNo,

                headers: {
                    "Authorization": `Bearer ${userMainToken}`,
                    'Content-Type': 'application/json'
                }
            })
                .then((res) => {
                    console.log(res.data.data);
                    localStorage.setItem(localItem, res.data.data.ieltsScore);

                })
                .catch((e) => { console.log(e) })
        }, 1000);
    }













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
        useReactMediaRecorder.stop();
        console.log(mainText);

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
                //save user result data , Speech ans data & step Number into the localhost below...
                // localStorage.setItem("showSpeakingResult", JSON.stringify({
                //     ieltsResult: res.data.ieltsScore,
                //     LexicalResourceResult: res.data.LexicalResourceScore,
                //     GrammerResult: res.data.GrammaticalScore,
                //     ieltswordResult: parseInt(ieltswordscore).toFixed(1),
                //     userSpeechAnsData: sentData.inputs,
                //     sectionNo: testNo
                // }));


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

                ShowSpeakingTestScors(totalIeltsScores);
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

                        history.push("/Speaking-user-Result-Page")
                        // window.location.reload();
                        // stopRecording();
                    })
                    .catch((e) => {
                        console.log(e);
                        setisloading(false);

                        history.push("/Speaking-user-Result-Page")
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
    // Test4Sec1 , Test4Sec1 , Test4Sec1
    // Test5Sec1 , Test5Sec1 , Test5Sec1
    // Test6Sec1 , Test6Sec1 , Test6Sec1
    // Test7Sec1 , Test7Sec1 , Test7Sec1
    // Test8Sec1 , Test8Sec1 , Test8Sec1

    //test-1 section2
    async function Test1Sec2() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            if (!userSpeakingSec2Test) {
                await playScript("For this part, I will show you some questions. You will have one minute to look at these questions. In the one minute preparation time you can take notes if you wish.Your one minute preparation is starting now.");
            } else {
                await playScript("OK.Your one minute preparation is starting now.")
            }

            let questionElement = document.getElementById('questions');
            questionElement.innerHTML = `<div style="padding:15px; text-align:justify; border:15px solid orange; border-radius:10px">
            <div style="padding:4px; text-align:center">
            <h4 className="text-center">IELTS Speaking Part 2</h4>
            <h4 className="text-center">IELTS Cue Card</h4> <br />
            </div>
  <div >
  <h5>Talk about an idea you have had to make your learning more effective.</h5>
  <h5 className="mt-1 mb-1 text-purple-600">You should say :</h5>
      <div className="ml-4 p-1 font-bold">
            <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-red-300  rounded-[50%]'></i>   What is the idea?</div>
           
            <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-gray-300  rounded-[50%]'></i>   When and where did you think about the idea?</div>
           
            <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-green-300  rounded-[50%]'></i>  How does this idea make your learning more effective?</div>
           
            <div><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-purple-300  rounded-[50%]'></i>  What encouraged you to think about this idea and how can you improve it further?</div>

       </div>
  </div>
            </div>`


            // store all of the Question to the variable & send to the local indexdDB local databases..
            // userSpeechMainData += "Question:" + "Talk about an idea you have had to make your learning more effective.~" + "Question:" + " What is the idea?~" + "Question:" + " When and where did you think about the idea?~" + "Question:" + " How does this idea make your learning more effective?~" + "What encouraged you to think about this idea and how can you improve it further?~"
            preparationFlag = true;
            setCurrectTimer(true);

            converstionStepsText = "";



        }

    }
    // text-2-sections

    async function Test2Sec2() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            if (!userSpeakingSec2Test) {
                await playScript("For this part, I will show you some questions. You will have one minute to look at these questions. In the one minute preparation time you can take notes if you wish.Your one minute preparation is starting now.");
            } else {
                await playScript("OK.Your one minute preparation is starting now.")
            }



            let questionElement = document.getElementById('questions');
            questionElement.innerHTML = `<div style="padding:15px; text-align:justify; border:15px solid orange; border-radius:10px">
            <div style="padding:4px; text-align:center">
            <h4 className="text-center">IELTS Speaking Part 2</h4>
            <h4 className="text-center">IELTS Cue Card</h4> <br />
            </div>
            <h5>Describe a place where there was a lot of noise </h5>
            <h5 className="mt-1 mb-1 text-purple-600">You should say :</h5>
                <div className="ml-4 p-1 font-bold">
                      <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-red-300  rounded-[50%]'></i> When this happened?  </div>
                     
                      <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-gray-300  rounded-[50%]'></i>    Where it was? </div>
                     
                      <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-green-300  rounded-[50%]'></i> Why there was a lot of noise</div>
                     
                      <div><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-purple-300  rounded-[50%]'></i> Explain what you did when you heard the noise</div>

                 </div>
            </div>`


            preparationFlag = true;
            setCurrectTimer(true);
            converstionStepsText = "";


        }

    }

    // text-3-sections

    async function Test3Sec2() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            if (!userSpeakingSec2Test) {
                await playScript(// for this part I will show you some questions you will have one minute to look at these questions please do not touch the question card and then you will have one to two minutes to speak in the one minute preparation time you can take notes if you wish you have your pencil and Note Paper there I will tell you when to start and when to stop
                    "For this part, I will show you some questions. You will have one minute to look at these questions. In the one minute preparation time you can take notes if you wish.Your one minute preparation is starting now.");
            } else {
                await playScript("OK.Your one minute preparation is starting now.")
            }



            let questionElement = document.getElementById('questions');
            questionElement.innerHTML = `<div style="padding:15px; text-align:justify; border:15px solid orange; border-radius:10px">
            <div style="padding:4px; text-align:center">
            <h4 className="text-center">IELTS Speaking Part 2</h4>
            <h4 className="text-center">IELTS Cue Card</h4> <br />
            </div>
            <h5 > Describe a person who inspired you to do something interesting?</h5>
            <h5 className="mt-1 mb-1 text-purple-600">You should say :</h5>
                <div className="ml-4 p-1 font-bold">
                      <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-red-300  rounded-[50%]'></i>    Who is this person? </div>
                     
                      <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-gray-300  rounded-[50%]'></i>    - What they inspired you to do?</div>
                     
                      <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-green-300  rounded-[50%]'></i> How do they inspire you?</div>
                     
                      <div><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-purple-300  rounded-[50%]'></i>How do you feel?</div>

                 </div>
            </div>`
            // store all of the Question to the variable & send to the local indexdDB local databases..
            console.log(userSpeechMainData)

            preparationFlag = true;
            setCurrectTimer(true);
            converstionStepsText = "";


        }
    }
    // test-4-Sections

    async function Test4Sec2() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            if (!userSpeakingSec2Test) {
                await playScript("For this part, I will show you some questions. You will have one minute to look at these questions. In the one minute preparation time you can take notes if you wish.Your one minute preparation is starting now.");
            } else {
                await playScript("OK.Your one minute preparation is starting now.")
            }



            let questionElement = document.getElementById('questions');
            questionElement.innerHTML = `<div style="padding:15px; text-align:justify; border:15px solid orange; border-radius:10px">
            <div style="padding:4px; text-align:center">
            <h4 className="text-center">IELTS Speaking Part 2</h4>
            <h4 className="text-center">IELTS Cue Card</h4> <br />
            </div>
            <h5>Describe an achievement or success you are proud of?</h5>
            <h5 className="mt-1 mb-1 text-purple-600">You should say :</h5>
                <div className="ml-4 p-1 font-bold">
                      <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-red-300  rounded-[50%]'></i>What did you do?</div>

                      <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-gray-300  rounded-[50%]'></i>    –  When did you do it? </div>

                      <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-green-300  rounded-[50%]'></i>     How did you feel about it?</div>

                      <div><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-purple-300  rounded-[50%]'></i>  Why did that achievement make you proud?</div>

                 </div>
            </div>`

            // store all of the Question to the variable & send to the local indexdDB local databases..

            console.log(userSpeechMainData)

            preparationFlag = true;
            setCurrectTimer(true);

            converstionStepsText = "";


        }

    }
    //test-5 -- all sections
    async function Test5Sec2() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            if (!userSpeakingSec2Test) {
                await playScript("For this part, I will show you some questions. You will have one minute to look at these questions. In the one minute preparation time you can take notes if you wish.Your one minute preparation is starting now.");
            } else {
                await playScript("OK.Your one minute preparation is starting now.")
            }



            let questionElement = document.getElementById('questions');
            questionElement.innerHTML = `<div style="padding:15px; text-align:justify; border:15px solid orange; border-radius:10px">
            <div style="padding:4px; text-align:center">
            <h4 className="text-center">IELTS Speaking Part 2</h4>
            <h4 className="text-center">IELTS Cue Card</h4> <br />
            </div>
            <h5>  Describe a family member whom you would like to  work with in the future.  </h5>
            <h5 className="mt-1 mb-1 text-purple-600">You should say :</h5>
                <div className="ml-4 p-1 font-bold">
                      <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-red-300  rounded-[50%]'></i> Who the person is </div>
                     
                      <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-gray-300  rounded-[50%]'></i> Have you ever worked with the person before  </div>
                     
                      <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-green-300  rounded-[50%]'></i>  What kinds of work you would like to do with the person</div>
                     
                      <div><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-purple-300  rounded-[50%]'></i> And explain how you will feel if you can finally work together.</div>

                 </div>
            </div>`


            preparationFlag = true;
            setCurrectTimer(true);
            converstionStepsText = "";


        }

    }
    //test-6 --all sections--


    async function Test6Sec2() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            if (!userSpeakingSec2Test) {
                await playScript("For this part, I will show you some questions. You will have one minute to look at these questions. In the one minute preparation time you can take notes if you wish.Your one minute preparation is starting now.");
            } else {
                await playScript("OK.Your one minute preparation is starting now.")
            }



            let questionElement = document.getElementById('questions');
            questionElement.innerHTML = `<div style="padding:15px; text-align:justify; border:15px solid orange; border-radius:10px">
            <div style="padding:4px; text-align:center">
            <h4 className="text-center">IELTS Speaking Part 2</h4>
            <h4 className="text-center">IELTS Cue Card</h4> <br />
            </div>
            <h5>   Talk about an important river or lake in your country or hometown </h5>
            <h5 className="mt-1 mb-1 text-purple-600">You should say :</h5>
                <div className="ml-4 p-1 font-bold">
                      <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-red-300  rounded-[50%]'></i> Which water body is that </div>
                     
                      <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-gray-300  rounded-[50%]'></i> How do you know about it? </div>
                     
                      <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-green-300  rounded-[50%]'></i>Why does it impress you so much</div>
                 </div>
            </div>`


            preparationFlag = true;
            setCurrectTimer(true);
            converstionStepsText = "";


        }

    }



    //test-7 all sections---

    async function Test7Sec2() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            if (!userSpeakingSec2Test) {
                await playScript("For this part, I will show you some questions. You will have one minute to look at these questions. In the one minute preparation time you can take notes if you wish.Your one minute preparation is starting now.");
            } else {
                await playScript("OK.Your one minute preparation is starting now.")
            }



            let questionElement = document.getElementById('questions');
            questionElement.innerHTML = `<div style="padding:15px; text-align:justify; border:15px solid orange; border-radius:10px">
            <div style="padding:4px; text-align:center">
            <h4 className="text-center">IELTS Speaking Part 2</h4>
            <h4 className="text-center">IELTS Cue Card</h4> <br />
            </div>
                  <h5>Talk about an enjoyable experience you had at a restaurant</h5>
                  <h5 className="mt-1 mb-1 text-purple-600">You should say :</h5>
                      <div className="ml-4 p-1 font-bold">
                            <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-red-300  rounded-[50%]'></i>   When did this happen?</div>
                           
                            <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-gray-300  rounded-[50%]'></i>Who were you there with?</div>
                           
                            <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-green-300  rounded-[50%]'></i> What was positive about this experience?</div>
                           
                            <div><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-purple-300  rounded-[50%]'></i>What could you recommend for the restaurant to be even better</div>
      
                       </div>
                  </div>`




            preparationFlag = true;
            setCurrectTimer(true);
            converstionStepsText = "";


        }
    }

    //test-8 all sections---

    async function Test8Sec2() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            if (!userSpeakingSec2Test) {
                await playScript("For this part, I will show you some questions. You will have one minute to look at these questions. In the one minute preparation time you can take notes if you wish.Your one minute preparation is starting now.");
            } else {
                await playScript("OK.Your one minute preparation is starting now.")
            }



            let questionElement = document.getElementById('questions');
            questionElement.innerHTML = `<div style="padding:15px; text-align:justify; border:15px solid orange; border-radius:10px">
            <div style="padding:4px; text-align:center">
            <h4 className="text-center">IELTS Speaking Part 2</h4>
            <h4 className="text-center">IELTS Cue Card</h4> <br />
            </div>
                            <h5>Discuss a difficult decision that you have made .</h5>
                            <h5 className="mt-1 mb-1 text-purple-600">You should say :</h5>
                                <div className="ml-4 p-1 font-bold">
                                      <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-red-300  rounded-[50%]'></i> What was the big decision?</div>
                                     
                                      <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-gray-300  rounded-[50%]'></i>When did you make this decision?</div>
                                     
                                      <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-green-300  rounded-[50%]'></i>Why was it difficult?</div>
                                     
                                      <div><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-purple-300  rounded-[50%]'></i>What was the outcome, and would you do anything differently?</div>
                
                                 </div>
                            </div>`






            preparationFlag = true;
            setCurrectTimer(true);
            converstionStepsText = "";


        }
    }





    //test-9 all sections---

    async function Test9Sec2() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            if (!userSpeakingSec2Test) {
                await playScript("For this part, I will show you some questions. You will have one minute to look at these questions. In the one minute preparation time you can take notes if you wish.Your one minute preparation is starting now.");
            } else {
                await playScript("OK.Your one minute preparation is starting now.")
            }



            let questionElement = document.getElementById('questions');
            questionElement.innerHTML = `<div style="padding:15px; text-align:justify; border:15px solid orange; border-radius:10px">
            <div style="padding:4px; text-align:center">
            <h4 className="text-center">IELTS Speaking Part 2</h4>
            <h4 className="text-center">IELTS Cue Card</h4> <br />
            </div>
            <h5 className="">Talk about a club that you have been a member of in the past.</h5>
            <h5 className="mt-1 mb-1 text-purple-600">You should say :</h5>
                <div className="ml-4 p-1 font-bold">
                      <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-red-300  rounded-[50%]'></i>  What was this club ?</div>
                      <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-gray-300  rounded-[50%]'></i>  How long were you in this club?</div>
                      <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-green-300  rounded-[50%]'></i>   What did you do at  this club?</div>
                      <div><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-purple-300  rounded-[50%]'></i>  Did you like being a member of this club and why did you stop?</div>

                 </div>
            </div>`
            preparationFlag = true;
            setCurrectTimer(true);
            converstionStepsText = "";


        }
    }


    //test-10 all sections---

    async function Test10Sec2() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            if (!userSpeakingSec2Test) {
                await playScript("For this part, I will show you some questions. You will have one minute to look at these questions. In the one minute preparation time you can take notes if you wish.Your one minute preparation is starting now.");
            } else {
                await playScript("OK.Your one minute preparation is starting now.")
            }



            let questionElement = document.getElementById('questions');
            questionElement.innerHTML = `<div style="padding:15px; text-align:justify; border:15px solid orange; border-radius:10px"> 
            <div style="padding:4px; text-align:center">
            <h4 className="text-center">IELTS Speaking Part 2</h4>
            <h4 className="text-center">IELTS Cue Card</h4> <br />
            </div>
            <h5 className=""> Describe a piece of good news you heard from others </h5>
            <h5 className="mt-1 mb-1 text-purple-600">You should say :</h5>
                <div className="ml-4 p-1 font-bold">
                      <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-red-300  rounded-[50%]'></i> What was it?</div>
                      <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-gray-300  rounded-[50%]'></i> When you received this news?</div>
                      <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-green-300  rounded-[50%]'></i> How you received this news? </div>
                      <div><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-purple-300  rounded-[50%]'></i> Why do you feel it was good news?</div>

                 </div>
            </div>`



            preparationFlag = true;
            setCurrectTimer(true);

            converstionStepsText = "";


        }
    }



    // text-11-sections

    async function Test11Sec2() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            if (!userSpeakingSec2Test) {
                await playScript(// for this part I will show you some questions you will have one minute to look at these questions please do not touch the question card and then you will have one to two minutes to speak in the one minute preparation time you can take notes if you wish you have your pencil and Note Paper there I will tell you when to start and when to stop
                    "For this part, I will show you some questions. You will have one minute to look at these questions. In the one minute preparation time you can take notes if you wish.Your one minute preparation is starting now.");
            } else {
                await playScript("OK.Your one minute preparation is starting now.")
            }



            let questionElement = document.getElementById('questions');
            questionElement.innerHTML = `<div style="padding:15px; text-align:justify; border:15px solid orange; border-radius:10px">
            <div style="padding:4px; text-align:center">
            <h4 className="text-center">IELTS Speaking Part 2</h4>
            <h4 className="text-center">IELTS Cue Card</h4> <br />
            </div>
            <h5>Talk about  your dream vacation. </h5>
            <h5 className="mt-1 mb-1 text-purple-600">You should say :</h5>
                <div className="ml-4 p-1 font-bold">
                      <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-red-300  rounded-[50%]'></i>   Where would you go? </div>
                     
                      <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-gray-300  rounded-[50%]'></i>    -When would you go there?</div>
                     
                      <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-green-300  rounded-[50%]'></i>   Who would you go with and why?</div>
                     
                      <div><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-purple-300  rounded-[50%]'></i>  What kinds of activities would you do?  & why is this your dream vocation?</div>

                 </div>
            </div>`


            preparationFlag = true;
            setCurrectTimer(true);
            converstionStepsText = "";


        }
    }
    // test-12-Sections

    async function Test12Sec2() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            if (!userSpeakingSec2Test) {
                await playScript("For this part, I will show you some questions. You will have one minute to look at these questions. In the one minute preparation time you can take notes if you wish.Your one minute preparation is starting now.");
            } else {
                await playScript("OK.Your one minute preparation is starting now.")
            }



            let questionElement = document.getElementById('questions');
            questionElement.innerHTML = `<div style="padding:15px; text-align:justify; border:15px solid orange; border-radius:10px">
            <div style="padding:4px; text-align:center">
            <h4 className="text-center">IELTS Speaking Part 2</h4>
            <h4 className="text-center">IELTS Cue Card</h4> <br />
            </div>
            <h5>Talk about an important choice that you had in your life. </h5>
            <h5 className="mt-1 mb-1 text-purple-600">You should say :</h5>
                <div className="ml-4 p-1 font-bold">
                      <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-red-300  rounded-[50%]'></i>   When did you make this choice? </div>
                     
                      <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-gray-300  rounded-[50%]'></i>    – What did you have to choose between? </div>
                     
                      <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-green-300  rounded-[50%]'></i>    Did you make a good choice or not ?</div>
                     
                      <div><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-purple-300  rounded-[50%]'></i> How did you feel when you were making the choice?</div>

                 </div>
            </div>`


            preparationFlag = true;
            setCurrectTimer(true);
            converstionStepsText = "";


        }

    }


    // test-13


    async function Test13Sec2() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            if (!userSpeakingSec2Test) {
                await playScript("For this part, I will show you some questions. You will have one minute to look at these questions. In the one minute preparation time you can take notes if you wish.Your one minute preparation is starting now.");
            } else {
                await playScript("OK.Your one minute preparation is starting now.")
            }



            let questionElement = document.getElementById('questions');
            questionElement.innerHTML = `<div style="padding:15px; text-align:justify; border:15px solid orange; border-radius:10px"> 
            <div style="padding:4px; text-align:center">
            <h4 className="text-center">IELTS Speaking Part 2</h4>
            <h4 className="text-center">IELTS Cue Card</h4> <br />
            </div>
            <h5>Describe a time when you were late?</h5>
            <h5 className="mt-1 mb-1 text-purple-600">You should say :</h5>
                <div className="ml-4 p-1 font-bold">
                      <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-red-300  rounded-[50%]'></i> When was it?</div>
                     
                      <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-gray-300  rounded-[50%]'></i>Why were you late?</div>
                     
                      <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-green-300  rounded-[50%]'></i>How feel you feel about being late?</div>
                 </div>
            </div>`
            // store all of the Question to the variable & send to the local indexdDB local databases..
            console.log(userSpeechMainData)
            preparationFlag = true;
            setCurrectTimer(true);


            console.log("converstionStepsText");
            console.log(converstionStepsText);
            converstionStepsText = "";


        }

    }



    // test-14

    async function Test14Sec2() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            if (!userSpeakingSec2Test) {
                await playScript("For this part, I will show you some questions. You will have one minute to look at these questions. In the one minute preparation time you can take notes if you wish.Your one minute preparation is starting now.");
            } else {
                await playScript("OK.Your one minute preparation is starting now.")
            }



            let questionElement = document.getElementById('questions');
            questionElement.innerHTML = `<div style="padding:15px; text-align:justify; border:15px solid orange; border-radius:10px">
            <div style="padding:4px; text-align:center">
            <h4 className="text-center">IELTS Speaking Part 2</h4>
            <h4 className="text-center">IELTS Cue Card</h4> <br />
            </div>
            <h5> Describe a time when you were stuck in a traffic  jam.
             </h5>
            <h5 className="mt-1 mb-1 text-purple-600">You should say :</h5>
                <div className="ml-4 p-1 font-bold">
                      <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-red-300  rounded-[50%]'></i> When and where it happened </div>
                     
                      <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-gray-300  rounded-[50%]'></i> How long you were in the traffic jam</div>
                     
                      <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-green-300  rounded-[50%]'></i> What you did while waiting </div>
                     
                      <div><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-purple-300  rounded-[50%]'></i> And explain how you felt when you were in that traffic jam</div>

                 </div>
            </div>`


            preparationFlag = true;
            setCurrectTimer(true);


            console.log("converstionStepsText");
            console.log(converstionStepsText);
            converstionStepsText = "";


        }

    }



    // test-15-------------------------------------

    async function Test15Sec2() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            if (!userSpeakingSec2Test) {
                await playScript("For this part, I will show you some questions. You will have one minute to look at these questions. In the one minute preparation time you can take notes if you wish.Your one minute preparation is starting now.");
            } else {
                await playScript("OK.Your one minute preparation is starting now.")
            }



            let questionElement = document.getElementById('questions');
            questionElement.innerHTML = `<div style="padding:15px; text-align:justify; border:15px solid orange; border-radius:10px">
            <div style="padding:4px; text-align:center">
            <h4 className="text-center">IELTS Speaking Part 2</h4>
            <h4 className="text-center">IELTS Cue Card</h4> <br />
            </div>
            <h5> Describe an invention that has changed how people 
            live. </h5>
            <h5 className="mt-1 mb-1 text-purple-600">You should say :</h5>
                <div className="ml-4 p-1 font-bold">
                      <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-red-300  rounded-[50%]'></i>What it is </div>
                     
                      <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-gray-300  rounded-[50%]'></i>How has it changed people’s lives   </div>
                     
                      <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-green-300  rounded-[50%]'></i> What benefits did it bring </div>
                     
                      <div><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-purple-300  rounded-[50%]'></i>And explain if it is more important for older or younger people.</div>

                 </div>
            </div>`


            preparationFlag = true;
            setCurrectTimer(true);


            console.log("converstionStepsText");
            console.log(converstionStepsText);
            converstionStepsText = "";


        }

    }

    // test-16  ------------------------------------
    async function Test16Sec2() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            if (!userSpeakingSec2Test) {
                await playScript("For this part, I will show you some questions. You will have one minute to look at these questions. In the one minute preparation time you can take notes if you wish.Your one minute preparation is starting now.");
            } else {
                await playScript("OK.Your one minute preparation is starting now.")
            }



            let questionElement = document.getElementById('questions');
            questionElement.innerHTML = `<div style="padding:15px; text-align:justify; border:15px solid orange; border-radius:10px">
            <div style="padding:4px; text-align:center">
            <h4 className="text-center">IELTS Speaking Part 2</h4>
            <h4 className="text-center">IELTS Cue Card</h4> <br />
            </div>
                  <h5 >Describe an advertisement you remember.</h5>
                  <h5 className="mt-1 mb-1 text-purple-600">You should say :</h5>
                      <div className="ml-4 p-1 font-bold">
                            <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-red-300  rounded-[50%]'></i>  What was the advertisement for?</div>
                           
                            <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-gray-300  rounded-[50%]'></i>    What type of advertisement was it? </div>
                           
                            <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-green-300  rounded-[50%]'></i>     When did you see this advertisement? </div>
                           
                            <div><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-purple-300  rounded-[50%]'></i>And explain what you remember the most about this advertisement? </div>
      
                       </div>
                  </div>`
            // store all of the Question to the variable & send to the local indexdDB local databases..
            preparationFlag = true;
            setCurrectTimer(true);


            console.log("converstionStepsText");
            console.log(converstionStepsText);
            converstionStepsText = "";


        }
    }


    // test-17  ------------------------------------

    async function Test17Sec2() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            if (!userSpeakingSec2Test) {
                await playScript("For this part, I will show you some questions. You will have one minute to look at these questions. In the one minute preparation time you can take notes if you wish.Your one minute preparation is starting now.");
            } else {
                await playScript("OK.Your one minute preparation is starting now. ")
            }



            let questionElement = document.getElementById('questions');
            questionElement.innerHTML = `<div style="padding:15px; text-align:justify; border:15px solid orange; border-radius:10px">
            <div style="padding:4px; text-align:center">
            <h4 className="text-center">IELTS Speaking Part 2</h4>
            <h4 className="text-center">IELTS Cue Card</h4> <br />
            </div>
                  <h5 >Talk about an event that you could organize to help people </h5>
                  <h5 className="mt-1 mb-1 text-purple-600">You should say :</h5>
                      <div className="ml-4 p-1 font-bold">
                            <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-red-300  rounded-[50%]'></i>   What is the event?</div>
                           
                            <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-gray-300  rounded-[50%]'></i> Where & when can you do this activity? </div>
                           
                            <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-green-300  rounded-[50%]'></i>  Who would be invited to this event?</div>
                           
                            <div><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-purple-300  rounded-[50%]'></i>How could you help people through organizing this event?</div>
      
                       </div>
                  </div>`



            preparationFlag = true;
            setCurrectTimer(true);


            console.log("converstionStepsText");
            console.log(converstionStepsText);
            converstionStepsText = "";


        }
    }

    // test-18  ------------------------------------
    async function Test18Sec2() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            if (!userSpeakingSec2Test) {
                await playScript("For this part, I will show you some questions. You will have one minute to look at these questions. In the one minute preparation time you can take notes if you wish.Your one minute preparation is starting now.");
            } else {
                await playScript("OK.Your one minute preparation is starting now.")
            }



            let questionElement = document.getElementById('questions');
            questionElement.innerHTML = `<div style="padding:15px; text-align:justify; border:15px solid orange; border-radius:10px">
                <div style="padding:4px; text-align:center">
                <h4 className="text-center">IELTS Speaking Part 2</h4>
                <h4 className="text-center">IELTS Cue Card</h4> <br />
                </div>
                <h5> Talk about a traditional product of your country that  you bought  </h5>
                <h5 className="mt-1 mb-1 text-purple-600">You should say :</h5>
                    <div className="ml-4 p-1 font-bold">
                          <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-red-300  rounded-[50%]'></i> What is it    </div>
                         
                          <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-gray-300  rounded-[50%]'></i>How is it made </div>
                         
                          <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-green-300  rounded-[50%]'></i> When did you try it for the first time</div>

                          <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-blue-300  rounded-[50%]'></i>Why do you like it</div>
                     </div>
                </div>`


            preparationFlag = true;
            setCurrectTimer(true);


            console.log("converstionStepsText");
            console.log(converstionStepsText);
            converstionStepsText = "";


        }

    }


    // test-19  ------------------------------------
    async function Test19Sec2() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            if (!userSpeakingSec2Test) {
                await playScript("For this part, I will show you some questions. You will have one minute to look at these questions. In the one minute preparation time you can take notes if you wish.Your one minute preparation is starting now.");
            } else {
                await playScript("OK.Your one minute preparation is starting now.")
            }



            let questionElement = document.getElementById('questions');
            questionElement.innerHTML = `<div style="padding:15px; text-align:justify; border:15px solid orange; border-radius:10px">
                    <div style="padding:4px; text-align:center">
                    <h4 className="text-center">IELTS Speaking Part 2</h4>
                    <h4 className="text-center">IELTS Cue Card</h4> <br />
                    </div>
                    <h5>  Describe a positive change in your life  </h5>
                    <h5 className="mt-1 mb-1 text-purple-600">You should say :</h5>
                        <div className="ml-4 p-1 font-bold">
                              <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-red-300  rounded-[50%]'></i> What the change was </div>
                             
                              <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-gray-300  rounded-[50%]'></i>When it happened                              </div>
                             
                              <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-green-300  rounded-[50%]'></i> How it happened</div>
    
                              <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-blue-300  rounded-[50%]'></i>And explain why it was a positive change</div>
                         </div>
                    </div>`


            preparationFlag = true;
            setCurrectTimer(true);


            console.log("converstionStepsText");
            console.log(converstionStepsText);
            converstionStepsText = "";


        }

    }



    // test-20  ------------------------------------
    async function Test20Sec2() {
        if (converstionSteps == 0 && converstionStepsText == '') {
            if (!userSpeakingSec2Test) {
                await playScript("For this part, I will show you some questions. You will have one minute to look at these questions. In the one minute preparation time you can take notes if you wish.Your one minute preparation is starting now.");
            } else {
                await playScript("OK.Your one minute preparation is starting now.")
            }



            let questionElement = document.getElementById('questions');
            questionElement.innerHTML = `<div style="padding:15px; text-align:justify; border:15px solid orange; border-radius:10px">
                    <div style="padding:4px; text-align:center">
                    <h4 className="text-center">IELTS Speaking Part 2</h4>
                    <h4 className="text-center">IELTS Cue Card</h4> <br />
                    </div>
                    <h5>   Talk about an important/Special event you celebrated </h5>
                    <h5 className="mt-1 mb-1 text-purple-600">You should say :</h5>
                        <div className="ml-4 p-1 font-bold">
                              <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-red-300  rounded-[50%]'></i> What was it</div>
                             
                              <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-gray-300  rounded-[50%]'></i> When did you celebrate   </div>
                             
                              <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-green-300  rounded-[50%]'></i>Where did you celebrate</div>
    
                              <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-blue-300  rounded-[50%]'></i>Who was with you </div>

                              <div className="mb-1"><i className='fal fa-check text-white text-[14px]  flex mr-2 p-[5px] bg-red-300  rounded-[50%]'></i> Why was It special </div>
                         </div>
                    </div>`


            preparationFlag = true;
            setCurrectTimer(true);


            console.log("converstionStepsText");
            console.log(converstionStepsText);
            converstionStepsText = "";


        }

    }

    // end-of-all-test-sections------


    const ShowSpeakingTestScors = (totalIeltsScores) => {

        if (testNo == "Test1Sec2") {
            if (userEmail) {
                localStorage.setItem("S_OkmoduleNo1", "Test1_Ok");
                localStorage.setItem("S_ScorModuleNo2", Number(totalIeltsScores).toFixed(1));
                // getUserLatestDataFromDatabaseSave("S_ScorModuleNo2")
            }

        }

        //number-2
        if (testNo == "Test2Sec2") {
            localStorage.setItem("S_OkmoduleNo2", "Test2_Ok");
            localStorage.setItem("S_ScorModuleNo5", Number(totalIeltsScores).toFixed(1))
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo5")
        }


        //number-3
        if (testNo == "Test3Sec2") {
            localStorage.setItem("S_OkmoduleNo3", "Test3_Ok");
            localStorage.setItem("S_ScorModuleNo8", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo8")
        }


        //number-4

        if (testNo == "Test4Sec2") {
            localStorage.setItem("S_OkmoduleNo4", "Test4_Ok");
            localStorage.setItem("S_ScorModuleNo11", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo11")
        }

        //number-5

        if (testNo == "Test5Sec2") {
            localStorage.setItem("S_OkmoduleNo5", "Test5_Ok");
            localStorage.setItem("S_ScorModuleNo14", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo14")
        }

        //number-6

        if (testNo == "Test6Sec2") {
            localStorage.setItem("S_OkmoduleNo6", "Test6_Ok");
            localStorage.setItem("S_ScorModuleNo17", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo17")
        }

        //number-7

        if (testNo == "Test7Sec2") {
            localStorage.setItem("S_OkmoduleNo7", "Test7_Ok");
            localStorage.setItem("S_ScorModuleNo20", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo20")
        }

        //test-8

        if (testNo == "Test8Sec2") {
            localStorage.setItem("S_OkmoduleNo8", "Test8_Ok");
            localStorage.setItem("S_ScorModuleNo23", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo23")
        }
        //number-9

        if (testNo == "Test9Sec2") {
            localStorage.setItem("S_OkmoduleNo9", "Test9_Ok");
            localStorage.setItem("S_ScorModuleNo26", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo26")
        }

        //test-10

        if (testNo == "Test10Sec2") {
            localStorage.setItem("S_OkmoduleNo10", "Test10_Ok");
            localStorage.setItem("S_ScorModuleNo29", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo29")
        }




        //number-11

        if (testNo == "Test11Sec2") {
            localStorage.setItem("S_OkmoduleNo11", "Test11_Ok");
            localStorage.setItem("S_ScorModuleNo32", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo32")
        }

        //test-12

        if (testNo == "Test12Sec2") {
            localStorage.setItem("S_OkmoduleNo12", "Test12_Ok");
            localStorage.setItem("S_ScorModuleNo35", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo35")
        }


        //test-13

        if (testNo == "Test13Sec2") {
            localStorage.setItem("S_OkmoduleNo13", "Test13_Ok");
            localStorage.setItem("S_ScorModuleNo38", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo38")
        }
        //test-14

        if (testNo == "Test14Sec2") {
            localStorage.setItem("S_OkmoduleNo14", "Test14_Ok");
            localStorage.setItem("S_ScorModuleNo41", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo41")
        }

        //test-15

        if (testNo == "Test15Sec2") {
            localStorage.setItem("S_OkmoduleNo15", "Test15_Ok");
            localStorage.setItem("S_ScorModuleNo44", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo44")
        }

        //test-16

        if (testNo == "Test16Sec2") {
            localStorage.setItem("S_OkmoduleNo16", "Test16_Ok");
            localStorage.setItem("S_ScorModuleNo47", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo47")
        }


        //test-17

        if (testNo == "Test17Sec2") {
            localStorage.setItem("S_OkmoduleNo17", "Test17_Ok");
            localStorage.setItem("S_ScorModuleNo50", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo50")
        }
        //test-18

        if (testNo == "Test18Sec2") {
            localStorage.setItem("S_OkmoduleNo18", "Test18_Ok");
            localStorage.setItem("S_ScorModuleNo53", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo53")
        }
        //test-19

        if (testNo == "Test19Sec2") {
            localStorage.setItem("S_OkmoduleNo19", "Test19_Ok");
            localStorage.setItem("S_ScorModuleNo56", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo56")
        }

        //test-20

        if (testNo == "Test20Sec2") {
            localStorage.setItem("S_OkmoduleNo20", "Test20_Ok");
            localStorage.setItem("S_ScorModuleNo59", Number(totalIeltsScores).toFixed(1));
            // getUserLatestDataFromDatabaseSave("S_ScorModuleNo59")
        }
    }




    async function checkingReplyofUser() {
        console.log('checkingReplyofUser')
        if (testNo == "Test1Sec2") {
            await Test1Sec2();
        }
        else if (testNo == "Test2Sec2") {
            await Test2Sec2();
        }

        else if (testNo == "Test3Sec2") {
            await Test3Sec2();
        }

        else if (testNo == "Test4Sec2") {
            await Test4Sec2();
        }

        else if (testNo == "Test5Sec2") {
            await Test5Sec2();
        }
        else if (testNo == "Test6Sec2") {
            await Test6Sec2();
        }

        else if (testNo == "Test7Sec2") {
            await Test7Sec2();
        }

        else if (testNo == "Test8Sec2") {
            await Test8Sec2();
        }

        else if (testNo == "Test9Sec2") {
            await Test9Sec2();
        }

        else if (testNo == "Test10Sec2") {
            await Test10Sec2();
        }

        else if (testNo == "Test11Sec2") {
            await Test11Sec2();
        }

        else if (testNo == "Test12Sec2") {
            await Test12Sec2();
        }
        else if (testNo == "Test13Sec2") {
            await Test13Sec2();
        }
        else if (testNo == "Test14Sec2") {
            await Test14Sec2();
        }

        else if (testNo == "Test15Sec2") {
            await Test15Sec2();
        }

        else if (testNo == "Test16Sec2") {
            await Test16Sec2();
        }

        else if (testNo == "Test17Sec2") {
            await Test17Sec2();
        }

        else if (testNo == "Test18Sec2") {
            await Test18Sec2();
        }
        else if (testNo == "Test19Sec2") {
            await Test19Sec2();
        }

        else if (testNo == "Test20Sec2") {
            await Test20Sec2();
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

        if (useReactMediaRecorder.state === "recording")
            // useReactMediaRecorder.stop();
            var ssmlFile = "Shakespeare.xml";
        setSQuestion(msgText);
        // // store all user-Question data into a variables
        // userSpeechMainData += "Question:" + msgText + "~";
        // console.log(userSpeechMainData)
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

        // setSpeakingState('Waiting for your speech');


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
                    // // Also pass the stream to hark to create speaking events
                    // New added for pass all recording data to the IndexedDb to playback for users. (30-10-2023)....
                    var speech = hark(stream, {});
                    speech.on("speaking", function () {
                        console.log("Speaking...");
                        clearInterval(StopPlay);
                        StopPlay = null;
                        if (!preparationFlag) {
                            if (recordControlFlag || window.speechFinished) {
                                if (useReactMediaRecorder.state != "recording") {
                                    useReactMediaRecorder.start();
                                }
                            }
                        }
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

                    useReactMediaRecorder.ondataavailable = (e) => {
                        console.log(e.data);
                        sendRecording(e.data);
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
        setSpeakingState('Play to start');
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
        timeoutHandle = setTimeout(function () {
            // console.log("Timer alert...");
            setCheckNetworkStatus(true)

        }, 3000);
        console.log(timeoutHandle)
        console.log("Examiner-Saying.......")

        //this localstore for off the tntroduction about writing when user 
        // come again into this page....
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
                    history.push("/SpeakingPage");
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
                // testNo === "Test1Sec2" || testNo === "Test2Sec2" || testNo === "Test3Sec2" || testNo === "Test4Sec2" || testNo === "Test5Sec2" || testNo === "Test6Sec2" || testNo === "Test7Sec2" || testNo === "Test8Sec2" || testNo === "Test9Sec2" || testNo === "Test10Sec2" || testNo === "Test11Sec2" || testNo === "Test12Sec2" ? 

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
