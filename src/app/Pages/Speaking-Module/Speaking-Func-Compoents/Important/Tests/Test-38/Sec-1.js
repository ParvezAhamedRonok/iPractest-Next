let converstionSteps = 0;

export async function Test38Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {

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

                    await playScript("Okey. Lets talk about Evening time. Do you like the morning or evening?");
                    setSampleAns(["I love both mornings and evenings. "]);
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
                    await playScript("Okey. Lets talk about Evening time. Do you like the morning or evening?");
                    setSampleAns(["I love both mornings and evenings. "]);
                    conditionsDependsOnUserSpeech(1)
                }
            }
        }
        if (converstionSteps == 4) {

            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you like the morning or evening?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Do you like the morning or evening?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/usually/gi) ||
                converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                converstionStepsText.match(/no/gi) || converstionStepsText.match(/Even/gi) ||
                converstionStepsText.match(/favourite/gi) || converstionStepsText.match(/time/gi) ||
                converstionStepsText.match(/often/gi) || converstionStepsText.match(/morning/gi) ||
                converstionStepsText.match(/both/gi)
            ) {
                await playScript("Okey. What do you usually do in the evening?");
                setSampleAns([` I like to walk, sit with my family or visit friends in the evenings. `])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you like the morning or evening?");
                converstionSteps--;
            }
            //Question--5
        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What do you usually do in the evening?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. What do you usually do in the evening?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/do/gi) || converstionStepsText.match(/usually/gi) ||
                converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                converstionStepsText.match(/evening/gi) || converstionStepsText.match(/watch/gi) ||
                converstionStepsText.match(/walk/gi) ||
                converstionStepsText.match(/sport/gi) || converstionStepsText.match(/game/gi) ||
                converstionStepsText.match(/friend/gi) ||
                converstionStepsText.match(/sit/gi) || converstionStepsText.match(/family/gi) ||
                converstionStepsText.match(/visit/gi)
            ) {
                await playScript("So, What did you do in the evening when you were little? Why?");
                setSampleAns([`As a child I would just want to go out and play with my friends because morning and afternoon were 
                                taken up by school and school related activities.`])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What do you usually do in the evening?");
                converstionSteps--;
            }
            //question-6
        } else if (converstionSteps == 6) {

            if (converstionStepsText.length < 10) {
                await smallTalkError("What did you do in the evening when you were little? Why?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. What did you do in the evening when you were little? Why?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/like/gi) ||
                converstionStepsText.match(/love/gi) || converstionStepsText.match(/evening/gi) ||
                converstionStepsText.match(/when/gi) || converstionStepsText.match(/were/gi) ||
                converstionStepsText.match(/little/gi) ||
                converstionStepsText.match(/cricket/gi) || converstionStepsText.match(/together/gi)

                || converstionStepsText.match(/friend/gi) ||
                converstionStepsText.match(/afternoon/gi) ||
                converstionStepsText.match(/morning/gi) || converstionStepsText.match(/activitie/gi)
            ) {
                await playScript("Ok, Are there any differences between what you do in the evening. now and what you did in the past?");
                setSampleAns([`Yes, as I said earlier, evening time in my childhood was synonymous with friends, now I like to be 
                                    with myself and my family and occasionally with friends in the evenings. `])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What did you do in the evening when you were little? Why?");
                converstionSteps--;
            }
            //question7..
        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Are there any differences between what you do in the evening. now and what you did in the past?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Are there any differences between what you do in the evening. now and what you did in the past?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/yes/gi) ||
                converstionStepsText.match(/no/gi) || converstionStepsText.match(/difference/gi) ||
                converstionStepsText.match(/between/gi) || converstionStepsText.match(/evening/gi) ||
                converstionStepsText.match(/past/gi) || converstionStepsText.match(/earlier/gi) ||
                converstionStepsText.match(/childhood/gi) ||
                converstionStepsText.match(/friend/gi) ||
                converstionStepsText.match(/myself/gi) ||
                converstionStepsText.match(/family/gi) ||
                converstionStepsText.match(/occasionally/gi)
            ) {
                await playScript("So, Do you prefer to relax or stay active in the evening?");
                setSampleAns([`I prefer to relax in the evening after a busy day. I usually watch TV or read a book to unwind and recharge for the next day.`])
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Are there any differences between what you do in the evening. now and what you did in the past?");
                converstionSteps--;
            }
        }
        //Question--8
        else if (converstionSteps == 8) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you prefer to relax or stay active in the evening?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Do you prefer to relax or stay active in the evening?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/prefer/gi) || converstionStepsText.match(/yes/gi) ||
                converstionStepsText.match(/no/gi) || converstionStepsText.match(/watch/gi) ||
                converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||

                converstionStepsText.match(/relax/gi) || converstionStepsText.match(/stay/gi) ||
                converstionStepsText.match(/active/gi) || converstionStepsText.match(/evening/gi) ||
                converstionStepsText.match(/avoid/gi) || converstionStepsText.match(/busy/gi) ||
                converstionStepsText.match(/usually/gi) ||
                converstionStepsText.match(/recharge/gi)
            ) {
                await playScript("Okey. That was about section 1. Thanks.");
                await sendSpeakingtextToBackend(recordedText);
                conditionsDependsOnUserSpeech(6)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you prefer to relax or stay active in the evening?");
                converstionSteps--;
            }


        }


    }
    converstionStepsText = "";
}
