let converstionSteps = 0;
export async function Test16Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {
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
                    await playScript("Okey. Lets talk about Watch.Do you wear a watch?");
                    setSampleAns(["Yes, I do wear Titan Watch. It is an integral part of my daily dressing up routine. "]);
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
                    await playScript("Okey. So, Which city do you live?");
                    setSampleAns([`Yes i do , i always make smile. it makes me happy.`])
                    conditionsDependsOnUserSpeech(0)
                }
            }
            if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Which city do you live? ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Which city do you live?");
                    converstionSteps--;
                }
                else {
                    await playScript("Okey. Lets talk about Watch.Do you wear a watch?");
                    setSampleAns(["Yes, I do wear Titan Watch. It is an integral part of my daily dressing up routine. "]);
                    conditionsDependsOnUserSpeech(1)
                }
            }
        }

        if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you wear a watch?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("Do you wear a watch? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/Watch/gi) || converstionStepsText.match(/wear/gi) ||
                converstionStepsText.match(/Yes/gi) || converstionStepsText.match(/on/gi) ||
                converstionStepsText.match(/Titan/gi) || converstionStepsText.match(/simple/gi) ||
                converstionStepsText.match(/integral/gi) || converstionStepsText.match(/rather/gi) ||
                converstionStepsText.match(/daily/gi) || converstionStepsText.match(/integral/gi) ||
                converstionStepsText.match(/love/gi) || converstionStepsText.match(/part/gi) ||
                converstionStepsText.match(/dress/gi) || converstionStepsText.match(/routine/gi) ||
                converstionStepsText.match(/confidence/gi)

            ) {
                await playScript("Okey. Have you ever got a watch as a gift? ");
                setSampleAns([`Yes, I got this watch as a gift from my parents at my wedding. `])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.Do you wear a watch?");
                converstionSteps--;
            }


        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Have you ever got a watch as a gift? ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.  Have you ever got a watch as a gift? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/Have/gi) || converstionStepsText.match(/did/gi) ||
                converstionStepsText.match(/been/gi) || converstionStepsText.match(/bought/gi) ||
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/ever/gi) ||
                converstionStepsText.match(/beautiful/gi) || converstionStepsText.match(/got/gi) ||
                converstionStepsText.match(/gift/gi) || converstionStepsText.match(/from/gi) ||
                converstionStepsText.match(/parent/gi) || converstionStepsText.match(/wedding/gi)
            ) {
                await playScript("Okey. Why do some people wear expensive watches?");
                setSampleAns([`People have fads for different things, some may like expensive clothes, and others may be fond of  good stationery while many others may like to wear expensive pieces of jewellery. Similarly those  who are used to wearing a watch may like to spend on an expensive watch. An expensive watch is  also used to make a statement about one’s personality and ability to buy one. `])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Have you ever got a watch as a gift? ");
                converstionSteps--;
            }


        } else if (converstionSteps == 6) {

            if (converstionStepsText.length < 10) {
                await smallTalkError(" Why do some people wear expensive watches? ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Why do some people wear expensive watches? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/some/gi) || converstionStepsText.match(/people/gi) ||
                converstionStepsText.match(/wear/gi) || converstionStepsText.match(/expensive/gi) ||
                converstionStepsText.match(/watch/gi) || converstionStepsText.match(/like/gi) ||
                converstionStepsText.match(/have/gi) || converstionStepsText.match(/different/gi) ||

                converstionStepsText.match(/thing/gi) || converstionStepsText.match(/cloth/gi) ||
                converstionStepsText.match(/stationery/gi) || converstionStepsText.match(/spend/gi) ||
                converstionStepsText.match(/jewellery/gi) || converstionStepsText.match(/Similarly/gi) ||
                converstionStepsText.match(/ability/gi) || converstionStepsText.match(/buy/gi)
            ) {
                await playScript("Okey. Do you think it is important to wear a watch? Why?  ");
                setSampleAns([`Till a few years ago it was considered an integral part of one’s attire because without a watch one  could not have functioned effectively in one’s daily routine. Since the advent of mobile phones wrist watches have become quite dispensable as most people use their mobiles to check on time.  `])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Why do some people wear expensive watches?");
                converstionSteps--;
            }


        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Do you think it is important to wear a watch? Why?  ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Do you think it is important to wear a watch? Why?   ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/important/gi) ||
                converstionStepsText.match(/wear/gi) || converstionStepsText.match(/watch/gi) ||
                converstionStepsText.match(/Till/gi) || converstionStepsText.match(/check/gi) ||

                converstionStepsText.match(/year/gi) || converstionStepsText.match(/ago/gi) ||
                converstionStepsText.match(/effective/gi) || converstionStepsText.match(/reflection/gi) ||
                converstionStepsText.match(/routine/gi) || converstionStepsText.match(/Since/gi) ||
                converstionStepsText.match(/check/gi) || converstionStepsText.match(/mobile/gi) ||
                converstionStepsText.match(/phones/gi) || converstionStepsText.match(/time/gi)
            ) {
                await playScript("Okey. That was about section 1. Thanks.");
                await sendSpeakingtextToBackend(recordedText);
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Do you think it is important to wear a watch? Why? ");
                converstionSteps--;
            }


        }

    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";
}