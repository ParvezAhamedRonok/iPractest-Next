"use client"
import React, { useEffect, useState } from 'react';
import { useStateContext } from '../../../../contexts/ContextProvider';
import { useRouter } from 'next/navigation';
import CountrySelect from '../../Payments/CountrySelect';
import "./Style.css"


//connect the indexDB for storing data -----------------------
//prefixes of implementation that we want to test
const windowIndexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

//prefixes of window.IDB objects
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange

const createCollectionsInIndexesDB = () => {
    if (!windowIndexedDB) {
        window.alert("Your browser doesn't support a stable version of IndexedDB.")
    }

    // var db;
    var request = windowIndexedDB.open("newDatabase", 1);

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
                keyPath: "testSections",
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











function SpeakingCheck() {
    const history = useRouter();
    //localstorage sttaes....
    const [getCountry, setgetCountry] = useState("");
    const [userEmail, setUserEmail] = useState("")

    const [audioNo, setAudioNo] = useState();
    const [ShowCard1, setShowCard1] = useState(false);
    const [ShowCard2, setShowCard2] = useState(false);
    const [ShowCard3, setShowCard3] = useState(false);
    const [ShowCard4, setShowCard4] = useState(false);
    const [ShowCard5, setShowCard5] = useState(false);
    const [ShowCard6, setShowCard6] = useState(false);
    const [ShowCard7, setShowCard7] = useState(false);
    const [ShowCard8, setShowCard8] = useState(false);
    const [ShowCard9, setShowCard9] = useState(false);
    const [ShowCard10, setShowCard10] = useState(false);
    const [ShowCard11, setShowCard11] = useState(false);
    const [ShowCard12, setShowCard12] = useState(false);
    const [ShowCard13, setShowCard13] = useState(false);
    const [ShowCard14, setShowCard14] = useState(false);
    const [ShowCard15, setShowCard15] = useState(false);
    const [ShowCard16, setShowCard16] = useState(false);
    const [ShowCard17, setShowCard17] = useState(false);
    const [ShowCard18, setShowCard18] = useState(false);
    const [ShowCard19, setShowCard19] = useState(false);
    const [ShowCard20, setShowCard20] = useState(false);
    //get all userAudioData from local-IndexedDb--& store on the state below--
    const [AllusersAudioData, setAllusersAudioData] = useState([]);
    const [AllusersSpeechDataSTR, setAllusersSpeechDataSTR] = useState([]);
    const [showingUserSpeechData, setShowingUserSpeechData] = useState([]);
    const [SelectCountry, setSelectCountry] = useState(false);

    const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

    //end of importing....
    useEffect(() => {
        setUserEmail(localStorage.getItem('userEmail'));
        setgetCountry(localStorage.getItem("setCountry"));

        //check country if needed...
        // setTimeout(() => {
        //     if (!getCountry || getCountry === "null" || getCountry === "undefined") {
        //         setTimeout(() => {
        //             setSelectCountry(true)
        //         }, 4000);
        //     }
        // }, 2000);

    }, [])



    useEffect(() => {
        const currentThemeColor = localStorage.getItem('colorMode');
        const currentThemeMode = localStorage.getItem('themeMode');
        if (currentThemeColor && currentThemeMode) {
            setCurrentColor(currentThemeColor);
            setCurrentMode(currentThemeMode);

        }
        createCollectionsInIndexesDB()
        setTimeout(() => {
            getAllUserAudioData();
            getAllUserSpeechgSTRData();
        }, 1000);
    }, []);




    //!important may be ineed in future..
    // let keys = [
    //     "Test1Sec1", "Test1Sec2", "Test1Sec3",
    //     "Test2Sec1", "Test2Sec2", "Test2Sec3",
    //     "Test3Sec1", "Test3Sec2", "Test3Sec3",
    //     "Test4Sec1", "Test4Sec2", "Test4Sec3",
    //     "Test5Sec1", "Test5Sec2", "Test5Sec3",
    //     "Test6Sec1", "Test6Sec2", "Test6Sec3",
    //     "Test7Sec1", "Test7Sec2", "Test7Sec3",
    //     "Test8Sec1", "Test8Sec2", "Test8Sec3",
    //     "Test9Sec1", "Test9Sec2", "Test9Sec3",
    //     "Test10Sec1", "Test10Sec2", "Test10Sec3", 
    //     "Test11Sec1", "Test11Sec2", "Test11Sec3",
    //     "Test12Sec1", "Test12Sec2", "Test12Sec3"

    // ]
    const getAllUserAudioData = (event) => {
        let dbPromise = windowIndexedDB.open("newDatabase", 2);
        console.log("Getting-Console added...")
        dbPromise.onsuccess = () => {
            const db = dbPromise.result;
            const tx = db.transaction("userData", "readonly");
            const userData = tx.objectStore("userData");

            const users = userData.getAll();
            console.log(users)

            // const users = userData.get('Users', ['age'], {name:"Ander"}, console.log);
            // const users = userData.get(localStorage.getItem("userEmail") + event);
            users.onsuccess = (query) => {
                let userAudios = query.srcElement.result
                console.log(userAudios)
                // setAllusersAudioData(userAudios);
                setAllusersAudioData(
                    // userAudios.filter((item) => item.ID === userEmail + keys.filter((e) => e === item.testSections))
                    userAudios.filter((item) => item.userEmail === userEmail));

            };
            users.onerror = (error) => {
                console.log("Error occured while getting initial data...")

            }

            tx.oncomplete = () => {
                db.close();
            }

        }
    }

    // console.log(AllusersAudioData);



    let Test1Sec1 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test1Sec1");
    let Test1Sec2 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test1Sec2");
    let Test1Sec3 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test1Sec3");

    let Test2Sec1 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test2Sec1");
    let Test2Sec2 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test2Sec2");
    let Test2Sec3 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test2Sec3");

    let Test3Sec1 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test3Sec1");
    let Test3Sec2 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test3Sec2");
    let Test3Sec3 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test3Sec3");

    let Test4Sec1 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test4Sec1");
    let Test4Sec2 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test4Sec2");
    let Test4Sec3 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test4Sec3");

    let Test5Sec1 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test5Sec1");
    let Test5Sec2 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test5Sec2");
    let Test5Sec3 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test5Sec3");

    let Test6Sec1 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test6Sec1");
    let Test6Sec2 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test6Sec2");
    let Test6Sec3 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test6Sec3");

    let Test7Sec1 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test7Sec1");
    let Test7Sec2 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test7Sec2");
    let Test7Sec3 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test7Sec3");

    let Test8Sec1 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test8Sec1");
    let Test8Sec2 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test8Sec2");
    let Test8Sec3 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test8Sec3");

    let Test9Sec1 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test9Sec1");
    let Test9Sec2 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test9Sec2");
    let Test9Sec3 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test9Sec3");

    let Test10Sec1 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test10Sec1");
    let Test10Sec2 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test10Sec2");
    let Test10Sec3 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test10Sec3");

    let Test11Sec1 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test11Sec1");
    let Test11Sec2 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test11Sec2");
    let Test11Sec3 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test11Sec3");

    let Test12Sec1 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test12Sec1");
    let Test12Sec2 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test12Sec2");
    let Test12Sec3 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test12Sec3");

    //test 13 - 20-----

    let Test13Sec1 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test13Sec1");
    let Test13Sec2 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test13Sec2");
    let Test13Sec3 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test13Sec3");

    let Test14Sec1 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test14Sec1");
    let Test14Sec2 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test14Sec2");
    let Test14Sec3 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test14Sec3");

    let Test15Sec1 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test15Sec1");
    let Test15Sec2 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test15Sec2");
    let Test15Sec3 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test15Sec3");

    let Test16Sec1 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test16Sec1");
    let Test16Sec2 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test16Sec2");
    let Test16Sec3 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test16Sec3");

    let Test17Sec1 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test17Sec1");
    let Test17Sec2 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test17Sec2");
    let Test17Sec3 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test17Sec3");

    let Test18Sec1 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test18Sec1");
    let Test18Sec2 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test18Sec2");
    let Test18Sec3 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test18Sec3");

    let Test19Sec1 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test19Sec1");
    let Test19Sec2 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test19Sec2");
    let Test19Sec3 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test19Sec3");

    let Test20Sec1 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test20Sec1");
    let Test20Sec2 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test20Sec2");
    let Test20Sec3 = AllusersAudioData.filter((item) => item.ID === userEmail + "Test20Sec3");











    // console.log(AllusersAudioData)


    //check all values & if that value exist into the alluserAudioData matchable state will be true
    // & The matchable card will be show to the user...
    setTimeout(() => {
        if (AllusersAudioData[0]) {
            if (Test1Sec1[0] || Test1Sec2[0] || Test1Sec3[0]) {
                setShowCard1(true);
                // console.log("Test1- Something alerts")
            }
            if (Test2Sec1[0] || Test2Sec2[0] || Test2Sec3[0]
            ) {
                setShowCard2(true);
            }
            if (Test3Sec1[0] || Test3Sec2[0] || Test3Sec3[0]) {
                setShowCard3(true);
            }
            if (Test4Sec1[0] || Test4Sec2[0] || Test4Sec3[0]) {
                setShowCard4(true);
            }
            if (Test5Sec1[0] || Test5Sec2[0] || Test5Sec3[0]) {
                setShowCard5(true);
            }
            if (Test6Sec1[0] || Test6Sec2[0] || Test6Sec3[0]) {
                setShowCard6(true);
            }
            if (Test7Sec1[0] || Test7Sec2[0] || Test7Sec3[0]) {
                setShowCard7(true);
            }
            if (Test8Sec1[0] || Test8Sec2[0] || Test8Sec3[0]) {
                setShowCard8(true);
            }
            if (Test9Sec1[0] || Test9Sec2[0] || Test9Sec3[0]) {
                setShowCard9(true);
            }
            if (Test10Sec1[0] || Test10Sec2[0] || Test10Sec3[0]) {
                setShowCard10(true);
            }
            if (Test11Sec1[0] || Test11Sec2[0] || Test11Sec3[0]) {
                setShowCard11(true);
            }
            if (Test12Sec1[0] || Test12Sec2[0] || Test12Sec3[0]) {
                setShowCard12(true);
            }

            //test 13 - 20

            if (Test13Sec1[0] || Test13Sec2[0] || Test13Sec3[0]) {
                setShowCard13(true);
            }
            if (Test14Sec1[0] || Test14Sec2[0] || Test14Sec3[0]) {
                setShowCard14(true);
            }
            if (Test15Sec1[0] || Test15Sec2[0] || Test15Sec3[0]) {
                setShowCard15(true);
            }
            if (Test16Sec1[0] || Test16Sec2[0] || Test16Sec3[0]) {
                setShowCard16(true);
            }
            if (Test17Sec1[0] || Test17Sec2[0] || Test17Sec3[0]) {
                setShowCard17(true);
            }
            if (Test18Sec1[0] || Test18Sec2[0] || Test18Sec3[0]) {
                setShowCard18(true);
            }
            if (Test19Sec1[0] || Test19Sec2[0] || Test19Sec3[0]) {
                setShowCard19(true);
            }
            if (Test20Sec1[0] || Test20Sec2[0] || Test20Sec3[0]) {
                setShowCard20(true);
            }
        }

    }, 1500);


    // console.log(ShowCard1)


















    //play audio function -----
    function updateAudioForPlaySpeech(changePath) {
        console.log(changePath);
        // var myBaseString = changePath;

        // // Split the base64 string in data and contentType
        // var block = myBaseString.split(";");
        // console.log(block)
        // // Get the content type
        // var dataType = block[0].split(":")[1];// In this case "audio/mpeg"
        // // get the real base64 content of the file
        // var realData = block[2].split(",");// In this case "SUQzAwAAAAAD...."
        // var realMain = realData[1];
        // // The path where the file will be created
        // var folderpath = "file:///storage/emulated/0/";
        // // The name of your file
        // var filename = "MyAwesomeAudio.mp3";

        // console.log("data:audio/mp3;base64,"+realMain);
        // console.log(folderpath,filename,realMain,dataType);
        // player.setAttribute('src', `data:audio/mp3;base64,<${changePath}>`); extra--------

        const player = document.getElementsByTagName("audio")[0];
        player.pause();
        player.setAttribute('src', changePath);
        player.load();
        player.play();
    }




    //make the audio tag sticky when user scroll the page-----
    window.addEventListener("scroll", function () {
        try {
            let audioEle = this.document.getElementById("audioFile");
            if (window.scrollY > 40) {
                audioEle.classList.add("Sticky")
                audioEle.classList.remove("WithoutSticky")
            }
            if (window.scrollY < 40) {
                audioEle.classList.remove("Sticky");
                audioEle.classList.add("WithoutSticky")
            }
        } catch (error) {
            // console.log("Error has been occoured..")
        }
    })


    // for showing the user  data by the help of the code below 
    // call this function to  store all data into a state;
    // then make break all the data from that state match all  data that which will be the perfect match ;
    //  after that break call a function which will be called into the button cliked ;
    // store the data into a state 
    // for showing to the user make a make function & show all array data to the user as like  the  UI 
    const getAllUserSpeechgSTRData = (event) => {
        let dbPromise = windowIndexedDB.open("newDatabase", 2);
        console.log("Getting-Console added...")
        dbPromise.onsuccess = () => {
            const db = dbPromise.result;
            const tx = db.transaction("userSpeech", "readonly");
            const userData = tx.objectStore("userSpeech");

            const users = userData.getAll();
            console.log(users)

            // const users = userData.get('Users', ['age'], {name:"Ander"}, console.log);
            // const users = userData.get(localStorage.getItem("userEmail") + event);
            users.onsuccess = (query) => {
                let userSpeechSTR = query.srcElement.result
                // console.log(userSpeechSTR);
                setAllusersSpeechDataSTR(
                    // userAudios.filter((item) => item.ID === userEmail + keys.filter((e) => e === item.testSections))
                    userSpeechSTR.filter((item) => item.userEmail === userEmail));

            };
            users.onerror = (error) => {
                console.log(error);
                console.log("Error occured while getting initial data...")

            }

            tx.oncomplete = () => {
                db.close();
            }

        }
    }



    // set alll user speech String dat by the  match of user selected test  number's (24/02/24);

    let SpeechSTRTest1Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test1Sec1");
    let SpeechSTRTest1Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test1Sec2");
    let SpeechSTRTest1Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test1Sec3");

    let SpeechSTRTest2Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test2Sec1");
    let SpeechSTRTest2Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test2Sec2");
    let SpeechSTRTest2Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test2Sec3");

    let SpeechSTRTest3Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test3Sec1");
    let SpeechSTRTest3Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test3Sec2");
    let SpeechSTRTest3Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test3Sec3");

    let SpeechSTRTest4Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test4Sec1");
    let SpeechSTRTest4Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test4Sec2");
    let SpeechSTRTest4Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test4Sec3");

    let SpeechSTRTest5Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test5Sec1");
    let SpeechSTRTest5Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test5Sec2");
    let SpeechSTRTest5Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test5Sec3");

    let SpeechSTRTest6Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test6Sec1");
    let SpeechSTRTest6Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test6Sec2");
    let SpeechSTRTest6Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test6Sec3");

    let SpeechSTRTest7Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test7Sec1");
    let SpeechSTRTest7Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test7Sec2");
    let SpeechSTRTest7Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test7Sec3");

    let SpeechSTRTest8Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test8Sec1");
    let SpeechSTRTest8Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test8Sec2");
    let SpeechSTRTest8Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test8Sec3");

    let SpeechSTRTest9Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test9Sec1");
    let SpeechSTRTest9Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test9Sec2");
    let SpeechSTRTest9Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test9Sec3");

    let SpeechSTRTest10Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test10Sec1");
    let SpeechSTRTest10Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test10Sec2");
    let SpeechSTRTest10Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test10Sec3");

    let SpeechSTRTest11Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test11Sec1");
    let SpeechSTRTest11Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test11Sec2");
    let SpeechSTRTest11Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test11Sec3");

    let SpeechSTRTest12Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test12Sec1");
    let SpeechSTRTest12Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test12Sec2");
    let SpeechSTRTest12Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test12Sec3");


    // test----------13 - 20 -------------------
    let SpeechSTRTest13Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test13Sec1");
    let SpeechSTRTest13Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test13Sec2");
    let SpeechSTRTest13Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test13Sec3");

    let SpeechSTRTest14Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test14Sec1");
    let SpeechSTRTest14Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test14Sec2");
    let SpeechSTRTest14Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test14Sec3");

    let SpeechSTRTest15Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test15Sec1");
    let SpeechSTRTest15Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test15Sec2");
    let SpeechSTRTest15Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test15Sec3");

    let SpeechSTRTest16Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test16Sec1");
    let SpeechSTRTest16Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test16Sec2");
    let SpeechSTRTest16Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test16Sec3");

    let SpeechSTRTest17Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test17Sec1");
    let SpeechSTRTest17Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test17Sec2");
    let SpeechSTRTest17Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test17Sec3");

    let SpeechSTRTest18Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test18Sec1");
    let SpeechSTRTest18Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test18Sec2");
    let SpeechSTRTest18Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test18Sec3");

    let SpeechSTRTest19Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test19Sec1");
    let SpeechSTRTest19Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test19Sec2");
    let SpeechSTRTest19Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test19Sec3");

    let SpeechSTRTest20Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test20Sec1");
    let SpeechSTRTest20Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test20Sec2");
    let SpeechSTRTest20Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test20Sec3");


    //test ------21-30--------
    // let SpeechSTRTest21Sec1 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test21Sec1");
    // let SpeechSTRTest21Sec2 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test21Sec2");
    // let SpeechSTRTest21Sec3 = AllusersSpeechDataSTR.filter((item) => item.ID === userEmail + "Test21Sec3");


    console.log(AllusersSpeechDataSTR);











    // function for showing the user data as a String
    const functionForShowingUserData = (userData) => {
        console.log(userData);
        let sentences = userData.split('~');
        setShowingUserSpeechData(sentences)
        console.log(sentences);



        // for change the color of Question & Answer word to make change it's color
        // with the help of those code below       
        //    setTimeout(() => {
        //     var a = {
        //         Question: ["Question1", "Question2"],
        //       };
        //     var b = {
        //         Answer: ["Answer1", "Answer2"]
        //     }


        //       var p = document.getElementById("properWord"),
        //           keys = Object.keys(a);

        //           var p2 = document.getElementById("properWord"),
        //           keys2 = Object.keys(b);

        //       for (var j = 0; j < keys.length; j++) {
        //         p.innerHTML = p.innerHTML.replace( new RegExp("\\b"+keys[j]+"\\b","g"),"<span style='color:red;font-weight:900; font-size:21px;margin-right:4px;'>" + keys[j] + "</span>")
        //       }
        //       for (var j2 = 0; j2 < keys2.length; j2++) {
        //         p2.innerHTML = p2.innerHTML.replace( new RegExp("\\b"+keys2[j2]+"\\b","g"),"<span style='color:green;font-weight:900; font-size:21px; margin-right:4px;'>" + keys2[j2] + "</span>")
        //       }


        //    }, 2000);

    }








    return (
        <>

            {/* Main-Work  invisible*/}
            {
                AllusersAudioData[0] ? (
                    <div className=''>
                        <h4 className='w-full text-center mt-3 mb-7 text-[20px] sm:text-[30px] text-blue-400 underline'>Your Speaking Test Records</h4>
                        <div id='audioFile' className='WithoutSticky'>
                            <div id='audioMain'>
                                <audio controls className='m-auto'></audio>
                                {
                                    audioNo && <p>{audioNo}</p>
                                }


                            </div>
                        </div>
                        <div className='flex justify-center align-middle w-full'>
                            {
                                showingUserSpeechData[0] && <div className='w-[95vw] sm:w-[500px] md:w-[800px] rounded border-2 border-gray-400 p-2 overflow-auto box-content text-center m-auto h-[400px] bg-white' id='properWord'>
                                    {
                                        showingUserSpeechData.map((items, index) => {
                                            return <div key={index} className={`mb-1 text-black text-justify  font-bold  overflow-auto ${items.match("Answer:") && "border-b-1 border-b-gray-400 first-letter:underline first-letter:text-2xl  first-letter:text-blue-900 first-letter:font-bold"} ${items.match("Question:") && " first-letter:underline first-letter:text-2xl  first-letter:text-red-900 first-letter:font-bold"}`} >
                                                {items}

                                            </div>
                                        })
                                    }
                                </div>
                            }
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-3 gap-x-[20px] gap-y-[80px] p-[20px]">

                            {
                                ShowCard1 && (
                                    <div className='bg-sky-100 p-4 h-auto rounded m-auto'>
                                        <div className="bg-white w-[200px] rounded p-3 grid grid-cols-1 justify-center align-middle gap-3">
                                            <h4 className='mb-3 m-auto text-2xl'>Test-1</h4>
                                            {
                                                Test1Sec1[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech(Test1Sec1[0].userSpeech)
                                                            setAudioNo("Test-1:(Section-1)");
                                                            functionForShowingUserData(SpeechSTRTest1Sec1[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-1</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>
                                                </button>)
                                            }
                                            {
                                                Test1Sec2[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech(Test1Sec2[0].userSpeech);
                                                            setAudioNo("Test-1:(Section-2)");
                                                            functionForShowingUserData(SpeechSTRTest1Sec2[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-2</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>

                                                </button>)
                                            }
                                            {
                                                Test1Sec3[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech(Test1Sec3[0].userSpeech)
                                                            setAudioNo("Test-1:(Section-3)")
                                                            functionForShowingUserData(SpeechSTRTest1Sec3[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-3</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>

                                                </button>)
                                            }
                                        </div>
                                    </div>)
                            }

                            {
                                ShowCard2 && (
                                    <div className='bg-sky-100 p-4 h-auto rounded m-auto'>
                                        <div className="bg-white w-[200px] rounded p-3 grid grid-cols-1 justify-center align-middle gap-3">
                                            <h4 className='mb-3 m-auto text-2xl'>Test-2</h4>
                                            {
                                                Test2Sec1[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech(Test2Sec1[0].userSpeech)
                                                            setAudioNo("Test-2:(Section-1)");
                                                            functionForShowingUserData(SpeechSTRTest2Sec1[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-1</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>
                                                </button>)
                                            }
                                            {
                                                Test2Sec2[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded  '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech(Test2Sec2[0].userSpeech);
                                                            setAudioNo("Test-2:(Section-2)");
                                                            functionForShowingUserData(SpeechSTRTest2Sec2[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-2</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>

                                                </button>)
                                            }
                                            {
                                                Test2Sec3[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded  '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech(Test2Sec3[0].userSpeech)
                                                            setAudioNo("Test-2:(Section-3)");
                                                            functionForShowingUserData(SpeechSTRTest2Sec3[0].data);

                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-3</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>

                                                </button>)
                                            }
                                        </div>
                                    </div>)
                            }
                            {
                                ShowCard3 && (
                                    <div className='bg-sky-100 p-4 h-auto rounded m-auto'>
                                        <div className="bg-white w-[200px] rounded p-3 grid grid-cols-1 justify-center align-middle gap-3">
                                            <h4 className='mb-3 m-auto text-2xl'>Test-3</h4>
                                            {
                                                Test3Sec1[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test3Sec1[0].userSpeech)
                                                            setAudioNo("Test-3:(Section-1)");
                                                            functionForShowingUserData(SpeechSTRTest3Sec1[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-1</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>
                                                </button>)
                                            }
                                            {
                                                Test3Sec2[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test3Sec2[0].userSpeech);
                                                            setAudioNo("Test-3:(Section-2)");
                                                            functionForShowingUserData(SpeechSTRTest3Sec2[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-2</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>

                                                </button>)
                                            }
                                            {
                                                Test3Sec3[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test3Sec3[0].userSpeech);
                                                            setAudioNo("Test-3:(Section-3)");
                                                            functionForShowingUserData(SpeechSTRTest3Sec3[0].data);

                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-3</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>

                                                </button>)
                                            }
                                        </div>
                                    </div>)
                            }
                            {
                                ShowCard4 && (
                                    <div className='bg-sky-100 p-4 h-auto rounded m-auto'>
                                        <div className="bg-white w-[200px] rounded p-3 grid grid-cols-1 justify-center align-middle gap-3">
                                            <h4 className='mb-3 m-auto text-2xl'>Test-4</h4>
                                            {
                                                Test4Sec1[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test4Sec1[0].userSpeech);
                                                            setAudioNo("Test-4:(Section-1)");
                                                            functionForShowingUserData(SpeechSTRTest4Sec1[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-1</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>
                                                </button>)
                                            }
                                            {
                                                Test4Sec2[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test4Sec2[0].userSpeech);
                                                            setAudioNo("Test-4:(Section-2)");
                                                            functionForShowingUserData(SpeechSTRTest4Sec2[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-2</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>

                                                </button>)
                                            }
                                            {
                                                Test4Sec3[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test4Sec3[0].userSpeech)
                                                            setAudioNo("Test-4:(Section-3)");
                                                            functionForShowingUserData(SpeechSTRTest4Sec3[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-3</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>

                                                </button>)
                                            }
                                        </div>
                                    </div>)
                            }

                            {
                                ShowCard5 && (
                                    <div className='bg-sky-100 p-4 h-auto rounded m-auto'>
                                        <div className="bg-white w-[200px] rounded p-3 grid grid-cols-1 justify-center align-middle gap-3">
                                            <h4 className='mb-3 m-auto text-2xl'>Test-5</h4>
                                            {
                                                Test5Sec1[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test5Sec1[0].userSpeech);
                                                            setAudioNo("Test-5:(Section-1)");
                                                            functionForShowingUserData(SpeechSTRTest5Sec1[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-1</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>
                                                </button>)
                                            }
                                            {
                                                Test5Sec2[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test5Sec2[0].userSpeech);
                                                            setAudioNo("Test-5:(Section-2)");
                                                            functionForShowingUserData(SpeechSTRTest5Sec2[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-2</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>

                                                </button>)
                                            }
                                            {
                                                Test5Sec3[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test5Sec3[0].userSpeech);
                                                            setAudioNo("Test-5:(Section-3)");
                                                            functionForShowingUserData(SpeechSTRTest5Sec3[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-3</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>

                                                </button>)
                                            }
                                        </div>
                                    </div>)
                            }
                            {
                                ShowCard6 && (
                                    <div className='bg-sky-100 p-4 h-auto rounded m-auto'>
                                        <div className="bg-white w-[200px] rounded p-3 grid grid-cols-1 justify-center align-middle gap-3">
                                            <h4 className='mb-3 m-auto text-2xl'>Test-6</h4>
                                            {
                                                Test6Sec1[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test6Sec1[0].userSpeech);
                                                            setAudioNo("Test-6:(Section-1)");
                                                            functionForShowingUserData(SpeechSTRTest6Sec1[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-1</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>
                                                </button>)
                                            }
                                            {
                                                Test6Sec2[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded  '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test6Sec2[0].userSpeech);
                                                            setAudioNo("Test-6:(Section-2)");
                                                            functionForShowingUserData(SpeechSTRTest6Sec2[0].data);

                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-2</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>

                                                </button>)
                                            }
                                            {
                                                Test6Sec3[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test6Sec3[0].userSpeech);
                                                            setAudioNo("Test-6:(Section-3)");
                                                            functionForShowingUserData(SpeechSTRTest6Sec3[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-3</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>

                                                </button>)
                                            }
                                        </div>
                                    </div>)
                            }
                            {
                                ShowCard7 && (
                                    <div className='bg-sky-100 p-4 h-auto rounded m-auto'>
                                        <div className="bg-white w-[200px] rounded p-3 grid grid-cols-1 justify-center align-middle gap-3">
                                            <h4 className='mb-3 m-auto text-2xl'>Test-7</h4>
                                            {
                                                Test7Sec1[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test7Sec1[0].userSpeech);
                                                            setAudioNo("Test-7:(Section-1)");
                                                            functionForShowingUserData(SpeechSTRTest7Sec1[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-1</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>
                                                </button>)
                                            }
                                            {
                                                Test7Sec2[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test7Sec2[0].userSpeech);
                                                            setAudioNo("Test-7:(Section-2)");
                                                            functionForShowingUserData(SpeechSTRTest7Sec2[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-2</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>

                                                </button>)
                                            }
                                            {
                                                Test7Sec3[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test7Sec3[0].userSpeech);
                                                            setAudioNo("Test-7:(Section-3)");
                                                            functionForShowingUserData(SpeechSTRTest7Sec3[0].data);

                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-3</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>

                                                </button>)
                                            }
                                        </div>
                                    </div>)
                            }
                            {
                                ShowCard8 && (
                                    <div className='bg-sky-100 p-4 h-auto rounded m-auto'>
                                        <div className="bg-white w-[200px] rounded p-3 grid grid-cols-1 justify-center align-middle gap-3">
                                            <h4 className='mb-3 m-auto text-2xl'>Test-8</h4>
                                            {
                                                Test8Sec1[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test8Sec1[0].userSpeech);
                                                            setAudioNo("Test-8:(Section-1)");
                                                            functionForShowingUserData(SpeechSTRTest8Sec1[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-1</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>
                                                </button>)
                                            }
                                            {
                                                Test8Sec2[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded  '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test8Sec2[0].userSpeech);
                                                            setAudioNo("Test-8:(Section-2)");
                                                            functionForShowingUserData(SpeechSTRTest8Sec2[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-2</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>

                                                </button>)
                                            }
                                            {
                                                Test8Sec3[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded  '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test8Sec3[0].userSpeech);
                                                            setAudioNo("Test-8:(Section-3)");
                                                            functionForShowingUserData(SpeechSTRTest8Sec3[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-3</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>

                                                </button>)
                                            }
                                        </div>
                                    </div>)
                            }
                            {
                                ShowCard9 && (
                                    <div className='bg-sky-100 p-4 h-auto rounded m-auto'>
                                        <div className="bg-white w-[200px] rounded p-3 grid grid-cols-1 justify-center align-middle gap-3">
                                            <h4 className='mb-3 m-auto text-2xl'>Test-9</h4>
                                            {
                                                Test9Sec1[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test9Sec1[0].userSpeech);
                                                            setAudioNo("Test-9:(Section-1)");
                                                            functionForShowingUserData(SpeechSTRTest9Sec1[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-1</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>
                                                </button>)
                                            }
                                            {
                                                Test9Sec2[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded  '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test9Sec2[0].userSpeech);
                                                            setAudioNo("Test-9:(Section-2)");
                                                            functionForShowingUserData(SpeechSTRTest9Sec2[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-2</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>

                                                </button>)
                                            }
                                            {
                                                Test9Sec3[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test9Sec3[0].userSpeech);
                                                            setAudioNo("Test-9:(Section-3)");
                                                            functionForShowingUserData(SpeechSTRTest9Sec3[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-3</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>

                                                </button>)
                                            }
                                        </div>
                                    </div>)
                            }
                            {
                                ShowCard10 && (
                                    <div className='bg-sky-100 p-4 h-auto rounded m-auto'>
                                        <div className="bg-white w-[200px] rounded p-3 grid grid-cols-1 justify-center align-middle gap-3">
                                            <h4 className='mb-3 m-auto text-2xl'>Test-10</h4>
                                            {
                                                Test10Sec1[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test10Sec1[0].userSpeech);
                                                            setAudioNo("Test-10:(Section-1)");
                                                            functionForShowingUserData(SpeechSTRTest10Sec1[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-1</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>
                                                </button>)
                                            }
                                            {
                                                Test10Sec2[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test10Sec2[0].userSpeech);
                                                            setAudioNo("Test-10:(Section-2)");
                                                            functionForShowingUserData(SpeechSTRTest10Sec2[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-2</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>

                                                </button>)
                                            }
                                            {
                                                Test10Sec3[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test10Sec3[0].userSpeech);
                                                            setAudioNo("Test-10:(Section-3)");
                                                            functionForShowingUserData(SpeechSTRTest10Sec3[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-3</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>

                                                </button>)
                                            }
                                        </div>
                                    </div>)
                            }
                            {
                                ShowCard11 && (
                                    <div className='bg-sky-100 p-4 h-auto rounded m-auto'>
                                        <div className="bg-white w-[200px] rounded p-3 grid grid-cols-1 justify-center align-middle gap-3">
                                            <h4 className='mb-3 m-auto text-2xl'>Test-11</h4>
                                            {
                                                Test11Sec1[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test11Sec1[0].userSpeech);
                                                            setAudioNo("Test-11:(Section-1)");
                                                            functionForShowingUserData(SpeechSTRTest11Sec1[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-1</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>
                                                </button>)
                                            }
                                            {
                                                Test11Sec2[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded  '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test11Sec2[0].userSpeech);
                                                            setAudioNo("Test-11:(Section-2)");
                                                            functionForShowingUserData(SpeechSTRTest11Sec2[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-2</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>

                                                </button>)
                                            }
                                            {
                                                Test11Sec3[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test11Sec3[0].userSpeech);
                                                            setAudioNo("Test-11:(Section-3)");
                                                            functionForShowingUserData(SpeechSTRTest11Sec3[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-3</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>

                                                </button>)
                                            }
                                        </div>
                                    </div>)
                            }
                            {
                                ShowCard12 && (
                                    <div className='bg-sky-100 p-4 h-auto rounded m-auto'>
                                        <div className="bg-white w-[200px] rounded p-3 grid grid-cols-1 justify-center align-middle gap-3">
                                            <h4 className='mb-3 m-auto text-2xl'>Test-12</h4>
                                            {
                                                Test12Sec1[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test12Sec1[0].userSpeech);
                                                            setAudioNo("Test-12:(Section-1)");
                                                            functionForShowingUserData(SpeechSTRTest12Sec1[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-1</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>
                                                </button>)
                                            }
                                            {
                                                Test12Sec2[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test12Sec2[0].userSpeech);
                                                            setAudioNo("Test-12:(Section-2)");
                                                            functionForShowingUserData(SpeechSTRTest12Sec2[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-2</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>

                                                </button>)
                                            }
                                            {
                                                Test12Sec3[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test12Sec3[0].userSpeech);
                                                            setAudioNo("Test-12:(Section-3)");
                                                            functionForShowingUserData(SpeechSTRTest12Sec3[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-3</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>

                                                </button>)
                                            }
                                        </div>
                                    </div>)
                            }
                            {
                                ShowCard13 && (
                                    <div className='bg-sky-100 p-4 h-auto rounded m-auto'>
                                        <div className="bg-white w-[200px] rounded p-3 grid grid-cols-1 justify-center align-middle gap-3">
                                            <h4 className='mb-3 m-auto text-2xl'>Test-13</h4>
                                            {
                                                Test13Sec1[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test13Sec1[0].userSpeech);
                                                            setAudioNo("Test-13:(Section-1)");
                                                            functionForShowingUserData(SpeechSTRTest13Sec1[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-1</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>
                                                </button>)
                                            }
                                            {
                                                Test13Sec2[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test13Sec2[0].userSpeech);
                                                            setAudioNo("Test-13:(Section-2)");
                                                            functionForShowingUserData(SpeechSTRTest13Sec2[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-2</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>

                                                </button>)
                                            }
                                            {
                                                Test13Sec3[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test13Sec3[0].userSpeech);
                                                            setAudioNo("Test-13:(Section-3)");
                                                            functionForShowingUserData(SpeechSTRTest13Sec3[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-3</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>

                                                </button>)
                                            }
                                        </div>
                                    </div>)
                            }

                            {
                                ShowCard14 && (
                                    <div className='bg-sky-100 p-4 h-auto rounded m-auto'>
                                        <div className="bg-white w-[200px] rounded p-3 grid grid-cols-1 justify-center align-middle gap-3">
                                            <h4 className='mb-3 m-auto text-2xl'>Test-14</h4>
                                            {
                                                Test14Sec1[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test14Sec1[0].userSpeech);
                                                            setAudioNo("Test-14:(Section-1)");
                                                            functionForShowingUserData(SpeechSTRTest14Sec1[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-1</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>
                                                </button>)
                                            }
                                            {
                                                Test14Sec2[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test14Sec2[0].userSpeech);
                                                            setAudioNo("Test-14:(Section-2)");
                                                            functionForShowingUserData(SpeechSTRTest14Sec2[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-2</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>

                                                </button>)
                                            }
                                            {
                                                Test14Sec3[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test14Sec3[0].userSpeech);
                                                            setAudioNo("Test-14:(Section-3)");
                                                            functionForShowingUserData(SpeechSTRTest14Sec3[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-3</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>

                                                </button>)
                                            }
                                        </div>
                                    </div>)
                            }

                            {
                                ShowCard15 && (
                                    <div className='bg-sky-100 p-4 h-auto rounded m-auto'>
                                        <div className="bg-white w-[200px] rounded p-3 grid grid-cols-1 justify-center align-middle gap-3">
                                            <h4 className='mb-3 m-auto text-2xl'>Test-15</h4>
                                            {
                                                Test15Sec1[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test15Sec1[0].userSpeech);
                                                            setAudioNo("Test-15:(Section-1)");
                                                            functionForShowingUserData(SpeechSTRTest15Sec1[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-1</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>
                                                </button>)
                                            }
                                            {
                                                Test15Sec2[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test15Sec2[0].userSpeech);
                                                            setAudioNo("Test-15:(Section-2)");
                                                            functionForShowingUserData(SpeechSTRTest15Sec2[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-2</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>

                                                </button>)
                                            }
                                            {
                                                Test15Sec3[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test15Sec3[0].userSpeech);
                                                            setAudioNo("Test-15:(Section-3)");
                                                            functionForShowingUserData(SpeechSTRTest15Sec3[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-3</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>

                                                </button>)
                                            }
                                        </div>
                                    </div>)
                            }

                            {
                                ShowCard16 && (
                                    <div className='bg-sky-100 p-4 h-auto rounded m-auto'>
                                        <div className="bg-white w-[200px] rounded p-3 grid grid-cols-1 justify-center align-middle gap-3">
                                            <h4 className='mb-3 m-auto text-2xl'>Test-16</h4>
                                            {
                                                Test16Sec1[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test16Sec1[0].userSpeech);
                                                            setAudioNo("Test-16:(Section-1)");
                                                            functionForShowingUserData(SpeechSTRTest16Sec1[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-1</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>
                                                </button>)
                                            }
                                            {
                                                Test16Sec2[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test16Sec2[0].userSpeech);
                                                            setAudioNo("Test-16:(Section-2)");
                                                            functionForShowingUserData(SpeechSTRTest16Sec2[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-2</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>

                                                </button>)
                                            }
                                            {
                                                Test16Sec3[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test16Sec3[0].userSpeech);
                                                            setAudioNo("Test-16:(Section-3)");
                                                            functionForShowingUserData(SpeechSTRTest16Sec3[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-3</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>

                                                </button>)
                                            }
                                        </div>
                                    </div>)
                            }

                            {
                                ShowCard17 && (
                                    <div className='bg-sky-100 p-4 h-auto rounded m-auto'>
                                        <div className="bg-white w-[200px] rounded p-3 grid grid-cols-1 justify-center align-middle gap-3">
                                            <h4 className='mb-3 m-auto text-2xl'>Test-17</h4>
                                            {
                                                Test17Sec1[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test17Sec1[0].userSpeech);
                                                            setAudioNo("Test-17:(Section-1)");
                                                            functionForShowingUserData(SpeechSTRTest17Sec1[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-1</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>
                                                </button>)
                                            }
                                            {
                                                Test17Sec2[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test17Sec2[0].userSpeech);
                                                            setAudioNo("Test-17:(Section-2)");
                                                            functionForShowingUserData(SpeechSTRTest17Sec2[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-2</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>

                                                </button>)
                                            }
                                            {
                                                Test17Sec3[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test17Sec3[0].userSpeech);
                                                            setAudioNo("Test-17:(Section-3)");
                                                            functionForShowingUserData(SpeechSTRTest17Sec3[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-3</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>

                                                </button>)
                                            }
                                        </div>
                                    </div>)
                            }


                            {
                                ShowCard18 && (
                                    <div className='bg-sky-100 p-4 h-auto rounded m-auto'>
                                        <div className="bg-white w-[200px] rounded p-3 grid grid-cols-1 justify-center align-middle gap-3">
                                            <h4 className='mb-3 m-auto text-2xl'>Test-18</h4>
                                            {
                                                Test18Sec1[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test18Sec1[0].userSpeech);
                                                            setAudioNo("Test-18:(Section-1)");
                                                            functionForShowingUserData(SpeechSTRTest18Sec1[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-1</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>
                                                </button>)
                                            }
                                            {
                                                Test18Sec2[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test18Sec2[0].userSpeech);
                                                            setAudioNo("Test-18:(Section-2)");
                                                            functionForShowingUserData(SpeechSTRTest18Sec2[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-2</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>

                                                </button>)
                                            }
                                            {
                                                Test18Sec3[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test18Sec3[0].userSpeech);
                                                            setAudioNo("Test-18:(Section-3)");
                                                            functionForShowingUserData(SpeechSTRTest18Sec3[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-3</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>

                                                </button>)
                                            }
                                        </div>
                                    </div>)
                            }

                            {
                                ShowCard19 && (
                                    <div className='bg-sky-100 p-4 h-auto rounded m-auto'>
                                        <div className="bg-white w-[200px] rounded p-3 grid grid-cols-1 justify-center align-middle gap-3">
                                            <h4 className='mb-3 m-auto text-2xl'>Test-19</h4>
                                            {
                                                Test19Sec1[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test19Sec1[0].userSpeech);
                                                            setAudioNo("Test-19:(Section-1)");
                                                            functionForShowingUserData(SpeechSTRTest19Sec1[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-1</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>
                                                </button>)
                                            }
                                            {
                                                Test19Sec2[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test19Sec2[0].userSpeech);
                                                            setAudioNo("Test-19:(Section-2)");
                                                            functionForShowingUserData(SpeechSTRTest19Sec2[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-2</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>

                                                </button>)
                                            }
                                            {
                                                Test19Sec3[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test19Sec3[0].userSpeech);
                                                            setAudioNo("Test-19:(Section-3)");
                                                            functionForShowingUserData(SpeechSTRTest19Sec3[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-3</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>

                                                </button>)
                                            }
                                        </div>
                                    </div>)
                            }

                            {
                                ShowCard20 && (
                                    <div className='bg-sky-100 p-4 h-auto rounded m-auto'>
                                        <div className="bg-white w-[200px] rounded p-3 grid grid-cols-1 justify-center align-middle gap-3">
                                            <h4 className='mb-3 m-auto text-2xl'>Test-20</h4>
                                            {
                                                Test20Sec1[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test20Sec1[0].userSpeech);
                                                            setAudioNo("Test-20:(Section-1)");
                                                            functionForShowingUserData(SpeechSTRTest20Sec1[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-1</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>
                                                </button>)
                                            }
                                            {
                                                Test20Sec2[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test20Sec2[0].userSpeech);
                                                            setAudioNo("Test-20:(Section-2)");
                                                            functionForShowingUserData(SpeechSTRTest20Sec2[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-2</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>

                                                </button>)
                                            }
                                            {
                                                Test20Sec3[0] != null && (<button className='p-2 m-auto mb-2 bg-blue-300 w-[90%] rounded '>
                                                    <div className='flex justify-center gap-2 cursor-pointer'
                                                        onClick={() => {
                                                            updateAudioForPlaySpeech("data:audio/webm;codecs=opus" + Test20Sec3[0].userSpeech);
                                                            setAudioNo("Test-20:(Section-3)");
                                                            functionForShowingUserData(SpeechSTRTest20Sec3[0].data);
                                                        }}
                                                    >
                                                        <p className='mt-1'>Section-3</p>
                                                        <i className=' rounded-[50%] bg-white w-[30px] h-[30px] flex justify-center align-middle cursor-pointer'>
                                                            <CiPlay1 className=' text-xl pt-2 text-black' />
                                                        </i>
                                                    </div>

                                                </button>)
                                            }
                                        </div>
                                    </div>)
                            }
                        </div>

                    </div>
                ) : (
                    <div className="w-full h-[90vh] grid justify-center align-middle">
                        <div className="w-full sm:w-[400px] m-auto text-xl translate-y-[-31px]">
                            <p className="text-center mb-1">You did not give any<span className="text-2xl ml-2 mr-2  text-red-500">test</span> yet</p>
                            <p className="text-green-400 underline text-center hover:text-blue-400 cursor-pointer"
                                onClick={() => { history.push("/SpeakingPage") }}
                            >Go for test</p>

                        </div>
                    </div>
                )
            }

            {/* {!AllusersAudioData[0] && (
                // <div className='w-full h-[70vh] text-center'>
                //     <div className=''><h2 className='text-gray-600'>You did not give any test yet</h2>
                //         <br />
                //         <p className='text-blue-600 cursor-pointer underline italic'
                //             onClick={() => { history.push("/SpeakingPage") }}
                //         ></p>
                //     </div>

                // </div>



            )
            } */}


            {/* for select the user Country.... */}
            {
                SelectCountry && (<CountrySelect setSelectCountry={setSelectCountry} />)
            }
            {/* 
<CountrySelect  setSelectCountry={setSelectCountry}/> */}




        </>


    )
}

export default SpeakingCheck
