let converstionSteps = 0;

export async function Test28Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {

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

                    await playScript("Okey. Lets talk about Singing. Do you like singing? Why? ");
                    setSampleAns(["I like singing but in private because I don’t have a nice voice."]);
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
                    await playScript("Okey. Lets talk about Singing. Do you like singing? Why? ");
                    setSampleAns(["I like singing but in private because I don’t have a nice voice."]);
                    conditionsDependsOnUserSpeech(1)
                }
            }
        }
        if (converstionSteps == 4) {

            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you like singing? Why?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Do you like singing? Why?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/love/gi) || converstionStepsText.match(/like/gi) ||
                converstionStepsText.match(/singing/gi) || converstionStepsText.match(/sign/gi) ||
                converstionStepsText.match(/private/gi) || converstionStepsText.match(/nice/gi) ||
                converstionStepsText.match(/voice/gi) || converstionStepsText.match(/favourite/gi)
            ) {
                await playScript("Okey. Have you ever learnt how to sing?");
                setSampleAns([`No singing is just about having fun for me. I have never taken any lessons for singing. I just 
                                    sing some popular movie songs.`])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you like singing? Why?");
                converstionSteps--;
            }
            //Question--5
        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Have you ever learnt how to sing?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Have you ever learnt how to sing?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/Do/gi) ||
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/often/gi) || converstionStepsText.match(/learnt/gi) ||
                converstionStepsText.match(/sing/gi) ||
                converstionStepsText.match(/just/gi) || converstionStepsText.match(/about/gi) ||
                converstionStepsText.match(/never/gi) || converstionStepsText.match(/take/gi) ||
                converstionStepsText.match(/therefore/gi) || converstionStepsText.match(/lesson/gi) ||
                converstionStepsText.match(/popular/gi) || converstionStepsText.match(/movie/gi)
            ) {
                await playScript("So, Who do you want to sing for? ");
                setSampleAns([`Again, singing is about having fun. It makes me feel energetic and active somehow. `])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Have you ever learnt how to sing?");
                converstionSteps--;
            }
            //question-6
        } else if (converstionSteps == 6) {

            if (converstionStepsText.length < 10) {
                await smallTalkError(" Who do you want to sing for? ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Who do you want to sing for? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/usually/gi) || converstionStepsText.match(/when/gi) ||
                converstionStepsText.match(/want/gi) || converstionStepsText.match(/sing/gi) ||
                converstionStepsText.match(/for/gi) || converstionStepsText.match(/Again/gi) ||
                converstionStepsText.match(/having/gi) || converstionStepsText.match(/fun/gi) ||
                converstionStepsText.match(/make/gi) || converstionStepsText.match(/feel/gi) ||
                converstionStepsText.match(/energetic/gi) || converstionStepsText.match(/somehow/gi)
            ) {
                await playScript("Ok, Do you think singing can bring happiness to people? ");
                setSampleAns([`Yes, I think singing can make us happy. I don’t know how but I think singing relieves stress. I 
                                think singing takes away our focus from our worries.`])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Who do you want to sing for? ");
                converstionSteps--;
            }
            //question7..
        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you think singing can bring happiness to people? ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Do you think singing can bring happiness to people? ");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/singing/gi) ||
                converstionStepsText.match(/bring/gi) || converstionStepsText.match(/happ/gi) ||
                converstionStepsText.match(/people/gi) || converstionStepsText.match(/make/gi) ||
                converstionStepsText.match(/relieve/gi) ||
                converstionStepsText.match(/stress/gi) || converstionStepsText.match(/focus/gi) ||
                converstionStepsText.match(/worries/gi)
            ) {
                await playScript("So, What kind of songs do you like to sing?");
                setSampleAns([`I like to sing upbeat songs, especially popular movie tracks or old classics. They are fun, easy to remember, and always lift my mood.`])
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you think singing can bring happiness to people? ");
                converstionSteps--;
            }
        }
        //Question--8
        else if (converstionSteps == 8) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What kind of songs do you like to sing?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. What kind of songs do you like to sing?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/kind/gi) || converstionStepsText.match(/songs/gi) ||
                converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                converstionStepsText.match(/upbeat/gi) || converstionStepsText.match(/popular/gi) ||

                converstionStepsText.match(/especially/gi) || converstionStepsText.match(/movie/gi) ||
                converstionStepsText.match(/variety/gi) || converstionStepsText.match(/track/gi) ||

                converstionStepsText.match(/classic/gi) || converstionStepsText.match(/fun/gi) ||
                converstionStepsText.match(/easy/gi) || converstionStepsText.match(/remember/gi) ||
                converstionStepsText.match(/alway/gi) || converstionStepsText.match(/mood/gi)
            ) {
                await playScript("Okey. That was about section 1. Thanks.");
                await sendSpeakingtextToBackend(recordedText);
                conditionsDependsOnUserSpeech(6)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What kind of songs do you like to sing?");
                converstionSteps--;
            }


        }


    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";
}

