let converstionSteps = 0;

export async function Test25Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {

        if (converstionSteps == 0 && converstionStepsText == '') {
            if (!userSpeakingTestNo) {
                await playScript(
                    "Hello and welcome to the IELTS speaking portion of the test. Jone is my name. & For this portion of the exam, I will serve as your examiner. We are carrying out this. Would you kindly tell me your entire name?"
                );
                setSampleAns([" Simply you can say your full name. As like my name is Jone dow.You can call me Jone"])
            } else {
                await playScript("Are you ready to take the test then?");
                setSampleAns([" Simply you can say the positive answer. As like Yes i am Ready to give the test. ", "2, Yes, I am reay.You can proceed the test"])
            }

        }

        converstionSteps++;
        if (converstionStepsText != '') {

            if (!userSpeakingTestNo) {
                if (converstionSteps == 1) {
                    await playScript(
                        "I'll start your exam now. What's your full name, please?"
                    );
                    setSampleAns(["You an simply tell your full name . As like I am Mr. JOne Dow . You can call me jone."])
                } else if (converstionSteps == 2) {
                    if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating.  What's your full name, please?");
                        converstionSteps--;
                    }
                    else if (converstionStepsText.match("name") || converstionStepsText.match("call")) {
                        if (converstionStepsText.match("call")) {
                            await playScript(
                                "So, for this section. I'm going to ask some general questions. Where do you live?"
                            );
                            setSampleAns([" Simply you can say your area/ or place where you are live in.As like I am living in Dhaka,Bangladesh", "2, I live in Bangladesh."])
                            localStorage.setItem("SpeakingTestNo", testNo);
                            conditionsDependsOnUserSpeech(0)
                        } else {
                            await playScript("Alright. What can I call you?");
                            setSampleAns(["You can call me Jone or you simply tell your nickname."])
                            converstionSteps--;
                        }
                    }
                    else {
                        await playScript("Alright, what's your name?");
                        setSampleAns(["You an simply tell your full name . As like I am Mr. JOne Dow . You can call me jone."])
                        converstionSteps--;
                    }

                } else if (converstionSteps == 3) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError(" Where do you live? ");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating. Where do you live? ");
                        converstionSteps--;
                    }
                    else if (converstionStepsText.match(/live/gi) || converstionStepsText.match(/leaving/gi) ||
                        converstionStepsText.match(/in/gi) || converstionStepsText.match(/at/gi) ||
                        converstionStepsText.match(/from/gi) || converstionStepsText.match(/i am living/gi)) {

                        await playScript("Okey. Lets talk about Weather. What's the weather like where you live? ");
                        setSampleAns(["I live in Punjab. It is like a semi-arid region and the weather is mainly hot and dry, except in the monsoons when it rains a lot, and it becomes hot and humid. "]);
                        conditionsDependsOnUserSpeech(1)
                    } else {
                        await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Where do you live? ");
                        converstionSteps--;
                    }

                }
            } else {
                if (converstionSteps == 1) {
                    await playScript("Okey. Are you happy today?");
                    setSampleAns([" Yes, sir i am really happly today. thanks for asking."])
                }
                if (converstionSteps == 2) {
                    if (converstionStepsText.length < 5) {
                        await smallTalkError(" Are you ready? ");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating. Are you ready? ");
                        converstionSteps--;
                    }
                    else {
                        await playScript("Okey. So, Are you feeling well?");
                        setSampleAns([`Yeah. this is really nice day & i am felling happy with todays weather`])
                        conditionsDependsOnUserSpeech(0)
                    }
                }
                if (converstionSteps == 3) {
                    if (converstionStepsText.length < 10) {
                        await smallTalkError("So, Are you feeling well?");
                    }
                    else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                        await playScript("I am repeating. So, Are you feeling well?");
                        converstionSteps--;
                    }
                    else {
                        await playScript("Okey. Lets talk about Weather. What's the weather like where you live? ");
                        setSampleAns(["I live in Punjab. It is like a semi-arid region and the weather is mainly hot and dry, except in the monsoons when it rains a lot, and it becomes hot and humid. "]);
                        conditionsDependsOnUserSpeech(1)
                    }
                }
            }
            if (converstionSteps == 4) {

                if (converstionStepsText.length < 10) {
                    await smallTalkError("What's the weather like where you live? ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. What's the weather like where you live?  ");
                    converstionSteps--;
                } else if (
                    converstionStepsText.match(/Weather/gi) || converstionStepsText.match(/where/gi) ||
                    converstionStepsText.match(/live/gi) || converstionStepsText.match(/region/gi) ||
                    converstionStepsText.match(/mainly/gi) || converstionStepsText.match(/dry/gi) ||
                    converstionStepsText.match(/hot/gi) || converstionStepsText.match(/except/gi) ||
                    converstionStepsText.match(/monsoons/gi) || converstionStepsText.match(/rain/gi) ||
                    converstionStepsText.match(/become/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/humid/gi) ||
                    converstionStepsText.match(/stress/gi)
                ) {
                    await playScript("Okey. Do you prefer cold or hot weather?");
                    setSampleAns([`I prefer cold weather because I think I work more effectively in cold weather. In hot weather, I 
                                    feel lazy and lethargic somehow.`])
                    conditionsDependsOnUserSpeech(2)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. What's the weather like where you live? ");
                    converstionSteps--;
                }


            } else if (converstionSteps == 5) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Do you prefer cold or hot weather?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Do you prefer cold or hot weather?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/weather/gi) || converstionStepsText.match(/Do/gi) ||
                    converstionStepsText.match(/prefer/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/more/gi) || converstionStepsText.match(/effectively/gi) ||
                    converstionStepsText.match(/cold/gi) ||
                    converstionStepsText.match(/hot/gi) || converstionStepsText.match(/feel/gi) ||
                    converstionStepsText.match(/lazy/gi) || converstionStepsText.match(/lethargic/gi) ||
                    converstionStepsText.match(/therefore/gi) || converstionStepsText.match(/somehow/gi)
                ) {
                    await playScript("So,  Do you prefer dry or wet weather? ");
                    setSampleAns([`I love the rain. Perhaps it’s because I live in a dry region, and it receives very less rainfall`])
                    conditionsDependsOnUserSpeech(3)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you prefer cold or hot weather?");
                    converstionSteps--;
                }

            } else if (converstionSteps == 6) {

                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Do you prefer dry or wet weather?  ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.  Do you prefer dry or wet weather? ");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/weather/gi) ||
                    converstionStepsText.match(/prefer/gi) || converstionStepsText.match(/rain/gi) ||
                    converstionStepsText.match(/love/gi) || converstionStepsText.match(/live/gi) ||
                    converstionStepsText.match(/dry/gi) || converstionStepsText.match(/region/gi) || converstionStepsText.match(/receives/gi) || converstionStepsText.match(/less/gi) ||
                    converstionStepsText.match(/rainfall/gi) || converstionStepsText.match(/less/gi)
                ) {
                    await playScript("Are you in the habit of checking the weather forecast? When/How often?");
                    setSampleAns([`I normally don’t check the weather forecast except during the monsoons. During the monsoon 
                                    season, the rainfall becomes very unpredictable and so before I leave the house, I check the 
                                    weather forecast and if it is going to rain, I carry an umbrella.`])
                    conditionsDependsOnUserSpeech(4)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Do you prefer dry or wet weather? ");
                    converstionSteps--;
                }
                //question7..
            } else if (converstionSteps == 7) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Are you in the habit of checking the weather forecast? When/How often?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Are you in the habit of checking the weather forecast? When/How often?");
                    converstionSteps--;
                } else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/check/gi) || converstionStepsText.match(/weather/gi) ||
                    converstionStepsText.match(/forecast/gi) || converstionStepsText.match(/When/gi) ||
                    converstionStepsText.match(/How/gi) || converstionStepsText.match(/often/gi) ||
                    converstionStepsText.match(/normally/gi) || converstionStepsText.match(/except/gi) ||
                    converstionStepsText.match(/monsoons/gi) || converstionStepsText.match(/During/gi) ||
                    converstionStepsText.match(/season/gi) ||
                    converstionStepsText.match(/rainfall/gi) ||
                    converstionStepsText.match(/unpredictable/gi) || converstionStepsText.match(/leave/gi) ||
                    converstionStepsText.match(/umbrella/gi)
                ) {
                    await playScript("What do you think are the effects of climate change in recent years?");
                    setSampleAns([`I think there have been a lot of changes. However, the biggest has been the change of 
                                seasons. The summers have become a lot hotter and extended. I remember it used to be cold 
                                during Diwali, a festival we celebrate in October/November, but now it is warm.`])
                    conditionsDependsOnUserSpeech(5)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Are you in the habit of checking the weather forecast? When/How often?");
                    converstionSteps--;
                }

            }

            else if (converstionSteps == 8) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Is there any technology you don't like??");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.  Is there any technology you don't like?");
                    converstionSteps--;
                } else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/no/gi) || converstionStepsText.match(/effects/gi) ||
                    converstionStepsText.match(/recent/gi) || converstionStepsText.match(/year/gi) ||
                    converstionStepsText.match(/However/gi) || converstionStepsText.match(/biggest/gi) ||
                    converstionStepsText.match(/change/gi) || converstionStepsText.match(/during/gi) ||
                    converstionStepsText.match(/prevent/gi) || converstionStepsText.match(/smoother/gi) ||
                    converstionStepsText.match(/hotter/gi) || converstionStepsText.match(/become/gi) ||

                    converstionStepsText.match(/cold/gi) || converstionStepsText.match(/festival/gi) ||
                    converstionStepsText.match(/useful/gi) || converstionStepsText.match(/Diwali/gi)
                ) {
                    await playScript("Okey. That was about section 1. Thanks.");
                    await sendSpeakingtextToBackend(recordedText);
                    conditionsDependsOnUserSpeech(6)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Is there any technology you don't like?");
                    converstionSteps--;
                }


            }


        }

        console.log("converstionStepsText");
        console.log(converstionStepsText);
        converstionStepsText = "";
    }

