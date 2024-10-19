let converstionSteps = 0;

export async function Test26Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {

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

                    await playScript("Okey. Lets talk about Social Media. Do you or your friends like using social media?");
                    setSampleAns(["Personally, I don’t use social media a lot, but my friends use it a lot. My friends are particularly  crazy about Instagram and Facebook."]);
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
                    await playScript("Okey. Lets talk about Social Media. Do you or your friends like using social media? ");
                    setSampleAns(["Personally, I don’t use social media a lot, but my friends use it a lot. My friends are particularly  crazy about Instagram and Facebook."]);
                    conditionsDependsOnUserSpeech(1)
                }
            }
        }
        if (converstionSteps == 4) {

            if (converstionStepsText.length < 10) {
                await smallTalkError(" Do you or your friends like using social media? ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.  Do you or your friends like using social media? ");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/Social/gi) || converstionStepsText.match(/Media/gi) ||
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/friend/gi) || converstionStepsText.match(/Personal/gi) ||
                converstionStepsText.match(/lot/gi) || converstionStepsText.match(/Facebook/gi) ||
                converstionStepsText.match(/Instagram/gi) || converstionStepsText.match(/google/gi)
            ) {
                await playScript("Okey. Do you think you or your friends use too much social media?");
                setSampleAns([`I prefer cold weather because I think I work more effectively in cold weather. In hot weather, I 
                                    feel lazy and lethargic somehow.`])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Do you or your friends like using social media? ");
                converstionSteps--;
            }
        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you think you or your friends use too much social media?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Do you think you or your friends use too much social media?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/Do/gi) ||
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/friend/gi) || converstionStepsText.match(/effectively/gi) ||
                converstionStepsText.match(/much/gi) ||
                converstionStepsText.match(/social/gi) || converstionStepsText.match(/media/gi) ||
                converstionStepsText.match(/prefer/gi) || converstionStepsText.match(/weather/gi) ||
                converstionStepsText.match(/therefore/gi) || converstionStepsText.match(/lazy/gi)
            ) {
                await playScript("So, Do you want to work in social media? Why?");
                setSampleAns([`Personally, I wouldn’t. I am still old-fashioned in this regard. I prefer spending time with my 
                                    friends face to face rather than online. `])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you think you or your friends use too much social media?");
                converstionSteps--;
            }
            //question-6
        } else if (converstionSteps == 6) {

            if (converstionStepsText.length < 10) {
                await smallTalkError(" Do you want to work in social media? Why?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Do you want to work in social media? Why? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/want/gi) ||
                converstionStepsText.match(/social/gi) || converstionStepsText.match(/media/gi) ||
                converstionStepsText.match(/Personal/gi) || converstionStepsText.match(/still/gi) ||
                converstionStepsText.match(/old-fashioned/gi) || converstionStepsText.match(/regard/gi) || converstionStepsText.match(/prefer/gi) || converstionStepsText.match(/spend/gi) ||
                converstionStepsText.match(/friend/gi) || converstionStepsText.match(/online/gi)
            ) {
                await playScript("Ok, What's the most popular social media in India? Why?");
                setSampleAns([`I think it keeps on changing with time. When I was young, there were websites like Orkut which 
                                        were really popular, then it was taken over by Facebook and today is the era of Instagram and 
                                        Snapchat. I am not sure why, but it is about the ease of access to these latest apps that make 
                                        them popular`])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you want to work in social media? Why? ");
                converstionSteps--;
            }
            //question7..
        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What's the most popular social media in India? Why?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. What's the most popular social media in India? Why?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/popular/gi) || converstionStepsText.match(/most/gi) ||
                converstionStepsText.match(/social/gi) || converstionStepsText.match(/media/gi) ||
                converstionStepsText.match(/India/gi) || converstionStepsText.match(/chang/gi) ||
                converstionStepsText.match(/young/gi) || converstionStepsText.match(/website/gi) ||
                converstionStepsText.match(/Facebook/gi) ||
                converstionStepsText.match(/Instagram/gi) || converstionStepsText.match(/Snapchat/gi) ||
                converstionStepsText.match(/access/gi)
            ) {
                await playScript("So, How do you think social media impacts people’s lives today?");
                setSampleAns([`Social media keeps people connected and informed, but it can also be addictive and cause distractions. It sometimes creates pressure to maintain a certain lifestyle, affecting mental health. Overall, balance is important.`])
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What's the most popular social media in India? Why?");
                converstionSteps--;
            }
        }
        //Question--8
        else if (converstionSteps == 8) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" How do you think social media impacts people’s lives today?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. How do you think social media impacts people’s lives today?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/no/gi) || converstionStepsText.match(/social/gi) ||
                converstionStepsText.match(/media/gi) || converstionStepsText.match(/impacts/gi) ||

                converstionStepsText.match(/people/gi) || converstionStepsText.match(/live/gi) ||
                converstionStepsText.match(/today/gi) || converstionStepsText.match(/connect/gi) ||
                converstionStepsText.match(/addictive/gi) || converstionStepsText.match(/distractions/gi) ||
                converstionStepsText.match(/create/gi) || converstionStepsText.match(/maintain/gi) ||
                converstionStepsText.match(/affect/gi) || converstionStepsText.match(/important/gi)
            ) {
                await playScript("Okey. That was about section 1. Thanks.");
                await sendSpeakingtextToBackend(recordedText);
                conditionsDependsOnUserSpeech(6)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. How do you think social media impacts people’s lives today?");
                converstionSteps--;
            }


        }


    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";
}
