"use client"
import dynamic from "next/dynamic";
import React, { useRef, useState, useEffect } from "react";
import "../../WrittingAllStyles/WrittingPage.css";
import axios from "axios";
import { BsBalloonHeartFill } from "react-icons/bs"
import { MdRateReview } from "react-icons/md"
import UserFeedBack from "../../../../../../components/UserComments";
import { isMobile } from "react-device-detect";
// import { computerVision, isConfigured as ComputerVisionIsConfigured } from '../../../../../../lib/azure-cognitiveservices-computervision';
import { ClockLoader } from "react-spinners";
import logo from "../../../../../../assets/images/Practestlogo.png";
import UploadImg1 from "../../../../../../assets/images/Writing-Images/uploadImg1.png"
import Timer from "./Timer";
import { FaChessQueen } from "react-icons/fa";

import { FaPenToSquare } from "react-icons/fa6";
import { IoImages } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
import { useRouter } from "next/navigation";
import { FaPlus } from "react-icons/fa6";
import Image from "next/image";
import { useStateContext } from "../../../../../../contexts/ContextProvider";
import { CheckPaymentStatus } from "../../../../Payments/CkeckPayment/CheckPayments.js";

import { WRITING_POST_FOR_SET_SCORES, WRITING_POST_CHECK_ANSWER, WRITING_POST_UPLOAD_IMAGES, WRITING_POST_IPRACTEST_FEEDBACK, WRITING_GET_SINGLE_USER_IPRACTEST_FEEDBACK_DATA, WRITING_POST_SAVE_IPRACTEST_FEEDBACK_DATA_TO_DATABASE, WRITING_POST_UPLOAD_GCP_IMAGE_TO_GET_TEXT_FROM_IMAGE, WRITING_POST_GET_COHERENCE_SCORES_AFTER_EVALUATION } from "../../../../../../assets/URL's/AllUrl.js"

import { Joyride } from "./Joyride.js";
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
import { Store_writing_scores_in_localstg } from "../AllFunctions/Store-writing-Score-in-localstg";
import { Post_to_save_data_in_databse } from "../AllFunctions/Post-To-Save-data-in-Database";
import { Lexical_Grammer_Sug_API_Calling_func } from "../AllFunctions/Lexical_Grammer_Sug_API_Calling_func";
import { Check_duplicate_words } from "../AllFunctions/Check_duplicate_words";
import { Sugession_API_Calling } from "../AllFunctions/Sugession_API_Calling";
import { Needto_login_button_cond_Then_give_access } from "../AllFunctions/Needto_login_button_cond_Then_give_access";
import { Check_cond_after_login_for_Give_access_in_all_evaluation } from "../AllFunctions/Check_cond_after_login_for_Give_access_in_all_evaluation";

//client components.....

const LoginPageForFeedback = dynamic(() => import("../../../../SOPFILE/LoginPage/LoginPage"), { ssr: false });
const SignUpPageForFeedback = dynamic(() => import("../../../../SOPFILE/LoginPage/SignUpPage"), { ssr: false });
const QuestionUpload = dynamic(() => import("./QuestionUpload.js"), { ssr: false });

//end importing-------->





//storing images blob url here...
let ImageArray = [];


//storing user answer text for passign to into lexical * suggestion function API..
let userTextToPassResultEvaluation;

function WritingTextArea(task) {
  const history = useRouter();
  const { setWritingText, setLoginRedirectUrl, userPaymentStatusCheck, setuserPaymentStatusCheck } = useStateContext();

  //single variabes...
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
  const [writingTestName, setWritingtestName] = useState("")

  const [run, setRun] = useState(true);
  const [stepIndexState, setStepIndexState] = useState(0);


  const [repeatedWords, setRepeatedWords] = useState(0);
  const [subOrdinateWord, setSubOrdinateWord] = useState(0);
  const [isloadingForFeedback, setisloadingForFeedback] = useState(false);


  //iPractestfeedback login states...
  const [forSignUpPageForFeedBack, setForSignUpPageForFeedBack] = useState(false)
  const [openLogInForFeedBack, setOpenLogInForFeedBack] = useState(false);

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
  const [QuestionimagePreview, setQuestionPreview] = useState([]);
  const [waveTit, setWaveTit] = useState(true)
  const inputEl = useRef(null);
  const [changeImageUI, setChangeImageUI] = useState(false)
  const [imageText, setIgameText] = useState('');
  const [storeQuestionText, setStoreQuestionText] = useState("")

  const [errorIfUserDontSelectImage, seterrorIfUserDontSelectImage] = useState("");

  //changeStatus for login & signUp 
  //it will work for when user want to login by this page or by condition after they use 1/2 time evaluation
  //& also when click on the result page login in first..
  const [change_login_Status, setchange_login_Status] = useState(true);



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


  //useEffect uses...
  useEffect(() => {
    // storing all localstorage data to states..
    setUserLoginName(localStorage.getItem("userName"));
    setUserEmail(localStorage.getItem('userEmail'));
    setModulesWriting(localStorage.getItem("ModulesWriting"));
    setGetUserGritingNo(localStorage.getItem("WritingNo"));
    setGoogleLoginToken(localStorage.getItem("GoogleFacebookToken"));
    setUserSignupInfo(localStorage.getItem("userSignupInfo"));
    setJoyRideWritingguide(localStorage.getItem("forOffW_Intro"))
    setuserCountry(localStorage.getItem("setCountry"));
    setUserloginToken(localStorage.getItem("loginTOken"))
    setWritingtestName(localStorage.getItem("Writing-Test-Name") && localStorage.getItem("Writing-Test-Name"))
  }, []);

  //reload page function when user want to log in by this page without 
  //click on click to login first
  const Reload_Page_func = () => {
    window.location.reload(); // Reload the current page
  }







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


  //upload image function & make them into a blob URL 
  //& then store into a array..
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

//delete selected image also from blob url arrya..
  function deleteHandler(image) {
    setPreview(imagePreview.filter((e) => e !== image));
    URL.revokeObjectURL(image);
    // console.log(image)
    var filteredImage = ImageArray.filter(function (imageofArray) { return imageofArray.url != image; });    //8-18-23
    // var resultOne = ImageArray.filter(v => v !==image  );
    ImageArray = filteredImage;
    // console.log(ImageArray)
  }



  // repeated word count in user answer writings..
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


  //give repeated word Score in user answer writings..
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
  function checkWritingAnswer(text) {
    //store this text into a state for pass to the resultEvaluation component for getting the evaluations
    userTextToPassResultEvaluation = text
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

    //Getting coherence scores by call API which is in another file 
    // that store coherence scores into  taskComplessionSTr = "" variable if uploaded question is done other wise 
    // it will store error into this statesetMainTaskComplessionResult which will be main use is not upload question image yet..

    if (storeQuestionText != "") {
      // Post_API_to_get_Coherence_Score(
      //   text, storeQuestionText, taskComplessionSTr, setMainTaskComplessionResult
      // )
      axios.post(WRITING_POST_GET_COHERENCE_SCORES_AFTER_EVALUATION, {
        questions: storeQuestionText,
        answers: text
      })
        .then((res) => {
          console.log(res.data.message);
      
          const numbers = Array.from(res.data.message.matchAll(/(\d+)(?:-(\d+))?/g), ([, beginStr, endStr]) => {
            const [begin, end] = [beginStr, endStr].map(Number);
            return endStr ? Array.from({ length: end - begin + 1 }, (_, i) => begin + i) : [begin];
          }).flat();
      
          console.log(numbers);
      
          const mainTaskScore = numbers[0] ? 
            (numbers[0] < 4 ? 5 : numbers[0] <= 6 ? numbers[0] + 1 : numbers[0]) : "0";
      
          setMainTaskComplessionResult(mainTaskScore);
          taskComplessionSTr = mainTaskScore;
        })
        .catch(console.log);
      

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

          let scoreRepeat = repeatedWordScore(text);
          let subordinates = Check_duplicate_words(text);

          setRepeatedWords(scoreRepeat);
          setSubOrdinateWord(subordinates)


          //get the user corrected data by the help of below API request code--
          var mainSentData = {
            "textData": sentData.inputs
          }
          axios.post("https://ipractest-406204.uc.r.appspot.com/writingCorrection/", mainSentData)
            .then((mainData) => {
              //stop loading....
              setisloading(false);

              //check conditions when user logged-In / have paid to give them access in all evaluations
              Check_cond_after_login_for_Give_access_in_all_evaluation(
                changeTap, userPaymentStatusCheck, setstoreTapContentForChangeUI,
                userTextToPassResultEvaluation, setSpeakingImprovement, setSpeakingSummary,
                setlexicalResWords, setgrammerMistakes
              )

              let corretDta = mainData.data.message.replace(/['"]+/g, '').replace(/\\n/g, ' ').split("**").join()
              // console.log(corretDta);
              setCorrectData(corretDta);
            })
            .catch((err) => { console.log(err) });

          //making total IELTS scores depends on every scores....
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

          //store data into database ....

          Post_to_save_data_in_databse(res.data, totalscore, userLoginToken, userLoginName, useremail, MainTaskComplessionResult)

          //storing scores into localstorage if user gave any texts as like writing test-1 to test-14
          if (ModulesWriting && useremail) {
            Store_writing_scores_in_localstg(postIeltsRate, ModulesWriting)
          }
        })
        .catch((err) => {
          setisloading(false);
          alert("Server Error please try again letter")
          console.log(err);
        });
    }, 2500);
    setisloading(true);

    //if i want to use this function in another file below propes i have to pass with calling this function......
    //userTextToPassResultEvaluation,setImageUploadMsg,storeQuestionText,setMainTaskComplessionResult,getUserWritinNo,repeatedWordScore,CheckWords,setRepeatedWords,setSubOrdinateWord,setisloading,funcForCheckConditionsForResults,setCorrectData,totalscore,setpostIeltsRate,setLexicalResourceScore,setGeammarScore,setCoherenceScore,Post_to_save_data_in_databse,Store_writing_scores_in_localstg,ModulesWriting,useremail

  }


  const uploadImageGCP = async (e) => {
    let scrollPage = document.getElementById("scrollPage" + task.task);
    let pagePosition = scrollPage.offsetTop;

    if (ImageArray[0]) {
      setisloading(true);
      setImageUploadMsg("Uploading..");
      //set items 1 for showing images text comparison ..
      setitemsSet("uploaded-text")

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

      setIgameText((imagetext));
      setTimeout(() => {
        setChangeImageUI(true);
        //for take the user to the top
        window.scrollTo({ top: pagePosition - 690, behavior: 'smooth' });
      }, 1000);
      setTimeout(() => {
        setisloading(false)
      }, 2000);
    } else {
      seterrorIfUserDontSelectImage("imageNotSelected")
    }

  }



  //function for after successfull converted Image into text & say to the user
  // if they want to edit their text............(02/03/24)
  const afterConvertedImageIntoText = () => {
    checkWritingAnswer(imageText);
  }

















  // function for the textarea value after submit----
  const handleWritingSubmit = (x) => {
    let wordEl = document.getElementById(task.task);
    // console.log(wordEl.innerText);
    let wordCountIn = parseInt(wordEl.innerText);
    if (wordCountIn > 149) {
      checkWritingAnswer(writingData.writinTextArea);
    } else {
      let wordCountAlert = document.getElementById(
        task.task + "wordCountAlert"
      );
      wordCountAlert.innerText = "You have to write at least 250 words.";
      wordCountAlert.style.color = "red";
    }

    //set items writing-text for showing user main writing comparision in result....
    setitemsSet("writing-text")
  };



  // count the words of user answer writings... when they write in the textBox..
  const handleinputTextArea = (input) => {
    // Assuming 'task' is defined somewhere accessible in your code
    const word = document.getElementById(task.task);
  
    // Count words efficiently
    const userText = input.target.value.trim();
    const wordCount = userText.split(/\s+/).filter(Boolean).length;
    word.innerHTML = wordCount;
  
    // Update state using functional update for 'writingData'
    setWritingData((prevData) => ({
      ...prevData,
      [input.target.name]: input.target.value,
    }));
  };
  





  // if user evaluation more then 2/3 time this function will be
  //called & the login page will be shown-------
  const handleLogInPageForWrite = (x) => {
    if (useremail) {
      localStorage.removeItem("WritingNo");
      handleWritingSubmit();
    } else {
      //login page...
      openLogInPageForIpractestFeedback()
    }
  }

  const handleLogInPageForUpload = (x) => {
    // console.log("Hello i am Upload User");
    if (useremail) {
      localStorage.removeItem("WritingNo");
      // uploadImage();
      uploadImageGCP()
    } else {
      //login page...
      openLogInPageForIpractestFeedback()
    }
  }





  //Function for open login & SignUp pages Base on state........
  const openLogInPageForIpractestFeedback = () => {
    setTimeout(() => {
      setLoginRedirectUrl("RedirectUrlStatusChane")
      setOpenLogInForFeedBack(!openLogInForFeedBack)
      setForSignUpPageForFeedBack(false) // solution
    }, 100);
  }


  const openSignUpPageForIpractestFeedback = (x) => {
    setTimeout(() => {
      setForSignUpPageForFeedBack(!forSignUpPageForFeedBack)
      setOpenLogInForFeedBack(false)    //solution
    }, 200);
  }


  const userLoginFunction = (x) => {
    // x.preventDefault();
    localStorage.setItem("productID", "WrittingPage");
    // console.log("checkLogIn..")
    setisloadingForFeedback(true);
    if (!userLoginToken && !googleLoginToken && !useSignUpinfo) {
      setisloadingForFeedback(false);
      //open login popUp...
      openLogInPageForIpractestFeedback();
    } else {
      setisloadingForFeedback(false)
      functionForCheckConditions();
    }
  }


  // function for senddaing to the login & signUp pages 
  // & make conditions for need-to-login-button..
  const functionForCheckConditions = () => {
    //call this function below from another file & pass those things which i need to pass here..
    Needto_login_button_cond_Then_give_access(
      userPaymentStatusCheck, history,
      changeTap, userTextToPassResultEvaluation, setSpeakingImprovement, setSpeakingSummary,
      setlexicalResWords, setgrammerMistakes, setisloadingForFeedback, setstoreTapContentForChangeUI,
    )

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



  return (
    <>

      <div className="Writingmain mb-3">
        {
          changeImageUI ? (
            <>
              <div className=" w-[91vw] rounded-[20px] sm:w-[70vw] ml-[0px] sm:ml-[40px] pb-5 pt-3 grid justify-center align-middle"
                style={{ backgroundImage: "radial-gradient(circle, #cec8ef, #fff, #fff)" }}
              >
                <div className="rounded-[20px] pb-2 ">
                  <div className="w-full p-1 flex justify-between">
                    <p className="text-[12px] font-bold text-black translate-y-1">
                      You can modify your text.</p>
                    <p> Total words: <span className={`text-xl  font-bold ${imageText.split(' ').length < 250 ? "text-red-500" : "text-gray-900"}`}>{imageText.split(' ').length}</span></p>
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
                <div className=" rounded-[20px] pb-2">
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
                    <span id={task.task + "wordCountAlert"} className="text-[11px]"></span>
                    <p className="translate-y-[-9px]">
                      <span id={task.task}
                        className="text-2xl mr-2 text-green-400"
                      >0</span>Words
                    </p>
                  </div>

                  <div className="w-full flex justify-center">
                    <button onClick={getUserWritinNo == "11" || getUserWritinNo == "111" ? handleLogInPageForWrite : handleWritingSubmit}
                      className={`${task.task == 1 || task.task == 2 ? " " : "demo_projects3"} 
                         flex gap-1 text-center rounded-[20px] justify-center align-middle hover:bg-blue-500 bg-purple-500 p-2 text-white translate-y-[-16px] sm:translate-y-[-24px] text-[12px] sm:text-[15px]`}  >
                      <BsBalloonHeartFill className="text-[16px] sm:text-[21px] translate-y-[2px] text-blue-700" />
                      Writing Evaluation
                    </button>
                  </div>

                </div>
              </div>
            </>

          )
        }

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
            {/* <h2 className="text-2xl">Upload Image</h2>

            <h4>Image Preview</h4> <br /> */}
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
                            <Image src={image} className=" rounded-[15px]" alt="upload"
                              width={75}
                              height={72}
                            />
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
                        getUserWritinNo == "11" || getUserWritinNo == "111" ?
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
                      <Image src={logo} alt="" className="w-[70%] h-[47px] sm:h-[55px]  m-3"
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


                {/* all tabs */}
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
                                  onClick={() => {
                                    userLoginFunction();
                                    setchange_login_Status(false);
                                  }}
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
                                  onClick={() => { history.push("/Pages/Payments/BillingComponent") }}
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



        {/* for openLogIn & openSignUpPage connect with their states for ipractest Feedback */}
        {
          openLogInForFeedBack && (
            <div className="Result-PopUp  fixed top-0 left-1 mr-1 w-[90%] sm:w-[100%] z-[1472384632746700000]">
              <div className="grid w-[100vw] h-[100%] justify-center align-middle">
                <section className=' grid grid-cols-1 mt-2 rounded  justify-center align-middle w-[100vw] p-4 h-[96vh]  bg-transparent '>
                  <div style={{ transition: openLogInForFeedBack && "3s ease-in-out " }}>
                    <LoginPageForFeedback
                      openLogInPage={openLogInPageForIpractestFeedback}
                      openSignUpPage={openSignUpPageForIpractestFeedback}
                      finalFuncAfterLogInorSignUp={change_login_Status ? Reload_Page_func : functionForCheckConditions}
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
                  <div style={{ transition: forSignUpPageForFeedBack && "3s ease-in-out " }}>
                    <SignUpPageForFeedback
                      openSignUpPage={openSignUpPageForIpractestFeedback}
                      openLogInPage={openLogInPageForIpractestFeedback}
                      finalFuncAfterLogInorSignUp={change_login_Status ? Reload_Page_func : functionForCheckConditions}
                    />
                  </div>
                </section>
              </div>
            </div>
          )
        }
        {/* for select the user Country.... */}
        {/* {
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
        } */}


        {/* the code below is for Showing the Introductions about the writing section 
                 when someOne come here for the first time */}
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

export default WritingTextArea;
