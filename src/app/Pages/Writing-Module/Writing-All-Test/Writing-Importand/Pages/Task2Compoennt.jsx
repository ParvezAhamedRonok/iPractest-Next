"use client";
import React, { useRef, useState, useEffect } from "react";
import "../../WrittingAllStyles/WrittingPage.css";
import axios from "axios";
import { BsBalloonHeartFill } from "react-icons/bs"
import { MdRateReview } from "react-icons/md"
import UserFeedBack from "../../../../../../components/UserComments";
import { isMobile } from "react-device-detect";
import { computerVision, isConfigured as ComputerVisionIsConfigured } from '../../../../../../lib/azure-cognitiveservices-computervision';
import { ClockLoader } from "react-spinners";
import logo from "../../../../../../assets/images/Practestlogo.png";
import UploadImg1 from "../../../../../../assets/images/Writing-Images/uploadImg1.png"
import Timer from "./Timer";
import { FaChessQueen } from "react-icons/fa";

import { FaPenToSquare } from "react-icons/fa6";
import { IoImages } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
import { useRouter } from "next/navigation";
import LoginPage from '../../../../LoginPage/LoginPage';
import SignUpPage from '../../../../LoginPage/SignUpPage';
//for Feedback loginPage
import LoginPageForFeedback from '../../../../SOPFILE/LoginPage/LoginPage';
import SignUpPageForFeedback from '../../../../SOPFILE/LoginPage/SignUpPage';
import CountrySelect from '../../../../SOPFILE/LoginPage/CountrySelect2.jsx';
import { FaPlus } from "react-icons/fa6";
import Image from "next/image";


// import 'react-image-crop/dist/ReactCrop.css';
import { useStateContext } from "../../../../../../contexts/ContextProvider";
import { CheckPaymentStatus } from "../../../../Payments/CkeckPayment/CheckPayments.js";

import { WRITING_POST_FOR_SET_SCORES, WRITING_POST_CHECK_ANSWER, WRITING_POST_UPLOAD_IMAGES, WRITING_POST_IPRACTEST_FEEDBACK, WRITING_GET_SINGLE_USER_IPRACTEST_FEEDBACK_DATA, WRITING_POST_SAVE_IPRACTEST_FEEDBACK_DATA_TO_DATABASE, WRITING_POST_UPLOAD_GCP_IMAGE_TO_GET_TEXT_FROM_IMAGE, WRITING_POST_GET_COHERENCE_SCORES_AFTER_EVALUATION } from "../../../../../../assets/URL's/AllUrl.js"

import { Joyride } from "./Joyride.js";
import QuestionUpload from "./QuestionUpload.js";

import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "../../../../Speaking-Module/Speaking-Func-Compoents/Pages/SpeakingResult/AnimatedProgressProvider.js";
import Compare from "./Compare.jsx";
import ResultEvaluations from "./ResultEvaluations.jsx";
import ResultImprovement from "./ResultImprovement.jsx";
import { IoMdLogIn } from "react-icons/io";
import { dummyTextArr } from "../AllFunctions/DummyTextArr.jsx";


//end importing-------->






let ImageArray = [];

//variable for storing data to the database if user have silver/not piad 
let writingFeedbackStatus = false;




// let storeUserAnswerTextGlobally = "";

function Task2Compoennt(task) {
    const history = useRouter();
    const { setWritingText, setLoginRedirectUrl, userPaymentStatusCheck, setuserPaymentStatusCheck } = useStateContext();
    //all single variables..
    let wordCount = 0;
    //all localstorage data saver states...
    const [userLoginName, setUserLoginName] = useState("");
    const [userLoginToken, setUserloginToken] = useState("");
    const [useremail, setUserEmail] = useState("")
    const [itemsSet, setitemsSet] = useState("");
    const [ModulesWriting, setModulesWriting] = useState("");
    const [userCountry, setuserCountry] = useState("");
    const [getUserWritinNo, setGetUserGritingNo] = useState("");
    const [googleLoginToken, setGoogleLoginToken] = useState("");
    const [useSignUpinfo, setUserSignupInfo] = useState("");
    const [JoyRideWritingGuide, setJoyRideWritingguide] = useState("")
    const [WritingtestName, setWritingtestName] = useState("")

    const [run, setRun] = useState(true);
    const [stepIndexState, setStepIndexState] = useState(0);

    const [repeatedWords, setRepeatedWords] = useState(0);
    const [subOrdinateWord, setSubOrdinateWord] = useState(0);
    const [coherenceWord, setCoherence] = useState(0);
    const [FeedbackPopUp, setFeedbackPopUp] = useState(false)
    const [feedbackData, setFeedbackPopUpData] = useState("")
    const [isloadingForFeedback, setisloadingForFeedback] = useState(false);
    const [forSignUpPage, setForSignUpPage] = useState(false)
    const [openLogIn, setOpenLogIn] = useState(false);

    const [forSignUpPageForFeedBack, setForSignUpPageForFeedBack] = useState(false)
    const [openLogInForFeedBack, setOpenLogInForFeedBack] = useState(false);
    const [SelectCountry, setSelectCountry] = useState(false);
    const [MainTaskComplessionResult, setMainTaskComplessionResult] = useState("");
    const [imageUploadMsg, setImageUploadMsg] = useState('')
    const [forPassComment, setPassComment] = useState(false);
    const [forShowCommentPopUp, setCommentPopUp] = useState(false)
    const [writingData, setWritingData] = useState({ writinTextArea: "" });
    const [postIeltsRate, setpostIeltsRate] = useState("");
    const [LexicalResourceScore, setLexicalResourceScore] = useState("");
    const [storeCoherenceScore, setCoherenceScore] = useState("");
    const [GrammarScore, setGeammarScore] = useState("");
    const [correctData, setCorrectData] = useState("");
    const [isloading, setisloading] = useState(false);
    const [imageFile, setFile] = useState();
    const [imagePreview, setPreview] = useState([]);
    const [waveTit, setWaveTit] = useState(true)
    const inputEl = useRef(null); //variable to referring hidden input
    const inputForUploadingQuestion = useRef(null);
    const [changeImageUI, setChangeImageUI] = useState(false)
    const [imageText, setIgameText] = useState('');
    const [Mainsrc, setSelectImageForCrop] = useState(null);
    const [cropImage, setCropImage] = useState(null);
    const [crop, setCrop] = useState({ aspect: 16 / 9 });
    const [userTextToPassResultEvaluation, setUserTextToPassResultEvaluations] = useState("")

    const [storeQuestionText, setStoreQuestionText] = useState("")

    const [errorIfUserDontSelectImage, seterrorIfUserDontSelectImage] = useState("");

    //for result popup---
    const [changeTap, setChangeTap] = useState("Correction")

    //summary data storing-----------
    const [SpeakingSummary, setSpeakingSummary] = useState([]);
    const [SpeakingImprovement, setSpeakingImprovement] = useState([])

    //lexicalResourse && Grammer Socres storing----for result page---
    const [lexicalResWords, setlexicalResWords] = useState([]);
    const [grammerMistakes, setgrammerMistakes] = useState([]);

    //for store tap content to make conditions with payment's
    const [storeTapContentForChangeUI, setstoreTapContentForChangeUI] = useState("")





    // check paymentStaus user have payemnt already or No
    CheckPaymentStatus()


    // useEffects uses...
    useEffect(() => {
        setUserLoginName(localStorage.getItem("userName"));
        setUserloginToken(localStorage.getItem("loginTOken"))
        setUserEmail(localStorage.getItem('userEmail'));
        setitemsSet(localStorage.getItem("itemsSet"));
        setuserCountry(localStorage.getItem("setCountry"));
        setModulesWriting(localStorage.getItem("ModulesWriting"));
        setGetUserGritingNo(localStorage.getItem("WritingNo"));
        setGoogleLoginToken(localStorage.getItem("GoogleFacebookToken"));
        setUserSignupInfo(localStorage.getItem("userSignupInfo"));
        setJoyRideWritingguide(localStorage.getItem("forOffW_Intro"));

        setWritingtestName(localStorage.getItem("Writing-Test-Name") && localStorage.getItem("Writing-Test-Name"))

    }, []);







    //function for comment pop up---
    const closeCommentPopUp = () => {
        setCommentPopUp(!forShowCommentPopUp);
        setWaveTit(false)
    }
    if (correctData || postIeltsRate) {
        setTimeout(() => {
            setPassComment(true)
        }, 3000);
        setTimeout(() => {
            setWaveTit(false)
        }, 8000);
    }


    //upload images functions------------
    const getImage = (event) => {
        setFile(event.target.files[0]);

        const selectedFiles = event.target.files;
        const selectedFilesArray = Array.from(selectedFiles);
        // console.log(selectedFilesArray);
        const imagesArray = selectedFilesArray.map((file) => {
            let imageSelected = file;
            // console.log(file);
            let urlOfimage = URL.createObjectURL(file);
            // console.log(urlOfimage);
            imageSelected['url'] = urlOfimage;  //8-18-23
            ImageArray.push(imageSelected);  //for crop--
            console.log(imageSelected);
            console.log(urlOfimage)
            return urlOfimage;
        });

        // setSelectImageForCrop(imagesArray);//for crop--
        setPreview((previousImages) => previousImages.concat(imagesArray)); //for crop--
        // FOR BUG IN CHROME
        event.target.value = "";

    }


    function deleteHandler(image) {
        setPreview(imagePreview.filter((e) => e !== image));
        URL.revokeObjectURL(image);
        // console.log(image)
        var filteredImage = ImageArray.filter(function (imageofArray) { return imageofArray.url != image; });    //8-18-23
        // var resultOne = ImageArray.filter(v => v !==image  );
        ImageArray = filteredImage;
        // console.log(ImageArray)
    }



    //for post request Scores & save those into the Main Dash-board Pages
    const PostWritingScors = (x, ieltsScore) => {
        axios({
            method: "post",
            url: WRITING_POST_FOR_SET_SCORES,

            headers: {
                "Authorization": `Bearer ${userLoginToken}`,
                'Content-Type': 'application/json'
            },
            data: {
                "username": userLoginName,
                "userEmail": useremail,
                "LexicalResourceScore": x.LexicalResourceScore || "",
                "GrammarScore": x.GrammaticalScore || "",
                "ieltsRate": ieltsScore || "",
                "coherence": x.CoherenceScore || "",
                "taskCompletion": MainTaskComplessionResult != "" ? MainTaskComplessionResult : "0"
            },
        })
            .then((res) => {
                // console.log(res.data);
            })
            .catch((e) => { console.log(e) })
    }





    //this function will not need after adding all scores getting from database....
    const ShowTestcors = (x) => {
        if (ModulesWriting == "1") {
            localStorage.setItem("W_OkmoduleNo1", "Test1_Ok");
            localStorage.setItem("W_ScorModuleNo1", postIeltsRate)
        };
        if (ModulesWriting == "2") {
            localStorage.setItem("W_OkmoduleNo2", "Test2_Ok");
            localStorage.setItem("W_ScorModuleNo2", postIeltsRate)
        }
        if (ModulesWriting == "3") {
            localStorage.setItem("W_OkmoduleNo3", "Test3_Ok");
            localStorage.setItem("W_ScorModuleNo3", postIeltsRate)
        }
        if (ModulesWriting == "4") {
            localStorage.setItem("W_OkmoduleNo4", "Test4_Ok");
            localStorage.setItem("W_ScorModuleNo4", postIeltsRate)
        }
        if (ModulesWriting == "5") {
            localStorage.setItem("W_OkmoduleNo5", "Test5_Ok");
            localStorage.setItem("W_ScorModuleNo5", postIeltsRate)
        }
        if (ModulesWriting == "6") {
            localStorage.setItem("W_OkmoduleNo6", "Test6_Ok");
            localStorage.setItem("W_ScorModuleNo6", postIeltsRate)
        }
        if (ModulesWriting == "7") {
            localStorage.setItem("W_OkmoduleNo7", "Test7_Ok");
            localStorage.setItem("W_ScorModuleNo7", postIeltsRate)
        }
        if (ModulesWriting == "8") {
            localStorage.setItem("W_OkmoduleNo8", "Test8_Ok");
            localStorage.setItem("W_ScorModuleNo8", postIeltsRate)
        }
        if (ModulesWriting == "9") {
            localStorage.setItem("W_OkmoduleNo9", "Test9_Ok");
            localStorage.setItem("W_ScorModuleNo9", postIeltsRate)
        }
        if (ModulesWriting == "10") {
            localStorage.setItem("W_OkmoduleNo10", "Test10_Ok");
            localStorage.setItem("W_ScorModuleNo10", postIeltsRate)
        }
        if (ModulesWriting == "11") {
            localStorage.setItem("W_OkmoduleNo11", "Test11_Ok");
            localStorage.setItem("W_ScorModuleNo11", postIeltsRate)
        }
        if (ModulesWriting == "12") {
            localStorage.setItem("W_OkmoduleNo12", "Test12_Ok");
            localStorage.setItem("W_ScorModuleNo12", postIeltsRate)
        }
        if (ModulesWriting == "13") {
            localStorage.setItem("W_OkmoduleNo13", "Test13_Ok");
            localStorage.setItem("W_ScorModuleNo13", postIeltsRate)
        }
        if (ModulesWriting == "14") {
            localStorage.setItem("W_OkmoduleNo14", "Test14_Ok");
            localStorage.setItem("W_ScorModuleNo14", postIeltsRate)
        }
        // for Cambridge showing Answers
        if (ModulesWriting == "cambridge-1") {
            localStorage.setItem("W_Okcambridge1", "Okcambridge_1");
            localStorage.setItem("W_ScorOkcambridge1", postIeltsRate);
        }
        if (ModulesWriting == "cambridge-2") {
            localStorage.setItem("W_Okcambridge2", "Okcambridge_2");
            localStorage.setItem("W_ScorOkcambridge2", postIeltsRate);
        }
        if (ModulesWriting == "cambridge-3") {
            localStorage.setItem("W_Okcambridge3", "Okcambridge_3");
            localStorage.setItem("W_ScorOkcambridge3", postIeltsRate);
        }
        if (ModulesWriting == "cambridge-4") {
            localStorage.setItem("W_Okcambridge4", "Okcambridge_4");
            localStorage.setItem("W_ScorOkcambridge4", postIeltsRate);
        }
        if (ModulesWriting == "cambridge-5") {
            localStorage.setItem("W_Okcambridge5", "Okcambridge_5");
            localStorage.setItem("W_ScorOkcambridge5", postIeltsRate);
        }
        if (ModulesWriting == "cambridge-6") {
            localStorage.setItem("W_Okcambridge6", "Okcambridge_6");
            localStorage.setItem("W_ScorOkcambridge6", postIeltsRate);
        }
        if (ModulesWriting == "cambridge-7") {
            localStorage.setItem("W_Okcambridge7", "Okcambridge_7");
            localStorage.setItem("W_ScorOkcambridge7", postIeltsRate);
        }
        if (ModulesWriting == "cambridge-8") {
            localStorage.setItem("W_Okcambridge8", "Okcambridge_8");
            localStorage.setItem("W_ScorOkcambridge8", postIeltsRate);
        }
        if (ModulesWriting == "cambridge-9") {
            localStorage.setItem("W_Okcambridge9", "Okcambridge_9");
            localStorage.setItem("W_ScorOkcambridge9", postIeltsRate);
        }
        if (ModulesWriting == "cambridge-10") {
            localStorage.setItem("W_Okcambridge10", "Okcambridge_10");
            localStorage.setItem("W_ScorOkcambridge10", postIeltsRate);
        }
        if (ModulesWriting == "cambridge-11") {
            localStorage.setItem("W_Okcambridge11", "Okcambridge_11");
            localStorage.setItem("W_ScorOkcambridge11", postIeltsRate);
        }
        if (ModulesWriting == "cambridge-12") {
            localStorage.setItem("W_Okcambridge12", "Okcambridge_12");
            localStorage.setItem("W_ScorOkcambridge12", postIeltsRate);
        }
        if (ModulesWriting == "cambridge-13") {
            localStorage.setItem("W_Okcambridge13", "Okcambridge_13");
            localStorage.setItem("W_ScorOkcambridge13", postIeltsRate);
        }
        if (ModulesWriting == "cambridge-14") {
            localStorage.setItem("W_Okcambridge14", "Okcambridge_14");
            localStorage.setItem("W_ScorOkcambridge14", postIeltsRate);
        }
        if (ModulesWriting == "cambridge-15") {
            localStorage.setItem("W_Okcambridge15", "Okcambridge_15");
            localStorage.setItem("W_ScorOkcambridge15", postIeltsRate);
        }
    }


    //for check existing array words with user writing...

    function CheckWords(text) {
        let Duplicatecount = 0;
        let array = ["first", "firstly", "secondly", "thirdly", "furthermore", "finally", "begin", "conclude", "next", "example", "instance",
            "follow", "that", "case", "namely", "other", "words", "also", "moreover", "more", "addition", "besides", "above", "well", "same", "way",
            "only", "also", "general", "generally", "whole", "rule", "most", "part", "cases", "usually", "so", "therefore", "result", "consequence", "accordingly", "consequently", "because", "thus", "particular", "particularly", "especially", "mainly", "hence", "this", "reason", "under", "these", "circumstances", "then", "simply", "put", "otherwise", "implies", "if", "not", "obviously", "clearly", "naturally", "course", "expected", "can", "as", "surely", "after", "all", "rather", "alternative", "another", "would", "possibility", "instead", "conversely", "on", "contrast", "comparison", "even", "though", "however", "much", "nevertheless", "still", "yet",

        ];
        for (let i = 0; i < array.length; i++) {
            if (text.includes(array[i])) {
                // console.log(array[i])
                Duplicatecount++;

            }
        }
        return Duplicatecount
    }



    function countRepeatedWords(sentence) {
        let words = sentence.split(/((?:\w+ ){1})/g);
        let wordMap = {};

        for (let i = 0; i < words.length; i++) {
            let currentWordCount = wordMap[words[i]];
            let count = currentWordCount ? currentWordCount : 0;
            wordMap[words[i]] = count + 1;
        }


        return wordMap;
    }

    function repeatedWordScore(text) {
        let score = 10;
        let wordMap = countRepeatedWords(text);

        for (let [key, value] of Object.entries(wordMap)) {
            if (value > 10) {
                score--;
                // console.log(score);
            }
        }
        return score;
    }







    //function Steps for uploading image transformation------>
    let retry;
    function checkWritingAnswer(text, number) {
        //store this text into a state for pass to the resultEvaluation component for getting the evaluations
        setUserTextToPassResultEvaluations(text);
        // storeUserAnswerTextGlobally = text
        // CheckWords(text);
        setImageUploadMsg("Checking..");
        //this localstore for off the tntroduction about writing when user 
        // come again into this page....
        localStorage.setItem("forOffW_Intro", 1)
        let taskComplessionSTr = "";

        var sentData = {
            inputs: text,
        };

        if (storeQuestionText != "") {
            //for getting CoherenceResult -------added(14/4/24);
            var sentdataWithQuestion = {
                questions: storeQuestionText,
                answers: text
            }

            //for check the Writing text with Question.....added(14/4/24)
            axios.post(
                // "https://ipractest-406204.uc.r.appspot.com/coherenceScore",
                WRITING_POST_GET_COHERENCE_SCORES_AFTER_EVALUATION, {
                questions: storeQuestionText,
                answers: text
            })
                .then((res) => {
                    // alert("success")
                    console.log(res.data.message);

                    const numbers = [];
                    for (const [, beginStr, endStr] of res.data.message.matchAll(/(\d+)(?:-(\d+))?/g)) {
                        const [begin, end] = [beginStr, endStr].map(Number);
                        numbers.push(begin);
                        if (endStr !== undefined) {
                            for (let num = begin + 1; num <= end; num++) {
                                numbers.push(num);
                            }
                        }
                    }
                    //below code if for if coherence scores is less then 4 then scores
                    //will be 5 & if it less then or equal to 6 then it will be added + 1 
                    // other wise will return the same scores
                    if (numbers[0]) {
                        if (numbers[0] < 4) {
                            setMainTaskComplessionResult(5);
                            taskComplessionSTr = 5;
                        } else if (numbers[0] <= 6) {
                            setMainTaskComplessionResult(numbers[0] + 1);
                            taskComplessionSTr = numbers[0] + 1
                        } else {
                            setMainTaskComplessionResult(numbers[0]);
                            taskComplessionSTr = numbers[0];
                        }
                    } else {
                        setMainTaskComplessionResult("0");

                    }

                })
                .catch((error) => {
                    console.log(error)
                })

        } else {
            setMainTaskComplessionResult("error")
        }

        //for check the Writing text without Question.....
        setTimeout(() => {

            axios
                .post(WRITING_POST_CHECK_ANSWER, sentData)
                .then((res) => {
                    console.log(res.data);

                    getUserWritinNo ? localStorage.setItem("WritingNo", getUserWritinNo + 1) : localStorage.setItem("WritingNo", 1)
                    var correcteTest = res.data.corrected;
                    // console.log(correcteTest)
                    // console.log(score)


                    let lexicalResource;
                    let scoreRepeat = repeatedWordScore(text);
                    let subordinates = CheckWords(text);

                    setRepeatedWords(scoreRepeat);
                    setSubOrdinateWord(subordinates)

                    // setCorrectData(correcteTest);

                    //get the user corrected data by the help of below API request code--
                    var mainSentData = {
                        "textData": sentData.inputs
                    }
                    axios.post("https://ipractest-406204.uc.r.appspot.com/writingCorrection/", mainSentData)
                        .then((mainData) => {
                            setisloading(false);
                            //check conditions for showing payable results---
                            funcForCheckConditionsForResults()

                            // console.log(mainData)
                            // console.log(mainData.data.message)
                            let corretDta = mainData.data.message.replace(/['"]+/g, '').replace(/\\n/g, ' ').split("**").join()
                            // console.log(corretDta);
                            setCorrectData(corretDta);
                        })
                        .catch((err) => { console.log(err) });


                    // "GrammaticalScore":7,"LexicalResourceScore":6,"CoherenceScore":7}
                    console.log(taskComplessionSTr)
                    let totalscore;
                    if (taskComplessionSTr != "" || taskComplessionSTr != 0) {
                        totalscore = (Number(res.data.GrammaticalScore) + Number(res.data.LexicalResourceScore) + Number(res.data.CoherenceScore) + Number(taskComplessionSTr)) / 4
                    } else {
                        totalscore = (Number(res.data.GrammaticalScore) + Number(res.data.LexicalResourceScore) + Number(res.data.CoherenceScore)) / 3
                    }
                    totalscore = totalscore.toFixed(1)

                    totalscore = Math.round(totalscore * 2) / 2;
                    //store those scores into state for showing to the user-----
                    setpostIeltsRate(totalscore);
                    setLexicalResourceScore(res.data.LexicalResourceScore);
                    setGeammarScore(res.data.GrammaticalScore);
                    setCoherenceScore(res.data.CoherenceScore)

                    PostWritingScors(res.data, totalscore);
                    if (res.data && userLoginName && useremail) {
                        ShowTestcors(res.data);
                    }


                    console.log(totalscore);


                })
                .catch((err) => {
                    setisloading(false);
                    //Repeatable funtion may be needable don't remove it till we really don't need this---------------removed at (14/7/24);
                    // const newNumber = number - 1;
                    // if (newNumber > 0) {
                    //   checkWritingAnswer(text, newNumber);
                    // } else {
                    //   alert("Server Error please try again letter")
                    // }
                    alert("Server Error please try again letter")
                    console.log(err);
                });
        }, 2500);
        setisloading(true);
    }

    console.log(typeof postIeltsRate)
    console.log(postIeltsRate)
    //function for translate image into Text------>
    function gettingImageTextfromResponse(Response) {
        setImageUploadMsg("Text formating..")
        var imageText = ''
        var textdataArray = Response['text']['readResults'][0]['lines'];
        for (var textData of textdataArray) {
            imageText = imageText + ' ' + textData['text'];

        }
        // console.log(imageText);

        return imageText;


    }
    const uploadImageGCP = async (e) => {
        let scrollPage = document.getElementById("scrollPage" + task.task);
        let pagePosition = scrollPage.offsetTop;

        if (ImageArray[0]) {
            setisloading(true);
            setImageUploadMsg("Uploading..")

            localStorage.setItem('itemsSet', 1);
            var imagetext = "";
            for (let imageFile1 of ImageArray) {

                const formData = new FormData();
                formData.append("file", imageFile1);
                // formData.append("rendomNumber", items);


                if (imageFile1) {
                    await axios({
                        method: "post",
                        // url: "https://ipractest-406204.uc.r.appspot.com/GCPimageToText",
                        url: WRITING_POST_UPLOAD_GCP_IMAGE_TO_GET_TEXT_FROM_IMAGE,
                        data: formData,
                    }).then(async (response) => {
                        const { data } = response;

                        let imageTextParts = '' + data.message.replace(/['"]+/g, '').replace(/\\n/g, ' ');

                        //  let removeNewLine = imageTextParts.replace(/(?:\r\n|\r|\n)/g, '');;


                        imagetext = imagetext + imageTextParts;
                        // items = items + 1
                    })
                        .catch((err) => {
                            setChangeImageUI(false);
                            alert("Network error please try again")
                            console.log(err);
                            setisloading(false);
                        });

                } else {
                    const selectAlart = document.getElementById("SelectImage");
                    selectAlart.innerText = "Please Upload an image";
                    selectAlart.style.color = "red"
                }

            }
            // console.log('imagetrxt');
            // checkWritingAnswer(imagetext, 4);
            setIgameText((imagetext));
            setTimeout(() => {
                setChangeImageUI(true);
                //for take the user to the top
                window.scrollTo({ top: pagePosition - 690, behavior: 'smooth' });
            }, 1000);
            setTimeout(() => {
                setisloading(false)
            }, 2000);
            // IPractestFeedback(imagetext)
            // console.log('imagetrxt')
            // checkWritingAnswer(imagetext, 4);
            // setIgameText((imagetext))
            // IPractestFeedback(imagetext)
        } else {
            seterrorIfUserDontSelectImage("imageNotSelected")
        }

    }


    // it's may be no needable right now....date (14/4/24);
    const uploadImage = async (e) => {
        let scrollPage = document.getElementById("scrollPage" + task.task);
        let pagePosition = scrollPage.offsetTop;
        if (ImageArray[0]) {
            setisloading(true);
            setImageUploadMsg("Uploading..")
            // console.log(ImageArray)
            // console.log('ImageArray')
            // e.preventDefault();
            localStorage.setItem('itemsSet', 1);
            var imagetext = "";
            for (let imageFile1 of ImageArray) {

                const formData = new FormData();
                formData.append("file", imageFile1);


                if (imageFile1) {
                    await axios({
                        method: "post",
                        url: WRITING_POST_UPLOAD_IMAGES,
                        data: formData,
                    })
                        .then(async (response) => {
                            const { data } = response;
                            // console.log(data.url)
                            await computerVision(data.url || null).then((item) => {

                                imagetext = imagetext + gettingImageTextfromResponse(item);

                                //below commented code may be not needable
                                // setTimeout(() => { setChangeImageUI(true); }, 1000);
                                // setTimeout(() => {
                                //   setisloading(false)
                                // }, 2000);

                            });
                        })
                        .catch((err) => {
                            setChangeImageUI(false);
                            alert("Network error please try again")
                            console.log(err);
                            setisloading(false);

                        });

                } else {
                    const selectAlart = document.getElementById("SelectImage");
                    selectAlart.innerText = "Please Upload an image";
                    selectAlart.style.color = "red"
                }

            }


            // checkWritingAnswer(imagetext, 4);
            setIgameText((imagetext));
            setTimeout(() => {
                setChangeImageUI(true);
                //for take the user to the top
                window.scrollTo({ top: pagePosition - 690, behavior: 'smooth' });
            }, 1000);
            setTimeout(() => {
                setisloading(false)
            }, 2000);
            // IPractestFeedback(imagetext)

        } else {
            seterrorIfUserDontSelectImage("imageNotSelected")
        }

    }

    //function for after successfull converted Image into text & say to the user
    // if they want to edit their text............(02/03/24)
    const afterConvertedImageIntoText = () => {
        localStorage.setItem('itemsSet', 1);
        checkWritingAnswer(imageText, 4);
        IPractestFeedback(imageText);
    }

















    // function for the textarea value after submit----
    const handleWritingSubmit = (x) => {
        let wordEl = document.getElementById(task.task);
        // console.log(wordEl.innerText);
        let wordCountIn = parseInt(wordEl.innerText);
        if (wordCountIn > 249) {
            checkWritingAnswer(writingData.writinTextArea, 4);
            IPractestFeedback(writingData.writinTextArea)

        } else {
            let wordCountAlert = document.getElementById(
                task.task + "wordCountAlert"
            );
            wordCountAlert.innerText = "You have to write at least 250 words.";
            wordCountAlert.style.color = "red";
        }
        // x.preventDefault();
        localStorage.setItem('itemsSet', 2);
    };



    // function for handle word & Charecter count----->
    const handleinputTextArea = (input) => {
        console.log(task)
        let word = document.getElementById(task.task);

        let userText = input.target.value;
        word.innerHTML = userText.length;

        userText = userText.trim();

        let splitedTexts = userText.split(" ");

        let filteredSplitedTexts = splitedTexts.filter(function (x) {
            return x !== "";
        });

        wordCount = filteredSplitedTexts.length;
        word.innerHTML = wordCount;

        // for handleWritingInput data--------->
        setWritingData(() => {
            return { [input.target.name]: input.target.value };
        });
    };
    // console.log(writingData);

    // function for get data from API for showing  to the user iPactest feedback
    function IPractestFeedback(text) {
        var sentData = {
            inputs: text,
        };
        // setisloadingForFeedback(true);
        axios.post(WRITING_POST_IPRACTEST_FEEDBACK, sentData)
            .then((data) => {
                setFeedbackPopUpData(data.data.replace(/(?:\r\n|\r|\n)/g, '<br />'));
                // console.log(data)
            })
            .catch((err) => console.log(err))
    }


    const showFeedbackFunc = (x) => {
        setisloadingForFeedback(true);
        //call those api below if user have payment alreaddy...
        SuggestionAPICall(userTextToPassResultEvaluation);
        LaxicalGrramerSugges(userTextToPassResultEvaluation);

        setTimeout(() => {
            if (feedbackData != "") {
                setisloadingForFeedback(false);

                //below variable for remove login or premium page from result 
                setstoreTapContentForChangeUI("");

                if (writingFeedbackStatus) {
                    axios({
                        method: "post",
                        // url: "http://localhost:8080/api/user/saveUserWritiniPractestFeedback",
                        url: WRITING_POST_SAVE_IPRACTEST_FEEDBACK_DATA_TO_DATABASE,
                        data: {
                            "userName": userLoginName,
                            "userEmail": useremail,
                            "feedbackData": changeTap

                        },
                    }).then((res) => {
                        console.log("Success...-");
                    })
                        .catch((err) => {
                            console.log(err)
                        });

                }

            }
            else {
                setisloadingForFeedback(false);
            }

        }, 2000);


    }



    // if user evaluation more then 2/3 time this function will be
    //called & the login page will be shown-------
    const handleLogInPageForWrite = (x) => {
        // x.preventDefault();
        // console.log("Hello i am Write User");
        if (useremail) {
            localStorage.removeItem("WritingNo");
            handleWritingSubmit();
        } else {
            openLogInPage();
        }
    }

    const handleLogInPageForUpload = (x) => {
        // console.log("Hello i am Upload User");
        if (useremail) {
            localStorage.removeItem("WritingNo");
            // uploadImage();
            uploadImageGCP()
        } else {
            openLogInPage();
        }
    }



    //Function for open login & SignUp pages Base on state    
    const openLogInPage = (x) => {
        setTimeout(() => {
            setWritingText("Please login if you want to get more corrections.")
            setOpenLogIn(!openLogIn)
            setForSignUpPage(false) // solution
        }, 250);
    }

    const openSignUpPage = (x) => {
        setTimeout(() => {
            setForSignUpPage(!forSignUpPage)
            setOpenLogIn(false)    //solution
        }, 250);
    }




    // if User don't want to crop the image then will call the function below------
    // if User don't want to crop ------
    const handleDontCrop = () => {
        setPreview((previousImages) => previousImages.concat(Mainsrc));
        setSelectImageForCrop(null);

    }
    //if user crop the Image then will call the function below......
    const handleCropFunc = () => {
        const canvas = document.createElement('canvas');
        const scaleX = cropImage.target.naturalWidth / cropImage.target.width
        const scaleY = cropImage.target.naturalHeight / cropImage.target.height
        // console.log(scaleX);
        // console.log(scaleY);


        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(
            cropImage.target,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height
        )


        canvas.toBlob((file) => {
            let imageSelected = file;
            let urlOfimage = URL.createObjectURL(file);
            imageSelected['url'] = urlOfimage;
            ImageArray.push(imageSelected);
            // console.log(imageSelected);

        });


        // console.log(cropImage.target.src);
        setTimeout(() => {
            let newImageArray = ImageArray.filter((e) => {
                return e.url !== cropImage.target.src
            });
            // console.log(newImageArray);
            // console.log(ImageArray);
            ImageArray = [];
            // setPreview([null]);
            let ThisimagesArray = newImageArray.map((file) => {
                let imageSelected = file;
                let urlOfimage = URL.createObjectURL(file);
                imageSelected['url'] = urlOfimage;  //8-18-23
                ImageArray.push(imageSelected);  //for crop--
                // console.log(imageSelected)
                return urlOfimage;
            });
            // console.log(ImageArray);
            // console.log(newImageArray);
            // console.log(ThisimagesArray);

            setPreview(() => ThisimagesArray);
            // setPreview((previousImages) => previousImages.concat(imageSelected));

            // canvas.toBlob(blob => {
            //   // setImage(blob)
            //   console.log(blob);
            //   setShowImage(blob)
            // })
            setSelectImageForCrop(null);
        }, 1000);




    }



    // function onImageLoad(e) {
    //   console.log(e);
    //   // const { naturalWidth: width, naturalHeight: height } = e.currentTarget

    //   // const crop = centerCrop(
    //   //   makeAspectCrop(
    //   //     {
    //   //       // You don't need to pass a complete crop into
    //   //       // makeAspectCrop or centerCrop.
    //   //       unit: '%',
    //   //       width: 90,
    //   //     },
    //   //     16 / 9,
    //   //     width,
    //   //     height
    //   //   ),
    //   //   width,
    //   //   height
    //   // )
    //   // console.log(e.target.value)
    //   // setCrop(crop)
    // }


    // it will be a function when user want to make SOP it will show the user to login 
    // if they are not logged in yet--

    //Function for open login & SignUp pages Base on state for iPractest feedback   
    const openLogInPageForIpractestFeedback = (x) => {
        setTimeout(() => {
            setLoginRedirectUrl("RedirectUrlStatusChane")
            setOpenLogInForFeedBack(!openLogInForFeedBack)
            setForSignUpPageForFeedBack(false) // solution
        }, 200);
    }

    const openSignUpPageForIpractestFeedback = (x) => {
        setTimeout(() => {
            setForSignUpPageForFeedBack(!forSignUpPageForFeedBack)
            setOpenLogInForFeedBack(false)    //solution
        }, 200);
    }




    const userLoginFunction = (finalFunction) => {
        // x.preventDefault();
        localStorage.setItem("productID", "WrittingPage");
        // console.log("checkLogIn..")
        setisloadingForFeedback(true);
        if (!userLoginToken && !googleLoginToken && !useSignUpinfo) {
            setisloadingForFeedback(false);
            openLogInPageForIpractestFeedback();
        } else {
            setisloadingForFeedback(false)
            functionForCheckConditions(finalFunction);
        }
    }


    // function for senddaing to the login & signUp pages 
    // & make conditions if user already been 
    const functionForCheckConditions = (finalFunction) => {
        setisloadingForFeedback(true)
        setTimeout(() => {
            if (!userCountry || userCountry == null || userCountry == "undefined") {
                setSelectCountry(true);
                setisloadingForFeedback(false);
            } else {
                axios({
                    method: "get",
                    url: WRITING_GET_SINGLE_USER_IPRACTEST_FEEDBACK_DATA + useremail,
                    // url: 'https://https://node-js-express-login-example.onrender.com/api/user/getSpecificUserWritingiPractestFeedback/' + useremail,
                    headers: {
                        "Authorization": `Bearer ${userLoginToken}`,
                        'Content-Type': 'application/json'
                    }
                })
                    .then((res) => {
                        console.log(res);
                        setisloadingForFeedback(false)
                        if (res.data.data[0]) {
                            if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
                                finalFunction();
                            } else {
                                //if user haven't paid redirect the user to the payment page
                                history.push("/Payment-billing-information-page")
                                localStorage.setItem("productID", "WrittingPage");
                            }

                        } else {
                            //for showing the user feedback data 
                            finalFunction();
                            //make the status true for save the data into the database--
                            writingFeedbackStatus = true
                        }
                    })
                    .catch((e) => {
                        console.log(e);
                        setisloadingForFeedback(false);
                        writingFeedbackStatus = true
                        showFeedbackFunc();
                    });
            }

        }, 1000);
    }





    //function for upload Question after showing Result ..........
    const clickForUploadQuestion = () => {
        setCorrectData("");
        setTimeout(() => {
            let item = document.getElementById("uploadQuestionSection");
            let pagePosition = item.offsetTop
            item.classList.add("zoom-in-out-box");
            window.scrollTo({ top: pagePosition - 350, behavior: 'smooth' });
        }, 1000);
    }







    //function for post request & storing subordinate & Linking words---------
    const SuggestionAPICall = (suggesData) => {
        var sentData = {
            "textData": suggesData
        }

        //suggestions API call---------
        //post & get the speaking ImproveMent
        axios.post("https://ipractest-406204.uc.r.appspot.com/writingImprovement", sentData)
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
                        let summayData = res.data.message.trim().split(".")
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


    //function for post request & storing subordinate & Linking words---------
    const LaxicalGrramerSugges = (lexicalData) => {
        var sentData = {
            "textData": lexicalData
        }
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


    }



    //functions below is for check conditions & make the status change with the condiotions
    // for result page is  user is in free mood or have to pay is user have get already their first time
    const funcForCheckConditionsForResults = () => {
        if (useremail) {
            // alert("logged in..")
            axios({
                method: "get",
                url: WRITING_GET_SINGLE_USER_IPRACTEST_FEEDBACK_DATA + useremail,
                headers: {
                    "Authorization": `Bearer ${userLoginToken}`,
                    'Content-Type': 'application/json'
                }
            })
                .then((res) => {
                    console.log(res);
                    if (res.data.data[0]) {
                        if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
                            setstoreTapContentForChangeUI("");
                            //call those api below if user have payment alreaddy...
                            SuggestionAPICall(userTextToPassResultEvaluation);
                            LaxicalGrramerSugges(userTextToPassResultEvaluation);

                        } else {
                            //if user haven't paid redirect the user to the payment page
                            setstoreTapContentForChangeUI("HaveToPay");

                            //set dummy arrray into the state when user has not paid -----
                            setSpeakingSummary(dummyTextArr);
                            setSpeakingImprovement(dummyTextArr);
                            setlexicalResWords(dummyTextArr);
                            setgrammerMistakes(dummyTextArr);
                        }

                    } else {
                        //for showing the user feedback data 
                        setstoreTapContentForChangeUI("");

                        //call those api below if user have Just one time permission to see those suggestions...
                        SuggestionAPICall(userTextToPassResultEvaluation);
                        LaxicalGrramerSugges(userTextToPassResultEvaluation);
                        //&& save the user data to the database ----
                        axios({
                            method: "post",
                            // url: "http://localhost:8080/api/user/saveUserWritiniPractestFeedback",
                            url: WRITING_POST_SAVE_IPRACTEST_FEEDBACK_DATA_TO_DATABASE,
                            data: {
                                "userName": userLoginName,
                                "userEmail": useremail,
                                "feedbackData": changeTap

                            },
                        }).then((res) => {
                            console.log("Success...-");
                        })
                            .catch((err) => {
                                console.log(err)
                            });

                    }
                })
                .catch((e) => {
                    console.log(e);
                });

        } else {
            // alert("not logged  in..")
            setstoreTapContentForChangeUI("LoginFirst");
        }












    }




    let writingItems = getUserWritinNo;
    //Rendering--------------
    return (
        <>

            <div className="Writingmain mb-3">
                {
                    changeImageUI ? (
                        <>
                            <div className=" w-[91vw] rounded-[20px] sm:w-[70vw] ml-[0px] sm:ml-[40px] pb-5 pt-3 grid justify-center align-middle"
                                style={{ backgroundImage: "radial-gradient(circle, #cec8ef, #fff, #fff)" }}
                            // onSubmit={writingItems == "11" || writingItems == "111" ? handleLogInPage : handleWritingSubmit}
                            >
                                <div className="rounded-[20px] pb-2 ">
                                    <div className="w-full p-1 flex justify-between">
                                        <p className="text-[12px] font-bold text-black translate-y-1">
                                            You can modify your text.</p>
                                        <p> Total words: <span className={`text-xl  font-bold ${imageText.split(' ').length < 249 ? "text-red-500" : "text-gray-900"}`}>{imageText.split(' ').length}</span></p>
                                    </div>
                                    <textarea
                                        name="writinTextAreaImage"
                                        id="textbox"
                                        className="rounded-[20px] shadow-lg bg-white w-[90vw] sm:w-[41vw] p-6 "
                                        cols="60"
                                        rows="8"
                                        value={imageText}
                                        placeholder="Write here..."
                                        onChange={(e) => { setIgameText(e.target.value) }}
                                    ></textarea> <br />

                                    <div className="w-full flex justify-center">
                                        <button onClick={() => {
                                            afterConvertedImageIntoText();
                                        }}
                                            className="  flex gap-1 text-center rounded-[20px] justify-center align-middle bg-blue-500 hover:bg-purple-500 p-2 text-white"
                                        >
                                            <BsBalloonHeartFill className="text-xl translate-y-[3px]" />
                                            Writing Evaluation
                                        </button>
                                    </div>
                                    {/* The component below  is for uploading  the Question Image */}
                                </div>
                            </div>

                        </>
                    ) : (
                        <>
                            <div className={`
                 w-[91vw] rounded-[20px] sm:w-[70vw] ml-[0px] sm:ml-[40px] pb-3 pt-3 grid justify-center align-middle
                `}
                                style={{ backgroundImage: "radial-gradient(circle, #cec8ef, #fff, #fff)" }}
                            >
                                <h3 className=" text-[18px] text-purple-800 mb-1 sm:text-[20px] flex gap-2"><FaPenToSquare className="text-2xl" /><span className="text-purple-500">Evaluation From</span> Text</h3>
                                <div className=" rounded-[20px] pb-2"
                                // onSubmit={writingItems == "11" || writingItems == "111" ? handleLogInPage : handleWritingSubmit}
                                >

                                    <textarea
                                        name="writinTextArea"
                                        id="textbox"
                                        className={`${task.task == 1 || task.task == 2 ? " " : "demo_projects1"} rounded-[20px] shadow-lg bg-white w-[90vw] sm:w-[41vw] p-6 `}
                                        cols="60"
                                        rows="7"
                                        placeholder="Write here..."
                                        onChange={handleinputTextArea}
                                    ></textarea>

                                    <div className="w-full flex justify-between p-1" >
                                        {/* <p>
                <span
                  className="text-3xl mr-2 text-green-400"
                >{Duplicatecount}</span>Words
              </p> */}

                                        <span id={task.task + "wordCountAlert"} className="text-[11px]"></span>
                                        <p className="translate-y-[-9px]">
                                            <span id={task.task}
                                                className="text-2xl mr-2 text-green-400"
                                            >0</span>Words
                                        </p>
                                    </div>

                                    <div className="w-full flex justify-center">
                                        <button onClick={writingItems == "11" || writingItems == "111" ? handleLogInPageForWrite : handleWritingSubmit}
                                            className={`${task.task == 1 || task.task == 2 ? " " : "demo_projects3"} 
                                               flex gap-1 text-center rounded-[20px] justify-center align-middle hover:bg-blue-500 bg-purple-500 p-2 text-white translate-y-[-16px] sm:translate-y-[-24px] text-[12px] sm:text-[15px]`}

                                        >
                                            <BsBalloonHeartFill className="text-[16px] sm:text-[21px] translate-y-[2px] text-blue-700" />
                                            Writing Evaluation
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </>

                    )
                }
                {/* <div>
            <QuestionUpload setStoreQuestionText={setStoreQuestionText} />
          </div> */}


                {/* for upload images------ */}
                <div className="   w-[91vw] rounded-[2%] bg-[#f9f6fd] sm:w-[70vw]  ml-[0px] sm:ml-[40px] pb-3 grid justify-center align-middle translate-y-[-30px]"
                    style={{ backgroundImage: "radial-gradient(circle, #cec8ef, #fff, #fff)" }}>
                    {/* The component below  is for uploading  the Question Image */}
                    <div className={`${task.task == 1 || task.task == 2 ? " " : "demo_projects2"} mt-1`} id="uploadQuestionSection">
                        <QuestionUpload setStoreQuestionText={setStoreQuestionText} />
                    </div>

                    <hr className="bg-purple-600 h-[1px] w-[90vw] sm:w-[43vw] " />

                    <h3 className=" text-[18px] text-purple-800 mb-2 sm:text-[20px] translate-y-[-18px] pt-3 flex gap-2"><IoImages className="text-2xl" /><span className="text-purple-500">Evaluation From</span> Image</h3>


                    <div className={`${task.task == 1 || task.task == 2 ? " " : "demo_projects4"}
            ${!imagePreview[0] && "border-dotted border-2 border-sky-300"}
          App uploadArea rounded-[20px] shadow-lg bg-white w-[90vw] sm:w-[43vw] translate-y-[-14px] pl-[10px] sm:pl-[50px] `}
                    >
                        <div className="w-full">{errorIfUserDontSelectImage == "imageNotSelected" && (<p className="text-[14px] font-bold text-red-600">
                            Please select an image
                        </p>)}</div>
                        <h6 id="SelectImage"></h6>
                        <div className="grid grid-cols-1 w-full gap-5 box-border pt-2 pb-3">
                            <div className="imageBo flex flex-wrap h-auto gap-2">

                            </div>
                            <div className="flex">
                                <div className={`${imagePreview[0] ? "flex" : "grid"} m-auto gap-4`}>
                                    <div className="flex flex-wrap gap-2 justify-start mr-3 translate-x-[-10px] sm:translate-x-[-20px] ">
                                        {imagePreview &&
                                            imagePreview.map((image, index) => {
                                                return (
                                                    <div key={image} className="image relative">
                                                        <Image src={image} className="w-[75px] h-[72px] rounded-[15px]" alt="upload" />
                                                        <button
                                                            className="bg-red-400 p-auto w-[17px] h-[17px] sm:w-[20px] sm:h-[20px] font-bold rounded-[50%] text-center text-[10px] sm:text-[12px] absolute top-[-5px] right-[-4px] text-white"
                                                            onClick={() => deleteHandler(image)}>
                                                            X
                                                        </button>
                                                        {/* <p>{index + 1}</p> */}
                                                    </div>
                                                );
                                            })}
                                    </div>
                                    <div className="m-auto" id={"scrollPage" + task.task}>
                                        <input type="file"
                                            // multiple
                                            accept="image/png , image/jpeg, image/webp"
                                            onChange={getImage}
                                            style={{ display: "none" }} //hiding input
                                            ref={inputEl} //set inputEl to referring this element   
                                        ></input>
                                        <>
                                            <button
                                                className={` rounded-[6%] flex justify-center  ${imagePreview[0] ? "w-auto h-auto p-2 translate-y-[5px] bg-blue-200" : "w-[120px] translate-y-[-15px]"}  align-middle  border-[2px] border-dotted translate-x-[-10px] sm:translate-x-[-22px] m-auto mt-2 ${task.task == 1 || task.task == 2 ? " " : "demo_projects5"}`}
                                                onClick={() => inputEl.current.click()}>
                                                {
                                                    imagePreview[0] ? <FaPlus className="text-[35px] hover:rotate-180 hover:transition-[4s]" /> :

                                                        <Image src={UploadImg1} alt="for Upload Image" className="w-full rounded-[15px] cursor-pointer" />
                                                }
                                            </button>
                                            {
                                                imagePreview[0] ? (
                                                    <>
                                                        <h4 className={`text-center translate-x-[-10px] sm:translate-x-[-22px] text-[10px] sm:text-[13px] mt-3`}>Upload Image</h4>

                                                    </>
                                                ) : (
                                                    <>
                                                        <h4 className={`text-center translate-x-[-10px] sm:translate-x-[-22px] text-[15px] sm:text-[17px]`}>Upload Image Here, or browse</h4>
                                                        <p className="text-center text-[13px] opacity-65 translate-x-[-8px]">Supports: PNG, JPG, JPEG</p>
                                                    </>
                                                )
                                            }
                                        </>
                                    </div>
                                </ div>
                            </div>

                            {
                                imagePreview[0] && (
                                    <div className="flex justify-start align-middle gap-[30px] m-auto">
                                        <button type="submit"
                                            onClick={
                                                writingItems == "11" || writingItems == "111" ?
                                                    handleLogInPageForUpload :
                                                    // uploadImage
                                                    uploadImageGCP
                                            }
                                            // iff it need belo  ${task.task == 1 || task.task == 2 ? " " : "demo_projects6"}
                                            className={` w-auto flex gap-1 text-center rounded-[20px] justify-center align-middle bg-blue-500 hover:bg-purple-500 p-2 text-white translate-x-[-10px] sm:translate-x-[-19px] text-[14px]`}
                                        >  <BsBalloonHeartFill className="text-xl translate-y-[1px]" />
                                            Convert image into Text </button>
                                    </div>
                                )
                            }
                        </div>
                    </div>

                </div>


                <br />


                {/* for showing the result Into A Pop-Up */}
                <div className="Result-PopUp">
                    {correctData ? (
                        <section
                            className="fixed top-0 left-0 right-0 bottom-0 w-[100%]  box-border overflow-y-scroll  h-[99vh]
                  bg-neutral-100 text-black z-[100000] grid-cols-1 grid-rows-5">
                            {/*  showing IELT's Rate base on Writing   */}
                            <div className="w-full h-full relative">
                                <div className="absolute top-5 right-5">
                                    <button
                                        style={{ color: 'rgb(153, 171, 180)' }}
                                        className="text-3xl  hover:drop-shadow-xl rounded-[50%] pt-[13px] sm:mr-5 mr-1
                                   hover:bg-light-gray w-[60px] translate-y-[-17px] sm:translate-y-[-14px] h-[60px] flex justify-center align-middle"
                                        onClick={() => { setCorrectData(false) }}>  <MdOutlineCancel />
                                    </button>
                                </div>
                                {
                                    !isMobile && (
                                        <div className="absolute top-1 left-2">
                                            <Image src={logo} alt="writin-page home image" className="w-[70%] h-[47px] sm:h-[55px]  m-3"
                                                onClick={() => { history.push("/") }}
                                            />
                                        </div>
                                    )
                                }

                                <div className="absolute top-[2%] sm:top-[33%] md:top-[35%] left-2 sm:left-5 grid">
                                    <button className="rounded-[12px] mb-1 w-[100px] md:w-[130px] h-[25px] sm:h-[28px] bg-gradient-to-r from-green-400 to-blue-500 hover:sky-green-600 hover:to-purple-600 focus:outline-none text-white md:text-[14px] text-[10px]"
                                        onClick={() => { history.push("/SpeakingPage") }}
                                    >Speaking Tests</button>
                                </div>

                                <div className="w-full flex justify-center align-middle pt-3">
                                    <div className=" mb-2">
                                        <div className="mb-2 m-auto w-[90px] h-[90px]">
                                            <AnimatedProgressProvider
                                                valueStart={0}
                                                valueEnd={Number(postIeltsRate) / 10 * 100}
                                                duration={1.5}
                                                easingFunction={easeQuadInOut}
                                            // repeat
                                            >
                                                {value => {
                                                    let roundedValue = Math.round(value);
                                                    let mainNumber = String(roundedValue).split("").join(".");
                                                    return (
                                                        <CircularProgressbar
                                                            value={value}
                                                            text={`${mainNumber}`}
                                                            strokeWidth={13}
                                                            styles={buildStyles({
                                                                pathTransition: "none",
                                                                //  textColor: "red",
                                                                pathColor: "#541bac",
                                                                // trailColor: "gold"
                                                            })}
                                                            className="font-bold"
                                                        />
                                                    );
                                                }}
                                            </AnimatedProgressProvider>
                                            <p className="text-[17px] font-bold text-center">Ielts Score</p> <br />
                                        </div> <br />
                                        <div>
                                            <div className="w-full flex gap-2 mt-2 translate-y-3 p-1">
                                                <div>
                                                    <div className="relative w-[150px] sm:w-[210px] bg-[rgb(192,192,192)] rounded-[25px]  h-[14px] mb-1 ">
                                                        <div className="bg-blue-600 h-[14px] rounded-[25px]" style={{ width: Number(LexicalResourceScore) / 10 * 100 + "%" }}></div>
                                                        <div className="barTexts w-[150px] sm:w-[210px] flex justify-between align-middle absolute top-0 left-0">
                                                            <div className="absolute top-[-20px] left-0 right-0 flex gap-3 translate-x-[-3px]">
                                                                <p className='ml-2 text-black font-bold text-[11px] '>LexicalResource</p>
                                                                <p className='font-bold text-black  mr-2 text-[15px]'>{LexicalResourceScore}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="relative mt-[17px] w-[150px] sm:w-[210px] bg-[rgb(192,192,192)] rounded-[25px]  h-[14px] mb-1">
                                                        <div className="bg-blue-600 h-[14px] rounded-[25px] " style={{ width: Number(GrammarScore) / 10 * 100 + "%" }}></div>
                                                        <div className="absolute top-[-20px] left-0 right-0 flex gap-3 translate-x-[-3px]">
                                                            <p className='ml-2 text-black font-bold text-[11px] '>Grammer Score</p>
                                                            <p className='font-bold text-black  mr-2 text-[15px]'>{GrammarScore}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="relative w-[150px] sm:w-[210px] bg-[rgb(192,192,192)] rounded-[25px]  h-[14px] mb-1 ">
                                                        <div className="bg-blue-600 h-[14px] rounded-[25px] " style={{ width: Number(storeCoherenceScore) / 10 * 100 + "%" }}></div>
                                                        <div className="absolute top-[-20px] left-0 right-0 flex gap-3 translate-x-[-3px]">
                                                            <p className='ml-2 text-black font-bold text-[11px] '>Coherence</p>
                                                            <p className='font-bold text-black  mr-2 text-[15px]'>{storeCoherenceScore}</p>
                                                        </div>
                                                    </div>
                                                    <div className="relative">
                                                        <div >
                                                            <div className="relative mt-[17px] w-[150px] sm:w-[210px] bg-[rgb(192,192,192)] rounded-[25px]  h-[14px] mb-1 ">
                                                                <div className="bg-blue-600 h-[14px] rounded-[25px]" style={{ width: MainTaskComplessionResult != "error" ? Number(MainTaskComplessionResult) / 9 * 100 + "%" : Number(0) }}></div>
                                                                <div className="absolute top-[-20px] left-0 right-0 flex gap-3 translate-x-[-3px]">
                                                                    <p className='ml-2 text-black font-bold text-[11px]'>Task Completion</p>
                                                                    <p className='font-bold text-black  mr-2 text-[15px] '>{MainTaskComplessionResult == "error" ? 0 : MainTaskComplessionResult}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="absolute bottom-[-25px] right-0 pr-1">
                                                            <div className="flex gap-1">
                                                                <>
                                                                    <p className="text-[8px] sm:text-[9px] text-red-600 translate-y-[2px] leading-[10px]">{MainTaskComplessionResult == "error" && "Upload Question For Getting Those Scores"}</p>
                                                                    <p className="text-[8px] sm:text-[9px] text-red-600 translate-x-[-6px] sm:translate-x-[-10px] translate-y-[-5px]">{MainTaskComplessionResult == "0" && "Upload valid Question For Getting better Score"}</p>
                                                                </>

                                                                {
                                                                    MainTaskComplessionResult == "error" && <button className="text-[9px] p-1 rounded-[12px] text-center bg-red-400 hover:bg-blue-500 text-white"
                                                                        onClick={() => { clickForUploadQuestion() }}
                                                                    >Upload</button>
                                                                }
                                                            </div>
                                                        </div>

                                                    </div> <br />

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                {/* ipractest feedback popup  */}
                                <div className=" flex justify-between mb-1 ">
                                    {/* for showing the iPractest feedback popUp */}
                                    {
                                        FeedbackPopUp && (
                                            <div className="Result-PopUp pt-[10px]  fixed top-2 left-2 w-[90%] sm:w-[100%] z-[345678900000] ">
                                                <div className="grid w-[100vw] h-[100%] justify-center align-middle">
                                                    <section className=' grid grid-cols-1 mt-2 rounded  justify-center align-middle w-[100vw] sm:w-[610px] p-4 h-[585px] box-border overflow-x-auto bg-white '>
                                                        <div className="grid grid-cols-1 w-full">
                                                            <div className="flex justify-between   mb-3">
                                                                <div className="ml-2">
                                                                    <a href="#" className="flex  gap-[12px]">Repeated-Words : <p className="text-3xl mb-2 mt-[-6px] text-green-500">{repeatedWords}</p></a>
                                                                    <a href="#" className="flex  gap-[12px]">Subordinate-Words : <p className="text-3xl mb-2 mt-[-6px] text-green-500">{subOrdinateWord}</p></a>
                                                                    <a href="#" className="flex  gap-[12px]">Coherence-Words : <p className="text-3xl mb-2 mt-[-6px] text-green-500">{coherenceWord}</p></a>
                                                                </div>
                                                                <div className="mr-2">
                                                                    <button
                                                                        style={{ color: 'rgb(153, 171, 180)' }}
                                                                        className="text-3xl  hover:drop-shadow-xl rounded-[50%] pt-[13px] sm:mr-5 mr-1
                                   hover:bg-light-gray w-[60px] h-[60px] flex justify-center align-middle"
                                                                        onClick={() => { setFeedbackPopUp(!FeedbackPopUp) }}>  <MdOutlineCancel />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className="w-full text-center text-2xl text-purple-400 font-bold mb-2 underline">
                                                                Feedback from iPractest Team
                                                            </div>
                                                            <div className="text-justify p-2 ">
                                                                <p className="font-bold" id="feedBackDataCheck"></p>
                                                            </div>
                                                        </div>

                                                    </section>
                                                </div>
                                            </div>
                                        )
                                    }

                                </div>

                                <div className='bg-[##eaeaea] sm:mr-3 sm:ml-3 w-full border-b-[3px] border-b-[#20bbb7]' >
                                    <ul className='flex cursor-pointer gap-1 sm:gap-2 justify-center'>
                                        <li className={`${changeTap == "Correction" ? "bg-[#20bbb7] text-gray-50" : "bg-[#eeeef0] text-gray-500"} py-2 px-2 sm:px-6 rounded-t-lg   text-[8px] sm:text-[14px] font-bold`}
                                            onClick={() => { setChangeTap("Correction") }}
                                        >Writing Correction</li>
                                        <li className={`${changeTap == "Evaluation" ? "bg-[#20bbb7] text-gray-50" : "bg-[#eeeef0] text-gray-500"} py-2  px-2 sm:px-6 rounded-t-lg  text-[8px] sm:text-[14px] font-bold`}
                                            onClick={() => {
                                                setChangeTap("Evaluation")
                                            }}
                                        >Result Evaluation</li>
                                        <li className={`${changeTap == "Improvement" ? "bg-[#20bbb7] text-gray-50" : "bg-[#eeeef0] text-gray-500"} py-2  px-2 sm:px-6  rounded-t-lg text-[8px] sm:text-[14px] font-bold`}
                                            onClick={() => {
                                                setChangeTap("Improvement")
                                            }}
                                        >Area of Improvement</li>

                                    </ul>
                                </div>

                                {/* Showing the Right & Wrong Writing by HightLight  */}
                                <div className="border-r-2 border-r-gray-300 border-l-2 border-l-gray-300 border-b-2 border-b-gray-300 sm:pl-3 sm:pr-3">
                                    {
                                        changeTap == "Correction" && (
                                            <Compare
                                                itemsSet={itemsSet}
                                                imageText={imageText}
                                                writingData={writingData.writinTextArea}
                                                correctData={correctData}
                                            />
                                        )
                                    }
                                    <div className="w-full h-full relative z-[100]">
                                        {
                                            changeTap != "Correction" && (<>
                                                {
                                                    storeTapContentForChangeUI == "LoginFirst" && (
                                                        < div className="absolute top-0 left-0 right-0  flex justify-center setBackgroundColorsInResultPremium align-middle w-full h-full z-[1000]">
                                                            <div className="w-full h-[250px] bg-transparent translate-y-3 flex justify-center align-middle m-4 ">
                                                                <button className="p-2 text-center m-auto text-white rounded-[10px] font-bold h-[40px] bg-blue-600 flex gap-2"
                                                                    onClick={() => { userLoginFunction(showFeedbackFunc) }}
                                                                >Need to Login <IoMdLogIn className="text-xl translate-y-[2px]" /></button>
                                                            </div>
                                                        </div>
                                                    )
                                                }

                                                {
                                                    storeTapContentForChangeUI == "HaveToPay" && (
                                                        <div className="absolute top-0 left-0 right-0  flex justify-center setBackgroundColorsInResultPremium align-middle w-full h-full z-[1000]">
                                                            <div className="w-full h-[250px] bg-transparent translate-y-3 flex justify-center align-middle m-4 ">
                                                                <button className="p-2 text-center m-auto text-white rounded-[10px] font-bold h-[40px] bg-blue-600 flex gap-2"
                                                                    onClick={() => { history.push("/Payment-billing-information-page") }}
                                                                >Premium <FaChessQueen className="text-xl text-yellow-400" /></button>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            </>)
                                        }

                                        {
                                            changeTap == "Evaluation" && (
                                                <ResultEvaluations
                                                    lexicalResWords={lexicalResWords}
                                                    grammerMistakes={grammerMistakes}
                                                    userTextToPassResultEvaluation={userTextToPassResultEvaluation}

                                                    LexicalResourceScore={LexicalResourceScore}
                                                    GrammarScore={GrammarScore}
                                                    storeCoherenceScore={storeCoherenceScore}
                                                />
                                            )
                                        }

                                        {
                                            changeTap == "Improvement" && (
                                                <ResultImprovement
                                                    storeTapContentForChangeUI={storeTapContentForChangeUI}
                                                    SpeakingSummary={SpeakingSummary}
                                                    SpeakingImprovement={SpeakingImprovement}

                                                />
                                            )
                                        }
                                    </div>


                                    {
                                        isloadingForFeedback && (
                                            <section className="fixed top-2 left-2 w-[100%] box-border overflow-y-scroll p-4 h-[90vh]  text-black z-[100000] grid-cols-1 grid-rows-5">
                                                <div className="fixed top-[30%]  left-[30%] z-[200000] sm:left-[45%] w-[100vw] h-[100vh]">
                                                    <div className="flex opacity-6 justify-center  align-middle w-[150px]  h-auto rounded-[20px]  box-border pt-[40px]">
                                                        <div className="bg-white rounded-[15px] p-3 h-auto">
                                                            <ClockLoader size={100} color="#36d7b7" />
                                                            <div className="w-full flex justify-center p-1 mt-1 bg-sky-300 text-white"
                                                                style={{ borderTopLeftRadius: "27px", borderTopRightRadius: "27px" }}>
                                                                <Timer Second={20} />
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </section>)
                                    }
                                </div>
                            </div>
                        </section>
                    ) : (
                        isloading && (
                            <section className="fixed top-2 left-2 w-[100%] box-border overflow-y-scroll p-4 h-[90vh]  text-black z-[100000] grid-cols-1 grid-rows-5">
                                <div className="fixed top-[30%]  left-[30%] z-[200000] sm:left-[45%] w-[100vw] h-[100vh]">
                                    <div className="flex opacity-6  justify-center align-middle w-[150px]  h-auto rounded-[20px]  box-border pt-[40px]">
                                        <div className="bg-white rounded-[15px] p-3 h-auto">
                                            <ClockLoader size={100} color="#36d7b7" />
                                            <div className="w-full flex justify-center p-1 mt-1 bg-sky-300 text-white"
                                                style={{ borderTopLeftRadius: "27px", borderTopRightRadius: "27px" }}
                                            >
                                                <Timer Second={60} />
                                            </div>
                                            <div className="w-full p-2 bg-white text-[13px] flex justify-center">{imageUploadMsg}</div>
                                        </div>


                                    </div>
                                </div>
                            </section>
                        )
                    )}
                </div>




                {/* for pass user reviews */}
                {
                    forShowCommentPopUp && <UserFeedBack closeCommentPopUp={closeCommentPopUp} setPassComment={setPassComment} />
                }
                {
                    forPassComment && (
                        <div className='W-commentsIcon'>
                            {waveTit && (<p className='CommentTitle flex gap-1'><i className="text-white">Your comment is our Heart</i>
                                <BsBalloonHeartFill className="text-3xl text-red-500" /></p>)}
                            <div className="W-forComment"
                                onClick={closeCommentPopUp}
                            >
                                <MdRateReview
                                    className="text-white text-2xl"
                                />
                            </div>
                        </div>
                    )
                }




                {/* for openLogIn & openSignUpPage connect with their states */}
                {
                    openLogIn && (
                        <div style={{ transition: openLogIn && "3s ease-in-out " }}>
                            <LoginPage
                                openLogInPage={openLogInPage}
                                openSignUpPage={openSignUpPage}

                            />
                        </div>)
                }
                {
                    forSignUpPage && (
                        <div style={{ transition: forSignUpPage && "3s ease-in-out " }}>
                            <SignUpPage
                                openSignUpPage={openSignUpPage}
                                openLogInPage={openLogInPage}
                            />
                        </div>)
                }



                {/* for openLogIn & openSignUpPage connect with their states for ipractest Feedback */}
                {
                    openLogInForFeedBack && (
                        <div className="Result-PopUp  fixed top-0 left-1 mr-1 w-[90%] sm:w-[100%] z-[1472384632746700000]">
                            <div className="grid w-[100vw] h-[100%] justify-center align-middle">
                                <section className=' grid grid-cols-1 mt-2 rounded  justify-center align-middle w-[100vw] p-4 h-[96vh]  bg-transparent '>
                                    <div style={{ transition: openLogIn && "3s ease-in-out " }}>
                                        <LoginPageForFeedback
                                            openLogInPage={openLogInPageForIpractestFeedback}
                                            openSignUpPage={openSignUpPageForIpractestFeedback}
                                            finalFuncAfterLogInorSignUp={functionForCheckConditions}
                                        />
                                    </div>
                                </section>
                            </div>
                        </div>
                    )
                }
                {
                    forSignUpPageForFeedBack && (
                        <div className="Result-PopUp  fixed top-0 left-1 mr-1 w-[90%] sm:w-[100%] z-[1472384632746700000]">
                            <div className="grid w-[100vw] h-[100%] justify-center align-middle">
                                <section className=' grid grid-cols-1 mt-2 rounded  justify-center align-middle w-[100vw] p-4 h-[96vh]   bg-transparent  '>
                                    <div style={{ transition: forSignUpPage && "3s ease-in-out " }}>
                                        <SignUpPageForFeedback
                                            openSignUpPage={openSignUpPageForIpractestFeedback}
                                            openLogInPage={openLogInPageForIpractestFeedback}
                                            finalFuncAfterLogInorSignUp={functionForCheckConditions}
                                        />
                                    </div>
                                </section>
                            </div>
                        </div>
                    )
                }
                {/* for select the user Country.... */}
                {
                    SelectCountry && (
                        <div className="Result-PopUp  fixed top-0 left-1 mr-1 w-[90%] sm:w-[100%] z-[1472384632746700000]">
                            <div className="grid w-[100vw] h-[100%] justify-center align-middle">
                                <section className=' grid grid-cols-1 mt-2 rounded  justify-center align-middle w-[100vw] p-4 h-[96vh]  bg-transparent  '>
                                    <CountrySelect
                                        setSelectCountry={setSelectCountry}
                                        functionForCheckConditions={functionForCheckConditions}
                                    />
                                </section>
                            </div>
                        </div>
                    )
                }

                {/* the code below is for Showing the Introductions about the writing section  when someOne come here for the first time */}
                {
                    !JoyRideWritingGuide && (
                        <Joyride
                            run={run}
                            setRun={setRun}
                            stepIndexState={stepIndexState}
                            setStepIndexState={setStepIndexState}
                        />
                    )
                }


            </div >
        </>
    );
}

export default Task2Compoennt;
