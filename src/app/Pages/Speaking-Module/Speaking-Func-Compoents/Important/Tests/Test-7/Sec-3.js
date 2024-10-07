let converstionSteps = 0;
export async function Test7Sec3(converstionStepsText, userSpeakingTestNo, testNo, recordedText, playScript, smallTalkError, setSampleAns, conditionsDependsOnUserSpeech, sendSpeakingtextToBackend) {
    if (converstionSteps == 0 && converstionStepsText == '') {
        await playScript(
            " My name is Adrian &  I will be your examiner for this part of the test for part three. Are you comfortable?"
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

        //         " My name is Adrian. &  I will be your examiner for this part of the test for this part three. Are you confortable?"
        //     );
        // }
        if (converstionSteps == 1) {
            await playScript(
                "Sorry.... Can you repeat that please?"
            );
            setSampleAns([' You can simply repeated the answer that you have given a little momemnt before'])
        } else if (converstionSteps == 2) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("Are you ready?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating,Are you ready?");
                converstionSteps--;
            }
            else {
                await playScript("Let's talk about successful restaurants. What are the most popular types of restaurants these days?");
                setSampleAns([`1 , it is sad to say but uh the most popular restaurants these days are the fast food chains like mcdonald's and kfc because they provide fast food and at a cheaper cost and also they are addictive because of all the msg and sugar however i must say that restaurants like under the mango tree are also popular for their quality `
                ])
                conditionsDependsOnUserSpeech(0)
            }
        }
        else if (converstionSteps == 3) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What are the most popular types of restaurants these days?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating,What are the most popular types of restaurants these days?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/restaurant/gi) || converstionStepsText.match(/popular/gi) ||
                converstionStepsText.match(/these/gi) || converstionStepsText.match(/day/gi) ||
                converstionStepsText.match(/Fine/gi) || converstionStepsText.match(/dining/gi) ||
                converstionStepsText.match(/Casual/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/Cafés/gi) || converstionStepsText.match(/Buffet/gi) ||
                converstionStepsText.match(/Food/gi) || converstionStepsText.match(/Pubs/gi) ||
                converstionStepsText.match(/Seafood/gi) || converstionStepsText.match(/Diner/gi) ||
                converstionStepsText.match(/Vegetarian/gi) || converstionStepsText.match(/Family/gi)
            ) {
                await playScript("And. Why are these so popular?");
                setSampleAns([" as i mentioned before these places uh provide fast food and cheap food and people nowadays are busy in their life and they don't have much money so they prefer uh fast food and especially a lot of young people go out to these outlets for a quick bite"])
                conditionsDependsOnUserSpeech(1)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What are the most popular types of restaurants these days?");
                converstionSteps--;
            }



        }
        else if (converstionSteps == 4) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" Why are these so popular?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating, Why are these so popular?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/restaurant/gi) || converstionStepsText.match(/popular/gi) ||
                converstionStepsText.match(/these/gi) || converstionStepsText.match(/day/gi) ||
                converstionStepsText.match(/Fine/gi) || converstionStepsText.match(/dining/gi) ||
                converstionStepsText.match(/Casual/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/Cafés/gi) || converstionStepsText.match(/Buffet/gi) ||
                converstionStepsText.match(/Food/gi) || converstionStepsText.match(/Pubs/gi) ||
                converstionStepsText.match(/Seafood/gi) || converstionStepsText.match(/Diner/gi) ||
                converstionStepsText.match(/Vegetarian/gi) || converstionStepsText.match(/Family/gi) ||
                converstionStepsText.match(/mention/gi) || converstionStepsText.match(/because/gi) ||
                converstionStepsText.match(/so/gi) || converstionStepsText.match(/People/gi) ||
                converstionStepsText.match(/love/gi) || converstionStepsText.match(/like/gi) ||
                converstionStepsText.match(/become/gi) || converstionStepsText.match(/Depend/gi) ||
                converstionStepsText.match(/alway/gi) || converstionStepsText.match(/delicious/gi)
            ) {
                await playScript("What is needed for a restaurant to be successful?");
                setSampleAns([`1 ,  
                for a restaurant to be successful i believe like under the mango tree the quality of food is
                Firstly, apart from that the service is important and it should have a unique selling point like a beautiful view.
                To ensure the success of a restaurant, you need to focus on the following key factors1:
                Concept: Every successful restaurant has a clear, distinct concept.
                Food and drink quality: At the heart of a successful restaurant is the quality of food and drink.
                Customer service: A friendly, efficient, and attentive staff can enhance a customer’s overall dining experience and generate repeat business.
                Location
                Menu innovation
                In addition to practical skills, education regarding business practices, financing, and marketing are equally imperative2.`])
                conditionsDependsOnUserSpeech(2)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Why are these so popular?");
                converstionSteps--;
            }



        }
        else if (converstionSteps == 5) {
            if (converstionStepsText.length < 10) {
                await smallTalkError(" What is needed for a restaurant to be successful?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating, What is needed for a restaurant to be successful?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/restaurant/gi) || converstionStepsText.match(/popular/gi) ||
                converstionStepsText.match(/these/gi) || converstionStepsText.match(/day/gi) ||
                converstionStepsText.match(/need/gi) || converstionStepsText.match(/dining/gi) ||
                converstionStepsText.match(/Casual/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/Cafés/gi) || converstionStepsText.match(/Buffet/gi) ||
                converstionStepsText.match(/food/gi) || converstionStepsText.match(/Pubs/gi) ||
                converstionStepsText.match(/feedback/gi) || converstionStepsText.match(/Diner/gi) ||
                converstionStepsText.match(/Vegetarian/gi) || converstionStepsText.match(/success/gi) ||
                converstionStepsText.match(/mention/gi) || converstionStepsText.match(/because/gi) ||
                converstionStepsText.match(/so/gi) || converstionStepsText.match(/People/gi) ||
                converstionStepsText.match(/love/gi) || converstionStepsText.match(/like/gi) ||
                converstionStepsText.match(/become/gi) || converstionStepsText.match(/Depend/gi) ||
                converstionStepsText.match(/alway/gi) || converstionStepsText.match(/delicious/gi) ||
                converstionStepsText.match(/believe/gi) || converstionStepsText.match(/apart/gi) ||
                converstionStepsText.match(/concept/gi) || converstionStepsText.match(/service/gi) ||
                converstionStepsText.match(/Location/gi) || converstionStepsText.match(/menu/gi) ||
                converstionStepsText.match(/skill/gi) || converstionStepsText.match(/staff/gi) ||
                converstionStepsText.match(/Right/gi) || converstionStepsText.match(/Effective/gi)
            ) {
                await playScript("How do negative experiences affect a restaurant?");
                setSampleAns([` Negative experiences can have a significant impact on a restaurant’s reputation and revenue. When customers have negative experiences, they are more likely to leave negative reviews,which can deter potential clients from visiting the restaurant1. In fact, a single one-star decrease in a restaurant’s rating can reduce its revenue by nearly 9%2. Negative reviews can also affect the restaurant’s search ranking and brand reputation1. It is important for restaurant owners to respond professionally to negative reviews and address customer concerns to mitigate the impact of negative experiences12.
                Moreover, during the COVID-19 pandemic, customers’ dining behavior has been altered, and fewer customers are willing to dine in restaurants.
                If you are a restaurant owner or manager, it is crucial to address negative experiences promptly and take steps to improve customer satisfaction. This may involve addressing issues with food quality, service, cleanliness, or other aspects of the dining experience4. By actively working to resolve negative experiences and providing exceptional customer service, restaurants can enhance their reputation and attract more customers.
                Please let me know if you need further assistance or have any other questions!
                `])
                conditionsDependsOnUserSpeech(3)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What is needed for a restaurant to be successful?");
                converstionSteps--;
            }


        } else if (converstionSteps == 6) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("How do negative experiences affect a restaurant?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating, How do negative experiences affect a restaurant?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/negative/gi) || converstionStepsText.match(/affect/gi) ||
                converstionStepsText.match(/restaurant/gi) || converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/no/gi) || converstionStepsText.match(/actually/gi) ||
                converstionStepsText.match(/food/gi) || converstionStepsText.match(/bad/gi) ||
                converstionStepsText.match(/feedback/gi) || converstionStepsText.match(/good/gi) ||
                converstionStepsText.match(/positive/gi) || converstionStepsText.match(/provid/gi) ||
                converstionStepsText.match(/business/gi) || converstionStepsText.match(/because/gi) ||
                converstionStepsText.match(/customer/gi) || converstionStepsText.match(/People/gi) ||
                converstionStepsText.match(/love/gi) || converstionStepsText.match(/like/gi) ||
                converstionStepsText.match(/become/gi) || converstionStepsText.match(/Depend/gi) ||
                converstionStepsText.match(/consequences/gi) || converstionStepsText.match(/Potential/gi) ||
                converstionStepsText.match(/believe/gi) || converstionStepsText.match(/apart/gi) ||
                converstionStepsText.match(/concept/gi) || converstionStepsText.match(/service/gi) ||
                converstionStepsText.match(/brand/gi) || converstionStepsText.match(/review/gi) ||
                converstionStepsText.match(/impact/gi) || converstionStepsText.match(/reputation/gi) ||
                converstionStepsText.match(/decrease/gi) || converstionStepsText.match(/incress/gi)

            ) {
                await playScript("Okay. How has technology affected the success or failure of a restaurant?");
                setSampleAns([` the modern technologies are used for preparing food ordering and serving has very much helped in restaurants to be successful uh so many restaurants nowadays use digital menus they have a qr code at the table to order food also reviews online can make or break a restaurant as i mentioned earlier the reason i chose to go to under the mango tree was uh because of the online reviews it had 4.5 from almost 400 guests .`])
                conditionsDependsOnUserSpeech(4)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. How do negative experiences affect a restaurant?");
                converstionSteps--;
            }



        } else if (converstionSteps == 7) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("How has technology affected the success or failure of a restaurant?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating, How has technology affected the success or failure of a restaurant?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/technology/gi) || converstionStepsText.match(/affect/gi) ||
                converstionStepsText.match(/restaurant/gi) || converstionStepsText.match(/do/gi) ||
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/no/gi) || converstionStepsText.match(/actually/gi) ||
                converstionStepsText.match(/food/gi) || converstionStepsText.match(/bad/gi) ||
                converstionStepsText.match(/feedback/gi) || converstionStepsText.match(/good/gi) ||
                converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                converstionStepsText.match(/business/gi) || converstionStepsText.match(/sufficient/gi) ||
                converstionStepsText.match(/customer/gi) || converstionStepsText.match(/success/gi) ||
                converstionStepsText.match(/use/gi) || converstionStepsText.match(/help/gi) ||
                converstionStepsText.match(/digital/gi) || converstionStepsText.match(/Depend/gi) ||
                converstionStepsText.match(/review/gi) || converstionStepsText.match(/online/gi) ||
                converstionStepsText.match(/believe/gi) || converstionStepsText.match(/apart/gi) ||
                converstionStepsText.match(/concept/gi) || converstionStepsText.match(/impact/gi) ||
                converstionStepsText.match(/brand/gi) || converstionStepsText.match(/According/gi) ||
                converstionStepsText.match(/franchise/gi) || converstionStepsText.match(/disclosure/gi) ||
                converstionStepsText.match(/decrease/gi) || converstionStepsText.match(/incress/gi)

            ) {
                await playScript(
                    "Let's talk about improving business. What are the best ways to improve the operations of a business?"
                )
                setSampleAns([` Improving the operations of a business is a complex and ongoing process that requires a lot of effort and attention to detail. There are many ways to improve operational efficiency, and the best approach depends on the specific needs and goals of your business. Here are some general tips to get you started:
                Streamline processes: I
                Invest in technology:
                Focus on customer needs: 
                Train your employees: 
                Measure performance: 
                Collaborate with partners: 
                Stay up-to-date: 
                `])
                conditionsDependsOnUserSpeech(5)

            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. How has technology affected the success or failure of a restaurant?");
                converstionSteps--;
            }


        }
        else if (converstionSteps == 8) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("What are the best ways to improve the operations of a business?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating,What are the best ways to improve the operations of a business?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/technology/gi) || converstionStepsText.match(/affect/gi) ||
                converstionStepsText.match(/restaurant/gi) || converstionStepsText.match(/best/gi) ||
                converstionStepsText.match(/yes/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/way/gi) || converstionStepsText.match(/actually/gi) ||
                converstionStepsText.match(/operation/gi) || converstionStepsText.match(/improve/gi) ||
                converstionStepsText.match(/feedback/gi) || converstionStepsText.match(/failure/gi) ||
                converstionStepsText.match(/positive/gi) || converstionStepsText.match(/negative/gi) ||
                converstionStepsText.match(/business/gi) || converstionStepsText.match(/sufficient/gi) ||
                converstionStepsText.match(/customer/gi) || converstionStepsText.match(/success/gi) ||
                converstionStepsText.match(/through/gi) || converstionStepsText.match(/help/gi) ||
                converstionStepsText.match(/feedback/gi) || converstionStepsText.match(/Depend/gi) ||
                converstionStepsText.match(/review/gi) || converstionStepsText.match(/company/gi) ||
                converstionStepsText.match(/believe/gi) || converstionStepsText.match(/apart/gi) ||
                converstionStepsText.match(/concept/gi) || converstionStepsText.match(/impact/gi) ||
                converstionStepsText.match(/brand/gi) || converstionStepsText.match(/According/gi) ||
                converstionStepsText.match(/mistake/gi) || converstionStepsText.match(/simplify/gi) ||
                converstionStepsText.match(/Resolve/gi) || converstionStepsText.match(/Keep/gi) ||
                converstionStepsText.match(/complex/gi) || converstionStepsText.match(/process/gi) ||
                converstionStepsText.match(/require/gi) || converstionStepsText.match(/efficiency/gi) ||
                converstionStepsText.match(/Focus/gi) || converstionStepsText.match(/Measure/gi) ||
                converstionStepsText.match(/Collaborate/gi)
            ) {
                await playScript("Ok . Who is responsible for improving a business?")
                setSampleAns([` The responsibility of improving a business can be divided into several roles, depending on the methodology used. For instance, in the Six Sigma methodology, the following roles are required: Six Sigma Deployment Leader, Six Sigma Champion, Six Sigma Master Black Belt (MBB), Six Sigma Black Belt (BB), Six Sigma Green Belt (GB), and Six Sigma Yellow Belt (YB) 1.
                The Six Sigma Deployment Leader is responsible for establishing business objectives and the role of Six Sigma to achieve those goals. They also create an environment that enables success, including goals, measures, coaching, and communication, among others. The Six Sigma Champion is responsible for ensuring that process improvements are captured and sustained. They typically manage Six Sigma Green Belts (GB’s) and must understand the challenges faced by GB associates. The Six Sigma Master Black Belt (MBB) is responsible for training and coaching Black Belts and Green Belts. The Black Belt (BB) is responsible for taking the process improvements to the next level in the organization using statistical analysis and Six Sigma tools. The Green Belt (GB) is responsible for executing process improvement projects under the guidance of a Black Belt 1.
                Another role that is responsible for improving a business is a Process Improvement Manager. Their main role is to provide an objective assessment of how well a business operates and give actionable tips to refine all aspects of the business
                `])
                conditionsDependsOnUserSpeech(6)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. What are the best ways to improve the operations of a business?");
                converstionSteps--;
            }

        } else if (converstionSteps == 9) {

            if (converstionStepsText.length < 10) {
                await smallTalkError("Who is responsible for improving a business?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating,Who is responsible for improving a business?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/responsible/gi) || converstionStepsText.match(/team/gi) ||
                converstionStepsText.match(/improving/gi) || converstionStepsText.match(/teamwork/gi) ||
                converstionStepsText.match(/staff/gi) || converstionStepsText.match(/owner/gi) ||
                converstionStepsText.match(/Business/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/management/gi) || converstionStepsText.match(/frontline/gi) ||
                converstionStepsText.match(/worker/gi) || converstionStepsText.match(/provide/gi) ||
                converstionStepsText.match(/quality/gi) || converstionStepsText.match(/service/gi) ||
                converstionStepsText.match(/skill/gi) || converstionStepsText.match(/problem/gi) ||
                converstionStepsText.match(/result/gi) || converstionStepsText.match(/negative/gi) ||
                converstionStepsText.match(/positive/gi) || converstionStepsText.match(/impact/gi) ||
                converstionStepsText.match(/action/gi) || converstionStepsText.match(/performance/gi) ||
                converstionStepsText.match(/during/gi) || converstionStepsText.match(/organization/gi)

            ) {
                await playScript("So, what resources are available to help businesses operate well?")
                setSampleAns([` i think there are many resources available for companies to function especially in capitalist society where small and medium businesses are the backbone of the economy there are different kinds of business loans trainings and tax benefits available for companies to try during the pandemic the government provided relief funds for companies to survive the hardship .
                Employees – money for salaries, tax, 
                Expenses – travel, meetings, food, hotels…
                Insurance – insure your business against normal risks.
                Accountant – these may be outsourced or internal.
                Project Management Tools – software for managing projects.
                `])
                conditionsDependsOnUserSpeech(7)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. Who is responsible for improving a business?");
                converstionSteps--;
            }



        } else if (converstionSteps == 10) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("what resources are available to help businesses operate well?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating,what resources are available to help businesses operate well?");
                converstionSteps--;
            }
            else if (
                converstionStepsText.match(/responsible/gi) || converstionStepsText.match(/team/gi) ||
                converstionStepsText.match(/improving/gi) || converstionStepsText.match(/resources/gi) ||
                converstionStepsText.match(/available/gi) || converstionStepsText.match(/help/gi) ||
                converstionStepsText.match(/Business/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/management/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/worker/gi) || converstionStepsText.match(/provide/gi) ||
                converstionStepsText.match(/quality/gi) || converstionStepsText.match(/service/gi) ||
                converstionStepsText.match(/operate/gi) || converstionStepsText.match(/problem/gi) ||
                converstionStepsText.match(/Emotional/gi) || converstionStepsText.match(/negative/gi) ||
                converstionStepsText.match(/positive/gi) || converstionStepsText.match(/impact/gi) ||
                converstionStepsText.match(/action/gi) || converstionStepsText.match(/performance/gi) ||
                converstionStepsText.match(/well/gi) || converstionStepsText.match(/Employee/gi) ||
                converstionStepsText.match(/Expenses/gi) || converstionStepsText.match(/money/gi) ||
                converstionStepsText.match(/salarie/gi) || converstionStepsText.match(/tax/gi) ||
                converstionStepsText.match(/health/gi) || converstionStepsText.match(/travel/gi) ||
                converstionStepsText.match(/meeting/gi) || converstionStepsText.match(/Insurance/gi) ||
                converstionStepsText.match(/Accountant/gi) || converstionStepsText.match(/Tool/gi) ||
                converstionStepsText.match(/Funding/gi) || converstionStepsText.match(/crucial/gi)
            ) {
                await playScript("How can Entrepreneurs find resources to improve their business?")
                setSampleAns([` the best way to support startups or growing companies is to search online or network with others in the industry it is wise to get more information from experienced companies that have already gone through growing pains 
                Business websites
               Business blogs
               Crowdfunding platforms
                Incubators and AcceleratorsStartup apps
               Website creation resources
               Project management resources
               Customer communication tools
                Professional communication technologies
               Writing resources
               Analytics tools
               Competition research
               Productivity tools
               `])
                conditionsDependsOnUserSpeech(8)
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again.  what resources are available to help businesses operate well?");
                converstionSteps--;
            }


        } else if (converstionSteps == 11) {
            if (converstionStepsText.length < 10) {
                await smallTalkError("How can Entrepreneurs find resources to improve their business?");
            }
            else if (converstionStepsText.match(/repeat/gi) || converstionStepsText.match(/don't understand/gi)) {
                await playScript("I am repeating,How can Entrepreneurs find resources to improve their business?");
                converstionSteps--;
            }
            else if (

                converstionStepsText.match(/Entrepreneur/gi) || converstionStepsText.match(/find/gi) ||
                converstionStepsText.match(/improving/gi) || converstionStepsText.match(/resources/gi) ||
                converstionStepsText.match(/improve/gi) || converstionStepsText.match(/help/gi) ||
                converstionStepsText.match(/Business/gi) || converstionStepsText.match(/generally/gi) ||
                converstionStepsText.match(/management/gi) || converstionStepsText.match(/think/gi) ||
                converstionStepsText.match(/worker/gi) || converstionStepsText.match(/provide/gi) ||
                converstionStepsText.match(/quality/gi) || converstionStepsText.match(/service/gi) ||
                converstionStepsText.match(/operate/gi) || converstionStepsText.match(/problem/gi) ||
                converstionStepsText.match(/support/gi) || converstionStepsText.match(/start/gi) ||
                converstionStepsText.match(/companies/gi) || converstionStepsText.match(/company/gi) ||
                converstionStepsText.match(/online/gi) || converstionStepsText.match(/performance/gi) ||
                converstionStepsText.match(/grow/gi) || converstionStepsText.match(/Employee/gi) ||
                converstionStepsText.match(/blog/gi) || converstionStepsText.match(/website/gi) ||
                converstionStepsText.match(/platform/gi) || converstionStepsText.match(/Project /gi) ||
                converstionStepsText.match(/resources/gi) || converstionStepsText.match(/Customer/gi) ||
                converstionStepsText.match(/meeting/gi) || converstionStepsText.match(/communication/gi) ||
                converstionStepsText.match(/Analytics/gi) || converstionStepsText.match(/Tool/gi) ||
                converstionStepsText.match(/Productivity/gi) || converstionStepsText.match(/crucial/gi)
            ) {
                await playScript("Okay. That was about section 3. Thanks.");
                conditionsDependsOnUserSpeech(9)
                await sendSpeakingtextToBackend(recordedText);
            } else {
                await playScript("Sorry, Your answer is not relevent. I'm saying it again. How can Entrepreneurs find resources to improve their business?");
                converstionSteps--;
            }


        }

    }

    console.log("converstionStepsText");
    console.log(converstionStepsText);
    converstionStepsText = "";

}