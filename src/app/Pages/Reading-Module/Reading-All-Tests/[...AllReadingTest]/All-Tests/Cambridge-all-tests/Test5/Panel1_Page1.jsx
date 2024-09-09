import React from 'react';
import '../../../TestAllStyles/Panel1All.css';
import { makeEditableAndHighlight } from "../../../Important/TextChangeFunc";

function Panel1({ AnswersData }) {
  let AllAnswersData = [
    ["population"],
    ["suburbs"],
    ["businessmen"],
    ["funding"],
    ["press"],
    ["soil"],
    ["FALSE"], ["NOT GIVEN"], ["TRUE"], ["TRUE"], ["FALSE"], ["FALSE"], ["NOT GIVEN"], 
    ["A"], ["F"], ["E"], ["D"],
    ["fortress"],
    ["bullfights"],
    ["opera"],
    ["salt"],
    ["shops"],
    ["C"], ["A"], ["B"], ["B"], 
    ["H"], ["J"], ["F"], ["B"], ["D"], 
    ["NOT GIVEN"], ["NO"], ["NO"], ["YES"], 
    ["B"], ["C"], ["A"], ["B"], ["D"]

  ]

  //  submitted answers for showing at submit popup---------->>             
  AnswersData(AllAnswersData)







  return (
    <section className='mainSection p-4 mb-[50px]'
    onMouseDown={() =>{ makeEditableAndHighlight("green");}}>
      <div className='text-inherit Titles'>
        <div className="Titles text-inherit font-bold mb-2 text-justify">
          <div className=''>SECTION 1 <br />READING PASSAGE 1</div> <br />
          <h5>You should spend about 20 minutes on Questions 1-13 which are based on Reading Passage 1 below.</h5> 
          <h5 className='mt-4 text-xl'>The development of the London underground railway</h5> <br />


        </div>
      </div>

      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>A</span>In the first half of the 1800s, London’s population grew at an astonishing rate, and the central area became increasingly congested. In addition, the expansion of the overground railway network resulted in more and more passengers arriving in the capital. However, in 1846, a Royal Commission decided that the railways should not be allowed to enter the City, the capital’s historic and business centre. The result was that the overground railway stations formed a ring around the City. The area within consisted of poorly built, overcrowded slums and the streets were full of horse-drawn traffic. Crossing the City became a nightmare. It could take an hour and a half to travel 8 km by horse-drawn carriage or bus. Numerous schemes were proposed to resolve these problems, but few succeeded.
        </p>
      </div>
      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>B</span>Amongst the most vocal advocates for a solution to London’s traffic problems was Charles Pearson, who worked as a solicitor for the City of London. He saw both social and economic advantages in building an underground railway that would link the overground railway stations together and clear London slums at the same time. His idea was to relocate the poor workers who lived in the inner-city slums to newly constructed suburbs, and to provide cheap rail travel for them to get to work. Pearson’s ideas gained support amongst some businessmen and in 1851 he submitted a plan to Parliament. It was rejected, but coincided with a proposal from another group for an underground connecting line, which Parliament passed..</p>
      </div>
      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>C</span>The two groups merged and established the Metropolitan Railway Company in August 1854. The company’s plan was to construct an underground railway line from the Great Western Railway’s (GWR) station at Paddington to the edge of the City at Farringdon Street – a distance of almost 5 km. The organisation had difficulty in raising the funding for such a radical and expensive scheme, not least because of the critical articles printed by the press. Objectors argued that the tunnels would collapse under the weight of traffic overhead, buildings would be shaken and passengers would be poisoned by the emissions from the train engines. However, Pearson and his partners persisted.
        </p>
      </div>
      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>D</span>The GWR, aware that the new line would finally enable them to run trains into the heart of the City, invested almost £250,000 in the scheme. Eventually, over a five-year period, £1m was raised. The chosen route ran beneath existing main roads to minimise the expense of demolishing buildings. Originally scheduled to be completed in 21 months, the construction of the underground line took three years. It was built just below street level using a technique known as ‘cut and cover’. A trench about ten metres wide and six metres deep was dug, and the sides temporarily help up with timber beams. Brick walls were then constructed, and finally a brick arch was added to create a tunnel. A two-metre-deep layer of soil was laid on top of the tunnel and the road above rebuilt.
        </p>
      </div>
      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>E</span>The Metropolitan line, which opened on 10 January 1863, was the world’s first underground railway. On its first day, almost 40,000 passengers were carried between Paddington and Farringdon, the journey taking about 18 minutes. By the end of the Metropolitan’s first year of operation, 9.5 million journeys had been made. <br /> <br />

          Even as the Metropolitan began operation, the first extensions to the line were being authorised; these were built over the next five years, reaching Moorgate in the east to London and Hammersmith in the west. The original plan was to pull the trains with steam locomotives, using firebricks in the boilers to provide steam, but these engines were never introduced. Instead, the line used specially designed locomotives that were fitted with water tanks in which steam could be condensed. However, smoke and fumes remained a problem, even though ventilation shafts were added to the tunnels. <br /> <br />
          Despite the extension of the underground railway, by the 1880s, congestion on London’s streets had become worse. The problem was partly that the existing underground lines formed a circuit around the centre of London and extended to the suburbs, but did not cross the capital’s centre. The ‘cut and cover’ method of construction was not an option in this part of the capital. The only alternative was to tunnel deep underground.
        </p>
      </div>
      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>F</span>Although the technology to create these tunnels existed, steam locomotives could not be used in such a confined space. It wasn’t until the development of a reliable electric motor, and a means of transferring power from the generator to a moving train, that the world’s first deep-level electric railway, the City & South London, became possible. The line opened in 1890, and ran from the City to Stockwell, south of the River Thames. The trains were made up of three carriages and driven by electric engines. The carriages were narrow and had tiny windows just below the roof because it was thought that passengers would not want to look out at the tunnel walls. The line was not without its problems, mainly caused by an unreliable power supply, Although the City & South London Railway was a great technical achievement, it did not make a profit. Then, in 1900, the Central London Railway, known as the ‘Tuppenny Tube’, began operation using new electric locomotives. It was very popular and soon afterwards new railways and extensions were added to the growing tube network. By 1907, the heart of today’s Underground system was in place.
        </p>
      </div> <br />

      <div className='text-inherit Titles mt-5 mb-2'>
        <div className="Titles text-inherit text-center font-bold mb-2 ">
          <div className='underline'>READING PASSAGE 2</div> <br />
          <h5>You should spend about 20 minutes on Questions 14-26 which are based on Reading Passage 2 below. </h5> 
          <h5 className='mt-4 text-xl'>Stadiums: past, present and future</h5> <br />
        </div>
      </div>



      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>A</span>Stadiums are among the oldest forms of urban architecture: vast stadiums where the public could watch sporting events were at the centre of western city life as far back as the ancient Greek and Roman Empires, well before the construction of the great medieval cathedrals and the grand 19th- and 20th-century railway stations which dominated urban skylines in later eras.

          Today, however, stadiums are regarded with growing scepticism. Construction costs can soar above £1 billion, and stadiums finished for major events such as the Olympic Games or the FIFA World Cup have notably fallen into disuse and disrepair.

          But this need not be the cause. History shows that stadiums can drive urban development and adapt to the culture of every age. Even today, architects and planners are finding new ways to adapt the mono-functional sports arenas which became emblematic of modernisation during the 20th century.
        </p>
      </div>
      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>B</span>The amphitheatre* of Arles in southwest France, with a capacity of 25,000 spectators, is perhaps the best example of just how versatile stadiums can be. Built by the Romans in 90 AD, it became a fortress with four towers after the fifth century, and was then transformed into a village containing more than 200 houses. With the growing interest in conservation during the 19th century, it was converted back into an arena for the staging of bullfights, thereby returning the structure to its original use as a venue for public spectacles.

          Another example is the imposing arena of Verona in northern Italy, with space for 30,000 spectators, which was built 60 years before the Arles amphitheatre and 40 years before Rome’s famous Colosseum. It has endured the centuries and is currently considered one of the world’s prime sites for opera, thanks to its outstanding acoustics.</p>
      </div>
      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>C</span>The area in the centre of the Italian town of Lucca, known as the Piazza dell’ Anfiteatro, is yet another impressive example of an amphitheatre becoming absorbed into the fabric of the city. The site evolved in a similar way to Arles and was progressively filled with buildings from the Middle Ages until the 19th century, variously used as houses, a salt depot and a prison. But rather than reverting to an arena, it became a market square, designed by Romanticist architect Lorenzo Nottolini. Today, the ruins of the amphitheatre remain embedded in the various shops and residences surrounding the public square.
        </p>
      </div>
      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>D</span>There are many similarities between modern stadiums and the ancient amphitheatres intended for games. But some of the flexibility was lost at the beginning of the 20th century, as stadiums were developed using new products such as steel and reinforced concrete, and made use of bright lights for night-time matches.

          Many such stadiums are situated in suburban areas, designed for sporting use only and surrounded by parking lots. These factors mean that they may not be as accessible to the general public, require more energy to run and contribute to urban heat.
        </p>
      </div>
      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>E</span>But many of today’s most innovative architects see scope for the stadium to help improve the city. Among the current strategies, two seem to be having particular success: the stadium as an urban hub, and as a power plant.

          There’s a growing trend for stadiums to be equipped with public spaces and services that serve a function beyond sport, such as hotels, retail outlets, conference centres, restaurants and bars, children’s playgrounds and green space. Creating mixed-use developments such as this reinforces compactness and multi-functionality, making more efficient use of land and helping to regenerate urban spaces.

          This opens the space up to families and a wider cross-section of society, instead of catering only to sportspeople and supporters. There have been many examples of this in the UK: the mixed-use facilities at Wembley and Old Trafford have become a blueprint for many other stadiums in the world.
        </p>
      </div>
      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>F</span>The phenomenon of stadium as power stations has arisen from the idea that energy problems can be overcome by integrating interconnected buildings by means of a smart grid, which is an electricity supply network that uses digital communications technology to detect and react to local changes in usage, without significant energy losses. Stadiums are ideal for these purposes, because their canopies have a large surface area for fitting photovoltaic panels and rise high enough (more than 40 metres) to make use of micro wind turbines.

          Freiburg Mage Solar Stadium in Germany is the first of a new wave of stadiums as power plants, which also includes the Amsterdam Arena and the Kaohsiung Stadium. The latter, inaugurated in 2009, has 8,844 photovoltaic panels producing up to 1.14 GWh of electricity annually. This reduces the annual output of carbon dioxide by 660 tons and supplies up to 80 percent of the surrounding area when the stadium is not in use. This is proof that a stadium can serve its city, and have a decidedly positive impact in terms of reduction of CO2 emissions.
        </p>
      </div>

      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>G</span>Sporting arenas have always been central to the life and culture of cities. In every era, the stadium has acquired new value and uses: from military fortress to residential village, public space to theatre and most recently a field for experimentation in advanced engineering. The stadium of today now brings together multiple functions, thus helping cities to create a sustainable future. <br /> <br /> <br />

          —————-

          * amphitheatre: (especially in Greek and Roman architecture) an open circular or oval building with a central space surrounded by tiers of seats for spectators, for the presentation of dramatic or sporting events
        </p>
      </div>


    </section>
  )
}

export default Panel1