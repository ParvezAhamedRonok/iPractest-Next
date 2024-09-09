import React from 'react';
import '../../../TestAllStyles/Panel1All.css';
import { makeEditableAndHighlight } from "../../../Important/TextChangeFunc";


function Panel1Q_2() {
  return (
    <section className='mainSection p-4 mb-[50px]'
    onMouseDown={() => {
        // console.log(window.getSelection().toString());
        makeEditableAndHighlight("green");
      }}>
      <div className='text-inherit'>
        <div className="Titles text-inherit font-bold mb-2 text-justify">
          <div className=''>SECTION 2 <br /> READING PASSAGE 2</div> <br />
          <h5>You should spend about 20 minutes on <span className='font-bold'>Questions 14-26</span> which are based on Reading Passage 2 below. </h5> <br />
          <h5>Forest management in Pennsylvania, USA</h5> <br />

        </div>
      </div>
      <div className='main-Passages'>
        <h5>How managing low-quality wood (also known as low-use wood) for bioenergy can encourage sustainable forest management</h5> <br />
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>A</span>A tree’s ‘value’ depends on several factors including its species, size, form, condition, quality, function, and accessibility, and depends on the management goals for a given forest. The same tree can be valued very differently by each person who looks at it. A large, straight black cherry tree has high value as timber to be cut into logs or made into furniture, but for a landowner more interested in wildlife habitat, the real value of that stem (or trunk) may be the food it provides to animals. Likewise, if the tree suffers from black knot disease, its value for timber decreases, but to a woodworker interested in making bowls, it brings an opportunity for a unique and beautiful piece of art.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>B</span> In the past, Pennsylvania landowners were solely interested in the value of their trees as high-quality timber. The norm was to remove the stems of highest quality and leave behind poorly formed trees that were not as well suited to the site where they grew. This practice, called ‘high-grading’, has left a legacy of ‘low-use wood’ in the forests. Some people even call these ‘junk trees’, and they are abundant in Pennsylvania. These trees have lower economic value for traditional timber markets, compete for growth with higher-value trees, shade out desirable regeneration and decrease the health of a stand leaving it more vulnerable to poor weather and disease. Management that specifically targets low-use wood can help landowners manage these forest health issues, and wood energy markets help promote this.</p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>C</span>Wood energy markets can accept less expensive wood material of lower quality than would be suitable for traditional timber markets. Most wood used for energy in Pennsylvania is used to produce heat or electricity through combustion. Many schools and hospitals use wood boiler systems to heat and power their facilities, many homes are primarily heated with wood, and some coal plants incorporate wood into their coal streams to produce electricity. Wood can also be gasified for electrical generation and can even be made into liquid fuels like ethanol and gasoline for lorries and cars. All these products are made primarily from low-use wood. Several tree- and plant-cutting approaches, which could greatly improve the long-term quality of a forest, focus strongly or solely on the use of wood for those markets.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>D</span>
            One such approach is called a Timber Stand Improvement (TSI) Cut. In a TSI Cut, really poor-quality tree and plant material is cut down to allow more space, light, and other resources to the highest-valued stems that remain. Removing invasive plants might be another primary goal of a TSI Cut. The stems that are left behind might then grow in size and develop more foliage and larger crowns or tops that produce more coverage for wildlife; they have a better chance to regenerate in a less crowded environment. TSI Cuts can be tailored to one farmer’s specific management goals for his or her land.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>E</span>UAnother approach that might yield a high amount of low-use wood is a Salvage Cut. With the many pests and pathogens visiting forests including hemlock wooly adelgid, Asian longhomed beetle, emerald ash borer, and gypsy moth, to name just a few, it is important to remember that those working in the forests can help ease these issues through cutting procedures. These types of cut reduce the number of sick trees and seek to manage the future spread of a pest problem. They leave vigorous trees that have stayed healthy enough to survive the outbreak.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>F</span> A Shelterwood Cut, which only takes place in a mature forest that has already been thinned several times, involves removing all the mature trees when other seedlings have become established. This then allows the forester to decide which tree species are regenerated. It leaves a young forest where all trees are at a similar point in their growth. It can also be used to develop a two-tier forest so that there are two harvests and the money that comes in is spread out over a decade or more.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>G</span> Thinnings and dense and dead wood removal for fire prevention also center on the production of low-use wood. However, it is important to remember that some retention of what many would classify as low-use wood is very important. The tops of trees that have been cut down should be left on the site so that their nutrients cycle back into the soil. In addition, trees with many cavities are extremely important habitats for insect predators like woodpeckers, bats and small mammals. They help control problem insects and increase the health and resilience of the forest. It is also important to remember that not all small trees are low-use. For example, many species like hawthorn provide food for wildlife. Finally, rare species of trees in a forest should also stay behind as they add to its structural diversity.
          </p>
        </div>
      </div> <br />

      <div className='text-inherit mt-5'>
        <div className="Titles text-inherit font-bold mb-2 text-center">
          <div className=''>READING PASSAGE 3</div> <br />
          <h5>You should spend about 20 minutes on <span className='text-xl font-bold'>Questions 27-40</span> which are based on Reading Passage 3 below.</h5> <br />
          <h5>Conquering Earth’s space junk problem</h5> <br />
          <h5>Satellites, rocket shards and collision debris are creating major traffic risks in orbit around the planet. Researchers are working to reduce these threats</h5> <br />
       
        </div>
      </div>
      <div className='main-Passages'>
       <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>A</span>Last year, commercial companies, military and civil departments and amateurs sent more than 400 satellites into orbit, over four times the yearly average in the previous decade. Numbers could rise even more sharply if leading space companies follow through on plans to deploy hundreds to thousands of large constellations of satellites to space in the next few years.

            All that traffic can lead to disaster. Ten years ago, a US commercial Iridium satellite smashed into an inactive Russian communications satellite called Cosmos-2251, creating thousands of new pieces of space shrapnel that now threaten other satellites in low Earth orbit – the zone stretching up to 2,000 kilometres in altitude. Altogether, there are roughly 20,000 human-made objects in orbit, from working satellites to small rocket pieces. And satellite operators can’t steer away from every potential crash, because each move consumes time and fuel that could otherwise be used for the spacecraft’s main job.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>B</span>Concern about space junk goes back to the beginning of the satellite era, but the number of objects in orbit is rising so rapidly that researchers are investigating new ways of attacking the problem. Several teams are trying to improve methods for assessing what is in orbit, so that satellite operators can work more efficiently in ever-more-crowded space. Some researchers are now starting to compile a massive data set that includes the best possible information on where everything is in orbit. Others are developing taxonomies of space – working on measuring properties such as the shape and size of an object, so that satellite operators know how much to worry about what’s coming their way.

            The alternative, many say, is unthinkable. Just a few uncontrolled space crashes could generate enough debris to set off a runaway cascade of fragments, rendering near-Earth space unusable. ‘If we go on like this, we will reach a point of no return,’ says Carolin Frueh, an astrodynamical researcher at Purdue University in West Lafayette, Indiana.</p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>C</span>Even as our ability to monitor space objects increases, so too does the total number of items in orbit. That means companies, governments and other players in space are collaborating in new ways to avoid a shared threat. International groups such as the Inter-Agency Space Debris Coordination Committee have developed guidelines on space sustainability. Those include inactivating satellites at the end of their useful life by venting pressurised materials or leftover fuel that might lead to explosions. The intergovernmental groups also advise lowering satellites deep enough into the atmosphere that they will burn up or disintegrate within 25 years. But so far, only about half of all missions have abided by this 25-year goal, says Holger Krag, head of the European Space Agency’s space-debris office in Darmstadt, Germany. Operators of the planned large constellations of satellites say they will be responsible stewards in their enterprises in space, but Krag worries that problems could increase, despite their best intentions. ‘What happens to those that fail or go bankrupt?’ he asks. They are probably not going to spend money to remove their satellites from space.’
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>D</span>In theory, given the vastness of space, satellite operators should have plenty of room for all these missions to fly safely without ever nearing another object. So some scientists are tackling the problem of space junk by trying to find out where all the debris is to a high degree of precision. That would alleviate the need for many of the unnecessary manoeuvres that are carried out to avoid potential collisions. ‘If you knew precisely where everything was, you would almost never have a problem,’ says Marlon Sorge, a space-debris specialist at the Aerospace Corporation in El Segundo, California.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>E</span>The field is called space traffic management, because it’s similar to managing traffic on the roads or in the air. Think about a busy day at an airport, says Moriba Jah, an astrodynamicist at the University of Texas at Austin: planes line up in the sky, landing and taking off close to one another in a carefully choreographed routine. Air-traffic controllers know the location of the planes down to one metre in accuracy. The same can’t be said for space debris. Not all objects in orbit are known, and even those included in databases are not tracked consistently.
          </p>
        </div>
        <div className='mb-3'>
          <p className=''>
            <span className='text-xl font-bold mr-2'>F</span>An additional problem is that there is no authoritative catalogue that accurately lists the orbits of all known space debris. Jah illustrates this with a web-based database that he has developed. It draws on several sources, such as catalogues maintained by the US and Russian governments, to visualise where objects are in space. When he types in an identifier for a particular space object, the database draws a purple line to designate its orbit. Only this doesn’t quite work for a number of objects, such as a Russian rocket body designated in the database as object number 32280. When Jah enters that number, the database draws two purple lines: the US and Russian sources contain two completely different orbits for the same object. Jah says that it is almost impossible to tell which is correct, unless a third source of information made it possible to cross-correlate.

            Jah describes himself as a space environmentalist: ‘I want to make space a place that is safe to operate, that is free and useful for generations to come.’ Until that happens, he argues, the space community will continue devolving into a tragedy in which all spaceflight operators are polluting a common resource.
          </p>
        </div>
      </div>

    </section>
  )
}

export default Panel1Q_2