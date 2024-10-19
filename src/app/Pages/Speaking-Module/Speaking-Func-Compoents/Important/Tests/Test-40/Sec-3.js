let converstionSteps = 0;


export async function Test40Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {

    if (converstionSteps == 0 && converstionStepsText == '') {
        await playScript(
            " My name is Adrian. I will be your examiner for this part of the test, part three. Are you comfortable?"
        );
        setSampleAns(["Yes, I am comfortable you please proceed the test"])
    }
    converstionSteps++;
    if (converstionStepsText != '') {
        if (converstionSteps == 1) {
            await playScript(
                "Sorry.... Can you repeat that please"
            );
            setSampleAns([` You can simply repeat your previous answer`])
        } else if (converstionSteps == 2) {
            if (converstionStepsText.length < 5) {
                await smallTalkError(" I will ask you the qustion related of question two. so , Are you ready?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.Are you ready?");
                converstionSteps--;
            }
            else {
                await playScript("I am asking you the question related of section two. So, What kinds of jobs require people to be confident?");
                setSampleAns([`I think all jobs require a certain degree of confidence but the ones which involve dealing with 
                                    customers require a lot more confidence. For example, if a salesperson is not confident enough then 
                                    he will not be able to convince the customers about the product he/she is trying to sell.
                                    `])
                conditionsDependsOnUserSpeech(0)
            }
        }
        //question--3
        else if (converstionSteps == 3) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("So, What kinds of jobs require people to be confident?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("What kinds of jobs require people to be confident?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/kind/gi) || converstionStepsText.match(/job/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/require/gi) ||
                converstionStepsText.match(/people/gi) || converstionStepsText.match(/to be/gi) ||

                converstionStepsText.match(/confident/gi) || converstionStepsText.match(/certain/gi) ||
                converstionStepsText.match(/education/gi) || converstionStepsText.match(/sell/gi)
            ) {
                await playScript("Okey, On what occasions should children be encouraged? How?");
                setSampleAns([`I think children should be encouraged in those situations where they feel hesitant in doing something 
                                that is good for them. But also, the encouragement should be done to a certain limit, they should not 
                                feel like something is being forced upon them. For example, we can encourage children to learn 
                                something creative such as painting if they show interest in it. And to encourage them more, parents 
                                can take them to a museum so they can develop their interest further`])
                conditionsDependsOnUserSpeech(1)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What kinds of jobs require people to be confident?");
                converstionSteps--;
            }
            //Question-4
        } else if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" On what occasions should children be encouraged? How?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. On what occasions should children be encouraged? How?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/benefit/gi) ||
                converstionStepsText.match(/occasion/gi) || converstionStepsText.match(/learn/gi) ||
                converstionStepsText.match(/should/gi) || converstionStepsText.match(/children/gi) ||

                converstionStepsText.match(/kid/gi) || converstionStepsText.match(/build/gi) ||
                converstionStepsText.match(/encourage/gi) || converstionStepsText.match(/situation/gi) ||
                converstionStepsText.match(/parent/gi) || converstionStepsText.match(/develop/gi) ||
                converstionStepsText.match(/creativity/gi) || converstionStepsText.match(/interest/gi)

            ) {
                await playScript("Okey. How do you help children stay focused?");
                setSampleAns([`There are many ways in which children can be helped. First of all, one can provide them an 
                                    environment which is free of distractions, like when they are studying, they should not be allowed to 
                                    use cellphones. Another way to help them focus would be to teach them about meditation in which 
                                    they have to focus on their breath or a single sound`])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. On what occasions should children be encouraged? How?");
                converstionSteps--;
            }
            //question-5
        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("How do you help children stay focused?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. How do you help children stay focused?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/help/gi) ||
                converstionStepsText.match(/children/gi) || converstionStepsText.match(/stay/gi) ||
                converstionStepsText.match(/focus/gi) || converstionStepsText.match(/provide/gi) ||
                converstionStepsText.match(/allow/gi) || converstionStepsText.match(/mobile/gi) ||
                converstionStepsText.match(/phone/gi)
                || converstionStepsText.match(/meditation/gi) ||
                converstionStepsText.match(/develop/gi) || converstionStepsText.match(/student/gi) ||
                converstionStepsText.match(/idea/gi)
            ) {
                await playScript("Okey. What challenges do young people face today?");
                setSampleAns([`Well, I think there are two main challenges that young people face these days. The first one is related 
                                    to the mind and mental health, nowadays everyone is aware of the rise in depression and suicide 
                                    cases among the youth. Another challenge faced by them is the ever-increasing competition in 
                                    education or their professional lives.`])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. How do you help children stay focused?");
                converstionSteps--;
            }
            //question-6
        } else if (converstionSteps == 6) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" What challenges do young people face today?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. What challenges do young people face today?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/challenge/gi) ||
                converstionStepsText.match(/young/gi) || converstionStepsText.match(/face/gi) ||
                converstionStepsText.match(/today/gi) || converstionStepsText.match(/part/gi) ||
                converstionStepsText.match(/mind/gi) || converstionStepsText.match(/mental/gi) ||

                converstionStepsText.match(/health/gi) || converstionStepsText.match(/aware/gi) ||
                converstionStepsText.match(/depression/gi) ||

                converstionStepsText.match(/education/gi)
            ) {
                await playScript("So, How can parents help build confidence in their children?");
                setSampleAns([`Parents can help by giving positive reinforcement and praising their children’s efforts. Encouraging them to try new activities, even if they fail, helps build self-confidence over time.
                                `])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again.  What challenges do young people face today?");
                converstionSteps--;
            }
            //question-7         
        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("How can parents help build confidence in their children?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("Okey. How can parents help build confidence in their children?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/parent/gi) || converstionStepsText.match(/help/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/build/gi) ||
                converstionStepsText.match(/important/gi) || converstionStepsText.match(/confidence/gi) ||

                converstionStepsText.match(/learn/gi) || converstionStepsText.match(/their/gi) ||
                converstionStepsText.match(/children/gi) || converstionStepsText.match(/positive/gi) ||

                converstionStepsText.match(/effort/gi) || converstionStepsText.match(/time/gi)

            ) {
                await playScript("Okey. That was about section 3. Thanks.");
                await sendSpeakingtextToBackend(recordedText);
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again . How can parents help build confidence in their children?");
                converstionSteps--;
            }
        }
    }

    converstionStepsText = "";



}