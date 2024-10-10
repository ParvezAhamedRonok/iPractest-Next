import axios from "axios";


export function Lexical_Grammer_Sug_API_Calling_func(lexicalData, setlexicalResWords, setgrammerMistakes) {

    var sentData = {
        "textData": lexicalData
    }
    console.log(sentData)
    // console.log("Parvez text-finished..")
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
