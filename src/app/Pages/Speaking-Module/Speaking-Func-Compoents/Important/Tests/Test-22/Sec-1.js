let converstionSteps = 0;

export async function Test22Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {

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

                        await playScript("Okey. Lets talk about Chocolate. How often do you eat chocolate?");
                        setSampleAns(["I do not eat chocolate very often. I eat chocolate once or twice a month. Usually I like dark chocolate, which is not very sweet. "]);
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
                        await playScript("Okey. Lets talk about Chocolate. How often do you eat chocolate?");
                        setSampleAns(["I do not eat chocolate very often. I eat chocolate once or twice a month. Usually I like dark chocolate, which is not very sweet. "]);
                        conditionsDependsOnUserSpeech(1)
                    }
                }
            }

            if (converstionSteps == 4) {

                if (converstionStepsText.length < 10) {
                    await smallTalkError("Okey. Lets talk about Chocolate. How often do you eat chocolate?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Okey. Lets talk about Chocolate. How often do you eat chocolate?");
                    converstionSteps--;
                } else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/Chocolate/gi) || converstionStepsText.match(/often/gi) ||
                    converstionStepsText.match(/eat/gi) || converstionStepsText.match(/yet/gi) ||
                    converstionStepsText.match(/interest/gi) || converstionStepsText.match(/once/gi) ||
                    converstionStepsText.match(/Usually/gi) || converstionStepsText.match(/dark/gi) ||
                    converstionStepsText.match(/sweet/gi)
                ) {
                    await playScript("Okey. What’s your favorite flavor if have? ");
                    setSampleAns([`My favorite flavor is Cadbury’s dark delight.`])
                    conditionsDependsOnUserSpeech(2)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Okey. Lets talk about Chocolate. How often do you eat chocolate?");
                    converstionSteps--;
                }


            } else if (converstionSteps == 5) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("What’s your favorite flavor if have? ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. What’s your favorite flavor if have?  ");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/favourite/gi) || converstionStepsText.match(/favorite/gi) ||
                    converstionStepsText.match(/do/gi) || converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/have/gi) || converstionStepsText.match(/because/gi) ||
                    converstionStepsText.match(/suitable/gi) ||
                    converstionStepsText.match(/interest/gi) || converstionStepsText.match(/other/gi) ||
                    converstionStepsText.match(/Cadbury/gi) || converstionStepsText.match(/chocolate/gi) ||
                    converstionStepsText.match(/dark/gi) || converstionStepsText.match(/delight/gi)
                ) {
                    await playScript("ls chocolate expensive in your country?");
                    setSampleAns([`Yes chocolate is expensive in my country, especially the chocolate of foreign brands, which is available 
                                    here.`])
                    conditionsDependsOnUserSpeech(3)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. What’s your favorite flavor if have?  ");
                    converstionSteps--;
                }



            } else if (converstionSteps == 6) {

                if (converstionStepsText.length < 10) {
                    await smallTalkError("ls chocolate expensive in India?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. ls chocolate expensive in India?");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/love/gi) || converstionStepsText.match(/like/gi) ||
                    converstionStepsText.match(/favorite/gi) || converstionStepsText.match(/chocolate/gi) ||
                    converstionStepsText.match(/my country/gi) || converstionStepsText.match(/country/gi) ||
                    converstionStepsText.match(/very/gi) || converstionStepsText.match(/expensive/gi) || converstionStepsText.match(/comfortable/gi) || converstionStepsText.match(/foreign/gi) || converstionStepsText.match(/brand/gi) || converstionStepsText.match(/available/gi)
                ) {
                    await playScript("When was the first time you ate chocolate?  ");
                    setSampleAns([`I don’t remember exactly, but I have been eating chocolate since I was very small.`])
                    conditionsDependsOnUserSpeech(4)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. ls chocolate expensive in India?");
                    converstionSteps--;
                }

                //question7..

            } else if (converstionSteps == 7) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" When was the first time you ate chocolate?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. When was the first time you ate chocolate?  ");
                    converstionSteps--;
                } else if (
                    converstionStepsText.match(/was/gi) || converstionStepsText.match(/time/gi) ||
                    converstionStepsText.match(/place/gi) || converstionStepsText.match(/better/gi) ||
                    converstionStepsText.match(/than/gi) || converstionStepsText.match(/time/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/chocolate/gi) ||

                    converstionStepsText.match(/lot/gi) || converstionStepsText.match(/little/gi) ||
                    converstionStepsText.match(/interset/gi) || converstionStepsText.match(/remember/gi) ||
                    converstionStepsText.match(/do/gi) ||
                    converstionStepsText.match(/little/gi) ||
                    converstionStepsText.match(/very/gi) || converstionStepsText.match(/small/gi) ||
                    converstionStepsText.match(/been/gi)
                ) {
                    await playScript("Okey. So,  ls chocolate popular in your country?");
                    setSampleAns([`Yes, chocolate is very popular in my country. We can get all varieties of deshi and imported chocolate. `])
                    conditionsDependsOnUserSpeech(5)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  When was the first time you ate chocolate?");
                    converstionSteps--;
                }

            }

            else if (converstionSteps == 8) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("ls chocolate popular in your country?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. ls chocolate popular in your country?");
                    converstionSteps--;
                } else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/place/gi) || converstionStepsText.match(/chocolate/gi) ||
                    converstionStepsText.match(/than/gi) || converstionStepsText.match(/other/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/variet/gi) ||
                    converstionStepsText.match(/quite/gi) || converstionStepsText.match(/imported/gi)
                ) {
                    await playScript("Okey. can you explain Why is dark chocolate considered healthier than milk chocolate?");
                    setSampleAns([`Dark chocolate is considered healthier because it contains a higher percentage of cocoa, which is rich in antioxidants like flavonoids. These compounds help improve heart health by reducing blood pressure and improving blood flow. Dark chocolate also has less sugar and fat compared to milk chocolate, making it a better option for those looking to reduce their sugar intake.`])
                    conditionsDependsOnUserSpeech(6)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. ls chocolate popular in your country?");
                    converstionSteps--;
                }


            }
            //Quest---9
            else if (converstionSteps == 9) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("can you explain Why is dark chocolate considered healthier than milk chocolate?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. can you explain Why is dark chocolate considered healthier than milk chocolate?");
                    converstionSteps--;
                } else if (
                    converstionStepsText.match(/no/gi) || converstionStepsText.match(/yes/gi) ||
                    converstionStepsText.match(/dark/gi) || converstionStepsText.match(/better/gi) ||
                    converstionStepsText.match(/than/gi) || converstionStepsText.match(/considered/gi) ||
                    converstionStepsText.match(/healthier/gi) || converstionStepsText.match(/chocolate/gi) ||

                    converstionStepsText.match(/because/gi) || converstionStepsText.match(/higher/gi) ||
                    converstionStepsText.match(/percentage/gi) || converstionStepsText.match(/cocoa/gi) ||
                    converstionStepsText.match(/usually/gi) || converstionStepsText.match(/antioxidants/gi) ||

                    converstionStepsText.match(/heart/gi) || converstionStepsText.match(/pressure/gi) ||
                    converstionStepsText.match(/blood/gi) || converstionStepsText.match(/sugar/gi) ||
                    converstionStepsText.match(/reduce/gi) || converstionStepsText.match(/happy/gi)
                ) {
                    await playScript("Okey. That was about section 1. Thanks.");
                    await sendSpeakingtextToBackend(recordedText);
                    conditionsDependsOnUserSpeech(7)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  can you explain Why is dark chocolate considered healthier than milk chocolate?");
                    converstionSteps--;
                }


            }

        }

        console.log("converstionStepsText");
        console.log(converstionStepsText);
        converstionStepsText = "";
    }
