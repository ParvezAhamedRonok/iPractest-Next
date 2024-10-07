let converstionSteps = 0;
export async function Test8Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {
    if (converstionSteps == 0 && converstionStepsText == '') {
        await playScript(
            " My name is Adrian &  I will be your examiner for this part of the test for part three. Are you comfortable?"
        );
        setSampleAns(["Yes, I am comfortable you please proceed the test"])
    }
    converstionSteps++;
    if (converstionStepsText != '') {

        if (converstionSteps == 1) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Are you comfortable?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating, Are you comfortable?");
                converstionSteps--;
            }
            else {
                await playScript("Sorry... Can you repeat that please");
                setSampleAns([' You can simply repeated the answer that you have given a little momemnt before'])
            }
        } else if (converstionSteps == 2) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Are you comfortable?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating, Are you comfortable?");
                converstionSteps--;
            }
            else {
                await playScript("Let's talk about making decisions generally. Who supports young people in decision-making?");
                setSampleAns([`1 , Most commonly parents, teachers, siblings and friends are the one who give guidance to teenagers and children about their impending decisions. This is because they care about them and have much more experience to share. This is the reason I asked my mom and my former teacher when I was deciding my career path .In some countries National Youth Councils, umbrella organizations for youth organizations, are the highest decision-making bodies on youth issues. They have purely symbolic status in others. At the community level, young people can establish university or school clubs aimed at educating each other on youth rights and civic education.
            `])
                conditionsDependsOnUserSpeech(0)
            }
        }
        else if (converstionSteps == 3) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Who supports young people in decision-making?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating, Who supports young people in decision-making?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/support/gi) || converstionStepsText.match(/young/gi) ||
                converstionStepsText.match(/people/gi) || converstionStepsText.match(/making/gi) ||
                converstionStepsText.match(/make/gi) || converstionStepsText.match(/decision/gi) ||
                converstionStepsText.match(/big/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/Most/gi) || converstionStepsText.match(/common/gi) ||
                converstionStepsText.match(/parent/gi) || converstionStepsText.match(/brother/gi) ||
                converstionStepsText.match(/sister/gi) || converstionStepsText.match(/friend/gi) ||
                converstionStepsText.match(/guidance/gi) || converstionStepsText.match(/teenager/gi) ||
                converstionStepsText.match(/teachers/gi) || converstionStepsText.match(/sibling/gi) ||
                converstionStepsText.match(/Youth/gi) || converstionStepsText.match(/Council/gi) ||
                converstionStepsText.match(/community/gi) || converstionStepsText.match(/education/gi)
            ) {
                await playScript("Where can young people get good advice for making decisions?");
                setSampleAns([` apart from the ones i mentioned already youngsters can get good advice from the professional on the internet and in their community these people can share their in-depth knowledge about the life situations fortunately my school has some career counselors that are well versed in career development and i got some good advice from them and i also learned some strategies to make up my mind Here are some ways to help young adults make decisions1234:
                Encourage young adults to seek God’s heart.
                Encourage young adults to “not settle”.
                Encourage young adults to follow through.
                Help young people learn how to identify options and ideas.
                Explore consequences
                `])
                conditionsDependsOnUserSpeech(1)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Who supports young people in decision-making?");
                converstionSteps--;
            }


        }
        else if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Where can young people get good advice for making decisions?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating, Where can young people get good advice for making decisions?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/get/gi) || converstionStepsText.match(/young/gi) ||
                converstionStepsText.match(/people/gi) || converstionStepsText.match(/making/gi) ||
                converstionStepsText.match(/make/gi) || converstionStepsText.match(/advice/gi) ||
                converstionStepsText.match(/decisions/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/Most/gi) || converstionStepsText.match(/common/gi) ||
                converstionStepsText.match(/parent/gi) || converstionStepsText.match(/apart/gi) ||
                converstionStepsText.match(/guidance/gi) || converstionStepsText.match(/teenager/gi) ||
                converstionStepsText.match(/teachers/gi) || converstionStepsText.match(/sibling/gi) ||
                converstionStepsText.match(/good/gi) || converstionStepsText.match(/bad/gi) ||
                converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                converstionStepsText.match(/community/gi) || converstionStepsText.match(/education/gi) ||
                converstionStepsText.match(/professional/gi) || converstionStepsText.match(/develop/gi) ||
                converstionStepsText.match(/help/gi) || converstionStepsText.match(/Encourage/gi) ||
                converstionStepsText.match(/adult/gi) || converstionStepsText.match(/resources /gi) ||
                converstionStepsText.match(/available/gi) || converstionStepsText.match(/making/gi) ||
                converstionStepsText.match(/provid/gi) || converstionStepsText.match(/life/gi)
            ) {
                await playScript("So, how does decision-making influence people's lives?");
                setSampleAns([` the process of making the season has a critical impact on everybody's life. Ultimately life is really a series of decisions from early childhood. I mean choices of friends, hobbies and interests. With good decisions a person can lead a happy and healthy life .`, "2, The decision making influence refers to how the quality of decisions affects the outcomes and performance of individuals, teams and organizations12. Good decisions can positively contribute to the accomplishment of goals and objectives, while poor decisions can result in mistakes and inefficiencies1. Strong decision-making helps solve problems promptly and creates a leadership position for the decision-makers, while weak decision-making can be biased and illogical2."])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Where can young people get good advice for making decisions?");
                converstionSteps--;
            }


        }
        else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("How does decision-making influence people's lives?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating, How does decision-making influence people's lives?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/do/gi) || converstionStepsText.match(/yes/gi) ||
                converstionStepsText.match(/no/gi) || converstionStepsText.match(/making/gi) ||
                converstionStepsText.match(/make/gi) || converstionStepsText.match(/influence/gi) ||
                converstionStepsText.match(/decisions/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/Most/gi) || converstionStepsText.match(/live/gi) ||
                converstionStepsText.match(/leave/gi) || converstionStepsText.match(/apart/gi) ||
                converstionStepsText.match(/Ultimately/gi) || converstionStepsText.match(/process/gi) ||
                converstionStepsText.match(/season/gi) || converstionStepsText.match(/childhood/gi) ||
                converstionStepsText.match(/early/gi) || converstionStepsText.match(/interest/gi) ||
                converstionStepsText.match(/positive/gi) || converstionStepsText.match(/shape/gi) ||
                converstionStepsText.match(/hobbies/gi) || converstionStepsText.match(/education/gi) ||
                converstionStepsText.match(/quality/gi) || converstionStepsText.match(/develop/gi) ||
                converstionStepsText.match(/help/gi) || converstionStepsText.match(/Encourage/gi) ||
                converstionStepsText.match(/outcome/gi) || converstionStepsText.match(/resources/gi) ||
                converstionStepsText.match(/crucial/gi) || converstionStepsText.match(/aspect/gi) ||
                converstionStepsText.match(/provid/gi) || converstionStepsText.match(/life/gi)
            ) {
                await playScript("What are effective steps to making good decisions?");
                setSampleAns([` Making good decisions is a crucial skill that can be developed over time. Here are some effective steps to follow when making decisions:
                Identify the decision that needs to be made: 
                Gather relevant information: 
                Identify alternative solutions: 
                Evaluate alternatives: 
                Choose the best alternative3.
                Take action: 
                Evaluate your decision:.
                Remember that making good decisions is a process that requires time and effort. By following these steps, you can make informed decisions that lead to better outcomes.
                `])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  How does decision-making influence people's lives?");
                converstionSteps--;
            }



        } else if (converstionSteps == 6) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What are effective steps to making good decisions?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating, What are effective steps to making good decisions?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/effective/gi) || converstionStepsText.match(/decision/gi) ||
                converstionStepsText.match(/positive/gi) || converstionStepsText.match(/step/gi) ||
                converstionStepsText.match(/good/gi) || converstionStepsText.match(/bad/gi) ||
                converstionStepsText.match(/actually/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/important/gi) || converstionStepsText.match(/plan/gi) ||
                converstionStepsText.match(/ability/gi) || converstionStepsText.match(/should/gi) ||
                converstionStepsText.match(/choosing/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/career/gi) || converstionStepsText.match(/learn/gi) ||
                converstionStepsText.match(/overthink/gi) || converstionStepsText.match(/Take/gi) ||
                converstionStepsText.match(/Remove/gi) || converstionStepsText.match(/situation/gi) ||
                converstionStepsText.match(/relevant/gi) || converstionStepsText.match(/Identify/gi) ||
                converstionStepsText.match(/effective /gi) || converstionStepsText.match(/Evaluate/gi) ||
                converstionStepsText.match(/alternative/gi)
            ) {
                await playScript("What are negative ways to make decisions?");
                setSampleAns([`  the opposite of what i just mentioned is negative i mean rushing the season andnot thinking about the decision from multiple perspectives this will often lead a person down the wrong path i have a friend who rushed into the university and he just dropped out because he was disinterested in his major
                `])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What are effective steps to making good decisions?");
                converstionSteps--;
            }



        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" What are negative ways to make decisions?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating,  What are negative ways to make decisions?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/effective/gi) || converstionStepsText.match(/decision/gi) ||
                converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                converstionStepsText.match(/good/gi) || converstionStepsText.match(/bad/gi) ||
                converstionStepsText.match(/actually/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/important/gi) || converstionStepsText.match(/way/gi) ||
                converstionStepsText.match(/make/gi) || converstionStepsText.match(/opposite/gi) ||
                converstionStepsText.match(/choosing/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/rushing/gi) || converstionStepsText.match(/mention/gi) ||
                converstionStepsText.match(/overthink/gi) || converstionStepsText.match(/drop/gi) ||
                converstionStepsText.match(/Remove/gi) || converstionStepsText.match(/situation/gi) ||
                converstionStepsText.match(/relevant/gi) || converstionStepsText.match(/Identify/gi) ||
                converstionStepsText.match(/Evaluate/gi) || converstionStepsText.match(/alternative/gi)

            ) {
                await playScript(
                    "Okay. Does the information available on the internet influence decisions?")
                setSampleAns([` absolutely i mean internet has such a wealth of knowledge that it has become atreasure i mean a person can find a lot of up-to-date information on the internet and research is critical for making good decisions.Influence: Online information is generally modest in its impact on decisions, but looms larger when a purchase requires a big commitment. No more than one-tenth of buyers in each product category said that online information had a major impact on their purchasing decision.
                    `])
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  What are negative ways to make decisions?");
                converstionSteps--;
            }


        }
        else if (converstionSteps == 8) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Does the information available on the internet influence decisions?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating, Does the information available on the internet influence decisions?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/do/gi) || converstionStepsText.match(/decision/gi) ||
                converstionStepsText.match(/information/gi) || converstionStepsText.match(/Internet/gi) ||
                converstionStepsText.match(/influence/gi) || converstionStepsText.match(/available/gi) ||
                converstionStepsText.match(/actually/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/important/gi) || converstionStepsText.match(/way/gi) ||
                converstionStepsText.match(/make/gi) || converstionStepsText.match(/opposite/gi) ||
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/choosing/gi) || converstionStepsText.match(/knowledge/gi) ||
                converstionStepsText.match(/absolutely /gi) || converstionStepsText.match(/become/gi) ||
                converstionStepsText.match(/research/gi) || converstionStepsText.match(/modest/gi) ||
                converstionStepsText.match(/loom/gi) || converstionStepsText.match(/purchase/gi) ||
                converstionStepsText.match(/decid/gi) || converstionStepsText.match(/Identify/gi) ||
                converstionStepsText.match(/domain/gi) || converstionStepsText.match(/computer/gi) ||
                converstionStepsText.match(/intriguing/gi) || converstionStepsText.match(/online/gi)
            ) {

                await playScript("Okay. That was about section 3. Thanks.");
                conditionsDependsOnUserSpeech(6)
                await sendSpeakingtextToBackend(recordedText);
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Does the information available on the internet influence decisions?");
                converstionSteps--;
            }

        }

    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";
}