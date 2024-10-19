let converstionSteps = 0;

export async function Test27Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {

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

                    await playScript("Okey. Lets talk about Snacks. What snacks do you like to eat?");
                    setSampleAns(["I love to eat both savoury and sweet snacks. My favourite is Lays Masala Magic chips. I think I probably eat too much of them to be honest."]);
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
                    await playScript("Okey. Lets talk about Snacks. What snacks do you like to eat?");
                    setSampleAns(["I love to eat both savoury and sweet snacks. My favourite is Lays Masala Magic chips. I think I probably eat too much of them to be honest."]);
                    conditionsDependsOnUserSpeech(1)
                }
            }
        }
        if (converstionSteps == 4) {

            if (converstionStepsText.length < 10) {
                await smallTalkError("What snacks do you like to eat?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.  What snacks do you like to eat? ");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/Snacks/gi) || converstionStepsText.match(/like/gi) ||
                converstionStepsText.match(/love/gi) || converstionStepsText.match(/eat/gi) ||
                converstionStepsText.match(/both/gi) || converstionStepsText.match(/food/gi) ||
                converstionStepsText.match(/sweet/gi) || converstionStepsText.match(/favourite/gi) ||
                converstionStepsText.match(/Masala/gi) || converstionStepsText.match(/chip/gi)
            ) {
                await playScript("Okey. Did you often eat snacks when you were young?");
                setSampleAns([`No, my parents were really strict with me eating snacks when I was young. They made sure I 
                                    only ate healthy home-cooked meals. `])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  What snacks do you like to eat? ");
                converstionSteps--;
            }
            //Question--5
        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Did you often eat snacks when you were young?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Did you often eat snacks when you were young?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/Do/gi) ||
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/often/gi) || converstionStepsText.match(/snacks/gi) ||
                converstionStepsText.match(/eat/gi) ||
                converstionStepsText.match(/young/gi) || converstionStepsText.match(/health/gi) ||
                converstionStepsText.match(/ate/gi) || converstionStepsText.match(/home-cooked/gi) ||
                converstionStepsText.match(/therefore/gi) || converstionStepsText.match(/meal/gi)
            ) {
                await playScript("So, When do you usually eat snacks now?");
                setSampleAns([`I normally eat snacks in the evening along with tea. It is the time, we all family members sit 
                            together and enjoy tea and snacks. I also eat snacks at night after dinner when I am watching 
                            movies. `])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Did you often eat snacks when you were young?");
                converstionSteps--;
            }
            //question-6
        } else if (converstionSteps == 6) {

            if (converstionStepsText.length < 10) {
                await smallTalkError(" When do you usually eat snacks now?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. When do you usually eat snacks now?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/usually/gi) || converstionStepsText.match(/when/gi) ||
                converstionStepsText.match(/was/gi) || converstionStepsText.match(/were/gi) ||
                converstionStepsText.match(/eat/gi) || converstionStepsText.match(/ate/gi) ||
                converstionStepsText.match(/snack/gi) || converstionStepsText.match(/food/gi) ||
                converstionStepsText.match(/evening/gi) || converstionStepsText.match(/together/gi) || converstionStepsText.match(/night/gi) || converstionStepsText.match(/movie/gi)
            ) {
                await playScript("Ok,  Do you think it is healthy for you to eat snacks?");
                setSampleAns([`No, it is not very healthy to eat too much of snacks. And that is the problem with snacks, they 
                                    are so delicious that we tend to overeat. Nowadays, I have started eating baked chips to avoid 
                                    this.`])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. When do you usually eat snacks now? ");
                converstionSteps--;
            }
            //question7..
        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Do you think it is healthy for you to eat snacks?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.  Do you think it is healthy for you to eat snacks?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/healthy/gi) ||
                converstionStepsText.match(/eat/gi) || converstionStepsText.match(/ate/gi) ||
                converstionStepsText.match(/snack/gi) || converstionStepsText.match(/food/gi) ||
                converstionStepsText.match(/lot/gi) ||
                converstionStepsText.match(/much/gi) || converstionStepsText.match(/more/gi) ||
                converstionStepsText.match(/problem/gi)
            ) {
                await playScript("So, What kind of snacks do people in your country usually eat?");
                setSampleAns([`In my country, people enjoy a variety of snacks. Popular choices include samosas, pakoras, and namkeen, which are savory, as well as sweet snacks like jalebis and ladoos. Many also enjoy chips and biscuits with tea.`])
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Do you think it is healthy for you to eat snacks?");
                converstionSteps--;
            }
        }
        //Question--8
        else if (converstionSteps == 8) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What kind of snacks do people in your country usually eat?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. What kind of snacks do people in your country usually eat?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/kind/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/snack/gi) || converstionStepsText.match(/people/gi) ||
                converstionStepsText.match(/country/gi) || converstionStepsText.match(/usually/gi) ||

                converstionStepsText.match(/eat/gi) || converstionStepsText.match(/ate/gi) ||
                converstionStepsText.match(/variety/gi) || converstionStepsText.match(/Popular/gi) ||

                converstionStepsText.match(/include/gi) || converstionStepsText.match(/samosas/gi) ||
                converstionStepsText.match(/savory/gi) || converstionStepsText.match(/maintain/gi) ||
                converstionStepsText.match(/affect/gi) || converstionStepsText.match(/tea/gi)
            ) {
                await playScript("Okey. That was about section 1. Thanks.");
                await sendSpeakingtextToBackend(recordedText);
                conditionsDependsOnUserSpeech(6)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What kind of snacks do people in your country usually eat?");
                converstionSteps--;
            }


        }


    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";
}
