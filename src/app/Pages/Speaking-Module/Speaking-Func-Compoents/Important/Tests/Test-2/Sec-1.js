
let converstionSteps = 0;
export async function Test2Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {

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

        if (!userSpeakingTestNo) {
            if (converstionSteps == 1) {
                if (converstionStepsText.length < 3) {
                    await smallTalkError("Would you kindly tell me your entire name?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am Repeatin ,Would you kindly tell me your entire name?");
                    converstionSteps--;
                }
                else {
                    await playScript("I'll start your exam now. What's your full name, please?");
                    setSampleAns([" Simply you can say your full name. As like my name is Jone dow.You can call me Jone"])
                }

            } else if (converstionSteps == 2) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Would you kindly tell me your entire name?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am Repeatin ,Would you kindly tell me your entire name?");
                    converstionSteps--;
                }
                else if (converstionStepsText.match("name") || converstionStepsText.match("call")) {
                    if (converstionStepsText.match("call")) {
                        await playScript("So, for this section. I'm going to ask some general questions. Where do you live?");
                        setSampleAns([" Simply you can say your area/ or place where you are live in.As like I am living in Dhaka,Bangladesh", "2, I live in kolkata,India"])
                        localStorage.setItem("SpeakingTestNo", testNo);
                        conditionsDependsOnUserSpeech(0)
                    } else {
                        await playScript("Alright. What can I call you?");
                        converstionSteps--;
                    }
                }
                else {
                    await playScript("Alright, what's your name?");
                    converstionSteps--;
                }

            } else if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Where do you live?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am Repeatin ,Where do you live?");
                    converstionSteps--;
                }
                else if (converstionStepsText.match(/live/gi) || converstionStepsText.match(/leaving/gi) ||
                    converstionStepsText.match(/in/gi) || converstionStepsText.match(/at/gi) ||
                    converstionStepsText.match(/from/gi) || converstionStepsText.match(/i am living/gi)) {
                    await playScript("Okay. That's nice. Let's talk about Hometown. What is the name of your hometown?");
                    setSampleAns(["Thanks for asking i am from Mymenshing & my Home town  is Jamalpur"]);
                    conditionsDependsOnUserSpeech(1)

                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again. Where do you live? ");

                    converstionSteps--;
                }

            }
        } else {
            if (converstionSteps == 1) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Would you kindly tell me your entire name?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am Repeatin ,Would you kindly tell me your entire name?");
                    converstionSteps--;
                }
                else {
                    await playScript("All right. How is weather today?");
                    setSampleAns(["I think today's weather is very nice"])
                }

            }
            if (converstionSteps == 2) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("How is your mood today?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am Repeatin ,How is your mood today?");
                    converstionSteps--;
                }
                else {
                    await playScript("Alright. Are you a pet lover?");
                    setSampleAns([" I love pets. I have had dogs, cats and rabbits (it's a great responsability to have them). However I like dogs because you can play and you can go for a walk with them.",
                        "2, I bought my pet, shi tzu one month ago because I really adore their characteristics. My dog can give positive views about different things and it so rewarding to take care of her. Her name is Kendra, isn't a lovely name? "
                    ]);
                    conditionsDependsOnUserSpeech(0)
                }
            }
            if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Are you a pet lover?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am Repeatin ,Are you a pet lover?");
                    converstionSteps--;
                }
                else {
                    await playScript("Okay. That's nice. Let's talk about Hometown. What is the name of your hometown?");
                    setSampleAns(["Thanks for asking i am from Mymenshing & my Home town  is Jamalpur"]);
                    conditionsDependsOnUserSpeech(1)
                }
            }
        }
        if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What is the name of your hometown?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am Repeatin , What is the name of your hometown?");
                converstionSteps--;
            }
            else if (converstionStepsText.match(/from/gi) || converstionStepsText.match(/form/gi) ||
                converstionStepsText.match(/live/gi) || converstionStepsText.match(/at/gi) ||
                converstionStepsText.match(/sure/gi) || converstionStepsText.match(/in/gi) ||
                converstionStepsText.match(/Home/gi) || converstionStepsText.match(/town/gi) ||
                converstionStepsText.match(/Thank/gi) || converstionStepsText.match(/actually/gi)) {

                await playScript("Okay. Where is your hometown located?");
                setSampleAns([" As i said that i am from small city called jamalpur it's in Mymensingh Division."]);
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What is the name of your hometown?");
                converstionSteps--;
            }
        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Where is your hometown located?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am Repeatin. Where is your hometown located?");
                converstionSteps--;
            }
            else if (converstionStepsText.match(/hometown/gi) || converstionStepsText.match(/locat/gi) ||
                converstionStepsText.match(/home/gi) || converstionStepsText.match(/town/gi) ||
                converstionStepsText.match(/in/gi) || converstionStepsText.match(/at/gi) ||
                converstionStepsText.match(/city/gi) || converstionStepsText.match(/division/gi) ||
                converstionStepsText.match(/village/gi) || converstionStepsText.match(/near/gi) ||
                converstionStepsText.match(/oposite/gi)
            ) {

                await playScript("Okay. Is your hometown a big city or a small place?");
                setSampleAns(["Kochi is a medium-sized city with a cozy atmosphere and a population of somewhere in between 80,000 and 1 lakh people."
                ]);
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Where is your hometown located?");
                converstionSteps--;
            }
        } else if (converstionSteps == 6) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Is your hometown a big city or a small place?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am Repeatin. Is your hometown a big city or a small place?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/home/gi) || converstionStepsText.match(/town/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/belive/gi) ||
                converstionStepsText.match(/big/gi) || converstionStepsText.match(/people/gi) ||
                converstionStepsText.match(/city/gi) || converstionStepsText.match(/small/gi) ||
                converstionStepsText.match(/place/gi) || converstionStepsText.match(/medium/gi) ||

                converstionStepsText.match(/population/gi) || converstionStepsText.match(/many/gi) ||
                converstionStepsText.match(/few/gi) || converstionStepsText.match(/somewhere/gi)

            ) {

                await playScript("Okay. How long have you been living there?");
                setSampleAns(["I had lived there for around 15 years before my family left for Bangalore. It’s been more than ten years since I left my hometown."]);

                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Is your hometown a big city or a small place?");
                converstionSteps--;
            }
        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" How long have you been living there?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am Repeatin. How long have you been living there?");
                converstionSteps--;
            }
            else if (converstionStepsText.match(/was/gi) || converstionStepsText.match(/long/gi) ||
                converstionStepsText.match(/have/gi) || converstionStepsText.match(/been/gi) ||
                converstionStepsText.match(/liv/gi) || converstionStepsText.match(/there/gi) ||
                converstionStepsText.match(/young/gi) || converstionStepsText.match(/old/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/around/gi) ||
                converstionStepsText.match(/before/gi) || converstionStepsText.match(/familly/gi) ||
                converstionStepsText.match(/when/gi) || converstionStepsText.match(/where/gi) ||
                converstionStepsText.match(/than/gi) || converstionStepsText.match(/since/gi)

            ) {

                await playScript("Okay. Do you like your hometown? If yes, what do you like (most) about your hometown?");
                setSampleAns([
                    "Yes, I do like my hometown! I like the hospitality of people in my hometown. Also, everyone was willing to give others a hand when they needed help."]);
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  How long have you been living there?");
                converstionSteps--;
            }
        } else if (converstionSteps == 8) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Do you like your hometown? If yes, what do you like (most) about your hometown?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am Repeatin. Do you like your hometown? If yes, what do you like (most) about your hometown?");
                converstionSteps--;
            }
            else if (converstionStepsText.match(/home/gi) || converstionStepsText.match(/town/gi) ||
                converstionStepsText.match(/being/gi) || converstionStepsText.match(/to/gi) ||
                converstionStepsText.match(/most/gi) || converstionStepsText.match(/like/gi) ||
                converstionStepsText.match(/love/gi) || converstionStepsText.match(/very/gi) ||
                converstionStepsText.match(/lot/gi) || converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/no/gi) || converstionStepsText.match(/yes/gi) ||
                converstionStepsText.match(/make/gi) || converstionStepsText.match(/huge/gi) ||

                converstionStepsText.match(/place/gi) || converstionStepsText.match(/beauty/gi) ||
                converstionStepsText.match(/willing/gi) || converstionStepsText.match(/human/gi) ||
                converstionStepsText.match(/people/gi) || converstionStepsText.match(/give/gi) ||
                converstionStepsText.match(/help/gi) || converstionStepsText.match(/need/gi) ||
                converstionStepsText.match(/fewer/gi)
            ) {

                await playScript("Okay. Is there anything you dislike about it?");
                setSampleAns([
                    " I love my hometown Kochi, but I wish the traffic was better. It can be hard to get around sometimes, and it’s not always peaceful. But the city is getting better every day, and I think it has the potential to be a major tourist destination."]);
                conditionsDependsOnUserSpeech(6)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you like your hometown? If yes, what do you like (most) about your hometown?");
                converstionSteps--;
            }
        } else if (converstionSteps == 9) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Is there anything you dislike about it?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am Repeatin. Is there anything you dislike about it?");
                converstionSteps--;
            }
            else if (converstionStepsText.match(/love/gi) || converstionStepsText.match(/home/gi) ||
                converstionStepsText.match(/town/gi) || converstionStepsText.match(/at/gi) ||
                converstionStepsText.match(/wish/gi) || converstionStepsText.match(/traffic/gi) ||
                converstionStepsText.match(/important/gi) || converstionStepsText.match(/better/gi) ||
                converstionStepsText.match(/being/gi) || converstionStepsText.match(/hard/gi) ||
                converstionStepsText.match(/from/gi) || converstionStepsText.match(/person/gi) ||
                converstionStepsText.match(/most/gi) || converstionStepsText.match(/around/gi) ||
                converstionStepsText.match(/lot/gi) || converstionStepsText.match(/peace/gi) ||
                converstionStepsText.match(/city/gi) || converstionStepsText.match(/every/gi) ||
                converstionStepsText.match(/make/gi) || converstionStepsText.match(/huge/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/potential/gi) ||
                converstionStepsText.match(/major/gi) || converstionStepsText.match(/tourist/gi) ||
                converstionStepsText.match(/major/gi) || converstionStepsText.match(/destination/gi)


            ) {

                await playScript("Okay.So, What is your hometown famous for?");
                setSampleAns(["My hometown is famous for its beauty, which remains constant throughout the year. It’s also known for its rich culture and kind people. The stunning architecture, music, and fashion contribute to its global reputation"]);
                conditionsDependsOnUserSpeech(7)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Is there anything you dislike about it?");
                converstionSteps--;
            }
        } else if (converstionSteps == 10) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What is your hometown famous for?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am Repeatin. What is your hometown famous for?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/hometown/gi) || converstionStepsText.match(/home/gi) ||
                converstionStepsText.match(/town/gi) || converstionStepsText.match(/actually/gi) ||
                converstionStepsText.match(/generally/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/famou/gi) || converstionStepsText.match(/for/gi) ||
                converstionStepsText.match(/beauty/gi) || converstionStepsText.match(/happy/gi) ||
                converstionStepsText.match(/Sad/gi) || converstionStepsText.match(/remain/gi) ||
                converstionStepsText.match(/constant/gi) || converstionStepsText.match(/through/gi) ||
                converstionStepsText.match(/culture/gi) || converstionStepsText.match(/people/gi) ||
                converstionStepsText.match(/architecture/gi) || converstionStepsText.match(/music/gi) ||
                converstionStepsText.match(/person/gi) || converstionStepsText.match(/fashion/gi) ||
                converstionStepsText.match(/contribute/gi) || converstionStepsText.match(/global/gi) ||
                converstionStepsText.match(/reputation/gi) || converstionStepsText.match(/feel/gi)
            ) {
                await playScript("Okay. That was about section 1. Thanks.");
                conditionsDependsOnUserSpeech(8)
                await sendSpeakingtextToBackend(recordedText);
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Does smiling always make a person happy & why?");
                converstionSteps--;
            }



        }

    }

    converstionStepsText = "";


}