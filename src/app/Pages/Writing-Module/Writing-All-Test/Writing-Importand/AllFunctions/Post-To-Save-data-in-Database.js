
import Axios from "axios";
import { WRITING_POST_FOR_SET_SCORES } from "../../../../../../assets/URL's/AllUrl";

export function Post_to_save_data_in_databse(res_data, totalscore, userLoginToken, userLoginName, useremail, MainTaskComplessionResult) {
    Axios({
        method: "post",
        url: WRITING_POST_FOR_SET_SCORES,
        headers: {
            "Authorization": `Bearer ${userLoginToken}`,
            'Content-Type': 'application/json'
        },
        data: {
            "username": userLoginName,
            "userEmail": useremail,
            "LexicalResourceScore": res_data.LexicalResourceScore || "",
            "GrammarScore": res_data.GrammaticalScore || "",
            "ieltsRate": totalscore || "",
            "coherence": res_data.CoherenceScore || "",
            "taskCompletion": MainTaskComplessionResult != "" ? MainTaskComplessionResult : "0",
        },
    })
        .then((res) => {
            console.log(res.data);
        })
        .catch((e) => { console.log(e) })


}

