let converstionSteps = 0;

export async function Test32Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {

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

                    await playScript("Okey. Lets talk about Morning Time. Do you like getting up early in the morning? ");
                    setSampleAns(["No, I don’t like getting up early in the morning. I normally sleep late at night, so I don’t get up early in the morning. However, my parents keep telling me that I should change this habit. "]);
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
                    await playScript("Okey. Lets talk about Morning Time. Do you like getting up early in the morning? ");
                    setSampleAns(["No, I don’t like getting up early in the morning. I normally sleep late at night, so I don’t get up early in the morning. However, my parents keep telling me that I should change this habit. "]);

                    conditionsDependsOnUserSpeech(1)
                }
            }
        }
        if (converstionSteps == 4) {

            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you like getting up early in the morning?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Do you like getting up early in the morning?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/Morning/gi) || converstionStepsText.match(/Time/gi) ||
                converstionStepsText.match(/like/gi) || converstionStepsText.match(/usually/gi) ||
                converstionStepsText.match(/no/gi) || converstionStepsText.match(/yes/gi) ||
                converstionStepsText.match(/getting/gi) || converstionStepsText.match(/early/gi) ||
                converstionStepsText.match(/sleep/gi)
            ) {
                await playScript("Okey. What do you usually do in the morning?");
                setSampleAns([`I normally don’t get up early in the morning, so I just finish the basic chores like bathing, getting 
                                ready, and having my breakfast in the morning. I also read the newspaper for some time. `])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you like getting up early in the morning?");
                converstionSteps--;
            }
            //Question--5
        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" What do you usually do in the morning?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.  What do you usually do in the morning?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/usually/gi) || converstionStepsText.match(/morning/gi) ||
                converstionStepsText.match(/do/gi) || converstionStepsText.match(/normally/gi) ||
                converstionStepsText.match(/often/gi) || converstionStepsText.match(/early/gi) ||
                converstionStepsText.match(/basic/gi) ||
                converstionStepsText.match(/breakfast/gi) || converstionStepsText.match(/ready/gi) ||
                converstionStepsText.match(/read/gi)
            ) {
                await playScript("So, What did you do in the morning when you were little? Why? ");
                setSampleAns([`I think I pretty much did the same in my childhood too. I used to get up late, so I used to be 
                                    barely able to finish my basic chores in the morning time. I had little time to do anything else.`])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  What do you usually do in the morning?");
                converstionSteps--;
            }
            //question-6
        } else if (converstionSteps == 6) {

            if (converstionStepsText.length < 10) {
                await smallTalkError(" What did you do in the morning when you were little? Why? ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. What did you do in the morning when you were little? Why? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/little/gi) || converstionStepsText.match(/was/gi) ||
                converstionStepsText.match(/did/gi) || converstionStepsText.match(/morning/gi) ||
                converstionStepsText.match(/between/gi) || converstionStepsText.match(/children/gi) ||
                converstionStepsText.match(/now/gi) || converstionStepsText.match(/past/gi) ||
                converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/pretty/gi) || converstionStepsText.match(/same/gi) ||
                converstionStepsText.match(/barely/gi) || converstionStepsText.match(/finish/gi) ||
                converstionStepsText.match(/time/gi)
            ) {
                await playScript("Ok,  Are there any differences between what you do in the morning now and what you did in the past?");
                setSampleAns([`No, as I said before, it is pretty much the same. There is just one small difference, in my 
                            childhood I didn’t use to read the newspaper, but nowadays I do.`])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What did you do in the morning when you were little? Why? ");
                converstionSteps--;
            }
            //question7..
        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Are there any differences between what you do in the morning now and what you did in the past?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Are there any differences between what you do in the morning now and what you did in the past?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/difference/gi) ||
                converstionStepsText.match(/past/gi) || converstionStepsText.match(/morning/gi) ||
                converstionStepsText.match(/between/gi) || converstionStepsText.match(/keep/gi) ||
                converstionStepsText.match(/unique/gi) ||
                converstionStepsText.match(/child/gi) ||
                converstionStepsText.match(/nowadays/gi) ||
                converstionStepsText.match(/do/gi)
            ) {
                await playScript("So, Do you spend your mornings doing the same things on both weekends and weekdays?  Why?");
                setSampleAns([`No, on the weekends, we normally go to the Gurdwara in the morning. So, I have to get up 
                                early. On the weekends, we also eat breakfast outside. `])
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Are there any differences between what you do in the morning now and what you did in the past?");
                converstionSteps--;
            }
        }
        //Question--8
        else if (converstionSteps == 8) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Do you spend your mornings doing the same things on both weekends and weekdays?  Why?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.  Do you spend your mornings doing the same things on both weekends and weekdays?  Why?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/spend/gi) || converstionStepsText.match(/morning/gi) ||
                converstionStepsText.match(/things/gi) || converstionStepsText.match(/both/gi) ||

                converstionStepsText.match(/especially/gi) || converstionStepsText.match(/weekend/gi) ||
                converstionStepsText.match(/normally/gi) || converstionStepsText.match(/early/gi) ||
                converstionStepsText.match(/breakfast/gi)
            ) {
                await playScript("Okey. That was about section 1. Thanks.");
                await sendSpeakingtextToBackend(recordedText);
                conditionsDependsOnUserSpeech(6)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Do you spend your mornings doing the same things on both weekends and weekdays?  Why?");
                converstionSteps--;
            }


        }


    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";
}


