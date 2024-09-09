import React from 'react';
import '../../../TestAllStyles/Panel1All.css';
import { makeEditableAndHighlight } from "../../../Important/TextChangeFunc";


function Panel1({ AnswersData }) {
  let AllAnswersData = [
    ["FALSE"], ["NOT GIVEN"], ["NOT GIVEN"], ["TRUE"], ["FALSE"], ["FALSE"],
    ["linguist"],
    ["human"],
    ["evolves"],
    ["concepts"],
    ["distinction between"],
    ["invention"],
    ["pronouns"],
    ["viii"], ["iii"], ["v"], ["vii"], ["vi"], ["ix"], ["i"], ["iv"], ["FALSE"], ["NOT GIVEN"], ["TRUE"], ["TRUE"], ["TRUE"], ["D"], ["E"], ["C"], ["F"], ["A"], ["B"],
    ["combination of"],
    ["head"],
    ["set phrases"],
    ["parallel texts"],
    ["universal translator"]
    , ["C"], ["B"], ["A"],

  ]
  //  submitted answers for showing at submit popup---------->>             
  AnswersData(AllAnswersData)







  return (
    <section className='mainSection p-4 mb-[50px]'
    onMouseDown={() =>{ makeEditableAndHighlight("green");}}>
      <div className='text-inherit Titles'>
        <div className="Titles text-inherit font-bold mb-2 text-justify">
          <div className=''>SECTION 1 <br />Questions 1-13</div> <br />
          <div>Language</div> <br /> <br />
        </div>
        <p><span className='text-xl font-bold mr-2'>A</span>
          Languages around the world are dying off at a tremendous rate. Linguists estimate that between 20 per cent and 50 per cent of the 6000 languages now spoken are no longer being taught to children, and will become extinct in the next century. According to linguists at the AAAS, the loss of language is bad not only for linguists but for all humanity."The world would be less beautiful and less interesting without linguistic diversity," said Michael Krauss of the University of Alaska, Fairbanks. "I challenge anyone to prove to me we are better off without linguistic diversity."
          <br /> <br />
          <span className='text-xl font-bold mr-2'>B</span>   Languages are dying as improved transport and telecommunications bring different peoples into closer contact, and speakers of minority tongues abandon them for the languages of more dominant cultures. Sometimes the switch is voluntary, but often it is forced. Earlier this century, for example, American Indian schoolchildren were punished for speaking their native tongue.
          <br /> <br />
          <span className='text-xl font-bold mr-2'>C</span>  The most basic reason why linguistic diversity should be preserved is that language helps people to retain their culture. But speakers cited several other good reasons too. "As linguists we need linguistic diversity," said Kenneth Hale of the Massachusetts Institute of Technology. "We wouldn't even know what questions to ask with only one language."
          <br /> <br />
          <span className='text-xl font-bold mr-2'>D</span>  Linguists are especially interested in the rules of grammar that seem common to all languages, because they provide important clues to how the mind works. As an example, Hale pointed to the distinction between singular and plural forms, such as "cat" and "cats". Trying to figure out the deeper rule that allows this distinction, a linguist who knew only English might come up with two possible explanations. One is that built into the brain there is a basic binary distinction between "one" and "more than one". Alternatively, there might be in-built distinctions between one subject, two, three or more. In English, it is impossible to tell which of these processes is at work. But by studying many different languages, linguists find the common factor is the binary distinction.
          <br /> <br />
          <span className='text-xl font-bold mr-2'>E</span>  Hale also argued that language should be seen as "the product of human intellectual toil" rather than something that evolves unaided. For example, he studied a language called Damin, an offshoot of Lardil, an Australian Aboriginal tongue. Damin was a special language spoken only by young men in the first few years after their initiation. It was an extremely abstract, simplified form of Lardil, which could be taught to initiates in a few hours. Hale said the genius of Damin was the way it broke Lardil down into its most basic concepts. Lardil, for example, has many words for "fish" while Damin has only two - one meaning "bony fish", and one meaning "cartilaginous fish". This shows that for Lardil speakers, there is a fundamental distinction between the two.
          <br /> <br />
          <span className='text-xl font-bold mr-2'>F</span>  In a similar vein, Lardil has about 90 words to cover pronouns such as "me" and "you" and determiners such as "this" and "that". But in Damin, these are boiled down to two words, "niaa" and "niuu", meaning "I" and "not-I". "I hope you'll realise this is a very big invention," said Hale. "It's not just joking around." It is as if an expert linguist had sat down to make a basic study of the Lardil language, he said. Unfortunately, Damin is no longer spoken, and Lardil is dying out. <br /> <br />
        </p>
      </div> <br />


      <div className='text-inherit Titles'>
        <div className="Titles text-inherit font-bold mb-2 text-justify">
          <div className=''>Reading Passage 2</div>
          <div>Questions 14-26</div> <br /> 
          <div>HARD LANGUAGES</div> <br />
        </div>
      </div>
      <div>
        <p className=''>
          <span className='text-xl font-bold mr-2'>A</span>  certain genre of books about English extols the language’s supposed difficulty and idiosyncrasy. “Crazy English”, by an American folk-linguist, Richard Lederer, asks “how is it that your nose can run and your feet can smell?” Bill Brysons “Mother Tongue: English and How It Got That Way” says that “English is full of booby traps for the unwary foreigner... Imagine being a foreigner and having to learn that in English one tells a he but the truth.” Such books are usually harmless, if slightly fact-challenged. You tell “a” he but “the” truth in many languages, partly because many lies exist but truth is rather more definite.
        </p>
      </div> <br />
      <div>
        <p className=''>
          <span className='text-xl font-bold mr-2'>B</span> It may be natural to think that your own tongue is complex and mysterious. But English is pretty simple: verbs hardly conjugate; nouns pluralise easily (just add “s”, mostly) and there are no genders to remember. English-speakers appreciate this when they try to learn other languages. A Spanish verb has six present-tense forms, and six each in the preterite, imperfect, future, conditional, subjunctive and two different past subjunctives, for a total of 48 forms. German has three genders, seemingly so random that Mark Twain wondered why “a young lady has no sex, but a turnip has”. (Mcidchen is neuter, whereas Steckrube is feminine.) English spelling may be the most idiosyncratic, although French gives it a run for the money with 13 ways to spell the sound “o”. But spelling is ancillary to a language’s real complexity; English is a relatively simple language, absurdly spelled. </p>
      </div> <br />
      <div>
        <p className=''>
          <span className='text-xl font-bold mr-2'>C</span> Perhaps the “hardest” language studied by many Anglophones is Latin. In it, all nouns are marked for case, an ending that tells what function the word has in a sentence (subject, direct object, possessive and so on). There are six cases, and five different patterns for declining verbs into them. This system, and its many exceptions, made for years of classroom torture for many children. But it also gives Latin a flexibility of word order. If the subject is marked as a subject with an ending, it need not come at the beginning of a sentence. This ability made many scholars of bygone days admire Latin’s majesty—and admire themselves for mastering it. Knowing Latin (and Greek, which presents similar problems) was long the sign of an educated person. Yet are Latin and Greek truly hard? These two genetic cousins of English, in the Indo-European language family, are child’s play compared with some. Languages tend to get “harder” the farther one moves from English and its relatives. Assessing how languages are tricky for English-speakers gives a guide to how the world’s languages differ overall.
        </p>
      </div> <br />
      <div>
        <p className=''>
          <span className='text-xl font-bold mr-2'>D</span>Even before learning a word, the foreigner is struck by how differently languages can sound. The uvular r’s of French and the fricative, glottal ch’s of German (and Scots) are essential to one’s imagination of these languages and their speakers. But sound systems get a lot more difficult than that. Vowels, for example, go far beyond a, e, i, o and u, and sometimes y. Those represent more than five or six sounds in English, consider the a’s in father, fate and fat. The vowels of European languages however vary more widely; think of the umlauted ones of German, or the nasal ones of French, Portuguese and Polish.en.
        </p>
      </div> <br />
      <div>
        <p className=''>
          <span className='text-xl font-bold mr-2'>E</span> Yet much more exotic vowels exist, for example that carry tones: pitch that rises, falls, dips, stays low or high, and so on. Mandarin, the biggest language in the Chinese family, has four tones, so that what sounds just like “ma” in English has four distinct sounds, and meanings. That is relatively simple compared with other Chinese varieties. Cantonese has six tones, and Mandarin Chinese dialects seven or eight. One tone can also affect neighbouring tones’ pronunciation through a series of complex rules.
        </p>
      </div> <br />
      <div>
        <p className=''>
          <span className='text-xl font-bold mr-2'>F</span>  Consonants are more complex. Some (p, t, k, m and n are common) appear in most languages, but consonants can come in a blizzard of varieties known as egressive (air coming from the nose or mouth), ingressive (air coming back in the nose and mouth), elective (air expelled from the mouth while the breath is blocked by the glottis), pharyngealised (the pharynx constricted), palatised (the tongue raised toward the palate) and more. And languages with hard-to-pronounce consonants cluster in families. Languages in East Asia tend to have tonal vowels, those of the north-eastern Caucasus are known for consonantal complexity: Ubykh has 78 consonant sounds. Austronesian languages, by contrast, may have the simplest sounds of any language family.
        </p>
      </div> <br />
      <div>
        <p className=''>
          <span className='text-xl font-bold mr-2'>G</span>Beyond sound comes the problem of grammar. On this score, some European languages are far harder than are, say, Latin or Greek. Latins six cases cower in comparison with Estonians 14, which include inessive, elative, adessive, abessive, and the system is riddled with irregularities and exceptions. Estonians cousins in the Finno-Ugric language group do much the same. Slavic languages force speakers, when talking about the past, to say whether an action was completed or not. Linguists call this “aspect”, and English has it too, for example in the distinction between “I go” and “I am going.” And to say “go” requires different Slavic verbs for going by foot, car, plane, boat or other conveyance. For Russians or Poles, the journey does matter more than the destination.
        </p>
      </div> <br />
      <div>
        <p className=''>
          <span className='text-xl font-bold mr-2'>H</span> With all that in mind, which is the hardest language? On balance perhaps it would be Tuyuca, of the eastern Amazon. It has a sound system with simple consonants and a few nasal vowels, so it is not that hard to speak, but the noun classes in Tuyuca’s language family have been estimated at between 50 and 140. Most fascinating is a feature that would make any journalist tremble. Tuyuca requires verb-endings on statements to show how the speaker knows something. Diga ape-wimeans that “the boy played soccer (I know because I saw him)”, while diga ape-hiyimeans “the boy played soccer (I assume)”. English can provide such information, but for Tuyuca that is an obligatory ending on the verb. Evidential languages force speakers to think hard about how they learned what they say they know!
        </p>
      </div>


    </section>
  )
}

export default Panel1