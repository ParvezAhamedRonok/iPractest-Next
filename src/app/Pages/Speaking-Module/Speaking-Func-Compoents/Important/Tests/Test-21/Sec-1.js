let converstionSteps = 0;


export async function Test21Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {
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
                    await playScript("Okey. Lets talk about Study or Work. What work do you do?");
                    setSampleAns(["Personal Answer as you want. Like I am working as a law firm."]);
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
                    await playScript("Okey. So, Are you feeling well??");
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
                    await playScript("Okey. Lets talk about Study or Work. What work do you do?");
                    setSampleAns(["Personal Answer as you want. Like I am working as a law firm. "]);
                    conditionsDependsOnUserSpeech(1)
                }
            }
        }

        if (converstionSteps == 4) {

            if (converstionStepsText.length < 10) {
                await smallTalkError("What work do you do?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. What work do you do?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/work/gi) || converstionStepsText.match(/study/gi) ||
                converstionStepsText.match(/studies/gi) || converstionStepsText.match(/yet/gi) ||
                converstionStepsText.match(/interest/gi)
            ) {
                await playScript("Okey. Why did you choose to do that type of work (or that job)? ");
                setSampleAns([`I chose that work, because I was interested in it.`])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.What work do you do?");
                converstionSteps--;
            }


        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Why did you choose to do that type of work (or that job)?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Why did you choose to do that type of work (or that job)? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/do/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/work/gi) || converstionStepsText.match(/because/gi) ||
                converstionStepsText.match(/suitable/gi) ||
                converstionStepsText.match(/interest/gi) || converstionStepsText.match(/other/gi) ||
                converstionStepsText.match(/relax/gi) || converstionStepsText.match(/job/gi) ||
                converstionStepsText.match(/choose/gi) || converstionStepsText.match(/type/gi)
            ) {
                await playScript("So, Do you like your job? ");
                setSampleAns([`Yes, I like my job. It is very interesting.  `])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.Why did you choose to do that type of work (or that job)? ");
                converstionSteps--;
            }



        } else if (converstionSteps == 6) {

            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you like your job? ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.  Do you like your job? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/love/gi) || converstionStepsText.match(/like/gi) ||
                converstionStepsText.match(/favorite/gi) || converstionStepsText.match(/job/gi) ||
                converstionStepsText.match(/place/gi) || converstionStepsText.match(/work/gi) ||
                converstionStepsText.match(/very/gi) || converstionStepsText.match(/plesent/gi) || converstionStepsText.match(/comfortable/gi)
            ) {
                await playScript("Okey. Is it very interesting?  ");
                setSampleAns([`Yes, it is very interesting.  `])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you like your job?  ");
                converstionSteps--;
            }

            //question7..

        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Is it very interesting?  ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Is it very interesting?  ");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/place/gi) || converstionStepsText.match(/better/gi) ||
                converstionStepsText.match(/than/gi) || converstionStepsText.match(/other/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/very/gi) ||
                converstionStepsText.match(/lot/gi) || converstionStepsText.match(/little/gi) ||
                converstionStepsText.match(/interset/gi) || converstionStepsText.match(/so much/gi) ||
                converstionStepsText.match(/me/gi)
            ) {
                await playScript("Okey. So, What do you do when you feel stressed at work? ");
                setSampleAns([`I usually take a short walk or do some deep breathing exercises. It helps me reset and approach tasks with a clearer mind.`])
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Is it very interesting? ");
                converstionSteps--;
            }

        }

        else if (converstionSteps == 8) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What do you do when you feel stressed at work? ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. What do you do when you feel stressed at work?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/do/gi) || converstionStepsText.match(/when/gi) ||
                converstionStepsText.match(/place/gi) || converstionStepsText.match(/better/gi) ||
                converstionStepsText.match(/than/gi) || converstionStepsText.match(/other/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/feel/gi) ||

                converstionStepsText.match(/quite/gi) || converstionStepsText.match(/stress/gi) ||
                converstionStepsText.match(/which/gi) || converstionStepsText.match(/work/gi) ||
                converstionStepsText.match(/usually/gi) || converstionStepsText.match(/some/gi) ||

                converstionStepsText.match(/deep/gi) || converstionStepsText.match(/exercises/gi) ||
                converstionStepsText.match(/breathing/gi) || converstionStepsText.match(/reset/gi) ||
                converstionStepsText.match(/approach/gi) || converstionStepsText.match(/mind/gi)
            ) {
                await playScript("Okey. Do you miss being a student?");
                setSampleAns([`Yes, I miss being a student. Now, when I look back I realize that they were the happiest 
                          days of my life.`])
                conditionsDependsOnUserSpeech(6)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  What do you do when you feel stressed at work?");
                converstionSteps--;
            }


        }
        //Quest---9
        else if (converstionSteps == 9) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you miss being a student?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Do you miss being a student?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/do/gi) || converstionStepsText.match(/yes/gi) ||
                converstionStepsText.match(/place/gi) || converstionStepsText.match(/better/gi) ||
                converstionStepsText.match(/than/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/miss/gi) || converstionStepsText.match(/when/gi) ||

                converstionStepsText.match(/being/gi) || converstionStepsText.match(/student/gi) ||
                converstionStepsText.match(/realize/gi) || converstionStepsText.match(/back/gi) ||
                converstionStepsText.match(/usually/gi) || converstionStepsText.match(/some/gi) ||

                converstionStepsText.match(/deep/gi) || converstionStepsText.match(/exercises/gi) ||
                converstionStepsText.match(/breathing/gi) || converstionStepsText.match(/moment/gi) ||
                converstionStepsText.match(/approach/gi) || converstionStepsText.match(/happy/gi)
            ) {
                await playScript("Okey. What subject(s) are you studying?");
                setSampleAns([`I’ve just completed my senior secondary in commerce stream. Now I wish to go abroad 
                         for my higher education`])
                conditionsDependsOnUserSpeech(7)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Do you miss being a student?");
                converstionSteps--;
            }


        }
        //ques-10--
        else if (converstionSteps == 10) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What subject(s) are you studying?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. What subject(s) are you studying?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/do/gi) || converstionStepsText.match(/yes/gi) ||
                converstionStepsText.match(/place/gi) || converstionStepsText.match(/better/gi) ||
                converstionStepsText.match(/subject/gi) || converstionStepsText.match(/studied/gi) ||
                converstionStepsText.match(/study/gi) || converstionStepsText.match(/when/gi) ||

                converstionStepsText.match(/being/gi) || converstionStepsText.match(/student/gi) ||
                converstionStepsText.match(/complete/gi) || converstionStepsText.match(/senior/gi) ||
                converstionStepsText.match(/usually/gi) || converstionStepsText.match(/secondary/gi) ||

                converstionStepsText.match(/commerce/gi) || converstionStepsText.match(/science/gi) ||
                converstionStepsText.match(/art/gi) || converstionStepsText.match(/law/gi) ||
                converstionStepsText.match(/computer/gi) || converstionStepsText.match(/abroad/gi) ||
                converstionStepsText.match(/higher/gi) || converstionStepsText.match(/education/gi)
            ) {
                await playScript("Okey. That was about section 1. Thanks.");
                await sendSpeakingtextToBackend(recordedText);
                conditionsDependsOnUserSpeech(8)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What subject(s) are you studying?");
                converstionSteps--;
            }


        }
    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";
    }

