let converstionSteps = 0;
export async function Test14Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {
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
                        setSampleAns([" Simply you can say your area/ or place where you are live in.As like I am living in Dhaka,Bangladesh", "2, I live in kolkata,India"])
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
                    await playScript("Okey. Lets talk about sports.  Do you like watching sports programs on TV?");
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
                    await playScript("Okey. So, it look nice when you make smile.Do you like to smile all the time?");
                    setSampleAns([`Yes i do , i always make smile. it makes me happy.`])
                    conditionsDependsOnUserSpeech(0)
                }
            }
            if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" What do you do for fun? ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. What do you do for fun? ");
                    converstionSteps--;
                }
                else {
                    await playScript("Okey. Okey. Lets talk about sports.  Do you like watching sports programs on TV?");
                    setSampleAns(["Yes, I enjoy watching sports programs on TV and would rather them than daily soaps. I really  enjoy cricket, soccer, and tennis and love to watch sports programs related to them. "])
                    conditionsDependsOnUserSpeech(1)
                }
            }
        }

        if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Do you like watching sports programs on TV?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Do you like watching sports programs on TV? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/sport/gi) || converstionStepsText.match(/watch/gi) ||
                converstionStepsText.match(/Yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/enjoy/gi) || converstionStepsText.match(/program/gi) ||

                converstionStepsText.match(/TV/gi) || converstionStepsText.match(/rather/gi) ||
                converstionStepsText.match(/daily/gi) || converstionStepsText.match(/cricket/gi) ||
                converstionStepsText.match(/love/gi) || converstionStepsText.match(/relate/gi) ||
                converstionStepsText.match(/Like/gi)

            ) {
                await playScript("Okey. Where did you learn to play?");
                setSampleAns([`I think I learnt playing cricket by watching it on TV and from the other children in the 
                neighbourhood. In India, everyone likes to play cricket, so it not very hard to learn it.`])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you like watching sports programs on TV?");
                converstionSteps--;
            }


        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Where did you learn to play? ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.  Where did you learn to play? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/learn/gi) || converstionStepsText.match(/did/gi) ||
                converstionStepsText.match(/play/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/learnt/gi) ||
                converstionStepsText.match(/cricket/gi) || converstionStepsText.match(/watch/gi) ||
                converstionStepsText.match(/overall/gi) || converstionStepsText.match(/TV/gi) ||
                converstionStepsText.match(/from/gi) || converstionStepsText.match(/children/gi) ||
                converstionStepsText.match(/neighbourhood/gi) || converstionStepsText.match(/everyone/gi) ||
                converstionStepsText.match(/almost/gi) || converstionStepsText.match(/hard/gi) ||
                converstionStepsText.match(/learn/gi)
            ) {
                await playScript("Okey.  Did you do some sports when you were young? ");
                setSampleAns([` Yes, I have been playing cricket since my childhood. In my childhood, I also used to play hockey  and volleyball, but now I don’t.  `])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Where did you learn to play?");
                converstionSteps--;
            }


        } else if (converstionSteps == 6) {

            if (converstionStepsText.length < 10) {
                await smallTalkError(" Did you do some sports when you were young? ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Did you do some sports when you were young? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/Did/gi) || converstionStepsText.match(/some/gi) ||
                converstionStepsText.match(/sports/gi) || converstionStepsText.match(/when/gi) ||
                converstionStepsText.match(/were/gi) || converstionStepsText.match(/young/gi) ||
                converstionStepsText.match(/been/gi) || converstionStepsText.match(/play/gi) ||

                converstionStepsText.match(/since/gi) || converstionStepsText.match(/cricket/gi) ||
                converstionStepsText.match(/grow/gi) || converstionStepsText.match(/childhood/gi) ||
                converstionStepsText.match(/used/gi) || converstionStepsText.match(/around/gi) ||

                converstionStepsText.match(/hockey/gi) || converstionStepsText.match(/volleyball/gi) ||
                converstionStepsText.match(/football/gi) || converstionStepsText.match(/tanis/gi) ||
                converstionStepsText.match(/hadud/gi)
            ) {
                await playScript("Okey.  Do you think children need more exercise?");
                setSampleAns([`Yes certainly. I think the number of children who are unfit and obese is increasing day by day. So, 
                I think it is absolutely necessary that they get more exercise. `])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Did you do some sports when you were young? ");
                converstionSteps--;
            }


        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Do you think children need more exercise?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Do you think children need more exercise? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/no/gi) || converstionStepsText.match(/children/gi) ||
                converstionStepsText.match(/need/gi) || converstionStepsText.match(/more/gi) ||
                converstionStepsText.match(/exercise/gi) || converstionStepsText.match(/certainly/gi) ||

                converstionStepsText.match(/unfit/gi) || converstionStepsText.match(/obese/gi) ||
                converstionStepsText.match(/increas/gi) || converstionStepsText.match(/absolutely/gi) ||
                converstionStepsText.match(/necessary/gi) || converstionStepsText.match(/get/gi)
            ) {
                await playScript("Okey. Do you have a favorite sports team? If so, which one?");
                setSampleAns([`Yes, my favorite sports team is the Golden State Warriors. I love watching their fast-paced games and how they excel in teamwork and shooting.`])
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you think children need more exercise?");
                converstionSteps--;
            }


        } else if (converstionSteps == 8) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you have a favorite sports team? If so, which one?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.Do you have a favorite sports team? If so, which one? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/favorite/gi) || converstionStepsText.match(/team/gi) ||
                converstionStepsText.match(/sport/gi) || converstionStepsText.match(/Yes/gi) ||
                converstionStepsText.match(/no/gi) || converstionStepsText.match(/many/gi) ||
                converstionStepsText.match(/Golden/gi) || converstionStepsText.match(/Warrior/gi) ||

                converstionStepsText.match(/love/gi) || converstionStepsText.match(/watch/gi) ||
                converstionStepsText.match(/vibrant/gi) || converstionStepsText.match(/game/gi) ||
                converstionStepsText.match(/teamwork/gi) || converstionStepsText.match(/shoot/gi)

            ) {
                await playScript("Okey. That was about section 1. Thanks.");
                await sendSpeakingtextToBackend(recordedText);
                conditionsDependsOnUserSpeech(6)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.Do you have a favorite sports team? If so, which one?");
                converstionSteps--;
            }



        }




    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";
}