import React from 'react';
import '../../../TestAllStyles/Panel1All.css';
import { makeEditableAndHighlight } from "../../../Important/TextChangeFunc";

function Panel1({ AnswersData }) {
  let AllAnswersData = [
    ["deer antlers"],
    ["timber posts"],
    ["tree trunks"],
    ["oxen"],
    ["glaciers"],
    ["druids"],
    ["burial"],
    ["calendar"],
    ["TRUE"], ["FALSE"], ["FALSE"], ["TRUE"], ["NOT GIVEN"], ["C"], ["A"], ["B"], ["D"], ["C"], ["D"], ["TRUE"],
    ["NOT GIVEN"], ["FALSE"], ["TRUE"], ["C"], ["A"], ["E"], ["NOT GIVEN"], ["NOT GIVEN"], ["TRUE"], ["FALSE"],
    ["TRUE"], ["NOT GIVEN"], ["FALSE"],
    ["transport"],
    ["staircases"],
    ["engineering"],
    ["rule"],
    ["Roman"],
    ["Paris"],
    ["outwards"]]

  //  submitted answers for showing at submit popup---------->>             
  AnswersData(AllAnswersData)







  return (
    <section className='mainSection p-4 mb-[50px]'
    onMouseDown={() =>{
      // console.log(window.getSelection().toString());
      makeEditableAndHighlight("green");
  }}>
      <div className='text-inherit Titles'>
        <div className="Titles text-inherit font-bold mb-2 text-justify">
          <div className=''>SECTION 1 <br />READING PASSAGE 1</div> <br />
          <div className='text-cener w-full mt-2'>Stonehenge</div> <br />
          <h5>You should spend about 20 minutes on Questions 1-13 which are based on Reading Passage 1 below.</h5> <br />

        </div>
      </div>

      <div>
        <p className=''>
          <span className='text-xl font-bold mr-2'>A</span>For centuries, historians and archaeologists have puzzled over the many mysteries of Stonehenge, a prehistoric monument that took an estimated 1,500 years to erect. Located on Salisbury Plain in southern England, it is comprised of roughly 100 massive upright stones placed in a circular layout. <br /> <br />

          Archaeologists believe England’s most iconic prehistoric ruin was built in several stages with the earliest constructed 5,000 or more years ago. First, Neolithic* Britons used primitive tools, which may have been fashioned out of deer antlers, to dig a massive circular ditch and bank, or henge. Deep pits dating back to that era and located within the circle may have once held a ring of timber posts, according to some scholars.
        </p>
      </div>
      <div>
        <p className=''>
          <span className='text-xl font-bold mr-2'>B</span>Several hundred years later, it is thought, Stonehenge’s builders hoisted an estimated 80 bluestones, 43 of which remain today, into standing positions and placed them in either a horseshoe or circular formation. These stones have been traced all the way to the Preseli Hills in Wales, some 300 kilometres from Stonehenge. How, then, did prehistoric builders without sophisticated tools or engineering haul these boulders, which weigh up to four tons, over such a great distance? <br /> <br />
          According to one long-standing theory among archaeologists, Stonehenge’s builders fashioned sledges and rollers out of tree trunks to lug the bluestones from the Preseli Hills. They then transferred the boulders onto rafts and floated them first along the Welsh coast and then up the River Avon toward Salisbury Plain; alternatively, they may have towed each stone with a fleet of vessels. More recent archaeological hypotheses have them transporting the bluestones with supersized wicker baskets on a combination of ball bearings and long grooved planks, hauled by oxen. </p>
      </div>
      <div>
        <p className=''>
          <span className='text-xl font-bold mr-2'>C</span>As early as the 1970s, geologists have been adding their voices to the debate over how Stonehenge came into being. Challenging the classic image of industrious builders pushing, carting, rolling or hauling giant stones from faraway Wales, some scientists have suggested that it was glaciers, not humans, that carried the bluestones to Salisbury Plain. Most archaeologists have remained sceptical about this theory, however, wondering how the forces of nature could possibly have delivered the exact number of stones needed to complete the circle. <br /> <br />

          The third phase of construction took place around 2000 BCE. At this point, sandstone slabs – known as ‘sarsens’ – were arranged into an outer crescent or ring; some were assembled into the iconic three-pieced structures called trilithons that stand tall in the centre of Stonehenge. Some 50 of these stones are now visible on the site, which may once have contained many more. Radiocarbon dating has revealed that work continued at Stonehenge until roughly 1600 BCE, with the bluestones in particular being repositioned multiple times.
        </p>
      </div>
      <div>
        <p className=''>
          <span className='text-xl font-bold mr-2'>D</span>But who were the builders of Stonehenge? In the 17th century, archaeologist John Aubrey made the claim that Stonehenge was the work of druids, who had important religious, judicial and political roles in Celtic** society. This theory was widely popularized by the antiquarian William Stukeley, who had unearthed primitive graves at the site. Even today, people who identify as modern druids continue to gather at Stonehenge for the summer solstice. However, in the mid-20th century, radiocarbon dating demonstrated that Stonehenge stood more than 1,000 years before the Celts inhabited the region. <br /> <br />


          Many modern historians and archaeologists now agree that several distinct tribes of people contributed to Stonehenge, each undertaking a different phase of its construction. Bones, tools and other artefacts found on the site seem to support this hypothesis. The first stage was achieved by Neolithic agrarians who were likely to have been indigenous to the British Isles. Later, it is believed, groups with advanced tools and a more communal way of life left their mark on the site. Some believe that they were immigrants from the European continent, while others maintain that they were probably native Britons, descended from the original builders.
        </p>
      </div>
      <div>
        <p className=''>
          <span className='text-xl font-bold mr-2'>E</span> If the facts surrounding the architects and construction of Stonehenge remain shadowy at best, the purpose of the striking monument is even more of a mystery. While there is consensus among the majority of modern scholars that Stonehenge once served the function of burial ground, they have yet to determine what other purposes it had. <br /> <br />
          In the 1960s, the astronomer Gerald Hawkins suggested that the cluster of megalithic stones operated as a form of calendar, with different points corresponding to astrological phenomena such as solstices, equinoxes and eclipses occurring at different times of the year. While his theory has received a considerable amount of attention over the decades, critics maintain that Stonehenge’s builders probably lacked the knowledge necessary to predict such events or that England’s dense cloud cover would have obscured their view of the skies.<br /> <br />
          More recently, signs of illness and injury in the human remains unearthed at Stonehenge led a group of British archaeologists to speculate that it was considered a place of healing, perhaps because bluestones were thought to have curative powers.<br /> <br />
          * Neolithic – The era, also known as the New Stone Age, which began around 12,000 years ago and ended around 3500 BCE
          <br /> <br />
          ** Celtic – The Celts were people who lived in Britain and northwest Europe during the Iron Age from 600 BCE to 43 CE
        </p>
      </div>

      <div className='text-inherit Titles mb-4 mt-[40px]'>
        <div className="Titles text-inherit font-bold mb-2 text-center">
          <div className='underline'>READING PASSAGE 2</div> <br />
          <h5>You should spend about 20 minutes on Questions 14-26 which are based on Reading Passage 2 below.</h5> <br />
          <h5 className='w-full '>
            <h5 className=''> Living with artificial intelligence </h5><br />
            Powerful artificial intelligence (AI) needs to be reliably aligned with human values, but
            does this mean AI will eventually have to
            police those values?
          </h5>
        </div>
      </div>

      <div className='mb-2'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>A</span> This has been the decade of AI, with one astonishing feat after another. A chess-playing AI that can defeat not only all human chess players, but also all previous human-programmed chess machines, after learning the game in just four hours? That’s yesterday’s news, what’s next? True, these prodigious accomplishments are all in so-called narrow AI, where machines perform highly specialised tasks. But many experts believe this restriction is very temporary. By mid-century, we may have artificial general intelligence (AGI) – machines that can achieve human-level performance on the full range of tasks that we ourselves can tackle. <br /> <br />

          If so, there’s little reason to think it will stop there. Machines will be free of many of the physical constraints on human intelligence. Our brains run at slow biochemical processing speeds on the power of a light bulb, and their size is restricted by the dimensions of the human birth canal. It is remarkable what they accomplish, given these handicaps. But they may be as far from the physical limits of thought as our eyes are from the incredibly powerful Webb Space Telescope.
        </p>
      </div>
      <div className='mb-2'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>B</span> Once machines are better than us at designing even smarter machines, progress towards these limits could accelerate. What would this mean for us? Could we ensure a safe and worthwhile coexistence with such machines? On the plus side, AI is already useful and profitable for many things, and super AI might be expected to be super useful and super profitable. But the more powerful AI becomes, the more important it will be to specify its goals with great care. Folklore is full of tales of people who ask for the wrong thing, with disastrous consequences- King Midas, for example, might have wished that everything he touched turned to gold, but didn’t really intend this to apply to his breakfast. <br /> <br />

          So we need to create powerful AI machines that are ‘human-friendly’- that have goals reliably aligned with our own values. One thing that makes this task difficult is that we are far from reliably human-friendly ourselves. We do many terrible things to each other and to many other creatures with whom we share the planet. If superintendent machines don’t do a lot better than us, we’ll be in deep trouble. We’ll have powerful new intelligence amplifying the dark sides of our own fallible natures. </p>
      </div>
      <div className='mb-2'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>C</span>For safety’s sake, then, we want the machines to be ethically as well as cognitively superhuman. We want them to aim for the moral high ground, not for the troughs in which many of us spend some of our time. Luckily they’ll be smart enough for the job. If there are routes to the moral high ground, they’ll be better than us at finding them, and steering us in the right direction. <br /> <br />

          However, there are two big problems with this utopian vision. One is how we get the machines started on the journey, the other is what it would mean to reach this destination. The ‘getting started’ problem is that we need to tell the machines what they’re looking for with sufficient clarity that we can be confident they will find it – whatever ‘it’ actually turns out to be. This won’t be easy, given that we are tribal creatures and conflicted about the ideals ourselves. We often ignore the suffering of strangers, and even contribute to it, at least indirectly. How then, do we point machines in the direction of something better?
        </p>
      </div>
      <div className='mb-2'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>D</span>As for the ‘destination’ problem, we might, by putting ourselves in the hands of these moral guides and gatekeepers, be sacrificing our own autonomy – an important part of what makes us human. Machines who are better than us at sticking to the moral high ground may be expected to discourage some of the lapses we presently take for granted. We might lose our freedom to discriminate in favour of our own communities, for example. <br /> <br />

          Loss of freedom to behave badly isn’t always a bad thing, of course: denying ourselves the freedom to put children to work in factories, or to smoke in restaurants are signs of progress. But are we ready for ethical silicon police limiting our options? They might be so good at doing it that we won’t notice them; but few of us are likely to welcome such a future. <br /> <br />

          These issues might seem far-fetched, but they are to some extent already here. AI already has some input into how resources are used in our National Health Service (NHS) here in the UK, for example. If it was given a greater role, it might do so much more efficiently than humans can manage, and act in the interests of taxpayers and those who use the health system. However, we’d be depriving some humans (e.g. senior doctors) of the control they presently enjoy. Since we’d want to ensure that people are treated equally and that policies are fair, the goals of AI would need to be specified correctly.
        </p>
      </div>
      <div className='mb-2'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>E</span> We have a new powerful technology to deal with- itself, literally, a new way of thinking. For our own safety, we need to point these new thinkers in the right direction, and get them to act well for us. It is not yet clear whether this is possible, but if it is, it will require a cooperative spirit, and a willingness to set aside self-interest. <br /> <br />

          Both general intelligence and moral reasoning are often thought to be uniquely human capacities. But safety seems to require that we think of them as a package: if we are to give general intelligence to machines, we’ll need to give them moral authority, too. And where exactly would that leave human beings? All the more reason to think about the destination now, and to be careful about what we wish for.
        </p>
      </div>
    </section>
  )
}

export default Panel1