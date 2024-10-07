
let converstionSteps = 0;
export async function Test7Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {
    if (converstionSteps == 0 && converstionStepsText == '') {
        if (!userSpeakingTestNo) {
            await playScript(
                "Hello and welcome to the IELTS speaking portion of the test. Jone is my name. & For this portion of the exam, I will serve as your examiner. We are carrying out this. Would you kindly tell me your entire name?"
            );
            setSampleAns([" Simply you can say your full name. As like my name is Jone dow.You can call me Jone"])
        } else {
            await playScript("Are you ready to take the test then?");
            setSampleAns([" Simply you can say the positive answer. As like Yes i am Ready to give the test. ", "2, Yes, I am reay.You can proceed the test"])
        }

    }


    converstionSteps++;
    if (converstionStepsText != '') {
        // if (converstionStepsText.length < 10) {
        //     await smallTalkError();
        // }

        // else if (converstionStepsText.match('repeat') || converstionStepsText.match(" understand")) {
        //     await playScript(
        //         "Ok , I am repeating.");
        //     converstionSteps--;
        // }

        // if (converstionSteps == 0) {
        //     await playScript(
        //         "Welcome to the speaking portion of the ielts exam. My name is adrian.& I will be your examiner for this part of the test. I will give you instructions for each of the parts. What is your full name?"
        //     );
        // } 

        if (!userSpeakingTestNo) {
            if (converstionSteps == 1) {
                await playScript(
                    "I'll start your exam now. What's your full name, please?"
                );
            } else if (converstionSteps == 2) {
                if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,What's your full name, please?");
                    converstionSteps--;
                }
                else if (converstionStepsText.match("name") || converstionStepsText.match("call")) {
                    if (converstionStepsText.match("call")) {
                        await playScript(
                            "So, for this section. I'm going to ask some general questions. Where do you live?"
                        );
                        setSampleAns([" Simply you can say your area/ or place where you are live in.As like I am living in Dhaka,Bangladesh", "2, I live in kolkata,India"])
                        localStorage.setItem("SpeakingTestNo", testNo);
                        conditionsDependsOnUserSpeech(0)
                    } else {
                        await playScript("Alright. What can I call you?");
                        setSampleAns(["You can simply say . You can call me jonw"])
                        converstionSteps--;
                    }
                }
                else {
                    await playScript("Alright, what's your name?");
                    setSampleAns(["Hello sir, I am Parvez . You can call me Ronok"])
                    converstionSteps--;
                }

            } else if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Where do you live?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating, Where do you live?");
                    converstionSteps--;
                }
                else if (converstionStepsText.match(/live/gi) || converstionStepsText.match(/leaving/gi) ||
                    converstionStepsText.match(/in/gi) || converstionStepsText.match(/at/gi) ||
                    converstionStepsText.match(/from/gi) || converstionStepsText.match(/i am living/gi)) {
                    await playScript("Let's talk about newspapers and magazines. How often do you read a newspaper? How about a magazine?");
                    setSampleAns([" i haven't bought a paper magazine or newspaper as long as i remember i may have flipped through one in a superstore but that's about it but i do follow um subscriptions on my mobile i read a magazine called femina on internet every week ",
                        `2 , According to a survey held in the United States in August 2022, just 16 percent of U.S. adults used national newspapers as a source of news on a daily basis or a few times each week1. Meanwhile, 22 percent read local papers daily or several times per week1. The frequency of using newspapers as a source of news among adults in the United States varies by age group2As an AI language model, I don’t have personal experiences or preferences. However, I can provide you with some general information. In the United States, the average daily time spent reading among adults was just 15 minutes in 20221. This marked a return to pre-pandemic levels. The time spent reading in the U.S. surpassed 20 minutes per day in 2020 but dropped again the following year1.
                    Reading habits can vary from person to person. Some people read newspapers and magazines regularly, while others may not read them at all. According to a survey conducted in 2017, 26% of respondents aged 18 to 29 years stated that they read print magazines less than once a month
                    `])
                    conditionsDependsOnUserSpeech(1)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Where do you live? ");
                    converstionSteps--;
                }

            }
        } else {
            if (converstionSteps == 1) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Are you ready");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating, Are you ready");
                    converstionSteps--;
                }
                else {
                    await playScript("Okay. Are you happy today?");
                    setSampleAns(['yes, I am today you may proceed now'])
                }
            }
            if (converstionSteps == 2) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Are you ready");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating, Are you ready");
                    converstionSteps--;
                }
                else {
                    await playScript("Okay. Do you like to do exercise?");
                    setSampleAns([" Yes, i love to do exercies", "2, Generally i don't like to do exercise"]);
                    conditionsDependsOnUserSpeech(0)
                }
            }
            if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError("Do you like to do exercise?");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating,Do you like to do exercise?");
                    converstionSteps--;
                }
                else {
                    await playScript("Let's talk about newspapers and magazines. How often do you read a newspaper? How about a magazine?");
                    setSampleAns([" i haven't bought a paper magazine or newspaper as long as i remember i may have flipped through one in a superstore but that's about it but i do follow um subscriptions on my mobile i read a magazine called femina on internet every week ",
                        `2 , According to a survey held in the United States in August 2022, just 16 percent of U.S. adults used national newspapers as a source of news on a daily basis or a few times each week1. Meanwhile, 22 percent read local papers daily or several times per week1. The frequency of using newspapers as a source of news among adults in the United States varies by age group2As an AI language model, I don’t have personal experiences or preferences. However, I can provide you with some general information. In the United States, the average daily time spent reading among adults was just 15 minutes in 20221. This marked a return to pre-pandemic levels. The time spent reading in the U.S. surpassed 20 minutes per day in 2020 but dropped again the following year1.
               Reading habits can vary from person to person. Some people read newspapers and magazines regularly, while others may not read them at all. According to a survey conducted in 2017, 26% of respondents aged 18 to 29 years stated that they read print magazines less than once a month
               `])
                    conditionsDependsOnUserSpeech(1)
                }
            }
        }

        if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" How often do you read a newspaper? How about a magazine?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating, How often do you read a newspaper? How about a magazine?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/do/gi) || converstionStepsText.match(/time/gi) ||
                converstionStepsText.match(/read/gi) || converstionStepsText.match(/Newspaper/gi) ||
                converstionStepsText.match(/Magazine/gi) || converstionStepsText.match(/money/gi) ||
                converstionStepsText.match(/actually/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/Learn/gi) || converstionStepsText.match(/have/gi) ||
                converstionStepsText.match(/internet/gi) || converstionStepsText.match(/Spend/gi) ||
                converstionStepsText.match(/frequency/gi) || converstionStepsText.match(/relieves/gi) ||
                converstionStepsText.match(/Take/gi) || converstionStepsText.match(/personal/gi) ||
                converstionStepsText.match(/do/gi) || converstionStepsText.match(/However/gi)
            ) {
                await playScript("What articles do you like reading?");
                setSampleAns([`1 , I love reading about health, fashion and recent trends. These are also related to my hobbies. The cupcake that I baked yesterday was vegan, healthy and delicious.
                The types of articles people like reading
                1. News articles
                2. How-to articles
                3. Listicles
                4. Opinion pieces
                5. Personal essays
                6. Entertainment news and reviews
                7. Health and wellness articles
                8. Travel articles
                9. Technology articles
                10. Business and finance articles
                Conclusion
                `])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.   How often do you read a newspaper? How about a magazine?");
                converstionSteps--;
            }



        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What articles do you like reading?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating, What articles do you like reading?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/do/gi) || converstionStepsText.match(/article/gi) ||
                converstionStepsText.match(/read/gi) || converstionStepsText.match(/News/gi) ||
                converstionStepsText.match(/Magazine/gi) || converstionStepsText.match(/like/gi) ||
                converstionStepsText.match(/actually/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/about/gi) || converstionStepsText.match(/health/gi) ||
                converstionStepsText.match(/hobbie/gi) || converstionStepsText.match(/love/gi) ||
                converstionStepsText.match(/Opinion/gi) || converstionStepsText.match(/personal/gi) ||
                converstionStepsText.match(/Entertainment/gi) || converstionStepsText.match(/Health/gi) ||
                converstionStepsText.match(/Travel/gi) || converstionStepsText.match(/Technology/gi) ||
                converstionStepsText.match(/Business/gi)
            ) {
                await playScript(" Okay. When was the last time you bought a magazine or newspaper?");
                setSampleAns([` as i mentioned before, I don't remember buying a newspaper or a magazine in a long time. However, I do have a digital subscription to femina which I read each week. It is not much but just a few rupees each month and they do have really good information .`])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What articles do you like reading?");
                converstionSteps--;
            }



        } else if (converstionSteps == 6) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("When was the last time you bought a magazine or newspaper?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating, When was the last time you bought a magazine or newspaper?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/last/gi) || converstionStepsText.match(/bought/gi) ||
                converstionStepsText.match(/read/gi) || converstionStepsText.match(/News/gi) ||
                converstionStepsText.match(/Magazine/gi) || converstionStepsText.match(/like/gi) ||
                converstionStepsText.match(/actually/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/no/gi) || converstionStepsText.match(/yes/gi) ||
                converstionStepsText.match(/do/gi) || converstionStepsText.match(/did/gi) ||
                converstionStepsText.match(/mention/gi) || converstionStepsText.match(/health/gi) ||
                converstionStepsText.match(/hobbie/gi) || converstionStepsText.match(/love/gi) ||
                converstionStepsText.match(/Opinion/gi) || converstionStepsText.match(/personal/gi) ||
                converstionStepsText.match(/Entertainment/gi) || converstionStepsText.match(/Health/gi) ||
                converstionStepsText.match(/Travel/gi) || converstionStepsText.match(/Technology/gi) ||
                converstionStepsText.match(/Business/gi)
            ) {
                await playScript("Have you ever written an article for a magazine or newspaper?");
                setSampleAns([` let me think about it i did write an article for my school newsletter when i was in middle school i wrote an article for a school newsletter club stating the importance of planting trees and taking care of the environment`])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. When was the last time you bought a magazine or newspaper?");
                converstionSteps--;
            }



        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Have you ever written an article for a magazine or newspaper?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating,Have you ever written an article for a magazine or newspaper?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/write/gi) || converstionStepsText.match(/written/gi) ||
                converstionStepsText.match(/read/gi) || converstionStepsText.match(/News/gi) ||
                converstionStepsText.match(/Magazine/gi) || converstionStepsText.match(/like/gi) ||
                converstionStepsText.match(/actually/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/no/gi) || converstionStepsText.match(/yes/gi) ||
                converstionStepsText.match(/do/gi) || converstionStepsText.match(/did/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/about/gi) ||
                converstionStepsText.match(/hobbie/gi) || converstionStepsText.match(/love/gi) ||
                converstionStepsText.match(/Opinion/gi) || converstionStepsText.match(/personal/gi) ||
                converstionStepsText.match(/Entertainment/gi) || converstionStepsText.match(/Health/gi) ||
                converstionStepsText.match(/Travel/gi) || converstionStepsText.match(/Technology/gi) ||
                converstionStepsText.match(/Business/gi) ||
                converstionStepsText.match(/school/gi) || converstionStepsText.match(/college/gi) ||
                converstionStepsText.match(/child/gi) || converstionStepsText.match(/ago/gi)
            ) {
                await playScript("If you subscribed to a Monthly Magazine, what would it be and why?");
                setSampleAns([`  aside from femina i would love to subscribe to verve and women's era
                all of these publications are not only originated from india but they also really have good updated information
                `,
                    `2, A magazine subscription is a recurring delivery of your chosen magazine on either a weekly, monthly, bi-monthly or quarterly basis. A magazine subscription is designed to ensure you get every issue of the magazine during the duration of your subscription, as well as added … If I were to subscribe to a monthly magazine, I would choose National Geographic. It is a magazine that has been around for over 130 years and has a reputation for publishing high-quality articles and photographs on geography, science, history, and culture. The magazine’s content is both informative and visually stunning, making it an excellent choice for anyone who wants to learn more about the world around them. Additionally, National Geographic has a strong commitment to environmentalism and conservation, which is an issue that I care deeply about. Overall, I think that National Geographic would be a great choice for anyone who wants to stay informed about the world while also enjoying beautiful photography and engaging articles 1.`
                ])
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Have you ever written an article for a magazine or newspaper?");
                converstionSteps--;
            }




        } else if (converstionSteps == 8) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("If you subscribed to a Monthly Magazine, what would it be and why?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating,If you subscribed to a Monthly Magazine, what would it be and why?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/subscribe/gi) || converstionStepsText.match(/Month/gi) ||
                converstionStepsText.match(/read/gi) || converstionStepsText.match(/News/gi) ||
                converstionStepsText.match(/Magazine/gi) || converstionStepsText.match(/like/gi) ||
                converstionStepsText.match(/actually/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/no/gi) || converstionStepsText.match(/yes/gi) ||
                converstionStepsText.match(/do/gi) || converstionStepsText.match(/did/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/about/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/will/gi) ||
                converstionStepsText.match(/may/gi) || converstionStepsText.match(/personal/gi) ||
                converstionStepsText.match(/might/gi) || converstionStepsText.match(/Health/gi) ||
                converstionStepsText.match(/aside/gi) || converstionStepsText.match(/Technology/gi) ||
                converstionStepsText.match(/Business/gi) ||
                converstionStepsText.match(/publication/gi) || converstionStepsText.match(/information/gi) ||
                converstionStepsText.match(/delivery/gi) || converstionStepsText.match(/ensure/gi) ||
                converstionStepsText.match(/National/gi) || converstionStepsText.match(/quality/gi) ||
                converstionStepsText.match(/photograph/gi) ||
                converstionStepsText.match(/geography/gi) || converstionStepsText.match(/culture/gi)
            ) {
                await playScript("Okay. That was about section 1. Thanks.");
                conditionsDependsOnUserSpeech(6)
                await sendSpeakingtextToBackend(recordedText);
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. If you subscribed to a Monthly Magazine, what would it be and why?");
                converstionSteps--;
            }

        }

    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";
}