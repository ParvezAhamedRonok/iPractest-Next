"use client"
import React, { useEffect, useState } from 'react';
import Axios from "axios";
import { WRITING_POST_FOR_SET_SCORES } from "../../../../../../assets/URL's/AllUrl";
//END OF THE IMPORTING.....




export const PostWritingScors = (x) => {
    //all localstorage data storing states.......
    const [userLoginEmail, setUserLoginEmail] = useState("");
    const [userLoginToken, setUserloginToken] = useState("")
    const [getCountryName, setGetCountryName] = useState("");
    const [userLoginUserName, setUserLoginName] = useState("")

    useEffect(() => {
        setGetCountryName(localStorage.getItem("setCountry"));
        setUserLoginEmail(localStorage.getItem('userEmail'));
        setUserloginToken(localStorage.getItem("loginTOken"));
        setUserLoginName(localStorage.getItem("userName"))

    }, [])



    //for post request Scores & save those into the Main Dash-board Pages
    useEffect(() => {

        Axios({
            method: "post",
            url: WRITING_POST_FOR_SET_SCORES,
            headers: {
                "Authorization": `Bearer ${userLoginToken}`,
                'Content-Type': 'application/json'
            },
            data: {
                "username": getCountryName,
                "userEmail": userLoginEmail,
                "LexicalResourceScore": x.LexicalResourceScore || "",
                "GrammarScore": x.GrammaticalScore || "",
                "ieltsRate": x.ieltsScore || ""
            },
        })
            .then((res) => {
                console.log(res.data);
            })
            .catch((e) => { console.log(e) })
    }, [])

}




//may be it will not need if i get all scores from database...
export const ShowTestcors = (x) => {
    const [ModulesWriting, setModulesWriting] = useState("");

    useEffect(() => {
        setModulesWriting(localStorage.getItem("ModulesWriting"))
    }, [])


    if (ModulesWriting == "1") {
        localStorage.setItem("W_OkmoduleNo1", "Test1_Ok");
        localStorage.setItem("W_ScorModuleNo1", x.ieltsScore)
    };
    if (ModulesWriting == "2") {
        localStorage.setItem("W_OkmoduleNo2", "Test2_Ok");
        localStorage.setItem("W_ScorModuleNo2", x.ieltsScore)
    }
    if (ModulesWriting == "3") {
        localStorage.setItem("W_OkmoduleNo3", "Test3_Ok");
        localStorage.setItem("W_ScorModuleNo3", x.ieltsScore)
    }
    if (ModulesWriting == "4") {
        localStorage.setItem("W_OkmoduleNo4", "Test4_Ok");
        localStorage.setItem("W_ScorModuleNo4", x.ieltsScore)
    }
    if (ModulesWriting == "5") {
        localStorage.setItem("W_OkmoduleNo5", "Test5_Ok");
        localStorage.setItem("W_ScorModuleNo5", x.ieltsScore)
    }
    if (ModulesWriting == "6") {
        localStorage.setItem("W_OkmoduleNo6", "Test6_Ok");
        localStorage.setItem("W_ScorModuleNo6", x.ieltsScore)
    }
    if (ModulesWriting == "7") {
        localStorage.setItem("W_OkmoduleNo7", "Test7_Ok");
        localStorage.setItem("W_ScorModuleNo7", x.ieltsScore)
    }
    if (ModulesWriting == "8") {
        localStorage.setItem("W_OkmoduleNo8", "Test8_Ok");
        localStorage.setItem("W_ScorModuleNo8", x.ieltsScore)
    }
    if (ModulesWriting == "9") {
        localStorage.setItem("W_OkmoduleNo9", "Test9_Ok");
        localStorage.setItem("W_ScorModuleNo9", x.ieltsScore)
    }
    if (ModulesWriting == "10") {
        localStorage.setItem("W_OkmoduleNo10", "Test10_Ok");
        localStorage.setItem("W_ScorModuleNo10", x.ieltsScore)
    }
    if (ModulesWriting == "11") {
        localStorage.setItem("W_OkmoduleNo11", "Test11_Ok");
        localStorage.setItem("W_ScorModuleNo11", x.ieltsScore)
    }
    if (ModulesWriting == "12") {
        localStorage.setItem("W_OkmoduleNo12", "Test12_Ok");
        localStorage.setItem("W_ScorModuleNo12", x.ieltsScore)
    }
    if (ModulesWriting == "13") {
        localStorage.setItem("W_OkmoduleNo13", "Test13_Ok");
        localStorage.setItem("W_ScorModuleNo13", x.ieltsScore)
    }
    if (ModulesWriting == "14") {
        localStorage.setItem("W_OkmoduleNo14", "Test14_Ok");
        localStorage.setItem("W_ScorModuleNo14", x.ieltsScore)
    }
    // for Cambridge showing Answers
    if (ModulesWriting == "cambridge-1") {
        localStorage.setItem("W_Okcambridge1", "Okcambridge_1");
        localStorage.setItem("W_ScorOkcambridge1", x.ieltsScore);
    }
    if (ModulesWriting == "cambridge-2") {
        localStorage.setItem("W_Okcambridge2", "Okcambridge_2");
        localStorage.setItem("W_ScorOkcambridge2", x.ieltsScore);
    }
    if (ModulesWriting == "cambridge-3") {
        localStorage.setItem("W_Okcambridge3", "Okcambridge_3");
        localStorage.setItem("W_ScorOkcambridge3", x.ieltsScore);
    }
    if (ModulesWriting == "cambridge-4") {
        localStorage.setItem("W_Okcambridge4", "Okcambridge_4");
        localStorage.setItem("W_ScorOkcambridge4", x.ieltsScore);
    }
    if (ModulesWriting == "cambridge-5") {
        localStorage.setItem("W_Okcambridge5", "Okcambridge_5");
        localStorage.setItem("W_ScorOkcambridge5", x.ieltsScore);
    }
    if (ModulesWriting == "cambridge-6") {
        localStorage.setItem("W_Okcambridge6", "Okcambridge_6");
        localStorage.setItem("W_ScorOkcambridge6", x.ieltsScore);
    }
    if (ModulesWriting == "cambridge-7") {
        localStorage.setItem("W_Okcambridge7", "Okcambridge_7");
        localStorage.setItem("W_ScorOkcambridge7", x.ieltsScore);
    }
    if (ModulesWriting == "cambridge-8") {
        localStorage.setItem("W_Okcambridge8", "Okcambridge_8");
        localStorage.setItem("W_ScorOkcambridge8", x.ieltsScore);
    }
    if (ModulesWriting == "cambridge-9") {
        localStorage.setItem("W_Okcambridge9", "Okcambridge_9");
        localStorage.setItem("W_ScorOkcambridge9", x.ieltsScore);
    }
    if (ModulesWriting == "cambridge-10") {
        localStorage.setItem("W_Okcambridge10", "Okcambridge_10");
        localStorage.setItem("W_ScorOkcambridge10", x.ieltsScore);
    }
    if (ModulesWriting == "cambridge-11") {
        localStorage.setItem("W_Okcambridge11", "Okcambridge_11");
        localStorage.setItem("W_ScorOkcambridge11", x.ieltsScore);
    }
    if (ModulesWriting == "cambridge-12") {
        localStorage.setItem("W_Okcambridge12", "Okcambridge_12");
        localStorage.setItem("W_ScorOkcambridge12", x.ieltsScore);
    }
    if (ModulesWriting == "cambridge-13") {
        localStorage.setItem("W_Okcambridge13", "Okcambridge_13");
        localStorage.setItem("W_ScorOkcambridge13", x.ieltsScore);
    }
    if (ModulesWriting == "cambridge-14") {
        localStorage.setItem("W_Okcambridge14", "Okcambridge_14");
        localStorage.setItem("W_ScorOkcambridge14", x.ieltsScore);
    }
    if (ModulesWriting == "cambridge-15") {
        localStorage.setItem("W_Okcambridge15", "Okcambridge_15");
        localStorage.setItem("W_ScorOkcambridge15", x.ieltsScore);
    }
}
