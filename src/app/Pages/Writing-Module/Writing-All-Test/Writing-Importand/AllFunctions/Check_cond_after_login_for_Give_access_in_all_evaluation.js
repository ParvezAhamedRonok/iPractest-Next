import { WRITING_GET_SINGLE_USER_IPRACTEST_FEEDBACK_DATA, WRITING_POST_SAVE_IPRACTEST_FEEDBACK_DATA_TO_DATABASE } from "@/assets/URL's/AllUrl";
import axios from "axios";
import { Sugession_API_Calling } from "./Sugession_API_Calling";
import { Lexical_Grammer_Sug_API_Calling_func } from "./Lexical_Grammer_Sug_API_Calling_func";
import { dummyTextArr } from "./DummyTextArr";



export function Check_cond_after_login_for_Give_access_in_all_evaluation(
    changeTap, userPaymentStatusCheck, setstoreTapContentForChangeUI,
    userTextToPassResultEvaluation, setSpeakingImprovement, setSpeakingSummary,
    setlexicalResWords, setgrammerMistakes
) {
    //LOCALSTORAGES DATA GETTING & STORING DATA INTO VARIABLES....
    let useremail = "";
    let userName = "";
    let userLoginToken = "";

    if (typeof window !== 'undefined') {  // Ensure localStorage is accessible in the browser
        useremail = localStorage.getItem('userEmail');  // Replace 'myDataKey' with your key
        userName = localStorage.getItem("userName");
        userLoginToken = localStorage.getItem("loginTOken")
    }

    setTimeout(() => {
        if (useremail) {
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
                            // alert("paid..")
                            setstoreTapContentForChangeUI("");
                            //call those api below if user have payment alreaddy...
                            Sugession_API_Calling(userTextToPassResultEvaluation, setSpeakingImprovement, setSpeakingSummary);
                            Lexical_Grammer_Sug_API_Calling_func(userTextToPassResultEvaluation, setlexicalResWords, setgrammerMistakes);

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
                        Sugession_API_Calling(userTextToPassResultEvaluation, setSpeakingImprovement, setSpeakingSummary);
                        Lexical_Grammer_Sug_API_Calling_func(userTextToPassResultEvaluation, setlexicalResWords, setgrammerMistakes);
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
            setstoreTapContentForChangeUI("LoginFirst");
        }
    }, 300);

}
