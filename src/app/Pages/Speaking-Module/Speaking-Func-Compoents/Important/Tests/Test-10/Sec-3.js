let converstionSteps = 0;
export async function Test10Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {
    if (converstionSteps == 0 && converstionStepsText == '') {
        await playScript(
            "My name is Adrian, and for this part, I will ask you questions related to the topic of Part 2. So, are you comfortable?"
        );
        setSampleAns(["Yes, I am comfortable you please proceed the test"])
    }
    converstionSteps++;
    if (converstionStepsText != '') {
        // if (converstionStepsText.length < 10) {
        //     await smallTalkError();
        // }
        // if (converstionStepsText.match('repeat') || converstionStepsText.match("don't understand")) {
        //     await playScript(
        //         "Ok , I am repeating.");
        //     converstionSteps--;
        // }
        // if (converstionSteps == 0) {
        //     await playScript(
        //         "For this part three. I will ask you some questions related to the topic of part two. And some questions connected to your response. Let's talk about social activities & football. So, are you ready ?"
        //     );
        // }
        if (converstionSteps == 1) {
            await playScript("Let me begin your test. Can you tell me your full name again?");
            setSampleAns([" My name is Parvez ahamed. You can call me ronok."]);
        }


        else if (converstionSteps == 2) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Are you ready?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Are you ready?");
                converstionSteps--;
            }
            else {
                await playScript("Let's talk about effective learning. Learning in what ways? Do you believe innovative ideas can enhance the learning experience?");
                setSampleAns([` I believe innovative ideas have the have the potential to greatly enhance learning experience in several ways firstly they can provide fresh and engaging methods of content delivery
            making learning more enjoyable and memorable for example incorporating gamification or multimedia interactive multimedia into into educational materials can stimulate interest and active participation among learners secondly innovative ideas can cater to diverse learning styles individual needs allowing for personalized and adaptive learning experiences with the advancements in technology adaptive
            Learning platforms can assess the candidates strengths and weaknesses and tailor the content accordingly to ensure effective and efficient learning.
            `])
                conditionsDependsOnUserSpeech(0)
            }
        }
        else if (converstionSteps == 3) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you believe innovative ideas can enhance the learning experience?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Do you believe innovative ideas can enhance the learning experience?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/effective/gi) || converstionStepsText.match(/learning/gi) ||
                converstionStepsText.match(/do/gi) || converstionStepsText.match(/make/gi) ||
                converstionStepsText.match(/belive/gi) || converstionStepsText.match(/Work/gi) ||
                converstionStepsText.match(/innovative/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/enhance/gi) || converstionStepsText.match(/chance/gi) ||
                converstionStepsText.match(/ability/gi) || converstionStepsText.match(/experience/gi) ||
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/idea/gi) ||
                converstionStepsText.match(/will/gi) || converstionStepsText.match(/would/gi) ||
                converstionStepsText.match(/potential/gi) || converstionStepsText.match(/several/gi) ||
                converstionStepsText.match(/enjoyable/gi) || converstionStepsText.match(/diverse/gi) ||
                converstionStepsText.match(/individual/gi) || converstionStepsText.match(/adapt/gi) ||
                converstionStepsText.match(/Mindset/gi) || converstionStepsText.match(/Self Reflection/gi) ||
                converstionStepsText.match(/Problem/gi) || converstionStepsText.match(/Process/gi) ||
                converstionStepsText.match(/create/gi) || converstionStepsText.match(/creativity /gi) ||
                converstionStepsText.match(/necessary /gi)


            ) {
                await playScript("What role does technology play in enhancing learning outcomes? And can you provide some specific examples of this?");
                setSampleAns([` The pandemic has generated universal demand for technology in education, there’s no doubt it is essential for the continuation of teaching. However, aside from the fact it’s a minimum requirement to be able to conduct lessons, there are numerous benefits that have an impact for both the teacher and students. Bruna Caltabiano discusses how she embraces technology in an online world and how to use it to build rapport.
                Building rapport
                3. Giving feedback on tasks and activities
                It is important to “board” the answers when correcting activities with students. It is much easier to do so when students can visualise the activity.
                4. Clarifying language
                When we share the page from the book with students with examples and rules, it is easier to elicit them from students rather than giving long teacher-centered explanations.
                5. Avoiding narration of stages and procedures
                As the teacher will just need to share one screen and everything they need will be there, there will be no need to keep telling students what they are doing, as students can already see the correct page.
                6. Teaching more contextualised and meaningful lessons
                `])
                conditionsDependsOnUserSpeech(1)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Do you believe innovative ideas can enhance the learning experience?");
                converstionSteps--;
            }

        } else if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What role does technology play in enhancing learning outcomes? And can you provide some specific examples of this?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. What role does technology play in enhancing learning outcomes? And can you provide some specific examples of this?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/role/gi) || converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/does/gi) || converstionStepsText.match(/sure/gi) ||
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/will/gi) || converstionStepsText.match(/would/gi) ||
                converstionStepsText.match(/technology/gi) || converstionStepsText.match(/enhancing/gi) ||
                converstionStepsText.match(/learning/gi) || converstionStepsText.match(/outcome/gi) ||
                converstionStepsText.match(/experience/gi) || converstionStepsText.match(/relieves/gi) ||
                converstionStepsText.match(/skill/gi) || converstionStepsText.match(/learn/gi) ||

                converstionStepsText.match(/pandemic/gi) || converstionStepsText.match(/technology/gi) ||
                converstionStepsText.match(/education/gi) || converstionStepsText.match(/requirement/gi) ||
                converstionStepsText.match(/example/gi) || converstionStepsText.match(/feedback/gi) ||
                converstionStepsText.match(/Clarifying/gi) || converstionStepsText.match(/language/gi) ||
                converstionStepsText.match(/correct/gi) || converstionStepsText.match(/universal/gi)

            ) {
                await playScript("OK . Are there any other ideas? Or techniques you have come across have that aim to improve learning?");
                setSampleAns([` yes there are several other ideas and techniques that I've come across that can aim that aims to improve learning one such technique would be the use of multimedia and visual aids like videos
                presentations infographics visual elements can enhance comprehension and
                retention especially for visual Learners it can make it easy to access complex
                information and get a deep understanding of the topic I always visualize the information I read or hear to help me learn better.
                `])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  What role does technology play in enhancing learning outcomes? And can you provide some specific examples of this?");
                converstionSteps--;
            }

        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Are there any other ideas? Or techniques you have come across have that aim to improve learning?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Are there any other ideas? Or techniques you have come across have that aim to improve learning?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/sure/gi) || converstionStepsText.match(/english/gi) ||
                converstionStepsText.match(/improve/gi) || converstionStepsText.match(/across/gi) ||
                converstionStepsText.match(/creativity/gi) || converstionStepsText.match(/learning/gi) ||
                converstionStepsText.match(/several/gi) || converstionStepsText.match(/technique/gi) ||
                converstionStepsText.match(/as/gi) || converstionStepsText.match(/presentation/gi) ||
                converstionStepsText.match(/skill/gi) || converstionStepsText.match(/visual/gi) ||
                converstionStepsText.match(/especially/gi) || converstionStepsText.match(/variety/gi) ||
                converstionStepsText.match(/information/gi) || converstionStepsText.match(/opportunitie/gi) ||
                converstionStepsText.match(/Focu/gi)
            ) {
                await playScript("Okay. How can individuals stay motivated? And committed to implementing new ideas for enhanced learning outcomes?");
                setSampleAns([` to stay motivated and committed towards implementing new new ideas for enhanced learning outcomes individuals can employ several strategies first and foremost
                setting a clear goal is crucial by defining specific targets and Milestones Learners can track their progress and stay focused to the goal I set a goal to score in the top 10 percent of the civil
                services examination so I knew exactly what I need to do additionally seeking
                support and accountability from peers and mentors can provide motivation and encouragement joining study groups and online communities centered around the shared interest can foster a sense of community and provide a platform for idea sharing and
                Support that is the end of part three that concludes the speaking section of the IELTS exam you will have your mark in two days after you finish the other sections online and your official certificate will be in the mail in about 10 days. Please remember your passport goodbye. thank you
                `])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Are there any other ideas? Or techniques you have come across have that aim to improve learning?");
                converstionSteps--;
            }


        } else if (converstionSteps == 6) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("How can individuals stay motivated? And committed to implementing new ideas for enhanced learning outcomes?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. How can individuals stay motivated? And committed to implementing new ideas for enhanced learning outcomes?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/motivat/gi) || converstionStepsText.match(/individual/gi) ||
                converstionStepsText.match(/positive/gi) || converstionStepsText.match(/implement/gi) ||
                converstionStepsText.match(/commit/gi) || converstionStepsText.match(/Work/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/belive/gi) || converstionStepsText.match(/learning/gi) ||
                converstionStepsText.match(/toward/gi) || converstionStepsText.match(/outcome/gi) ||
                converstionStepsText.match(/foremost/gi) || converstionStepsText.match(/relieves/gi) ||
                converstionStepsText.match(/skill/gi) || converstionStepsText.match(/learn/gi) ||
                converstionStepsText.match(/ability/gi) || converstionStepsText.match(/define/gi) ||
                converstionStepsText.match(/encouragement/gi) || converstionStepsText.match(/community/gi) ||
                converstionStepsText.match(/Prioritize/gi) || converstionStepsText.match(/interesting/gi) ||
                converstionStepsText.match(/specific/gi) || converstionStepsText.match(/Adopt/gi) ||
                converstionStepsText.match(/support/gi) || converstionStepsText.match(/seek/gi) ||
                converstionStepsText.match(/social/gi) || converstionStepsText.match(/Demonstrate/gi)
            ) {
                await playScript("Okay. That was about section 3. Thanks.");
                conditionsDependsOnUserSpeech(4)
                await sendSpeakingtextToBackend(recordedText);
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  How can individuals stay motivated? And committed to implementing new ideas for enhanced learning outcomes?");
                converstionSteps--;
            }


        }

    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";
}