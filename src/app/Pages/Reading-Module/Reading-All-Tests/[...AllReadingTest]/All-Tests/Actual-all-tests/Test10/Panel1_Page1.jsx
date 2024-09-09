import React from 'react';
import '../../../TestAllStyles/Panel1All.css';
import { makeEditableAndHighlight } from "../../../Important/TextChangeFunc";



function Panel1({ AnswersData }) {
  let AllAnswersData = [
    ["E"], ["C"], ["F"], ["B"], ["D"], ["D"], ["A"], ["A"], ["FALSE"], ["NOT GIVEN"], ["TRUE"], ["TRUE"], ["FALSE"], ["NOT GIVEN"], ["D"], ["B"], ["A"], ["E"], ["G"], ["F"], ["C"], 
    ["TRUE"], ["FALSE"], ["NOT GIVEN"], ["TRUE"], ["TRUE"], ["NOT GIVEN"], ["NOT GIVEN"], ["FALSE"],
    ["glass", "/", "Glass", "/", "GLASS"],
    ["contaminate", "/", "Contaminate", "/", "CONTAMINATE"],
    ["marketing professionals", "/", "Marketing professionals", "/", "Marketing Professionals"],
    ["silica", "/", "Silica", "/", "SILICA"],
    ["soda ash", "/", "Soda ash", "/", "Aoda Ash"],
    ["Limestone", "/", "limestone", "/", "LIMESTONE"],
    ["Coloured", "/", "coloured", "/", "COLOURED"],
    ["manufacturing", "/", "Manufacturing", "/", "MANUFACTURING"],
    ["Raw material", "/", "raw material", "/", "Raw Material"],
    ["temperature", "/", "Temperature"],
    ["Raw material", "/", "raw material", "/", "Raw Material"],
  ]
  //  submitted answers for showing at submit popup---------->>             
  AnswersData(AllAnswersData)







  return (
    <section className='mainSection p-4 mb-[50px]'
    onMouseDown={() =>{ makeEditableAndHighlight("green");}}>
      <div className='text-inherit'>
        <div className="Titles text-inherit font-bold mb-2 text-justify">
          <div className=''>SECTION 1 <br /> Questions 1 - 14</div>
          <div>Read the text and answer Questions 1 - 8</div> <br />
          <div>THE 6 BEST PLACES TO VISIT IN ENGLAND</div> <br /> <br />
          <div>A. Yorkshire</div>
        </div>
        <p className='text-justify text-inherit'>
          Visitors flock to Yorkshire because there is no place on earth like God’s Own County. It considers its food and drink reputation as now the best in Britain. Yorkshire boasts more Michelin-starred restaurants than anywhere else in the country (apart from the clogged streets of London and who wants to go there?
          The sheer beauty of the county, sometimes as unexpected as a dilapidated mill chimney stabbing up through a leaden sky, has inspired generations of painters: from John Atkinson Grimshaw’s moonscapes to the Victorian artists of the Staithes Group to David Hockney’s Yorkshire Wolds.
        </p>
      </div>

      <div>
        <div className="text-xl font-bold mb-2 mt-2 text-justify">
          <div>B. Cotswolds</div>
        </div>
        <p className=''>
          The glorious, honey-coloured towns and villages of the Cotswolds look as if they have strayed into the 21st century from another era. The area is characterised by gentle dynamism, with lively galleries, vibrant festivals and a liberal endowment of intriguing museums.
          Covering nearly 800 square miles across five counties (Wiltshire, Gloucestershire, Oxfordshire, Warwickshire and Worcestershire), this region of 'wolds', or rolling hills is the biggest of the 38 Areas of Outstanding Natural Beauty (AONB) in England and Wales.
        </p>
      </div>

      <div>
        <div className="text-xl font-bold mb-2  mt-2  text-justify">
          <div>C. Devon</div>
        </div>
        <p className='text-justify'>
          Craggy coves and cream teas, surf breaks and strolls, picnics and pints in pub gardens – holidays in Devon are wholesome, simple and scenic. Most people are drawn to the magnificent beaches on the south and north coasts, but inland Devon has its appeal, too.
          A visit here mixes two of life’s loveliest pleasures: good food and the great outdoors. Devon folk make the most of the rich larder of food on their doorstep. Lamb, venison, pheasant, pork and seafood are staples, and the county’s farmers’ markets are full of artisan producers selling delicious cider, apple juice, cheese and ice cream.
        </p>
      </div>
      <div>
        <div className="text-xl font-bold mb-2  mt-2  text-justify">
          <div>D. Lake District</div>
        </div>
        <p className='text-justify'>
          Visit the Lake District for Britain’s finest scenery, greenest countryside and grandest views. Its picturesque patchwork of lakes, valleys, woodlands and fells make it one of the best places in Britain to get out and experience the great outdoors, whether it’s on a leisurely bike ride down country lanes or a day-long hike across the hills.
          The Lake District also has numerous artistic and literary connections, most famously William Wordsworth, who was born in Cockermouth in 1770 and drew much of his poetic inspiration from the surrounding landscape. And while the weather is notoriously unpredictable (locals will tell you it’s not unusual to experience all four seasons in a single day), showers and racing clouds only emphasise the grandeur of the magnificent scenery.
        </p>
      </div>

      <div>
        <div className="text-xl font-bold mb-2  mt-2  text-justify">
          <div>E. Norfolk</div>
        </div>
        <p className='text-justify'>
          Norfolk's undulating countryside and sleepy, flint-built villages are perfect for gentle cycling, walking or touring by car. Stately homes, ruined castles, medieval churches and half-timbered wool towns with fascinating museums make for enjoyable days out.
          Although East Anglia gets less rain than many other holiday destinations in the UK, northerly and easterly winds over the North Sea can keep temperatures low. But even on cold, bright days in winter, the beach car parks can be busy with dog- walkers and hikers.
        </p>
      </div>

      <div>
        <div className="text-xl font-bold mb-2  mt-2  text-justify">
          <div>F. Suffolk</div>
        </div>
        <p className='text-justify'>
          The beaches fringing the curved Norfolk and Suffolk coastline are the chief draw for visitors to the region. Even on the busiest summer’s day, there is always space for games, kite flying or a quiet family picnic in the dunes. It’s also a wild landscape of dense pine forest, open heathland and great expanses of salt marsh.
          Birdlife is astonishingly rich, and coastal wildflowers include yellow-horned poppies and purple-flowering sea pea, while the unique wetlands of the Broads, one of England’s 10 designated National Parks, is home to more than 400 rare species, including butterflies, dragonflies, moths and snails.  </p>
      </div> <br />


      <div>
        <div className="text-xl font-bold mb-2  mt-2  text-justify">
          <div>Read the text below and answer Questions 9-14.</div>
          <div>WOMEN'S RIGHTS IN THE WORKPLACE</div>
        </div>
        <p className='text-justify'>
          Women enjoy most freedoms today that men enjoy, and have joined the American workforce in droves to work as doctors, lawyers, teachers, designers, truck drivers and in many other professions. Discrimination against women still exists in various forms, particularly in the workplace. Women should know their rights as U.S. workers and take responsibility for helping to stop rights violations in the workplace. </p>
      </div>

      <div>
        <div className="text-xl font-bold mb-2  mt-2  text-justify">
          <div>History</div>
        </div>
        <p className='text-justify'>
          Women have worked in some capacity in the U.S. since its inception, but only in menial jobs for very low pay. During World War I, women entered the workforce in higher numbers due to the shortage of men. It wasn’t until World War II that they went to work in force. During this period, women took positions formerly open only to men; 7 million women entered the workforce, 2 million of those in heavy industry. They still had no formal workplace rights until the passage of Title VII of the Civil Rights Act of 1964. This act states that employers may not discriminate against people on the basis of race, colour, religion, sex or national origin.
        </p>
      </div>

      <div>
        <div className="text-xl font-bold mb-2  mt-2  text-justify">
          <div>Significance</div>
        </div>
        <p className='text-justify'>
          Title VII makes it illegal for employers to exclude qualified women from any available position. Employers would often hire less qualified men for positions to which women had applied. This law empowers women to sue if they feel a potential employer has excluded them from a position based on gender.
          President John F. Kennedy signed the Equal Pay Act in 1963, which states that employers must pay women the same amount they would pay a man in the same position. In the past, companies paid women far less than their male counterparts for the same position. Women can sue their employers if they can prove that a male in the same position earns higher wages. Both of these laws significantly increase the status of women in the workforce.
        </p>
      </div>

      <div>
        <div className="text-xl font-bold mb-2  mt-2  text-justify">
          <div>Types</div>
        </div>
        <p className='text-justify'>
          Women’s rights in the workplace include many facets, such as the right to work if pregnant. An employer cannot exclude a woman from a position due to pregnancy as long as she can perform satisfactorily. Employers cannot refuse to hire any person due to marital status, gender or age.
          In addition, an employee of any company where a woman works may not sexually harass the woman in any way. This includes a hostile work environment where the woman must endure sexual comments, touching or materials, as well as unwanted sexual advances that put her in fear of losing her job if she does not comply. Women should report all advances of this sort to the Equal Employment Opportunity Commission or a supervisor.
        </p>
      </div>
      <div>
        <div className="text-xl font-bold mb-2  mt-2  text-justify">
          <div>Benefits</div>
        </div>
        <p className='text-justify'>
          Because of workplace rights, women enjoy the freedom to work in almost any position they choose. They join the armed forces, work as cab drivers, own businesses and become executives in large corporations. As the financial status of women increases, so does the welfare of their families, children and the nation.
        </p>
      </div>

      <div>
        <div className="text-xl font-bold mb-2  mt-2  text-justify">
          <div>Considerations</div>
        </div>
        <p className='text-justify'>
          According to Sexual Harassment Support, a nonprofit support group for victims of sexual harassment, only 5 percent to 15 percent of victims of workplace sexual harassment report these violations to their employers or proper authorities for fear of ridicule, losing their jobs or not being believed. All victims of sexual harassment should seriously consider reporting it. Taking this step protects America’s workforce from workplace rights violations. </p>
      </div> <br />

      <div>
        <div className="Titles text-inherit font-bold mb-2  text-center mt-3" >
          <div className=''> Questions 15 - 29</div>
          <div>Read the text and answer Questions 15 - 21</div>
          <div>REASONS WHY YOU SHOULD JOIN A STUDENT ORGANIZATION</div>

        </div>
      </div>
      <div>
        <div className="text-xl font-bold mb-2 text-justify mt-3" >
          <div className=''>A.  You’ll learn more about yourself.</div>
        </div>
        <p className='text-justify'>
          Joining a student organization presents many opportunities to learn more about yourself, your goals, and your strengths. You can learn from how other students handle certain situations and test your current knowledge. You can also find out what you’re good at, whether that’s multitasking, staying organized, generating ideas, or serving others. This self-awareness will be beneficial for your future career.
        </p>
      </div>
      <div>
        <div className="text-xl font-bold mb-2 text-justify mt-3" >
          <div className=''>B.  You’ll develop soft skills.</div>
        </div>
        <p className='text-justify'>
          Soft skills are essential “people skills” — they’re the skills that allow us to effectively interact with others, like communication, attitude, and work ethic. Participating in a student organization not only teaches you these skills but also helps you broaden and improve those you already have. You’ll learn the best way to communicate with both individuals and large groups, and you’ll gain emotional intelligence as you develop new relationships
        </p>
      </div>
      <div>
        <div className="text-xl font-bold mb-2 text-justify mt-3" >
          <div className=''>C.  You’ll learn how to work with a team.</div>
        </div>
        <p className='text-justify'>
          Knowing how to work well with a team is an essential skill for any career. Being in a student organization teaches you how to do this by putting you in situations where you are required to take advice from others, as well as give your own.
        </p>
      </div>
      <div>
        <div className="text-xl font-bold mb-2 text-justify mt-3" >
          <div className=''>D.  You’ll get networking opportunities.</div>
        </div>
        <p className='text-justify'>
          Another great benefit of student organizations (and graduate programs as a whole) is that you get the opportunity to network. Meeting new students, making connections, and building relationships will all help down the line when you’re looking for a job. Because you’re all part of the same organization, you know the people you’re meeting have at least a few of the same interests as you, so their connections will be valuable. Corbett said:
          “Many of our organizations are professionally-focused and host several events with alumni or panel discussions with local professionals. These events are excellent opportunities for the student leaders, and can often lead to a potential internship or employment opportunities in the future!”
        </p>
      </div>
      <div>
        <div className="text-xl font-bold mb-2 text-justify mt-3" >
          <div className=''>E.  You’ll gain practical experience in a safe environment.</div>
        </div>
        <p className='text-justify'>
          Participating in a club or an organizations based around your particular area of study will give you practical experience within that field. And what’s great about student clubs is that while you learn to use skills like project management, event planning, and fundraising, you get to test them out in a safe environment where making mistakes are OK. Everyone is there to support you, so there’s no fear in messing up or being wrong.
        </p>
      </div>

      <div>
        <div className="text-xl font-bold mb-2 text-justify mt-3" >
          <div className=''>F.  You’ll be able to use the skills you’ve learned in class.</div>
        </div>
        <p className='text-justify'>
          “As business students, you are able to apply classroom experience in your student organizations, and also develop leadership and life skills that help you become more effective in classroom team projects.”
          Corbett also mentioned that being part of an organization allows you to put all of those things you’ve been learning in class to the test in real-world situations. You’ll get to learn what works and what doesn’t, and you’ll be able to take that knowledge back to the classroom, and then, of course, along with you in a future career.
        </p>
      </div>
      <div>
        <div className="text-xl font-bold mb-2 text-justify mt-3" >
          <div className=''>G.  You’ll learn how to engage with diverse groups of people.</div>
        </div>
        <p className='text-justify'>
          Chances are, the organization you choose to participate in will include a diverse group of people — you’ll be faced with the same situation in the working world! Learning how different people respond and react to certain situations will help you develop your skills in presenting and implementing ideas. Corbett said student organizations can also provide you with the opportunity to learn about different cultural backgrounds.
        </p>
      </div>



    </section>
  )
}

export default Panel1