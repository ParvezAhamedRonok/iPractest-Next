import React from 'react';
import '../../../TestAllStyles/Panel1All.css';
import { makeEditableAndHighlight } from "../../../Important/TextChangeFunc";


function Panel1Q_2() {
  return (
    <section className='mainSection p-4 mb-[50px] '
    onMouseDown={() =>{ makeEditableAndHighlight("green");}}>
      <div className='text-inherit Titles'>
        <div className="Titles text-inherit font-bold mb-2 text-justify">
          <div className=''>SECTION 2 <br />READING PASSAGE 2</div> <br />
          <h5>You should spend about 20 minutes on Questions 14-26 which are based on Reading Passage 2 below.   </h5>
          <h5 className='mt-4 mb-2'>Changes in reading habits</h5> 
          <h5 className='mt-3 mb-2'>What are the implications of the way we read today?</h5> <br />
        </div>
      </div>

      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>A</span>Look around on your next plane trip. The iPad is the new pacifier for babies and toddlers. Younger school-aged children read stories on smartphones; older kids don’t read at all, but hunch over video games. Parents and other passengers read on tablets or skim a flotilla of email and news feeds. Unbeknown to most of us, an invisible, game-changing transformation links everyone in this picture: the neuronal circuit that underlies the brain’s ability to read is subtly, rapidly changing and this has implications for everyone from the pre-reading toddler to the expert adult.
        </p>
      </div>
      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>B</span>As work in neurosciences indicates, the acquisition of literacy necessitated a new circuit in our species’ brain more than 6,000 years ago. That circuit evolved from a very simple mechanism for decoding basic information, like the number of goats in one’s herd, to the present, highly elaborated reading brain. My research depicts how the present reading brain enables the development of some of our most important intellectual and affective processes: internalized knowledge, analogical reasoning, and inference; perspective-taking and empathy; critical analysis and the generation of insight. Research surfacing in many parts of the world now cautions that each of these essential ‘deep reading’ processes may be under threat as we move into digital-based modes of reading..</p>
      </div>
      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>C</span>This is not a simple, binary issue of print versus digital reading and technological innovations. As MIT scholar Sherry Turkle has written, we do not err as a society when we innovate but when we ignore what we disrupt or diminish while innovating. In this hinge moment between print and digital cultures, society needs to confront what is diminishing in the expert reading circuit, what our children and older students are not developing, and what we can do about it.
        </p>
      </div>
      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>D</span>We know from research that the reading circuit is not given to human beings through a genetic blueprint like vision or language; it needs an environment to develop. Further, it will adapt to that environment’s requirements – from different writing systems to the characteristics of whatever medium is used. If the dominant medium advantages processes that are fast, multi-task oriented and well-suited for large volumes of information, like the current digital medium, so will the reading circuit. As UCLA psychologist Patricia Greenfield writes, the result is that less attention and time will be allocated to slower, time-demanding deep reading processes.
        </p>
      </div>
      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>E</span>Increasing reports from educators and from researchers in psychology and the humanities bear this out. English literature scholar and teacher Mark Edmundson describes how many college students actively avoid the classic literature of the 19th and 20th centuries in favour of something simpler as they no longer have the patience to read longer, denser, more difficult texts. We should be less concerned with students’ ‘cognitive impatience’, however, than by what may underlie it: the potential inability of large numbers of students to read with a level of critical analysis sufficient to comprehend the complexity of thought and argument found in more demanding texts. <br /> <br />

          Multiple studies show that digital screen use may be causing a variety of troubling downstream effects on reading comprehension in older high school and college students. In Stavanger, Norway, psychologist Anne Mangen and colleagues studied how high school students comprehend the same material in different mediums. Mangen’s group asked subjects questions about a short story whose plot had universal student appeal; half of the students read the story on a tablet, the other half in paperback. Results indicated that students who read on print were superior in their comprehension to screen-reading peers, particularly in their ability to sequence detail and reconstruct the plot in chronological order.
        </p>
      </div>

      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>F</span> Ziming Liu from San Jose State University has conducted a series of studies which indicate that the ‘new norm’ in reading is skimming, involving word-spotting and browsing through the text. Many readers now use a pattern when reading in which they sample the first line and then word-spot through the rest of the text. When the reading brain skims like this, it reduces time allocated to deep reading processes. In other words, we don’t have time to grasp complexity, to understand another’s feelings, to perceive beauty, and to create thoughts of the reader’s own. <br /> <br />

          The possibility that critical analysis, empathy and other deep reading processes could become the unintended ‘collateral damage’ of our digital culture is not a straightforward binary issue about print versus digital reading. It is about how we all have begun to read o various mediums and how that changes not only what we read, but also the purposes for which we read. Nor is it only about the young. The subtle atrophy of critical analysis and empathy affects us all equally. It affects our ability to navigate a constant bombardment of information. It incentivizes a retreat to the most familiar stores of unchecked information, which require and receive no analysis, leaving us susceptible to false information and irrational ideas.
        </p>
      </div>
      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>G</span>There’s an old rule in neuroscience that does not alter with age: use it or lose it. It is a very hopeful principle when applied to critical thought in the reading brain because it implies choice. The story of the changing reading brain is hardly finished. We possess both the science and the technology to identify and redress the changes in how we read before they become entrenched. If we work to understand exactly what we will lose, alongside the extraordinary new capacities that the digital world has brought us, there is as much reason for excitement as caution.
        </p>
      </div> <br />


      {/* passage-3 */}
      <div className='text-inherit text-center Titles mt-3 mb-3'>
        <div className="Titles text-inherit font-bold mb-2 text-center">
          <div className=''>READING PASSAGE 3</div> <br />
          <h5>You should spend about 20 minutes on Questions 27-40 which are based on Reading Passage 3 below..</h5>
          <h5 className=' mt-3 mb-2'>Attitudes towards Artificial Intelligence</h5> <br />
        </div>
      </div>


      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>A</span>Artificial intelligence (AI) can already predict the future. Police forces are using it to map when and where crime is likely to occur. Doctors can use it to predict when a patient is most likely to have a heart attack or stroke. Researchers are even trying to give AI imagination so it can plan for unexpected consequences.

          Many decisions in our lives require a good forecast, and AI is almost always better at forecasting than we are. Yet for all these technological advances, we still seem to deeply lack confidence in AI predictions. Recent cases show that people don’t like relying on AI and prefer to trust human experts, even if these experts are wrong.

          If we want AI to really benefit people, we need to find a way to get people to trust it. To do that, we need to understand why people are so reluctant to trust AI in the first place.
        </p>
      </div>
      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>B</span>Take the case of Watson for Oncology, one of technology giant IBM’s supercomputer programs. Their attempt to promote this program to cancer doctors was a PR disaster. The AI promised to deliver top-quality recommendations on the treatment of 12 cancers that accounted for 80% of the world’s cases. But when doctors first interacted with Watson, they found themselves in a rather difficult situation. On the one hand, if Watson provided guidance about a treatment that coincided with their own opinions, physicians did not see much point in Watson’s recommendations. The supercomputer was simply telling them what they already knew, and these recommendations did not change the actual treatment.

          On the other hand, if Watson generated a recommendation that contradicted the experts’ opinion, doctors would typically conclude that Watson wasn’t competent. And the machine wouldn’t be able to explain why its treatment was plausible because its machine-learning algorithms were simply too complex to be fully understood by humans. Consequently, this has caused even more suspicion and disbelief, leading many doctors to ignore the seemingly outlandish AI recommendations and stick to their own expertise.</p>
      </div>
      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>C</span>This is just one example of people’s lack of confidence in AI and their reluctance to accept what AI has to offer. Trust in other people is often based on our understanding of how others think and having experience of their reliability. This helps create a psychological feeling of safety. AI, on the other hand, is still fairly new and unfamiliar to most people. Even if it can be technically explained (and that’s not always the case), AI’s decision-making process is usually too difficult for most people to comprehend. And interacting with something we don’t understand can cause anxiety and give us a sense that we’re losing control. <br />
          Many people are also simply not familiar with many instances of AI actually working, because it often happens in the background. Instead, they are acutely aware of instances where AI goes wrong. Embarrassing AI failures receive a disproportionate amount of media attention, emphasising the message that we cannot rely on technology. Machine learning is not foolproof, in part because the humans who design it aren’t.
        </p>
      </div>
      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>D</span>Feelings about AI run deep. In a recent experiment, people from a range of backgrounds were given various sci-fi films about AI to watch and then asked questions about automation in everyday life. It was found that, regardless of whether the film they watched depicted AI in a positive or negative light, simply watching a cinematic vision of our technological future polarised the participants’ attitudes. Optimists became more extreme in their enthusiasm for AI and sceptics became even more guarded. <br />


          This suggests people use relevant evidence about AI in a biased manner to support their existing attitudes, a deep-rooted human tendency known as “confirmation bias”. As AI is represented more and more in media and entertainment, it could lead to a society split between those who benefit from AI and those who reject it. More pertinently, refusing to accept the advantages offered by AI could place a large group of people at a serious disadvantage.
        </p>
      </div>
      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>E</span>Fortunately, we already have some ideas about how to improve trust in AI. Simply having previous experience with AI can significantly improve people’s opinions about the technology, as was found in the study mentioned above. Evidence also suggests the more you use other technologies such as the internet, the more you trust them.

          Another solution may be to reveal more about the algorithms which AI uses and the purposes they serve. Several high-profile social media companies and online marketplaces already release transparency reports about government requests and surveillance disclosures. A similar practice for AI could help people have a better understanding of the way algorithmic decisions are made.


        </p>
      </div>

      <div className='mb-3'>
        <p className=''>
          <span className='text-xl font-bold mr-2'>F</span>Research suggests that allowing people some control over AI decision-making could also improve trust and enable AI to learn from human experience. For example, one study showed that when people were allowed the freedom to slightly modify an algorithm, they felt more satisfied with its decisions, more likely to believe it was superior and more likely to use it in the future.

          We don’t need to understand the intricate inner workings of AI systems, but if people are given a degree of responsibility for how they are implemented, they will be more willing to accept AI into their lives.
        </p>
      </div>
    </section>
  )
}

export default Panel1Q_2