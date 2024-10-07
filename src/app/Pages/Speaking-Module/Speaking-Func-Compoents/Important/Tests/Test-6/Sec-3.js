
let converstionSteps = 0;
export async function Test6Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {
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
                await playScript("I am asking you the question related of section 2 . so, Let's talk about lake or river .Why do many people like going to places with water such as lakes, rivers, or seas?");
                setSampleAns([`People like to go to such places because they can do various activities there and have a fun time. They can do swimming, boating, rafting, surfing, snorkeling, scuba diving and so on. Moreover,  India has a long coastline. People can find such places easily and so these places have become important tourist destinations.`])
                conditionsDependsOnUserSpeech(0)
            }
        }
        else if (converstionSteps == 3) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Why do many people like going to places with water such as lakes, rivers, or seas?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.Why do many people like going to places with water such as lakes, rivers, or seas?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/many/gi) || converstionStepsText.match(/swimm/gi) ||
                converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                converstionStepsText.match(/go/gi) || converstionStepsText.match(/places/gi) ||

                converstionStepsText.match(/water/gi) || converstionStepsText.match(/lake/gi) ||
                converstionStepsText.match(/river/gi) || converstionStepsText.match(/seas/gi) ||
                converstionStepsText.match(/various/gi) || converstionStepsText.match(/activitie/gi) ||

                converstionStepsText.match(/fun/gi) || converstionStepsText.match(/time/gi) ||
                converstionStepsText.match(/satisfi/gi) || converstionStepsText.match(/boating/gi) ||
                converstionStepsText.match(/easily/gi) || converstionStepsText.match(/important/gi) || converstionStepsText.match(/tourist/gi) || converstionStepsText.match(/destinations/gi)

            ) {
                await playScript(" What kinds of leisure activities do people like to do in water places?");
                setSampleAns([`They can do swimming, boating, rafting, surfing, snorkeling, scuba diving and so on.`])
                conditionsDependsOnUserSpeech(1)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.Why do many people like going to places with water such as lakes, rivers, or seas?");
                converstionSteps--;
            }

        } else if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" What kinds of leisure activities do people like to do in water places?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. What kinds of leisure activities do people like to do in water places?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/kind/gi) || converstionStepsText.match(/leisure/gi) ||
                converstionStepsText.match(/activitie/gi) || converstionStepsText.match(/people/gi) ||
                converstionStepsText.match(/do/gi) || converstionStepsText.match(/like/gi) ||
                converstionStepsText.match(/water/gi) || converstionStepsText.match(/place/gi) ||

                converstionStepsText.match(/swimming/gi) || converstionStepsText.match(/boat/gi) ||
                converstionStepsText.match(/raft/gi) || converstionStepsText.match(/surfing/gi) ||

                converstionStepsText.match(/snorkeling/gi) || converstionStepsText.match(/scuba/gi) ||
                converstionStepsText.match(/visit/gi) || converstionStepsText.match(/diving/gi) ||
                converstionStepsText.match(/so on/gi) || converstionStepsText.match(/etc/gi)
            ) {
                await playScript("Okey. Do children and old people relax in the same ways when they go to beach? ");
                setSampleAns([`No, they relax in different ways as their age allows them. The elderly just sit there and watch their  children and grandchildren play with the waves. Children run around the beach, play beach  volleyball, swim, splash in water and relax by sweating out their energy.  `])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  What kinds of leisure activities do people like to do in water places?");
                converstionSteps--;
            }
        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Do children and old people relax in the same ways when they go to beach?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Do children and old people relax in the same ways when they go to beach?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/children/gi) || converstionStepsText.match(/people/gi) ||
                converstionStepsText.match(/old/gi) || converstionStepsText.match(/relax/gi) ||
                converstionStepsText.match(/same/gi) || converstionStepsText.match(/way/gi) ||

                converstionStepsText.match(/beach/gi) || converstionStepsText.match(/different/gi) ||
                converstionStepsText.match(/allow/gi) || converstionStepsText.match(/elderly/gi) ||
                converstionStepsText.match(/sit/gi) || converstionStepsText.match(/make/gi) ||

                converstionStepsText.match(/volleyball/gi) || converstionStepsText.match(/splash/gi) ||
                converstionStepsText.match(/swim/gi) || converstionStepsText.match(/water/gi) ||
                converstionStepsText.match(/relax/gi) || converstionStepsText.match(/sweating/gi) ||
                converstionStepsText.match(/energy/gi)
            ) {
                await playScript("Why do people like water sports?");
                setSampleAns([`People like water sports because they are fun especially during the long summer months. For  people who don’t live near the coastal areas or any other water bodies, such places are a change  and so they are fun and exciting. `])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.Do children and old people relax in the same ways when they go to beach?");
                converstionSteps--;
            }
        }

        else if (converstionSteps == 6) {

            if (converstionStepsText.length < 10) {
                await smallTalkError("Why do people like water sports?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Why do people like water sports?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/people/gi) || converstionStepsText.match(/like/gi) ||
                converstionStepsText.match(/love/gi) || converstionStepsText.match(/sport/gi) ||
                converstionStepsText.match(/water/gi) || converstionStepsText.match(/fun/gi) ||
                converstionStepsText.match(/summer/gi) || converstionStepsText.match(/provider/gi) ||
                converstionStepsText.match(/especially/gi) || converstionStepsText.match(/summer/gi) ||
                converstionStepsText.match(/near/gi) || converstionStepsText.match(/coastal/gi) ||
                converstionStepsText.match(/areas/gi) || converstionStepsText.match(/bodies/gi) ||
                converstionStepsText.match(/excit/gi)
            ) {
                await playScript("So, Do you think beach or seaside is more suitable for children or old people to spend their  leisure time at? ");
                setSampleAns([`Yes, it is. However, they should refrain from going near water during high tide. Beaches where a lot  of people are there are relatively safer than those which are isolated.  `])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again .Why do people like water sports?");
                converstionSteps--;
            }
        } else if (converstionSteps == 7) {

            if (converstionStepsText.length < 10) {
                await smallTalkError("Do you think beach or seaside is more suitable for children or old people to spend their  leisure time at? ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.Do you think beach or seaside is more suitable for children or old people to spend their  leisure time at? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/do/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/beach/gi) || converstionStepsText.match(/seaside/gi) ||

                converstionStepsText.match(/suitable/gi) || converstionStepsText.match(/children/gi) ||
                converstionStepsText.match(/people/gi) || converstionStepsText.match(/spend/gi) ||
                converstionStepsText.match(/leisure/gi) || converstionStepsText.match(/time/gi) ||

                converstionStepsText.match(/However/gi) || converstionStepsText.match(/should/gi) ||
                converstionStepsText.match(/refrain/gi) || converstionStepsText.match(/inputs/gi) || converstionStepsText.match(/near/gi) || converstionStepsText.match(/water/gi) ||

                converstionStepsText.match(/during/gi) || converstionStepsText.match(/high/gi) ||
                converstionStepsText.match(/tide/gi) || converstionStepsText.match(/Beaches/gi) || converstionStepsText.match(/relative/gi) || converstionStepsText.match(/isolated/gi)
            ) {
                await playScript("Okey. Is there much water transportation in your country? ");
                setSampleAns([`I live in the north of India. There is no water transportation here, but as you go south, there is a  long coastline where water transportation is very common. `])
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again .Do you think beach or seaside is more suitable for children or old people to spend their  leisure time at? ");
                converstionSteps--;
            }
        } else if (converstionSteps == 8) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Is there much water transportation in your country? ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.Is there much water transportation in your country? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/there/gi) || converstionStepsText.match(/water/gi) ||
                converstionStepsText.match(/transport/gi) || converstionStepsText.match(/country/gi) ||
                converstionStepsText.match(/live/gi) || converstionStepsText.match(/north/gi) ||

                converstionStepsText.match(/India/gi) || converstionStepsText.match(/business/gi) ||
                converstionStepsText.match(/south/gi) || converstionStepsText.match(/long/gi) ||
                converstionStepsText.match(/coastline/gi) || converstionStepsText.match(/sea/gi) ||
                converstionStepsText.match(/become/gi) || converstionStepsText.match(/common/gi)

            ) {
                await playScript("Okey. That was about section 3. Thanks.");
                conditionsDependsOnUserSpeech(6)
                await sendSpeakingtextToBackend(recordedText);
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.Is there much water transportation in your country? ");
                converstionSteps--;
            }
        }

    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";


}