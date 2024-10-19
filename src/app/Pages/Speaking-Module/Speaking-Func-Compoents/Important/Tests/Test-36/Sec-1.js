let converstionSteps = 0;

export async function Test36Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {

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

                    await playScript("Okey. Lets talk about Books. Do you often read books? When? ");
                    setSampleAns(["I do read books and I don’t read as often as I did in the past. Nowadays, I don’t find time to read as much as I did in the past. "]);
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
                    await playScript("Okey. Lets talk about Books. Do you often read books? When? ");
                    setSampleAns(["I do read books and I don’t read as often as I did in the past. Nowadays, I don’t find time to read as much as I did in the past. "]);
                    conditionsDependsOnUserSpeech(1)
                }
            }
        }
        if (converstionSteps == 4) {

            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you often read books? When? ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Do you often read books? When? ");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/usually/gi) ||
                converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                converstionStepsText.match(/no/gi) || converstionStepsText.match(/Books/gi) ||
                converstionStepsText.match(/favourite/gi) || converstionStepsText.match(/When/gi) ||
                converstionStepsText.match(/often/gi) || converstionStepsText.match(/Nowadays/gi) ||
                converstionStepsText.match(/past/gi)
            ) {
                await playScript("Okey. Are your reading habits different than in the past?");
                setSampleAns([`I think there is one major difference. In my childhood, I didn’t have any stress and worries and I 
                                    used to read books in one go, without stopping. But, nowadays I am barely able to finish a book 
                                    in a month. Also, I have gradually shifted from reading fiction to nonfiction. `])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you often read books? When? ");
                converstionSteps--;
            }
            //Question--5
        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Are your reading habits different than in the past?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Are your reading habits different than in the past? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/read/gi) || converstionStepsText.match(/different/gi) ||
                converstionStepsText.match(/habit/gi) || converstionStepsText.match(/past/gi) ||
                converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/major/gi) || converstionStepsText.match(/childhood/gi) ||
                converstionStepsText.match(/friend/gi) ||
                converstionStepsText.match(/stress/gi) || converstionStepsText.match(/worrie/gi) ||
                converstionStepsText.match(/without/gi) || converstionStepsText.match(/book/gi) ||
                converstionStepsText.match(/gradually/gi)
            ) {
                await playScript("So, Have you ever read a book that has been adapted into film?");
                setSampleAns([`Yes, I have read many such novels. I think Harry Potter is the most famous among the ones that 
                                        I have read. `])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Are your reading habits different than in the past?");
                converstionSteps--;
            }
            //question-6
        } else if (converstionSteps == 6) {

            if (converstionStepsText.length < 10) {
                await smallTalkError("Have you ever read a book that has been adapted into film?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Have you ever read a book that has been adapted into film?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/Have/gi) ||
                converstionStepsText.match(/book/gi) || converstionStepsText.match(/ever/gi) ||
                converstionStepsText.match(/adapted/gi) || converstionStepsText.match(/film/gi) ||
                converstionStepsText.match(/novel/gi) ||
                converstionStepsText.match(/while/gi) || converstionStepsText.match(/famous/gi)
            ) {
                await playScript("Ok, What do you prefer reading books and watching movies?");
                setSampleAns([`I prefer watching movies these days because I am not able to find the time to read books. 
                                However, I also feel that some movies are not able to do justice to the books. So, it really depends 
                                upon the adaptation`])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.Have you ever read a book that has been adapted into film?");
                converstionSteps--;
            }
            //question7..
        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What do you prefer reading books and watching movies?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. What do you prefer reading books and watching movies?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/yes/gi) ||
                converstionStepsText.match(/no/gi) || converstionStepsText.match(/important/gi) ||
                converstionStepsText.match(/prefer/gi) || converstionStepsText.match(/read/gi) ||
                converstionStepsText.match(/watch/gi) || converstionStepsText.match(/movie/gi) ||
                converstionStepsText.match(/because/gi) ||
                converstionStepsText.match(/depend/gi) ||
                converstionStepsText.match(/special/gi) ||
                converstionStepsText.match(/families/gi) ||
                converstionStepsText.match(/occasion/gi)
            ) {
                await playScript("So, What kind of books do you like to read?");
                setSampleAns([`I enjoy reading non-fiction books, especially biographies and self-development books. They inspire me and help me learn new things.`])
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What do you prefer reading books and watching movies?");
                converstionSteps--;
            }
        }
        //Question--8
        else if (converstionSteps == 8) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What kind of books do you like to read?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. What kind of books do you like to read?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/prefer/gi) || converstionStepsText.match(/kind/gi) ||
                converstionStepsText.match(/book/gi) || converstionStepsText.match(/like/gi) ||
                converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||

                converstionStepsText.match(/read/gi) || converstionStepsText.match(/enjoy/gi) ||
                converstionStepsText.match(/especially/gi) || converstionStepsText.match(/dinner/gi) ||
                converstionStepsText.match(/get-together/gi) || converstionStepsText.match(/personal/gi) ||
                converstionStepsText.match(/biographies/gi) ||
                converstionStepsText.match(/inspire/gi)
            ) {
                await playScript("Okey. That was about section 1. Thanks.");
                await sendSpeakingtextToBackend(recordedText);
                conditionsDependsOnUserSpeech(6)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What kind of books do you like to read?");
                converstionSteps--;
            }


        }


    }
    converstionStepsText = "";
}

