let converstionSteps = 0;

export async function Test23Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {

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

                        await playScript("Okey. Lets talk about Writing.  Do you write a lot?");
                        setSampleAns(["I don’t write a lot these days. However, I am trying to start a habit of maintaining a journal."]);
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
                        await playScript("I am repeating.So, Are you feeling well?");
                        converstionSteps--;
                    }
                    else {
                        await playScript("Okey. Lets talk about Writing. Do you write a lot? ");
                        setSampleAns(["I don’t write a lot these days. However, I am trying to start a habit of maintaining a journal."]);
                        conditionsDependsOnUserSpeech(1)
                    }
                }
            }
            if (converstionSteps == 4) {

                if (converstionStepsText.length < 10) {
                    await smallTalkError("Okey. Lets talk about Writing. Do you write a lot?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Okey. Lets talk about Writing. Do you write a lot?");
                    converstionSteps--;
                } else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/Writ/gi) || converstionStepsText.match(/often/gi) ||
                    converstionStepsText.match(/lot/gi) || converstionStepsText.match(/However/gi) ||
                    converstionStepsText.match(/start/gi) || converstionStepsText.match(/habit/gi) ||
                    converstionStepsText.match(/Usually/gi) || converstionStepsText.match(/maintain/gi) ||
                    converstionStepsText.match(/journal/gi)
                ) {
                    await playScript("Okey.  What do you like to write? Why?  ");
                    setSampleAns([`Nowadays, I don’t write anything, but in the past, I used to write my views about different 
                                        political issues. Writing was just a means for me to express myself.`])
                    conditionsDependsOnUserSpeech(2)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Okey. Lets talk about Writing. Do you write a lot?");
                    converstionSteps--;
                }


            } else if (converstionSteps == 5) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" What do you like to write? Why?  ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.  What do you like to write? Why? ");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/favourite/gi) || converstionStepsText.match(/favorite/gi) ||
                    converstionStepsText.match(/do/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                    converstionStepsText.match(/write/gi) ||
                    converstionStepsText.match(/interest/gi) || converstionStepsText.match(/Nowadays/gi) ||
                    converstionStepsText.match(/anything/gi) || converstionStepsText.match(/past/gi) ||
                    converstionStepsText.match(/view/gi) || converstionStepsText.match(/different/gi) ||
                    converstionStepsText.match(/political/gi) || converstionStepsText.match(/issues/gi) || converstionStepsText.match(/express/gi)
                ) {
                    await playScript("So, Do you think the things you write would change?");
                    setSampleAns([`I am not sure. I think I write only when I am very passionate about something. So, if in the 
                                    future I am passionate about something, I would write about that.`])
                    conditionsDependsOnUserSpeech(3)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  What do you like to write? Why?  ");
                    converstionSteps--;
                }



            } else if (converstionSteps == 6) {

                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Do you think the things you write would change?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.  Do you think the things you write would change?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/would/gi) ||
                    converstionStepsText.match(/will/gi) || converstionStepsText.match(/sure/gi) ||
                    converstionStepsText.match(/passionate/gi) || converstionStepsText.match(/something/gi) ||
                    converstionStepsText.match(/future/gi) || converstionStepsText.match(/about/gi) || converstionStepsText.match(/writing/gi) || converstionStepsText.match(/write/gi)
                ) {
                    await playScript("Do you prefer typing or handwriting when you are writing?  ");
                    setSampleAns([`I prefer typing as compared to handwriting because I generally do it on websites. Also, my 
                                    typing speed is a lot faster as compared to handwriting.`])
                    conditionsDependsOnUserSpeech(4)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Do you think the things you write would change?");
                    converstionSteps--;
                }

                //question7..

            } else if (converstionSteps == 7) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Do you prefer typing or handwriting when you are writing? ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Do you prefer typing or handwriting when you are writing?  ");
                    converstionSteps--;
                } else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/prefer/gi) || converstionStepsText.match(/typing/gi) ||
                    converstionStepsText.match(/write/gi) || converstionStepsText.match(/handwriting/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/when/gi) ||

                    converstionStepsText.match(/compared/gi) || converstionStepsText.match(/little/gi) ||
                    converstionStepsText.match(/because/gi) || converstionStepsText.match(/generally/gi) ||
                    converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/website/gi) ||
                    converstionStepsText.match(/very/gi) || converstionStepsText.match(/faster/gi) ||
                    converstionStepsText.match(/speed/gi)
                ) {
                    await playScript("Okey. What is the importance of an outline in the writing process?");
                    setSampleAns([`An outline organizes ideas, ensures clear structure, and prevents writer's block by providing direction, making writing smoother.`])
                    conditionsDependsOnUserSpeech(5)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you prefer typing or handwriting when you are writing? ");
                    converstionSteps--;
                }

            }

            else if (converstionSteps == 8) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("What is the importance of an outline in the writing process??");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. What is the importance of an outline in the writing process?");
                    converstionSteps--;
                } else if (
                    converstionStepsText.match(/importance/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/outline/gi) || converstionStepsText.match(/writing/gi) ||
                    converstionStepsText.match(/process/gi) || converstionStepsText.match(/organize/gi) ||
                    converstionStepsText.match(/idea/gi) || converstionStepsText.match(/ensures/gi) ||
                    converstionStepsText.match(/clear/gi) || converstionStepsText.match(/structure/gi) ||
                    converstionStepsText.match(/prevent/gi) || converstionStepsText.match(/smoother/gi) ||
                    converstionStepsText.match(/write/gi) || converstionStepsText.match(/typing/gi)
                ) {
                    await playScript("Okey. How can a writer develop their unique voice?");
                    setSampleAns([`A writer develops their voice by writing authentically, experimenting with styles, and reflecting their personal tone and perspective.`])
                    conditionsDependsOnUserSpeech(6)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. What is the importance of an outline in the writing process?");
                    converstionSteps--;
                }


            }
            //Quest---9
            else if (converstionSteps == 9) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("How can a writer develop their unique voice?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. How can a writer develop their unique voice?");
                    converstionSteps--;
                } else if (
                    converstionStepsText.match(/writer/gi) || converstionStepsText.match(/develop/gi) ||
                    converstionStepsText.match(/their/gi) || converstionStepsText.match(/better/gi) ||
                    converstionStepsText.match(/unique/gi) || converstionStepsText.match(/voice/gi) ||
                    converstionStepsText.match(/authentica/gi) || converstionStepsText.match(/experiment/gi) ||

                    converstionStepsText.match(/style/gi) || converstionStepsText.match(/reflect/gi) ||
                    converstionStepsText.match(/personal/gi) || converstionStepsText.match(/tone/gi) ||
                    converstionStepsText.match(/usually/gi) || converstionStepsText.match(/perspective/gi)
                ) {
                    await playScript("Okey. That was about section 1. Thanks.");
                    await sendSpeakingtextToBackend(recordedText);
                    conditionsDependsOnUserSpeech(7)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  How can a writer develop their unique voice?");
                    converstionSteps--;
                }


            }

        }

        console.log("converstionStepsText");
        console.log(converstionStepsText);
        converstionStepsText = "";
    }