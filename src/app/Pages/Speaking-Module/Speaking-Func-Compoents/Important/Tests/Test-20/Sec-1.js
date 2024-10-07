let converstionSteps = 0;
export async function Test20Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {
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
                    await playScript("Okey. Lets talk about Meeting places.Where is your favorite place to meet with your friends?  ");
                    setSampleAns(["I like to explore new places with my friends, they maybe a new restaurant in town or a park we’ve never seen before.  "]);
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
                    await playScript("Okey. So, Do you like to write?");
                    setSampleAns([`Yeah. this is really nice day & i am felling happy with todays weather`])
                    conditionsDependsOnUserSpeech(0)
                }
            }
            if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Do you like to write?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.Do you like to write?");
                    converstionSteps--;
                }
                else {
                    await playScript("Okey. Lets talk about Meeting places.Where is your favorite place to meet with your friends?  ");
                    setSampleAns(["I like to explore new places with my friends, they maybe a new restaurant in town or a park we’ve never seen before.  "]);
                    conditionsDependsOnUserSpeech(1)
                }
            }
        }

        if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Where is your favorite place to meet with your friends?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Where is your favorite place to meet with your friends?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/Meet/gi) || converstionStepsText.match(/place/gi) ||
                converstionStepsText.match(/favorite/gi) || converstionStepsText.match(/friend/gi) ||
                converstionStepsText.match(/Old/gi) || converstionStepsText.match(/like/gi) ||
                converstionStepsText.match(/love/gi) || converstionStepsText.match(/explore/gi) ||
                converstionStepsText.match(/especially/gi) || converstionStepsText.match(/area/gi) ||
                converstionStepsText.match(/restaurant/gi) || converstionStepsText.match(/park/gi) || converstionStepsText.match(/before/gi)

            ) {
                await playScript("Okey. Do you think there are some places more suitable for meeting with others? ");
                setSampleAns([`Yes, places that have a relaxed seating, low low level of noise and are comfortable to be in are most 
                suited for meeting others `])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.Where is your favorite place to meet with your friends?");
                converstionSteps--;
            }
        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you think there are some places more suitable for meeting with others?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Do you think there are some places more suitable for meeting with others? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/do/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/should/gi) || converstionStepsText.match(/place/gi) ||
                converstionStepsText.match(/suitable/gi) ||
                converstionStepsText.match(/meet/gi) || converstionStepsText.match(/other/gi) ||
                converstionStepsText.match(/relax/gi) || converstionStepsText.match(/seat/gi) ||
                converstionStepsText.match(/level/gi) || converstionStepsText.match(/noise/gi) ||
                converstionStepsText.match(/comfortable/gi) || converstionStepsText.match(/important/gi)
            ) {
                await playScript("So,  Are there any differences between your favorite meeting places in the present and in your childhood?");
                setSampleAns([`In my childhood places like public parks, loud noisey areas all seemed attractive whereas now I’d   prefer quieter and comfortable areas. `])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.Do you think there are some places more suitable for meeting with others? ");
                converstionSteps--;
            }
        } else if (converstionSteps == 6) {

            if (converstionStepsText.length < 10) {
                await smallTalkError("Are there any differences between your favorite meeting places in the present and in your childhood?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.  Are there any differences between your favorite meeting places in the present and in your childhood?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/difference/gi) || converstionStepsText.match(/between/gi) ||
                converstionStepsText.match(/favorite/gi) || converstionStepsText.match(/meet/gi) ||
                converstionStepsText.match(/place/gi) || converstionStepsText.match(/present/gi) ||
                converstionStepsText.match(/childhood/gi) || converstionStepsText.match(/public/gi) ||
                converstionStepsText.match(/park/gi) || converstionStepsText.match(/comfortable/gi) ||
                converstionStepsText.match(/loud/gi) ||
                converstionStepsText.match(/area/gi) || converstionStepsText.match(/attractive/gi) ||
                converstionStepsText.match(/prefer/gi)
            ) {
                await playScript("Okey.  Why are some meeting places better than others?  ");
                setSampleAns([`I think the meeting places that provide a quite ambience are better than the one’s which are very noisy. `])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Are there any differences between your favorite meeting places in the present and in your childhood? ");
                converstionSteps--;
            }

        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Why are some meeting places better than others?   ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.  Why are some meeting places better than others?   ");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/some/gi) || converstionStepsText.match(/meet/gi) ||
                converstionStepsText.match(/place/gi) || converstionStepsText.match(/better/gi) ||
                converstionStepsText.match(/than/gi) || converstionStepsText.match(/other/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/provide/gi) ||
                converstionStepsText.match(/quite/gi) || converstionStepsText.match(/ambience/gi) ||
                converstionStepsText.match(/which/gi) || converstionStepsText.match(/noisy/gi) ||
                converstionStepsText.match(/yes/gi) ||
                converstionStepsText.match(/no/gi)
            ) {
                await playScript("Okey. That was about section 1. Thanks.");
                await sendSpeakingtextToBackend(recordedText);
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Why are some meeting places better than others?   ");
                converstionSteps--;
            }


        }

    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";
}