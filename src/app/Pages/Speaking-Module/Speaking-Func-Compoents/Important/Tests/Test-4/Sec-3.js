
let converstionSteps = 0;
export async function Test4Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {
    if (converstionSteps == 0 && converstionStepsText == '') {
        await playScript(
            " My name is Adrian & I will be your examiner for this part of the test,  part three.  Are you comfortable?"
        );
        setSampleAns([" Yes, I am comfortable. You can procced now please"])
    }
    converstionSteps++;
    if (converstionStepsText != '') {

        if (converstionSteps == 1) {
            await playScript(
                "Sorry.... Can you repeat that please"
            );
            setSampleAns([" You can simply repeated your previous answer."])
        } else if (converstionSteps == 2) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Are you comfortabel?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating, Are you comfortabel?");
                converstionSteps--;
            }
            else {
                await playScript("Let's talk about success or achievement. How do you measure a person’s success?");
                setSampleAns([" It is very difficult to measure success. Success is a very subjective term. Different people give different meaning to success. For some earning a lot of money means success. For others, leading alife in which they can help others, means success. For a student, passing the exams with flying colours, means success. So measuring success is not easy."])
                conditionsDependsOnUserSpeech(0)
            }
        }
        else if (converstionSteps == 3) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("How do you measure a person’s success?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating, How do you measure a person’s success?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/we/gi) ||
                converstionStepsText.match(/can/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/measure/gi) || converstionStepsText.match(/person/gi) ||
                converstionStepsText.match(/man/gi) || converstionStepsText.match(/success/gi) ||
                converstionStepsText.match(/difficult/gi) || converstionStepsText.match(/term/gi) ||
                converstionStepsText.match(/no/gi) || converstionStepsText.match(/different/gi) ||
                converstionStepsText.match(/money/gi) || converstionStepsText.match(/huge/gi) ||
                converstionStepsText.match(/lot/gi) || converstionStepsText.match(/few/gi) ||
                converstionStepsText.match(/lead/gi) || converstionStepsText.match(/pass/gi) ||
                converstionStepsText.match(/easy/gi) || converstionStepsText.match(/not/gi) ||
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/measuring/gi)

            ) {
                await playScript("So, do you think the way people gain success has changed?");
                setSampleAns([" Yes, definitely, the way people gain success has changed. Earlier, people did a lot of hard work success was limited to a small area. Only politicians and film stars and sportsmen who were in the news or national TV were successful over a wider area. But, nowadays, because of the reality shows, any person with some talent can become successful overnight. People can get worldwide success through the Internet, through YouTube and other such networks. Today, people know of  Indian successful businessmen, all over the world, because the world has shrunk. "])
                conditionsDependsOnUserSpeech(1)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. How do you measure a person’s success?");
                converstionSteps--;
            }




        }
        else if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("ok. Do you think the way people gain success has changed?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating, Do you think the way people gain success has changed?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/way/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/common/gi) || converstionStepsText.match(/most/gi) ||
                converstionStepsText.match(/people/gi) || converstionStepsText.match(/gain/gi) ||
                converstionStepsText.match(/all/gi) || converstionStepsText.match(/situation/gi) ||
                converstionStepsText.match(/belive/gi) || converstionStepsText.match(/because/gi) ||
                converstionStepsText.match(/like/gi) || converstionStepsText.match(/success/gi) ||
                converstionStepsText.match(/have/gi) || converstionStepsText.match(/change/gi) ||
                converstionStepsText.match(/definite/gi) || converstionStepsText.match(/Earl/gi) ||
                converstionStepsText.match(/lot/gi) || converstionStepsText.match(/work/gi) ||
                converstionStepsText.match(/small/gi) || converstionStepsText.match(/wider/gi) ||
                converstionStepsText.match(/day/gi) || converstionStepsText.match(/show/gi) ||
                converstionStepsText.match(/talent/gi) || converstionStepsText.match(/Internet/gi) ||
                converstionStepsText.match(/business/gi) || converstionStepsText.match(/world/gi) ||
                converstionStepsText.match(/has/gi) || converstionStepsText.match(/shrunk/gi)
            ) {
                await playScript("Okay. How do you define success?");
                setSampleAns([" It is very difficult to define success. Success is a very subjective term. Different people give different meaning to success. For some earning a lot of money means success. For others, leading a life in which they can help others, means success. For a student, passing the exams with flying colours, means success. So defining success is not easy."])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Do you think the way people gain success has changed?");
                converstionSteps--;
            }



        }
        else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("How do you define success?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. How do you define success?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/control/gi) ||
                converstionStepsText.match(/can/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/could/gi) || converstionStepsText.match(/will/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/define/gi) ||
                converstionStepsText.match(/success/gi) || converstionStepsText.match(/example/gi) ||
                converstionStepsText.match(/belive/gi) || converstionStepsText.match(/because/gi) ||
                converstionStepsText.match(/difficult/gi) || converstionStepsText.match(/term/gi) ||
                converstionStepsText.match(/Different/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/life/gi) || converstionStepsText.match(/mean/gi) ||
                converstionStepsText.match(/lead/gi) || converstionStepsText.match(/suddenly/gi) ||
                converstionStepsText.match(/change/gi) || converstionStepsText.match(/easy/gi)
            ) {
                await playScript("So. How do you reward successful people?");
                setSampleAns([" We can reward successful people by acknowledging their work. Some awards can be given. Some monetary benefits can be given. Sometimes giving promotions is a good way to reward successful people."]);
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  How do you define success?");
                converstionSteps--;
            }


        } else if (converstionSteps == 6) {

            if (converstionStepsText.length < 10) {
                await smallTalkError("How do you reward successful people?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating,How do you reward successful people?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/reward/gi) || converstionStepsText.match(/because/gi) ||
                converstionStepsText.match(/most/gi) || converstionStepsText.match(/will/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/success/gi) ||
                converstionStepsText.match(/can/gi) || converstionStepsText.match(/knowledging/gi) ||
                converstionStepsText.match(/could/gi) || converstionStepsText.match(/will/gi) ||
                converstionStepsText.match(/people/gi) || converstionStepsText.match(/award/gi) ||
                converstionStepsText.match(/benefit/gi) || converstionStepsText.match(/Sometime/gi) ||
                converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                converstionStepsText.match(/promotion/gi) || converstionStepsText.match(/give/gi)
            ) {
                await playScript("Okay. What’s the most difficult thing you have ever done?");
                setSampleAns([" I am very stage shy. I remember, in the annual science fair of my school, I had to speak on a model,which I had prepared. The model was on different types of pollution. I found it very difficult, but somehow I managed it. That was the most difficult thing I did. "])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. How do you reward successful people?");
                converstionSteps--;
            }


        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What’s the most difficult thing you have ever done?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating,What’s the most difficult thing you have ever done?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/good/gi) || converstionStepsText.match(/because/gi) ||
                converstionStepsText.match(/most/gi) || converstionStepsText.match(/will/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/can/gi) || converstionStepsText.match(/could/gi) ||
                converstionStepsText.match(/Stay/gi) || converstionStepsText.match(/focus/gi) ||
                converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                converstionStepsText.match(/difficult/gi) || converstionStepsText.match(/thing/gi) ||
                converstionStepsText.match(/have/gi) || converstionStepsText.match(/done/gi) ||
                converstionStepsText.match(/shy/gi) || converstionStepsText.match(/remember/gi) ||
                converstionStepsText.match(/annual/gi) || converstionStepsText.match(/school/gi) ||
                converstionStepsText.match(/prepare/gi) || converstionStepsText.match(/financial/gi) ||
                converstionStepsText.match(/type/gi) || converstionStepsText.match(/especially/gi) ||
                converstionStepsText.match(/found/gi) || converstionStepsText.match(/did/gi)

            ) {
                await playScript(" What qualities does a person need to have to be successful?")
                setSampleAns([" The person should be hard working. He should have good communication skills. He should have the courage to take calculated risks. He should have a helping and caring nature."])
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  What’s the most difficult thing you have ever done?");
                converstionSteps--;
            }




        } else if (converstionSteps == 8) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What qualities does a person need to have to be successful?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating,What qualities does a person need to have to be successful?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/good/gi) || converstionStepsText.match(/because/gi) ||
                converstionStepsText.match(/most/gi) || converstionStepsText.match(/will/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/sure/gi) || converstionStepsText.match(/keep/gi) ||
                converstionStepsText.match(/Can/gi) || converstionStepsText.match(/people/gi) ||
                converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                converstionStepsText.match(/qualit/gi) || converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/person/gi) || converstionStepsText.match(/have/gi) ||
                converstionStepsText.match(/success/gi) || converstionStepsText.match(/being/gi) ||
                converstionStepsText.match(/become/gi) || converstionStepsText.match(/be/gi) ||
                converstionStepsText.match(/should/gi) || converstionStepsText.match(/work/gi) ||
                converstionStepsText.match(/communicat/gi) || converstionStepsText.match(/courage/gi) ||
                converstionStepsText.match(/risk/gi) || converstionStepsText.match(/help/gi) ||
                converstionStepsText.match(/car/gi) || converstionStepsText.match(/nature/gi)
            ) {
                await playScript("Okay. Do you feel terrible when you fail to do something?")
                setSampleAns([" I feel terrible, but only for a short period of time. Then, I try to learn from my failure and work even  harder to succeed the next time. "])
                conditionsDependsOnUserSpeech(6)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What qualities does a person need to have to be successful?");
                converstionSteps--;
            }



        }
        else if (converstionSteps == 9) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Do you feel terrible when you fail to do something?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating, Do you feel terrible when you fail to do something?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/good/gi) || converstionStepsText.match(/because/gi) ||
                converstionStepsText.match(/do/gi) || converstionStepsText.match(/because/gi) ||
                converstionStepsText.match(/most/gi) || converstionStepsText.match(/will/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/feel/gi) || converstionStepsText.match(/terrible/gi) ||
                converstionStepsText.match(/when/gi) || converstionStepsText.match(/people/gi) ||
                converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                converstionStepsText.match(/Can/gi) || converstionStepsText.match(/fail/gi) ||
                converstionStepsText.match(/something/gi) || converstionStepsText.match(/period/gi) ||
                converstionStepsText.match(/big/gi) || converstionStepsText.match(/time/gi) ||
                converstionStepsText.match(/possible/gi) || converstionStepsText.match(/outcome/gi) ||
                converstionStepsText.match(/try/gi) || converstionStepsText.match(/failure/gi) ||
                converstionStepsText.match(/harder/gi) || converstionStepsText.match(/advice/gi)
            ) {
                await playScript("Okay. Is it important for young people to have some achievements?")
                setSampleAns([" I think it is an interesting question, having achievement at a young age certainly helps in gaining confidence and teaches us the importance of hard work."])
                conditionsDependsOnUserSpeech(7)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.   Do you feel terrible when you fail to do something?");
                converstionSteps--;
            }

        }

        else if (converstionSteps == 10) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Is it important for young people to have some achievements?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating, Is it important for young people to have some achievements?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/it/gi) || converstionStepsText.match(/search/gi) ||
                converstionStepsText.match(/avoiding/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/important/gi) || converstionStepsText.match(/because/gi) ||
                converstionStepsText.match(/most/gi) || converstionStepsText.match(/will/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/young/gi) ||
                converstionStepsText.match(/people/gi) || converstionStepsText.match(/have/gi) ||
                converstionStepsText.match(/to/gi) || converstionStepsText.match(/some/gi) ||
                converstionStepsText.match(/achievement/gi) || converstionStepsText.match(/success/gi) ||

                converstionStepsText.match(/interesting/gi) || converstionStepsText.match(/certain/gi) ||
                converstionStepsText.match(/help/gi) || converstionStepsText.match(/gain/gi) ||
                converstionStepsText.match(/confidence/gi) || converstionStepsText.match(/work/gi)
            ) {
                await playScript("Okay. That was about section 3. Thanks.");
                conditionsDependsOnUserSpeech(8)
                await sendSpeakingtextToBackend(recordedText);
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Is it important for young people to have some achievements?");
                converstionSteps--;
            }



        }

    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";


}