let converstionSteps = 0;
export async function Test19Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {
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
                await playScript("I am asking you the question related of section 2 . so, Let's talk about changing .Is your country changing rapidly? ");
                setSampleAns([`Yes, my country is changing rapidly. India is a developing country and is changing day-by-day for the  better. With the advancement of technology it is stepping fast from a developing to a developed  country. Change has always been happening, but technology has hastened the process of change.
                 `])
                conditionsDependsOnUserSpeech(0)
            }
        }
        else if (converstionSteps == 3) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Is your country changing rapidly? ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.Is your country changing rapidly? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/country/gi) || converstionStepsText.match(/chang/gi) ||
                converstionStepsText.match(/rapidly/gi) || converstionStepsText.match(/many/gi) ||

                converstionStepsText.match(/have/gi) || converstionStepsText.match(/develop/gi) ||
                converstionStepsText.match(/day/gi) || converstionStepsText.match(/better/gi) ||
                converstionStepsText.match(/advancement/gi) || converstionStepsText.match(/technology/gi) ||
                converstionStepsText.match(/stepp/gi) || converstionStepsText.match(/hastened/gi) ||
                converstionStepsText.match(/process/gi) || converstionStepsText.match(/change/gi)

            ) {
                await playScript(" How is your country changing? ");
                setSampleAns([`I think my country is changing in many ways. Firstly, I can see the effect of globalisation, people are 
                wearing western clothes, eating western cuisines and watching foreign shows more and more. 
                Secondly, people are also becoming modern in their thinking and views. Many wrong traditional 
                practices like dowry are losing ground. Finally, we are developing in infrastructure and facilities. Many 
                modern facilities like fast internet connectivity , subways are accessible to people today.
                `])
                conditionsDependsOnUserSpeech(1)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.Is your country changing rapidly? ");
                converstionSteps--;
            }
        } else if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" How is your country changing? ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.  How is your country changing? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/country/gi) ||
                converstionStepsText.match(/chang/gi) || converstionStepsText.match(/many/gi) ||
                converstionStepsText.match(/ways/gi) || converstionStepsText.match(/effect/gi) ||
                converstionStepsText.match(/earn/gi) || converstionStepsText.match(/culture/gi) ||

                converstionStepsText.match(/globalisation/gi) || converstionStepsText.match(/wearing/gi) ||
                converstionStepsText.match(/watch/gi) || converstionStepsText.match(/tourist/gi) ||

                converstionStepsText.match(/becom/gi) || converstionStepsText.match(/view/gi) || converstionStepsText.match(/practice/gi) || converstionStepsText.match(/develop/gi) || converstionStepsText.match(/modern/gi) || converstionStepsText.match(/connect/gi) || converstionStepsText.match(/subways/gi) || converstionStepsText.match(/accessible/gi)
            ) {
                await playScript("Okey. Do you believe that the changes your country went through are positive? ");
                setSampleAns([`For me, most of the changes have been positive. But I think this is also due to the fact that I am optimist and I like to look at things from a positive side. Moreover, although I consider that most of the changes have been positive, some have happened at a slower pace than I had hoped.`])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. How is your country changing? ");
                converstionSteps--;
            }
        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you believe that the changes your country went through are positive?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Do you believe that the changes your country went through are positive?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/believe/gi) ||
                converstionStepsText.match(/change/gi) || converstionStepsText.match(/country/gi) ||

                converstionStepsText.match(/did/gi) || converstionStepsText.match(/through/gi) ||
                converstionStepsText.match(/positive/gi) || converstionStepsText.match(/optimist/gi) ||
                converstionStepsText.match(/side/gi) || converstionStepsText.match(/Moreover/gi) ||

                converstionStepsText.match(/although/gi) || converstionStepsText.match(/consider/gi) ||
                converstionStepsText.match(/slower/gi) || converstionStepsText.match(/happen/gi) ||
                converstionStepsText.match(/culture/gi)
            ) {
                await playScript("Okey. Do you think change is good？");
                setSampleAns([`Well change can be both good and bad. It really depends upon on the change and why we are making  the change. In the end, if we are changing for the right reasons, to make our ourselves better, then  change is definitely good. However, if we are being forced to change or if we are developing negative   habits like drinking, smoking due to stress or peer pressure, I would consider it bad.`])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.Do you believe that the changes your country went through are positive?");
                converstionSteps--;
            }
        } else if (converstionSteps == 6) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you think change is good？");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.Do you think change is good？.");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/change/gi) || converstionStepsText.match(/yes/gi) ||
                converstionStepsText.match(/no/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/good/gi) || converstionStepsText.match(/bad/gi) ||
                converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                converstionStepsText.match(/especially/gi) || converstionStepsText.match(/depend/gi) ||
                converstionStepsText.match(/In the end/gi) || converstionStepsText.match(/reason/gi) ||
                converstionStepsText.match(/consider/gi) || converstionStepsText.match(/would/gi) ||
                converstionStepsText.match(/will/gi)
            ) {
                await playScript("So, What are some of the major changes that usually occur in people in their lives?");
                setSampleAns([`I think changes occur throughout our life. First are the physical and hormonal changes which occur  when we go through puberty like developing facial hair, deepening of voice and so on. Then, it is  mental maturity, which occurs as we experience and face different things. We learn how to deal with issues and face challenges. `])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again .Do you think change is good？");
                converstionSteps--;
            }
        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" What are some of the major changes that usually occur in people in their lives?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript(" What are some of the major changes that usually occur in people in their lives?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/some/gi) || converstionStepsText.match(/major/gi) ||
                converstionStepsText.match(/change/gi) || converstionStepsText.match(/usually/gi) ||
                converstionStepsText.match(/occur/gi) || converstionStepsText.match(/live/gi) ||

                converstionStepsText.match(/think/gi) || converstionStepsText.match(/through/gi) ||
                converstionStepsText.match(/physical/gi) || converstionStepsText.match(/hormonal/gi) ||
                converstionStepsText.match(/puberty/gi) || converstionStepsText.match(/develop/gi) ||

                converstionStepsText.match(/maturity/gi) || converstionStepsText.match(/experience/gi) ||
                converstionStepsText.match(/different/gi) || converstionStepsText.match(/issue/gi) ||
                converstionStepsText.match(/challenge/gi)
            ) {
                await playScript("Okey. Is it important for people to make changes according to their surroundings? ");
                setSampleAns([`Yes, I think there is no problem in changing according to surroundings as long we don’t feel like we  are changing our identity because of these changes. For example, when in a foreign country, it is   perfectly fine to try out foreign clothes and dishes. At the same time, if a person is a vegetarian, I  wouldn’t consider it fine to try non-vegetarian just to fit in
                 `])
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again . What are some of the major changes that usually occur in people in their lives? ");
                converstionSteps--;
            }
        } else if (converstionSteps == 8) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Is it important for people to make changes according to their surroundings? ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Is it important for people to make changes according to their surroundings?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/important/gi) || converstionStepsText.match(/yes/gi) ||
                converstionStepsText.match(/no/gi) || converstionStepsText.match(/people/gi) ||
                converstionStepsText.match(/change/gi) || converstionStepsText.match(/accord/gi) ||

                converstionStepsText.match(/surround/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/problem/gi) || converstionStepsText.match(/identity/gi) ||
                converstionStepsText.match(/course/gi) || converstionStepsText.match(/consider/gi) ||
                converstionStepsText.match(/foreign/gi) || converstionStepsText.match(/dish/gi) ||

                converstionStepsText.match(/cloth/gi) || converstionStepsText.match(/person/gi) ||
                converstionStepsText.match(/become/gi) || converstionStepsText.match(/consider/gi) || converstionStepsText.match(/vegetarian/gi)

            ) {
                await playScript("Okey. That was about section 3. Thanks.");
                conditionsDependsOnUserSpeech(6)
                await sendSpeakingtextToBackend(recordedText);
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Is it important for people to make changes according to their surroundings? ");
                converstionSteps--;
            }
        }

    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";


}