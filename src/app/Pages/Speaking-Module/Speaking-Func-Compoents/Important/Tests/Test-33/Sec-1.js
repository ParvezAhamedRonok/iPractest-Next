let converstionSteps = 0;

export async function Test33Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {

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

                    await playScript("Okey. Lets talk about Housework and cooking. Do you do some cooking/help your family cook at home now? ");
                    setSampleAns(["My cooking skills are quite limited. However, I do make the evening tea and cut the cucumber and radish for the salad. I also wash the utensils."]);
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
                    await playScript("Okey. Lets talk about Housework and cooking. Do you do some cooking/help your family cook at home now? ");
                    setSampleAns(["My cooking skills are quite limited. However, I do make the evening tea and cut the cucumber and radish for the salad. I also wash the utensils."]);

                    conditionsDependsOnUserSpeech(1)
                }
            }
        }
        if (converstionSteps == 4) {

            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you do some cooking/help your family cook at home now?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Do you do some cooking/help your family cook at home now?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/like/gi) || converstionStepsText.match(/usually/gi) ||
                converstionStepsText.match(/Housework/gi) || converstionStepsText.match(/cooking/gi) ||
                converstionStepsText.match(/help/gi) || converstionStepsText.match(/home/gi) ||
                converstionStepsText.match(/limit/gi)
            ) {
                await playScript("Okey. Do you think your home is clean and tidy? ");
                setSampleAns([`I wouldn’t call it clean, but I wouldn’t call it dirty also. I try to keep it as clean as I can, but it 
                                does get dirty. `])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you do some cooking/help your family cook at home now?");
                converstionSteps--;
            }
            //Question--5
        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Do you think your home is clean and tidy? ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.  Do you think your home is clean and tidy? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/=no/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/normally/gi) ||
                converstionStepsText.match(/often/gi) || converstionStepsText.match(/home/gi) ||
                converstionStepsText.match(/clean/gi) ||
                converstionStepsText.match(/tidy/gi) || converstionStepsText.match(/dirty/gi) ||
                converstionStepsText.match(/get/gi)
            ) {
                await playScript("So,Did you do some house cleaning when you were young? ");
                setSampleAns([`Yes, in fact, I used to spend more time on house cleaning when I was young as I had more 
                                free time.`])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you think your home is clean and tidy? ");
                converstionSteps--;
            }
            //question-6
        } else if (converstionSteps == 6) {

            if (converstionStepsText.length < 10) {
                await smallTalkError(" Did you do some house cleaning when you were young?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Did you do some house cleaning when you were young? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/did/gi) || converstionStepsText.match(/house/gi) ||
                converstionStepsText.match(/some/gi) || converstionStepsText.match(/cleaning/gi) ||
                converstionStepsText.match(/when/gi) || converstionStepsText.match(/past/gi) ||
                converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/pretty/gi) || converstionStepsText.match(/young/gi) ||
                converstionStepsText.match(/time/gi)
            ) {
                await playScript("Ok,  Do you have breakfast at home every day? ");
                setSampleAns([`As I get up late, I normally don’t have time to cook breakfast in the morning. But I do have 
                            something like fruits, breakfast cereals, or boiled eggs before I leave home.`])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Did you do some house cleaning when you were young? ");
                converstionSteps--;
            }
            //question7..
        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Do you have breakfast at home every day? ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Do you have breakfast at home every day? ");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/breakfast/gi) ||
                converstionStepsText.match(/home/gi) || converstionStepsText.match(/every/gi) ||
                converstionStepsText.match(/day/gi) || converstionStepsText.match(/normally/gi) ||
                converstionStepsText.match(/cook/gi) ||
                converstionStepsText.match(/before/gi) ||
                converstionStepsText.match(/nowadays/gi)
            ) {
                await playScript("So, Do you want to learn how to cook well? ");
                setSampleAns([`I want to learn to cook to survive. I don’t plan or want to be an expert, but I want my cooking 
                                    to be edible.`])
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you have breakfast at home every day? ");
                converstionSteps--;
            }
        }
        //Question--8
        else if (converstionSteps == 8) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you want to learn how to cook well? ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.  Do you want to learn how to cook well? ");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/learn/gi) || converstionStepsText.match(/want/gi) ||
                converstionStepsText.match(/well/gi) || converstionStepsText.match(/survive/gi) ||

                converstionStepsText.match(/plan/gi) || converstionStepsText.match(/expert/gi) ||
                converstionStepsText.match(/cooking/gi)
            ) {
                await playScript("Okey. That was about section 1. Thanks.");
                await sendSpeakingtextToBackend(recordedText);
                conditionsDependsOnUserSpeech(6)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you want to learn how to cook well? ");
                converstionSteps--;
            }


        }


    }
    converstionStepsText = "";
}

