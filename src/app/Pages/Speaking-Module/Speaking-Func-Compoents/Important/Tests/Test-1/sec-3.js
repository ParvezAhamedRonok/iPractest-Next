
let converstionSteps = 0;
export async function Test1Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {

    if (converstionSteps == 0 && converstionStepsText == '') {
        await playScript(
            "Welcome to the third section. So, are you ready ?"
        );

        setSampleAns([" Simply you can say the positive answer. As like Yes i am Ready to give the test. ", "2, Yes, I am reay.You can proceed the test"]);
    }
    converstionSteps++;
    if (converstionStepsText != '') {

        if (converstionSteps == 1) {
            await playScript(
                "Okay. can you repeat that please"
            );
            setSampleAns([" Yes i can & you can simply repeat the answer that you gave"])
        }

        else if (converstionSteps == 2) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" are you ready");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("Ok , I am repeating. are you ready");
                converstionSteps--;
            }
            else {
                await playScript("Okay. Let's talk about children. Who motivates children the most?");
                setSampleAns([" I think at an early age, parents and teachers motivate children the most. They are role models, and children naturally look up to them. Once they are older, children start idolizing movie and sport  stars, and they can motivate children too. "]);
                //here will call a function which have 2 peramitter one is this stepNumber & second will be the wordCount & speech time
                conditionsDependsOnUserSpeech(0)
            }
        }
        else if (converstionSteps == 3) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Who motivates children the most?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("Ok , I am repeating.Who motivates children the most?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/teacher/gi) || converstionStepsText.match(/brother/gi) ||
                converstionStepsText.match(/parent/gi) || converstionStepsText.match(/sister/gi) ||
                converstionStepsText.match(/friend/gi) || converstionStepsText.match(/father/gi) ||
                converstionStepsText.match(/mother/gi) || converstionStepsText.match(/grand/gi) ||
                converstionStepsText.match(/motivate/gi) || converstionStepsText.match(/belive/gi) ||
                converstionStepsText.match(/help/gi) || converstionStepsText.match(/children/gi) ||
                converstionStepsText.match(/most/gi) || converstionStepsText.match(/every/gi) ||
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/early/gi) || converstionStepsText.match(/age/gi) ||
                converstionStepsText.match(/role/gi) || converstionStepsText.match(/them/gi) ||
                converstionStepsText.match(/can/gi) || converstionStepsText.match(/could/gi)

            ) {
                await playScript("Okay. How can teachers motivate children?");
                setSampleAns([" Teachers can motivate children by encouraging them, recognizing their efforts, setting achievable goals, and allowing them to explore their curiosity and think outside the box."]);
                conditionsDependsOnUserSpeech(1)
            } else {

                await playScript("Sorry,the reply is irrelevant. I am repeating. Who motivates children the most?");
                converstionSteps--;
            }

        }
        else if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("How can teachers motivate children?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("Ok , I am repeating.How can teachers motivate children?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/encourag/gi) || converstionStepsText.match(/effort/gi) ||
                converstionStepsText.match(/setting/gi) || converstionStepsText.match(/achievable/gi) ||
                converstionStepsText.match(/person/gi) || converstionStepsText.match(/overall/gi) ||
                converstionStepsText.match(/goals/gi) || converstionStepsText.match(/allow/gi) ||
                converstionStepsText.match(/explore/gi) || converstionStepsText.match(/curiosity/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/outside/gi) ||
                converstionStepsText.match(/usually/gi) || converstionStepsText.match(/basically/gi) ||
                converstionStepsText.match(/do/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/will/gi) || converstionStepsText.match(/would/gi) ||
                converstionStepsText.match(/help/gi) || converstionStepsText.match(/children/gi) ||
                converstionStepsText.match(/most/gi) || converstionStepsText.match(/every/gi) ||
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/early/gi) || converstionStepsText.match(/age/gi) ||
                converstionStepsText.match(/role/gi) || converstionStepsText.match(/them/gi) ||
                converstionStepsText.match(/can/gi) || converstionStepsText.match(/could/gi)

            ) {
                await playScript("Okay. How is it different from teaching kids?");
                setSampleAns([" Students who are not motivated will not learn effectively and teaching alone won’t improve academic performance. Motivated students are more excited to participate in class, and unmotivated students can disrupt the whole class"]);
                // conditionsDependsOnUserSpeech(2, collectUserSpeechTime, userEveryAnsCount)
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry,the reply is irrelevant. I am repeating.How can teachers motivate children?");
                converstionSteps--;
            }

        }
        else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("How is it different from teaching kids?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("Ok , I am repeating.How is it different from teaching kids?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/different/gi) || converstionStepsText.match(/difference/gi) ||
                converstionStepsText.match(/from/gi) || converstionStepsText.match(/between/gi) ||
                converstionStepsText.match(/teach/gi) || converstionStepsText.match(/kid/gi) ||
                converstionStepsText.match(/adult/gi) || converstionStepsText.match(/childen/gi) ||
                converstionStepsText.match(/Student/gi) || converstionStepsText.match(/motivat/gi) ||
                converstionStepsText.match(/learn/gi) || converstionStepsText.match(/effectively/gi) ||
                converstionStepsText.match(/perfect/gi) || converstionStepsText.match(/great/gi) ||
                converstionStepsText.match(/role/gi) || converstionStepsText.match(/alone/gi) ||
                converstionStepsText.match(/academic/gi) || converstionStepsText.match(/performance/gi) ||
                converstionStepsText.match(/excit/gi) || converstionStepsText.match(/joy/gi) ||
                converstionStepsText.match(/participate/gi) || converstionStepsText.match(/class/gi)

            ) {
                await playScript("Okay. What should teenagers have?");
                setSampleAns([" Teenagers want to be accepted and valued by their friends, which can sometimes lead them to risky  behavior. If parents are supportive and take the time to communicate with their children, they can influence teens to remain motivated and achieve their goals. Parents need to keep a watch on them and respect their independence"]);
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry,the reply is irrelevant. I am repeating.How is it different from teaching kids?");
                converstionSteps--;
            }

        }
        else if (converstionSteps == 6) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What should teenagers have?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("Ok , I am repeating.What should teenagers have?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/should/gi) || converstionStepsText.match(/teenager/gi) ||
                converstionStepsText.match(/adult/gi) || converstionStepsText.match(/kid/gi) ||
                converstionStepsText.match(/children/gi) || converstionStepsText.match(/have/gi) ||
                converstionStepsText.match(/need/gi) || converstionStepsText.match(/essensial/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/will/gi) ||
                converstionStepsText.match(/essensial/gi) || converstionStepsText.match(/want/gi) ||
                converstionStepsText.match(/accept/gi) || converstionStepsText.match(/friend/gi) ||
                converstionStepsText.match(/lead/gi) || converstionStepsText.match(/behavior/gi) ||
                converstionStepsText.match(/parent/gi) || converstionStepsText.match(/support/gi) ||
                converstionStepsText.match(/Discover/gi) || converstionStepsText.match(/knowledge/gi) ||
                converstionStepsText.match(/communicate/gi) || converstionStepsText.match(/influence/gi) ||
                converstionStepsText.match(/time/gi) || converstionStepsText.match(/remain/gi) ||
                converstionStepsText.match(/achieve/gi) || converstionStepsText.match(/goal/gi) ||
                converstionStepsText.match(/aim/gi) || converstionStepsText.match(/independence/gi) ||
                converstionStepsText.match(/respect/gi)
            ) {
                await playScript("Okay. What is the greatest challenge facing teachers today?");
                setSampleAns([" The greatest challenges facing teachers today include *Balancing the different learning needs of students *Respecting expectations from school admins*Helping parents and students meet long-term goals. *Knowing their students well *Understanding the different learning abilities and capacities of the students"]);
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry,the reply is irrelevant. I am repeating. What should teenagers have?");
                converstionSteps--;
            }


        }
        else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What is the greatest challenge facing teachers today?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("Ok , I am repeating.What is the greatest challenge facing teachers today?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/many/gi) || converstionStepsText.match(/today/gi) ||
                converstionStepsText.match(/lot/gi) || converstionStepsText.match(/actually/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/great/gi) || converstionStepsText.match(/most/gi) ||
                converstionStepsText.match(/challenge/gi) || converstionStepsText.match(/facing/gi) ||
                converstionStepsText.match(/face/gi) || converstionStepsText.match(/teacher/gi) ||
                converstionStepsText.match(/reality/gi) || converstionStepsText.match(/make/gi) ||
                converstionStepsText.match(/challenging/gi) || converstionStepsText.match(/Staying/gi) ||
                converstionStepsText.match(/date/gi) || converstionStepsText.match(/learn/gi) ||
                converstionStepsText.match(/technology/gi) || converstionStepsText.match(/Communicat/gi) ||
                converstionStepsText.match(/Pressure/gi) || converstionStepsText.match(/administrators/gi) ||
                converstionStepsText.match(/Creat/gi) || converstionStepsText.match(/engaging/gi) ||
                converstionStepsText.match(/lesson/gi) || converstionStepsText.match(/plan/gi) ||
                converstionStepsText.match(/Behavior/gi) || converstionStepsText.match(/management/gi) ||
                converstionStepsText.match(/Lack/gi) || converstionStepsText.match(/Burnout/gi)
            ) {
                await playScript("Okay. That was about section 3. Thanks.");
                conditionsDependsOnUserSpeech(5)
                await sendSpeakingtextToBackend(recordedText);
            } else {
                await playScript("Sorry, the reply is irrelevant. I am repeating.What is the greatest challenge facing teachers today?");
                converstionSteps--;
            }


        }

    }


    converstionStepsText = "";



}






