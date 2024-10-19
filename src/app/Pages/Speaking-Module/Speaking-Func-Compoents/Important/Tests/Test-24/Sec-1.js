let converstionSteps = 0;

export async function Test24Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {

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

                        await playScript("Okey. Lets talk about Technology.  What technology do you often use, computers or cellphones? ");
                        setSampleAns(["I use a computer rather than a cellphone for most purposes. I think the small screen of the  cellphones stresses my eyes."]);
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
                        await playScript("Okey. Lets talk about Technology. What technology do you often use, computers or cellphones?  ");
                        setSampleAns(["I use a computer rather than a cellphone for most purposes. I think the small screen of the cellphones stresses my eyes."]);
                        conditionsDependsOnUserSpeech(1)
                    }
                }
            }
            if (converstionSteps == 4) {

                if (converstionStepsText.length < 10) {
                    await smallTalkError("What technology do you often use, computers or cellphones? ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. What technology do you often use, computers or cellphones? ");
                    converstionSteps--;
                } else if (
                    converstionStepsText.match(/Technology/gi) || converstionStepsText.match(/often/gi) ||
                    converstionStepsText.match(/computer/gi) || converstionStepsText.match(/cellphones/gi) ||
                    converstionStepsText.match(/mobile/gi) || converstionStepsText.match(/tab/gi) ||
                    converstionStepsText.match(/smart/gi) || converstionStepsText.match(/rather/gi) ||
                    converstionStepsText.match(/Usually/gi) || converstionStepsText.match(/maintain/gi) ||
                    converstionStepsText.match(/purposes/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/screen/gi) ||
                    converstionStepsText.match(/stress/gi)
                ) {
                    await playScript("Okey.  What electronic devices have you bought lately?  ");
                    setSampleAns([`Recently, my parents bought a smart TV for me. I got really good grades in 12th standard and 
                                        therefore my parents got me the TV. I use it to stream TV series and movies. `])
                    conditionsDependsOnUserSpeech(2)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. What technology do you often use, computers or cellphones? ");
                    converstionSteps--;
                }


            } else if (converstionSteps == 5) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" What electronic devices have you bought lately? ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. What electronic devices have you bought lately? ");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/electronic/gi) || converstionStepsText.match(/device/gi) ||
                    converstionStepsText.match(/have/gi) || converstionStepsText.match(/bought/gi) ||
                    converstionStepsText.match(/late/gi) || converstionStepsText.match(/Recently/gi) ||
                    converstionStepsText.match(/smart/gi) ||
                    converstionStepsText.match(/TV/gi) || converstionStepsText.match(/mobile/gi) ||
                    converstionStepsText.match(/phone/gi) || converstionStepsText.match(/watch/gi) ||
                    converstionStepsText.match(/therefore/gi) || converstionStepsText.match(/stream/gi) ||
                    converstionStepsText.match(/use/gi) || converstionStepsText.match(/movie/gi) || converstionStepsText.match(/maintain/gi) ||
                    converstionStepsText.match(/time/gi) || converstionStepsText.match(/do/gi) || converstionStepsText.match(/sort/gi)
                ) {
                    await playScript("So,  Is there any technology you want to buy? ");
                    setSampleAns([`Yes, I want to buy an iPhone. A lot of friends tell me that once I use it, I will never be able to 
                                use the other phones. I really want to prove them wrong.`])
                    conditionsDependsOnUserSpeech(3)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. What electronic devices have you bought lately?  ");
                    converstionSteps--;
                }

            } else if (converstionSteps == 6) {

                if (converstionStepsText.length < 10) {
                    await smallTalkError("  Is there any technology you want to buy? ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.  Is there any technology you want to buy? ");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/technology/gi) ||
                    converstionStepsText.match(/will/gi) || converstionStepsText.match(/sure/gi) ||
                    converstionStepsText.match(/passionate/gi) || converstionStepsText.match(/something/gi) ||
                    converstionStepsText.match(/future/gi) || converstionStepsText.match(/want/gi) || converstionStepsText.match(/buy/gi) || converstionStepsText.match(/would/gi) ||
                    converstionStepsText.match(/iPhone/gi) || converstionStepsText.match(/tv/gi) || converstionStepsText.match(/watch/gi) || converstionStepsText.match(/once/gi) ||
                    converstionStepsText.match(/never/gi) || converstionStepsText.match(/able/gi) || converstionStepsText.match(/really/gi) || converstionStepsText.match(/wrong/gi)
                ) {
                    await playScript("Is technology important in your life? ");
                    setSampleAns([`Yes, technology is a big part of my life. I don’t think I can survive without technology. Every 
                                    part of life from waking up to sleeping is connected to technology. For example, I use 
                                    technology for waking up, heating water, cooking, etc. `])
                    conditionsDependsOnUserSpeech(4)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Is there any technology you want to buy?");
                    converstionSteps--;
                }
                //question7..
            } else if (converstionSteps == 7) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Is technology important in your life? ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Is technology important in your life? ");
                    converstionSteps--;
                } else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/prefer/gi) || converstionStepsText.match(/technology/gi) ||
                    converstionStepsText.match(/life/gi) || converstionStepsText.match(/big/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/survive/gi) ||

                    converstionStepsText.match(/without/gi) || converstionStepsText.match(/Every/gi) ||
                    converstionStepsText.match(/waking/gi) || converstionStepsText.match(/sleep/gi) ||
                    converstionStepsText.match(/connect/gi) ||
                    converstionStepsText.match(/For example/gi) ||
                    converstionStepsText.match(/use/gi) || converstionStepsText.match(/cook/gi) ||
                    converstionStepsText.match(/heat/gi)
                ) {
                    await playScript("Okey.  Is there any technology you don't like?");
                    setSampleAns([`I don’t know. There are times when I hate technology for example when my friends become 
                                glued to their mobile screens instead of spending time with us. However, there is no 
                                technology I hate as such. There are technologies I find less useful than others and there are 
                                others I find more useful.`])
                    conditionsDependsOnUserSpeech(5)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Is technology important in your life? ");
                    converstionSteps--;
                }

            }

            else if (converstionSteps == 8) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Is there any technology you don't like??");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.  Is there any technology you don't like?");
                    converstionSteps--;
                } else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/no/gi) || converstionStepsText.match(/there/gi) ||
                    converstionStepsText.match(/lot/gi) || converstionStepsText.match(/like/gi) ||
                    converstionStepsText.match(/love/gi) || converstionStepsText.match(/ensures/gi) ||
                    converstionStepsText.match(/know/gi) || converstionStepsText.match(/for example/gi) ||
                    converstionStepsText.match(/prevent/gi) || converstionStepsText.match(/smoother/gi) ||
                    converstionStepsText.match(/glued/gi) || converstionStepsText.match(/become/gi) ||

                    converstionStepsText.match(/mobile/gi) || converstionStepsText.match(/However/gi) ||
                    converstionStepsText.match(/useful/gi) || converstionStepsText.match(/more/gi)
                ) {
                    await playScript("Okey. That was about section 1. Thanks.");
                    await sendSpeakingtextToBackend(recordedText);
                    conditionsDependsOnUserSpeech(6)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Is there any technology you don't like?");
                    converstionSteps--;
                }


            }


        }

        console.log("converstionStepsText");
        console.log(converstionStepsText);
        converstionStepsText = "";
    }
