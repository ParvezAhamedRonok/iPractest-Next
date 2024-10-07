let converstionSteps = 0;
export async function Test8Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {
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
        //         "Welcome to the speaking portion of the ielts exam. My name is adrian. & I will be your examiner for this part of the test. I will give you instructions for each of the parts. What is your full name?"
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
                        setSampleAns(["You can simply say . You can call me Jone or your name here"]);
                        converstionSteps--;
                    }
                }
                else {
                    await playScript("Alright, what's your name?");
                    setSampleAns([" Hellow sir , I am jone dow . You can call me Mr. Jone"]);
                    converstionSteps--;
                }

            } else if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Where do you live?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,  Where do you live?");
                    converstionSteps--;
                }
                else if (converstionStepsText.match(/live/gi) || converstionStepsText.match(/leaving/gi) ||
                    converstionStepsText.match(/in/gi) || converstionStepsText.match(/at/gi) ||
                    converstionStepsText.match(/from/gi) || converstionStepsText.match(/i am living/gi)) {
                    await playScript("So, what do you do in your free time?");
                    setSampleAns([` in my leisure time i like to watch movies and reading books just last night i finished reading book this summer i turned pretty.`, `2,  in my spare time i love to do photography and upload short videos on instagram i baked cupcakes and photographed and uploaded it on my social media profile just yesterday.`])
                    conditionsDependsOnUserSpeech(1)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Where do you live? ");
                    converstionSteps--;
                }

            }
        } else {
            if (converstionSteps == 1) {
                await playScript("Okay. Are you happy today?");
                setSampleAns(["Yes or No that you can simply answer.", "2, you can simply say what you are feeling now"])
            }
            if (converstionSteps == 2) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Are you ready?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,  Are you ready?");
                    converstionSteps--;
                }
                else {
                    await playScript("Okay. Do you work or study?");
                    setSampleAns(["  I work. I’ve been working as a freelance web designer for two years now. ", "2, I’m working in a specialist medical field that deals with diseases related to aging. My employer is a large multinational company. ", "3,  I study. I’m still in high school, in my final year. So I’m studying for my final exams now. "])
                    conditionsDependsOnUserSpeech(0)
                }
            }
            if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Do you work or study?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,   Do you work or study?");
                    converstionSteps--;
                }
                else {
                    await playScript("So, what do you do in your free time?");
                    setSampleAns([` in my leisure time i like to watch movies and reading books just last night i finished reading book this summer i turned pretty.`, `2,  in my spare time i love to do photography and upload short videos on instagram i baked cupcakes and photographed and uploaded it on my social media profile just yesterday.`])
                    conditionsDependsOnUserSpeech(1)
                }
            }
        }


        if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" what do you do in your free time?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating,   what do you do in your free time?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/free/gi) || converstionStepsText.match(/time/gi) ||
                converstionStepsText.match(/spare/gi) || converstionStepsText.match(/upload/gi) ||
                converstionStepsText.match(/do/gi) || converstionStepsText.match(/Work/gi) ||
                converstionStepsText.match(/Exercise/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/Read/gi) || converstionStepsText.match(/write/gi) ||
                converstionStepsText.match(/Take/gi) || converstionStepsText.match(/Invest/gi) ||
                converstionStepsText.match(/money/gi) || converstionStepsText.match(/relieves/gi) ||
                converstionStepsText.match(/make/gi) || converstionStepsText.match(/learn/gi) ||
                converstionStepsText.match(/Play /gi) || converstionStepsText.match(/Pray/gi) ||
                converstionStepsText.match(/meditate/gi) || converstionStepsText.match(/Spend/gi) ||
                converstionStepsText.match(/Pursue/gi) || converstionStepsText.match(/hobby/gi) ||
                converstionStepsText.match(/Deliver/gi) || converstionStepsText.match(/relieves/gi) ||
                converstionStepsText.match(/skill/gi) || converstionStepsText.match(/Grow/gi) ||
                converstionStepsText.match(/walt/gi) || converstionStepsText.match(/run/gi) ||
                converstionStepsText.match(/fell/gi) || converstionStepsText.match(/watch/gi) ||
                converstionStepsText.match(/see/gi) || converstionStepsText.match(/sleep/gi) ||
                converstionStepsText.match(/bike/gi) || converstionStepsText.match(/travel/gi)

            ) {
                await playScript("Okay. Let's talk about the home. Do you live in an apartment or house?");
                setSampleAns([` i live in an
                The apartment is on the sixth floor of a high rise building in the suburbs of ahmedabad. I have lived there since I was born.`, "2, A sample answer to this question is “I live in an apartment. I find it convenient as it is located in the city center and is close to my work and other amenities. The apartment is also well-maintained and equipped with modern amenities, such as a gym and a swimming pool”2."])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  what do you do in your free time?");
                converstionSteps--;
            }




        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Do you live in an apartment or house?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating,   Do you live in an apartment or house?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/live/gi) || converstionStepsText.match(/living/gi) ||
                converstionStepsText.match(/leave/gi) || converstionStepsText.match(/house/gi) ||
                converstionStepsText.match(/do/gi) || converstionStepsText.match(/apartment/gi) ||
                converstionStepsText.match(/parent/gi) || converstionStepsText.match(/alone/gi) ||
                converstionStepsText.match(/self/gi) || converstionStepsText.match(/city /gi) ||
                converstionStepsText.match(/area/gi) || converstionStepsText.match(/resident/gi) ||
                converstionStepsText.match(/Do/gi) || converstionStepsText.match(/yes/gi) ||
                converstionStepsText.match(/no/gi) || converstionStepsText.match(/younger/gi) ||
                converstionStepsText.match(/elder/gi)

            ) {
                await playScript("Which is your favorite room and why?");
                setSampleAns([" really love my bedroom because it is my own private place and i have decorated it to my liking. I can find comfort and solitude there. I really like to study in my bedroom and i have spent many hours preparing for this exam over the past few months .Your favorite room is the one that makes you feel comfortable, relaxed, and happy12. It could be your bedroom, where you can enjoy the calmness and peace1. It could be your family room, where you can admire the colors and patterns of your decor1. It could be a special space that you created for your hobbies and interests, such as a man cave, a shed, or a garage corner2. Your favorite room is the one that reflects your personality and preferences.This question is quite easy to answer. Simply choose a room that you like, then explain why you like it. For reasons to like a room, you could talk about: 1. How comfy it is 2. How private it is 3. How sociable it is 4. Things you like to do there 5. Things you and your family or flatmates do there 6. The pleasant decor"])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you live in an apartment or house?");
                converstionSteps--;
            }


        } else if (converstionSteps == 6) {

            if (converstionStepsText.length < 10) {
                await smallTalkError(" Which is your favorite room and why?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating,  Which is your favorite room and why?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/favorite/gi) || converstionStepsText.match(/because/gi) ||
                converstionStepsText.match(/leave/gi) || converstionStepsText.match(/house/gi) ||
                converstionStepsText.match(/room/gi) || converstionStepsText.match(/apartment/gi) ||
                converstionStepsText.match(/love/gi) || converstionStepsText.match(/alone/gi) ||
                converstionStepsText.match(/self/gi) || converstionStepsText.match(/like/gi) ||
                converstionStepsText.match(/really/gi) || converstionStepsText.match(/private/gi) ||
                converstionStepsText.match(/place/gi) || converstionStepsText.match(/actually/gi) ||
                converstionStepsText.match(/find/gi) || converstionStepsText.match(/comfort/gi) ||
                converstionStepsText.match(/solitude/gi) ||
                converstionStepsText.match(/feel/gi) || converstionStepsText.match(/comfort/gi) ||
                converstionStepsText.match(/relaxed/gi) || converstionStepsText.match(/happy/gi) ||
                converstionStepsText.match(/space/gi) || converstionStepsText.match(/personality/gi) ||
                converstionStepsText.match(/preferences/gi) || converstionStepsText.match(/explain/gi) ||
                converstionStepsText.match(/decor/gi)
            ) {
                await playScript(" How often do you clean your home?");
                setSampleAns([" I regularly tidy up my house whether i am taking out the trash washing dishes or doing bit of dusting. I always do my part to keep my home clean. Just yesterday I swept and vacuumed the floors."])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Which is your favorite room and why?");
                converstionSteps--;
            }


        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("How often do you clean your home?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating,  How often do you clean your home?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/often/gi) || converstionStepsText.match(/home/gi) ||
                converstionStepsText.match(/clean/gi) || converstionStepsText.match(/love/gi) ||
                converstionStepsText.match(/like/gi) || converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/no/gi) || converstionStepsText.match(/actually/gi) ||
                converstionStepsText.match(/regularly/gi) || converstionStepsText.match(/taking/gi) ||
                converstionStepsText.match(/dust/gi) || converstionStepsText.match(/swept/gi) ||
                converstionStepsText.match(/vacuumed/gi) || converstionStepsText.match(/depend/gi) ||
                converstionStepsText.match(/time/gi) || converstionStepsText.match(/day/gi) ||
                converstionStepsText.match(/week/gi) || converstionStepsText.match(/month/gi) ||
                converstionStepsText.match(/year/gi) || converstionStepsText.match(/few /gi) ||
                converstionStepsText.match(/replace/gi)
            ) {
                await playScript("What is your least favorite chore, and why?");
                setSampleAns([` i don't like to clean the windows because i find it to be tiring and time taking task
                it is really tough to get all the dirt off and really make it clean
                Cleaning the Bathroom/Toilet
                2. Washing the Dishes
                3. Cleaning the Stovetop and Oven
                4. Doing Laundry and Ironing
                5. Dusting
                6. Sweeping and Vacuuming
                7. Mopping
                8. Grocery Shopping and Cooking
                9. Cleaning the Windows
                Wrapping it all Up
                `])
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. How often do you clean your home?");
                converstionSteps--;
            }



        } else if (converstionSteps == 8) {

            if (converstionStepsText.length < 10) {
                await smallTalkError(" What is your least favorite chore, and why?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating,  What is your least favorite chore, and why?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/least/gi) || converstionStepsText.match(/list/gi) ||
                converstionStepsText.match(/favorite/gi) || converstionStepsText.match(/chore/gi) ||
                converstionStepsText.match(/because/gi) || converstionStepsText.match(/clean/gi) ||
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/no/gi) || converstionStepsText.match(/actually/gi) ||
                converstionStepsText.match(/do/gi) || converstionStepsText.match(/like/gi) ||
                converstionStepsText.match(/love/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/Doing/gi) || converstionStepsText.match(/Bathroom/gi) ||
                converstionStepsText.match(/Dishes/gi) || converstionStepsText.match(/Dust/gi) ||
                converstionStepsText.match(/Sweep/gi) || converstionStepsText.match(/Mop/gi) ||
                converstionStepsText.match(/Grocery/gi) || converstionStepsText.match(/shop/gi) ||
                converstionStepsText.match(/cook/gi)
            ) {
                await playScript("So , when do you feel your home is pleasant?");
                setSampleAns([` :i find my home to be comfortable when it is organized and filled with aroma of my home cooking this means that dinner is almost ready and the family is about to sit and enjoy the meal together yesterday we had a good conversation while eating my mom's famous chicken biryani First, privacy and my things. I also feel good if the temperature is not that hot or cold. What’s the difference between where you are living now and where you have lived in the past? In the past, I lived in a big house, I have my own toilet and I have a place for my office that is a bit far from 
                `])
                conditionsDependsOnUserSpeech(6)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What is your least favorite chore, and why?");
                converstionSteps--;
            }



        } else if (converstionSteps == 9) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" when do you feel your home is pleasant?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating,  when do you feel your home is pleasant?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/feel/gi) || converstionStepsText.match(/home/gi) ||
                converstionStepsText.match(/favorite/gi) || converstionStepsText.match(/pleasant/gi) ||
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/no/gi) || converstionStepsText.match(/actually/gi) ||
                converstionStepsText.match(/do/gi) || converstionStepsText.match(/like/gi) ||
                converstionStepsText.match(/love/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/because/gi) || converstionStepsText.match(/every/gi) ||
                converstionStepsText.match(/comfortable/gi) || converstionStepsText.match(/find/gi) ||
                converstionStepsText.match(/dinner/gi) || converstionStepsText.match(/enjoy/gi) ||
                converstionStepsText.match(/family/gi) || converstionStepsText.match(/younger/gi) ||
                converstionStepsText.match(/elder/gi) || converstionStepsText.match(/sister/gi) ||
                converstionStepsText.match(/brother/gi) ||
                converstionStepsText.match(/father/gi) || converstionStepsText.match(/mother/gi) ||
                converstionStepsText.match(/grand/gi) || converstionStepsText.match(/little/gi) ||
                converstionStepsText.match(/together/gi) || converstionStepsText.match(/preferences/gi)
            ) {
                await playScript("Okay. That was about section 1. Thanks.");
                conditionsDependsOnUserSpeech(7)
                await sendSpeakingtextToBackend(recordedText);
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. when do you feel your home is pleasant?");
                converstionSteps--;
            }



        }

    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";
}