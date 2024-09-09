import React from 'react';
import { makeEditableAndHighlight } from "../../../Important/TextChangeFunc";



function Test7Panel2({ AnswersData }) {
    //  submitted answers for showing at submit popup---------->>  
    let AllAnswersData = [
 ['B'],['A'],['E'], ['B'],['D'],['C'], ["TRUE"],["FALSE"],["NOT GIVEN"], ["NOT GIVEN"],["TRUE"],["NOT GIVEN"],
 ["NOT GIVEN"],["B"],['B'], ["A"],["C"],["C"], ["availability","/","ABAILABILITY","/","Availability"],["Long haul","/","long haul","LONG HOUL"],["duration","/","Duration","/","DURATION"], ["technology","/","TECHNOLOGY","/","Technology"],["avionic systems","/","avionic systems"],["switched","/","Switched"],
 ["Networks","/","networks"],["more discreet","/","More discreet","/","MORE DISCREET"],["viii"], ["x"],["ii"],["v"], ["vi"],["ix"], ["iv"],["i"],["vii"],
 ["lack capital","/","Lack capital","/","LACK CAPITAL"],["new destinations","/","New destinations"],["high expenditure","/","High expenditure"],["most privileged","/","Most priviliged"],["not undesirable","/","Not undesirable","/","NOT UNDESIREABLE"]
    ]
    AnswersData(AllAnswersData)



    return (


        <section className='mainSection p-4 mb-[50px]'
        onMouseDown={() =>{ makeEditableAndHighlight("green");}}>
            <div className='text-inherit Titles'>
                <div className="Titles text-inherit font-bold mb-2 PL-2 text-justify">
                    <div className=''>SECTION 1 <br />Questions 1-13</div> 
                    <div className="mt-2 mb-3">Read the text and answer Questions 1-13<br />
                    Emerging Tourist Destinations</div><br />
                </div>
            </div>

            <div>
                <div className="mt-2 mb-3">
                    <p className=''>
                        <span className='text-xl font-bold mr-2 mt-2 mb-3'>A</span>The rise of emerging economies marks the third revolution the travel industry has undergone in the past 50 years. The first came in the 1960s, in the shape of cheap air travel and package tours. Rising incomes enabled people of modest means to travel more, to farther-flung parts of the globe, and to take advantage of “all-in” offers that may have included sightseeing trips, scuba diving or camel rides. The second was the advent of the internet, which has allowed millions to book flights, hotels, hire cars and package tours without going near a high-street travel agent.
                    </p>
                </div>
                <div className="mt-2 mb-3">
                    <p className=''>
                        <span className='text-xl font-bold mr-2 mt-2 mb-3'>B</span> Now fast-growing emerging economies-not just Dubai but also the BRICs (Brazil, Russia, India and China) and others, such as South Korea and Vietnam-are changing the world of travel once again, either as destinations or as sources of newly affluent travellers. Often, citizens of these countries are visiting similar, emerging lands. Last year, for example, Russians made a total of 34.3m trips abroad, up from 29.1m in 2006. Turkey was their most popular destination, followed by China and Egypt. The Chinese head the table of visitors to Vietnam.</p>
                </div>
                <div className="mt-2 mb-3">
                    <p className=''>
                        <span className='text-xl font-bold mr-2 mt-2 mb-3'>C</span>The WTTC claims that travel and tourism is the world's biggest industry in terms of its contribution to global GDP and employment. The lobby group forecasts that global travel and tourism will account for $5.9 trillion of economic activity in 2008, or about 10% of global GDP, employing 238m people. It expects employment to rise to 296m in the next decade. In fact, assessing the scale of the industry is not straightforward. When all travel and tourism is lumped together, so that everything from airlines to cafés counts, it is no surprise that the WTTC's total is so large. As a rule, restaurants do not record whether they are serving tourists, business travellers or locals out for a meal.
                    </p>
                </div>
                <div className="mt-2 mb-3">
                    <p className=''>
                        <span className='text-xl font-bold mr-2 mt-2 mb-3'>D</span>For the next year or two, the travel industry is likely to find its long-standing customers in rich Western countries a less than reliable source of growth. As American families plan their holidays, many will be worrying about the frailty of their country's economy, the rising cost of petrol and-for those venturing outside the United States-the weakness of the dollar. They are delaying booking in the hope of nabbing cheap, last-minute deals. They certainly seem to be spending less. On May 7th Orbitz, an American online travel-firm, posted a first-quarter net loss of $15m compared with a net loss of $10m a year earlier. The majority of its business is domestic bookings, which were 6% lower in the first quarter than a year earlier, at $2.4 billion.
                    </p>
                </div>
                <div className="mt-2 mb-3">
                    <p className=''>
                        <span className='text-xl font-bold mr-2 mt-2 mb-3'>E</span>For faster growth, the industry will have to look to emerging economies. These are becoming increasingly well established as places to visit. Now they are starting to provide more visitors too. According to McKinsey, a consulting firm, by the middle of the next decade almost a billion people will see their annual household incomes rise beyond $5,000-roughly the threshold for spending money on discretionary goods and services rather than simple necessities. Consumers' spending power in emerging economies will rise from $4 trillion in 2006 to more than $9 trillion-nearly the spending power of western Europe today
                    </p>
                </div>
                <div className="mt-2 mb-3">
                    <p className=''>
                        <span className='text-xl font-bold mr-2 mt-2 mb-3'>F</span>Some of that extra purchasing power will go on travel, at home and abroad. Western companies are flocking into the developing world to prepare for these new tourists. “The Middle East, India and China are the next big thing,” predicts Bill Marriott, the chairman and chief executive of Marriott, an American hotel chain. He thinks that the industry will be bigger in the Middle East, where he is planning to build 65 hotels by 2011, than in India. China will dwarf even the Middle East.
                    </p>
                </div>
                <div className="mt-2 mb-3">
                    <p className=''>
                        <span className='text-xl font-bold mr-2 mt-2 mb-3'>G</span> Last year the number of visits abroad by the Chinese reached 47m, 5m more than the number of foreign visitors to China. The Chinese also made 1.6 billion trips at home-a staggering total, but not much more than one each. According to WTTC forecasts, Chinese demand for travel and tourism will quadruple in value in the next ten years. At present China ranks a distant second, behind the United States, in terms of demand, but by 2018 it will have closed much of the gap.
                    </p>
                </div>
                <div className="mt-2 mb-3">
                    <p className=''>
                        <span className='text-xl font-bold mr-2 mt-2 mb-3'>H</span>Other emerging economies have woken up to the spending power of Chinese tourists. Mexico is one: AeroMéxico will begin direct flights between Mexico City and Shanghai at the end of May. The plan is to fly twice a week. In Vietnam, home to one of the fastest-growing tourist industries in the world, Chinese and other Asian tourists are overtaking Westerners. In the first 11 months of last year 507,000 visitors came to Vietnam from China, along with 442,000 from South Korea and 376,000 from America. The Tourism Authority of Thailand is also counting on more Chinese custom. It forecasts that 1.3m Chinese will visit the country this year, 10% more than last year when visitors were put off by Thailand's unsettled politics.
                    </p>
                </div>
            </div> <br />

            <div className='text-inherit Titles'>
                <div className="Titles text-inherit font-bold mb-2 PL-2 text-center">
                    <div className=''>Reading Passage-2 <br />Questions 14-26</div> <br />
                    <div className="mt-2 mb-3">Changes in the way we travel</div><br />
                </div>
            </div>

            <div>
                <div className="mt-2 mb-3">
                    <p className=''>
                        <span className='text-xl font-bold mr-2 mt-2 mb-3'>A</span>New technologies are reshaping the nature of air travel. In-flight internet access, and even the use of mobile phones, could soon become commonplace, on some routes at least. Entertainment systems are becoming increasingly sophisticated as airlines compete for customer loyalty. However, one of the most ambitious plans of the International Air Transport Association (IATA), and one which will probably take the longest, is switching baggage labels from printed bar-codes to wireless tags based on radio-frequency identification (RFID) technology.
                    </p>
                </div>
                <div className="mt-2 mb-3">
                    <p className=''>
                        <span className='text-xl font-bold mr-2 mt-2 mb-3'>B</span>The aim is to reduce the number of misplaced items of baggage, a headache for passengers and airlines alike. Of the 1.5 billion bags carried on commercial flights each year, around 0.7% go astray. Dealing with each lost bag costs airlines an average of $100, or around $1 billion a year for the industry as a whole, not to mention the loss of customer goodwill. A big part of the problem is that crumpled or torn bar-code labels are misread by the machines that process baggage as it travels between passenger and plane: the accuracy of printed bar-codes can be as low as 80%. RFID tags, in contrast, have accuracy rates exceeding 95%.</p>
                </div>
                <div className="mt-2 mb-3">
                    <p className=''>
                        <span className='text-xl font-bold mr-2 mt-2 mb-3'>C</span>As a bag with an RFID tag passes through a scanner, a pulse of radio waves awakens the tag, which responds by transmitting a small burst of data. The drawback with this approach, however, is that the association between tag and passenger is stored in the airline's database. So every time the tag is read, a real-time connection to that database is needed to work out how to route the bag. It works well for a single airline, but when more than one airline is involved, links are needed between their databases. That is why many in the industry favour a second approach involving the more expensive tags. These have the advantage that data can be written into them, including passenger and routing details, when the bag is checked in. This information then travels along with the bag, without the need for any database look-ups. But as RFID is adopted in other industries, economies of scale ought to reduce costs. RFID tags have in fact already been adopted, to varying degrees, by forward-thinking airlines and airports around the world. The aim of IATA's initiative is to introduce standards, to ensure interoperability, promote adoption, and make the benefits of these technologies available to the whole industry. The switch from proprietary, airline-specific technologies to open standards will, however, reduce the airlines' scope for differentiation. If all passengers are using the same facilities, how can airlines distinguish themselves from their rivals?
                    </p>
                </div>
                <div className="mt-2 mb-3">
                    <p className=''>
                        <span className='text-xl font-bold mr-2 mt-2 mb-3'>D</span>Primarily through the routes they fly and the prices they charge, of course; and the quality of their in-flight service. But while technology would seem to make competitive differentiation within the airport more difficult, it is simultaneously increasing the scope for differentiation in the air, through the provision of ever more elaborate in-flight services.
                    </p>
                </div>
                <div className="mt-2 mb-3">
                    <p className=''>
                        <span className='text-xl font-bold mr-2 mt-2 mb-3'>E</span>In-flight entertainment is now a critical part of how airlines position themselves, say Mr Harteveldt. One of the most advanced entertainment systems in current use is Virgin Atlantic's V:port, currently available in 13 of the airline's 31 aircraft, and being installed in all its new aircraft. Its most notable feature is video on demand, with 300 hours of films and television shows that can be called up by any passenger at any time. The video is stored on hard disks on a central server and is streamed to each seat. V:port also has a music-on-demand service and a selection of games, some of which (such as a trivia quiz) support multi-user play between passengers. All this, says Lysette Gauna, Virgin's head of in-flight entertainment, reinforces Virgin's association with fun and innovation. Similar systems will become available on rival airlines in future, says Ms Gauna, so Virgin is already developing an improved system.
                    </p>
                </div>
                <div className="mt-2 mb-3">
                    <p className=''>
                        <span className='text-xl font-bold mr-2 mt-2 mb-3'>F</span>Another trend is the growing availability of internet access on board aircraft. The state of the art here is Boeing's Connexion service, which uses a satellite broadband connection to create a Wi-Fi 'hotspot' inside the cabin. Lufthansa was the first airline to deploy the service, in May last year, and it intends to make it available on all long-haul flights by the middle of 2006. Japan Airlines and All Nippon Airways have also adopted the technology, and Singapore Airlines, China Airlines and SAS plan to follow suit. Prices vary with the duration of air time but the service typically costs $30 on flights of six hours or more, and $20 on flights of between three and six hours. A similar system is offered by Tenzing, a subsidiary of Airbus. It recently established a joint-venture with SITA called OnAir, with a view to exploiting what is expected to be the next big trend in airborne communications: the in-flight use of mobile phones. Contrary to popular belief, the main impediment to the use of mobile phones on planes is not interference with the aircraft's avionic systems. On a typical long-haul flight, says Mike Fitzgerald of Altobridge, a firm that makes technology to bridge satellite and cellular networks, 20 mobile phones are left switched on. Instead, the problem is that airborne mobile phones disrupt mobile networks on the ground. An airliner with 500 phones on board, whizzing across a city, would befuddle the network as the phones busily hopped from one base-station to the next.
                    </p>
                </div>
                <div className="mt-2 mb-3">
                    <p className=''>
                        <span className='text-xl font-bold mr-2 mt-2 mb-3'>G</span> Last year the number of visits abroad by the Chinese reached 47m, 5m more than the number of foreign visitors to China. The Chinese also made 1.6 billion trips at home-a staggering total, but not much more than one each. According to WTTC forecasts, Chinese demand for travel and tourism will quadruple in value in the next ten years. At present China ranks a distant second, behind the United States, in terms of demand, but by 2018 it will have closed much of the gap.
                    </p>
                </div>
                <div className="mt-2 mb-3">
                    <p className=''>
                        <span className='text-xl font-bold mr-2 mt-2 mb-3'>H</span>When the technical and regulatory rules have been sorted out, however, the small matter of in-flight phone etiquette will remain. 'I have concerns that it will be extremely annoying,' says Nancy McKinley of the International Airline Passengers Association, a body that represents frequent travelers. However, OnAir's market research found that long-haul travellers expressed more interest in internet access and text-messaging than voice calls, and Mr Harteveldt says his research has found that very few travellers want to make voice calls while in the air. It may be that the voice market will be stillborn, and more discreet data communications will predominate.
                    </p>
                </div>
            </div>

        </section>
    )
}

export default Test7Panel2