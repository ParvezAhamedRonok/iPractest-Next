let converstionSteps = 0;
export async function Test17Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {
    if (converstionSteps == 0 && converstionStepsText == '') {
        if (!userSpeakingTestNo) {
            await playScript(
                "Hello and welcome to the IELTS speaking portion of the test. Jone is my name. & For this portion of the exam, I will serve as your examiner. We are carrying out this. Would you kindly tell me your entire name?"
            );
            setSampleAns([" Simply you can say your full name. As like my name is Jone dow.You can call me Jone"])
        } else {
            await playScript("Are you ready to take the test then?")
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
        //         "Welcome to the speaking portion of the ielts exam.  My name is adrian & I will be your examiner for this part of the test. I will give you instructions for each of the parts. What is your full name?"
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
                        setSampleAns(["You can simply say.You can call me Jone"])
                        converstionSteps--;
                    }
                }
                else {
                    await playScript("Alright, what's your name?");
                    setSampleAns(["My name is jone dow . You can call me Jone"])
                    converstionSteps--;
                }

            } else if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Where do you live? ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,  Where do you live? ");
                    converstionSteps--;
                }
                else if (converstionStepsText.match(/live/gi) || converstionStepsText.match(/leaving/gi) ||
                    converstionStepsText.match(/in/gi) || converstionStepsText.match(/at/gi) ||
                    converstionStepsText.match(/from/gi) || converstionStepsText.match(/i am living/gi)) {
                    await playScript("Do you have any hobbies?");
                    setSampleAns([" Yes i do have a couple of different hobbies i really like to cook and i liketo saw last week i made a nice dress for my best friendIf you enjoy doing anything or learning about anything in your free time, talk about that. Even if it’s something simple like shopping, hanging out with friends, eating good food, watching TV, or browsing social media. Any answer is fine. You just have to talk about it using good English. In part one, you need to focus "])
                    conditionsDependsOnUserSpeech(1)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Where do you live? ");
                    converstionSteps--;
                }

            }
        } else {
            if (converstionSteps == 1) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Are you ready to take the test then? ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,  Are you ready to take the test then? ");
                    converstionSteps--;
                }
                else {
                    await playScript("So, Are you happy today?");
                    setSampleAns([" Simply can say Yes, I am happy or as you are feeling now."])
                }
            }
            if (converstionSteps == 2) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Are you happy today?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,  Are you happy today?");
                    converstionSteps--;
                }
                else {
                    await playScript("Okay. Do you watch movies?");
                    setSampleAns([" Yes , i love to watch movies", "2, generally i don't like movies"]);
                    conditionsDependsOnUserSpeech(0)
                }
            }
            if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Do you watch movies?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,  Do you watch movies?");
                    converstionSteps--;
                }
                else {
                    await playScript("Do you have any hobbies?");
                    setSampleAns([" Yes i do have a couple of different hobbies i really like to cook and i liketo saw last week i made a nice dress for my best friendIf you enjoy doing anything or learning about anything in your free time, talk about that. Even if it’s something simple like shopping, hanging out with friends, eating good food, watching TV, or browsing social media. Any answer is fine. You just have to talk about it using good English. In part one, you need to focus "])
                    conditionsDependsOnUserSpeech(1)
                }
            }
        }

        if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you have any hobbies?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating, Do you have any hobbies?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/have/gi) ||
                converstionStepsText.match(/hobbies/gi) || converstionStepsText.match(/hobby/gi) ||
                converstionStepsText.match(/different/gi) || converstionStepsText.match(/enjoy/gi) ||
                converstionStepsText.match(/doing/gi) || converstionStepsText.match(/shopping/gi) ||
                converstionStepsText.match(/eat/gi) || converstionStepsText.match(/food/gi) ||
                converstionStepsText.match(/using/gi) || converstionStepsText.match(/reading/gi) ||
                converstionStepsText.match(/learn/gi) || converstionStepsText.match(/going/gi)

            ) {
                await playScript("Let's talk about numbers. Do you have a favorite number?");
                setSampleAns([" I don’t have personal preferences or consciousness, so I don’t have a favorite number. However, there are many interesting numbers in mathematics. For example, π (pi) is a fascinating number that represents the ratio of a circle’s circumference to its diameter. It is approximately equal to 3.14159. Another interesting number is e, Euler’s number, which is an important mathematical constant that arises in many areas of mathematics and science. It is approximately equal to 2.71828. These numbers have unique properties and are widely used in various mathematical formulas and equations.", "2,  uh yes i do the number i favor most is number nine because it has brought me luck over the years in fact on the ninth of the last month i got a good news that i got a scholarship"])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you have any hobbies?");
                converstionSteps--;
            }


        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Do you have a favorite number?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating, Do you have a favorite number?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/have/gi) ||
                converstionStepsText.match(/number/gi) || converstionStepsText.match(/favorite/gi) ||
                converstionStepsText.match(/different/gi) || converstionStepsText.match(/because /gi) ||
                converstionStepsText.match(/0-9/gi) || converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/chose/gi) || converstionStepsText.match(/variety/gi)
            ) {
                await playScript("What are some important numbers for you to remember?");
                setSampleAns([" there are some crucial numbers that we have to remember like our home address and our phone number as well as our social security number i use this quite often in society like a few weeks ago i had to use this for to register for this test", "2, You have so many important numbers to remember—your bank account PIN, your kids' phone numbers, and your alarm system code, just to name a few."])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Do you have a favorite number?");
                converstionSteps--;
            }



        } else if (converstionSteps == 6) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What are some important numbers for you to remember?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating, What are some important numbers for you to remember?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/have/gi) ||
                converstionStepsText.match(/number/gi) || converstionStepsText.match(/important/gi) ||
                converstionStepsText.match(/different/gi) || converstionStepsText.match(/because/gi) ||
                converstionStepsText.match(/0-9/gi) || converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/remember/gi) || converstionStepsText.match(/variety/gi) ||
                converstionStepsText.match(/crucial/gi) || converstionStepsText.match(/phone/gi) ||
                converstionStepsText.match(/address/gi) || converstionStepsText.match(/register/gi) ||
                converstionStepsText.match(/account/gi) || converstionStepsText.match(/contact/gi) ||
                converstionStepsText.match(/Credit/gi) || converstionStepsText.match(/Birthday/gi)
            ) {
                await playScript("Okay. How do numbers affect our lives?");
                setSampleAns([" :I suppose that our numbers have lots of impact on people's everyday activities. We use the numbers to quantify the world around us like measuring time also for communication, like telling a person our age ."])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What are some important numbers for you to remember?");
                converstionSteps--;
            }



        }
        else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("How do numbers affect our lives?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating, How do numbers affect our lives?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/suppose/gi) ||
                converstionStepsText.match(/number/gi) || converstionStepsText.match(/important/gi) ||
                converstionStepsText.match(/different/gi) || converstionStepsText.match(/because/gi) ||
                converstionStepsText.match(/0-9/gi) || converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/use/gi) || converstionStepsText.match(/variety/gi) ||
                converstionStepsText.match(/quantify/gi) || converstionStepsText.match(/Develop/gi) ||
                converstionStepsText.match(/Explain/gi) || converstionStepsText.match(/Increasing/gi) ||
                converstionStepsText.match(/Making/gi) || converstionStepsText.match(/know/gi)

            ) {
                await playScript("If you could choose two lucky numbers, what would they be?");
                setSampleAns(["  well i think the number nine would be the one and another would be 18. I'm not sure why but I always like these numbers. If you want to try this try with two numbers like 32,33 – the odds will be in your favor. You can also try another sequence like 9 and 18 (9×2) or the Fibonacci sequence –   2, 3, 5, 8, 13, 2 34.", "2, In number theory, a lucky number is a natural number in a set which is generated by a certain sieve. This sieve is similar to the Sieve of Eratosthenes that generates the primes, but it eliminates n… Their lucky numbers numerology is number 7 which especially holds significance, and doing anything of importance on the 7th day of a month might be a good idea.  1 The number 8 is an extremely lucky number in Chinese numerology. It is the closest thing to the West’s “lucky number 7.” It represents prosperity and completeness."])
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. How do numbers affect our lives?");
                converstionSteps--;
            }



        }


        else if (converstionSteps == 8) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("If you could choose two lucky numbers, what would they be?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating,If you could choose two lucky numbers, what would they be?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/suppose/gi) ||
                converstionStepsText.match(/number/gi) || converstionStepsText.match(/important/gi) ||
                converstionStepsText.match(/different/gi) || converstionStepsText.match(/because/gi) ||
                converstionStepsText.match(/0-9/gi) || converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/use/gi) || converstionStepsText.match(/would/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/Develop/gi) ||
                converstionStepsText.match(/Explain/gi) || converstionStepsText.match(/will/gi) ||
                converstionStepsText.match(/Making/gi) || converstionStepsText.match(/will/gi) ||
                converstionStepsText.match(/alway/gi) || converstionStepsText.match(/Fibonacci/gi) ||
                converstionStepsText.match(/sequence/gi)


            ) {
                await playScript("Okay. Have you ever forgotten an important number?");
                setSampleAns([" Yes, it’s common to forget important numbers. According to a Harvard Health Publishing article, forgetfulness is a normal part of aging and can be caused by various factors such as stress, lack of sleep, and certain medications. The article lists seven types of normal memory problems, including transience, absentmindedness, blocking, misattribution, suggestibility, bias, and persistence"])
                conditionsDependsOnUserSpeech(6)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. If you could choose two lucky numbers, what would they be?");

                converstionSteps--;
            }



        }

        else if (converstionSteps == 9) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Have you ever forgotten an important number?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating,Have you ever forgotten an important number?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/suppose/gi) ||
                converstionStepsText.match(/number/gi) || converstionStepsText.match(/important/gi) ||
                converstionStepsText.match(/different/gi) || converstionStepsText.match(/because/gi) ||
                converstionStepsText.match(/0-9/gi) || converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/use/gi) || converstionStepsText.match(/have/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/forgot/gi) ||
                converstionStepsText.match(/forget/gi) || converstionStepsText.match(/embarrass/gi) ||
                converstionStepsText.match(/actually/gi) || converstionStepsText.match(/common/gi) ||
                converstionStepsText.match(/alway/gi) || converstionStepsText.match(/various/gi) ||
                converstionStepsText.match(/sequence/gi) ||
                converstionStepsText.match(/stress/gi) || converstionStepsText.match(/normal/gi) ||
                converstionStepsText.match(/problem/gi)

            ) {
                await playScript("Okay. That was about section 1. Thanks.");
                conditionsDependsOnUserSpeech(7)
                await sendSpeakingtextToBackend(recordedText);
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Have you ever forgotten an important number?");
                converstionSteps--;
            }





        }

    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";
}