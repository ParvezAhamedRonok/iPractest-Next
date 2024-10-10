
// it will be a function when user want to make SOP it will show the user to login 
// if they are not logged in yet--

import { WRITING_GET_SINGLE_USER_IPRACTEST_FEEDBACK_DATA, WRITING_POST_SAVE_IPRACTEST_FEEDBACK_DATA_TO_DATABASE } from "@/assets/URL's/AllUrl";
import { Lexical_Grammer_Sug_API_Calling_func } from "./Lexical_Grammer_Sug_API_Calling_func";
import { Sugession_API_Calling } from "./Sugession_API_Calling";
import axios from "axios";
//end of the importing ....



// function for senddaing to the login & signUp pages 
// & make conditions if user already been 
let change_status_for_save_data = false;
export function Needto_login_button_cond_Then_give_access(
    //next-func props..suggestion & lexical api calling..
    userPaymentStatusCheck, history,
    changeTap, userTextToPassResultEvaluation, setSpeakingImprovement, setSpeakingSummary,
    setlexicalResWords, setgrammerMistakes, setisloadingForFeedback, setstoreTapContentForChangeUI,

) {

    //staring logics......
    let this_func_local_email_get = ""
    let this_func_local_Token_get = ""

    if (typeof window !== 'undefined') {  // Ensure localStorage is accessible in the browser
        this_func_local_email_get = localStorage.getItem('userEmail');  // Replace 'myDataKey' with your key
        this_func_local_Token_get = localStorage.getItem("loginTOken")
    }

    //loading starting...
    setisloadingForFeedback(true);

    setTimeout(() => {
        axios({
            method: "get",
            url: WRITING_GET_SINGLE_USER_IPRACTEST_FEEDBACK_DATA + this_func_local_email_get,
            // url: 'https://https://node-js-express-login-example.onrender.com/api/user/getSpecificUserWritingiPractestFeedback/' + useremail,
            headers: {
                "Authorization": `Bearer ${this_func_local_Token_get}`,
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                console.log(res);
                setisloadingForFeedback(false)
                if (res.data.data[0]) {
                    if (userPaymentStatusCheck == "Starter" || userPaymentStatusCheck == "Expert") {
                        //calling next function by passing all props which i am getting from parent component.....
                        showFeedbackFunc(
                            changeTap, userTextToPassResultEvaluation, setSpeakingImprovement, setSpeakingSummary, setlexicalResWords, setgrammerMistakes, setisloadingForFeedback, setstoreTapContentForChangeUI);
                    } else {
                        //if user haven't paid redirect the user to the payment page
                        history.push("/Pages/Payments/BillingComponent")
                        localStorage.setItem("productID", "WrittingPage");
                    }

                } else {
                    change_status_for_save_data = true
                    //for showing the user feedback data 
                    showFeedbackFunc(
                        changeTap, userTextToPassResultEvaluation, setSpeakingImprovement, setSpeakingSummary, setlexicalResWords, setgrammerMistakes, setisloadingForFeedback, setstoreTapContentForChangeUI);
                    //make the status true for save the data into the database--

                }
            })
            .catch((e) => {
                console.log(e);
                setisloadingForFeedback(false);
                change_status_for_save_data = true
                //for showing the user feedback data 
                showFeedbackFunc(
                    changeTap, userTextToPassResultEvaluation, setSpeakingImprovement, setSpeakingSummary, setlexicalResWords, setgrammerMistakes, setisloadingForFeedback, setstoreTapContentForChangeUI);
            });

    }, 1300);




}





const showFeedbackFunc = (
    changeTap, userTextToPassResultEvaluation, setSpeakingImprovement, setSpeakingSummary, setlexicalResWords, setgrammerMistakes,
    setisloadingForFeedback, setstoreTapContentForChangeUI
) => {

    //LOCALSTORAGES DATA GETTING & STORING DATA INTO VARIABLES....
    let useremail = "";
    let userName = "";

    if (typeof window !== 'undefined') {  // Ensure localStorage is accessible in the browser
        useremail = localStorage.getItem('userEmail');  // Replace 'myDataKey' with your key
        userName = localStorage.getItem("userName")
    }


    //start the loading...
    setisloadingForFeedback(true);
    //call those api below if user have payment alreaddy...
    Sugession_API_Calling(userTextToPassResultEvaluation, setSpeakingImprovement, setSpeakingSummary);
    Lexical_Grammer_Sug_API_Calling_func(userTextToPassResultEvaluation, setlexicalResWords, setgrammerMistakes);


    //remove above shawod page & acces to to get evaluations...
    setTimeout(() => {
        setisloadingForFeedback(false);

        //below variable for remove login or premium page from result 
        setstoreTapContentForChangeUI("");

        if (change_status_for_save_data) {
            axios({
                method: "post",
                // url: "http://localhost:8080/api/user/saveUserWritiniPractestFeedback",
                url: WRITING_POST_SAVE_IPRACTEST_FEEDBACK_DATA_TO_DATABASE,
                data: {
                    "userName": userName,
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

    }, 2000);


}












































