let converstionSteps = 0;
export async function Test20Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {
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
                await smallTalkError(" I will as you the qustion related of question two. so , Are you ready?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.Are you ready?");
                converstionSteps--;
            }
            else {
                await playScript("I am asking you the question related of section 2 . so, Let's talk about celebrate events .How do people in your country celebrate events?");
                setSampleAns([`People celebrate events in many ways. Some hold family get-togethers, others properties and some  celebrate by burning crackers. Some people celebrate by just going out for a lunch or dinner, while  some others celebrate by donating to charities.`])
                conditionsDependsOnUserSpeech(0)
            }
        }
        else if (converstionSteps == 3) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("How do people in your country celebrate events? ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.How do people in your country celebrate events?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/celebrate/gi) || converstionStepsText.match(/event/gi) ||
                converstionStepsText.match(/country/gi) || converstionStepsText.match(/people/gi) ||
                converstionStepsText.match(/get/gi) || converstionStepsText.match(/many/gi) ||

                converstionStepsText.match(/propert/gi) || converstionStepsText.match(/burning/gi) ||
                converstionStepsText.match(/cracker/gi) || converstionStepsText.match(/better/gi) ||
                converstionStepsText.match(/lunch/gi) || converstionStepsText.match(/dinner/gi) ||
                converstionStepsText.match(/donat/gi) || converstionStepsText.match(/charit/gi)

            ) {
                await playScript(" What events do Indian people like to celebrate?");
                setSampleAns([`Indian people like to celebrate birthdays, anniversaries, festivals like Deepawali and Dussehra. Some  people celebrate if they do well in their exams, other people celebrate if they win any competition. `])
                conditionsDependsOnUserSpeech(1)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.How do people in your country celebrate events? ");
                converstionSteps--;
            }
        } else if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" What events do Indian people like to celebrate?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. What events do Indian people like to celebrate? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/country/gi) ||
                converstionStepsText.match(/event/gi) || converstionStepsText.match(/many/gi) ||
                converstionStepsText.match(/Indian/gi) || converstionStepsText.match(/people/gi) ||
                converstionStepsText.match(/like/gi) || converstionStepsText.match(/culture/gi) ||

                converstionStepsText.match(/celebrate/gi) || converstionStepsText.match(/birthday/gi) ||
                converstionStepsText.match(/annivers/gi) || converstionStepsText.match(/festival/gi) ||

                converstionStepsText.match(/Deepawali/gi) || converstionStepsText.match(/Dussehra/gi) || converstionStepsText.match(/exam/gi) || converstionStepsText.match(/win/gi)
            ) {
                await playScript("Okey. Why do you think celebration is important?");

                setSampleAns([`Celebration is very important. It is a time when people spend some time together and share the  happiness of each other. Such events also bring about social harmony and peace`])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What events do Indian people like to celebrate? ");
                converstionSteps--;
            }
        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Why do you think celebration is important?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Why do you think celebration is important?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/celebration/gi) ||
                converstionStepsText.match(/change/gi) || converstionStepsText.match(/country/gi) ||

                converstionStepsText.match(/important/gi) || converstionStepsText.match(/through/gi) ||
                converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                converstionStepsText.match(/side/gi) || converstionStepsText.match(/very/gi) ||

                converstionStepsText.match(/people/gi) || converstionStepsText.match(/consider/gi) ||
                converstionStepsText.match(/spend/gi) || converstionStepsText.match(/time/gi) ||
                converstionStepsText.match(/culture/gi) || converstionStepsText.match(/together/gi) ||
                converstionStepsText.match(/share/gi) || converstionStepsText.match(/happ/gi) ||
                converstionStepsText.match(/social/gi)
            ) {
                await playScript("Okey. Do you prefer big or small celebrations?？");
                setSampleAns([`I personally prefer small celebrations, because in these we can interact with all the people present. 
                Big celebrations are just a show-off and the hosts hardly even come to know who all were there.`])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.Why do you think celebration is important?");
                converstionSteps--;
            }
        } else if (converstionSteps == 6) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you prefer big or small celebrations?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.Do you prefer big or small celebrations?.");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/prefer/gi) || converstionStepsText.match(/yes/gi) ||
                converstionStepsText.match(/no/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/small/gi) || converstionStepsText.match(/big/gi) ||
                converstionStepsText.match(/celebrate/gi) || converstionStepsText.match(/personally/gi) ||
                converstionStepsText.match(/especially/gi) || converstionStepsText.match(/depend/gi) ||
                converstionStepsText.match(/interact/gi) || converstionStepsText.match(/present/gi) ||
                converstionStepsText.match(/people/gi) || converstionStepsText.match(/show-off/gi) ||
                converstionStepsText.match(/hardly/gi)
            ) {
                await playScript("So, Why do some people like expensive and grand celebrations? ");
                setSampleAns([`Some people like expensive and grand celebrations because they want to show their status, and they  want such events to be an everlasting memory in their minds. `])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again .Do you prefer big or small celebrations?");
                converstionSteps--;
            }
        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Why do some people like expensive and grand celebrations?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("Okey. i am repeating. Why do some people like expensive and grand celebrations?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/some/gi) || converstionStepsText.match(/like/gi) ||
                converstionStepsText.match(/expensive/gi) || converstionStepsText.match(/usually/gi) ||
                converstionStepsText.match(/grand/gi) || converstionStepsText.match(/celebration/gi) ||

                converstionStepsText.match(/think/gi) || converstionStepsText.match(/change/gi) ||
                converstionStepsText.match(/people/gi) || converstionStepsText.match(/status/gi) ||
                converstionStepsText.match(/want/gi) || converstionStepsText.match(/event/gi) ||

                converstionStepsText.match(/to be/gi) || converstionStepsText.match(/everlast/gi) ||
                converstionStepsText.match(/memory/gi) || converstionStepsText.match(/mind/gi)
            ) {
                await playScript("Okey. That was about section 3. Thanks.");
                await sendSpeakingtextToBackend(recordedText);
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again . Why do some people like expensive and grand celebrations? ");
                converstionSteps--;
            }
        }



    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";


}