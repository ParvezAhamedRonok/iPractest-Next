let converstionSteps = 0;
export async function Test11Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {
    if (converstionSteps == 0 && converstionStepsText == '') {
        await playScript(
            "My name is Adrian, and I will be your examiner for this part of the test in Part 3. Are you comfortable?"
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

        //         "My name is Adrian, &  I will be your examiner for this part of the test    of the part three. Are you confortable?"
        //     );
        // }
        if (converstionSteps == 1) {
            await playScript(
                "Sorry.... can you repeat that please");
            setSampleAns([" You can simply repeated the asnwer that you said little moment ago."])
        } else if (converstionSteps == 2) {
            if (converstionStepsText.length < 6) {
                await smallTalkError("Are you ready");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.Are you ready?");
                converstionSteps--;
            }
            else {
                await playScript("Okay. Let's talk about vacations and traveling. In what ways can going on a vacation contribute to a person's overall well-being and happiness?");
                setSampleAns([` um going for a vacation contributes to persons well-being and happiness in number of ways it helps a person to go out from his rooting routine activities allows individuals to uh to relax
            unwind and rejuvenate exploring new places doing different activities can broader the perspective perception of a person and bring joy and happiness I'm sure I will feel great after going for my dream vacation in incident
            `])
                conditionsDependsOnUserSpeech(0)
            }
        }
        else if (converstionSteps == 3) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" In what ways can going on a vacation contribute to a person's overall well-being and happiness?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. In what ways can going on a vacation contribute to a person's overall well-being and happiness?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/dream/gi) || converstionStepsText.match(/vacation/gi) ||
                converstionStepsText.match(/travel/gi) || converstionStepsText.match(/contribute/gi) ||
                converstionStepsText.match(/person/gi) || converstionStepsText.match(/overall/gi) ||
                converstionStepsText.match(/happiness/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/go/gi) || converstionStepsText.match(/chance/gi) ||
                converstionStepsText.match(/help/gi) || converstionStepsText.match(/activitie/gi) ||
                converstionStepsText.match(/relax/gi) || converstionStepsText.match(/relieves/gi) ||
                converstionStepsText.match(/joy/gi) || converstionStepsText.match(/great/gi)

            ) {
                await playScript("Okay. How do you think the choice of destination impacts the experience of a perfect vacation?");
                setSampleAns([` the choice of us every destination has its unique Landscapes and activities my dream vacation aligns with the activities which I will be doing in New Zealand so it perfectly aligns with my dream vacation choosing a destination with aligns with one's interests and preferences will allow a person to enjoy the dream vacation more and give them happiness and satisfaction`])
                conditionsDependsOnUserSpeech(1)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  In what ways can going on a vacation contribute to a person's overall well-being and happiness?");
                converstionSteps--;
            }

        }
        else if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" How do you think the choice of destination impacts the experience of a perfect vacation?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. How do you think the choice of destination impacts the experience of a perfect vacation?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/dream/gi) || converstionStepsText.match(/vacation/gi) ||
                converstionStepsText.match(/travel/gi) || converstionStepsText.match(/contribute/gi) ||
                converstionStepsText.match(/person/gi) || converstionStepsText.match(/overall/gi) ||
                converstionStepsText.match(/happiness/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/destination/gi) ||
                converstionStepsText.match(/impact/gi) || converstionStepsText.match(/experience/gi) ||
                converstionStepsText.match(/perfect/gi) || converstionStepsText.match(/great/gi) ||
                converstionStepsText.match(/every/gi) || converstionStepsText.match(/unique/gi) ||
                converstionStepsText.match(/Landscape/gi) || converstionStepsText.match(/experience/gi) ||
                converstionStepsText.match(/satisfaction/gi) || converstionStepsText.match(/joy/gi)

            ) {
                await playScript("Okay. Are there any factors, such as weather or seasonal events, that you would consider when deciding when to go on your dream vacation?");
                setSampleAns([`Yes , the weather and seasonal events plays an important role in deciding the um the destination of your vacation I would choose to go in New Zealand during spring vacation which is from September to October because during that season the landscape are very vibrant because of the blooming flowers and the weather is very mild so choosing a destination with a favorable weather condition can enhance the overall experience of the dream vacation`])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  How do you think the choice of destination impacts the experience of a perfect vacation?");
                converstionSteps--;
            }

        }
        else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Are there any factors, such as weather or seasonal events, that you would consider when deciding when to go on your dream vacation?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Are there any factors, such as weather or seasonal events, that you would consider when deciding when to go on your dream vacation?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/destination/gi) ||
                converstionStepsText.match(/dream/gi) || converstionStepsText.match(/vacation/gi) ||
                converstionStepsText.match(/travel/gi) || converstionStepsText.match(/contribute/gi) ||
                converstionStepsText.match(/factor/gi) || converstionStepsText.match(/weather/gi) ||
                converstionStepsText.match(/seasonal/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/will/gi) ||
                converstionStepsText.match(/perfect/gi) || converstionStepsText.match(/great/gi) ||
                converstionStepsText.match(/role/gi) || converstionStepsText.match(/vibrant/gi) ||
                converstionStepsText.match(/flower/gi) || converstionStepsText.match(/favorable/gi) ||
                converstionStepsText.match(/satisfaction/gi) || converstionStepsText.match(/joy/gi) ||
                converstionStepsText.match(/enhance /gi) || converstionStepsText.match(/overall/gi)

            ) {
                await playScript("Okay. Where are some potential benefits of traveling with companions on a dream vacation?");
                setSampleAns([` traveling with companions in dream Vacation would enhance the experience of the vacation because companions can share a sense of responsibility they can there can be a deeper connection you can cherish a memories together and it also creates a sense of security when you are traveling with the companions so this is the reason why I would like to go to New Zealand with my family.`])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Are there any factors, such as weather or seasonal events, that you would consider when deciding when to go on your dream vacation?");
                converstionSteps--;
            }

        }
        else if (converstionSteps == 6) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("  What are some potential benefits of traveling with companions on a dream vacation?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.  What are some potential benefits of traveling with companions on a dream vacation??");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/destination/gi) ||
                converstionStepsText.match(/dream/gi) || converstionStepsText.match(/vacation/gi) ||
                converstionStepsText.match(/travel/gi) || converstionStepsText.match(/contribute/gi) ||
                converstionStepsText.match(/potential/gi) || converstionStepsText.match(/benefit/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/will/gi) ||
                converstionStepsText.match(/companion/gi) || converstionStepsText.match(/role/gi) ||
                converstionStepsText.match(/stress/gi) || converstionStepsText.match(/reliease/gi) ||
                converstionStepsText.match(/Boost/gi) || converstionStepsText.match(/creativity/gi) ||
                converstionStepsText.match(/satisfaction/gi) || converstionStepsText.match(/joy/gi) ||
                converstionStepsText.match(/Discover/gi) || converstionStepsText.match(/knowledge/gi)
            ) {
                await playScript("Okey. Do you think it's important to strike a balance? Between planned activities and relaxation time during a vacation. Why or why not?");
                setSampleAns([` yes it is very important to have scheduled activities and downtime during your vacation schedule activities will help you to explore the place more and enjoy the vacation to its fullest and uh and and downtime will help you to unwind relax and absorb the surroundings balance of both will help a person to enjoy the whole vacation to its full potential `]);
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  What are some potential benefits of traveling with companions on a dream vacation?");
                converstionSteps--;
            }


        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Do you think it's important to strike a balance? Between planned activities and relaxation time during a vacation. Why or why not?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Do you think it's important to strike a balance? Between planned activities and relaxation time during a vacation. Why or why not?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/destination/gi) ||
                converstionStepsText.match(/dream/gi) || converstionStepsText.match(/vacation/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/travel/gi) || converstionStepsText.match(/contribute/gi) ||
                converstionStepsText.match(/Between/gi) || converstionStepsText.match(/benefit/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/will/gi) ||
                converstionStepsText.match(/plan/gi) || converstionStepsText.match(/activit/gi) ||
                converstionStepsText.match(/stress/gi) || converstionStepsText.match(/reliease/gi) ||
                converstionStepsText.match(/Boost/gi) || converstionStepsText.match(/creativity/gi) ||
                converstionStepsText.match(/satisfaction/gi) || converstionStepsText.match(/joy/gi) ||
                converstionStepsText.match(/Discover/gi) || converstionStepsText.match(/knowledge/gi) ||
                converstionStepsText.match(/schedule/gi) || converstionStepsText.match(/help/gi) ||
                converstionStepsText.match(/absorb/gi) || converstionStepsText.match(/balance/gi) ||
                converstionStepsText.match(/potential/gi)
            ) {
                await playScript("Okey. How do you think about an international vacation? Can it broaden a person's perspective and understanding of different cultures and lifestyles?");
                setSampleAns([` International vacation can broaden a person's perception in several ways exploring different location doing different activities meeting with the local people or exploring the the historical side can broaden the perspective of a person they they exchange their culture they learn new things and going for vacation in New Zealand helped me to understand the Maori tradition `])
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Do you think it's important to strike a balance? Between planned activities and relaxation time during a vacation. Why or why not?");
                converstionSteps--;
            }

        } else if (converstionSteps == 8) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("  How do you think about an international vacation? Can it broaden a person's perspective and understanding of different cultures and lifestyles?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.  How do you think about an international vacation? Can it broaden a person's perspective and understanding of different cultures and lifestyles?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/destination/gi) ||
                converstionStepsText.match(/dream/gi) || converstionStepsText.match(/vacation/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/travel/gi) || converstionStepsText.match(/contribute/gi) ||
                converstionStepsText.match(/international/gi) || converstionStepsText.match(/benefit/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/will/gi) ||
                converstionStepsText.match(/perspective/gi) || converstionStepsText.match(/different/gi) ||
                converstionStepsText.match(/stress/gi) || converstionStepsText.match(/reliease/gi) ||
                converstionStepsText.match(/understand/gi) || converstionStepsText.match(/Lifestyles/gi) ||
                converstionStepsText.match(/satisfaction/gi) || converstionStepsText.match(/joy/gi) ||
                converstionStepsText.match(/Discover/gi) || converstionStepsText.match(/knowledge/gi) ||
                converstionStepsText.match(/broaden/gi) || converstionStepsText.match(/help/gi) ||
                converstionStepsText.match(/absorb/gi) || converstionStepsText.match(/balance/gi) ||
                converstionStepsText.match(/perception/gi) ||
                converstionStepsText.match(/location/gi) || converstionStepsText.match(/place/gi) ||
                converstionStepsText.match(/local/gi) || converstionStepsText.match(/exchange/gi) ||
                converstionStepsText.match(/learn/gi)
            ) {
                await playScript("What role do budget and financial planning play in making a dream vacation a reality?");
                setSampleAns([` it helps you to take a decision and save for your dream vacation for example if I want to have my dream vacation in New Zealand so I know that I have to save 10 000 US dollar for my dream vacation to New Zealand and that gives me a clear idea on what I need to do to achieve this goal. `])
                conditionsDependsOnUserSpeech(6)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  How do you think about an international vacation? Can it broaden a person's perspective and understanding of different cultures and lifestyles?");
                converstionSteps--;
            }



        } else if (converstionSteps == 9) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" What role do budget and financial planning play in making a dream vacation a reality?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.  What role do budget and financial planning play in making a dream vacation a reality?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/budget/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/big/gi) ||
                converstionStepsText.match(/dream/gi) || converstionStepsText.match(/vacation/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/travel/gi) || converstionStepsText.match(/small/gi) ||
                converstionStepsText.match(/financial/gi) || converstionStepsText.match(/Play/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/will/gi) ||
                converstionStepsText.match(/reality/gi) || converstionStepsText.match(/different/gi) ||
                converstionStepsText.match(/stress/gi) || converstionStepsText.match(/reliease/gi) ||
                converstionStepsText.match(/understand/gi) || converstionStepsText.match(/plan/gi) ||
                converstionStepsText.match(/help/gi) || converstionStepsText.match(/decision/gi) ||
                converstionStepsText.match(/Discover/gi) || converstionStepsText.match(/money/gi) ||
                converstionStepsText.match(/need/gi) || converstionStepsText.match(/achieve/gi) ||
                converstionStepsText.match(/goal/gi) || converstionStepsText.match(/balance/gi)
            ) {
                await playScript("What would be your dream vacation ?And why?");
                setSampleAns([` A dream vacation is a personal preference that depends on one's interests, budget, and goals. One way to describe a dream vacation is to use the following structure1:
                Where the vacation would be,
                Who would be with you,
                What you would like to do there,
                Why you think it would be a perfect vacation for youFor example, someone who loves music and adventure might say that their dream vacation would be a summer cross country trip in a motor home, starting from the east coast of the United States and working their way to the west coast by attending music festivals and concerts along the way2.
                `])
                conditionsDependsOnUserSpeech(7)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  What role do budget and financial planning play in making a dream vacation a reality?");
                converstionSteps--;
            }


        } else if (converstionSteps == 10) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" What would your dream vacation be?And why?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.  What would your dream vacation be?And why?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/big/gi) ||
                converstionStepsText.match(/dream/gi) || converstionStepsText.match(/vacation/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/travel/gi) || converstionStepsText.match(/small/gi) ||
                converstionStepsText.match(/financial/gi) || converstionStepsText.match(/Play/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/will/gi) ||
                converstionStepsText.match(/reality/gi) || converstionStepsText.match(/make/gi) ||
                converstionStepsText.match(/stress/gi) || converstionStepsText.match(/reliease/gi) ||
                converstionStepsText.match(/understand/gi) || converstionStepsText.match(/plan/gi) ||
                converstionStepsText.match(/help/gi) || converstionStepsText.match(/decision/gi) ||
                converstionStepsText.match(/Discover/gi) || converstionStepsText.match(/money/gi) ||
                converstionStepsText.match(/need/gi) || converstionStepsText.match(/achieve/gi) ||
                converstionStepsText.match(/goal/gi) || converstionStepsText.match(/balance/gi) ||
                converstionStepsText.match(/describe/gi) || converstionStepsText.match(/perfect/gi) ||
                converstionStepsText.match(/example/gi) || converstionStepsText.match(/summer/gi) ||
                converstionStepsText.match(/adventure/gi) || converstionStepsText.match(/coast/gi) ||
                converstionStepsText.match(/concert/gi)

            ) {
                await playScript("Okey. How do you think? The choice of destination impacts the experience of a perfect vacation.")
                setSampleAns([` A recent TRAVELSAT report listed 5 Factors Influencing Tourist Destination and Tourism when it comes to tourists picking their travel destination. These are: Recommendations from friends & relatives Popularity as renowned destination Comprehensive information online Availability of special offers Closeness of the destination`])
                conditionsDependsOnUserSpeech(8)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  What would your dream vacation be?And why?");
                converstionSteps--;
            }





        } else if (converstionSteps == 11) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("  How do you think? The choice of destination impacts the experience of a perfect vacation.");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.  How do you think? The choice of destination impacts the experience of a perfect vacation.");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/big/gi) ||
                converstionStepsText.match(/dream/gi) || converstionStepsText.match(/vacation/gi) ||
                converstionStepsText.match(/think/gi) || converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/travel/gi) || converstionStepsText.match(/small/gi) ||
                converstionStepsText.match(/financial/gi) || converstionStepsText.match(/Play/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/will/gi) ||
                converstionStepsText.match(/reality/gi) || converstionStepsText.match(/make/gi) ||
                converstionStepsText.match(/stress/gi) || converstionStepsText.match(/reliease/gi) ||
                converstionStepsText.match(/destination/gi) || converstionStepsText.match(/impact/gi) ||
                converstionStepsText.match(/help/gi) || converstionStepsText.match(/decision/gi) ||
                converstionStepsText.match(/Discover/gi) || converstionStepsText.match(/money/gi) ||
                converstionStepsText.match(/experience/gi) || converstionStepsText.match(/achieve/gi) ||
                converstionStepsText.match(/recent/gi) || converstionStepsText.match(/TRAVEL/gi) ||
                converstionStepsText.match(/relative/gi) || converstionStepsText.match(/Tourism/gi) ||
                converstionStepsText.match(/Recommend/gi) || converstionStepsText.match(/summer/gi) ||
                converstionStepsText.match(/adventure/gi) || converstionStepsText.match(/friend/gi) ||
                converstionStepsText.match(/concert/gi) ||
                converstionStepsText.match(/information/gi) || converstionStepsText.match(/Availability/gi) ||
                converstionStepsText.match(/special/gi)


            ) {
                await playScript("Okey. that was about section 3. Thanks.");
                conditionsDependsOnUserSpeech(9)
                await sendSpeakingtextToBackend(recordedText);
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  How do you think? The choice of destination impacts the experience of a perfect vacation.");
                converstionSteps--;
            }


        }

    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";


}