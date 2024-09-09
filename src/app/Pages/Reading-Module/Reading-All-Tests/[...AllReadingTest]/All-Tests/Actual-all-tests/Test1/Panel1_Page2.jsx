import React from 'react';
import '../../../TestAllStyles/Panel1All.css';
import { makeEditableAndHighlight } from "../../../Important/TextChangeFunc";

function Panel1Q_2() {
  return (
    <section className='mainSection p-4 mb-[50px] '
    onMouseDown={() =>{ makeEditableAndHighlight("green");}}>
      <div className='text-inherit Titles mb-3'>
        <div className="Titles text-inherit font-bold  text-justify">
          <div className=''>Section-2 <br /> <br /> Reading Passage 3</div> 
          <div>Questions 27 - 40 </div> <br />
          <div>Translation software</div>
        </div>
      </div>
      <div>
        <p className=''>
          <span className='text-xl font-bold mr-2'>A</span>There is no doubting the practical value of a device that is capable of translating any language into another, and remarkably, such devices are now on the verge of becoming a reality thanks to new "statistical machine translation" software. Unlike previous approaches to machine translation, which relied upon rules identified by linguists which then had to be tediously hand-coded into software, this new method requires absolutely no linguistic knowledge or expert understanding of a language in order to translate it. Last month researchers at Carnegie Mellon University (CMU) in Pittsburgh began work on a machine that they hope will be able to learn a new language simply by getting foreign speakers to talk into it and perhaps, eventually, by watching television.
        </p>
      </div> <br />
      <div>
        <p className=''>
          <span className='text-xl font-bold mr-2'>B</span> Within the next few years there will be an explosion in translation technologies, says Alex Waibel, director of the International Centre for Advanced Communication Technology, which is based jointly at the University of Karlsruhe in Germany and at CMU. He predicts there will be real-time automatic dubbing, which will let people watch foreign films or television programmes in their native languages, and search engines that will enable users to trawl through multilingual archives of documents, videos and audio files. Eventually, there may even be electronic devices that work like Babel fish, whispering translations in your ear as someone speaks to you in a foreign tongue. </p>
      </div> <br />
      <div>
        <p className=''>
          <span className='text-xl font-bold mr-2'>C</span> This may sound fanciful, but already a system has been developed that can translate speeches or lectures from one language into another, in real time and regardless of the subject matter. The system required no programming of grammatical rules or syntax. Instead it was given a vast number of speeches, and their accurate translations (performed by humans) into a second language, for statistical analysis. One of the reasons it works so well is that these speeches came from the United Nations and the European Parliament, where a broad range of topics are discussed. "The linguistic knowledge is automatically extracted from these huge data resources," says Dr Waibel.
        </p>
      </div> <br />
      <div>
        <p className=''>
          <span className='text-xl font-bold mr-2'>D</span> Statistical translation encompasses a range of techniques, but what they all have in common is the use of statistical analysis, rather than rigid rules, to convert text from one language into another. Most systems start with a large bilingual corpus of text. By analysing the frequency with which clusters of words appear in close proximity in the two languages, it is possible to work out which words correspond to each other in the two languages. This approach offers much greater flexibility than rule-based systems, since it translates languages based on how they are actually used, rather than relying on rigid grammatical rules which may not always be observed, and often have exceptions.en.
        </p>
      </div> <br />
      <div>
        <p className=''>
          <span className='text-xl font-bold mr-2'>E</span> The statistical approach, which starts off without any linguistic knowledge of a language, might seem a strange way of doing things, but it is actually remarkably similar to the way humans attempt to translate languages, says Shou-de Lin, a machine-translation expert who was until recently a researcher at the University of Southern California's Information Sciences Institute (ISI). "It looks at the script and bunches symbols together," he explains, much as a human mind might try to solve the problem. But in order for this approach to work, the voracious translation systems must be fed with huge numbers of training texts. This prompted Franz Och, Google's machine-translation expert, to boast recently that the search-engine giant would probably have a key role in the future of machine translation, since it has such a huge repository of text. 
        </p>
      </div> <br />
      <div>
        <p className=''>
          <span className='text-xl font-bold mr-2'>F</span> Translation systems are of limited use if they cannot be used by people on the move, such as tourists looking for a restaurant or soldiers talking to local people in a war zone. So what is on the cards to replace the good old-fashioned phrasebook? In the past couple of years the Defence Advanced Research Projects Agency (DARPA), an American military research body, has been testing a number of projects that cram a combination of speech-recognition, machine-translation and voice-synthesis software into a handheld device. One of these projects, developed at CMU and called Babylon, can now perform two-way translations between spoken English and Iraqi Arabic.
        </p>
      </div> <br />
      <div>
        <p className=''>
          <span className='text-xl font-bold mr-2'>G</span> This is a huge improvement on the earlier one-way text-based translators used by American soldiers, says Alan Black, one of the researchers involved in the development of Babylon. For one thing, Iraqis can respond in their native language, rather than communicating through nods and shakes of the head, he says. Better still, Babylon is capable of translating completely novel sentences, rather than being limited to only a couple of hundred set phrases, as with the earlier systems.
        </p>
      </div> <br />
      <div>
        <p className=''>
          <span className='text-xl font-bold mr-2'>H</span> The next phase of the project, says Dr Black, will be to allow portable translation devices to be trained in the field. The idea is that when a traveller encounters people speaking a new language that is unknown by the translation device, it can be trained by exposing the software to lots of chatter. In theory, once a language model has been acquired, you could just leave the device in training mode in front of the television, although it would probably be preferable to find some bilingual people and ask them to repeat set phrases containing a lot of linguistic information, says Dr Black.
        </p>
      </div> <br />
      <div>
        <p className=''>
          <span className='text-xl font-bold mr-2'>I</span> Learning a new language from scratch, as humans can, is far more difficult than statistical translation using parallel texts. But since the number of high-quality parallel texts is limited, particularly for more obscure languages, a lot of effort is now being put into the development of statistical translation systems that can manage without them. Instead, the aim is to use statistical techniques to divine the language's inherent structure, and then to work out what particular words mean. If this could be done, of course, it would open the way to a universal translator. How far can machine translators be taken? "There is no reason why they should not become as good, if not better, than humans," says Dr Waibel. 
        </p>
      </div>




    </section>
  )
}

export default Panel1Q_2