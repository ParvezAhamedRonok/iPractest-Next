let converstionSteps = 0;

export async function Test37Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {

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

                    await playScript("Okey. Lets talk about Sport Programs. Do you like watching sports programs on TV? ");
                    setSampleAns(["Yes, I enjoy watching sports programs on TV and would rather them than daily soaps. I really  enjoy cricket, soccer, and tennis and love to watch sports programs related to them. "]);
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
                    await playScript("Okey. Lets talk about Sport Programs. Do you like watching sports programs on TV? ");
                    setSampleAns(["Yes, I enjoy watching sports programs on TV and would rather them than daily soaps. I really  enjoy cricket, soccer, and tennis and love to watch sports programs related to them. "]);
                    conditionsDependsOnUserSpeech(1)
                }
            }
        }
        if (converstionSteps == 4) {

            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you like watching sports programs on TV?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Do you like watching sports programs on TV?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/usually/gi) ||
                converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                converstionStepsText.match(/no/gi) || converstionStepsText.match(/watch/gi) ||
                converstionStepsText.match(/favourite/gi) || converstionStepsText.match(/sport/gi) ||
                converstionStepsText.match(/often/gi) || converstionStepsText.match(/programs/gi) ||
                converstionStepsText.match(/TV/gi)
            ) {
                await playScript("Okey. Do you like to watch live sports games? ");
                setSampleAns([`I have been to the stadium to watch live games, but I would rather watch them on TV at home. 
                                Not only it is more economical but also very convenient and comfortable to watch it from my couch 
                                at home`])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you like watching sports programs on TV?");
                converstionSteps--;
            }
            //Question--5
        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you like to watch live sports games? ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Do you like to watch live sports games?  ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                converstionStepsText.match(/live/gi) || converstionStepsText.match(/watch/gi) ||
                converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/sport/gi) || converstionStepsText.match(/game/gi) ||
                converstionStepsText.match(/friend/gi) ||
                converstionStepsText.match(/rather/gi)
            ) {
                await playScript("So, Who do you like to watch sports games with? ");
                setSampleAns([`I like to watch sports games with my family. We all like to watch cricket together. My mom usually 
                            makes our favorite snacks before the game. I feel it’s a very fun way to spend quality time with 
                            family. `])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you like to watch live sports games? ");
                converstionSteps--;
            }
            //question-6
        } else if (converstionSteps == 6) {

            if (converstionStepsText.length < 10) {
                await smallTalkError("Who do you like to watch sports games with? ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Who do you like to watch sports games with? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/like/gi) ||
                converstionStepsText.match(/love/gi) || converstionStepsText.match(/watch/gi) ||
                converstionStepsText.match(/sport/gi) || converstionStepsText.match(/game/gi) ||
                converstionStepsText.match(/with/gi) ||
                converstionStepsText.match(/cricket/gi) || converstionStepsText.match(/together/gi)
            ) {
                await playScript("Ok, What kinds of games do you expect to watch in the future?");
                setSampleAns([`I think technology will blend into sports and because of the advancement in VR/AI technology, 
                                    eSports will become popular. People will be watching e-athletes wearing VR goggles battling 
                                    against each other instead of traditional sports.`])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Who do you like to watch sports games with? ");
                converstionSteps--;
            }
            //question7..
        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What kinds of games do you expect to watch in the future?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. What kinds of games do you expect to watch in the future?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/game/gi) ||
                converstionStepsText.match(/expect/gi) || converstionStepsText.match(/watch/gi) ||
                converstionStepsText.match(/future/gi) || converstionStepsText.match(/technology/gi) ||
                converstionStepsText.match(/blend/gi) || converstionStepsText.match(/sport/gi) ||
                converstionStepsText.match(/advancement/gi) ||
                converstionStepsText.match(/popular/gi) ||
                converstionStepsText.match(/special/gi) ||
                converstionStepsText.match(/families/gi) ||
                converstionStepsText.match(/goggles/gi)
            ) {
                await playScript("So, Do you prefer watching sports at home or in a stadium?");
                setSampleAns([`I prefer watching sports at home because it's more comfortable and I can avoid the crowd. Plus, I get a better view of the game on TV with replays and commentary.`])
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What kinds of games do you expect to watch in the future?");
                converstionSteps--;
            }
        }
        //Question--8
        else if (converstionSteps == 8) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you prefer watching sports at home or in a stadium?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Do you prefer watching sports at home or in a stadium?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/prefer/gi) || converstionStepsText.match(/yes/gi) ||
                converstionStepsText.match(/no/gi) || converstionStepsText.match(/watch/gi) ||
                converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||

                converstionStepsText.match(/sport/gi) || converstionStepsText.match(/home/gi) ||
                converstionStepsText.match(/especially/gi) || converstionStepsText.match(/stadium/gi) ||
                converstionStepsText.match(/avoid/gi) || converstionStepsText.match(/personal/gi) ||
                converstionStepsText.match(/replay/gi) ||
                converstionStepsText.match(/commentary/gi)
            ) {
                await playScript("Okey. That was about section 1. Thanks.");
                await sendSpeakingtextToBackend(recordedText);
                conditionsDependsOnUserSpeech(6)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you prefer watching sports at home or in a stadium?");
                converstionSteps--;
            }


        }


    }
    converstionStepsText = "";
}