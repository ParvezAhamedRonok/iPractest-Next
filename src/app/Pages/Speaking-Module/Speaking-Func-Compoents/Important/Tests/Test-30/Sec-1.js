let converstionSteps = 0;

export async function Test30Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {

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

                    await playScript("Okey. Lets talk about Public transportation. What kind of public transportation do you usually take? ");
                    setSampleAns(["If I am travelling locally, I normally travel by bus, but if I am travelling farther away, I travel by railways or air. "]);
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
                    await playScript("Okey. Lets talk about Public transportation. What kind of public transportation do you usually take? ");
                    setSampleAns(["If I am travelling locally, I normally travel by bus, but if I am travelling farther away, I travel by railways or air. "]);
                    conditionsDependsOnUserSpeech(1)
                }
            }
        }
        if (converstionSteps == 4) {

            if (converstionStepsText.length < 10) {
                await smallTalkError("What kind of public transportation do you usually take?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. What kind of public transportation do you usually take?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/Public/gi) || converstionStepsText.match(/transportation/gi) ||
                converstionStepsText.match(/kind/gi) || converstionStepsText.match(/usually/gi) ||
                converstionStepsText.match(/usually/gi) || converstionStepsText.match(/travel/gi) ||
                converstionStepsText.match(/locally/gi) || converstionStepsText.match(/normally/gi) ||
                converstionStepsText.match(/use/gi) || converstionStepsText.match(/railway/gi) ||
                converstionStepsText.match(/bus/gi) || converstionStepsText.match(/riksha/gi)
            ) {
                await playScript("Okey. When do you usually take public transportation, in your everyday life, or when you are  travelling? ");
                setSampleAns([`When I was young, I used to travel by bus every day because of my studies. However, 
                                nowadays, I only use public transportation when I am especially visiting someplace. For 
                                example, after every one or two months, I visit Golden Temple in Amritsar and for that I travel 
                                by bus.`])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What kind of public transportation do you usually take?");
                converstionSteps--;
            }
            //Question--5
        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("When do you usually take public transportation, in your everyday life, or when you are  travelling?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. When do you usually take public transportation, in your everyday life, or when you are  travelling?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/when/gi) || converstionStepsText.match(/usually/gi) ||
                converstionStepsText.match(/transport/gi) || converstionStepsText.match(/everyday/gi) ||
                converstionStepsText.match(/often/gi) || converstionStepsText.match(/travel/gi) ||
                converstionStepsText.match(/bored/gi) ||
                converstionStepsText.match(/nowadays/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/young/gi) || converstionStepsText.match(/use/gi) ||
                converstionStepsText.match(/bus/gi) || converstionStepsText.match(/stud/gi) ||
                converstionStepsText.match(/someplace/gi) ||
                converstionStepsText.match(/public/gi) || converstionStepsText.match(/visit/gi) ||
                converstionStepsText.match(/Temple/gi)
            ) {
                await playScript("So, Do most people prefer public transportation in your country? ");
                setSampleAns([`I think public transportation is the main mode of travel for most people in India. However, as 
                                people are becoming richer, many people have started travelling by car.`])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. When do you usually take public transportation, in your everyday life, or when you are  travelling?");
                converstionSteps--;
            }
            //question-6
        } else if (converstionSteps == 6) {

            if (converstionStepsText.length < 10) {
                await smallTalkError(" Do most people prefer public transportation in your country? ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Do most people prefer public transportation in your country? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/usually/gi) || converstionStepsText.match(/yes/gi) ||
                converstionStepsText.match(/no/gi) || converstionStepsText.match(/people/gi) ||
                converstionStepsText.match(/prefer/gi) || converstionStepsText.match(/public/gi) ||
                converstionStepsText.match(/transport/gi) || converstionStepsText.match(/country/gi) ||
                converstionStepsText.match(/my/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/However/gi) || converstionStepsText.match(/many/gi)
            ) {
                await playScript("Ok,  Did you take public transportation when you were a kid? ");
                setSampleAns([`Yes, as I said before, in my childhood, I used to travel by bus daily because of my studies. `])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do most people prefer public transportation in your country? ");
                converstionSteps--;
            }
            //question7..
        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Did you take public transportation when you were a kid?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.  Did you take public transportation when you were a kid?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/take/gi) ||
                converstionStepsText.match(/was/gi) || converstionStepsText.match(/public/gi) ||
                converstionStepsText.match(/transportation/gi) || converstionStepsText.match(/when/gi) ||
                converstionStepsText.match(/kid/gi) ||
                converstionStepsText.match(/child/gi) || converstionStepsText.match(/young/gi) ||
                converstionStepsText.match(/before/gi) ||
                converstionStepsText.match(/travel/gi)
            ) {
                await playScript("So, Will there be more people taking public transportation in the future?");
                setSampleAns([`On the contrary, I think the use of public transportation will decrease further as people are 
                                becoming richer and they care more about comfort than cost. However, if the government 
                                takes some steps in this regard, there can be a change. `])
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Did you take public transportation when you were a kid? ");
                converstionSteps--;
            }
        }
        //Question--8
        else if (converstionSteps == 8) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Will there be more people taking public transportation in the future?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Will there be more people taking public transportation in the future?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/Will/gi) ||
                converstionStepsText.match(/prefer/gi) || converstionStepsText.match(/people/gi) ||

                converstionStepsText.match(/especially/gi) || converstionStepsText.match(/tak/gi) ||
                converstionStepsText.match(/public/gi) || converstionStepsText.match(/transport/gi) ||

                converstionStepsText.match(/future/gi) || converstionStepsText.match(/contrary/gi) ||
                converstionStepsText.match(/decrease/gi) || converstionStepsText.match(/becom/gi) ||
                converstionStepsText.match(/comfort/gi) || converstionStepsText.match(/government/gi)
            ) {
                await playScript("Okey. That was about section 1. Thanks.");
                await sendSpeakingtextToBackend(recordedText);
                conditionsDependsOnUserSpeech(6)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Will there be more people taking public transportation in the future?");
                converstionSteps--;
            }


        }


    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";
}
