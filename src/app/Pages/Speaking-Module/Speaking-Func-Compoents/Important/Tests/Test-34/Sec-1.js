let converstionSteps = 0;
export async function Test34Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {
    
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

                        await playScript("Okey. Lets talk about Geography. Do you like geography? ");
                        setSampleAns(["Yes, I like geography. In fact, it was one of my favourite subjects when I was in school."]);
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
                        await playScript("Okey. Lets talk about Geography. Do you like geography? ");
                        setSampleAns(["Yes, I like geography. In fact, it was one of my favourite subjects when I was in school."]);

                        conditionsDependsOnUserSpeech(1)
                    }
                }
            }
            if (converstionSteps == 4) {

                if (converstionStepsText.length < 10) {
                    await smallTalkError("Do you like geography? ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Do you like geography? ");
                    converstionSteps--;
                } else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                    converstionStepsText.match(/Geography/gi) || converstionStepsText.match(/fact/gi) ||
                    converstionStepsText.match(/favourite/gi) || converstionStepsText.match(/subject/gi) ||
                    converstionStepsText.match(/was/gi)
                ) {
                    await playScript("Okey. Have you ever studied geography at school? ");
                    setSampleAns([`Yes, I studied geography when I was at school.`])
                    conditionsDependsOnUserSpeech(2)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you like geography? ");
                    converstionSteps--;
                }
                //Question--5
            } else if (converstionSteps == 5) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Have you ever studied geography at school? ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.  Have you ever studied geography at school? ");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/did/gi) || converstionStepsText.match(/normally/gi) ||
                    converstionStepsText.match(/was/gi) || converstionStepsText.match(/hhave/gi) ||
                    converstionStepsText.match(/studied/gi) ||
                    converstionStepsText.match(/geography/gi) || converstionStepsText.match(/school/gi) ||
                    converstionStepsText.match(/when/gi)
                ) {
                    await playScript("So, Are you good at reading a map?  ");
                    setSampleAns([`Well, I don’t think I am good at reading maps, but I am able to read them decently, so I don’t 
                                    have trouble while I am travelling. `])
                    conditionsDependsOnUserSpeech(3)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Have you ever studied geography at school? ");
                    converstionSteps--;
                }
                //question-6
            } else if (converstionSteps == 6) {

                if (converstionStepsText.length < 10) {
                    await smallTalkError("Are you good at reading a map? ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Are you good at reading a map? ");
                    converstionSteps--;
                }
                else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/good/gi) || converstionStepsText.match(/read/gi) ||
                    converstionStepsText.match(/map/gi) || converstionStepsText.match(/able/gi) ||
                    converstionStepsText.match(/decently/gi) || converstionStepsText.match(/trouble/gi) ||
                    converstionStepsText.match(/think/gi) ||
                    converstionStepsText.match(/while/gi) || converstionStepsText.match(/travel/gi) ||
                    converstionStepsText.match(/time/gi)
                ) {
                    await playScript("Ok, Would you visit a country because of its geographical location? ");
                    setSampleAns([`Yes, I love visiting coastal countries. I want to visit Maldives and Seychelles when I grow older. `])
                    conditionsDependsOnUserSpeech(4)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Are you good at reading a map? ");
                    converstionSteps--;
                }
                //question7..
            } else if (converstionSteps == 7) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Would you visit a country because of its geographical location? ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Would you visit a country because of its geographical location? ");
                    converstionSteps--;
                } else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/Would/gi) ||
                    converstionStepsText.match(/Would/gi) || converstionStepsText.match(/will/gi) ||
                    converstionStepsText.match(/country/gi) || converstionStepsText.match(/geographical/gi) ||
                    converstionStepsText.match(/location/gi) ||
                    converstionStepsText.match(/love/gi) ||
                    converstionStepsText.match(/like/gi) ||
                    converstionStepsText.match(/grow/gi) ||
                    converstionStepsText.match(/older/gi)
                ) {
                    await playScript("So, Do you think it’s important to learn geography? ");
                    setSampleAns([`es, I think it’s very important. Geography helps us understand the world, different cultures, and how natural environments affect our lives.`])
                    conditionsDependsOnUserSpeech(5)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Would you visit a country because of its geographical location? ");
                    converstionSteps--;
                }
            }
            //Question--8
            else if (converstionSteps == 8) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Do you think it’s important to learn geography?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.  Do you think it’s important to learn geography?");
                    converstionSteps--;
                } else if (
                    converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                    converstionStepsText.match(/think/gi) || converstionStepsText.match(/important/gi) ||
                    converstionStepsText.match(/help/gi) || converstionStepsText.match(/geography/gi) ||

                    converstionStepsText.match(/plan/gi) || converstionStepsText.match(/understand/gi) ||
                    converstionStepsText.match(/different/gi) || converstionStepsText.match(/cultures/gi) ||
                    converstionStepsText.match(/natural/gi) || converstionStepsText.match(/affect/gi) ||
                    converstionStepsText.match(/lives/gi)
                ) {
                    await playScript("Okey. That was about section 1. Thanks.");
                    await sendSpeakingtextToBackend(recordedText);
                    conditionsDependsOnUserSpeech(6)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you think it’s important to learn geography?");
                    converstionSteps--;
                }


            }


        }
        converstionStepsText = "";
    }
