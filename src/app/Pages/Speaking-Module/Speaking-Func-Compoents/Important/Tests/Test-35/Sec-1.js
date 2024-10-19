let converstionSteps = 0;

export async function Test35Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {

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

                    await playScript("Okey. Lets talk about Birthday. What do you usually do on your birthday? ");
                    setSampleAns(["I normally get up early and then I go to the Gurudwara. Then I go out and watch a movie or visit a mall with my friends. In the evenings, I have dinner at a restaurant with my family."]);
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
                    await playScript("Okey. Lets talk about Birthday. What do you usually do on your birthday? ");
                    setSampleAns(["I normally get up early and then I go to the Gurudwara. Then I go out and watch a movie or visit a mall with my friends. In the evenings, I have dinner at a restaurant with my family."]);
                    conditionsDependsOnUserSpeech(1)
                }
            }
        }
        if (converstionSteps == 4) {

            if (converstionStepsText.length < 10) {
                await smallTalkError("What do you usually do on your birthday? ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. What do you usually do on your birthday?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/Birthday/gi) || converstionStepsText.match(/usually/gi) ||
                converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                converstionStepsText.match(/normally/gi) || converstionStepsText.match(/on/gi) ||
                converstionStepsText.match(/favourite/gi) || converstionStepsText.match(/friend/gi) ||
                converstionStepsText.match(/family/gi) || converstionStepsText.match(/restaurant/gi) ||
                converstionStepsText.match(/cake/gi)
            ) {
                await playScript("Okey. What did you do on your birthday when you were young?");
                setSampleAns([`When I was young, my parents used to throw a big party at home and invite all my friends and 
                                 relatives. I used to love opening gifts and cutting the cake. Now, I am not as excited.`])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What do you usually do on your birthday? ");
                converstionSteps--;
            }
            //Question--5
        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" What did you do on your birthday when you were young?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.  What did you do on your birthday when you were young? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/did/gi) || converstionStepsText.match(/birthday/gi) ||
                converstionStepsText.match(/on/gi) || converstionStepsText.match(/normally/gi) ||
                converstionStepsText.match(/was/gi) || converstionStepsText.match(/young/gi) ||
                converstionStepsText.match(/When/gi) ||
                converstionStepsText.match(/parent/gi) || converstionStepsText.match(/school/gi) ||
                converstionStepsText.match(/friend/gi) ||
                converstionStepsText.match(/invite/gi) || converstionStepsText.match(/relative/gi) ||
                converstionStepsText.match(/gift/gi)
            ) {
                await playScript("So, Do you think it is important for you to celebrate your birthday?  ");
                setSampleAns([`I think celebrating birthdays makes us feel special and important. It also gives an opportunity 
                                to meet with our loved ones and relatives.`])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.What did you do on your birthday when you were young?");
                converstionSteps--;
            }
            //question-6
        } else if (converstionSteps == 6) {

            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you think it is important for you to celebrate your birthday?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Do you think it is important for you to celebrate your birthday?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/important/gi) ||
                converstionStepsText.match(/celebrate/gi) || converstionStepsText.match(/birthday/gi) ||
                converstionStepsText.match(/make/gi) || converstionStepsText.match(/important/gi) ||
                converstionStepsText.match(/special/gi) ||
                converstionStepsText.match(/while/gi) || converstionStepsText.match(/opportunity/gi) ||
                converstionStepsText.match(/meet/gi) || converstionStepsText.match(/relative/gi) ||
                converstionStepsText.match(/love/gi)
            ) {
                await playScript("Ok, Whose birthday do you think is the most important to celebrate in your country?");
                setSampleAns([`I think one of the most important public birthdays we celebrate is [national figure or event, e.g., 'Independence Day leader's birthday']. It’s a national holiday, celebrated on [date]. Personally, people enjoy celebrating their children’s birthdays, which are always a special occasion for families.`])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you think it is important for you to celebrate your birthday?");
                converstionSteps--;
            }
            //question7..
        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Whose birthday do you think is the most important to celebrate in your country?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Whose birthday do you think is the most important to celebrate in your country?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/birthday/gi) ||
                converstionStepsText.match(/most/gi) || converstionStepsText.match(/important/gi) ||
                converstionStepsText.match(/celebrate/gi) || converstionStepsText.match(/country/gi) ||
                converstionStepsText.match(/public/gi) || converstionStepsText.match(/national/gi) ||
                converstionStepsText.match(/Independence/gi) ||
                converstionStepsText.match(/children/gi) ||
                converstionStepsText.match(/special/gi) ||
                converstionStepsText.match(/families/gi) ||
                converstionStepsText.match(/occasion/gi)
            ) {
                await playScript("So, How do you prefer to celebrate your friends' birthdays? ");
                setSampleAns([`I prefer small gatherings where we can hang out, maybe go for dinner or have a casual get-together at home. It’s more personal and fun to celebrate in a relaxed way.`])
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Whose birthday do you think is the most important to celebrate in your country? ");
                converstionSteps--;
            }
        }
        //Question--8
        else if (converstionSteps == 8) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("How do you prefer to celebrate your friends' birthdays?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. How do you prefer to celebrate your friends' birthdays?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/prefer/gi) || converstionStepsText.match(/celebrate/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/important/gi) ||
                converstionStepsText.match(/help/gi) || converstionStepsText.match(/friend/gi) ||

                converstionStepsText.match(/birthday/gi) || converstionStepsText.match(/small/gi) ||
                converstionStepsText.match(/gathering/gi) || converstionStepsText.match(/dinner/gi) ||
                converstionStepsText.match(/get-together/gi) || converstionStepsText.match(/personal/gi) ||
                converstionStepsText.match(/relax/gi)
            ) {
                await playScript("Okey. That was about section 1. Thanks.");
                await sendSpeakingtextToBackend(recordedText);
                conditionsDependsOnUserSpeech(6)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. How do you prefer to celebrate your friends' birthdays?");
                converstionSteps--;
            }


        }


    }
    converstionStepsText = "";
}
