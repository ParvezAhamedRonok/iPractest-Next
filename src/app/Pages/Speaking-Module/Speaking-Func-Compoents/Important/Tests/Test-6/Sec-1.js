
let converstionSteps = 0;
export async function Test6Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {
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
                    await playScript("Okey. Lets talk about Talent.Do you have a talent, or something you are good at?");
                    setSampleAns(["I think everyone is born with some talent or the other. I have a talent to embroider. "]);
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
                    await playScript("Okey. So, is your health is well today?");
                    setSampleAns([`Yes i do , i always make smile. it makes me happy.`])
                    conditionsDependsOnUserSpeech(0)
                }
            }
            if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("is your health is well today?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. is your health is well today?");
                    converstionSteps--;
                }
                else {
                    await playScript("Okey. Lets talk about Talent.Do you have a talent, or something you are good at?");
                    setSampleAns(["I think everyone is born with some talent or the other. I have a talent to embroider. "]);
                    conditionsDependsOnUserSpeech(1)
                }
            }
        }

        if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you have a talent, or something you are good at?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Do you have a talent, or something you are good at?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/Talent/gi) || converstionStepsText.match(/something/gi) ||
                converstionStepsText.match(/good/gi) || converstionStepsText.match(/at/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/everyone/gi) ||
                converstionStepsText.match(/born/gi) || converstionStepsText.match(/some/gi) ||
                converstionStepsText.match(/embroider/gi) || converstionStepsText.match(/special/gi)

            ) {
                await playScript("Okey.  Was it mastered recently or when you were young? ");
                setSampleAns([`I was lucky to have discovered it in my school, where the nuns would teach us varied handcrafts like knitting, sewing, painting and embroidering  `])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.Do you have a talent, or something you are good at?");
                converstionSteps--;
            }


        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Was it mastered recently or when you were young? ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.  Was it mastered recently or when you were young? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/master/gi) || converstionStepsText.match(/did/gi) ||
                converstionStepsText.match(/Was/gi) || converstionStepsText.match(/were/gi) ||
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/young/gi) ||
                converstionStepsText.match(/lucky/gi) || converstionStepsText.match(/discover/gi) ||
                converstionStepsText.match(/school/gi) || converstionStepsText.match(/teach/gi) ||
                converstionStepsText.match(/varied/gi) || converstionStepsText.match(/handcraft/gi) ||
                converstionStepsText.match(/embroid/gi) || converstionStepsText.match(/paint/gi)
            ) {
                await playScript("Okey.  Do you think your talent can be useful for your future work? Why?");
                setSampleAns([`Yes, my talent like any other talent can be used in time of need whether to earn a living or to  pass my time productively `])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Was it mastered recently or when you were young?");
                converstionSteps--;
            }
        } else if (converstionSteps == 6) {

            if (converstionStepsText.length < 10) {
                await smallTalkError("  Do you think your talent can be useful for your future work? Why? ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Do you think your talent can be useful for your future work? Why? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/talent/gi) ||
                converstionStepsText.match(/useful/gi) || converstionStepsText.match(/future/gi) ||
                converstionStepsText.match(/work/gi) || converstionStepsText.match(/other/gi) ||

                converstionStepsText.match(/People/gi) || converstionStepsText.match(/different/gi) ||
                converstionStepsText.match(/use/gi) || converstionStepsText.match(/need/gi) ||
                converstionStepsText.match(/whether/gi) || converstionStepsText.match(/earn/gi) ||
                converstionStepsText.match(/livin/gi) || converstionStepsText.match(/productive/gi)
            ) {
                await playScript("Okey. Do you think anyone in your family has the same talent? ");
                setSampleAns([`Yes, my mother and aunts have similar talents. In fact it’s from my mother that I learnt a lot of this craft.  `])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you think your talent can be useful for your future work? Why?");
                converstionSteps--;
            }


        }
        else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("  Do you think anyone in your family has the same talent?  ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.  Do you think anyone in your family has the same talent?  ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/important/gi) ||
                converstionStepsText.match(/anyone/gi) || converstionStepsText.match(/family/gi) ||
                converstionStepsText.match(/has/gi) || converstionStepsText.match(/had/gi) ||
                converstionStepsText.match(/same/gi) || converstionStepsText.match(/talent/gi) ||
                converstionStepsText.match(/mother/gi) || converstionStepsText.match(/father/gi) ||
                converstionStepsText.match(/sister/gi) || converstionStepsText.match(/brother/gi) ||
                converstionStepsText.match(/similar/gi) || converstionStepsText.match(/fact/gi) ||
                converstionStepsText.match(/learnt/gi) || converstionStepsText.match(/craft/gi)
            ) {
                await playScript("Okey. What talent or skill would you like to develop in the future?");
                setSampleAns([`I would like to develop my public speaking skills in the future. Effective communication is crucial in many aspects of life, from professional settings to personal interactions. By improving my public speaking abilities, I can better convey my ideas, inspire others, and confidently participate in various events and discussions. Additionally, strong public speaking skills can enhance leadership capabilities and open up new opportunities for personal and career growth. `])
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.   Do you think anyone in your family has the same talent? ");
                converstionSteps--;
            }
        } else if (converstionSteps == 8) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What talent or skill would you like to develop in the future? ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. What talent or skill would you like to develop in the future? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/talent/gi) || converstionStepsText.match(/skill/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/would/gi) ||
                converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                converstionStepsText.match(/future/gi) || converstionStepsText.match(/develop/gi) ||
                converstionStepsText.match(/public/gi) || converstionStepsText.match(/personal/gi) ||
                converstionStepsText.match(/various/gi) || converstionStepsText.match(/inspire/gi) ||
                converstionStepsText.match(/confident/gi) || converstionStepsText.match(/leadership/gi)
            ) {
                await playScript("Okey. That was about section 1. Thanks.");
                await sendSpeakingtextToBackend(recordedText);
                conditionsDependsOnUserSpeech(6)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What talent or skill would you like to develop in the future? ");
                converstionSteps--;
            }


        }
    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";
}