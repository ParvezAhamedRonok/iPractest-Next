
let converstionSteps = 0;
export async function Test3Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {

    if (converstionSteps == 0 && converstionStepsText == '') {
        await playScript(
            "Welcome to the third section. Let's talk about good news. So, are you ready?"
        );
        setSampleAns([" Simply you can say the positive answer. As like Yes i am Ready to give the test. ", "2, Yes, I am reay.You can proceed the test"])
    }
    converstionSteps++;
    if (converstionStepsText != '') {
        if (converstionSteps == 1) {
            await playScript(
                "Let me begin your test. Can you tell me your full name again?"
            );
            setSampleAns([" Simply you can say your full name. As like my name is Jone dow.You can call me Jone"])
        }

        else if (converstionSteps == 2) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("are you ready?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am Repeatin ,are you ready?");
                converstionSteps--;
            }
            else {
                await playScript("So, how do people share good news?");
                setSampleAns([" People share good news in many ways. They just tell each other face to face. They also use social media like Facebook, Twitter and Whatsapp. They also call the other person and tell about any good news. They write e-mails also for this purpose."])
                conditionsDependsOnUserSpeech(0)
            }
        }
        else if (converstionSteps == 3) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("How do people share good news?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am Repeatin ,How do people share good news?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/people/gi) || converstionStepsText.match(/share/gi) ||
                converstionStepsText.match(/good/gi) || converstionStepsText.match(/new/gi) ||
                converstionStepsText.match(/way/gi) || converstionStepsText.match(/face/gi) ||
                converstionStepsText.match(/front/gi) || converstionStepsText.match(/social/gi) ||
                converstionStepsText.match(/use/gi) || converstionStepsText.match(/Facebook/gi) ||
                converstionStepsText.match(/media/gi) || converstionStepsText.match(/write/gi) ||
                converstionStepsText.match(/do/gi) || converstionStepsText.match(/make/gi) ||
                converstionStepsText.match(/generally/gi) || converstionStepsText.match(/basically/gi) ||
                converstionStepsText.match(/purpose/gi) || converstionStepsText.match(/can/gi)
            ) {
                await playScript("Okay. What kind of good news do people often share in the community?");
                setSampleAns(["The good news is that they share in the community. People often share the news of getting a job or getting an excellent college to study in the community because it is an outstanding achievement if a student gets a job in an urban city area with a very nice salary and a student receives admission to a very high-profile college so he can pursue an excellent job. So, it is fantastic news that people share with the community."])
                conditionsDependsOnUserSpeech(1)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. How do people share good news?");
                converstionSteps--;
            }
        }
        else if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What kind of good news do people often share in the community?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am Repeatin. What kind of good news do people often share in the community?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/kind/gi) || converstionStepsText.match(/good/gi) ||
                converstionStepsText.match(/new/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/people/gi) || converstionStepsText.match(/often/gi) ||
                converstionStepsText.match(/share/gi) || converstionStepsText.match(/community/gi) ||
                converstionStepsText.match(/job/gi) || converstionStepsText.match(/birthday/gi) ||
                converstionStepsText.match(/many/gi) || converstionStepsText.match(/excellent/gi) ||

                converstionStepsText.match(/achievement/gi) || converstionStepsText.match(/receive/gi) ||
                converstionStepsText.match(/update/gi) || converstionStepsText.match(/incress/gi) ||
                converstionStepsText.match(/admission/gi) || converstionStepsText.match(/profile/gi)
            ) {
                await playScript("So, when do people share good news?");
                setSampleAns([" People share good news when they want their near and dear ones to know what good has  happened to them. For example, if anyone becomes a parent, he wants to share this news with everyone. If anyone buys a new home or a new car then he wants his friends and relatives to know about that. If anybody clears an exam or gets a new job, he wants others to know about it."])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What kind of good news do people often share in the community?");
                converstionSteps--;
            }
        }


        else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("when do people share good news?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am Repeatin ,when do people share good news?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/do/gi) || converstionStepsText.match(/can/gi) ||
                converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                converstionStepsText.match(/people/gi) || converstionStepsText.match(/share/gi) ||
                converstionStepsText.match(/good/gi) || converstionStepsText.match(/new/gi) ||
                converstionStepsText.match(/they/gi) || converstionStepsText.match(/happen/gi) ||
                converstionStepsText.match(/example/gi) || converstionStepsText.match(/anyone/gi)
            ) {
                await playScript("OK, what kinds of good news have you received before?");
                setSampleAns([' I have received many kinds of good news. I received the good news that my cousin was blessed with a baby girl. I also received the good news that my cousin had topped in his 8th grade exam'])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. when do people share good news?");
                converstionSteps--;
            }
        }

        else if (converstionSteps == 6) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("what kinds of good news have you received before?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am Repeatin ,what kinds of good news have you received before?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/remember/gi) ||
                converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                converstionStepsText.match(/actually/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/kind/gi) || converstionStepsText.match(/good/gi) ||
                converstionStepsText.match(/new/gi) || converstionStepsText.match(/receive/gi) ||
                converstionStepsText.match(/before/gi) || converstionStepsText.match(/have/gi) ||
                converstionStepsText.match(/many/gi) || converstionStepsText.match(/baby/gi) ||
                converstionStepsText.match(/child/gi)
            ) {
                await playScript("OK, what kind of good news do people like to hear?");
                setSampleAns([" People like to hear good news about any achievements of their friends and relatives, any celebrity  visiting their town or city, any festival celebration and any new movie released of their favourite actor or actress."])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. what kinds of good news have you received before?");
                converstionSteps--;
            }
        }

        else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("what kind of good news do people like to hear?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am Repeatin ,what kind of good news do people like to hear?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                converstionStepsText.match(/actually/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/kind/gi) || converstionStepsText.match(/good/gi) ||
                converstionStepsText.match(/news/gi) || converstionStepsText.match(/receive/gi) ||
                converstionStepsText.match(/people/gi) || converstionStepsText.match(/like/gi) ||
                converstionStepsText.match(/love/gi) || converstionStepsText.match(/hear/gi) ||
                converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/about/gi) || converstionStepsText.match(/achievement/gi) ||
                converstionStepsText.match(/social/gi) || converstionStepsText.match(/city/gi) ||
                converstionStepsText.match(/festival/gi) ||
                converstionStepsText.match(/celebration/gi) || converstionStepsText.match(/favourite/gi)

            ) {
                await playScript("OK, why do people share news on social media?");
                setSampleAns([" Social media is a quick and time-saving platform for sharing news. People just have to post one  message and it reaches a very wide audience instantaneously."])
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. what kind of good news do people like to hear?");
                converstionSteps--;
            }
        }
        else if (converstionSteps == 8) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("why do people share news on social media?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am Repeating. why do people share news on social media?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/share/gi) ||
                converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                converstionStepsText.match(/actually/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/kind/gi) || converstionStepsText.match(/good/gi) ||
                converstionStepsText.match(/news/gi) || converstionStepsText.match(/receive/gi) ||
                converstionStepsText.match(/people/gi) || converstionStepsText.match(/like/gi) ||
                converstionStepsText.match(/love/gi) || converstionStepsText.match(/hear/gi) ||
                converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/social/gi) || converstionStepsText.match(/media/gi) ||
                converstionStepsText.match(/quick/gi) || converstionStepsText.match(/platform/gi) ||
                converstionStepsText.match(/time/gi) ||
                converstionStepsText.match(/post/gi) || converstionStepsText.match(/message/gi) ||
                converstionStepsText.match(/reache/gi) || converstionStepsText.match(/wide/gi) ||
                converstionStepsText.match(/can/gi) || converstionStepsText.match(/could/gi) ||
                converstionStepsText.match(/make/gi) || converstionStepsText.match(/would/gi)
            ) {
                await playScript("Okay. That was about section 3. Thanks.");
                conditionsDependsOnUserSpeech(6)
                await sendSpeakingtextToBackend(recordedText);
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. why do people share news on social media?");
                converstionSteps--;
            }



        }

    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";
}