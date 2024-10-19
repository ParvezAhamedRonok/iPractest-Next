
let converstionSteps = 0;
export async function Test5Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {
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
                await smallTalkError(" I will ask you the qustions related of section two. so , Are you ready?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.Are you ready?");
                converstionSteps--;
            }
            else {
                await playScript("I am asking you the question related of section 2 . so, Let's start.Are there any positive effects of working with a family member?");
                setSampleAns([`Certainly, there are many benefits of working with a family member. A family member would be  more supportive if an occasional time off is needed. Secondly, the family member would also be  satisfied as he would not have the fear of any outsider cheating him in business. However, one  must realise that some work ethics have to be maintained even if one is working for a family  member. own.
                 `])
                conditionsDependsOnUserSpeech(0)
            }
        }
        else if (converstionSteps == 3) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Are there any positive effects of working with a family member?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.Are there any positive effects of working with a family member?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/Yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                converstionStepsText.match(/effect/gi) || converstionStepsText.match(/work/gi) ||

                converstionStepsText.match(/family/gi) || converstionStepsText.match(/member/gi) ||
                converstionStepsText.match(/Certainly/gi) || converstionStepsText.match(/benefit/gi) ||
                converstionStepsText.match(/supportive/gi) || converstionStepsText.match(/occasional/gi) ||

                converstionStepsText.match(/need/gi) || converstionStepsText.match(/would/gi) ||
                converstionStepsText.match(/satisfi/gi) || converstionStepsText.match(/realise/gi) ||
                converstionStepsText.match(/maintain/gi) || converstionStepsText.match(/own/gi)

            ) {
                await playScript("What kinds of family businesses are there in India?");
                setSampleAns([`India is a diverse country and a fast growing one too. All sorts of family businesses are there in  India. My hometown Phagwara is a hub of small scale industry. Many people are into making auto  spare parts. I visited Rajkot in Gujarat and I saw many households run the business of Patola sarees.  You name a business, and you will find it in India.`])
                conditionsDependsOnUserSpeech(1)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.Are there any positive effects of working with a family member?");
                converstionSteps--;
            }

        } else if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What kinds of family businesses are there in India?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.What kinds of family businesses are there in India?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/kind/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/most/gi) || converstionStepsText.match(/family/gi) ||
                converstionStepsText.match(/business/gi) || converstionStepsText.match(/India/gi) ||
                converstionStepsText.match(/diverse/gi) || converstionStepsText.match(/country/gi) ||
                converstionStepsText.match(/fast/gi) || converstionStepsText.match(/grow/gi) ||
                converstionStepsText.match(/hometown/gi) || converstionStepsText.match(/industry/gi) ||

                converstionStepsText.match(/spare/gi) || converstionStepsText.match(/life/gi) ||
                converstionStepsText.match(/visit/gi) || converstionStepsText.match(/keep/gi) ||
                converstionStepsText.match(/saw/gi) || converstionStepsText.match(/many/gi)
            ) {
                await playScript("Okey. Why do people like to set up a family business? ");
                setSampleAns([`Family business ensures employment within a family. If a person has some business know-how, he  can start a small business and make it grow with family support. One does not have to go out  hunting for jobs. By having a family business, one can be a job provider rather than being a job seeker.  `])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What kinds of family businesses are there in India?");
                converstionSteps--;
            }
        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Why do people like to set up a family business?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. Why do people like to set up a family business?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                converstionStepsText.match(/people/gi) || converstionStepsText.match(/family/gi) ||
                converstionStepsText.match(/business/gi) || converstionStepsText.match(/ensures/gi) ||

                converstionStepsText.match(/comfortable/gi) || converstionStepsText.match(/faster/gi) ||
                converstionStepsText.match(/employment/gi) || converstionStepsText.match(/improve/gi) ||
                converstionStepsText.match(/person/gi) || converstionStepsText.match(/make/gi) ||

                converstionStepsText.match(/grow/gi) || converstionStepsText.match(/support/gi) ||
                converstionStepsText.match(/hunt/gi) || converstionStepsText.match(/job/gi) ||
                converstionStepsText.match(/provider/gi) || converstionStepsText.match(/being/gi) ||
                converstionStepsText.match(/seeker/gi)
            ) {
                await playScript("What are the advantages and disadvantages of a family business?");
                setSampleAns([`The advantages are that one does not have to go out hunting for jobs. By having a family business,  one can be a job provider rather than being a job seeker. An entrepreneur is his own boss. If the  whole family works hard and the business flourishes, it can be a rags to riches story.  The disadvantages are that if the business faces a slump, the whole family can turn from riches to  rags overnight. The family members may also have conflicts if they feel that some of them are just  reaping benefits without actually working hard`])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.Why do people like to set up a family business??");
                converstionSteps--;
            }
        }

        else if (converstionSteps == 6) {

            if (converstionStepsText.length < 10) {
                await smallTalkError("What are the advantages and disadvantages of a family business?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. What are the advantages and disadvantages of a family business?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/advantage/gi) || converstionStepsText.match(/disadvantage/gi) ||
                converstionStepsText.match(/family/gi) || converstionStepsText.match(/business/gi) ||
                converstionStepsText.match(/does/gi) || converstionStepsText.match(/hunt/gi) ||

                converstionStepsText.match(/job/gi) || converstionStepsText.match(/provider/gi) ||
                converstionStepsText.match(/rather/gi) || converstionStepsText.match(/entrepreneur/gi) ||
                converstionStepsText.match(/comfortable/gi) || converstionStepsText.match(/boss/gi) ||

                converstionStepsText.match(/rich/gi) || converstionStepsText.match(/overnight/gi) ||
                converstionStepsText.match(/member/gi) || converstionStepsText.match(/conflict/gi) ||
                converstionStepsText.match(/feel/gi) || converstionStepsText.match(/reap/gi) ||
                converstionStepsText.match(/suffer/gi) || converstionStepsText.match(/actual/gi) ||
                converstionStepsText.match(/hard/gi)
            ) {
                await playScript("So, What are the causes for the success of a family business?");
                setSampleAns([`The success of a family business are dependent on mutual trust among the family members,  disciplined atmosphere at work and recognition of each others inputs. `])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again .What are the advantages and disadvantages of a family business?");
                converstionSteps--;
            }
        }

        else if (converstionSteps == 7) {

            if (converstionStepsText.length < 10) {
                await smallTalkError("What are the causes for the success of a family business?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. What are the causes for the success of a family business?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/causes/gi) || converstionStepsText.match(/success/gi) ||
                converstionStepsText.match(/family/gi) || converstionStepsText.match(/business/gi) ||
                converstionStepsText.match(/does/gi) || converstionStepsText.match(/dependent/gi) ||

                converstionStepsText.match(/mutual/gi) || converstionStepsText.match(/provider/gi) ||
                converstionStepsText.match(/rather/gi) || converstionStepsText.match(/trust/gi) ||
                converstionStepsText.match(/among/gi) || converstionStepsText.match(/member/gi) ||

                converstionStepsText.match(/discipline/gi) || converstionStepsText.match(/atmosphere/gi) ||
                converstionStepsText.match(/recognition/gi) || converstionStepsText.match(/inputs/gi) || converstionStepsText.match(/actual/gi) ||
                converstionStepsText.match(/hard/gi)
            ) {
                await playScript("So,How is the relation among members of a family business?");
                setSampleAns([`For any family business to thrive, good relation among family members is of paramount importance. If this is not there then the family business can see its doom very soon.`])
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I am say it again .What are the causes for the success of a family business?");
                converstionSteps--;
            }
        } else if (converstionSteps == 8) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" How is the relation among members of a family business? ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.How is the relation among members of a family business?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/Will/gi) || converstionStepsText.match(/relation/gi) ||
                converstionStepsText.match(/live/gi) || converstionStepsText.match(/among/gi) ||
                converstionStepsText.match(/member/gi) || converstionStepsText.match(/family/gi) ||

                converstionStepsText.match(/many/gi) || converstionStepsText.match(/business/gi) ||
                converstionStepsText.match(/thrive/gi) || converstionStepsText.match(/good/gi) ||
                converstionStepsText.match(/importance/gi) || converstionStepsText.match(/see/gi) ||
                converstionStepsText.match(/become/gi) || converstionStepsText.match(/very/gi)

            ) {
                await playScript("Okey. That was about section 3. Thanks.");
                conditionsDependsOnUserSpeech(6)
                await sendSpeakingtextToBackend(recordedText);
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.How is the relation among members of a family business?？");
                converstionSteps--;
            }
        }

    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";


}