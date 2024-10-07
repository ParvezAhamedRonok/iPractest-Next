let converstionSteps = 0;
export async function Test19Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {
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
                    await playScript("Okey. Lets talk about Old Buildings.Have you ever seen some old buildings in the city? ");
                    setSampleAns(["Yes, there are many old buildings in my city, especially in the old city area.  "]);
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
                    await playScript("Okey. So, Do you like to read books?");
                    setSampleAns([`Yeah. this is really nice day & i am felling happy with todays weather`])
                    conditionsDependsOnUserSpeech(0)
                }
            }
            if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Do you like to read books?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.Do you like to read books?");
                    converstionSteps--;
                }
                else {
                    await playScript("Okey. Lets talk about Old Buildings.Have you ever seen some old buildings in the city? ");
                    setSampleAns(["Yes, there are many old buildings in my city, especially in the old city area. "]);
                    conditionsDependsOnUserSpeech(1)
                }
            }
        }

        if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Have you ever seen some old buildings in the city?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Have you ever seen some old buildings in the city?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/been/gi) || converstionStepsText.match(/have/gi) ||
                converstionStepsText.match(/Old/gi) || converstionStepsText.match(/Build/gi) ||
                converstionStepsText.match(/some/gi) || converstionStepsText.match(/city/gi) ||
                converstionStepsText.match(/especially/gi) || converstionStepsText.match(/area/gi)

            ) {
                await playScript("Okey. Do you think we should preserve old buildings in cities? ");
                setSampleAns([`I am very fond of History and anything old always fascinates me, I always feel we need to take our  past along into the future, so old buildings being an important part of our legacy need to be protected. `])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.Have you ever seen some old buildings in the city?");
                converstionSteps--;
            }
        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Do you think we should preserve old buildings in cities?  ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Do you think we should preserve old buildings in cities? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/do/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/should/gi) || converstionStepsText.match(/preserve/gi) ||
                converstionStepsText.match(/old/gi) ||
                converstionStepsText.match(/build/gi) || converstionStepsText.match(/cit/gi) ||
                converstionStepsText.match(/fond/gi) || converstionStepsText.match(/History/gi) ||
                converstionStepsText.match(/anything/gi) || converstionStepsText.match(/fascinate/gi) ||
                converstionStepsText.match(/past/gi) || converstionStepsText.match(/important/gi) || converstionStepsText.match(/protect/gi)
            ) {
                await playScript("Okey.  Do you prefer living in an old building or a modern house?");
                setSampleAns([`Much as I like to see old buildings and imagine them in their hey days, I prefer to live in a modern  house`])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you think we should preserve old buildings in cities? ");
                converstionSteps--;
            }
        } else if (converstionSteps == 6) {

            if (converstionStepsText.length < 10) {
                await smallTalkError("  Do you prefer living in an old building or a modern house?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.  Do you prefer living in an old building or a modern house? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/prefer/gi) ||
                converstionStepsText.match(/liv/gi) || converstionStepsText.match(/buil/gi) ||
                converstionStepsText.match(/modern/gi) || converstionStepsText.match(/house/gi) ||
                converstionStepsText.match(/Much/gi) || converstionStepsText.match(/like/gi) ||
                converstionStepsText.match(/imagine/gi) || converstionStepsText.match(/comfortable/gi) ||
                converstionStepsText.match(/house/gi)
            ) {
                await playScript("Are there any old buildings you want to see in the future? Why?  ");
                setSampleAns([`Yes, definitely there are many old buildings on my bucket list. Starting with my own country, I’d like to  see all the well-known monuments in the length and breadth of my country. Then there are many  buildings like the Colossus Colosseum in Rome, The Angkor Wat Temples in Cambodia, Buildings in  the forbidden city in Beijing, Hagia Sophia in Turkey, The pyramids of Giza etc.   `])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you prefer living in an old building or a modern house? ");
                converstionSteps--;
            }

        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Are there any old buildings you want to see in the future? Why?  ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.  Are there any old buildings you want to see in the future? Why?  ");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/build/gi) || converstionStepsText.match(/want/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/future/gi) ||
                converstionStepsText.match(/because/gi) || converstionStepsText.match(/reason/gi) ||
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/definitely/gi) || converstionStepsText.match(/many/gi) ||
                converstionStepsText.match(/list/gi) || converstionStepsText.match(/Start/gi) ||
                converstionStepsText.match(/country/gi) ||
                converstionStepsText.match(/Colos/gi) || converstionStepsText.match(/cit/gi) ||
                converstionStepsText.match(/pyramid/gi) || converstionStepsText.match(/Giza/gi) ||
                converstionStepsText.match(/etc/gi)
            ) {
                await playScript("Okey. That was about section 1. Thanks.");
                await sendSpeakingtextToBackend(recordedText);
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Are there any old buildings you want to see in the future? Why?  ");
                converstionSteps--;
            }


        }

    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";
}