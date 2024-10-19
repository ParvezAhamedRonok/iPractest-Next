let converstionSteps = 0;

export async function Test39Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {

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

                    await playScript("Okey. Lets talk about Computers.  In what conditions would you use a computer?");
                    setSampleAns(["I think nowadays a computer has become an integral part of our lives, so much so we don’t even realize how often and when we use it. I use my computer throughout the day, to check my mail, to Google any information, to have online meetings or to make reservations for an air or train booking, reserve a table at a restaurant, book a hotel for a holiday or make payments for certain things "]);
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
                    await playScript("Okey. Lets talk about Computers.  In what conditions would you use a computer?");
                    setSampleAns(["I think nowadays a computer has become an integral part of our lives, so much so we don’t even realize how often and when we use it. I use my computer throughout the day, to check my mail, to Google any information, to have online meetings or to make reservations for an air or train booking, reserve a table at a restaurant, book a hotel for a holiday or make payments for certain things "]);
                    conditionsDependsOnUserSpeech(1)
                }
            }
        }
        if (converstionSteps == 4) {

            if (converstionStepsText.length < 10) {
                await smallTalkError(" In what conditions would you use a computer?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.  In what conditions would you use a computer?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/Computer/gi) || converstionStepsText.match(/usually/gi) ||
                converstionStepsText.match(/like/gi) || converstionStepsText.match(/condition/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/will/gi) ||
                converstionStepsText.match(/use/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/often/gi) || converstionStepsText.match(/nowadays/gi) ||
                converstionStepsText.match(/meet/gi) ||
                converstionStepsText.match(/live/gi) || converstionStepsText.match(/realize/gi) ||
                converstionStepsText.match(/certain/gi)
            ) {
                await playScript("Okey. When was the first time you used a computer?");
                setSampleAns([` The first time I used a computer was when I was at school.`])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  In what conditions would you use a computer?");
                converstionSteps--;
            }
            //Question--5
        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("When was the first time you used a computer?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. When was the first time you used a computer?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/When/gi) || converstionStepsText.match(/usually/gi) ||
                converstionStepsText.match(/first/gi) || converstionStepsText.match(/time/gi) ||
                converstionStepsText.match(/computer/gi) || converstionStepsText.match(/was/gi) ||
                converstionStepsText.match(/school/gi) ||
                converstionStepsText.match(/child/gi) || converstionStepsText.match(/college/gi) ||
                converstionStepsText.match(/friend/gi) ||
                converstionStepsText.match(/kid/gi) || converstionStepsText.match(/family/gi) ||
                converstionStepsText.match(/visit/gi)
            ) {
                await playScript("So, What would your life be like without computers? ");
                setSampleAns([`Nowadays it’s difficult to imagine life without computers, there’ll be low connectivity. One would need 
                                    so many other things to replace it like a camera, a dictionary, an atlas, a calculator, a watch etc. 
                                    There’ll be no doorstep delivery, no online classes, no face to face long distance conversations. The 
                                    list is endless. `])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. When was the first time you used a computer?");
                converstionSteps--;
            }
            //question-6
        } else if (converstionSteps == 6) {

            if (converstionStepsText.length < 10) {
                await smallTalkError("What would your life be like without computers? ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. What would your life be like without computers? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/life/gi) ||
                converstionStepsText.match(/like/gi) || converstionStepsText.match(/without/gi) ||
                converstionStepsText.match(/computers/gi) || converstionStepsText.match(/Nowadays/gi) ||
                converstionStepsText.match(/difficult/gi) || converstionStepsText.match(/imagine/gi) ||
                converstionStepsText.match(/connectivity/gi) ||
                converstionStepsText.match(/replace/gi) || converstionStepsText.match(/calculator/gi)

                || converstionStepsText.match(/online/gi) ||
                converstionStepsText.match(/distance/gi)
            ) {
                await playScript("Ok,  In what conditions would it be difficult for you to use à computer?");
                setSampleAns([`When the internet is down or there’s no electricity.  `])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What would your life be like without computers? ?");
                converstionSteps--;
            }
            //question7..
        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" In what conditions would it be difficult for you to use à computer?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.  In what conditions would it be difficult for you to use à computer?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/condition/gi) ||
                converstionStepsText.match(/difficult/gi) || converstionStepsText.match(/use/gi) ||
                converstionStepsText.match(/computer/gi) || converstionStepsText.match(/internet/gi) ||
                converstionStepsText.match(/When/gi) || converstionStepsText.match(/down/gi) ||
                converstionStepsText.match(/electricity/gi)
            ) {
                await playScript("So, How do you think computers have changed the way we work?");
                setSampleAns([`Computers have made work faster and more efficient. Tasks like data processing, communication, and project management are much easier now, and people can collaborate from anywhere in the world.`])
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  In what conditions would it be difficult for you to use à computer?");
                converstionSteps--;
            }
        }
        //Question--8
        else if (converstionSteps == 8) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("How do you think computers have changed the way we work?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. How do you think computers have changed the way we work?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/computer/gi) ||
                converstionStepsText.match(/change/gi) || converstionStepsText.match(/work/gi) ||
                converstionStepsText.match(/like/gi) || converstionStepsText.match(/way/gi) ||

                converstionStepsText.match(/faster/gi) || converstionStepsText.match(/stay/gi) ||
                converstionStepsText.match(/efficient/gi) || converstionStepsText.match(/processs/gi) ||
                converstionStepsText.match(/avoid/gi) || converstionStepsText.match(/communication/gi) ||
                converstionStepsText.match(/management/gi) ||
                converstionStepsText.match(/collaborate/gi)
            ) {
                await playScript("Okey. That was about section 1. Thanks.");
                await sendSpeakingtextToBackend(recordedText);
                conditionsDependsOnUserSpeech(6)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. How do you think computers have changed the way we work?");
                converstionSteps--;
            }


        }


    }
    converstionStepsText = "";
}

