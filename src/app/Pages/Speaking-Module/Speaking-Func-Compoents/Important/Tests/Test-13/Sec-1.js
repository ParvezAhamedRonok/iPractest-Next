let converstionSteps = 0;
export async function Test13Sec1(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {
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

        if (!userSpeakingTestNo) {
            if (converstionSteps == 1) {
                await playScript(
                    "I'll start your exam now. What's your full name, please?"
                );
                setSampleAns(["You an simply tell your full name . As like I am Mr. JOne Dow . You can call me jone."])
            } else if (converstionSteps == 2) {
                if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating.  What's your full name, please?");
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
                        setSampleAns(["You can call me Jone or you simply tell your nickname."])
                        converstionSteps--;
                    }
                }
                else {
                    await playScript("Alright, what's your name?");
                    setSampleAns(["You an simply tell your full name . As like I am Mr. JOne Dow . You can call me jone."])
                    converstionSteps--;
                }

            } else if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" Where do you live? ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Where do you live? ");
                    converstionSteps--;
                }
                else if (converstionStepsText.match(/live/gi) || converstionStepsText.match(/leaving/gi) ||
                    converstionStepsText.match(/in/gi) || converstionStepsText.match(/at/gi) ||
                    converstionStepsText.match(/from/gi) || converstionStepsText.match(/i am living/gi)) {
                    await playScript("Okey. Lets talk about city populations. What is the current population of your city");
                    setSampleAns(["Houston has a 2024 population of 2,305,889. It is also the county seat of Harris County. Houston is currently growing at a rate of 0.07% annually and its population has increased by 0.26% since the most recent census, which recorded a population of 2,299,867 in 2020."]);
                    conditionsDependsOnUserSpeech(1)
                } else {
                    await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Where do you live? ");
                    converstionSteps--;
                }

            }
        } else {
            if (converstionSteps == 1) {
                await playScript("Okey. Are you happy today?");
                setSampleAns([" Yes, sir i am really happly today. thanks for asking."])
            }
            if (converstionSteps == 2) {
                if (converstionStepsText.length < 5) {
                    await smallTalkError(" Are you ready? ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. Are you ready? ");
                    converstionSteps--;
                }
                else {
                    await playScript("Okey. Thanks , What do you do for fun?");
                    setSampleAns([` Some possible answers for what you do for fun you an say like:
                Arts and crafts, Board games and puzzles,Collecting (coins, antiques, gems, etc.), Cooking`])
                    conditionsDependsOnUserSpeech(0)
                }
            }
            if (converstionSteps == 3) {
                if (converstionStepsText.length < 10) {
                    await smallTalkError(" What do you do for fun? ");
                }
                else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                    await playScript("I am repeating. What do you do for fun? ");
                    converstionSteps--;
                }
                else {
                    await playScript("Okey. Lets talk about city populations. What is the current population of your city");
                    setSampleAns(["Houston has a 2024 population of 2,305,889. It is also the county seat of Harris County. Houston is currently growing at a rate of 0.07% annually and its population has increased by 0.26% since the most recent census, which recorded a population of 2,299,867 in 2020."])
                    conditionsDependsOnUserSpeech(1)
                }
            }
        }

        if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Lets talk about city populations. What is the current population of your city ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.Lets talk about city populations. What is the current population of your city ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/city/gi) || converstionStepsText.match(/population/gi) ||
                converstionStepsText.match(/current/gi) || converstionStepsText.match(/county/gi) ||
                converstionStepsText.match(/from/gi) || converstionStepsText.match(/living/gi) ||
                converstionStepsText.match(/seat/gi) || converstionStepsText.match(/since/gi) ||
                converstionStepsText.match(/recent/gi) || converstionStepsText.match(/census/gi) ||
                converstionStepsText.match(/in/gi) || converstionStepsText.match(/live/gi)

            ) {
                await playScript("Okey. How has the city's population changed over the past decade?");
                setSampleAns([`The United Nations cites two intertwined reasons for urbanization: an overall population increase that’s unevenly distributed by region, and an upward trend in people flocking to cities. Since 1950, the world’s urban populationhas risen almost six-fold, from 751 million to 4.2 billion in 2018.`])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Lets talk about city populations. What is the current population of your city");
                converstionSteps--;
            }


        } else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("How has the city's population changed over the past decade? ");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. How has the city's population changed over the past decade? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/live/gi) || converstionStepsText.match(/city/gi) ||
                converstionStepsText.match(/population/gi) || converstionStepsText.match(/decade/gi) ||
                converstionStepsText.match(/intertwined/gi) ||

                converstionStepsText.match(/urbanization/gi) || converstionStepsText.match(/living/gi) ||
                converstionStepsText.match(/overall/gi) || converstionStepsText.match(/since/gi) ||
                converstionStepsText.match(/unevenly/gi) || converstionStepsText.match(/distributed/gi) ||
                converstionStepsText.match(/region/gi) || converstionStepsText.match(/flocking/gi) ||
                converstionStepsText.match(/almost/gi) || converstionStepsText.match(/six-fold/gi) ||
                converstionStepsText.match(/billion/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/million/gi) || converstionStepsText.match(/do/gi)
            ) {
                await playScript("Okey. What is the projected population growth or decline for the next 10 years?");
                setSampleAns([` The latest UN projections suggest that the world’s population could grow to around 8.5 billion in 2030 and 9.7 billion in 2050, before reaching a peak of around 10.4 billion people during the 2080s. The population is expected to remain at that level until 2100.
                `])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. How has the city's population changed over the past decade?");
                converstionSteps--;
            }


        } else if (converstionSteps == 6) {

            if (converstionStepsText.length < 10) {
                await smallTalkError(" What is the projected population growth or decline for the next 10 years?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.  What is the projected population growth or decline for the next 10 years?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/project/gi) || converstionStepsText.match(/population/gi) ||
                converstionStepsText.match(/decline/gi) || converstionStepsText.match(/next/gi) ||
                converstionStepsText.match(/year/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/live/gi) || converstionStepsText.match(/latest/gi) ||

                converstionStepsText.match(/cost/gi) || converstionStepsText.match(/suggest/gi) ||
                converstionStepsText.match(/grow/gi) || converstionStepsText.match(/living/gi) ||
                converstionStepsText.match(/billion/gi) || converstionStepsText.match(/around/gi) ||

                converstionStepsText.match(/pollution/gi) || converstionStepsText.match(/remain/gi) ||
                converstionStepsText.match(/level/gi) || converstionStepsText.match(/concerns/gi) ||
                converstionStepsText.match(/until/gi)
            ) {
                await playScript("Okey. What is the population density of the city?");
                setSampleAns([` The area that Mexico City occupies comes to a total of 1,485 square kilometers (573 square miles). In combination with the growing number of residents, the population density was last measured at 6,000 people living per square kilometer (16,000 residents per square mile)`])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  What is the projected population growth or decline for the next 10 years?");
                converstionSteps--;
            }


        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What is the population density of the city?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating. What is the population density of the city? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/population/gi) || converstionStepsText.match(/city/gi) ||
                converstionStepsText.match(/area/gi) || converstionStepsText.match(/Mexico/gi) ||
                converstionStepsText.match(/occupies/gi) || converstionStepsText.match(/total/gi) ||
                converstionStepsText.match(/kilometer/gi) || converstionStepsText.match(/square/gi) ||

                converstionStepsText.match(/mile/gi) || converstionStepsText.match(/combination/gi) ||
                converstionStepsText.match(/number/gi) || converstionStepsText.match(/residents/gi) ||
                converstionStepsText.match(/measur/gi) || converstionStepsText.match(/resident/gi)
            ) {
                await playScript("Okey.How does the city's population compare to other cities in the same region or country?");
                setSampleAns([` Hong Kong: With a population of approximately 7.08 million, Hong Kong is a bustling metropolis known for its vibrant culture and impressive skyline 1.
                Wichita, United States: Wichita has a population of around 0.38 million and is known for its aviation industry 1.
                San Jose, CA, United States: San Jose has about 0.98 million residents and is a major tech hub in Silicon Valley 1.
                Beijing, China: The capital city of China, Beijing, boasts a population of 21.5 million 1.
                Tokyo, Japan: Tokyo, one of the most populous cities globally, has around 13.18 million inhabitants 1.
                London, United Kingdom: London’s population stands at 9.78 million, making it a diverse and dynamic city 1.
                Moscow, Russia: Moscow is home to approximately 12.6 million people 1.
                Panama City, Panama: With a population of 1.8 million, Panama City is a vibrant hub in Central America 1
                `])
                conditionsDependsOnUserSpeech(5)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  What is the population density of the city?");
                converstionSteps--;
            }


        } else if (converstionSteps == 8) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("How does the city's population compare to other cities in the same region or country?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.How does the city's population compare to other cities in the same region or country? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/population/gi) || converstionStepsText.match(/other/gi) ||
                converstionStepsText.match(/cit/gi) || converstionStepsText.match(/same/gi) ||
                converstionStepsText.match(/region/gi) || converstionStepsText.match(/country/gi) ||
                converstionStepsText.match(/approximate/gi) || converstionStepsText.match(/million/gi) ||
                converstionStepsText.match(/billion/gi) || converstionStepsText.match(/bustling/gi) ||
                converstionStepsText.match(/vibrant/gi) || converstionStepsText.match(/culture/gi) ||
                converstionStepsText.match(/impressive/gi) || converstionStepsText.match(/skyline/gi) ||

                converstionStepsText.match(/Central/gi) || converstionStepsText.match(/dynamic/gi) ||
                converstionStepsText.match(/comfort/gi) || converstionStepsText.match(/visual/gi) ||
                converstionStepsText.match(/effect/gi)

            ) {
                await playScript("Okey. What are the primary factors contributing to population growth or decline in the city?");
                setSampleAns([` Correct understanding of the relationship between population growth 
                and environmental degradation, and of the factors that lead to 
                imbalance in developing countries, is essential to the development 
                of an effective policy to reduce the impact of the 'population explosion' on the environment. This chapter presents a case study of 
                the factors that contribute to population growth in Bangladesh, as 
                well as some specific suggestions for tailoring policies to establish 
                equilibrium. 
                Bangladesh is a deltaic country with an area of nearly 145 000 
                square kilometres (roughly the size of Wisconsin) with 230 rivers, 
                tributaries and rivulets. Its neighbour to the north, west and east is 
                India, while the south is delineated by the Bay of Bengal. The country 
                also shares a small border with Burma. Bangladesh's total population has increased from 42 million in 1947, to nearly 90 million
                today, and some projections suggest that the population will double again by the year 2025. 1 According to a 1994 estimate, the 
                population density is roughly 800 people per square kilometer. 2 
                Despite a decline in the fertility rate since the early 1990s, Bangladesh's population growth rate still exceeds its rate of economic 
                growth. Meeting basic needs is difficult for the majority of the 
                population, which struggles to eke out a subsistence standard of 
                living of two balanced meals per day and basic shelter. Under these 
                conditions, protecting the environment remains a low priority. The 
                lack of fuel for cooking leads to indiscriminate felling of trees for 
                firewood, while the lack of availability of adequate food leads to 
                overuse of fertilizers and other unsound agricultural practices. `])
                conditionsDependsOnUserSpeech(6)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.How does the city's population compare to other cities in the same region or country?");
                converstionSteps--;
            }



        } else if (converstionSteps == 9) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What are the primary factors contributing to population growth or decline in the city?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.What are the primary factors contributing to population growth or decline in the city? ");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/primary/gi) || converstionStepsText.match(/factors/gi) ||
                converstionStepsText.match(/contributing/gi) || converstionStepsText.match(/population/gi) ||
                converstionStepsText.match(/growth/gi) ||
                converstionStepsText.match(/decline/gi) || converstionStepsText.match(/city/gi) ||
                converstionStepsText.match(/environmental/gi) ||
                converstionStepsText.match(/imbalance/gi) || converstionStepsText.match(/develop/gi) ||
                converstionStepsText.match(/factor/gi) || converstionStepsText.match(/deltaic/gi) ||
                converstionStepsText.match(/equilibrium/gi) || converstionStepsText.match(/According/gi) ||
                converstionStepsText.match(/economic/gi) || converstionStepsText.match(/Despite/gi) ||

                converstionStepsText.match(/condition/gi) || converstionStepsText.match(/visual/gi) ||
                converstionStepsText.match(/effect/gi) ||
                converstionStepsText.match(/majority/gi)
            ) {
                await playScript("How does the city's birth rate compare to its death rate?");
                setSampleAns([` Comparing the birth rate and death rate of a given area provides insight into whether that population is increasing or decreasing. When the birth rate is larger than the death rate, we know that more people are being “added” to the area than are being “taken away”, meaning the population is growing.
                `])
                conditionsDependsOnUserSpeech(7)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What are the primary factors contributing to population growth or decline in the city?");
                converstionSteps--;
            }



        } else if (converstionSteps == 10) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("How does the city's birth rate compare to its death rate?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.How does the city's birth rate compare to its death rate?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/birth/gi) || converstionStepsText.match(/does/gi) ||
                converstionStepsText.match(/compare/gi) || converstionStepsText.match(/city/gi) ||
                converstionStepsText.match(/death/gi) || converstionStepsText.match(/rate/gi) ||
                converstionStepsText.match(/Compar/gi) || converstionStepsText.match(/provide/gi) ||
                converstionStepsText.match(/give/gi) || converstionStepsText.match(/insight/gi) ||
                converstionStepsText.match(/whether/gi) || converstionStepsText.match(/population/gi) ||
                converstionStepsText.match(/increas/gi) || converstionStepsText.match(/decreas/gi) ||
                converstionStepsText.match(/larger/gi) || converstionStepsText.match(/being/gi) ||

                converstionStepsText.match(/“taken/gi) || converstionStepsText.match(/away/gi) ||
                converstionStepsText.match(/effect/gi) ||
                converstionStepsText.match(/Instead/gi) || converstionStepsText.match(/stay/gi) ||
                converstionStepsText.match(/individual/gi) || converstionStepsText.match(/mean/gi)
            ) {
                await playScript("Okey. Which public holiday do you like the best?");
                setSampleAns([`Income: Income levels significantly impact people’s quality of life. Higher income allows access to better housing, education, healthcare, and other essential services. In cities, income disparities can be stark, with some neighborhoods having higher average incomes than others1.
                Education: Education is a key determinant of socioeconomic status. Areas with better educational institutions tend to attract higher-income residents. Conversely, neighborhoods with limited educational opportunities may face economic challenges. Educational attainment affects employment prospects and overall well-being.
                Occupational Prestige: Certain professions are considered more prestigious than others. Occupations in fields like medicine, law, or technology often lead to higher incomes and social status. In contrast, low-wage jobs may be prevalent in specific neighborhoods.
                Poverty: Poverty rates differ across city neighborhoods. High-poverty areas face challenges related to housing instability, food insecurity, and limited access to healthcare. Addressing poverty requires targeted policies and community support.
                Access to Services: Socioeconomic factors influence access to essential services such as`])
                conditionsDependsOnUserSpeech(8)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.How does the city's birth rate compare to its death rate?");
                converstionSteps--;
            }



        } else if (converstionSteps == 11) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Which public holiday do you like the best?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.  Which public holiday do you like the best?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/public/gi) || converstionStepsText.match(/holiday/gi) ||
                converstionStepsText.match(/best/gi) ||
                converstionStepsText.match(/like/gi) || converstionStepsText.match(/love/gi) ||
                converstionStepsText.match(/Income/gi) || converstionStepsText.match(/Education/gi) ||
                converstionStepsText.match(/Occupational/gi) || converstionStepsText.match(/Prestige/gi) ||

                converstionStepsText.match(/status/gi) || converstionStepsText.match(/contrast/gi) ||
                converstionStepsText.match(/access/gi) || converstionStepsText.match(/requires/gi) ||
                converstionStepsText.match(/Alternatively/gi) || converstionStepsText.match(/service/gi)
            ) {
                await playScript("Okey. What are the key challenges and opportunities related to managing the city's population growth or decline?");
                setSampleAns([`Population growth is the increase in the number of people in a population or dispersed group. Actual global human population growth amounts to around 83 million annually, or 1.1% per year. The global population has grown from 1 billion in 1800 to 7.9 billion in 2020. The UN projected population to keep growing, and estimates have put the total population at 8.6 billion by mid-2030, 9.8 billion by mid-2050 and 11.2 billion by 2100. However, some academics outside the UN have increasingly developed human population models that account for additional downward pressures on population growth; in such a scenario population would peak before 2100. Others have challenged many recent population projections as having underestimated population growth. `])
                conditionsDependsOnUserSpeech(9)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  Which public holiday do you like the best?");
                converstionSteps--;
            }
        }

        else if (converstionSteps == 12) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What are the key challenges and opportunities related to managing the city's population growth or decline?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating.What are the key challenges and opportunities related to managing the city's population growth or decline?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/challenges/gi) || converstionStepsText.match(/opportunities/gi) ||
                converstionStepsText.match(/decline/gi) || converstionStepsText.match(/related /gi) ||
                converstionStepsText.match(/managing/gi) || converstionStepsText.match(/population/gi) ||
                converstionStepsText.match(/growth/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/global/gi) || converstionStepsText.match(/human/gi) ||
                converstionStepsText.match(/group/gi) || converstionStepsText.match(/billion/gi) ||

                converstionStepsText.match(/However/gi) || converstionStepsText.match(/additional/gi) ||
                converstionStepsText.match(/challenge/gi) || converstionStepsText.match(/underestimate/gi) ||
                converstionStepsText.match(/growth/gi) || converstionStepsText.match(/effect/gi)
            ) {
                await playScript("Okey. That was about section 1. Thanks.");
                conditionsDependsOnUserSpeech(10)
                await sendSpeakingtextToBackend(recordedText);
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What are the key challenges and opportunities related to managing the city's population growth or decline?");
                converstionSteps--;
            }


        }

    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";
}