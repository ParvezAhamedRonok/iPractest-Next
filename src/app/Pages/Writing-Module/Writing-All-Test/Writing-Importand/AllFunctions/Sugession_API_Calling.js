import axios from "axios";

export function Sugession_API_Calling(suggesData, setSpeakingImprovement, setSpeakingSummary) {

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
