let converstionSteps = 0;



export async function Test22Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {

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
                await playScript("I am asking you the question related of section two.So, Why do some people hate advertisements?");
                setSampleAns([`People do not like advertisements while they are watching a program because ads break the 
                                    continuity. Another annoying factor is that most of the ads are very repetitive and there is nothing 
                                    new. But the fact remains that if there are no advertising agencies to sponsor the programs we will 
                                    not be able to watch good programs.`])
                conditionsDependsOnUserSpeech(0)
            }
        }
        //question--3
        else if (converstionSteps == 3) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("So, Why do some people hate advertisements?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.So, Why do some people hate advertisements?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/kind/gi) || converstionStepsText.match(/people/gi) ||
                converstionStepsText.match(/advertisement/gi) || converstionStepsText.match(/like/gi) ||
                converstionStepsText.match(/while/gi) || converstionStepsText.match(/many/gi) ||

                converstionStepsText.match(/watch/gi) || converstionStepsText.match(/work/gi) ||
                converstionStepsText.match(/program/gi) || converstionStepsText.match(/better/gi) ||
                converstionStepsText.match(/ads/gi) || converstionStepsText.match(/repetitive/gi) ||

                converstionStepsText.match(/nothing/gi) || converstionStepsText.match(/remain/gi) ||
                converstionStepsText.match(/sponsor/gi) || converstionStepsText.match(/good/gi)

            ) {
                await playScript(". Do people usually buy stuff after watching advertisements?");
                setSampleAns([`Yes definitely many people buy the products after they watch an ad. Many of the advertisements 
                                    are very innovative as well as informative these these days. An advert can lure a wide range of 
                                    people, from small children to the senior citizens.`])
                conditionsDependsOnUserSpeech(1)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.So, Why do some people hate advertisements?");
                converstionSteps--;
            }
            //Question-4

        } else if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("  Do people usually buy stuff after watching advertisements?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.  Do people usually buy stuff after watching advertisements?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/usually/gi) || converstionStepsText.match(/after/gi) ||
                converstionStepsText.match(/stuff/gi) || converstionStepsText.match(/watch/gi) ||
                converstionStepsText.match(/advertisement/gi) || converstionStepsText.match(/definitely/gi) ||
                converstionStepsText.match(/people/gi) || converstionStepsText.match(/product/gi) ||
                converstionStepsText.match(/senior/gi) || converstionStepsText.match(/affect/gi) ||
                converstionStepsText.match(/innovative/gi) || converstionStepsText.match(/informative/gi) ||
                converstionStepsText.match(/wide/gi) || converstionStepsText.match(/children/gi)

            ) {
                await playScript("Okey. . Is music useful in advertising?");

                setSampleAns([`Yes, music adds life to the ad. Music can add meaning to anything and so music is useful in ads. For 
                                example, some jingles keep ringing in your ears even after the ad is over. So, the purpose of ad is 
                                fulfilled.`])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Do people usually buy stuff after watching advertisements?");
                converstionSteps--;
            }

            //question-5

        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(". Is music useful in advertising?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.. Is music useful in advertising?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/music/gi) ||
                converstionStepsText.match(/advertising/gi) || converstionStepsText.match(/useful/gi) ||

                converstionStepsText.match(/adds/gi) || converstionStepsText.match(/through/gi) ||
                converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                converstionStepsText.match(/anything/gi) || converstionStepsText.match(/example/gi) ||

                converstionStepsText.match(/ears/gi) || converstionStepsText.match(/consider/gi) ||
                converstionStepsText.match(/essential/gi) || converstionStepsText.match(/progress/gi) ||
                converstionStepsText.match(/purpose/gi) || converstionStepsText.match(/fulfilled/gi)
            ) {
                await playScript("Okey. What are advantages of TV advertisements? How about internet advertisements?");
                setSampleAns([`TV ads have both audio and video component. So these give visual reminders of the products and 
                                    that is what sells the products.Internet adds can be skipped and it is optional and upto the user 
                                    whether to view them or not.
                                    `])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. . Is music useful in advertising?");
                converstionSteps--;
            }
            //question-6

        } else if (converstionSteps == 6) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What are advantages of TV advertisements? How about internet advertisements?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. What are advantages of TV advertisements? How about internet advertisements?");
                converstionSteps--;
            } else if (
                converstionStepsText.match(/advantage/gi) || converstionStepsText.match(/TV/gi) ||
                converstionStepsText.match(/advertisement/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/allow/gi) || converstionStepsText.match(/choose/gi) ||
                converstionStepsText.match(/internet/gi) || converstionStepsText.match(/audio/gi) ||

                converstionStepsText.match(/video/gi) || converstionStepsText.match(/visual/gi) ||
                converstionStepsText.match(/reminder/gi) || converstionStepsText.match(/product/gi) ||
                converstionStepsText.match(/skip/gi) || converstionStepsText.match(/optional/gi) ||
                converstionStepsText.match(/whether/gi)
            ) {
                await playScript("So, Where usually do we see adverts?");
                setSampleAns([`We see ads all around us – on TV, on radio, on roadsides, in newspapers, in magazines, on the 
                                    internet, on phones and as flyers.`])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again . What are advantages of TV advertisements? How about internet advertisements?");
                converstionSteps--;
            }

            //question-7         
        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Where usually do we see adverts?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("Okey. i am repeating. Where usually do we see adverts?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/Where/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/advert/gi) || converstionStepsText.match(/usually/gi) ||
                converstionStepsText.match(/ads/gi) || converstionStepsText.match(/manage/gi) ||

                converstionStepsText.match(/radio/gi) || converstionStepsText.match(/tv/gi) ||
                converstionStepsText.match(/roadside/gi) || converstionStepsText.match(/newspaper/gi) ||
                converstionStepsText.match(/magazine/gi) || converstionStepsText.match(/internet/gi) ||

                converstionStepsText.match(/phone/gi) || converstionStepsText.match(/flyer/gi)
            ) {
                await playScript("Okey. That was about section 3. Thanks.");
                await sendSpeakingtextToBackend(recordedText);
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again . Where usually do we see adverts?");
                converstionSteps--;
            }
        }



    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";



}