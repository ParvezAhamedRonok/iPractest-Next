let converstionSteps = 0;
export async function Test13Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {
    if (converstionSteps == 0 && converstionStepsText == '') {
        await playScript(
            "Welcome to the third section. So, are you ready ?"
        );
        setSampleAns([" Simply you can say the positive answer. As like Yes i am Ready to give the test. ", "2, Yes, I am reay.You can proceed the test"])
    }
    converstionSteps++;
    if (converstionStepsText != '') {
        if (converstionSteps == 1) {
            await playScript(
                "Let me begin your test. Can you tell me your full name again?"
            );
            setSampleAns([" Simply you can say your full name. As like my name is Jone dow. You can call me Jone"])
        }

        else if (converstionSteps == 2) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" are you ready ?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am Repeatin , are you ready ?");
                converstionSteps--;
            }
            else {
                await playScript("So,are you ever late for anything?");
                setSampleAns([" No, I am a very punctual person. I value time and am never late for anything, unless it is due to some unavoidable and unforeseen circumstances."]);
                conditionsDependsOnUserSpeech(0)
            }
        }
        else if (converstionSteps == 3) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("are you ever late for anything?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am Repeatin ,are you ever late for anything?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/actually/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/basically/gi) || converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/did/gi) || converstionStepsText.match(/ever/gi) ||
                converstionStepsText.match(/many/gi) || converstionStepsText.match(/few/gi) ||
                converstionStepsText.match(/time/gi) || converstionStepsText.match(/anything/gi) ||
                converstionStepsText.match(/circumstances/gi) || converstionStepsText.match(/unavoidable/gi) ||
                converstionStepsText.match(/some/gi)
            ) {
                await playScript("Okay. What excuses do you use when you are late?");
                setSampleAns([" I am usually not late for any meetings or appointments. However, if at all I am getting late due to anunavoidable circumstance, then I inform the person I am meeting, beforehand. I don’t make excuses."]);
                conditionsDependsOnUserSpeech(1)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. are you ever late for anything?");
                converstionSteps--;
            }
        }
        else if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What excuses do you use when you are late?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am Repeatin , What excuses do you use when you are late?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/do/gi) || converstionStepsText.match(/can/gi) ||
                converstionStepsText.match(/could/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/excuses/gi) || converstionStepsText.match(/late/gi) ||
                converstionStepsText.match(/usually/gi) || converstionStepsText.match(/yes/gi) ||
                converstionStepsText.match(/no/gi) || converstionStepsText.match(/any/gi) ||
                converstionStepsText.match(/many/gi) || converstionStepsText.match(/due/gi) ||
                converstionStepsText.match(/reach/gi) || converstionStepsText.match(/circumstance/gi) ||
                converstionStepsText.match(/new/gi)
            ) {
                await playScript("So, what excuses do people have when they are late?");
                setSampleAns([" People give excuses like car or bike breakdown or that they were stuck in traffic, when they are late"])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What excuses do you use when you are late?");
                converstionSteps--;
            }
        }


        else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("what excuses do people have when they are late?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am Repeatin , what excuses do people have when they are late?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/do/gi) || converstionStepsText.match(/can/gi) ||
                converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                converstionStepsText.match(/people/gi) || converstionStepsText.match(/could/gi) ||
                converstionStepsText.match(/good/gi) || converstionStepsText.match(/new/gi) ||
                converstionStepsText.match(/excuses/gi) || converstionStepsText.match(/when/gi) ||
                converstionStepsText.match(/example/gi) || converstionStepsText.match(/late/gi) ||
                converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                converstionStepsText.match(/breakdown/gi) || converstionStepsText.match(/stuck/gi) ||
                converstionStepsText.match(/traffic/gi) || converstionStepsText.match(/they/gi) ||
                converstionStepsText.match(/good/gi)
            ) {
                await playScript("Okay. Are you good at organizing time?");
                setSampleAns(["Yes, I am good at organizing time. I set up reminders for important events and meetings. I am never late for an appointment."]);
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. what excuses do people have when they are late?");
                converstionSteps--;
            }
        }

        else if (converstionSteps == 6) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Are you good at organizing time?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am Repeatin , Are you good at organizing time?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/actually/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/kind/gi) || converstionStepsText.match(/good/gi) ||
                converstionStepsText.match(/organizing/gi) || converstionStepsText.match(/time/gi) ||
                converstionStepsText.match(/good/gi) || converstionStepsText.match(/bad/gi) ||
                converstionStepsText.match(/many/gi) || converstionStepsText.match(/reminder/gi) ||
                converstionStepsText.match(/important/gi) ||
                converstionStepsText.match(/meeting/gi) || converstionStepsText.match(/never/gi) ||
                converstionStepsText.match(/late/gi) || converstionStepsText.match(/appointment/gi)
            ) {
                await playScript("OK, how do you usually organize time?");
                setSampleAns([" I sometimes set up reminders for important events or meetings, sometimes I make lists of tasks tocomplete, sometimes I set deadlines for myself, especially when working on an importantassignment/project. "]);
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Are you good at organizing time?");
                converstionSteps--;
            }
        }

        else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("How do you usually organize your time?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am Repeatin ,How do you usually organize your time?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                converstionStepsText.match(/actually/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/kind/gi) || converstionStepsText.match(/good/gi) ||
                converstionStepsText.match(/usually/gi) || converstionStepsText.match(/organize/gi) ||
                converstionStepsText.match(/people/gi) || converstionStepsText.match(/like/gi) ||
                converstionStepsText.match(/love/gi) || converstionStepsText.match(/time/gi) ||
                converstionStepsText.match(/sometime/gi) || converstionStepsText.match(/many/gi) ||
                converstionStepsText.match(/flew/gi) || converstionStepsText.match(/reminder/gi) ||
                converstionStepsText.match(/event/gi) || converstionStepsText.match(/meeting/gi) ||
                converstionStepsText.match(/task/gi) || converstionStepsText.match(/complete/gi) ||
                converstionStepsText.match(/especially/gi) || converstionStepsText.match(/work/gi) ||
                converstionStepsText.match(/project/gi) || converstionStepsText.match(/like/gi) ||
                converstionStepsText.match(/love/gi) || converstionStepsText.match(/important/gi)

            ) {
                await playScript("OK, do you think planning is important for time management?");
                setSampleAns([" Yes, planning is essential for good time management. If we don’t plan ahead, we will tend to waste time doing tasks/things which are unimportant or unnecessary. "]);
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. How do you usually organize your time?");
                converstionSteps--;
            }
        }



        else if (converstionSteps == 8) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Do you think planning is important for time management?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am Repeatin , Do you think planning is important for time management?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                converstionStepsText.match(/actually/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/definite/gi) || converstionStepsText.match(/course/gi) ||
                converstionStepsText.match(/people/gi) || converstionStepsText.match(/like/gi) ||
                converstionStepsText.match(/love/gi) || converstionStepsText.match(/plan/gi) ||
                converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/important/gi) || converstionStepsText.match(/management/gi) ||
                converstionStepsText.match(/time/gi) || converstionStepsText.match(/essential/gi) ||
                converstionStepsText.match(/ahead/gi) || converstionStepsText.match(/tend/gi) ||
                converstionStepsText.match(/will/gi) || converstionStepsText.match(/would/gi) ||
                converstionStepsText.match(/waste/gi) || converstionStepsText.match(/loss/gi)

            ) {
                await playScript("Ok, do you think children should learn to manage their time?");
                setSampleAns([" Yes, definitely. We live in a fast paced world and children too need to manage their time well, so that they can deal with the competition and do well at their studies and later, at their jobs. "])
                conditionsDependsOnUserSpeech(6)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do you think planning is important for time management?");
                converstionSteps--;
            }
        }

        else if (converstionSteps == 9) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("do you think children should learn to manage their time??");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am Repeatin ,do you think children should learn to manage their time?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/children/gi) ||
                converstionStepsText.match(/should/gi) || converstionStepsText.match(/learn/gi) ||
                converstionStepsText.match(/because/gi) || converstionStepsText.match(/most/gi) ||
                converstionStepsText.match(/very/gi) || converstionStepsText.match(/good/gi) ||
                converstionStepsText.match(/fast/gi) || converstionStepsText.match(/need/gi) ||
                converstionStepsText.match(/deal/gi) || converstionStepsText.match(/can/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/competition/gi) ||
                converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                converstionStepsText.match(/actually/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/definite/gi) || converstionStepsText.match(/course/gi) ||
                converstionStepsText.match(/people/gi) || converstionStepsText.match(/like/gi) ||
                converstionStepsText.match(/love/gi) || converstionStepsText.match(/plan/gi) ||
                converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/important/gi) || converstionStepsText.match(/manage/gi) ||
                converstionStepsText.match(/time/gi) || converstionStepsText.match(/essential/gi) ||
                converstionStepsText.match(/ahead/gi) || converstionStepsText.match(/tend/gi) ||
                converstionStepsText.match(/will/gi) || converstionStepsText.match(/would/gi) ||
                converstionStepsText.match(/waste/gi) || converstionStepsText.match(/loss/gi)

            ) {
                await playScript("Ok, do old people and young people manage time in a similar way?");
                setSampleAns([" No, old and young people do not manage their time the same way. Old people have more life experience and they understand the importance of time management better than the young generation. The young people may be too impulsive or impatient and may not understand the importance of planning ahead. Another difference is the way the younger generation manages time. They make more use of technology and the old people may use the traditional methods, like a timetable or writing down a list of tasks."])
                conditionsDependsOnUserSpeech(7)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. do you think children should learn to manage their time?");
                converstionSteps--;
            }
        }

        else if (converstionSteps == 10) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("do old people and young people manage time in a similar way?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am Repeatin , do old people and young people manage time in a similar way?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/young/gi) || converstionStepsText.match(/similar/gi) ||
                converstionStepsText.match(/way/gi) || converstionStepsText.match(/different/gi) ||
                converstionStepsText.match(/experience/gi) || converstionStepsText.match(/life/gi) ||
                converstionStepsText.match(/generation/gi) || converstionStepsText.match(/patient/gi) ||
                converstionStepsText.match(/understand/gi) || converstionStepsText.match(/technology/gi) ||
                converstionStepsText.match(/methods/gi) || converstionStepsText.match(/list/gi) ||
                converstionStepsText.match(/children/gi) ||
                converstionStepsText.match(/should/gi) || converstionStepsText.match(/learn/gi) ||
                converstionStepsText.match(/because/gi) || converstionStepsText.match(/most/gi) ||
                converstionStepsText.match(/very/gi) || converstionStepsText.match(/good/gi) ||
                converstionStepsText.match(/fast/gi) || converstionStepsText.match(/need/gi) ||
                converstionStepsText.match(/deal/gi) || converstionStepsText.match(/can/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/competition/gi) ||
                converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                converstionStepsText.match(/actually/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/definite/gi) || converstionStepsText.match(/course/gi) ||
                converstionStepsText.match(/people/gi) || converstionStepsText.match(/like/gi) ||
                converstionStepsText.match(/love/gi) || converstionStepsText.match(/plan/gi) ||
                converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/important/gi) || converstionStepsText.match(/manage/gi) ||
                converstionStepsText.match(/time/gi) || converstionStepsText.match(/essential/gi) ||
                converstionStepsText.match(/ahead/gi) || converstionStepsText.match(/tend/gi) ||
                converstionStepsText.match(/will/gi) || converstionStepsText.match(/would/gi) ||
                converstionStepsText.match(/waste/gi) || converstionStepsText.match(/loss/gi)

            ) {
                await playScript("Okay. That was about section 3. Thanks.");
                conditionsDependsOnUserSpeech(8)
                await sendSpeakingtextToBackend(recordedText);
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Do old people and young people manage time in a similar way?");
                converstionSteps--;
            }



        }

    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";
}