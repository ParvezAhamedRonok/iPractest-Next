let converstionSteps = 0;


export async function Test29Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {

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
                await playScript("I am asking you the question related of section two. So,  Do you think having dinner at home is a good idea?");
                setSampleAns([`Yes, of course. Home cooked meals are always healthier than meals at restaurants. At home we use 
                        the best oils and add spices to our taste. We also wash the vegetables properly before cooking. `])
                conditionsDependsOnUserSpeech(0)
            }
        }
        //question--3
        else if (converstionSteps == 3) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("So,  Do you think having dinner at home is a good idea?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. So,  Do you think having dinner at home is a good idea?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/nowadays/gi) || converstionStepsText.match(/having/gi) ||
                converstionStepsText.match(/dinner/gi) || converstionStepsText.match(/home/gi) ||
                converstionStepsText.match(/good/gi) || converstionStepsText.match(/idea/gi) ||
                converstionStepsText.match(/meals/gi) || converstionStepsText.match(/health/gi) ||
                converstionStepsText.match(/restaurants/gi) || converstionStepsText.match(/spices/gi) ||
                converstionStepsText.match(/vegetables/gi) || converstionStepsText.match(/cook/gi)

            ) {
                await playScript("Okey, Do young people like to spend time with their families or friends? ");
                setSampleAns([`Young people like to spend time with friends more because they have no generation gap with 
                                        friends. When they spend time with family, there are chances of misunderstandings. Parents have 
                                        to be friendly, otherwise young people drift away from them`])
                conditionsDependsOnUserSpeech(1)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Do you think having dinner at home is a good idea?");
                converstionSteps--;
            }
            //Question-4
        } else if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Do young people like to spend time with their families or friends? ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Do young people like to spend time with their families or friends? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/children/gi) || converstionStepsText.match(/too/gi) ||
                converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                converstionStepsText.match(/spend/gi) || converstionStepsText.match(/families/gi) ||
                converstionStepsText.match(/date/gi) || converstionStepsText.match(/friend/gi) ||
                converstionStepsText.match(/because/gi) || converstionStepsText.match(/generation/gi) ||
                converstionStepsText.match(/otherwise/gi) || converstionStepsText.match(/drift/gi)

            ) {
                await playScript("Okey. What do you think are the benefits of having dinner together? ");
                setSampleAns([`When families have dinner together, it increases family bonding. They share their day’s happenings 
                            with each other. It has also been seen that when families have 3-5 meals a week together, then 
                            children do not fall into vices like drugs and alcohol.`])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Do young people like to spend time with their families or friends? ");
                converstionSteps--;
            }
            //question-5
        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What do you think are the benefits of having dinner together? ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. What do you think are the benefits of having dinner together? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/benefits/gi) ||
                converstionStepsText.match(/having/gi) || converstionStepsText.match(/dinner/gi) ||
                converstionStepsText.match(/together/gi) || converstionStepsText.match(/food/gi) ||
                converstionStepsText.match(/experience/gi) || converstionStepsText.match(/families/gi) ||
                converstionStepsText.match(/increases/gi) || converstionStepsText.match(/family/gi) ||
                converstionStepsText.match(/different/gi) || converstionStepsText.match(/bonding/gi) ||

                converstionStepsText.match(/share/gi) || converstionStepsText.match(/meal/gi) ||
                converstionStepsText.match(/children/gi)
            ) {
                await playScript("Okey.  Do you think people are less willing to cook meals by themselves these days, compared to the past?");
                setSampleAns([`Yes, people have become more career oriented and have started earning more. When spending 
                                    capacity increases then people find easy way out and eat out.`])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What do you think are the benefits of having dinner together? ");
                converstionSteps--;
            }
            //question-6
        } else if (converstionSteps == 6) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you think people are less willing to cook meals by themselves these days, compared to the past?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.Do you think people are less willing to cook meals by themselves these days, compared to the past?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/important/gi) ||
                converstionStepsText.match(/people/gi) || converstionStepsText.match(/willing/gi) ||
                converstionStepsText.match(/less/gi) || converstionStepsText.match(/cook/gi) ||

                converstionStepsText.match(/meal/gi) || converstionStepsText.match(/Everything/gi) ||
                converstionStepsText.match(/enjoy/gi) || converstionStepsText.match(/themselves/gi) ||
                converstionStepsText.match(/day/gi) || converstionStepsText.match(/compared/gi) ||

                converstionStepsText.match(/past/gi) || converstionStepsText.match(/career/gi) ||
                converstionStepsText.match(/orient/gi) || converstionStepsText.match(/spend/gi)
            ) {
                await playScript("So, What kinds of food are popular in your country?");
                setSampleAns([`In my country, traditional foods like rice, curry, dal, and roti are very popular. Street foods like samosas and chaat are also widely enjoyed, along with modern fast foods like pizza and burgers.`])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again. Do you think people are less willing to cook meals by themselves these days, compared to the past?");
                converstionSteps--;
            }
            //question-7         
        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" What kinds of food are popular in your country?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("Okey. i am repeating. What kinds of food are popular in your country?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/kinds/gi) || converstionStepsText.match(/food/gi) ||
                converstionStepsText.match(/popular/gi) || converstionStepsText.match(/country/gi) ||
                converstionStepsText.match(/my/gi) || converstionStepsText.match(/traditional/gi) ||

                converstionStepsText.match(/food/gi) || converstionStepsText.match(/rice/gi) ||
                converstionStepsText.match(/like/gi) || converstionStepsText.match(/roti/gi) ||
                converstionStepsText.match(/Street/gi) || converstionStepsText.match(/Nowaday/gi) ||
                converstionStepsText.match(/samosas/gi)
            ) {
                await playScript("Okey. That was about section 3. Thanks.");
                await sendSpeakingtextToBackend(recordedText);
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again . What kinds of food are popular in your country?");
                converstionSteps--;
            }
        }



    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";



}