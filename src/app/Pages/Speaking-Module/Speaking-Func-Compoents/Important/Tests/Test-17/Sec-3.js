let converstionSteps = 0;
export async function Test17Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {
    if (converstionSteps == 0 && converstionStepsText == '') {
        await playScript(
            "My name is Adrian. I will be your examiner for this part of the test for part three. Are you comfortable?"
        );
        setSampleAns([" Yes i am comfortable you can procced the test please"])
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

        //         " My name is Adrian, I will be your examiner for this part of the test for this part three. Are you confortable?"
        //     );
        // }
        if (converstionSteps == 1) {
            await playScript("sorry can you repeat that please");
            setSampleAns([" You can just simply repeated theanswer that you can said just time ago"])
        }
        else if (converstionSteps == 2) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Are you ready?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating,Are you ready?");
                converstionSteps--;
            }
            else {
                await playScript("Let's talk about helping in the community. What are ways that people can help their communities be better places?");
                setSampleAns([" there are so many different ways which people can adapt to assist their communities like i just mentioned like a soup kitchen also they can organize some cleanup events like picking up garbage on the streets also volunteering at a local hospital i used to volunteer at a local hospital a few hours to help elderly with the meal time and it was very rewarding "]);
                conditionsDependsOnUserSpeech(0)
            }
        }
        else if (converstionSteps == 3) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What are ways that people can help their communities be better places?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating,What are ways that people can help their communities be better places?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/way/gi) || converstionStepsText.match(/people/gi) ||
                converstionStepsText.match(/positive/gi) || converstionStepsText.match(/teamwork/gi) ||
                converstionStepsText.match(/communit/gi) || converstionStepsText.match(/place/gi) ||
                converstionStepsText.match(/better/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/different/gi) || converstionStepsText.match(/adapt/gi) ||
                converstionStepsText.match(/can/gi) || converstionStepsText.match(/will/gi) ||
                converstionStepsText.match(/would/gi) || converstionStepsText.match(/organize/gi) ||
                converstionStepsText.match(/Take/gi) || converstionStepsText.match(/Start/gi) ||
                converstionStepsText.match(/Be/gi) || converstionStepsText.match(/Support/gi) ||
                converstionStepsText.match(/compost/gi) || converstionStepsText.match(/Donate/gi) ||
                converstionStepsText.match(/charity/gi)

            ) {
                await playScript("Ok . How much funding would you need for this event to be a success?");
                setSampleAns([" To get funding for your charity event, you can explore several options: *Recurring Donations: Encourage your supporters to make regular donations to your organization. *This can provide a steady stream of income to support your cause1.*Grants: Research and apply for grants that align with your mission and programs. Many *organizations offer grants to support non profit initiatives1.*Fundraising Events: Organize events such as galas, auctions, or charity runs to raise funds. *These events can attract donors and sponsors who are passionate about your cause12.*Corporate Sponsorships: Reach out to local businesses and corporations for potential *sponsorships. They may be interested in supporting your event in exchange for exposure and *positive brand association34.*Online Fundraising Platforms: Utilize online platforms that specialize in nonprofit *fundraising. These platforms provide tools to create donation forms, fundraising pages, and *manage donor relationships1.*Remember, it’s important to plan ahead and evaluate which funding sources align with your organization’s mission, vision, and values1. Good luck with your charity event! 🌟"]);
                conditionsDependsOnUserSpeech(1)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  What are ways that people can help their communities be better places?");
                converstionSteps--;
            }



        }
        else if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" How much funding would you need for this event to be a success?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating, How much funding would you need for this event to be a success?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/fund/gi) || converstionStepsText.match(/would/gi) ||
                converstionStepsText.match(/will/gi) || converstionStepsText.match(/need/gi) ||
                converstionStepsText.match(/event/gi) || converstionStepsText.match(/success/gi) ||
                converstionStepsText.match(/may/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/different/gi) || converstionStepsText.match(/actual/gi) ||
                converstionStepsText.match(/might/gi) || converstionStepsText.match(/estimate/gi) ||
                converstionStepsText.match(/Donation/gi) || converstionStepsText.match(/Research/gi) ||
                converstionStepsText.match(/Take/gi) || converstionStepsText.match(/Start/gi) ||
                converstionStepsText.match(/positive /gi) || converstionStepsText.match(/Support/gi) ||
                converstionStepsText.match(/program/gi) || converstionStepsText.match(/Donate/gi) ||
                converstionStepsText.match(/charity/gi)
            ) {
                await playScript("OK . Some individuals feel that people are less involved with their communities than 20 years ago. Do you agree with this?");
                setSampleAns([" :i don't think that i agree with this statement but i think this may be the case recently due to social distancing but i think in bihar the people are as selfless as before and dedicate considerable time to their local neighborhoods.", "2, Among those who have lived in their community for more than a decade, 69% say they feel very or somewhat attached to their community. The shares are significantly lower among those who have lived in their community six to 10 years (54%) or less than six years (44%). Some people say that people are less involved with their communities than 20 years ago. It is difficult to measure community involvement, but there are several factors that may contribute to this perception. For example, the rise of technology and social media has changed the way people interact and communicate with each other. People may spend more time online and less time participating in local community activities. Additionally, changes in work and family dynamics may also play a role. With longer working hours and increased demands on personal time, people may have less time and energy to devote to community involvement. However, it is important to note that community involvement can take many forms, and people may still be engaged in their communities in different ways. Some people may volunteer their time or donate to local charities, while others may participate in online communities or advocate for causes they care about. Overall, community involvement is a complex issue, and it is difficult to make generalizations about trends over time."]);
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  How much funding would you need for this event to be a success?");
                converstionSteps--;
            }





        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Some individuals feel that people are less involved with their communities than 20 years ago. Do you agree with this?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating, Some individuals feel that people are less involved with their communities than 20 years ago. Do you agree with this?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/actually/gi) ||
                converstionStepsText.match(/generally/gi) || converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/individual/gi) || converstionStepsText.match(/feel/gi) ||
                converstionStepsText.match(/less/gi) || converstionStepsText.match(/involve/gi) ||
                converstionStepsText.match(/agree/gi) || converstionStepsText.match(/communit/gi) ||
                converstionStepsText.match(/statement/gi) || converstionStepsText.match(/Research/gi) ||
                converstionStepsText.match(/recent/gi) || converstionStepsText.match(/Among/gi) ||
                converstionStepsText.match(/difficult /gi) || converstionStepsText.match(/Support/gi) ||
                converstionStepsText.match(/program/gi) || converstionStepsText.match(/Donate/gi) ||
                converstionStepsText.match(/charity/gi)
            ) {
                await playScript("So , how can governments motivate citizens? To be more helpful in their communities?");
                setSampleAns([" authorities can run various campaigns like ads on social media and on tv to encourage people to contribute more also they can provide incentives like scholarships or grants to the students who contribute the most to help their communities thrive ", "2, Local governments can remedy this by promoting these opportunities on social media channels, creating a calendar on municipal websites, or even putting together a monthly newsletter of upcoming opportunities for citizen participation. Be sure to include city and school board meetings open to the public! Have the right meeting management software Governments can motivate citizens to be more helpful in their communities by using nudges. Nudges are small changes to the context in which decisions are made, without meaningfully changing financial incentives. They can be a cost-effective way for governments to get citizens to do the right thing 1. For instance, local governments can post contact numbers and program information on the community’s website, follow local government offices’ social media channels and share posts about upcoming events on the community’s social media channels or mobile app, and include city event, program, and contact information in their newsletter"]);
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Some individuals feel that people are less involved with their communities than 20 years ago. Do you agree with this?");
                converstionSteps--;
            }





        } else if (converstionSteps == 6) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("How can governments motivate citizens? To be more helpful in their communities?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating,How can governments motivate citizens? To be more helpful in their communities?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/actually/gi) ||
                converstionStepsText.match(/generally/gi) || converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/individual/gi) || converstionStepsText.match(/government/gi) ||
                converstionStepsText.match(/local/gi) || converstionStepsText.match(/motivate/gi) ||
                converstionStepsText.match(/citizen/gi) || converstionStepsText.match(/To be/gi) ||
                converstionStepsText.match(/agree/gi) || converstionStepsText.match(/communit/gi) ||
                converstionStepsText.match(/authorit/gi) || converstionStepsText.match(/various/gi) ||
                converstionStepsText.match(/encourage /gi) || converstionStepsText.match(/Support/gi) ||
                converstionStepsText.match(/program/gi) || converstionStepsText.match(/Donate/gi) ||
                converstionStepsText.match(/charity/gi) ||
                converstionStepsText.match(/opportunit/gi)
            ) {
                await playScript("Okay. Let's talk about charities. Many people give lots of money to charities. Is this always good?")
                setSampleAns([" although it is good to donate money for a good cause like helping environment and animals but i don't think it is always good to spend lots of money to charities all the time but i think it is more important to be personally involved and volunteer and this is often much more effective that funds are not spent on administration and advertising ", "2 , What they found is that for more than 85 percent of charitable donations, people gave because someone asked them to. Yet that doesn’t solve the question of how donors who are approached by many causes choose which ones they will support. Most people give to causes that affirm important values, including compassion for those in need."])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  How can governments motivate citizens? To be more helpful in their communities?");
                converstionSteps--;
            }





        }
        else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Many people give lots of money to charities. Is this always good?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating,Many people give lots of money to charities. Is this always good?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/actually/gi) ||
                converstionStepsText.match(/generally/gi) || converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/good/gi) || converstionStepsText.match(/bad/gi) ||
                converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                converstionStepsText.match(/lot/gi) || converstionStepsText.match(/To be/gi) ||
                converstionStepsText.match(/agree/gi) || converstionStepsText.match(/communit/gi) ||
                converstionStepsText.match(/money/gi) || converstionStepsText.match(/charitie/gi) ||
                converstionStepsText.match(/encourage /gi) || converstionStepsText.match(/Support/gi) ||
                converstionStepsText.match(/program/gi) || converstionStepsText.match(/Donate/gi) ||
                converstionStepsText.match(/charity/gi) ||
                converstionStepsText.match(/opportunit/gi) ||
                converstionStepsText.match(/because/gi) || converstionStepsText.match(/solution/gi) ||
                converstionStepsText.match(/Social/gi) || converstionStepsText.match(/impact/gi)
            ) {
                await playScript("What are some different kinds of charities, and how do they help society?");
                setSampleAns([" :that's a big question because there are so many different charities in the world today there are so many charities that help sick children animals and the environment like unicef world wildlife fund and red cross these help society to improve the quality of their life and they provide help and jobs to many individuals nowadays ",
                    `2, There are different types of charities, including12:
              Food banks and other food distribution charities
              Children’s and family services
              Homeless services
              Rescue missions
              Social services
              Charitable organizations, religious or church organizations, private foundations and political organizations are some of the nonprofit exempt statuses that exist Charities are organizations that help people or communities in need. They are usually non-profit and rely on donations from individuals, corporations, foundations, and governments to fund their activities1. There are various types of charities, each with its own objectives and programs. Here are some common types of charities and how they contribute to society:
              Environmental Charities: 
              Children’s Charities: 
              Human Rights Charities: 
              Sports-Based Charities:.
              Cultural and Arts-Based Charities:.
              Health Charities: 
              Disaster Relief Charities: 
              `
                ])
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.   Many people give lots of money to charities. Is this always good?");
                converstionSteps--;
            }





        } else if (converstionSteps == 8) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What are some different kinds of charities, and how do they help society?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating,What are some different kinds of charities, and how do they help society?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/some/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/different/gi) || converstionStepsText.match(/actually/gi) ||
                converstionStepsText.match(/generally/gi) || converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/charities/gi) || converstionStepsText.match(/help/gi) ||
                converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                converstionStepsText.match(/society/gi) || converstionStepsText.match(/different/gi) ||
                converstionStepsText.match(/bank/gi) || converstionStepsText.match(/communit/gi) ||
                converstionStepsText.match(/service/gi) || converstionStepsText.match(/Homeless/gi) ||
                converstionStepsText.match(/Rescue/gi) || converstionStepsText.match(/Support/gi) ||
                converstionStepsText.match(/Social/gi) || converstionStepsText.match(/Donate/gi) ||
                converstionStepsText.match(/charity/gi) ||
                converstionStepsText.match(/religious/gi) ||
                converstionStepsText.match(/Environmental/gi) || converstionStepsText.match(/Human/gi) ||
                converstionStepsText.match(/Health/gi) || converstionStepsText.match(/Relief/gi)
            ) {
                await playScript("Okay. Will there be new kinds of charities in the future? That does not exist today.")
                setSampleAns([` :that's a tough prediction but if i have to i would answer yes as we know future always brings some sort of nobility and i don't think that charities would be any different maybe in the far future i think there would be some charities that will help save the planet moons and stars and i do think that it requires quite an imagination .`, `2 , It is likely that new kinds of charities will emerge in the future as the world changes and new challenges arise. For instance, the Charities Aid Foundation (CAF) has identified several trends that could impact the charity landscape in 2022 1. One of these trends is the sustained changes to funder behavior, which could lead to new types of charities emerging. Additionally, technology is constantly evolving, and it is possible that new charities will emerge to address issues related to technology 2.However, it is difficult to predict exactly what types of charities will emerge in the future. Charities are often created in response to specific needs or issues, and these needs and issues can be unpredictable. Nonetheless, it is likely that new charities will continue to emerge as people seek to address new challenges and make a positive impact on the world.`])
                conditionsDependsOnUserSpeech(6)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What are some different kinds of charities, and how do they help society?");
                converstionSteps--;
            }



        } else if (converstionSteps == 9) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Will there be new kinds of charities in the future? That does not exist today.");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating,Will there be new kinds of charities in the future? That does not exist today.");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/no/gi) ||
                converstionStepsText.match(/not/gi) || converstionStepsText.match(/actually/gi) ||
                converstionStepsText.match(/generally/gi) || converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/charities/gi) || converstionStepsText.match(/help/gi) ||
                converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                converstionStepsText.match(/society/gi) || converstionStepsText.match(/different/gi) ||
                converstionStepsText.match(/new/gi) || converstionStepsText.match(/communit/gi) ||
                converstionStepsText.match(/kind/gi) || converstionStepsText.match(/future/gi) ||
                converstionStepsText.match(/exist/gi) || converstionStepsText.match(/Support/gi) ||
                converstionStepsText.match(/Social/gi) || converstionStepsText.match(/answer/gi) ||
                converstionStepsText.match(/bring/gi) || converstionStepsText.match(/may/gi) ||
                converstionStepsText.match(/might/gi) || converstionStepsText.match(/imagination/gi)
            ) {
                await playScript("Okay. That was about section 3. Thanks.");
                conditionsDependsOnUserSpeech(7)
                await sendSpeakingtextToBackend(recordedText);
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Will there be new kinds of charities in the future? That does not exist today.");
                converstionSteps--;
            }






        }

    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";

}