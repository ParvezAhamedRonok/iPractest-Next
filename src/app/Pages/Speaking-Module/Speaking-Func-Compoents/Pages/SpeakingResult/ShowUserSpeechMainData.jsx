"use client"
import React, { useEffect, useState } from 'react'
//end of the importing--------

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


//main functions-----------------------------
function ShowUserSpeechMainData() {
    const [showUserdata, setShowUserData] = useState([]);
    const [showingUserSpeechData, setShowingUserSpeechData] = useState([]);

    //connect the indexedDb with calling the functions below--- 
    useEffect(() => {
        createCollectionsInIndexesDB();
        //get the data from indexedDb---------
        setTimeout(() => {
            getUserAllSpeechData();
        }, 1000);
    }, [])








    //get user Speech data from indexedDB for showing into the Speaking result
    const getUserAllSpeechData = (event) => {
        let dbPromise = windowIndexedDB.open("newDatabase", 2);
        console.log("Getting-Console added...")
        dbPromise.onsuccess = () => {
            const db = dbPromise.result;
            const tx = db.transaction("showDataInResult", "readonly");
            const userData = tx.objectStore("showDataInResult");

            const users = userData.getAll();
            // console.log(users)
            users.onsuccess = (query) => {
                let userData = query.srcElement.result
                console.log(userData)
                setShowUserData(userData);
                // setgetUSerSectionName(userData[0] && userData[0].section);
                let sentences = userData[0].userSpeech.split('~');
                setShowingUserSpeechData(sentences);
                updateAudioForPlaySpeech(userData[0].userAudio)


            };
            users.onerror = (error) => {
                console.log("Error occured while getting initial data...")

            }

            tx.oncomplete = () => {
                db.close();
            }

        }
    }





    //play audio function -----
    function updateAudioForPlaySpeech(changePath) {
        console.log(changePath);
        const player = document.getElementsByTagName("audio")[0];
        player.pause();
        player.setAttribute('src', changePath);
        // player.play();
        player.load();

    }

    return (
        <div className='w-full sm:w-[670px] p-[10px] sm:p-[20px] bg-[#fafafa]'>
            {
                showUserdata[0] ? (
                    <>
                        <div className='pt-3 pl-2 pr-2'>
                            <div>
                                <audio controls className='m-auto'></audio>
                            </div>
                            <hr />
                            <div className='pt-3 pl-2 pr-2 bg-white rounded-[15px] shadow-md'>
                                {
                                    showingUserSpeechData[0] && (<div>
                                        {
                                            showingUserSpeechData.map((items, index) => {
                                                return <div key={index} className={`mb-2 grid relative text-center text-[10px] sm:text-[13px] ${items.match("Question:") && "justify-start relative p-2 rounded-[22px] border-1 border-gray-300 w-[150px] sm:w-[250px] bg-[#089df1] text-white mr-auto before:content-[''] before:w-[20px] before:h-[7px] before:absolute before:bottom-0 before:left-[-12px] before:rotate-[-27deg] before:rounded-tl-[100%] before:bg-[#089df1]"} 

                                                ${items.match("Answer:") && "justify-end border-1 border-gray-300 bg-[#dddddd]  p-2 rounded-[25px] w-[150px] sm:w-[250px] ml-auto before:content-[''] before:w-[20px] before:h-[7px] before:absolute before:bottom-0 before:right-[-12px] before:rotate-[27deg] before:rounded-tr-[100%] before:bg-[#dddddd]"} 
                                                `} >
                                                    {items}

                                                </div>
                                            })
                                        }
                                    </div>)
                                }
                            </div>
                        </div>

                    </>
                ) : <>
                    <div className='flex w-full h-full justify-center align-middle p-10'>
                        <div
                            className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white m-auto"
                            role="status">
                            <span
                                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                            >Loading...</span
                            >
                        </div>
                    </div>
                </>
            }


        </div>
    )
}

export default ShowUserSpeechMainData