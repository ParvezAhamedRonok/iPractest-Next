let converstionSteps = 0;


export async function Test31Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {

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
                await playScript("I am asking you the question related of section two. So,  What is the relationship between shopping and economy of your country?");
                setSampleAns([`Shopping improves the economy and as economy improves, people do more shopping. So, both 
                            things depend on each other. `])
                conditionsDependsOnUserSpeech(0)
            }
        }
        //question--3
        else if (converstionSteps == 3) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("So,  What is the relationship between shopping and economy of your country?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. So, What is the relationship between shopping and economy of your country?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/relation/gi) || converstionStepsText.match(/usually/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/between/gi) ||
                converstionStepsText.match(/nowadays/gi) || converstionStepsText.match(/People/gi) ||

                converstionStepsText.match(/shop/gi) || converstionStepsText.match(/economy/gi) ||
                converstionStepsText.match(/reason/gi) || converstionStepsText.match(/country/gi) ||
                converstionStepsText.match(/improve/gi) || converstionStepsText.match(/depend/gi)
            ) {
                await playScript("Okey, What are the things young people like to buy?");
                setSampleAns([`Young people like to buy clothes, shoes, electronic gadgets and many other products.`])
                conditionsDependsOnUserSpeech(1)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What is the relationship between shopping and economy of your country?");
                converstionSteps--;
            }
            //Question-4
        } else if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What are the things young people like to buy?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. What are the things young people like to buy?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/young/gi) || converstionStepsText.match(/thing/gi) ||
                converstionStepsText.match(/people/gi) || converstionStepsText.match(/like/gi) ||
                converstionStepsText.match(/buy/gi) || converstionStepsText.match(/clothe/gi) ||

                converstionStepsText.match(/shoe/gi) || converstionStepsText.match(/electronic/gi) ||
                converstionStepsText.match(/product/gi)

            ) {
                await playScript("Okey. How your friends influence your shopping choice? ");
                setSampleAns([`Friends suggest me things to buy. My friends are very brand conscious. So,they keep a lookout on 
                                    the various offers by various branded stores. For example, recently, there was an offer on Levis 
                                    jeans. Two jeans were free on purchase of one. So, we bought one for Rs 3000/- and got two free. 
                                    Each one had to pay only 1000/- for the Levis jeans. `])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What are the things young people like to buy?");
                converstionSteps--;
            }
            //question-5
        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("How your friends influence your shopping choice?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. How your friends influence your shopping choice?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/friend/gi) ||
                converstionStepsText.match(/influence/gi) || converstionStepsText.match(/shop/gi) ||
                converstionStepsText.match(/choice/gi) || converstionStepsText.match(/suggest/gi) ||
                converstionStepsText.match(/brand/gi) || converstionStepsText.match(/lookout/gi) ||
                converstionStepsText.match(/various/gi)
            ) {
                await playScript("Okey. Is consumption important to a country?");
                setSampleAns([`Yes, consumption is very important to a country for its economy to grow/progress. Consumption 
                                        means customer demand and that leads to mass production, employment and makes any business 
                                        profitable. However, over consumption can be negative as it leads to a consumerist and 
                                        materialistic society. It also leads to environmental damage. So, people should draw a line on their 
                                        consumption of consumer goods and it shouldn’t lead to the above mentioned drawbacks or a 
                                        throw away society.`])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. How your friends influence your shopping choice?");
                converstionSteps--;
            }
            //question-6
        } else if (converstionSteps == 6) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Is consumption important to a country?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Is consumption important to a country?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/consumption/gi) ||
                converstionStepsText.match(/important/gi) || converstionStepsText.match(/country/gi) ||
                converstionStepsText.match(/economy/gi) || converstionStepsText.match(/grow/gi) ||

                converstionStepsText.match(/progress/gi) || converstionStepsText.match(/consumer/gi) ||
                converstionStepsText.match(/negative/gi) || converstionStepsText.match(/drawbacks/gi) ||
                converstionStepsText.match(/society/gi)
            ) {
                await playScript("So, What should parents do when their children ask for things their friends have?");
                setSampleAns([`Parents should make the children understand the difference between needs and desires. Parents 
                                should also be transparent about the affordability and family budget limitations so that children 
                                become more responsible and don’t demand things from their parents only because of peer 
                                pressure. `])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again.  Is consumption important to a country?");
                converstionSteps--;
            }
            //question-7         
        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What should parents do when their children ask for things their friends have?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("Okey. i am repeating. What should parents do when their children ask for things their friends have?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/should/gi) || converstionStepsText.match(/parent/gi) ||
                converstionStepsText.match(/when/gi) || converstionStepsText.match(/children/gi) ||
                converstionStepsText.match(/thing/gi) || converstionStepsText.match(/friend/gi) ||

                converstionStepsText.match(/situation/gi) || converstionStepsText.match(/wrong/gi) ||
                converstionStepsText.match(/have/gi) || converstionStepsText.match(/understand/gi) ||
                converstionStepsText.match(/need/gi) || converstionStepsText.match(/desire/gi) ||
                converstionStepsText.match(/become/gi) || converstionStepsText.match(/responsible/gi) ||
                converstionStepsText.match(/pressure/gi)
            ) {
                await playScript("Okey. That was about section 3. Thanks.");
                await sendSpeakingtextToBackend(recordedText);
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again . What should parents do when their children ask for things their friends have?");
                converstionSteps--;
            }
        }



    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";



}