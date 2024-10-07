let converstionSteps = 0;
export async function Test15Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {
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
                        setSampleAns([" Simply you can say your area/ or place where you are live in.As like I am living in Dhaka,Bangladesh", "2, I live in kolkata,India"])
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
                    await playScript("Okey. Lets talk about Mirror.  How often do you look at yourself in the mirror everyday");
                    setSampleAns(["I look at the mirror at least once a day when I go out for my work. Apart from that whenever I get a chance I flatter myself by looking at the mirror. I think if you are a confident person, looking at the  mirror always boosts your confidence "]);
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
                    await playScript("Okey. So, Which city do you live?");
                    setSampleAns([`Yes i do , i always make smile. it makes me happy.`])
                    conditionsDependsOnUserSpeech(0)
                }
            }
            if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Which city do you live? ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Which city do you live?");
                    converstionSteps--;
                }
                else {
                    await playScript("Okey. Lets talk about Mirror.  How often do you look at yourself in the mirror everyday");
                    setSampleAns(["I look at the mirror at least once a day when I go out for my work. Apart from that whenever I get a chance I flatter myself by looking at the mirror. I think if you are a confident person, looking at the  mirror always boosts your confidence "]);
                    conditionsDependsOnUserSpeech(1)
                }
            }
        }

        if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("How often do you look at yourself in the mirror everyday");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.How often do you look at yourself in the mirror everyday ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/mirror/gi) || converstionStepsText.match(/least/gi) ||
                converstionStepsText.match(/work/gi) || converstionStepsText.match(/Apart/gi) ||
                converstionStepsText.match(/whenever/gi) || converstionStepsText.match(/chance/gi) ||

                converstionStepsText.match(/flatter/gi) || converstionStepsText.match(/rather/gi) ||
                converstionStepsText.match(/daily/gi) || converstionStepsText.match(/myself/gi) ||
                converstionStepsText.match(/love/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/Like/gi) || converstionStepsText.match(/confident/gi) ||
                converstionStepsText.match(/confidence/gi)

            ) {
                await playScript("Okey. Have you ever bought mirrors? ");
                setSampleAns([`Yes, I bought a beautiful mirror when I went to Jodhpur last month, it has a nice wooden frame and a  clear mirror to look at. It also has carving on the frame`])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. How often do you look at yourself in the mirror everyday?");
                converstionSteps--;
            }


        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Have you ever bought mirrors? ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Have you ever bought mirrors?  ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/ever/gi) || converstionStepsText.match(/did/gi) ||
                converstionStepsText.match(/been/gi) || converstionStepsText.match(/bought/gi) ||
                converstionStepsText.match(/mirror/gi) ||
                converstionStepsText.match(/beautiful/gi) || converstionStepsText.match(/month/gi) ||
                converstionStepsText.match(/wooden/gi) || converstionStepsText.match(/nice/gi) ||
                converstionStepsText.match(/carv/gi) || converstionStepsText.match(/frame/gi)
            ) {
                await playScript("Okey.   Would you use Mirrors to decorate rooms? ");
                setSampleAns([`Yes I would like to use Mirrors to decorate the rooms. Mirrors add space to the room and also enhance  the lighting effect. My interior decorator friend also recommended it for my study room recently.  `])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Have you ever bought mirrors? ");
                converstionSteps--;
            }


        } else if (converstionSteps == 6) {

            if (converstionStepsText.length < 10) {
                await smallTalkError("  Would you use Mirrors to decorate rooms?  ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.  Would you use Mirrors to decorate rooms?  ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/Would/gi) || converstionStepsText.match(/will/gi) ||
                converstionStepsText.match(/Mirror/gi) || converstionStepsText.match(/decorate/gi) ||
                converstionStepsText.match(/room/gi) || converstionStepsText.match(/like/gi) ||
                converstionStepsText.match(/space/gi) || converstionStepsText.match(/enhance/gi) ||

                converstionStepsText.match(/effect/gi) || converstionStepsText.match(/recommended/gi) ||
                converstionStepsText.match(/grow/gi) || converstionStepsText.match(/childhood/gi) ||
                converstionStepsText.match(/used/gi) || converstionStepsText.match(/interior/gi) ||

                converstionStepsText.match(/friend/gi) || converstionStepsText.match(/study/gi) ||
                converstionStepsText.match(/ room/gi) || converstionStepsText.match(/recently/gi)
            ) {
                await playScript("Okey. Do you check yourself when you decide to buy a mirror? ");
                setSampleAns([`Yes, I check for any defects or flaws in the reflection, when buying a mirror. I also check for any  physical damage, like cracks. `])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Would you use Mirrors to decorate rooms? ");
                converstionSteps--;
            }


        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you check yourself when you decide to buy a mirror? ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Do you check yourself when you decide to buy a mirror?  ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/check/gi) || converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/yourself/gi) || converstionStepsText.match(/when/gi) ||
                converstionStepsText.match(/decide/gi) || converstionStepsText.match(/buy/gi) ||
                converstionStepsText.match(/mirror/gi) || converstionStepsText.match(/check/gi) ||

                converstionStepsText.match(/any/gi) || converstionStepsText.match(/defects/gi) ||
                converstionStepsText.match(/flaws/gi) || converstionStepsText.match(/reflection/gi) ||
                converstionStepsText.match(/when/gi) || converstionStepsText.match(/buyi/gi) ||
                converstionStepsText.match(/check/gi) || converstionStepsText.match(/physical/gi)
            ) {
                await playScript("Okey. That was about section 1. Thanks.");
                await sendSpeakingtextToBackend(recordedText);
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you think children need more exercise?");
                converstionSteps--;
            }


        }

    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";
}