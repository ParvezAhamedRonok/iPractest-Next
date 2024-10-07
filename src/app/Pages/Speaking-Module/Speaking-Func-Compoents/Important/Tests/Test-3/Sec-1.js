
let converstionSteps = 0;
export async function Test3Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {
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
                await playScript(
                    "I'll start your exam now. What's your full name, please??"
                );
            } else if (converstionSteps == 2) {
                if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am Repeatin , what's your name?");
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
                    await playScript("Okay. Let's talk about family members. How many menbers are in your family?");
                    setSampleAns([" You can simply say that how many member exist into your family. like I have 4 members in my family & i am younger than all", "2, We have 2 or 3 members into our family", "3, We are a join family that why we have a lot of members into our family nearly 20 prople"])
                    conditionsDependsOnUserSpeech(1)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Where do you live? ");
                    converstionSteps--;
                }

            }
        } else {
            if (converstionSteps == 1) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("What is your full name?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am Repeatin ,What is your full name?");
                    converstionSteps--;
                }
                else {
                    await playScript("So, do you like sports?");
                    setSampleAns([" Yes, I do. I really enjoy sports, especially football, which I like to play with my friends at the weekends. ", "2, Yes, I love sports because they’re a lot of fun and playing sports is very important for my health. I find that sports are also a great way to spend time with my friends."])
                }
            }
            if (converstionSteps == 2) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("do you like sports?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am Repeatin. do you like sports?");
                    converstionSteps--;
                }
                else {
                    await playScript("Okay. So, do you work or study?");
                    setSampleAns(["  I work. I’ve been working as a freelance web designer for two years now. ", "2, I’m working in a specialist medical field that deals with diseases related to aging. My employer is a large multinational company. ", "3,  I study. I’m still in high school, in my final year. So I’m studying for my final exams now. "])
                    conditionsDependsOnUserSpeech(0)
                }
            }
            if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("do you work or study?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am Repeatin ,do you work or study?");
                    converstionSteps--;
                }
                else {
                    await playScript("Okay. Let's talk about family members. How many menbers are in your family?");
                    setSampleAns([" You can simply say that how many member exist into your family. like I have 4 members in my family & i am younger than all", "2, We have 2 or 3 members into our family", "3, We are a join family that why we have a lot of members into our family nearly 20 prople"])
                    conditionsDependsOnUserSpeech(1)
                }
            }
        }


        if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" How many menbers are in your family?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am Repeatin , How many menbers are in your family?");
                converstionSteps--;
            }
            else if (converstionStepsText.match(/one/gi) || converstionStepsText.match(/two/gi) ||
                converstionStepsText.match(/three/gi) || converstionStepsText.match(/four/gi) ||
                converstionStepsText.match(/five/gi) || converstionStepsText.match(/six/gi) ||
                converstionStepsText.match(/seven/gi) || converstionStepsText.match(/eight/gi) ||
                converstionStepsText.match(/nine/gi) || converstionStepsText.match(/ten/gi) ||
                converstionStepsText.match(/many/gi) || converstionStepsText.match(/menber/gi) ||
                converstionStepsText.match(/family/gi) || converstionStepsText.match(/my/gi)
            ) {
                await playScript("Okay. Do you have siblings?");
                setSampleAns([" Yes, i have 2 siblings.", "2, No, i don't have any siblings i am alone of my parents."])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  How many menbers are in your family?");
                converstionSteps--;
            }

        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you have siblings?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am Repeatin ,Do you have siblings?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/actually/gi) || converstionStepsText.match(/alone/gi) ||
                converstionStepsText.match(/family/gi) || converstionStepsText.match(/parents/gi) ||
                converstionStepsText.match(/one/gi) || converstionStepsText.match(/two/gi) ||
                converstionStepsText.match(/three/gi) || converstionStepsText.match(/four/gi) ||
                converstionStepsText.match(/five/gi) || converstionStepsText.match(/six/gi) ||
                converstionStepsText.match(/have/gi) || converstionStepsText.match(/elder/gi) ||
                converstionStepsText.match(/big/gi) || converstionStepsText.match(/younger/gi) ||
                converstionStepsText.match(/little/gi) || converstionStepsText.match(/small/gi)
            ) {
                await playScript("Okay. Which time is best for you and your family?");
                setSampleAns([' Spending time with family strengthens family ties. Also, families who enjoy group activities will develop strong relationships and handle stressful situations with ease.In this busy day and age, it is a luxury for parents to spend time with their children. Making time for the family will allow you to teach your kids valuable life lessons like kindness and fairness.', "2, When everyone sit together that moments is on of the best moment for me."])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you have siblings?");
                converstionSteps--;
            }

        } else if (converstionSteps == 6) {

            if (converstionStepsText.length < 10) {
                await smallTalkError("Which time is best for you and your family?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am Repeatin. Which time is best for you and your family?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/when/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/basically/gi) || converstionStepsText.match(/together/gi) ||
                converstionStepsText.match(/time/gi) || converstionStepsText.match(/best/gi) ||
                converstionStepsText.match(/family/gi) || converstionStepsText.match(/me/gi) ||
                converstionStepsText.match(/dinner/gi) || converstionStepsText.match(/show/gi) ||
                converstionStepsText.match(/at/gi) || converstionStepsText.match(/in/gi) ||
                converstionStepsText.match(/beautiful/gi) || converstionStepsText.match(/make/gi) ||
                converstionStepsText.match(/moment/gi)
            ) {
                await playScript("Okay. Do you look like anyone in your family?");
                setSampleAns([' Yes , maybe i am some kind of similar of my father', "2, No, maybe i am defferent from every one from my family", "3, Yes, mabe be i am look like my elder type."])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Which time is best for you and your family?");
                converstionSteps--;
            }

        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you look like anyone in your family?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am Repeatin ,Do you look like anyone in your family?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/actually/gi) || converstionStepsText.match(/alone/gi) ||
                converstionStepsText.match(/family/gi) || converstionStepsText.match(/parents/gi) ||
                converstionStepsText.match(/Do/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/like/gi) || converstionStepsText.match(/look/gi) ||
                converstionStepsText.match(/actually/gi) || converstionStepsText.match(/anyone/gi) ||
                converstionStepsText.match(/family/gi) || converstionStepsText.match(/my/gi)
            ) {
                await playScript("Okay. Who is the closest to you in your family?");
                setSampleAns([" My father is so much closer to me", "2, My mother is so much closer to me more than other members my my family", "3, My sister or Brother is more closer with me"])
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you look like anyone in your family?");
                converstionSteps--;
            }
        } else if (converstionSteps == 8) {

            if (converstionStepsText.length < 10) {
                await smallTalkError("Who is the closest to you in your family?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am Repeatin. Who is the closest to you in your family?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/close/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/alone/gi) ||
                converstionStepsText.match(/time/gi) || converstionStepsText.match(/close/gi) ||
                converstionStepsText.match(/basically/gi) || converstionStepsText.match(/prefer/gi) ||
                converstionStepsText.match(/while/gi) || converstionStepsText.match(/According/gi) ||
                converstionStepsText.match(/my/gi) || converstionStepsText.match(/family/gi) ||
                converstionStepsText.match(/anyone/gi) || converstionStepsText.match(/everyone/gi) ||
                converstionStepsText.match(/all/gi) || converstionStepsText.match(/parent/gi) ||
                converstionStepsText.match(/father/gi) || converstionStepsText.match(/mother/gi) ||
                converstionStepsText.match(/sister/gi) || converstionStepsText.match(/brother/gi) ||
                converstionStepsText.match(/grand/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/similar /gi)

            ) {
                await playScript("Okay. That was about section 1. Thanks.");
                conditionsDependsOnUserSpeech(6)
                await sendSpeakingtextToBackend(recordedText);
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Who is the closest to you in your family?");
                converstionSteps--;
            }
        }


    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";
}