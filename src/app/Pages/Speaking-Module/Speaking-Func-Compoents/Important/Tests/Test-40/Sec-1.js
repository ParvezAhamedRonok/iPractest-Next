let converstionSteps = 0;

export async function Test40Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {

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
                        setSampleAns([" Simply you can say your area/ or place where you are live in.As like I am living in Dhaka,Bangladesh", "2, I live in     Bangladesh."])
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

                    await playScript("Okey. Lets talk about Collecting things.  Do you collect things? ");
                    setSampleAns(["Yes, much as I would like not to, I must admit I do."]);
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
                    await playScript("Okey. Lets talk about Collecting things.  Do you collect things? ");
                    setSampleAns(["Yes, much as I would like not to, I must admit I do."]);
                    conditionsDependsOnUserSpeech(1)
                }
            }
        }
        if (converstionSteps == 4) {

            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you collect things? ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Do you collect things? ");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/Collecting/gi) || converstionStepsText.match(/usually/gi) ||
                converstionStepsText.match(/like/gi) || converstionStepsText.match(/things/gi) ||
                converstionStepsText.match(/collect/gi) || converstionStepsText.match(/much/gi) ||
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/love/gi) || converstionStepsText.match(/would/gi) ||
                converstionStepsText.match(/admit/gi)
            ) {
                await playScript("Okey. Are there any things you keep from childhood?");
                setSampleAns([` Yes, I have all the cards, letters (written to me) and photographs from my childhood`])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you collect things? ");
                converstionSteps--;
            }
            //Question--5
        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Are there any things you keep from childhood?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Are there any things you keep from childhood?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/thing/gi) || converstionStepsText.match(/keep/gi) ||
                converstionStepsText.match(/from/gi) || converstionStepsText.match(/childhood/gi) ||
                converstionStepsText.match(/card/gi) ||
                converstionStepsText.match(/child/gi) || converstionStepsText.match(/college/gi) ||
                converstionStepsText.match(/friend/gi) ||
                converstionStepsText.match(/kid/gi) || converstionStepsText.match(/family/gi) ||
                converstionStepsText.match(/photograph/gi) || converstionStepsText.match(/image/gi)
            ) {
                await playScript("So, Would you keep old things for a long time? Why?");
                setSampleAns([`I am a very emotional person so I like to keep things that have an emotional value for me. `])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Are there any things you keep from childhood?");
                converstionSteps--;
            }
            //question-6
        } else if (converstionSteps == 6) {

            if (converstionStepsText.length < 10) {
                await smallTalkError("Would you keep old things for a long time? Why?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Would you keep old things for a long time? Why? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/will/gi) ||
                converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/keep/gi) || converstionStepsText.match(/old/gi) ||
                converstionStepsText.match(/thing/gi) ||
                converstionStepsText.match(/long/gi) || converstionStepsText.match(/time/gi)

                || converstionStepsText.match(/person/gi) ||
                converstionStepsText.match(/value/gi)
            ) {
                await playScript("Ok, Where do you usually keep things you need?");
                setSampleAns([`The things of my day to day need are kept close at hand in my cupboards and chest of drawers. `])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Would you keep old things for a long time? Why?");
                converstionSteps--;
            }
            //question7..
        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Where do you usually keep things you need?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Where do you usually keep things you need?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/usually/gi) || converstionStepsText.match(/keep/gi) ||
                converstionStepsText.match(/thing/gi) || converstionStepsText.match(/need/gi) ||
                converstionStepsText.match(/kept/gi) || converstionStepsText.match(/close/gi) ||
                converstionStepsText.match(/chest/gi) || converstionStepsText.match(/drawer/gi)
            ) {
                await playScript("So, Why do people like to collect things?");
                setSampleAns([`People like to collect things because it gives them a sense of nostalgia or emotional attachment. Some also enjoy the hobby of gathering unique or rare items that have personal or historical value.`])
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Where do you usually keep things you need?");
                converstionSteps--;
            }
        }
        //Question--8
        else if (converstionSteps == 8) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Why do people like to collect things?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Why do people like to collect things?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/like/gi) ||
                converstionStepsText.match(/collect/gi) || converstionStepsText.match(/things/gi) ||
                converstionStepsText.match(/People/gi) || converstionStepsText.match(/because/gi) ||

                converstionStepsText.match(/sense/gi) || converstionStepsText.match(/emotional/gi) ||
                converstionStepsText.match(/attachment/gi) || converstionStepsText.match(/connect/gi) ||
                converstionStepsText.match(/historical/gi) || converstionStepsText.match(/hobby/gi) ||
                converstionStepsText.match(/management/gi)
            ) {
                await playScript("Okey. That was about section 1. Thanks.");
                await sendSpeakingtextToBackend(recordedText);
                conditionsDependsOnUserSpeech(6)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Why do people like to collect things?");
                converstionSteps--;
            }


        }


    }
    converstionStepsText = "";
}

