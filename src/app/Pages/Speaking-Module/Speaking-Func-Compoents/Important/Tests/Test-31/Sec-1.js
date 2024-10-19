let converstionSteps = 0;

export async function Test31Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {

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

                    await playScript("Okey. Lets talk about Names. Does your name have any special meaning?");
                    setSampleAns(["My name is Indroop. According to Hindu mythology, my name means an Avatar of Lord Inder."]);
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
                    await playScript("Okey. Lets talk about Names. Does your name have any special meaning?");
                    setSampleAns(["My name is Indroop. According to Hindu mythology, my name means an Avatar of Lord Inder."]);
                    conditionsDependsOnUserSpeech(1)
                }
            }
        }
        if (converstionSteps == 4) {

            if (converstionStepsText.length < 10) {
                await smallTalkError("Does your name have any special meaning?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Does your name have any special meaning?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/Name/gi) || converstionStepsText.match(/have/gi) ||
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/usually/gi) ||
                converstionStepsText.match(/no/gi) || converstionStepsText.match(/special/gi) ||
                converstionStepsText.match(/meaning/gi)
            ) {
                await playScript("Okey. How would you choose names for your next generation?  ");
                setSampleAns([`I think traditionally, people used to take the first letter for the name from the holy book, and 
                                    then the elder people used to suggest a name beginning with that letter. I would do the same, 
                                    but I would try to keep a modern and unique name.`])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Does your name have any special meaning?");
                converstionSteps--;
            }
            //Question--5
        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("How would you choose names for your next generation? ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. How would you choose names for your next generation? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/will/gi) ||
                converstionStepsText.match(/choose/gi) || converstionStepsText.match(/names/gi) ||
                converstionStepsText.match(/often/gi) || converstionStepsText.match(/next/gi) ||
                converstionStepsText.match(/generation/gi) ||
                converstionStepsText.match(/nowadays/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/young/gi) || converstionStepsText.match(/use/gi) ||
                converstionStepsText.match(/traditionally/gi) || converstionStepsText.match(/holy/gi) ||
                converstionStepsText.match(/suggest/gi)
            ) {
                await playScript("So, Are there any differences between how Indians name their children now and in the past?");
                setSampleAns([`I think nowadays, people don’t follow many rituals and traditions, and names are kept without 
                                        following any rules. `])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. How would you choose names for your next generation? ");
                converstionSteps--;
            }
            //question-6
        } else if (converstionSteps == 6) {

            if (converstionStepsText.length < 10) {
                await smallTalkError(" Are there any differences between how Indians name their children now and in the past?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Are there any differences between how Indians name their children now and in the past?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/no/gi) || converstionStepsText.match(/yes/gi) ||
                converstionStepsText.match(/there/gi) || converstionStepsText.match(/differences/gi) ||
                converstionStepsText.match(/between/gi) || converstionStepsText.match(/children/gi) ||
                converstionStepsText.match(/now/gi) || converstionStepsText.match(/past/gi) ||
                converstionStepsText.match(/think/gi)
            ) {
                await playScript("Ok,  Does anyone in your family have the same name as you?  ");
                setSampleAns([`No, I am the only one in my family with this name. I think my parents wanted to keep a unique 
                                    name for me and so they kept it Indroop. `])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Are there any differences between how Indians name their children now and in the past? ");
                converstionSteps--;
            }
            //question7..
        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Does anyone in your family have the same name as you? ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.  Does anyone in your family have the same name as you? ");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/anyone/gi) ||
                converstionStepsText.match(/family/gi) || converstionStepsText.match(/same/gi) ||
                converstionStepsText.match(/parents/gi) || converstionStepsText.match(/keep/gi) ||
                converstionStepsText.match(/unique/gi) ||
                converstionStepsText.match(/child/gi)
            ) {
                await playScript("So, Are there any names that are more popular than others in India? ");
                setSampleAns([`India is a large and diverse country. Different regions have different names. For example, in 
                                    Punjab, names like Gagan and Jaspreet are very common. I remember there used to be three 
                                    girls with the name Gagan in my class when I was young.`])
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Does anyone in your family have the same name as you?  ");
                converstionSteps--;
            }
        }
        //Question--8
        else if (converstionSteps == 8) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Are there any names that are more popular than others in India? ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Are there any names that are more popular than others in India? ");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/popular/gi) || converstionStepsText.match(/name/gi) ||
                converstionStepsText.match(/other/gi) || converstionStepsText.match(/India/gi) ||

                converstionStepsText.match(/especially/gi) || converstionStepsText.match(/country/gi) ||
                converstionStepsText.match(/different/gi) || converstionStepsText.match(/region/gi) ||

                converstionStepsText.match(/young/gi)
            ) {
                await playScript("Okey. That was about section 1. Thanks.");
                await sendSpeakingtextToBackend(recordedText);
                conditionsDependsOnUserSpeech(6)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Are there any names that are more popular than others in India? ");
                converstionSteps--;
            }


        }


    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";
}