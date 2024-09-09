"use client"
import React, { useEffect, useState } from 'react';
import "../TestAllStyles/SubmitReading.css";
import Axios from 'axios';
import { useRouter } from 'next/navigation';
import { MdOutlineCancel } from "react-icons/md";
import { READING_POST_FOR_SET_SCORES } from "../../../../../../assets/URL's/AllUrl"


// import {useParams} from "react-router-dom";
// end of the importing..

// window.location.reload();

function SubmitReading({ handleReadingUsersData, UserData, AnswersData, setPassComment, setWaveTit, testName }) {
     //all localstorage data states..
     const [testModules, settestModules] = useState("");
     const [userloginTOken, setuserloginTOken] = useState("");
     const [userLoginEmail, setUserLoginEmail] = useState();
     const [LoginuserName, setLoginUserName] = useState("")

     // state & useEffect for counting for how much user gave the test------> 
     const history = useRouter()
     const [count, setCount] = useState(0);
     const [RightCount, setRightCount] = useState(0)
     const [Wrongcount, setWrongCount] = useState(0);
     const [ReadingRate, setReadingRate] = useState(0);
     const [forClosePopUp, setForClosePopup] = useState(false)

     // All variables for store the Answers----------
     //All right Ans Variables-------------
     let Answer1; let Answer2; let Answer3; let Answer4; let Answer5; let Answer6; let Answer7; let Answer8; let Answer9; let Answer10;
     let Answer11; let Answer12; let Answer13; let Answer14; let Answer15; let Answer16; let Answer17; let Answer18; let Answer19; let Answer20;
     let Answer21; let Answer22; let Answer23; let Answer24; let Answer25; let Answer26; let Answer27; let Answer28; let Answer29; let Answer30;
     let Answer31; let Answer32; let Answer33; let Answer34; let Answer35; let Answer36; let Answer37; let Answer38; let Answer39; let Answer40;


     //use effecrs....\
     useEffect(() => {
          settestModules(localStorage.getItem("moduleNo"));
          setuserloginTOken(localStorage.getItem("loginTOken"));
          setUserLoginEmail(localStorage.getItem('userEmail'));
          setLoginUserName(localStorage.getItem("userName"));

     }, [])



     useEffect(() => {

          if (count > 0) {
               setTimeout(() => {
                    setPassComment(true);
                    //  handlePostRequest();
               }, 2000);
               setTimeout(() => {
                    setWaveTit(false);
               }, 8000);
          }
     }, [count]);

     //Remove all slash from Answer & store them into a variable---
     let Ans1 = AnswersData[0].filter((e) => e !== "/");
     Answer1 = Ans1.filter((e) => e === UserData.ques1);
     // WrongAnswer1 = Ans1.filter((e) => e !== UserData.ques1);
     // console.log(WrongAnswer1)

     let Ans2 = AnswersData[1].filter((e) => e !== "/");
     Answer2 = Ans2.filter((e) => e === UserData.ques2);

     let Ans3 = AnswersData[2].filter((e) => e !== "/");
     Answer3 = Ans3.filter((e) => e === UserData.ques3);

     let Ans4 = AnswersData[3].filter((e) => e !== "/");
     Answer4 = Ans4.filter((e) => e === UserData.ques4);

     let Ans5 = AnswersData[4].filter((e) => e !== "/");
     Answer5 = Ans5.filter((e) => e === UserData.ques5);

     let Ans6 = AnswersData[5].filter((e) => e !== "/");
     Answer6 = Ans6.filter((e) => e === UserData.ques6);

     let Ans7 = AnswersData[6].filter((e) => e !== "/");
     Answer7 = Ans7.filter((e) => e === UserData.ques7);

     let Ans8 = AnswersData[7].filter((e) => e !== "/");
     Answer8 = Ans8.filter((e) => e === UserData.ques8);

     let Ans9 = AnswersData[8].filter((e) => e !== "/");
     Answer9 = Ans9.filter((e) => e === UserData.ques9);

     let Ans10 = AnswersData[9].filter((e) => e !== "/");
     Answer10 = Ans10.filter((e) => e === UserData.ques10);

     let Ans11 = AnswersData[10].filter((e) => e !== "/");
     Answer11 = Ans11.filter((e) => e === UserData.ques11);

     let Ans12 = AnswersData[11].filter((e) => e !== "/");
     Answer12 = Ans12.filter((e) => e === UserData.ques12);

     let Ans13 = AnswersData[12].filter((e) => e !== "/");
     Answer13 = Ans13.filter((e) => e === UserData.ques13);

     let Ans14 = AnswersData[13].filter((e) => e !== "/");
     Answer14 = Ans14.filter((e) => e === UserData.ques14);

     let Ans15 = AnswersData[14].filter((e) => e !== "/");
     Answer15 = Ans15.filter((e) => e === UserData.ques15);

     let Ans16 = AnswersData[15].filter((e) => e !== "/");
     Answer16 = Ans16.filter((e) => e === UserData.ques16);

     let Ans17 = AnswersData[16].filter((e) => e !== "/");
     Answer17 = Ans17.filter((e) => e === UserData.ques17);

     let Ans18 = AnswersData[17].filter((e) => e !== "/");
     Answer18 = Ans18.filter((e) => e === UserData.ques18);

     let Ans19 = AnswersData[18].filter((e) => e !== "/");
     Answer19 = Ans19.filter((e) => e === UserData.ques19);

     let Ans20 = AnswersData[19].filter((e) => e !== "/");
     Answer20 = Ans20.filter((e) => e === UserData.ques20);

     let Ans21 = AnswersData[20].filter((e) => e !== "/");
     Answer21 = Ans21.filter((e) => e === UserData.ques21);

     let Ans22 = AnswersData[21].filter((e) => e !== "/");
     Answer22 = Ans22.filter((e) => e === UserData.ques22);

     let Ans23 = AnswersData[22].filter((e) => e !== "/");
     Answer23 = Ans23.filter((e) => e === UserData.ques23);

     let Ans24 = AnswersData[23].filter((e) => e !== "/");
     Answer24 = Ans24.filter((e) => e === UserData.ques24);

     let Ans25 = AnswersData[24].filter((e) => e !== "/");
     Answer25 = Ans25.filter((e) => e === UserData.ques25);

     let Ans26 = AnswersData[25].filter((e) => e !== "/");
     Answer26 = Ans26.filter((e) => e === UserData.ques26);

     let Ans27 = AnswersData[26].filter((e) => e !== "/");
     Answer27 = Ans27.filter((e) => e === UserData.ques27);

     let Ans28 = AnswersData[27].filter((e) => e !== "/");
     Answer28 = Ans28.filter((e) => e === UserData.ques28);

     let Ans29 = AnswersData[28].filter((e) => e !== "/");
     Answer29 = Ans29.filter((e) => e === UserData.ques29);

     let Ans30 = AnswersData[29].filter((e) => e !== "/");
     Answer30 = Ans30.filter((e) => e === UserData.ques30);

     let Ans31 = AnswersData[30].filter((e) => e !== "/");
     Answer31 = Ans31.filter((e) => e === UserData.ques31);

     let Ans32 = AnswersData[31].filter((e) => e !== "/");
     Answer32 = Ans32.filter((e) => e === UserData.ques32);

     let Ans33 = AnswersData[32].filter((e) => e !== "/");
     Answer33 = Ans33.filter((e) => e === UserData.ques33);

     let Ans34 = AnswersData[33].filter((e) => e !== "/");
     Answer34 = Ans34.filter((e) => e === UserData.ques34);

     let Ans35 = AnswersData[34].filter((e) => e !== "/");
     Answer35 = Ans35.filter((e) => e === UserData.ques35);

     let Ans36 = AnswersData[35].filter((e) => e !== "/");
     Answer36 = Ans36.filter((e) => e === UserData.ques36);

     let Ans37 = AnswersData[36].filter((e) => e !== "/");
     Answer37 = Ans37.filter((e) => e === UserData.ques37);

     let Ans38 = AnswersData[37].filter((e) => e !== "/");
     Answer38 = Ans38.filter((e) => e === UserData.ques38);

     let Ans39 = AnswersData[38].filter((e) => e !== "/");
     Answer39 = Ans39.filter((e) => e === UserData.ques39);

     let Ans40 = AnswersData[39].filter((e) => e !== "/");
     Answer40 = Ans40.filter((e) => e === UserData.ques40);


     // console.log(typeof UserData.ques1)










     //for post request Scores & save those into the Main Dash-board Pages
     const PostReadingScors = (x) => {
          let ieltsScores = ReadingRate.toFixed(1);
          let storeIeltsScore = Math.round(ieltsScores * 2) / 2
          Axios({
               method: "post",
               url: READING_POST_FOR_SET_SCORES,
               headers: {
                    "Authorization": `Bearer ${userloginTOken}`,
                    'Content-Type': 'application/json'
               },
               data: {
                    "username": LoginuserName,
                    "userEmail": userLoginEmail,
                    "rightAns": RightCount || "",
                    "wrongAns": Wrongcount || "",
                    "ieltsRate": storeIeltsScore || "",
                    "SectionName": testName
               },
          })
               .then((res) => {
                    console.log(res.data)


               })
               .catch((e) => { console.log(e) })
     }






     // const getUserLatestDataFromDatabaseSave = (localItem) => {
     //      setTimeout(() => {
     //           Axios({
     //                method: "get",
     //                // url: 'http://localhost:8080/api/user/get-SpecificUser-Reading-Data-last-One/' + localStorage.getItem('userEmail') + "+" + testName,
     //                url: READING_GET_SPECIFIC_USER_READING_LAST_DATA + localStorage.getItem('userEmail') + "+" + testName,

     //                headers: {
     //                     "Authorization": `Bearer ${localStorage.getItem("loginTOken")}`,
     //                     'Content-Type': 'application/json'
     //                }
     //           })
     //                .then((res) => {
     //                     console.log(res.data.data);
     //                     localStorage.setItem(localItem, Number(res.data.data.ieltsRate).toFixed(1));

     //                })
     //                .catch((e) => { console.log(e) })
     //      }, 1000);
     // }


     //may be it is not using in any where please check this code below which is in useEffect..
     useEffect(() => {
          if (ReadingRate > 0 && LoginuserName && userLoginEmail) {
               PostReadingScors();
               if (testModules == "1") {
                    localStorage.setItem("R_OkmoduleNo1", "Test1_Ok");
                    localStorage.setItem("R_ScorModuleNo1", ReadingRate.toFixed(1));
                    // getUserLatestDataFromDatabaseSave("R_ScorModuleNo1")
               };
               if (testModules == "2") {
                    localStorage.setItem("R_OkmoduleNo2", "Test2_Ok")
                    localStorage.setItem("R_ScorModuleNo2", ReadingRate.toFixed(1));
                    // getUserLatestDataFromDatabaseSave("R_ScorModuleNo2")
               }
               if (testModules == "3") {
                    localStorage.setItem("R_OkmoduleNo3", "Test3_Ok");
                    localStorage.setItem("R_ScorModuleNo3", ReadingRate.toFixed(1));
                    // getUserLatestDataFromDatabaseSave("R_ScorModuleNo3")
               }
               if (testModules == "4") {
                    localStorage.setItem("R_OkmoduleNo4", "Test4_Ok");
                    localStorage.setItem("R_ScorModuleNo4", ReadingRate.toFixed(1));
                    // getUserLatestDataFromDatabaseSave("R_ScorModuleNo4")
               }
               if (testModules == "5") {
                    localStorage.setItem("R_OkmoduleNo5", "Test5_Ok");
                    localStorage.setItem("R_ScorModuleNo5", ReadingRate.toFixed(1));
                    // getUserLatestDataFromDatabaseSave("R_ScorModuleNo5")
               }
               if (testModules == "6") {
                    localStorage.setItem("R_OkmoduleNo6", "Test6_Ok");
                    localStorage.setItem("R_ScorModuleNo6", ReadingRate.toFixed(1));
                    // getUserLatestDataFromDatabaseSave("R_ScorModuleNo6")
               }
               if (testModules == "7") {
                    localStorage.setItem("R_OkmoduleNo7", "Test7_Ok");
                    localStorage.setItem("R_ScorModuleNo7", ReadingRate.toFixed(1));
                    // getUserLatestDataFromDatabaseSave("R_ScorModuleNo7")
               }
               if (testModules == "8") {
                    localStorage.setItem("R_OkmoduleNo8", "Test8_Ok");
                    localStorage.setItem("R_ScorModuleNo8", ReadingRate.toFixed(1));
                    // getUserLatestDataFromDatabaseSave("R_ScorModuleNo8")
               }
               if (testModules == "9") {
                    localStorage.setItem("R_OkmoduleNo9", "Test9_Ok");
                    localStorage.setItem("R_ScorModuleNo9", ReadingRate.toFixed(1));
                    // getUserLatestDataFromDatabaseSave("R_ScorModuleNo9")
               }
               if (testModules == "10") {
                    localStorage.setItem("R_OkmoduleNo10", "Test10_Ok");
                    localStorage.setItem("R_ScorModuleNo10", ReadingRate.toFixed(1));
                    // getUserLatestDataFromDatabaseSave("R_ScorModuleNo10")
               }
               if (testModules == "11") {
                    localStorage.setItem("R_OkmoduleNo11", "Test11_Ok");
                    localStorage.setItem("R_ScorModuleNo11", ReadingRate.toFixed(1));
                    // getUserLatestDataFromDatabaseSave("R_ScorModuleNo11")
               }
               if (testModules == "12") {
                    localStorage.setItem("R_OkmoduleNo12", "Test12_Ok");
                    localStorage.setItem("R_ScorModuleNo12", ReadingRate.toFixed(1));
                    // getUserLatestDataFromDatabaseSave("R_ScorModuleNo12")
               }

               if (testModules == "13") {
                    localStorage.setItem("R_OkmoduleNo13", "Test13_Ok");
                    localStorage.setItem("R_ScorModuleNo13", ReadingRate.toFixed(1));
                    // getUserLatestDataFromDatabaseSave("R_ScorModuleNo13")
               }
               if (testModules == "14") {
                    localStorage.setItem("R_OkmoduleNo14", "Test14_Ok");
                    localStorage.setItem("R_ScorModuleNo14", ReadingRate.toFixed(1));
                    // getUserLatestDataFromDatabaseSave("R_ScorModuleNo14")
               }
               if (testModules == "15") {
                    localStorage.setItem("R_OkmoduleNo15", "Test15_Ok");
                    localStorage.setItem("R_ScorModuleNo15", ReadingRate.toFixed(1));
                    // getUserLatestDataFromDatabaseSave("R_ScorModuleNo15")
               }
               if (testModules == "16") {
                    localStorage.setItem("R_OkmoduleNo16", "Test16_Ok");
                    localStorage.setItem("R_ScorModuleNo16", ReadingRate.toFixed(1));
                    // getUserLatestDataFromDatabaseSave("R_ScorModuleNo16")
               }

               // for Cambridge showing Answers


               if (testModules == "cambridge-1") {
                    localStorage.setItem("R_Okcambridge1", "Okcambridge_1");
                    localStorage.setItem("R_ScorOkcambridge1", ReadingRate.toFixed(1));
                    // getUserLatestDataFromDatabaseSave("R_ScorOkcambridge1")
               }
               if (testModules == "cambridge-2") {
                    localStorage.setItem("R_Okcambridge2", "Okcambridge_2");
                    localStorage.setItem("R_ScorOkcambridge2", ReadingRate.toFixed(1));
                    // getUserLatestDataFromDatabaseSave("R_ScorOkcambridge2")
               }
               if (testModules == "cambridge-3") {
                    localStorage.setItem("R_Okcambridge3", "Okcambridge_3");
                    localStorage.setItem("R_ScorOkcambridge3", ReadingRate.toFixed(1));
                    // getUserLatestDataFromDatabaseSave("R_ScorOkcambridge3")
               }
               if (testModules == "cambridge-4") {
                    localStorage.setItem("R_Okcambridge4", "Okcambridge_4");
                    localStorage.setItem("R_ScorOkcambridge4", ReadingRate.toFixed(1));
                    // getUserLatestDataFromDatabaseSave("R_ScorOkcambridge4")
               }
               if (testModules == "cambridge-5") {
                    localStorage.setItem("R_Okcambridge5", "Okcambridge_5");
                    localStorage.setItem("R_ScorOkcambridge5", ReadingRate.toFixed(1));
                    // getUserLatestDataFromDatabaseSave("R_ScorOkcambridge5")
               }
               if (testModules == "cambridge-6") {
                    localStorage.setItem("R_Okcambridge6", "Okcambridge_6");
                    localStorage.setItem("R_ScorOkcambridge6", ReadingRate.toFixed(1));
                    // getUserLatestDataFromDatabaseSave("R_ScorOkcambridge6")
               }
               if (testModules == "cambridge-7") {
                    localStorage.setItem("R_Okcambridge7", "Okcambridge_7");
                    localStorage.setItem("R_ScorOkcambridge7", ReadingRate.toFixed(1));
                    // getUserLatestDataFromDatabaseSave("R_ScorOkcambridge7")
               }
               if (testModules == "cambridge-8") {
                    localStorage.setItem("R_Okcambridge8", "Okcambridge_8");
                    localStorage.setItem("R_ScorOkcambridge8", ReadingRate.toFixed(1));
                    // getUserLatestDataFromDatabaseSave("R_ScorOkcambridge8")
               }
               // cambridge 9-12
               if (testModules == "cambridge-9") {
                    localStorage.setItem("R_Okcambridge9", "Okcambridge_9");
                    localStorage.setItem("R_ScorOkcambridge9", ReadingRate.toFixed(1));
                    // getUserLatestDataFromDatabaseSave("R_ScorOkcambridge9")
               }
               if (testModules == "cambridge-10") {
                    localStorage.setItem("R_Okcambridge10", "Okcambridge_10");
                    localStorage.setItem("R_ScorOkcambridge10", ReadingRate.toFixed(1));
                    // getUserLatestDataFromDatabaseSave("R_ScorOkcambridge10")
               }
               if (testModules == "cambridge-11") {
                    localStorage.setItem("R_Okcambridge11", "Okcambridge_11");
                    localStorage.setItem("R_ScorOkcambridge11", ReadingRate.toFixed(1));
                    // getUserLatestDataFromDatabaseSave("R_ScorOkcambridge11")
               }
               if (testModules == "cambridge-12") {
                    localStorage.setItem("R_Okcambridge12", "Okcambridge_12");
                    localStorage.setItem("R_ScorOkcambridge12", ReadingRate.toFixed(1));
                    // getUserLatestDataFromDatabaseSave("R_ScorOkcambridge12")
               }


          }

     }, [ReadingRate])







     // for given fil Numbers---->
     useEffect(() => {
          if (UserData.ques1 !== "") {
               setCount(count => count + 1)
          }
          if (UserData.ques2 !== "") {
               setCount(count => count + 1)
          }
          if (UserData.ques3 !== "") {
               setCount(count => count + 1)
          }
          if (UserData.ques4 !== "") {
               setCount(count => count + 1)
          }
          if (UserData.ques5 !== "") {
               setCount(count => count + 1)
          }
          if (UserData.ques6 !== "") {
               setCount(count => count + 1)
          }
          if (UserData.ques7 !== "") {
               setCount(count => count + 1)
          }
          if (UserData.ques8 !== "") {
               setCount(count => count + 1)
          }
          if (UserData.ques9 !== "") {
               setCount(count => count + 1)
          }
          if (UserData.ques10 !== "") {
               setCount(count => count + 1)
          }
          if (UserData.ques11 !== "") {
               setCount(count => count + 1)
          }
          if (UserData.ques12 !== "") {
               setCount(count => count + 1)
          }
          if (UserData.ques13 !== "") {
               setCount(count => count + 1)
          }
          if (UserData.ques14 !== "") {
               setCount(count => count + 1)
          }
          if (UserData.ques15 !== "") {
               setCount(count => count + 1)
          }
          if (UserData.ques16 !== "") {
               setCount(count => count + 1)
          }
          if (UserData.ques17 !== "") {
               setCount(count => count + 1)
          }
          if (UserData.ques18 !== "") {
               setCount(count => count + 1)
          }
          if (UserData.ques19 !== "") {
               setCount(count => count + 1)
          }
          if (UserData.ques20 !== "") {
               setCount(count => count + 1)
          }
          if (UserData.ques21 !== "") {
               setCount(count => count + 1)
          }
          if (UserData.ques22 !== "") {
               setCount(count => count + 1)
          }
          if (UserData.ques23 !== "") {
               setCount(count => count + 1)
          }
          if (UserData.ques24 !== "") {
               setCount(count => count + 1)
          }
          if (UserData.ques25 !== "") {
               setCount(count => count + 1)
          }
          if (UserData.ques26 !== "") {
               setCount(count => count + 1)
          }
          if (UserData.ques27 !== "") {
               setCount(count => count + 1)
          }
          if (UserData.ques28 !== "") {
               setCount(count => count + 1)
          }
          if (UserData.ques29 !== "") {
               setCount(count => count + 1)
          }
          if (UserData.ques30 !== "") {
               setCount(count => count + 1)
          }
          if (UserData.ques31 !== "") {
               setCount(count => count + 1)
          }
          if (UserData.ques32 !== "") {
               setCount(count => count + 1)
          }
          if (UserData.ques33 !== "") {
               setCount(count => count + 1)
          }
          if (UserData.ques34 !== "") {
               setCount(count => count + 1)
          }
          if (UserData.ques35 !== "") {
               setCount(count => count + 1)
          }
          if (UserData.ques36 !== "") {
               setCount(count => count + 1)
          }
          if (UserData.ques37 !== "") {
               setCount(count => count + 1)
          }
          if (UserData.ques38 !== "") {
               setCount(count => count + 1)
          }
          if (UserData.ques39 !== "") {
               setCount(count => count + 1)
          }
          if (UserData.ques40 !== "") {
               setCount(count => count + 1)
          }

     }, [UserData])

     // for Match the Right Answers--->      
     useEffect(() => {
          if (Answer1[0]) {
               setRightCount(RightCount => RightCount + 1);
               setReadingRate(ReadingRate => ReadingRate + 0.225);
          }
          if (Answer2[0]) {
               setRightCount(RightCount => RightCount + 1);
               setReadingRate(ReadingRate => ReadingRate + 0.225);
          }
          if (Answer3[0]) {
               setRightCount(RightCount => RightCount + 1);
               setReadingRate(ReadingRate => ReadingRate + 0.225);
          }
          if (Answer4[0]) {
               setRightCount(RightCount => RightCount + 1);
               setReadingRate(ReadingRate => ReadingRate + 0.225);
          }
          if (Answer5[0]) {
               setRightCount(RightCount => RightCount + 1);
               setReadingRate(ReadingRate => ReadingRate + 0.225);
          }
          if (Answer6[0]) {
               setRightCount(RightCount => RightCount + 1);
               setReadingRate(ReadingRate => ReadingRate + 0.225);
          }
          if (Answer7[0]) {
               setRightCount(RightCount => RightCount + 1);
               setReadingRate(ReadingRate => ReadingRate + 0.225);
          }
          if (Answer8[0]) {
               setRightCount(RightCount => RightCount + 1);
               setReadingRate(ReadingRate => ReadingRate + 0.225);
          }
          if (Answer9[0]) {
               setRightCount(RightCount => RightCount + 1);
               setReadingRate(ReadingRate => ReadingRate + 0.225);
          }
          if (Answer10[0]) {
               setRightCount(RightCount => RightCount + 1);
               setReadingRate(ReadingRate => ReadingRate + 0.225);
          }
          if (Answer11[0]) {
               setRightCount(RightCount => RightCount + 1);
               setReadingRate(ReadingRate => ReadingRate + 0.225);
          }
          if (Answer12[0]) {
               setRightCount(RightCount => RightCount + 1);
               setReadingRate(ReadingRate => ReadingRate + 0.225);
          }
          if (Answer13[0]) {
               setRightCount(RightCount => RightCount + 1);
               setReadingRate(ReadingRate => ReadingRate + 0.225);
          }
          if (Answer14[0]) {
               setRightCount(RightCount => RightCount + 1);
               setReadingRate(ReadingRate => ReadingRate + 0.225);
          }
          if (Answer15[0]) {
               setRightCount(RightCount => RightCount + 1);
               setReadingRate(ReadingRate => ReadingRate + 0.225);
          }
          if (Answer16[0]) {
               setRightCount(RightCount => RightCount + 1);
               setReadingRate(ReadingRate => ReadingRate + 0.225);
          }
          if (Answer17[0]) {
               setRightCount(RightCount => RightCount + 1);
               setReadingRate(ReadingRate => ReadingRate + 0.225);
          }
          if (Answer18[0]) {
               setRightCount(RightCount => RightCount + 1);
               setReadingRate(ReadingRate => ReadingRate + 0.225);
          }
          if (Answer19[0]) {
               setRightCount(RightCount => RightCount + 1);
               setReadingRate(ReadingRate => ReadingRate + 0.225);
          }
          if (Answer20[0]) {
               setRightCount(RightCount => RightCount + 1);
               setReadingRate(ReadingRate => ReadingRate + 0.225);
          }
          if (Answer21[0]) {
               setRightCount(RightCount => RightCount + 1);
               setReadingRate(ReadingRate => ReadingRate + 0.225);
          }
          if (Answer22[0]) {
               setRightCount(RightCount => RightCount + 1);
               setReadingRate(ReadingRate => ReadingRate + 0.225);
          }
          if (Answer23[0]) {
               setRightCount(RightCount => RightCount + 1);
               setReadingRate(ReadingRate => ReadingRate + 0.225);
          }
          if (Answer24[0]) {
               setRightCount(RightCount => RightCount + 1);
               setReadingRate(ReadingRate => ReadingRate + 0.225);
          }
          if (Answer25[0]) {
               setRightCount(RightCount => RightCount + 1);
               setReadingRate(ReadingRate => ReadingRate + 0.225);
          }
          if (Answer26[0]) {
               setRightCount(RightCount => RightCount + 1);
               setReadingRate(ReadingRate => ReadingRate + 0.225);
          }
          if (Answer27[0]) {
               setRightCount(RightCount => RightCount + 1);
               setReadingRate(ReadingRate => ReadingRate + 0.225);
          }
          if (Answer28[0]) {
               setRightCount(RightCount => RightCount + 1);
               setReadingRate(ReadingRate => ReadingRate + 0.225);
          }
          if (Answer29[0]) {
               setRightCount(RightCount => RightCount + 1);
               setReadingRate(ReadingRate => ReadingRate + 0.225);
          }
          if (Answer30[0]) {
               setRightCount(RightCount => RightCount + 1);
               setReadingRate(ReadingRate => ReadingRate + 0.225);
          }
          if (Answer31[0]) {
               setRightCount(RightCount => RightCount + 1);
               setReadingRate(ReadingRate => ReadingRate + 0.225);
          }
          if (Answer32[0]) {
               setRightCount(RightCount => RightCount + 1);
               setReadingRate(ReadingRate => ReadingRate + 0.225);
          }
          if (Answer33[0]) {
               setRightCount(RightCount => RightCount + 1);
               setReadingRate(ReadingRate => ReadingRate + 0.225);
          }
          if (Answer34[0]) {
               setRightCount(RightCount => RightCount + 1);
               setReadingRate(ReadingRate => ReadingRate + 0.225);
          }
          if (Answer35[0]) {
               setRightCount(RightCount => RightCount + 1);
               setReadingRate(ReadingRate => ReadingRate + 0.225);
          }
          if (Answer36[0]) {
               setRightCount(RightCount => RightCount + 1);
               setReadingRate(ReadingRate => ReadingRate + 0.225);
          }
          if (Answer37[0]) {
               setRightCount(RightCount => RightCount + 1);
               setReadingRate(ReadingRate => ReadingRate + 0.225);
          }
          if (Answer38[0]) {
               setRightCount(RightCount => RightCount + 1);
               setReadingRate(ReadingRate => ReadingRate + 0.225);
          }
          if (Answer39[0]) {
               setRightCount(RightCount => RightCount + 1);
               setReadingRate(ReadingRate => ReadingRate + 0.225);
          }
          if (Answer40[0]) {
               setRightCount(RightCount => RightCount + 1);
               setReadingRate(ReadingRate => ReadingRate + 0.225);
          }
     }, [UserData])

     // Your Wrong Answers Count----------------->
     useEffect(() => {
          if (UserData.ques1 !== "" && !Answer1[0]) {

               setWrongCount(Wrongcount => Wrongcount + 1)
          }
          if (UserData.ques2 !== "" && !Answer2[0]) {

               setWrongCount(Wrongcount => Wrongcount + 1)
          }
          if (UserData.ques3 !== "" && !Answer3[0]) {

               setWrongCount(Wrongcount => Wrongcount + 1)
          }
          if (UserData.ques4 !== "" && !Answer4[0]) {

               setWrongCount(Wrongcount => Wrongcount + 1)
          }
          if (UserData.ques5 !== "" && !Answer5[0]) {

               setWrongCount(Wrongcount => Wrongcount + 1)
          } if (UserData.ques6 !== "" && !Answer6[0]) {

               setWrongCount(Wrongcount => Wrongcount + 1)
          }
          if (UserData.ques7 !== "" && !Answer7[0]) {

               setWrongCount(Wrongcount => Wrongcount + 1)
          }
          if (UserData.ques8 !== "" && !Answer8[0]) {

               setWrongCount(Wrongcount => Wrongcount + 1)
          }
          if (UserData.ques9 !== "" && !Answer9[0]) {

               setWrongCount(Wrongcount => Wrongcount + 1)
          } if (UserData.ques10 !== "" && !Answer10[0]) {

               setWrongCount(Wrongcount => Wrongcount + 1)
          }

          if (UserData.ques11 !== "" && !Answer11[0]) {

               setWrongCount(Wrongcount => Wrongcount + 1)
          }
          if (UserData.ques12 !== "" && !Answer12[0]) {

               setWrongCount(Wrongcount => Wrongcount + 1)
          }
          if (UserData.ques13 !== "" && !Answer13[0]) {

               setWrongCount(Wrongcount => Wrongcount + 1)
          }
          if (UserData.ques14 !== "" && !Answer14[0]) {

               setWrongCount(Wrongcount => Wrongcount + 1)
          }
          if (UserData.ques15 !== "" && !Answer15[0]) {

               setWrongCount(Wrongcount => Wrongcount + 1)
          } if (UserData.ques16 !== "" && !Answer16[0]) {

               setWrongCount(Wrongcount => Wrongcount + 1)
          }
          if (UserData.ques17 !== "" && !Answer17[0]) {

               setWrongCount(Wrongcount => Wrongcount + 1)
          }
          if (UserData.ques18 !== "" && !Answer18[0]) {

               setWrongCount(Wrongcount => Wrongcount + 1)
          }
          if (UserData.ques19 !== "" && !Answer19[0]) {

               setWrongCount(Wrongcount => Wrongcount + 1)
          } if (UserData.ques20 !== "" && !Answer20[0]) {

               setWrongCount(Wrongcount => Wrongcount + 1)
          }

          if (UserData.ques21 !== "" && !Answer21[0]) {

               setWrongCount(Wrongcount => Wrongcount + 1)
          }
          if (UserData.ques22 !== "" && !Answer22[0]) {

               setWrongCount(Wrongcount => Wrongcount + 1)
          }
          if (UserData.ques23 !== "" && !Answer23[0]) {

               setWrongCount(Wrongcount => Wrongcount + 1)
          }
          if (UserData.ques24 !== "" && !Answer24[0]) {

               setWrongCount(Wrongcount => Wrongcount + 1)
          }
          if (UserData.ques25 !== "" && !Answer25[0]) {

               setWrongCount(Wrongcount => Wrongcount + 1)
          } if (UserData.ques26 !== "" && !Answer26[0]) {

               setWrongCount(Wrongcount => Wrongcount + 1)
          }
          if (UserData.ques27 !== "" && !Answer27[0]) {

               setWrongCount(Wrongcount => Wrongcount + 1)
          }
          if (UserData.ques28 !== "" && !Answer28[0]) {

               setWrongCount(Wrongcount => Wrongcount + 1)
          }
          if (UserData.ques29 !== "" && !Answer29[0]) {

               setWrongCount(Wrongcount => Wrongcount + 1)
          } if (UserData.ques30 !== "" && !Answer30[0]) {

               setWrongCount(Wrongcount => Wrongcount + 1)
          }

          if (UserData.ques31 !== "" && !Answer31[0]) {

               setWrongCount(Wrongcount => Wrongcount + 1)
          }
          if (UserData.ques32 !== "" && !Answer32[0]) {

               setWrongCount(Wrongcount => Wrongcount + 1)
          }
          if (UserData.ques33 !== "" && !Answer33[0]) {

               setWrongCount(Wrongcount => Wrongcount + 1)
          }
          if (UserData.ques34 !== "" && !Answer34[0]) {

               setWrongCount(Wrongcount => Wrongcount + 1)
          }
          if (UserData.ques35 !== "" && !Answer35[0]) {

               setWrongCount(Wrongcount => Wrongcount + 1)
          } if (UserData.ques36 !== "" && !Answer36[0]) {

               setWrongCount(Wrongcount => Wrongcount + 1)
          }
          if (UserData.ques37 !== "" && !Answer37[0]) {

               setWrongCount(Wrongcount => Wrongcount + 1)
          }
          if (UserData.ques38 !== "" && !Answer38[0]) {

               setWrongCount(Wrongcount => Wrongcount + 1)
          }
          if (UserData.ques39 !== "" && !Answer39[0]) {

               setWrongCount(Wrongcount => Wrongcount + 1)
          } if (UserData.ques40 !== "" && !Answer40[0]) {

               setWrongCount(Wrongcount => Wrongcount + 1)
          }


     }, [UserData])








     return (
          <section className='fixed top-2 left-0 sm:left-2 w-[100%] h-[100vh] sm:w-[100%] bg-transparent'
          // onClick={() => { setForClosePopup(true) }}
          >
               <div className="grid w-[100vw] h-[100%] justify-center align-middle realtive">
                    <div className='absolute top-0 left-0 right-0 bottom-0 bg-transparent z-[1000]'
                         onClick={handleReadingUsersData}
                    ></div>
                    <div className='mt-2 rounded   w-[100vw] sm:w-[600px]  p-4 h-[250px]  bg-blue-200 shadow-xl z-[100000] '
                    //   onMouseEnter={() => { setForClosePopup(false) }}
                    >
                         <div className='w-full flex justify-between'>
                              <div className=''>
                                   <div className='p-2 bg-gray-700 w-[100px] rounded-full flex justify-center align-middle ' >
                                        <span className='text-xl sm:text-2xl text-white'>{count}</span>
                                        <span className='text-2xl sm:text-3xl text-white'>/40</span>
                                   </div> <br />
                                   <p className='text-black text-[11px] font-bold'>Your Given Answers</p>

                              </div>
                              <div className='mr-3'>
                                   <button
                                        style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
                                        className={`text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray 
                                             ${forClosePopUp && "submitAnimationForButton bg-red-300 text-white rounded-[50%]"}`}
                                        onClick={handleReadingUsersData}>  <MdOutlineCancel />
                                   </button>
                              </div>

                         </div>
                         <div className='w-full ml-3 flex justify-center mt-[-10px] sm:mt-[-40px]'>
                              <div className='pt-3 text-center '>
                                   <div className='flex gap-2'>
                                        <p className='text-black font-bold mt-2'>Your Right Answers: </p>
                                        <span className='text-2xl sm:text-3xl ml-1 text-green-400' > {RightCount}</span>
                                   </div>
                                   <div className='flex gap-2'>
                                        <p className='text-black font-bold mt-2'>Your Wrong Answers:</p>
                                        <span className='text-2xl sm:text-3xl ml-1 text-red-500' > {Wrongcount}</span>
                                   </div>
                                   <div className='flex gap-2 ml-3'>
                                        <p className='text-black font-bold mt-2'>IELT's Score :</p>
                                        <span className='text-2xl  sm:text-3xl ml-1 text-blue-500' > {(Math.round(ReadingRate * 2) / 2).toFixed(1)}</span>
                                   </div>
                              </div>
                              {/*<div>*/}
                              {/*     <button*/}
                              {/*         onClick={() => { history.push("/ReadingPage") }}*/}
                              {/*         // onClick={handleReadingUsersData}*/}
                              {/*         className=' h-[35px] w-[120px] rounded bg-blue-400 text-black cursor-pointer border-2 mr-4 hover:bg-white'>Close*/}
                              {/*     </button>*/}

                              {/*</div>*/}
                         </div>

                         {/* 
               <div id='mainDiv ' className='grid grid-cols-1 sm:grid-cols-2 p-3 pl-3 w-full'>
                    <div className="flex flex-wrap m-1 h-auto overflow-hidden"><p ><span className='p-1 bg-sky-200 mr-1 rounded-full'>1</span>{AnswersData[0]}= </p> <p style={{ color: Answer1[0] ? "Green" : "Red", fontSize: "15px", marginLeft: "5px", marginTop: "4px" }} >{UserData.ques1 ? UserData.ques1 : "X"}</p></div>
                    <div className="flex flex-wrap  h-auto m-1 overflow-hidden"><p><span className='p-1 bg-sky-200 mr-1 rounded-full'>2</span>{AnswersData[1]} = </p> <p style={{ color: Answer2[0] ? "Green" : "Red", fontSize: "15px", marginLeft: "5px", marginTop: "4px" }} >{UserData.ques2 ? UserData.ques2 : "X"}</p></div>
                    <div className="flex flex-wrap m-1 h-auto  overflow-hidden"><p><span className='p-1 bg-sky-200 mr-1 rounded-full'>3</span>{AnswersData[2]} = </p> <p style={{ color: Answer3[0] ? "Green" : "Red", fontSize: "15px", marginLeft: "5px", marginTop: "4px" }} >{UserData.ques3 ? UserData.ques3 : "X"}</p></div>
                    <div className="flex flex-wrap h-auto  m-1 overflow-hidden "><p><span className='p-1 bg-sky-200 mr-1 rounded-full'>4</span>{AnswersData[3]} = </p> <p style={{ color: Answer4[0] ? "Green" : "Red", fontSize: "15px", marginLeft: "5px", marginTop: "4px" }} >{UserData.ques4 ? UserData.ques4 : "X"}</p></div>
                    <div className="flex flex-wrap h-auto m-1 overflow-hidden "><p><span className='p-1 bg-sky-200 mr-1 rounded-full'>5</span>{AnswersData[4]} = </p> <p style={{ color: Answer5[0] ? "Green" : "Red", fontSize: "15px", marginLeft: "5px", marginTop: "4px" }} >{UserData.ques5 ? UserData.ques5 : "X"}</p></div>
                    <div className="flex flex-wrap h-autooverflow-hidden"><p><span className='p-1 bg-sky-200 mr-1 rounded-full'>6</span>{AnswersData[5]} = </p> <p style={{ color: Answer6[0] ? "Green" : "Red", fontSize: "15px", marginLeft: "5px", marginTop: "4px" }} >{UserData.ques6 ? UserData.ques6 : "X"}</p></div>
                    <div className="flex flex-wrap  m-1 h-auto overflow-hidden"><p><span className='p-1 bg-sky-200 mr-1 rounded-full'>7</span>{AnswersData[6]} = </p> <p style={{ color: Answer7[0] ? "Green" : "Red", fontSize: "15px", marginLeft: "5px", marginTop: "4px" }} >{UserData.ques7 ? UserData.ques7 : "X"}</p></div>
                    <div className="flex flex-wrap m-1 h-autooverflow-hidden"><p><span className='p-1 bg-sky-200 mr-1 rounded-full'>8</span>{AnswersData[7]} = </p> <p style={{ color: Answer8[0] ? "Green" : "Red", fontSize: "15px", marginLeft: "5px", marginTop: "4px" }} >{UserData.ques8 ? UserData.ques8 : "X"}</p></div>
                    <div className="flex flex-wrap  m-1 h-auto overflow-hidden"> <p><span className='p-1 bg-sky-200 mr-1 rounded-full'>9</span>{AnswersData[8]} = </p> <p style={{ color: Answer9[0] ? "Green" : "Red", fontSize: "15px", marginLeft: "5px", marginTop: "4px" }} >{UserData.ques9 ? UserData.ques9 : "X"}</p></div>
                    <div className="flex flex-wrap m-1 h-auto overflow-hidden"><p><span className='p-1 bg-sky-200 mr-1 rounded-full'>10</span>{AnswersData[9]} = </p> <p style={{ color: Answer10[0] ? "Green" : "Red", fontSize: "15px", marginLeft: "5px", marginTop: "4px" }} >{UserData.ques10 ? UserData.ques10 : "X"}</p></div>
                    <div className="flex flex-wrap m-1 h-auto overflow-hidden"><p><span className='p-1 bg-sky-200 mr-1 rounded-full'>11</span>{AnswersData[10]} = </p> <p style={{ color: Answer11[0] ? "Green" : "Red", fontSize: "15px", marginLeft: "5px", marginTop: "4px" }} >{UserData.ques11 ? UserData.ques11 : "X"}</p></div>
                    <div className="flex flex-wrap  m-1 h-auto overflow-hidden"><p><span className='p-1 bg-sky-200 mr-1 rounded-full'>12</span>{AnswersData[11]} = </p> <p style={{ color: Answer12[0] ? "Green" : "Red", fontSize: "15px", marginLeft: "5px", marginTop: "4px" }} >{UserData.ques12 ? UserData.ques12 : "X"}</p></div>
                    <div className="flex flex-wrap  m-1 h-auto overflow-hidden"><p><span className='p-1 bg-sky-200 mr-1 rounded-full'>13</span>{AnswersData[12]} = </p> <p style={{ color: Answer13[0] ? "Green" : "Red", fontSize: "15px", marginLeft: "5px", marginTop: "4px" }} >{UserData.ques13 ? UserData.ques13 : "X"}</p></div>
                    <div className="flex flex-wrap  m-1 h-auto overflow-hidden"><p><span className='p-1 bg-sky-200 mr-1 rounded-full'>14</span>{AnswersData[13]} = </p> <p style={{ color: Answer14[0] ? "Green" : "Red", fontSize: "15px", marginLeft: "5px", marginTop: "4px" }} >{UserData.ques14 ? UserData.ques14 : "X"}</p></div>
                    <div className="flex flex-wrap  m-1 h-auto overflow-hidden"><p><span className='p-1 bg-sky-200 mr-1 rounded-full'>15</span>{AnswersData[14]} = </p> <p style={{ color: Answer15[0] ? "Green" : "Red", fontSize: "15px", marginLeft: "5px", marginTop: "4px" }} >{UserData.ques15 ? UserData.ques15 : "X"}</p></div>
                    <div className="flex flex-wrap  m-1 h-auto overflow-hidden"><p><span className='p-1 bg-sky-200 mr-1 rounded-full'>16</span>{AnswersData[15]} = </p> <p style={{ color: Answer16[0] ? "Green" : "Red", fontSize: "15px", marginLeft: "5px", marginTop: "4px" }} >{UserData.ques16 ? UserData.ques16 : "X"}</p></div>
                    <div className="flex flex-wrap  m-1 h-auto overflow-hidden"><p><span className='p-1 bg-sky-200 mr-1 rounded-full'>17</span>{AnswersData[16]} = </p> <p style={{ color: Answer17[0] ? "Green" : "Red", fontSize: "15px", marginLeft: "5px", marginTop: "4px" }} >{UserData.ques17 ? UserData.ques17 : "X"}</p></div>
                    <div className="flex flex-wrap  m-1 h-auto overflow-hidden "><p><span className='p-1 bg-sky-200 mr-1 rounded-full'>18</span>{AnswersData[17]} = </p> <p style={{ color: Answer18[0] ? "Green" : "Red", fontSize: "15px", marginLeft: "5px", marginTop: "4px" }} >{UserData.ques18 ? UserData.ques18 : "X"}</p></div>
                    <div className="flex flex-wrap  m-1 h-auto overflow-hidden"><p><span className='p-1 bg-sky-200 mr-1 rounded-full'>19</span>{AnswersData[18]} = </p> <p style={{ color: Answer19[0] ? "Green" : "Red", fontSize: "15px", marginLeft: "5px", marginTop: "4px" }} >{UserData.ques19 ? UserData.ques19 : "X"}</p></div>
                    <div className="flex flex-wrap  m-1 h-auto overflow-hidden"><p><span className='p-1 bg-sky-200 mr-1 rounded-full'>20</span>{AnswersData[19]} = </p> <p style={{ color: Answer20[0] ? "Green" : "Red", fontSize: "15px", marginLeft: "5px", marginTop: "4px" }} >{UserData.ques20 ? UserData.ques20 : "X"}</p></div>
                    <div className="flex flex-wrap  m-1 h-auto overflow-hidden"><p><span className='p-1 bg-sky-200 mr-1 rounded-full'>21</span>{AnswersData[20]} = </p> <p style={{ color: Answer21[0] ? "Green" : "Red", fontSize: "15px", marginLeft: "5px", marginTop: "4px" }} >{UserData.ques21 ? UserData.ques21 : "X"}</p></div>
                    <div className="flex flex-wrap  m-1 h-auto overflow-hidden"><p><span className='p-1 bg-sky-200 mr-1 rounded-full'>22</span>{AnswersData[21]} = </p> <p style={{ color: Answer22[0] ? "Green" : "Red", fontSize: "15px", marginLeft: "5px", marginTop: "4px" }} >{UserData.ques22 ? UserData.ques22 : "X"}</p></div>
                    <div className="flex flex-wrap  m-1 h-auto overflow-hidden"><p><span className='p-1 bg-sky-200 mr-1 rounded-full'>23</span>{AnswersData[22]} = </p> <p style={{ color: Answer23[0] ? "Green" : "Red", fontSize: "15px", marginLeft: "5px", marginTop: "4px" }} >{UserData.ques23 ? UserData.ques23 : "X"}</p></div>
                    <div className="flex flex-wrap m-1 h-auto overflow-hidden"><p><span className='p-1 bg-sky-200 mr-1 rounded-full'>24</span>{AnswersData[23]} = </p> <p style={{ color: Answer24[0] ? "Green" : "Red", fontSize: "15px", marginLeft: "5px", marginTop: "4px" }} >{UserData.ques24 ? UserData.ques24 : "X"}</p></div>
                    <div className="flex flex-wrap m-1 h-auto overflow-hidden"><p><span className='p-1 bg-sky-200 mr-1 rounded-full'>25</span>{AnswersData[24]} = </p> <p style={{ color: Answer25[0] ? "Green" : "Red", fontSize: "15px", marginLeft: "5px", marginTop: "4px" }} >{UserData.ques25 ? UserData.ques25 : "X"}</p></div>
                    <div className="flex flex-wrap m-1 h-auto overflow-hidden"><p><span className='p-1 bg-sky-200 mr-1 rounded-full'>26</span>{AnswersData[25]} = </p> <p style={{ color: Answer26[0] ? "Green" : "Red", fontSize: "15px", marginLeft: "5px", marginTop: "4px" }} >{UserData.ques26 ? UserData.ques26 : "X"}</p></div>
                    <div className="flex flex-wrap m-1 h-auto overflow-hidden"><p><span className='p-1 bg-sky-200 mr-1 rounded-full'>27</span>{AnswersData[26]} = </p> <p style={{ color: Answer27[0] ? "Green" : "Red", fontSize: "15px", marginLeft: "5px", marginTop: "4px" }} >{UserData.ques27 ? UserData.ques27 : "X"}</p></div>
                    <div className="flex flex-wrap m-1 h-auto overflow-hidden"><p><span className='p-1 bg-sky-200 mr-1 rounded-full'>28</span>{AnswersData[27]} = </p> <p style={{ color: Answer28[0] ? "Green" : "Red", fontSize: "15px", marginLeft: "5px", marginTop: "4px" }} >{UserData.ques28 ? UserData.ques28 : "X"}</p></div>
                    <div className="flex flex-wrap  m-1 h-auto overflow-hidden"><p><span className='p-1 bg-sky-200 mr-1 rounded-full'>29</span>{AnswersData[28]} = </p> <p style={{ color: Answer29[0] ? "Green" : "Red", fontSize: "15px", marginLeft: "5px", marginTop: "4px" }} >{UserData.ques29 ? UserData.ques29 : "X"}</p></div>
                    <div className="flex flex-wrap  m-1 h-auto overflow-hidden"><p><span className='p-1 bg-sky-200 mr-1 rounded-full'>30</span>{AnswersData[29]} = </p> <p style={{ color: Answer30[0] ? "Green" : "Red", fontSize: "15px", marginLeft: "5px", marginTop: "4px" }} >{UserData.ques30 ? UserData.ques30 : "X"}</p></div>
                    <div className="flex flex-wrap m-1 h-auto overflow-hidden"><p><span className='p-1 bg-sky-200 mr-1 rounded-full'>31</span>{AnswersData[30]} = </p> <p style={{ color: Answer31[0] ? "Green" : "Red", fontSize: "15px", marginLeft: "5px", marginTop: "4px" }} >{UserData.ques31 ? UserData.ques31 : "X"}</p></div>
                    <div className="flex flex-wrap m-1 h-auto overflow-hidden"><p><span className='p-1 bg-sky-200 mr-1 rounded-full'>32</span>{AnswersData[31]} = </p> <p style={{ color: Answer32[0] ? "Green" : "Red", fontSize: "15px", marginLeft: "5px", marginTop: "4px" }} >{UserData.ques32 ? UserData.ques32 : "X"}</p></div>
                    <div className="flex flex-wrap m-1 h-auto overflow-hidden"><p><span className='p-1 bg-sky-200 mr-1 rounded-full'>33</span>{AnswersData[32]} = </p> <p style={{ color: Answer33[0] ? "Green" : "Red", fontSize: "15px", marginLeft: "5px", marginTop: "4px" }} >{UserData.ques33 ? UserData.ques33 : "X"}</p></div>
                    <div className="flex flex-wrap m-1 h-auto overflow-hidden "><p><span className='p-1 bg-sky-200 mr-1 rounded-full'>34</span>{AnswersData[33]} = </p> <p style={{ color: Answer34[0] ? "Green" : "Red", fontSize: "15px", marginLeft: "5px", marginTop: "4px" }} >{UserData.ques34 ? UserData.ques34 : "X"}</p></div>
                    <div className="flex flex-wrap m-1 h-auto overflow-hidden"><p><span className='p-1 bg-sky-200 mr-1 rounded-full'>35</span>{AnswersData[34]} = </p> <p style={{ color: Answer35[0] ? "Green" : "Red", fontSize: "15px", marginLeft: "5px", marginTop: "4px" }} >{UserData.ques35 ? UserData.ques35 : "X"}</p></div>
                    <div className="flex flex-wrap m-1 h-auto overflow-hidden "><p><span className='p-1 bg-sky-200 mr-1 rounded-full'>36</span>{AnswersData[35]} = </p> <p style={{ color: Answer36[0] ? "Green" : "Red", fontSize: "15px", marginLeft: "5px", marginTop: "4px" }} >{UserData.ques36 ? UserData.ques36 : "X"}</p></div>
                    <div className="flex flex-wrap m-1 h-auto overflow-hidden"><p><span className='p-1 bg-sky-200 mr-1 rounded-full'>37</span>{AnswersData[36]} = </p> <p style={{ color: Answer37[0] ? "Green" : "Red", fontSize: "15px", marginLeft: "5px", marginTop: "4px" }} >{UserData.ques37 ? UserData.ques37 : "X"}</p></div>
                    <div className="flex flex-wrap m-1 h-auto overflow-hidden"><p><span className='p-1 bg-sky-200 mr-1 rounded-full'>38</span>{AnswersData[37]} = </p> <p style={{ color: Answer38[0] ? "Green" : "Red", fontSize: "15px", marginLeft: "5px", marginTop: "4px" }} >{UserData.ques38 ? UserData.ques38 : "X"}</p></div>
                    <div className="flex flex-wrap m-1 h-auto overflow-hidden"><p><span className='p-1 bg-sky-200 mr-1 rounded-full'>39</span>{AnswersData[38]} = </p> <p style={{ color: Answer39[0] ? "Green" : "Red", fontSize: "15px", marginLeft: "5px", marginTop: "4px" }} >{UserData.ques39 ? UserData.ques39 : "X"}</p></div>
                    <div className="flex flex-wrapm-1 h-auto  overflow-hidden"><p><span className='p-1 bg-sky-200 mr-1 rounded-full'>40</span>{AnswersData[39]} = </p> <p style={{ color: Answer40[0] ? "Green" : "Red", fontSize: "15px", marginLeft: "5px", marginTop: "4px" }} >{UserData.ques40 ? UserData.ques40 : "X"}</p></div>

               </div> */}

                    </div>
               </div>
          </section>
     )
};



export default SubmitReading





















