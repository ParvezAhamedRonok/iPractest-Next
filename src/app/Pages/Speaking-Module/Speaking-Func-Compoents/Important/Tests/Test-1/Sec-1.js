

//Test-1 Section-1 function.......................
let converstionSteps = 0;
export async function Test1Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {



    //variables...
    console.log(converstionSteps, "--", converstionStepsText, "--", userSpeakingTestNo, "--", testNo, "--", recordedText);


    if (converstionSteps == 0 && converstionStepsText == '') {
        if (!userSpeakingTestNo) {
            await playScript(
                "Hello and welcome to the IELTS speaking test. Jone is my name. I am your examiner. Are you Ready?"
            );
            setSampleAns(["Simply you can say the positive answer. As like Yes i am Ready to give the test. ", "2, Yes, I am reay.You can proceed the test"])

        } else {
            await playScript("Are you ready to take the test then?");
            setSampleAns(["Simply you can say the positive answer. As like Yes i am Ready to give the test. ", "2, Yes, I am reay.You can proceed the test"]);
        }

    }
    converstionSteps++
    if (converstionStepsText != '') {
        if (converstionSteps == 0 && converstionStepsText == '') {
            if (!userSpeakingTestNo) {
                await playScript(
                    "Hello and welcome to the IELTS speaking test. Jone is my name. I am your examiner. Are you Ready?"
                );
                setSampleAns(["Simply you can say the positive answer. As like Yes i am Ready to give the test.", "2, Yes, I am reay.You can proceed the test"]);

            } else {
                await playScript("Are you ready to take the test?");
                setSampleAns(["Simply you can say the positive answer. As like Yes i am Ready to give the test. ", "2, Yes, I am reay.You can proceed the test"]);
            }

        }
        if (!userSpeakingTestNo) {
            if (converstionSteps == 1) {
                await playScript(
                    "I'll start your exam now. What's your full name, please?"
                );

            } else if (converstionSteps == 2) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" What's your full name, please?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("Ok , I am repeating.  What's your full name?");
                    converstionSteps--;
                }
                else if (converstionStepsText.match("name") || converstionStepsText.match("call")) {
                    await playScript("So,for this section. I'm going to ask some general questions. Where do you live? ");
                    setSampleAns(["Simply you can say your area/ or place where you are live in. As like I am living in Dhaka,Bangladesh"])
                    localStorage.setItem("SpeakingTestNo", testNo);
                    conditionsDependsOnUserSpeech(0)

                }
                else {
                    await playScript("Sorry, what's your name?");
                    converstionSteps--;
                }

            } else if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" What is your favorite food?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("Ok , I am repeating.  What is your favorite food?");
                    converstionSteps--;
                }
                else if (converstionStepsText.match(/live/gi) || converstionStepsText.match(/leaving/gi) ||
                    converstionStepsText.match(/in/gi) || converstionStepsText.match(/at/gi) ||
                    converstionStepsText.match(/from/gi) || converstionStepsText.match(/i am living/gi)) {
                    await playScript("OK, let's talk about food. What is your favorite food?");
                    setSampleAns(["My favorite food is ramen noodles because ramen is so tasty and convenient. You only need to add hot water to prepare it. And it comes in so many flavors. My favorite flavors of ramen are shrimp and spicy beef.", "I love fried chicken, especially chicken from KFC. My favorite is the big bucket of chicken legs. I would eat it every day if it wasn’t so unhealthy. ", "My favorite food is a vegetarian dish. It’s a kind of stir fry with tofu and all sorts of vegetables, including broccoli, carrots, and asparagus, with olive oil and soy sauce for flavoring. "]);
                    conditionsDependsOnUserSpeech(1)
                } else {
                    await playScript("Sorry I cannot understand your answer. What is your favorite food?");
                    setSampleAns([" My favorite food is ramen noodles because ramen is so tasty and convenient. You only need to add hot water to prepare it. And it comes in so many flavors. My favorite flavors of ramen are shrimp and spicy beef.", "2, I live in kolkata,India"])
                    converstionSteps--;
                }

            }
        } else {
            if (converstionSteps == 1) {
                await playScript("Okay. Are you happy today?");
                setSampleAns(["Yes, I am feelling well today", "Umm, yeah i am good.Just felling kind of nervous"]);

            }
            if (converstionSteps == 2) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Are you happy today?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("Ok , I am repeating.Are you happy today?");
                    converstionSteps--;
                }
                else {
                    conditionsDependsOnUserSpeech(0)
                    await playScript("Okay. What do you do?");
                    setSampleAns([" I’m currently working as a lawyer for an immigration law firm. In fact, just last week my firm settled a case in which we were able to reunite a father with his family and prevented him from being deported.", "2, I help people understand how to do research before job interviews, and how to answer difficult interview questions. I also give advice on how to ask for raises and negotiate salary after getting a job offer.", "3, I make websites that look great and are easy to use. It’s fun seeing the different ways people interact with my creations and I love getting to make something that’s useful for people."])
                }


            }
            if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" What do you do?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("Ok , I am repeating. What do you do?");
                    converstionSteps--;
                }
                else {
                    await playScript("So, let's talk about food. What is your favorite food?");
                    setSampleAns(["1. My favorite food is ramen noodles because ramen is so tasty and convenient. You only need to add hot water to prepare it. And it comes in so many flavors. My favorite flavors of ramen are shrimp and spicy beef.", "I love fried chicken, especially chicken from KFC. My favorite is the big bucket of chicken legs. I would eat it every day if it wasn’t so unhealthy. ", "My favorite food is a vegetarian dish. It’s a kind of stir fry with tofu and all sorts of vegetables, including broccoli, carrots, and asparagus, with olive oil and soy sauce for flavoring. "]);
                    conditionsDependsOnUserSpeech(1)
                }


            }
        }

        if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What is your favorite food?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("Ok , I am repeating.What is your favorite food?");
                converstionSteps--;
            }
            else if (converstionStepsText.match(/my/gi) || converstionStepsText.match(/food/gi) ||
                converstionStepsText.match(/favorite/gi) || converstionStepsText.match(/pizza/gi) ||
                converstionStepsText.match(/noodles/gi) || converstionStepsText.match(/flavor/gi) ||
                converstionStepsText.match(/spicy/gi) || converstionStepsText.match(/beef/gi) ||
                converstionStepsText.match(/dish/gi) || converstionStepsText.match(/cheese/gi) ||
                converstionStepsText.match(/pasta/gi) || converstionStepsText.match(/fish/gi) ||
                converstionStepsText.match(/chicken/gi) || converstionStepsText.match(/delicious/gi)
            ) {
                await playScript("Okay. Do you like trying new foods?");

                setSampleAns([" Yes i do.There are so many dishes in other countries that you would never try if you do not traveled outside the U.S. Traveling somewhere new opens your eyes and your taste buds to a whole new range of authentic flavor profiles and foods that you would’ve otherwise been missing out on."]);
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  What is your favorite food?");
                converstionSteps--;
            }

        }

        else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you like trying new foods?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("Ok , I am repeating.Do you like trying new foods?");
                converstionSteps--;
            }
            else if (converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/actually/gi) || converstionStepsText.match(/basically/gi) ||
                converstionStepsText.match(/do/gi) || converstionStepsText.match(/like/gi) ||
                converstionStepsText.match(/love/gi) || converstionStepsText.match(/try/gi) ||
                converstionStepsText.match(/new/gi) || converstionStepsText.match(/food/gi) ||
                converstionStepsText.match(/many/gi) || converstionStepsText.match(/time/gi)
            ) {
                await playScript("Great. So, What do you usually have in the morning, coffee or tea?");
                setSampleAns(["Basically i take tea in the morning.Tea has less caffeine than coffee. Like coffee, tea can also help relieve morning fatigue. But coffee can give you more energy than tea, but its disadvantages are also different on an empty stomach. Additionally, the caffeine in tea is not the only thing that will help you wake up and kick-start your brain in the morning. Tea also contains L-theanine and amino acids that can be metabolized by the body."
                    , "2, Whether tea is better than coffee or vice versa first thing in the morning really depends on the person who is consuming it,” she said. “That’s true of everything we consume. A lot of my clients are New Yorkers, for example, and they are wired and in front of technology all day. They tend to be too responsive to caffeine, so I suggest they drink tea instead. But a handful of people can have coffee before bed and be able to sleep after."]);
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent.I'm saying it again. Do you like trying new foods?");

                converstionSteps--;
            }
        }
        else if (converstionSteps == 6) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What do you usually have in the morning, coffee or tea?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("Ok , What do you usually have in the morning, coffee or tea?");
                converstionSteps--;
            }
            else if (converstionStepsText.match(/actually/gi) || converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/take/gi) || converstionStepsText.match(/get/gi) ||
                converstionStepsText.match(/make/gi) || converstionStepsText.match(/breakfat/gi) ||
                converstionStepsText.match(/early/gi) || converstionStepsText.match(/wake/gi) ||
                converstionStepsText.match(/can/gi) || converstionStepsText.match(/yes/gi) ||
                converstionStepsText.match(/no/gi) || converstionStepsText.match(/usually/gi) ||
                converstionStepsText.match(/morning/gi) || converstionStepsText.match(/coffee/gi) ||
                converstionStepsText.match(/tea/gi) || converstionStepsText.match(/water/gi) ||
                converstionStepsText.match(/make/gi) || converstionStepsText.match(/breakfat/gi)

            ) {
                await playScript("OK . So, do you like fast food?");
                setSampleAns([" Yes i love or like fast food.I’m guilty of it; all of us have been at some point; there are days where you just don’t feel like cooking, and it’s as simple as that. Maybe you feel tired – or have had a long day; exhaustion soon sinks in, as you find yourself one step closer to just drifting to sleep, and worrying about food tomorrow. Fortunately, fast food comes in handy during these times – by buying you a little extra time to rest – or work on  whatever other tasks you need to get done.",
                    "2, No i don't like fast foods.Fast food has its advantages and disadvantages. Some of the advantages include the option to eat something instead of skipping a meal, convenience, and affordability 2. However, fast food is often high in calories, fat, sugar, and salt, and can lead to health problems such as obesity, high cholesterol, and cardiovascular disease 12.It’s important to maintain a balanced diet and consume fast food in moderation. If you’re looking for healthier fast food options, consider choosing grilled or baked items instead of fried, opting for smaller portion sizes, and avoiding sugary drinks",
                    "3, I never eat fast food but I’m not a vegetarian. I love my wife’s cooking and it is healthier than any other restaurant, not to speak of fast food. Even though I am busy with working or in a hurry, I will bring homemade sandwich for lunch. But my children like fast food."
                ]);
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What do you usually have in the morning coffee or tea?");
                converstionSteps--;
            }

        }
        else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" do you like fast food?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am Repeatin ,  do you like fast food?");
                converstionSteps--;
            }
            else if (converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/actually/gi) || converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                converstionStepsText.match(/fast/gi) || converstionStepsText.match(/food/gi) ||
                converstionStepsText.match(/Yeah/gi) || converstionStepsText.match(/tast/gi) ||
                converstionStepsText.match(/calorie/gi) || converstionStepsText.match(/course/gi) ||
                converstionStepsText.match(/healthy/gi) || converstionStepsText.match(/high/gi) ||
                converstionStepsText.match(/fat/gi) || converstionStepsText.match(/gym/gi) ||
                converstionStepsText.match(/few/gi) || converstionStepsText.match(/many/gi) ||
                converstionStepsText.match(/more/gi) || converstionStepsText.match(/time/gi) ||
                converstionStepsText.match(/once/gi) || converstionStepsText.match(/some/gi) ||
                converstionStepsText.match(/week/gi) || converstionStepsText.match(/day/gi) ||
                converstionStepsText.match(/month/gi) || converstionStepsText.match(/sometime/gi)

            ) {
                await playScript("OK . That was about section 1. Thanks.");
                setSampleAns([
                    "Cooking meals at home takes time. It takes time to shop for the ingredients, prep and cook the food, and then eat the meal and clear up the dishes. Fast food is certainly popular because it is a quick and easy meal. No time is spent shopping, prepping, or cooking at all.",
                    "3, Fast food can be used as a reward system for children. A highly effective reward’s system at that! Want the kids to get their homework finished in record time? Promise them their favorite fast food. Want the house cleaned and chores done without moans and groans? Promise the kids their favorite fast foods. Need a way to lure a child into eating some form of vegetables? Use clever, fast food choices to do so."]);
                await playScript("Okay. That was about section 1. Thanks.");
                conditionsDependsOnUserSpeech(5)
                await sendSpeakingtextToBackend(recordedText);
            } else {
                await playScript("Sorry, Your answer is not relevent.  I'm saying it again.  do you like fast food?");
                converstionSteps--;
            }

        }

    }

    // console.log("converstionStepsText");
    // console.log(converstionStepsText);
    converstionStepsText = "";

}






//Test-1 Section-2 function.......................







//Test-1 Section-3 function.......................