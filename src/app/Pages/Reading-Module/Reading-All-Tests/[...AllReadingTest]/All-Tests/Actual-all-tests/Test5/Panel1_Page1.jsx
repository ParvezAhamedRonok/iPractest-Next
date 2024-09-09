import React from 'react';
import '../../../TestAllStyles/Panel1All.css';
import { makeEditableAndHighlight } from "../../../Important/TextChangeFunc";






function Test5Panel1Page1({ AnswersData }) {
    //  submitted answers for showing at submit popup---------->>  
    let AllAnswersData = [
        ["56", "/", "Fifty six", "/", "FIFTY SIX", "/", "fifty six"],
        ["Living", "/", "living", "/", "LIVING"],
        ["66", "/", "Sixty six", "/", "SIXTY SIX", "/", "sixty six"],
        ["14", "/", "FOURTEEN", "/", "fourteen", "/", "Fourteen"],
        ["63", "/", "Sixty three", "/", "SIXTY THREE", "/", "sixty three"],
        ["Hollywood", "/", "Hollywood", "/", "HOLLYWOOD"],
        ["employment opportunities", "/", "Employment opportunities", "/", "EMPLOYMENT OPPORTUNITIES"],

        ["NOT GIVEN"], ["FALSE"], ["TRUE"], ["FALSE"], ["FALSE"], ["TRUE"], ["FALSE"],

        ["guided tour", "/", "Guided tour", "/", "GUIDED TOUR"],
        ["$36"],
        ["The NBC", "/", "the nbc", "/", "the NBC"],
        ["celebrities", "/", "Celebrities", "/", "CELEBRTIES"],
        ["Studio three", "/", "Studio Three", "/", "STUDIO THREE", "/", "Studio three"],
        ["display cases", "/", "Display cases", "/", "DISPLAY CASES"],
        
        ["C"], ["G"], ["E"], ["A"], ["D"], ["B"], ["F"], ["FALSE"], ["FALSE"], ["TRUE"], ["FALSE"], ["TRUE"],
        ["offerings", "/", "Offerings", "/", "OFFERINGS"],
        ["conservatism", "/", "Conservatism", "/", "CONSERVATISM"],
        ["challenge", "/", "Challenge", "/", "CHALLENGE"],
        ["raise", "/", "Raise", "/", "RAISE"],
        ["Creative", "/", "Creative", "/", "CREATIVE"],
        ["genre", "/", "Genre", "/", "GENRE"],
        ["niche", "/", "Niche", "NICHE"],
        ["guaranteed", "/", "Guaranteed", "/", "GUARANTEED"],

    ]
    AnswersData(AllAnswersData)








    return (
        <section className='mainSection p-4 mb-[50px]'
        onMouseDown={() =>{ makeEditableAndHighlight("green");}}>
            <div className='text-inherit Titles'>
                <div className="Titles text-inherit font-bold mb-2 PL-2 text-justify">
                    <div className=''>SECTION 1<br />Questions 1-13</div> <br />
                    <div>Read the text and answer Questions 1-7</div>
                    <div>In this Issue</div>
                </div>
            </div>

            <div>
                <p className='mb-3 mt-3'>
                    COVER STORY... 42 <br />
                    BUSINESS: Inside a Rogue Empire<br />
                    The collapsed B.C.C.I. contained a "black network" that carried out missions ranging from arms <br />sales to bribery to kidnapping ... 14<br />
                </p>
                <p className="mb-3">NATION: Browns vs. Blacks<br />
                    The two biggest minority groups clash over employment opportunities ... 26 <br /></p>
                <p className="mb-3">
                    WORLD: What Russia Got<br />
                    The London summit offers sacks of advice but no money<br />

                    INTERVIEW Robert Dallek defends a much maligned President... 6<br />
                </p>
                <p className="mb-3">
                    MEDICINE Should you worry about your dentist having AIDS?... 50<br />
                    The FDA just says no to a touted Alzheimer's drug ... 52<br />
                    EDUCATION Some of the best education happens below adult eye level... 54<br />
                </p>
                <p className="mb-3">
                    TECHNOLOGY How to become a home-movie mogul... 56<br /><br />
                    TELEVISION From Britain, a caustic look at Hollywood ... 57<br /><br />
                    PRESS When reporters recycle the news ... 59<br /><br />
                    IDEAS Was Carol Iannone the latest victim of "PC."? ... 59<br /><br />
                    RELIGION Marianne Williamson is Hollywood's New Age attraction ... 60<br /><br />
                </p>
                <p className="mb-3">
                    RELIGION Marianne Williamson is Hollywood's New Age attraction ... 60<br /><br />
                    LIVING For summer fun, people are getting stuck on Velcro balls ...61<br /><br />
                    Sports sandals are the hip soles for hip souls ... 61
                    DESIGN Mickey Mouse's firm becomes the big cheese in architecture ... 66<br /><br />
                    ESSAY What if we hold a primary and nobody comes? ... 70<br /><br />
                    LETTERS ... 8<br /><br />
                    MILESTONES ... 52<br /><br />
                    GRAPEVINE... 13<br /><br />
                    VIEW POINTS ... 63<br /><br />
                    COVER Photograph for TIME by Anis Hamdani<br /><br />

                </p>
            </div>
            <div className='text-inherit Titles mt-2'>
                <div className="Titles text-inherit font-bold mb-2 PL-2 text-justify">
                    <div className=''>Read the text and answer Questions 8-14 <br /><br />
                        On the Radio Tonight
                    </div>
                </div>
            </div>
            <div className='mt-3'>
                <p className="mb-3">
                    18:00-18:30 <br />
                    Jenny Stephens - Jefferson 37 Episode 3 <br />
                    3/4. Dr Abbotts claims clones are emotionless, while Jefferson and Lucy probe Carter 5's fate.  <br /><br />

                    18:30-19:00<br />
                    Short Stories by Robert Heinlein Ordeal in Space<br />
                    A tale by Robert A Heinlein that delves into the psyche of a traumatised spaceman. <br /><br />

                    19:00-19:30 Beyond Our Ken<br />
                    Kenneth Horne's freedom of Gigglesway - and 'Hornerama' probes love and marriage. <br /><br />

                    19:30-20:00<br />
                    Brothers in Law Tell 'Em the Tale<br />
                    2/12. Lawyer Roger's got an appointment with his boss, but worries in case the news is bad. <br /><br />

                    20:00-21:15 Shifting the Leaves<br />
                    Back in Cornwall's Porthant Bay, Marjorie Beaumont is coming to terms with her past. <br /><br />

                    21:15-21:30 Crossing the Glacier<br />
                    Two emotionally frozen women get to know and help each other. <br /><br />

                    21:30-22:00<br />
                    Mr Finchley Goes to Paris Episode 5<br />
                    5/6. In London, Robert gets into trouble and the solicitor's clerk receives an unlikely visitor  <br /><br />

                    22:00-22:15<br />
                    Idiots of Ants: Totally Gizmo Invisibility<br />
                    Invisibility: Fast-paced spoof of a futuristic gadget show first heard in 2020. <br /><br />

                    22:15-22:30<br />
                    Hamish and Dougal: You'll Have Had Your Tea Series 1, Murder Mystery<br />
                    2/4. The elderly Scotsmen probe Mrs Naughtie's odd disappearance amidst some unsavoury rumours.  <br /><br />

                    22:30-23:00<br />
                    Bleak Expectations Series 1, A Young Love Mercilessly Dismembered 5/6. Pip falls in love - but great drama awaits. Stars Richard Johnson. <br /><br />

                    23:00-23:30<br />
                    Lee and Herring's Fist of Fun Episode 2<br />
                    2/6. The cult series hits Plymouth University, Exmouth. With Stewart Lee and Richard Herring.  <br /><br />

                    23:30-00:00<br />
                    Four Sad Faces Episode 2<br />
                    2/2. Quirky sketches from Jack Bernhardt, Tobi Wilson, Tom Crowley and Rachel Lerman. <br /><br />
                </p>

            </div>


            <div className='text-inherit Titles mt-3 mb-3'>
                <div className="Titles text-inherit font-bold mb-2 PL-2 text-center">
                    <div className=''>Reading Passage -2 <br /> Questions 15-27</div> <br />
                    <div>Read the text and answer Questions 15-20</div>
                    <div>TV Studio Tour</div>
                </div>
            </div>

            <div>
                <div className="mt-2 mb-3">
                    <p className='mb-2'>Of the commercial TV networks, only NBC Studios in Burbank offers the public a behind-the-scenes look at the inner workings of its television operation.</p>
                    <p className=''>
                        <span className='text-xl font-bold mr-2 '>A</span>ABC TV doesn't offer a guided tour of their studio. Neither does CBS, nor even Fox. In fact, if you want to see the inside of a TV studio, your only other choice is over at KCET - the local public television (PBS) station, Channel 28 , which offers a free guided tour of its historic Monogram Studios.
                    </p>
                </div>
                <div className="mt-2 mb-3">
                    <p className=''>
                        <span className='text-xl font-bold mr-2  '>B</span> The studio tour at NBC isn't free, but it is reasonably priced when compared with the cost of the tours provided by the local motion picture studios. NBC's $7.50 admission charge seems like a bargain compared with the $36 charged by Universal Studios or the $30 charged by nearby Warner Brothers. It also beats the $15 price of the Paramount Studiostour..</p>
                </div>
                <div className="mt-2 mb-3">
                    <p className=''>
                        <span className='text-xl font-bold mr-2  '>C</span>The NBC tour is a modest one, though. You'll find no audioanimatronic sharks snapping at your heels here, no 50-foot apes or flying DeLoreans. Unlike Universal, the NBC Studio tour is not a theme park in disguise.
                        And unlike the Warner Bros tour, there are no mini trams or giant back lots to explore. It's just a 70-minute, indoor walking tour, offering a down-to-earth view of a working television studio.
                    </p>
                </div>
                <div className="mt-2 mb-3">
                    <p className=''>
                        <span className='text-xl font-bold mr-2  '>D</span>Their guided studio tour gives you a chance to go where TV history was made; it takes you deep inside the NBC studio. The tour shows you the vast warehouse areas where props are stored, and construction areas where craftsmen are hard at work building realistic sets, it shows you examples of special-effects hardware, and gives you a peek at the NBC wardrobe department.
                        The tour leads you through the studio's labyrinth of hallways, past the makeup department, through the Peacock Store, and out into the parking lot where Jay Leno and other celebrities park their cars. You even get a glimpse of the infamous NBC commissary.
                    </p>
                </div>
                <div className="mt-2 mb-3">
                    <p className=''>
                        <span className='text-xl font-bold mr-2  '>E</span>Then it's up to Studio Three, the set where the "Tonight Show" is taped. (Jay Leno moved the show to this building in 1994, from the historic Studio One where Johnny Carson taped his shows.) There, tour guests get to sit in the same seats as the "Tonight Show" studio audience and see that famous, familiar "Tonight Show" set up-close.

                        The tour shows you videos about NBC's history, gives you demonstrations of sound-effects machines, and explains how such TV effects as 'chroma key' is brought to life. You might even bump into a minor celebrity along the way. And they accomplish all of this in less than 90 minutes. It's a polished, professional little tour which probably satisfies most tourists' urge for a behind-the-scenes glimpse of some aspect of Hollywood.
                    </p>
                </div>
                <div className="mt-2 mb-3">
                    <p className=''>
                        <span className='text-xl font-bold mr-2  '>F</span>  The problem is that the NBC tour is just a little too slick. In fact, it's superficial - bordering on condescending. Tour guests don't actually visit the wardrobe department, for instance, they just walk past it, and look at mannequins in a picture window. Tour guests don't get to see the actual makeup or special-effects departments in action, instead they are merely shown simple display cases filled with related props. The tour guide points to the NBC commissary from afar, but they won't let you actually go inside that well known cafeteria. When they take visitors out to the studio parking lot, they actually expect us to be impressed by the oil stain left by Jay Leno's car.
                    </p>
                </div>
                <div className="mt-2 mb-3">
                    <p className=''>
                        <span className='text-xl font-bold mr-2  '>G</span> You get the feeling that someone in charge thinks the tour guests have just fallen off the turnip truck. When soap opera actress Deidre Hall (from "Days of Our Lives") "accidentally" walks by and waves hello, you're supposed to believe that it was a blissful coincidence. When they demonstrate the well-known blue-screen process (by making a volunteer "fly" in a Superman cape against a blue background) we are supposed to be dazzled by 20-year-old video technology that in this day of home computers and videocams is old hat to just about everyone taking the tour.
                        Guests are "treated like tourists" in the worst sense of that term. The well groomed tour guides are friendly and polite, but you are always aware that, as a visitor, you are being kept on a very tight leash.
                    </p>
                </div>
            </div>

        </section>
    )
}

export default Test5Panel1Page1