let converstionSteps = 0;
export async function Test18Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {
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
                    await playScript("Okey. Lets talk about Sitting down.Where is your favorite place to sit? ");
                    setSampleAns(["I love to sit in my sofa chair next to the window "]);
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
                    await playScript("Okey. So, What do you think about today's weather?");
                    setSampleAns([`Yeah. this is really nice day & i am felling happy with todays weather`])
                    conditionsDependsOnUserSpeech(0)
                }
            }
            if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("What do you think about today's weather?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.What do you think about today's weather");
                    converstionSteps--;
                }
                else {
                    await playScript("Okey. Lets talk about Sitting down. Where is your favorite place to sit? ");
                    setSampleAns(["I love to sit in my sofa chair next to the window"]);
                    conditionsDependsOnUserSpeech(1)
                }
            }
        }

        if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Where is your favorite place to sit?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Where is your favorite place to sit?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/Sit/gi) || converstionStepsText.match(/down/gi) ||
                converstionStepsText.match(/favorite/gi) || converstionStepsText.match(/place/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/love/gi) ||
                converstionStepsText.match(/like/gi) || converstionStepsText.match(/sofa/gi) ||
                converstionStepsText.match(/chair/gi) || converstionStepsText.match(/window/gi)

            ) {
                await playScript("Okey.  Do you always sit down for a long time?");
                setSampleAns([`Yes, once I sit down I don’t like to get up frequently.`])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.Where is your favorite place to sit?");
                converstionSteps--;
            }


        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("  Do you always sit down for a long time? ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.  Do you always sit down for a long time? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/Do/gi) || converstionStepsText.match(/always/gi) ||
                converstionStepsText.match(/down/gi) || converstionStepsText.match(/long/gi) ||
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/time/gi) ||
                converstionStepsText.match(/once/gi) || converstionStepsText.match(/sit/gi) ||
                converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                converstionStepsText.match(/get/gi) || converstionStepsText.match(/frequently/gi) ||
                converstionStepsText.match(/up/gi) || converstionStepsText.match(/chair/gi)
            ) {
                await playScript("Okey. Do you feel sleepy when you are sitting down?");
                setSampleAns([`Yes, I feel quite lethargic when I sit down in a comfortable seat.`])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Do you always sit down for a long time?");
                converstionSteps--;
            }
        } else if (converstionSteps == 6) {

            if (converstionStepsText.length < 10) {
                await smallTalkError(" Do you feel sleepy when you are sitting down? ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Do you feel sleepy when you are sitting down? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/Do/gi) ||
                converstionStepsText.match(/feel/gi) || converstionStepsText.match(/sleepy/gi) ||
                converstionStepsText.match(/sit/gi) || converstionStepsText.match(/down/gi) ||
                converstionStepsText.match(/quite/gi) || converstionStepsText.match(/lethargic/gi) ||
                converstionStepsText.match(/when/gi) || converstionStepsText.match(/comfortable/gi) ||
                converstionStepsText.match(/seat/gi)
            ) {
                await playScript("Okey. When you were a kid, did you usually sit on the floor? ");
                setSampleAns([`Yes, my mom tells me that I sat a lot on the floor when I was a kid. Infact, we didn’t have a dining  table back then and we used to have our meals while sitting on the floor.   `])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.Do you feel sleepy when you are sitting down? ");
                converstionSteps--;
            }


        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("When you were a kid, did you usually sit on the floor? ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.  When you were a kid, did you usually sit on the floor? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/Do/gi) ||
                converstionStepsText.match(/When/gi) || converstionStepsText.match(/were/gi) ||
                converstionStepsText.match(/did/gi) || converstionStepsText.match(/usually/gi) ||
                converstionStepsText.match(/sit/gi) || converstionStepsText.match(/on/gi) ||
                converstionStepsText.match(/floor/gi) || converstionStepsText.match(/comfortable/gi) ||
                converstionStepsText.match(/seat/gi) ||
                converstionStepsText.match(/tell/gi) || converstionStepsText.match(/was/gi) ||
                converstionStepsText.match(/kid/gi) || converstionStepsText.match(/Infact/gi) ||
                converstionStepsText.match(/table/gi)
            ) {
                await playScript("Okey. That was about section 1. Thanks.");
                await sendSpeakingtextToBackend(recordedText);
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. When you were a kid, did you usually sit on the floor? ");
                converstionSteps--;
            }


        }

    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";
}