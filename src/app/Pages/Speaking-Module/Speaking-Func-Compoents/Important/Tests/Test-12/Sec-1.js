let converstionSteps = 0;
export async function Test12Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {
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
        // if (converstionStepsText.length < 10) {
        //     await smallTalkError();
        // }

        // else if (converstionStepsText.match('repeat') || converstionStepsText.match(" understand")) {
        //     await playScript(
        //         "Ok , I am repeating.");
        //     converstionSteps--;
        // }

        // if (converstionSteps == 0) {
        //     await playScript(
        //         "Hello, And Welcome to this"
        //     );
        // }

        if (!userSpeakingTestNo) {
            if (converstionSteps == 1) {
                await playScript(
                    "I'll start your exam now. What's your full name, please?"
                );
            } else if (converstionSteps == 2) {
                if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating, What's your full name, please?");
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
                        setSampleAns([" You can call me Mr. Jone dow"])
                        converstionSteps--;
                    }
                }
                else {
                    await playScript("Alright, what's your name?");
                    setSampleAns([" Hellow sir, I am Mr. Jone dow. You can call me Jone"])
                    converstionSteps--;
                }

            } else if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("  Where do you live?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,  Where do you live?");
                    converstionSteps--;
                }
                else if (converstionStepsText.match(/live/gi) || converstionStepsText.match(/leaving/gi) ||
                    converstionStepsText.match(/in/gi) || converstionStepsText.match(/at/gi) ||
                    converstionStepsText.match(/from/gi) || converstionStepsText.match(/i am living/gi)) {
                    await playScript("Okay. Do you like math?");
                    setSampleAns([" Yes, i do because Math so much interesting subject for me", "2 , Basically i don't like math because math is so much complicated to me when i try to solve any kind of math problems"])
                    conditionsDependsOnUserSpeech(1)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Where do you live? ");
                    // setSampleAns([" Simply you can say your area/ or place where you are live in.As like I am living in Dhaka,Bangladesh", "2, I live in kolkata,India"])
                    converstionSteps--;
                }

            }
        } else {
            if (converstionSteps == 1) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Are you ready to take the test then?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating, Are you ready to take the test then?");
                    converstionSteps--;
                }
                else {
                    await playScript("Okay. Do you study or work?");
                    setSampleAns(["  I work. I’ve been working as a freelance web designer for two years now. ", "2, I’m working in a specialist medical field that deals with diseases related to aging. My employer is a large multinational company. ", "3,  I study. I’m still in high school, in my final year. So I’m studying for my final exams now. "])
                }

            }
            if (converstionSteps == 2) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Do you study or work?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating, Do you study or work?");
                    converstionSteps--;
                }
                else {
                    await playScript("So, do you like reading?");
                    setSampleAns([" Yes i love to read books", "2, Basically i real books when i get some spair time"]);
                    conditionsDependsOnUserSpeech(0)
                }
            }
            if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" do you like reading?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,  do you like reading?");
                    converstionSteps--;
                }
                else {
                    await playScript("Okay. Do you like math?");
                    setSampleAns([" Yes, i do because Math so much interesting subject for me", "2 , Basically i don't like math because math is so much complicated to me when i try to solve any kind of math problems"])
                    conditionsDependsOnUserSpeech(1)
                }
            }

        }


        if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Do you like math?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating, Do you like math?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/like/gi) ||
                converstionStepsText.match(/Do/gi) || converstionStepsText.match(/Love/gi) ||
                converstionStepsText.match(/math/gi) || converstionStepsText.match(/understand/gi) ||
                converstionStepsText.match(/logic/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/rely/gi) || converstionStepsText.match(/challenge/gi)
            ) {
                await playScript("Okay. Why is math so important?");
                setSampleAns([" Mathematics is an essential subject that has a significant impact on our daily lives. It is a universal language that helps us understand and make sense of the world around us. Here are some reasons why math is important:1. **Problem-solving**: Math helps us develop critical thinking and problem-solving skills that are essential in our daily lives. It enables us to analyze and solve problems in various fields, including science, engineering, economics, and finance ¹.2. **Real-life skills**: Math is an integral part of our daily lives. We use it to perform real-life skills, such as grocery shopping, cooking, and tracking our finances. It helps us understand measurements, fractions, and percentages, which are essential in cooking and baking ¹. 3. **Career opportunities**: Math is a fundamental subject that is required in many professions, including engineering, finance, medicine, and technology. A strong foundation in math can help you succeed professionally and cognitively ¹.4. **Improved cognitive function**: Math is a great way to exercise your brain. It improves our cognitive skills over time and promotes healthy brain function ¹. 5. **Universal language**: Math is a universal language that has the same meaning across the globe. It allows us to work together towards new innovations and ideas ¹.In conclusion, math is an essential subject that has a significant impact on our daily lives. It helps us develop critical thinking and problem-solving skills, understand real-life skills, and opens up many career opportunities. It is a universal language that unites us and allows us to work together towards new innovations and ideas."]);

                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you like math?");
                converstionSteps--;
            }



        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Why is math so important?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating, Why is math so important?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/math/gi) || converstionStepsText.match(/because/gi) ||
                converstionStepsText.match(/logic/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/develop/gi) || converstionStepsText.match(/understand/gi) ||
                converstionStepsText.match(/important/gi) || converstionStepsText.match(/challenge/gi) ||
                converstionStepsText.match(/fundamental/gi) || converstionStepsText.match(/educat/gi) ||
                converstionStepsText.match(/every/gi) || converstionStepsText.match(/Information/gi) ||
                converstionStepsText.match(/Communication/gi) || converstionStepsText.match(/Solving/gi) ||
                converstionStepsText.match(/Help/gi) || converstionStepsText.match(/make/gi)
            ) {
                await playScript("And is math easy for everyone?");
                setSampleAns(["I don't think thats true. I had a friend who used to practice maths with her dad (who did a lot of maths as his job) for a few hours every week, yet she never went past the 5/20 grade (i dunno the equivalent in America). I never practiced ever, i didnt particularly like maths, and yet i always had pretty good grades. I think this Can apply to everybody.", "2, Maths is a subject that can be easy or difficult depending on how you approach it12. Maths is based on logical concepts and rules, not on the subjective opinion of an examiner2. To make maths easier, you need to have a strong foundation of concepts, practice problems, get guidance from teachers or mentors, and prepare a study schedule1. Maths can be challenging, but also rewarding if you master it"])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Why is math so important?");
                converstionSteps--;
            }



        } else if (converstionSteps == 6) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" is math easy for everyone?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating,  is math easy for everyone?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/math/gi) || converstionStepsText.match(/because/gi) ||
                converstionStepsText.match(/logic/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/every/gi) || converstionStepsText.match(/Information/gi) ||
                converstionStepsText.match(/will/gi) || converstionStepsText.match(/would/gi) ||
                converstionStepsText.match(/important/gi) || converstionStepsText.match(/easy/gi) ||
                converstionStepsText.match(/Help/gi) || converstionStepsText.match(/make/gi)

            ) {
                await playScript("Great!. Now I want to talk about smiling. What makes you smile?");
                setSampleAns([" Smiling is triggered by the production of endorphins and neuronal signals in the brain12. The types of things that make most of us smile include3:*A positive relationship experience *A joyful or significant positive event*Something humorous or witty*Beauty and kindness  *A happy memory or anticipation of a positive event"])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  is math easy for everyone?");
                converstionSteps--;
            }


        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What makes you smile?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating,What makes you smile?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/make/gi) || converstionStepsText.match(/smile/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/do/gi) || converstionStepsText.match(/because/gi) ||
                converstionStepsText.match(/logic/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/taking/gi) || converstionStepsText.match(/Something/gi) ||
                converstionStepsText.match(/mirror/gi) || converstionStepsText.match(/control/gi) ||
                converstionStepsText.match(/heart/gi) || converstionStepsText.match(/easy/gi) ||
                converstionStepsText.match(/Help/gi) || converstionStepsText.match(/brings/gi)
            ) {
                await playScript("How often do you smile?");
                setSampleAns([" The average adult smiles 20 times a day, while children smile much more, about 400 times a day12."])
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Now I want to talk about smiling. What makes you smile?");
                converstionSteps--;
            }


        } else if (converstionSteps == 8) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" How often do you smile?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating, How often do you smile?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/logic/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/make/gi) || converstionStepsText.match(/smile/gi) ||
                converstionStepsText.match(/do/gi) || converstionStepsText.match(/because/gi) ||
                converstionStepsText.match(/taking/gi) || converstionStepsText.match(/Something/gi) ||
                converstionStepsText.match(/often/gi) || converstionStepsText.match(/specific/gi) ||
                converstionStepsText.match(/heart/gi) || converstionStepsText.match(/frequency/gi) ||
                converstionStepsText.match(/Help/gi) || converstionStepsText.match(/anywhere/gi) ||
                converstionStepsText.match(/Time/gi) || converstionStepsText.match(/Everywhere/gi) ||
                converstionStepsText.match(/generate/gi) || converstionStepsText.match(/every/gi)
            ) {
                await playScript("Okay. When do people smile at each other?");
                setSampleAns([" We smile for social reasons, to put people at ease, and to show more complex emotions1. To produce a genuine smile, we must genuinely feel like smiling2. Smiling at strangers is a small exercise in compassion2. When our brains feel happy, endorphins are produced and neuronal signals are transmitted to your facial muscles to trigger a smile3. Smiling at the misfortunes of others can be a sure way to make you feel better about yourself"])
                conditionsDependsOnUserSpeech(6)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  How often do you smile?");
                converstionSteps--;
            }




        } else if (converstionSteps == 9) {

            if (converstionStepsText.length < 10) {
                await smallTalkError(" When do people smile at each other?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating, When do people smile at each other?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/logic/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/make/gi) || converstionStepsText.match(/smile/gi) ||
                converstionStepsText.match(/do/gi) || converstionStepsText.match(/because/gi) ||
                converstionStepsText.match(/people/gi) || converstionStepsText.match(/automatically/gi) ||
                converstionStepsText.match(/mood/gi) || converstionStepsText.match(/reflect/gi) ||
                converstionStepsText.match(/heart/gi) || converstionStepsText.match(/frequency/gi) ||
                converstionStepsText.match(/Help/gi) || converstionStepsText.match(/anywhere/gi) ||
                converstionStepsText.match(/Time/gi) || converstionStepsText.match(/Seeing/gi) ||
                converstionStepsText.match(/generate/gi) || converstionStepsText.match(/every/gi) ||
                converstionStepsText.match(/could/gi) || converstionStepsText.match(/would/gi) ||
                converstionStepsText.match(/each/gi) || converstionStepsText.match(/nervous/gi) ||
                converstionStepsText.match(/happy/gi) || converstionStepsText.match(/love/gi) ||
                converstionStepsText.match(/excite/gi) || converstionStepsText.match(/sad/gi) ||
                converstionStepsText.match(/sympathetic/gi) || converstionStepsText.match(/convey/gi) ||
                converstionStepsText.match(/genuine/gi) || converstionStepsText.match(/attraction/gi)

            ) {
                await playScript(" So, do you smile when you're taking a photo?");
                setSampleAns([" If you want your picture taken, you should smile at the camera12345. However, you should also smile with your eyes and show some teeth for a more natural and attractive look135. You can find your best angle and hold your face level with the camera to avoid unflattering poses35. You can also say a word that ends in uh to relax your mouth and lips3. Some cameras have an auto-smile capture option that can take the picture when you smile4."])
                conditionsDependsOnUserSpeech(7)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. When do people smile at each other?");
                converstionSteps--;
            }

        } else if (converstionSteps == 10) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you smile when you're taking a photo?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating, Do you smile when you're taking a photo?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/logic/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/make/gi) || converstionStepsText.match(/smile/gi) ||
                converstionStepsText.match(/do/gi) || converstionStepsText.match(/because/gi) ||
                converstionStepsText.match(/will/gi) || converstionStepsText.match(/would/gi) ||
                converstionStepsText.match(/mood/gi) || converstionStepsText.match(/reflect/gi) ||
                converstionStepsText.match(/camera/gi) || converstionStepsText.match(/photo/gi) ||
                converstionStepsText.match(/Help/gi) || converstionStepsText.match(/try/gi) ||
                converstionStepsText.match(/Time/gi) || converstionStepsText.match(/look/gi) ||
                converstionStepsText.match(/sympathetic/gi) || converstionStepsText.match(/convey/gi) ||
                converstionStepsText.match(/genuine/gi) || converstionStepsText.match(/attraction/gi) ||
                converstionStepsText.match(/generate/gi) || converstionStepsText.match(/every/gi)
            ) {
                await playScript("Okay. That was about section 1. Thanks.");
                conditionsDependsOnUserSpeech(8)
                await sendSpeakingtextToBackend(recordedText);
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you smile when you're taking a photo?");
                converstionSteps--;
            }



        }

    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";
}