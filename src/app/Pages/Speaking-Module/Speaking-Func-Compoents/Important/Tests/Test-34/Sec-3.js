let converstionSteps = 0;



export async function Test34Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {

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
                await playScript("I am asking you the question related of section two. So,  Under what circumstances do you meet new people, and when do you communicate with people you don't know?");
                setSampleAns([`I think I meet new people mainly when I am travelling by public transportation or at parties. I think I 
                                communicate when I find someone interesting and I want to know more about them. Also, I 
                                communicate when I come know to know that I share an interest with that person.`])
                conditionsDependsOnUserSpeech(0)
            }
        }
        //question--3
        else if (converstionSteps == 3) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("So, Under what circumstances do you meet new people, and when do you communicate with people you don't know?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Under what circumstances do you meet new people, and when do you communicate with people you don't know?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/Under/gi) || converstionStepsText.match(/circumstances/gi) ||
                converstionStepsText.match(/meet/gi) || converstionStepsText.match(/people/gi) ||
                converstionStepsText.match(/when/gi) || converstionStepsText.match(/communicate/gi) ||

                converstionStepsText.match(/know/gi) || converstionStepsText.match(/social/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/travel/gi) ||
                converstionStepsText.match(/public/gi) || converstionStepsText.match(/partie/gi) ||
                converstionStepsText.match(/interest/gi)
            ) {
                await playScript("Okey, What topics do you discuss with new acquaintances? ");
                setSampleAns([`I think it can be anything I am interested in, which is in fact quite broad. I love talking politics, 
                                sports, coffee, movies, tv shows, video games, fashion products. I sometimes also talk about studies 
                                but that’s rare.`])
                conditionsDependsOnUserSpeech(1)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Under what circumstances do you meet new people, and when do you communicate with people you don't know?");
                converstionSteps--;
            }
            //Question-4
        } else if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What topics do you discuss with new acquaintances? ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. What topics do you discuss with new acquaintances? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/topic/gi) ||
                converstionStepsText.match(/discuss/gi) || converstionStepsText.match(/new/gi) ||
                converstionStepsText.match(/acquaintance/gi) || converstionStepsText.match(/anything/gi) ||

                converstionStepsText.match(/interest/gi) || converstionStepsText.match(/broad/gi) ||
                converstionStepsText.match(/politic/gi) || converstionStepsText.match(/sport/gi) ||
                converstionStepsText.match(/game/gi) || converstionStepsText.match(/product/gi)

            ) {
                await playScript("Okey. What topics are not suitable for discussion?");
                setSampleAns([`I think there are very few things, which I find unsuitable. Firstly, I don’t like talking about money or 
                                        how much people earn. In India, its quite common to talk about salaries even when we meet 
                                        someone the first time, but I don’t find it suitable. I also don’t feel its appropriate to talk about 
                                        religion.`])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What topics do you discuss with new acquaintances? ");
                converstionSteps--;
            }
            //question-5
        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What topics are not suitable for discussion?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. What topics are not suitable for discussion?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/topics/gi) ||
                converstionStepsText.match(/suitable/gi) || converstionStepsText.match(/discussion/gi) ||
                converstionStepsText.match(/very/gi) || converstionStepsText.match(/unsuitable/gi) ||
                converstionStepsText.match(/money/gi) || converstionStepsText.match(/people/gi) ||
                converstionStepsText.match(/earn/gi) ||
                converstionStepsText.match(/common/gi) || converstionStepsText.match(/someone/gi) ||
                converstionStepsText.match(/appropriate/gi) || converstionStepsText.match(/suitable/gi) ||
                converstionStepsText.match(/religion/gi)
            ) {
                await playScript("Okey. What's the difference between chatting with friends and new people?");
                setSampleAns([`Firstly, I think I am much less reserved with friends. There are very few topics, I don’t talk about 
                                    with friends. Secondly, the conversation gets much more personal and detailed with friends. For 
                                    example, I have talked about mundane things like what I ate last night or what time I woke up with 
                                    my friends. Finally, I don’t mind discussing embarrassing stories with my friends, but I would never 
                                    do that with strangers.`])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What topics are not suitable for discussion?");
                converstionSteps--;
            }
            //question-6
        } else if (converstionSteps == 6) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What's the difference between chatting with friends and new people?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. What's the difference between chatting with friends and new people?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/difference/gi) || converstionStepsText.match(/between/gi) ||
                converstionStepsText.match(/chat/gi) || converstionStepsText.match(/friend/gi) ||
                converstionStepsText.match(/people/gi) || converstionStepsText.match(/Firstly/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/reserve/gi) ||

                converstionStepsText.match(/friend/gi) || converstionStepsText.match(/parent/gi) ||
                converstionStepsText.match(/family/gi) || converstionStepsText.match(/topic/gi) ||
                converstionStepsText.match(/society/gi) || converstionStepsText.match(/for example/gi) ||
                converstionStepsText.match(/discuss/gi) || converstionStepsText.match(/strangers/gi)
            ) {
                await playScript("So, How do you feel when you first meet someone new?");
                setSampleAns([`I usually feel a bit nervous but also excited. I’m curious to learn about their interests and experiences, and I try to keep the conversation light and friendly at first.`])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again. What's the difference between chatting with friends and new people?");
                converstionSteps--;
            }
            //question-7         
        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("How do you feel when you first meet someone new?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("Okey. i am repeating. How do you feel when you first meet someone new?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/feel/gi) || converstionStepsText.match(/when/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/meet/gi) ||
                converstionStepsText.match(/meet/gi) || converstionStepsText.match(/new/gi) ||

                converstionStepsText.match(/situation/gi) || converstionStepsText.match(/usually/gi) ||
                converstionStepsText.match(/nervous/gi) || converstionStepsText.match(/excite/gi) ||
                converstionStepsText.match(/curious/gi) || converstionStepsText.match(/interest/gi) ||
                converstionStepsText.match(/experiences/gi) || converstionStepsText.match(/conversation/gi) ||
                converstionStepsText.match(/friendly/gi)

            ) {
                await playScript("Okey. That was about section 3. Thanks.");
                await sendSpeakingtextToBackend(recordedText);
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again .How do you feel when you first meet someone new?");
                converstionSteps--;
            }
        }
    }

    converstionStepsText = "";



}