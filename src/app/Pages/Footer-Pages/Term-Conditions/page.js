"use client"
import React from 'react'
import useToggle from '../../../../hooks/useToggle';
import BackToTop from '../../../../lib/BackToTop';
import FooterHomeThree from '../../LandingHome/FooterHomeOne';
import dynamic from 'next/dynamic';
import Refuns from './Refuns';
//client components....
const HeaderLanding = dynamic(() => import('../../LandingHome/HeaderHomeOne'), { ssr: false });
const NavigationBar = dynamic(() => import('../../LandingHome/NavigationBar'), { ssr: false });






function TermsConditions() {
    const [drawer, drawerAction] = useToggle(false);

    return (
        <section>
            <NavigationBar drawer={drawer} action={drawerAction.toggle} />
            <HeaderLanding action={drawerAction.toggle} />
            <div className='p-[40px] sm:p-[50px] w-[100%] sm:w-[68%] h-auto mt-[140px]'>
                <a href="#শর্তাবলী" className='underline font-bold'>বাংলায় পড়ুন</a> <br /> <br />
                <h3>Terms and Services</h3> <br />
                <p>Last updated January 16, 2024</p> <br /> <br />
                <h4>AGREEMENT TO OUR LEGAL TERMS</h4> <br />
                <p>We are iPractest.com ("Company," "we," "us," "our"), a company registered in Bangladesh at 2/8 Tajmohol road , Dhaka, Bangladesh.<br /> <br />

                    We operate the website <a href="https://ipractest.com">https://ipractest.com</a> (the "Site"), as well as any other related products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").<br /> <br />

                    IELTS is a test of English language skills for people who want to work, study or migrate to countries where English is the native language. There are different types of IELTS tests, such as IELTS Academic, which is suitable for those who want to study at an English-speaking university or for professional registration purposes. To prepare for the test, you can access free IELTS study materials and resources from the British Council, which will help you get familiar with the test format and improve your confidence in English.<br /> <br />

                    You can contact us by phone at +880 18843-23303, <br />
                    email at support@iPractest.com, <br />
                    or by mail to 2/8 Tajmohol road , Dhaka, Bangladesh.<br /> <br />

                    These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and iPractest.com, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.<br /> <br />

                    We will provide you with prior notice of any scheduled changes to the Services you are using. The modified Legal Terms will become effective upon posting or notifying you by parvej.rownok@ipractest.com, as stated in the email message. By continuing to use the Services after the effective date of any changes, you agree to be bound by the modified terms.<br /> <br />

                    The Services are intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Services.<br /> <br />

                    We recommend that you print a copy of these Legal Terms for your records.
                </p><br /> <br />
                <h3>TABLE OF CONTENTS</h3> <br />
                <ol class="list-decimal pl-[8px] sm:pl-[17px]">
                    <li className="mt-3"><a href="#OUR SERVICES">OUR SERVICES</a></li>
                    <li className="mt-3"><a href="#INTELLECTUAL PROPERTY RIGHTS">INTELLECTUAL PROPERTY RIGHTS</a></li>
                    <li className="mt-3"><a href="#USER REPRESENTATIONS">USER REPRESENTATIONS</a></li>
                    <li className="mt-3"><a href="#USER REGISTRATION">USER REGISTRATION</a></li>
                    <li className="mt-3"><a href="#PURCHASES AND PAYMENT">PURCHASES AND PAYMENT</a></li>
                    <li className="mt-3"><a href="#POLICY">POLICY</a></li>
                    <li className="mt-3"><a href="#PROHIBITED ACTIVITIES">PROHIBITED ACTIVITIES</a></li>
                    <li className="mt-3"><a href="#USER GENERATED CONTRIBUTIONS">USER GENERATED CONTRIBUTIONS</a></li>
                    <li className="mt-3"><a href="#CONTRIBUTION LICENSE">CONTRIBUTION LICENSE</a></li>
                    <li className="mt-3"><a href="#GUIDELINES FOR REVIEWS">GUIDELINES FOR REVIEWS</a></li>
                    <li className="mt-3"><a href="#THIRD-PARTY WEBSITES AND CONTENT">THIRD-PARTY WEBSITES AND CONTENT</a></li>
                    <li className="mt-3"><a href="#SERVICES MANAGEMENT">SERVICES MANAGEMENT</a></li>
                    <li className="mt-3"><a href="#PRIVACY POLICY">PRIVACY POLICY</a></li>
                    <li className="mt-3"><a href="#COPYRIGHT INFRINGEMENTS">COPYRIGHT INFRINGEMENTS</a></li>
                    <li className="mt-3"><a href="#TERM AND TERMINATION">TERM AND TERMINATION</a></li>
                    <li className="mt-3"><a href="#MODIFICATIONS AND INTERRUPTIONS">MODIFICATIONS AND INTERRUPTIONS</a></li>
                    <li className="mt-3"><a href="#GOVERNING LAW">GOVERNING LAW</a></li>
                    <li className="mt-3"><a href="#DISPUTE RESOLUTION">DISPUTE RESOLUTION</a></li>
                    <li className="mt-3"><a href="#CORRECTIONS">CORRECTIONS</a></li>
                    <li className="mt-3"><a href="#DISCLAIMER">DISCLAIMER</a></li>
                    <li className="mt-3"><a href="#LIMITATIONS OF LIABILITY">LIMITATIONS OF LIABILITY</a></li>
                    <li className="mt-3"><a href="#INDEMNIFICATION">INDEMNIFICATION</a></li>
                    <li className="mt-3"><a href="#USER DATA">USER DATA</a></li>
                    <li className="mt-3"><a href="#ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES">ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</a></li>
                    <li className="mt-3"><a href="#CALIFORNIA USERS AND RESIDENTS">CALIFORNIA USERS AND RESIDENTS</a></li>
                    <li className="mt-3"><a href="#MISCELLANEOUS">MISCELLANEOUS</a></li>
                    <li className="mt-3"><a href="#CONTACT US">CONTACT US</a></li>
                </ol> <br /> <br />
                <h3 id='OUR SERVICES'>1. OUR SERVICES</h3> <br />
                <p>The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.<br /><br />

                    The Services are not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use the Services. You may not use the Services in a way that would violate the Gramm-Leach-Bliley Act (GLBA).
                </p><br /><br />
                <h3 id='INTELLECTUAL PROPERTY RIGHTS'>2.INTELLECTUAL PROPERTY RIGHTS</h3> <br />
                <h5>Our intellectual property</h5> <br />
                <p>We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks").<br /><br />

                    Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties in the United States and around the world.<br /><br />

                    The Content and Marks are provided in or through the Services "AS IS" for your personal, non-commercial use or internal business purpose only.
                </p> <br /> <br />

                <h5>Your use of our Services</h5> <br />
                <p>
                    Subject to your compliance with these Legal Terms, including the <a href="">"PROHIBITED ACTIVITIES"</a> section below, we grant you a non-exclusive, non-transferable, revocable license to:<br /> <br />

                    access the Services; and  <br />
                    download or print a copy of any portion of the Content to which you have properly gained access.
                    <br /> <br />
                    solely for your personal, non-commercial use or internal business purpose.<br /> <br />

                    Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
                    <br /> <br />
                    If you wish to make any use of the Services, Content, or Marks other than as set out in this section or elsewhere in our Legal Terms, please address your request to: mdpervez946@gmail.com. If we ever grant you the permission to post, reproduce, or publicly display any part of our Services or Content, you must identify us as the owners or licensors of the Services, Content, or Marks and ensure that any copyright or proprietary notice appears or is visible on posting, reproducing, or displaying our Content.<br /> <br />

                    We reserve all rights not expressly granted to you in and to the Services, Content, and Marks.
                    <br /> <br />
                    Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.

                </p> <br /> <br />

                <h5>Your submissions and contributions</h5> <br />
                <p>Please review this section and the "PROHIBITED ACTIVITIES" section carefully prior
                    to using our Services to understand the (a) rights you give us and (b) obligations you
                    have when you post or upload any content through the Services.
                    <br />
                    <span className='font-bold'>Submissions:</span> By directly sending us any question, comment, suggestion, idea,
                    feedback, or other information about the Services ("Submissions"), you agree to
                    assign to us all intellectual property rights in such Submission. You agree that we
                    shall own this Submission and be entitled to its unrestricted use and dissemination
                    for any lawful purpose, commercial or otherwise, without acknowledgment or
                    compensation to you. <br /> <br />

                    <span className='font-bold'>Contributions:</span>The Services may invite you to chat, contribute to, or participate in
                    blogs, message boards, online forums, and other functionality during which you may
                    create, submit, post, display, transmit, publish, distribute, or broadcast content and
                    materials to us or through the Services, including but not limited to text, writings,
                    video, audio, photographs, music, graphics, comments, reviews, rating suggestions,
                    personal information, or other material ("Contributions"). Any Submission that is
                    publicly posted shall also be treated as a Contribution.<br /> <br />
                    You understand that Contributions may be viewable by other users of the Services
                    and possibly through third-party websites <br /> <br />

                    <span className='font-bold'>When you post Contributions, you grant us a license (including use of your
                        name, trademarks, and logos):</span> By posting any Contributions, you grant us an
                    unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty free, fully-paid, worldwide right, and license to: use, copy, reproduce, distribute, sell,<br /> <br />
                    resell, publish, broadcast, retitle, store, publicly perform, publicly display, reformat,
                    translate, excerpt (in whole or in part), and exploit your Contributions (including,
                    without limitation, your image, name, and voice) for any purpose, commercial,<br /> <br />
                    advertising, or otherwise, to prepare derivative works of, or incorporate into other
                    works, your Contributions, and to sublicense the licenses granted in this section. Our
                    use and distribution may occur in any media formats and through any media
                    channels.<br /> <br />
                    This license includes our use of your name, company name, and franchise name, as
                    applicable, and any of the trademarks, service marks, trade names, logos, and
                    personal and commercial images you provide.<br /> <br />

                    <span className='font-bold'>You are responsible for what you post or upload:</span> By sending us Submissions
                    and/or posting Contributions through any part of the Services or making
                    Contributions accessible through the Services by linking your account through the
                    Services to any of your social networking accounts, you:<br /> <br />


                    <ul class="list-disc pl-[8px] sm:pl-[17px]">
                        <li className='mb-3'>confirm that you have read and agree with our "PROHIBITED ACTIVITIES"
                            and will not post, send, publish, upload, or transmit through the Services any
                            Submission nor post any Contribution that is illegal, harassing, hateful,
                            harmful, defamatory, obscene, bullying, abusive, discriminatory, threatening to
                            any person or group, sexually explicit, false, inaccurate, deceitful, or
                            misleading;</li>
                        <li className='mb-3'>to the extent permissible by applicable law, waive any and all moral rights to
                            any such Submission and/or Contribution;</li>
                        <li className='mb-3'>warrant that any such Submission and/or Contributions are original to you or
                            that you have the necessary rights and licenses to submit such Submissions
                            and/or Contributions and that you have full authority to grant us the abovementioned rights in relation to your Submissions and/or Contributions; and
                        </li>
                        <li className='mb-3'>warrant and represent that your Submissions and/or Contributions do not
                            constitute confidential information.

                        </li>
                    </ul>
                    You are solely responsible for your Submissions and/or Contributions and you
                    expressly agree to reimburse us for any and all losses that we may suffer because of
                    your breach of (a) this section, (b) any third party’s intellectual property rights, or (c)
                    applicable law.<br /> <br />

                    We may remove or edit your Content: Although we have no obligation to monitor
                    any Contributions, we shall have the right to remove or edit any Contributions at any
                    time without notice if in our reasonable opinion we consider such Contributions
                    harmful or in breach of these Legal Terms. If we remove or edit any such
                    <br /> <br />
                    Contributions, we may also suspend or disable your account and report you to the
                    authorities. <br />
                    <span className='text-xl font-bold'>Copyright infringement</span> <br /> <br />
                    We respect the intellectual property rights of others. If you believe that any material
                    available on or through the Services infringes upon any copyright you own or control,
                    please immediately refer to the "COPYRIGHT INFRINGEMENTS" section below <br /> <br />
                </p>
                <h3 id='USER REPRESENTATIONS'>3.USER REPRESENTATIONS</h3> <br />
                <p>By using the Services, you represent and warrant that: (1) all registration information
                    you submit will be true, accurate, current, and complete; (2) you will maintain the
                    accuracy of such information and promptly update such registration information as
                    necessary; (3) you have the legal capacity and you agree to comply with these Legal
                    Terms; (4) you are not a minor in the jurisdiction in which you reside; (5) you will not
                    access the Services through automated or non-human means, whether through a
                    bot, script or otherwise; (6) you will not use the Services for any illegal or
                    unauthorized purpose; and (7) your use of the Services will not violate any applicable
                    law or regulation.<br /><br />
                    If you provide any information that is untrue, inaccurate, not current, or incomplete,
                    we have the right to suspend or terminate your account and refuse any and all
                    current or future use of the Services (or any portion thereof).
                </p><br /><br />
                <h3 id=' USER REGISTRATION'>4. USER REGISTRATION</h3> <br />
                <p>You may be required to register to use the Services. You agree to keep your
                    password confidential and will be responsible for all use of your account and
                    password. We reserve the right to remove, reclaim, or change a username you select
                    if we determine, in our sole discretion, that such username is inappropriate, obscene,
                    or otherwise objectionable. <br /> <br />
                </p>
                <h3 id='PURCHASES AND PAYMENT'>5.PURCHASES AND PAYMENT</h3> <br />
                <p>We accept the following forms of payment:</p> <br />
                <ul class="list-disc pl-[8px] sm:pl-[17px]">
                    <li className="mb-3">Visa</li>
                    <li className="mb-3">Mastercard</li>
                    <li className="mb-3">Paypal</li>
                </ul> <br /> <br />
                <p>You agree to provide current, complete, and accurate purchase and account
                    information for all purchases made via the Services. You further agree to promptly
                    update account and payment information, including email address, payment method,
                    and payment card expiration date, so that we can complete your transactions and
                    contact you as needed. Sales tax will be added to the price of purchases as deemed
                    required by us. We may change prices at any time. All payments shall be in US
                    dollars.<br /> <br />
                    You agree to pay all charges at the prices then in effect for your purchases and any
                    applicable shipping fees, and you authorize us to charge your chosen payment
                    provider for any such amounts upon placing your order. We reserve the right to
                    correct any errors or mistakes in pricing, even if we have already requested or
                    received payment.<br /> <br />
                    We reserve the right to refuse any order placed through the Services. We may, in our
                    sole discretion, limit or cancel quantities purchased per person, per household, or per
                    order. These restrictions may include orders placed by or under the same customer
                    account, the same payment method, and/or orders that use the same billing or
                    shipping address. We reserve the right to limit or prohibit orders that, in our sole
                    judgment, appear to be placed by dealers, resellers, or distributors.<br /> <br />

                </p>
                <h3 id='POLICY'>6.POLICY</h3> <br />
                <p>All sales are final and no refund will be issued.</p> <br /> <br />
                <h3 id='PROHIBITED ACTIVITIES'>7.PROHIBITED ACTIVITIES</h3> <br />
                <p>You may not access or use the Services for any purpose other than that for which we
                    make the Services available. The Services may not be used in connection with any
                    commercial endeavors except those that are specifically endorsed or approved by
                    us.<br /> <br />
                    As a user of the Services, you agree not to:<br /> <br />
                    <ul class="list-disc pl-[8px] sm:pl-[17px]">
                        <li className="mb-3">Systematically retrieve data or other content from the Services to create or
                            compile, directly or indirectly, a collection, compilation, database, or directory
                            without written permission from us.
                        </li>
                        <li className="mb-3">Trick, defraud, or mislead us and other users, especially in any attempt to learn
                            sensitive account information such as user passwords</li>
                        <li className="mb-3">Circumvent, disable, or otherwise interfere with security-related features of the
                            Services, including features that prevent or restrict the use or copying of any
                            Content or enforce limitations on the use of the Services and/or the Content
                            contained therein</li>
                        <li className="mb-3">Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.
                        </li>
                        <li className="mb-3">Use any information obtained from the Services in order to harass, abuse, or
                            harm another person</li>
                        <li className="mb-3">Make improper use of our support services or submit false reports of abuse or
                            misconduct</li>
                        <li className="mb-3">Use the Services in a manner inconsistent with any applicable laws or
                            regulations.
                        </li>
                        <li className="mb-3">Engage in unauthorized framing of or linking to the Services.
                        </li>
                        <li className="mb-3">Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses,
                            or other material, including excessive use of capital letters and spamming
                            (continuous posting of repetitive text), that interferes with any party’s
                            uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts,
                            alters, or interferes with the use, features, functions, operation, or maintenance
                            of the Services</li>
                        <li className="mb-3">Engage in any automated use of the system, such as using scripts to send
                            comments or messages, or using any data mining, robots, or similar data
                            gathering and extraction tools</li>
                        <li className="mb-3">Delete the copyright or other proprietary rights notice from any Content.</li>
                        <li className="mb-3">Attempt to impersonate another user or person or use the username of
                            another user.
                        </li>
                        <li className="mb-3">Upload or transmit (or attempt to upload or to transmit) any material that acts
                            as a passive or active information collection or transmission mechanism,
                            including without limitation, clear graphics interchange formats ("gifs"), 1×1
                            pixels, web bugs, cookies, or other similar devices (sometimes referred to as
                            "spyware" or "passive collection mechanisms" or "pcms").
                        </li>
                        <li className="mb-3">Interfere with, disrupt, or create an undue burden on the Services or the
                            networks or services connected to the Services</li>
                        <li className="mb-3">Harass, annoy, intimidate, or threaten any of our employees or agents
                            engaged in providing any portion of the Services to you.</li>
                        <li className="mb-3">Attempt to bypass any measures of the Services designed to prevent or
                            restrict access to the Services, or any portion of the Services.
                        </li>
                        <li className="mb-3">Copy or adapt the Services' software, including but not limited to Flash, PHP,
                            HTML, JavaScript, or other code</li>
                        <li className="mb-3">Except as permitted by applicable law, decipher, decompile, disassemble, or
                            reverse engineer any of the software comprising or in any way making up a
                            part of the Services</li>
                        <li className="mb-3">Except as may be the result of standard search engine or Internet browser
                            usage, use, launch, develop, or distribute any automated system, including
                            without limitation, any spider, robot, cheat utility, scraper, or offline reader that
                            accesses the Services, or use or launch any unauthorized script or other
                            software</li>
                        <li className="mb-3">Use a buying agent or purchasing agent to make purchases on the Services.</li>
                        <li className="mb-3">Make any unauthorized use of the Services, including collecting usernames
                            and/or email addresses of users by electronic or other means for the purpose
                            of sending unsolicited email, or creating user accounts by automated means or
                            under false pretenses.</li>
                        <li className="mb-3">Use the Services as part of any effort to compete with us or otherwise use the
                            Services and/or the Content for any revenue-generating endeavor or
                            commercial enterprise.
                        </li>
                        <li className="mb-3">Use the Services to advertise or offer to sell goods and services.
                        </li>
                        <li className="mb-3">Sell or otherwise transfer your profile</li>
                    </ul> <br /> <br />
                </p> <br /> <br />
                <h3 id='USER GENERATED CONTRIBUTION'>8.USER GENERATED CONTRIBUTION</h3> <br />
                <p>The Services may invite you to chat, contribute to, or participate in blogs, message
                    boards, online forums, and other functionality, and may provide you with the
                    opportunity to create, submit, post, display, transmit, perform, publish, distribute, or
                    broadcast content and materials to us or on the Services, including but not limited to
                    text, writings, video, audio, photographs, graphics, comments, suggestions, or
                    personal information or other material (collectively, "Contributions"). Contributions
                    may be viewable by other users of the Services and through third-party websites. As
                    such, any Contributions you transmit may be treated as non-confidential and non proprietary. When you create or make available any Contributions, you thereby
                    represent and warrant that:
                </p><br /><br />
                <ul class="list-disc pl-[8px] sm:pl-[17px]">
                    <li className="mb-3">The creation, distribution, transmission, public display, or performance, and the
                        accessing, downloading, or copying of your Contributions do not and will not
                        infringe the proprietary rights, including but not limited to the copyright, patent,
                        trademark, trade secret, or moral rights of any third party.
                    </li>
                    <li className="mb-3">You are the creator and owner of or have the necessary licenses, rights,
                        consents, releases, and permissions to use and to authorize us, the Services,
                        and other users of the Services to use your Contributions in any manner
                        contemplated by the Services and these Legal Terms.
                    </li>
                    <li className="mb-3">You have the written consent, release, and/or permission of each and every
                        identifiable individual person in your Contributions to use the name or likeness
                        of each and every such identifiable individual person to enable inclusion and
                        use of your Contributions in any manner contemplated by the Services and
                        these Legal Terms</li>
                    <li className="mb-3">Your Contributions are not false, inaccurate, or misleading.
                    </li>
                    <li className="mb-3">Your Contributions are not unsolicited or unauthorized advertising, promotional
                        materials, pyramid schemes, chain letters, spam, mass mailings, or other
                        forms of solicitation.
                    </li>
                    <li className="mb-3">Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing,
                        libelous, slanderous, or otherwise objectionable (as determined by us).
                    </li>
                    <li className="mb-3">Your Contributions do not ridicule, mock, disparage, intimidate, or abuse
                        anyone.
                    </li>
                    <li className="mb-3">Your Contributions are not used to harass or threaten (in the legal sense of
                        those terms) any other person and to promote violence against a specific
                        person or class of people.</li>
                    <li className="mb-3">Your Contributions do not violate any applicable law, regulation, or rule.
                        Your Contributions do not violate the privacy or publicity rights of any thir  party.</li>
                    <li className="mb-3"></li>
                    <li className="mb-3">Your Contributions do not violate any applicable law concerning child
                        pornography, or otherwise intended to protect the health or well-being of
                        minors.
                    </li>
                    <li className="mb-3">Your Contributions do not include any offensive comments that are connected
                        to race, national origin, gender, sexual preference, or physical handicap.
                    </li>
                    <li className="mb-3">Your Contributions do not otherwise violate, or link to material that violates, any
                        provision of these Legal Terms, or any applicable law or regulation.
                    </li>
                    <li className="mb-3">Any use of the Services in violation of the foregoing violates these Legal Terms and
                        may result in, among other things, termination or suspension of your rights to use the
                        Services</li>
                </ul> <br /> <br />

                <h3 id='CONTRIBUTION LICENSE'>9.CONTRIBUTION LICENSE</h3> <br />
                <p>By posting your Contributions to any part of the Services, you automatically grant,
                    and you represent and warrant that you have the right to grant, to us an unrestricted,
                    unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid,
                    worldwide right, and license to host, use, copy, reproduce, disclose, sell, resell,
                    publish, broadcast, retitle, archive, store, cache, publicly perform, publicly display,
                    reformat, translate, transmit, excerpt (in whole or in part), and distribute such
                    Contributions (including, without limitation, your image and voice) for any purpose,
                    commercial, advertising, or otherwise, and to prepare derivative works of, or
                    incorporate into other works, such Contributions, and grant and authorize
                    sublicenses of the foregoing. The use and distribution may occur in any media
                    formats and through any media channels.<br /> <br />
                    This license will apply to any form, media, or technology now known or hereafter
                    developed, and includes our use of your name, company name, and franchise name,
                    as applicable, and any of the trademarks, service marks, trade names, logos, and
                    personal and commercial images you provide. You waive all moral rights in your
                    Contributions, and you warrant that moral rights have not otherwise been asserted in
                    your Contributions.<br /> <br />
                    We do not assert any ownership over your Contributions. You retain full ownership of
                    all of your Contributions and any intellectual property rights or other proprietary rights
                    associated with your Contributions. We are not liable for any statements or
                    representations in your Contributions provided by you in any area on the Services.
                    You are solely responsible for your Contributions to the Services and you expressly
                    agree to exonerate us from any and all responsibility and to refrain from any legal
                    action against us regarding your Contributions.<br /> <br />
                    We have the right, in our sole and absolute discretion, (1) to edit, redact, or otherwise
                    change any Contributions; (2) to re-categorize any Contributions to place them in
                    more appropriate locations on the Services; and (3) to pre-screen or delete any
                    Contributions at any time and for any reason, without notice. We have no obligation
                    to monitor your Contributions.<br /> <br />
                </p>
                <h3 id='GUIDELINES FOR REVIEWS'>10.GUIDELINES FOR REVIEWS</h3> <br />
                <p>We may provide you areas on the Services to leave reviews or ratings. When posting
                    a review, you must comply with the following criteria: (1) you should have firsthand
                    experience with the person/entity being reviewed; (2) your reviews should not contain
                    offensive profanity, or abusive, racist, offensive, or hateful language; (3) your reviews
                    should not contain discriminatory references based on religion, race, gender, national
                    origin, age, marital status, sexual orientation, or disability; (4) your reviews should not
                    contain references to illegal activity; (5) you should not be affiliated with competitors if
                    posting negative reviews; (6) you should not make any conclusions as to the legality
                    of conduct; (7) you may not post any false or misleading statements; and (8) you may
                    not organize a campaign encouraging others to post reviews, whether positive or
                    negative.<br /><br />
                    We may accept, reject, or remove reviews in our sole discretion. We have absolutely
                    no obligation to screen reviews or to delete reviews, even if anyone considers
                    reviews objectionable or inaccurate. Reviews are not endorsed by us, and do not
                    necessarily represent our opinions or the views of any of our affiliates or partners. We
                    do not assume liability for any review or for any claims, liabilities, or losses resulting
                    from any review. By posting a review, you hereby grant to us a perpetual, non exclusive, worldwide, royalty-free, fully paid, assignable, and sublicensable right and<br /><br />
                    license to reproduce, modify, translate, transmit by any means, display, perform,
                    and/or distribute all content relating to review.<br /><br />
                </p>
                <h3 id='THIRD-PARTY WEBSITES AND CONTENT'>11.THIRD-PARTY WEBSITES AND CONTENT</h3> <br />
                <p>
                    The Services may contain (or you may be sent via the Site) links to other websites
                    ("Third-Party Websites") as well as articles, photographs, text, graphics, pictures,
                    designs, music, sound, video, information, applications, software, and other content
                    or items belonging to or originating from third parties ("Third-Party Content"). Such
                    Third-Party Websites and Third-Party Content are not investigated, monitored, or
                    checked for accuracy, appropriateness, or completeness by us, and we are not
                    responsible for any Third-Party Websites accessed through the Services or any
                    Third-Party Content posted on, available through, or installed from the Services,
                    including the content, accuracy, offensiveness, opinions, reliability, privacy practices,
                    or other policies of or contained in the Third-Party Websites or the Third-Party
                    Content. Inclusion of, linking to, or permitting the use or installation of any Third-Party
                    Websites or any Third-Party Content does not imply approval or endorsement thereof
                    by us. If you decide to leave the Services and access the Third-Party Websites or to
                    use or install any Third-Party Content, you do so at your own risk, and you should be
                    aware these Legal Terms no longer govern. You should review the applicable terms
                    and policies, including privacy and data gathering practices, of any website to which
                    you navigate from the Services or relating to any applications you use or install from
                    the Services. Any purchases you make through Third-Party Websites will be through
                    other websites and from other companies, and we take no responsibility whatsoever
                    in relation to such purchases which are exclusively between you and the applicable
                    third party. You agree and acknowledge that we do not endorse the products or
                    services offered on Third-Party Websites and you shall hold us blameless from any
                    harm caused by your purchase of such products or services. Additionally, you shall
                    hold us blameless from any losses sustained by you or harm caused to you relating
                    to or resulting in any way from any Third-Party Content or any contact with Third Party Websites.
                </p> <br /> <br />
                <h3 id=' SERVICES MANAGEMENT'>12. SERVICES MANAGEMENT</h3> <br />
                <p>We reserve the right, but not the obligation, to: (1) monitor the Services for violations
                    of these Legal Terms; (2) take appropriate legal action against anyone who, in our
                    sole discretion, violates the law or these Legal Terms, including without limitation,
                    reporting such user to law enforcement authorities; (3) in our sole discretion and
                    without limitation, refuse, restrict access to, limit the availability of, or disable (to the
                    extent technologically feasible) any of your Contributions or any portion thereof; (4) in
                    our sole discretion and without limitation, notice, or liability, to remove from the
                    Services or otherwise disable all files and content that are excessive in size or are in
                    any way burdensome to our systems; and (5) otherwise manage the Services in a
                    manner designed to protect our rights and property and to facilitate the proper
                    functioning of the Services.
                </p> <br /> <br />
                <h3 id='PRIVACY POLICY'>13.PRIVACY POLICY</h3> <br />
                <p>We care about data privacy and security. Please review our Privacy
                    Policy: <span><a href="https://ipractest.com/iPractest-Privacy-Policy">https://ipractest.com/iPractest-Privacy-Policy</a></span>. By using the Services, you
                    agree to be bound by our Privacy Policy, which is incorporated into these Legal
                    Terms. Please be advised the Services are hosted in Bangladesh, United Arab
                    Emirates, United States and Australia. If you access the Services from any other
                    region of the world with laws or other requirements governing personal data
                    collection, use, or disclosure that differ from applicable laws in Bangladesh, United
                    Arab Emirates, United States and Australia, then through your continued use of the
                    Services, you are transferring your data to Bangladesh, United Arab Emirates, United
                    States and Australia, and you expressly consent to have your data transferred to and
                    processed in Bangladesh, United Arab Emirates, United States and Australia.
                </p> <br /> <br />
                <h3 id='COPYRIGHT INFRINGEMENTS'>14.COPYRIGHT INFRINGEMENTS</h3> <br />
                <p>We respect the intellectual property rights of others. If you believe that any material
                    available on or through the Services infringes upon any copyright you own or control,
                    please immediately notify us using the contact information provided below (a
                    "Notification"). A copy of your Notification will be sent to the person who posted or
                    stored the material addressed in the Notification. Please be advised that pursuant to
                    applicable law you may be held liable for damages if you make material
                    misrepresentations in a Notification. Thus, if you are not sure that material located on
                    or linked to by the Services infringes your copyright, you should consider first
                    contacting an attorney <br /> <br /></p>
                <h3 id='TERM AND TERMINATION'>15.TERM AND TERMINATION</h3>  <br />
                <p>These Legal Terms shall remain in full force and effect while you use the Services.
                    WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE
                    RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE
                    OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING
                    BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR
                    FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY
                    REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL
                    TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE
                    YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE YOUR
                    ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY
                    TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.<br /><br />
                    If we terminate or suspend your account for any reason, you are prohibited from
                    registering and creating a new account under your name, a fake or borrowed name,
                    or the name of any third party, even if you may be acting on behalf of the third party.
                    In addition to terminating or suspending your account, we reserve the right to take
                    appropriate legal action, including without limitation pursuing civil, criminal, and
                    injunctive redress. <br /><br /></p>
                <h3 id='MODIFICATIONS AND INTERRUPTIONS'>16.MODIFICATIONS AND INTERRUPTIONS</h3> <br />
                <p>We reserve the right to change, modify, or remove the contents of the Services at any
                    time or for any reason at our sole discretion without notice. However, we have no
                    obligation to update any information on our Services. We will not be liable to you or
                    any third party for any modification, price change, suspension, or discontinuance of
                    the Services.<br /><br />
                    We cannot guarantee the Services will be available at all times. We may experience
                    hardware, software, or other problems or need to perform maintenance related to the
                    Services, resulting in interruptions, delays, or errors. We reserve the right to change,
                    revise, update, suspend, discontinue, or otherwise modify the Services at any time or
                    for any reason without notice to you. You agree that we have no liability whatsoever
                    for any loss, damage, or inconvenience caused by your inability to access or use the
                    Services during any downtime or discontinuance of the Services. Nothing in these
                    Legal Terms will be construed to obligate us to maintain and support the Services or
                    to supply any corrections, updates, or releases in connection therewith.<br /><br />
                </p>
                <h3 id='GOVERNING LAW'>17.GOVERNING LAW</h3> <br />
                <p>These Legal Terms shall be governed by and defined following the laws of
                    Bangladesh. iPractest.com and yourself irrevocably consent that the courts of
                    Bangladesh shall have exclusive jurisdiction to resolve any dispute which may arise
                    in connection with these Legal Terms.<br /><br />
                </p>
                <h3 id='DISPUTE RESOLUTION'>18.DISPUTE RESOLUTION</h3> <br />
                <p><span className='text-xl font-bold'>Informal Negotiations</span><br /><br />
                    To expedite resolution and control the cost of any dispute, controversy, or claim
                    related to these Legal Terms (each a "Dispute" and collectively, the "Disputes")
                    brought by either you or us (individually, a "Party" and collectively, the "Parties"), the
                    Parties agree to first attempt to negotiate any Dispute (except those Disputes
                    expressly provided below) informally for at least __________ days before initiating
                    arbitration. Such informal negotiations commence upon written notice from one Party
                    to the other Party.<br /><br />
                    <span className='text-xl font-bold'>Binding Arbitration</span><br /><br />

                    Any dispute arising out of or in connection with these Legal Terms, including any
                    question regarding its existence, validity, or termination, shall be referred to and
                    finally resolved by the International Commercial Arbitration Court under the European
                    Arbitration Chamber (Belgium, Brussels, Avenue Louise, 146) according to the Rules
                    of this ICAC, which, as a result of referring to it, is considered as the part of this
                    clause. The number of arbitrators shall be __________. The seat, or legal place, or
                    arbitration shall be Bangladesh. The language of the proceedings shall be
                    __________. The governing law of these Legal Terms shall be substantive law of
                    Bangladesh.<br /><br />
                    <span className='text-xl font-bold'>Restrictions</span><br /><br />

                    The Parties agree that any arbitration shall be limited to the Dispute between the
                    Parties individually. To the full extent permitted by law, (a) no arbitration shall be
                    joined with any other proceeding; (b) there is no right or authority for any Dispute to
                    be arbitrated on a class-action basis or to utilize class action procedures; and (c)
                    there is no right or authority for any Dispute to be brought in a purported
                    representative capacity on behalf of the general public or any other persons.<br /><br />

                    <span className='text-xl font-bold'>Exceptions to Informal Negotiations and Arbitration</span><br /><br />

                    The Parties agree that the following Disputes are not subject to the above provisions
                    concerning informal negotiations binding arbitration: (a) any Disputes seeking to
                    enforce or protect, or concerning the validity of, any of the intellectual property rights
                    of a Party; (b) any Dispute related to, or arising from, allegations of theft, piracy invasion of privacy, or unauthorized use; and (c) any claim for injunctive relief. If this
                    provision is found to be illegal or unenforceable, then neither Party will elect to
                    arbitrate any Dispute falling within that portion of this provision found to be illegal or
                    unenforceable and such Dispute shall be decided by a court of competent jurisdiction
                    within the courts listed for jurisdiction above, and the Parties agree to submit to the
                    personal jurisdiction of that court<br /><br />
                </p>
                <h3 id='CORRECTIONS'>19.CORRECTIONS</h3> <br />
                <p>There may be information on the Services that contains typographical errors,
                    inaccuracies, or omissions, including descriptions, pricing, availability, and various
                    other information. We reserve the right to correct any errors, inaccuracies, or
                    omissions and to change or update the information on the Services at any time,
                    without prior notice.<br /><br />
                </p>
                <h3 id='DISCLAIMER'>20. DISCLAIMER</h3> <br />
                <p>THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU
                    AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO
                    THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES,
                    EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE
                    THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF
                    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT
                    THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR THE
                    CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE
                    SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR
                    ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND
                    MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE
                    WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE
                    SERVICES, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE
                    SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR
                    FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR
                    CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS,
                    VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO
                    OR THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS
                    OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR
                    DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY
                    CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA
                    THE SERVICES. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME
                    RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR
                    OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY HYPERLINKED
                    WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY
                    BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN
                    ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN
                    YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS
                    WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM
                    OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND
                    EXERCISE CAUTION WHERE APPROPRIATE.
                    <br /> <br /></p>
                <h3 id='LIMITATIONS OF LIABILITY'>21.LIMITATIONS OF LIABILITY</h3> <br />
                <p>IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE
                    LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT,
                    CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE
                    DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR
                    OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE
                    HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                    NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN,
                    OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS
                    OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE
                    AMOUNT PAID, IF ANY, BY YOU TO US DURING THE THREE (3) MONTH PERIOD
                    PRIOR TO ANY CAUSE OF ACTION ARISING. CERTAIN US STATE LAWS AND
                    INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED
                    WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF
                    THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR
                    LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL
                    RIGHTS.
                    <br /> <br />
                </p>
                <h3 id='INDEMNIFICATION'>22.INDEMNIFICATION</h3> <br />
                <p>You agree to defend, indemnify, and hold us harmless, including our subsidiaries,
                    affiliates, and all of our respective officers, agents, partners, and employees, from
                    and against any loss, damage, liability, claim, or demand, including reasonable
                    attorneys’ fees and expenses, made by any third party due to or arising out of: (1)
                    your Contributions; (2) use of the Services; (3) breach of these Legal Terms; (4) any
                    breach of your representations and warranties set forth in these Legal Terms; (5) your
                    violation of the rights of a third party, including but not limited to intellectual property
                    rights; or (6) any overt harmful act toward any other user of the Services with whom
                    you connected via the Services. Notwithstanding the foregoing, we reserve the right,
                    at your expense, to assume the exclusive defense and control of any matter for
                    which you are required to indemnify us, and you agree to cooperate, at your
                    expense, with our defense of such claims. We will use reasonable efforts to notify
                    you of any such claim, action, or proceeding which is subject to this indemnification
                    upon becoming aware of it. <br /> <br />
                </p>
                <h3 id='USER DATA'>23.USER DATA</h3> <br />
                <p>We will maintain certain data that you transmit to the Services for the purpose of
                    managing the performance of the Services, as well as data relating to your use of the
                    Services. Although we perform regular routine backups of data, you are solely
                    responsible for all data that you transmit or that relates to any activity you have
                    undertaken using the Services. You agree that we shall have no liability to you for
                    any loss or corruption of any such data, and you hereby waive any right of action
                    against us arising from any such loss or corruption of such data.
                    <br /> <br /></p>
                <h3 id='ELECTRONIC COMMUNICATIONS, TRANSACTIONS,AND SIGNATURES'>24.ELECTRONIC COMMUNICATIONS, TRANSACTIONS,AND SIGNATURES</h3> <br />
                <p>Visiting the Services, sending us emails, and completing online forms constitute
                    electronic communications. You consent to receive electronic communications, and
                    you agree that all agreements, notices, disclosures, and other communications we
                    provide to you electronically, via email and on the Services, satisfy any legal
                    requirement that such communication be in writing. YOU HEREBY AGREE TO THE
                    USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER
                    RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND
                    RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE
                    SERVICES. You hereby waive any rights or requirements under any statutes,
                    regulations, rules, ordinances, or other laws in any jurisdiction which require an
                    original signature or delivery or retention of non-electronic records, or to payments or
                    the granting of credits by any means other than electronic means <br /> <br />
                </p>
                <h3 id='CALIFORNIA USERS AND RESIDENTS'>25.CALIFORNIA USERS AND RESIDENTS</h3> <br />
                <p>If any complaint with us is not satisfactorily resolved, you can contact the Complaint
                    Assistance Unit of the Division of Consumer Services of the California Department of
                    Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento,
                    California 95834 or by telephone at (800) 952-5210 or (916) 445-1254. <br /> <br /></p>
                <h3 id='MISCELLANEOUS'>26.MISCELLANEOUS</h3> <br />
                <p>These Legal Terms and any policies or operating rules posted by us on the Services
                    or in respect to the Services constitute the entire agreement and understanding
                    between you and us. Our failure to exercise or enforce any right or provision of these
                    Legal Terms shall not operate as a waiver of such right or provision. These Legal
                    Terms operate to the fullest extent permissible by law. We may assign any or all of
                    our rights and obligations to others at any time. We shall not be responsible or liable
                    for any loss, damage, delay, or failure to act caused by any cause beyond our <br /> <br />
                    reasonable control. If any provision or part of a provision of these Legal Terms is
                    determined to be unlawful, void, or unenforceable, that provision or part of the
                    provision is deemed severable from these Legal Terms and does not affect the
                    validity and enforceability of any remaining provisions. There is no joint venture,
                    partnership, employment or agency relationship created between you and us as a
                    result of these Legal Terms or use of the Services. You agree that these Legal Terms
                    will not be construed against us by virtue of having drafted them. You hereby waive
                    any and all defenses you may have based on the electronic form of these Legal
                    Terms and the lack of signing by the parties hereto to execute these Legal Terms. <br /> <br />
                </p>
                <h3 id='CONTACT US'>27. CONTACT US</h3> <br />
                <p>
                    iPractest.com <br /> <br />
                    2/8 tajmahal road , dhaka <br />
                    Bangladesh <br />
                    +880 18843-23303 <br />
                    support@iPractest.com

                </p>

            </div>
            {/* for bangla language */}
            <div className='w-full flex justify-center align-middle mt-[20px]'>
                <div className='w-[76%] h-[2px] bg-gray-400 m-auto'></div>
            </div>
            <div className='p-[40px] sm:p-[55px] w-[100%] sm:w-[68%] h-auto mt-[120px]'>
                <h3 id='শর্তাবলী'>শর্তাবলী</h3> <br />
                <p>সর্বশেষ আপডেট 16 জানুয়ারী, 2024</p> <br /> <br />
                <h4>আমাদের আইনি শর্তাবলী চুক্তি</h4> <br />
                <p>আমরা iPractest.com ("কোম্পানি," "আমরা," "আমাদের," "আমাদের"), বাংলাদেশে নিবন্ধিত একটি কোম্পানি 2/8 তাজমহল রোড, ঢাকা, বাংলাদেশ।<br /> <br />

                    আমরা ওয়েবসাইট <a href="https://ipractest.com">https://ipractest.com</a> ("সাইট") পরিচালনা করি, সেইসাথে অন্য যেকোন সম্পর্কিত পণ্য এবং পরিষেবা যা উল্লেখ বা লিঙ্ক করে এই আইনী শর্তাবলী ("আইনি শর্তাবলী") (সম্মিলিতভাবে, "পরিষেবা")।<br /> <br />

                    আইইএলটিএস হল ইংরেজি ভাষার দক্ষতার একটি পরীক্ষা যারা কাজ করতে, অধ্যয়ন করতে বা দেশান্তর করতে চায় যেখানে ইংরেজি স্থানীয় ভাষা। বিভিন্ন ধরনের IELTS পরীক্ষা আছে, যেমন IELTS একাডেমিক, যা তাদের জন্য উপযুক্ত যারা ইংরেজি-ভাষী বিশ্ববিদ্যালয়ে পড়তে চান বা পেশাদার নিবন্ধনের উদ্দেশ্যে। পরীক্ষার প্রস্তুতির জন্য, আপনি ব্রিটিশ কাউন্সিল থেকে বিনামূল্যে IELTS অধ্যয়ন সামগ্রী এবং সংস্থানগুলি অ্যাক্সেস করতে পারেন, যা আপনাকে পরীক্ষার ফর্ম্যাটের সাথে পরিচিত হতে এবং ইংরেজিতে আপনার আস্থা উন্নত করতে সহায়তা করবে।<br /> <br />

                    আপনি +880 18843-23303 নম্বরে ফোনে আমাদের সাথে যোগাযোগ করতে পারেন,<br />
                    support@iPractest.com এ ইমেল করুন,<br />
                    অথবা ডাকযোগে 2/8 তাজমহল রোড, ঢাকা, বাংলাদেশ।<br /> <br />

                    এই আইনী শর্তাবলী আপনার মধ্যে করা একটি আইনগতভাবে বাধ্যতামূলক চুক্তি গঠন করে, ব্যক্তিগতভাবে বা কোনো সত্তা ("আপনি") এবং iPractest.com এর পক্ষ থেকে, পরিষেবাগুলিতে আপনার অ্যাক্সেস এবং ব্যবহার সংক্রান্ত। আপনি সম্মত হন যে পরিষেবাগুলি অ্যাক্সেস করার মাধ্যমে, আপনি এই সমস্ত আইনি শর্তাবলী পড়েছেন, বুঝেছেন এবং আবদ্ধ হতে সম্মত হয়েছেন৷ আপনি যদি এই সমস্ত আইনি শর্তাবলীর সাথে একমত না হন, তাহলে আপনাকে পরিষেবাগুলি ব্যবহার করা থেকে স্পষ্টভাবে নিষিদ্ধ করা হয়েছে এবং আপনাকে অবিলম্বে ব্যবহার বন্ধ করতে হবে৷<br /> <br />

                    আপনি যে পরিষেবাগুলি ব্যবহার করছেন সেগুলির কোনও নির্ধারিত পরিবর্তনের পূর্বে আমরা আপনাকে বিজ্ঞপ্তি প্রদান করব৷ parvej.rownok@ipractest.com-এ পোস্ট করা বা আপনাকে জানানোর পরে পরিবর্তিত আইনি শর্তাবলী কার্যকর হবে, যেমন ইমেল বার্তায় বলা হয়েছে। যেকোনো পরিবর্তনের কার্যকর তারিখের পরে পরিষেবাগুলি ব্যবহার চালিয়ে যাওয়ার মাধ্যমে, আপনি পরিবর্তিত শর্তাবলী দ্বারা আবদ্ধ হতে সম্মত হন।<br /> <br />

                    পরিষেবাগুলি এমন ব্যবহারকারীদের জন্য যাদের বয়স কমপক্ষে 18 বছর। 18 বছরের কম বয়সী ব্যক্তিদের পরিষেবাগুলি ব্যবহার বা নিবন্ধন করার অনুমতি নেই৷<br /> <br />

                    আমরা সুপারিশ করি যে আপনি আপনার রেকর্ডের জন্য এই আইনি শর্তগুলির একটি অনুলিপি মুদ্রণ করুন৷
                </p><br /> <br />
                <h3>সুচিপত্র</h3> <br />
                <ol class="list-decimal pl-[8px] sm:pl-[17px]">
                    <li className="mt-3"><a href="#আমাদের সেবাসমূহ">আমাদের সেবাসমূহ</a></li>
                    <li className="mt-3"><a href="#মেধা সম্পত্তি অধিকার">মেধা সম্পত্তি অধিকার</a></li>
                    <li className="mt-3"><a href="#ব্যবহারকারীর প্রতিনিধিত্ব">ব্যবহারকারীর প্রতিনিধিত্ব</a></li>
                    <li className="mt-3"><a href="#ব্যবহারকারী নিবন্ধন">ব্যবহারকারী নিবন্ধন</a></li>
                    <li className="mt-3"><a href="#ক্রয় এবং অর্থপ্রদান">ক্রয় এবং অর্থপ্রদান</a></li>
                    <li className="mt-3"><a href="#নীতি">নীতি</a></li>
                    <li className="mt-3"><a href="#নিষিদ্ধ কার্যকলাপ">নিষিদ্ধ কার্যকলাপ</a></li>
                    <li className="mt-3"><a href="#ব্যবহারকারী উত্পন্ন অবদান">ব্যবহারকারী উত্পন্ন অবদান</a></li>
                    <li className="mt-3"><a href="#কন্ট্রিবিউশন লাইসেন্স">কন্ট্রিবিউশন লাইসেন্স</a></li>
                    <li className="mt-3"><a href="#পর্যালোচনার জন্য নির্দেশিকা">পর্যালোচনার জন্য নির্দেশিকা</a></li>
                    <li className="mt-3"><a href="#তৃতীয় পক্ষের ওয়েবসাইট এবং বিষয়বস্তু">তৃতীয় পক্ষের ওয়েবসাইট এবং বিষয়বস্তু</a></li>
                    <li className="mt-3"><a href="#সেবা ব্যবস্থাপনা">সেবা ব্যবস্থাপনা</a></li>
                    <li className="mt-3"><a href="#গোপনীয়তা নীতি">গোপনীয়তা নীতি</a></li>
                    <li className="mt-3"><a href="#কপিরাইট লঙ্ঘন">কপিরাইট লঙ্ঘন</a></li>
                    <li className="mt-3"><a href="#শব্দ এবং পরিসমাপ্তি">শব্দ এবং পরিসমাপ্তি</a></li>
                    <li className="mt-3"><a href="#পরিবর্তন এবং বাধা">পরিবর্তন এবং বাধা</a></li>
                    <li className="mt-3"><a href="#সরকারি আইন">সরকারি আইন</a></li>
                    <li className="mt-3"><a href="#বিরোধ নিষ্পত্তি">বিরোধ নিষ্পত্তি</a></li>
                    <li className="mt-3"><a href="#সংশোধন">সংশোধন</a></li>
                    <li className="mt-3"><a href="#দাবিত্যাগ">দাবিত্যাগ</a></li>
                    <li className="mt-3"><a href="#দায়বদ্ধতার সীমাবদ্ধতা">দায়বদ্ধতার সীমাবদ্ধতা</a></li>
                    <li className="mt-3"><a href="#ক্ষতিপূরণ">ক্ষতিপূরণ</a></li>
                    <li className="mt-3"><a href="#ব্যবহারকারী তথ্য">ব্যবহারকারী তথ্য</a></li>
                    <li className="mt-3"><a href="#ইলেকট্রনিক যোগাযোগ, লেনদেন, এবং স্বাক্ষর">ইলেকট্রনিক যোগাযোগ, লেনদেন, এবং স্বাক্ষর</a></li>
                    <li className="mt-3"><a href="#ক্যালিফোর্নিয়া ব্যবহারকারী এবং বাসিন্দারা">ক্যালিফোর্নিয়া ব্যবহারকারী এবং বাসিন্দারা</a></li>
                    <li className="mt-3"><a href="#বিবিধ">বিবিধ</a></li>
                    <li className="mt-3"><a href="#যোগাযোগ করুন">যোগাযোগ করুন</a></li>
                </ol> <br /> <br />
                <h3 id='আমাদের সেবাসমূহ'>1. আমাদের সেবাসমূহ</h3> <br />
                <p>পরিষেবাগুলি ব্যবহার করার সময় প্রদত্ত তথ্যগুলি কোনও ব্যক্তি বা সত্তার দ্বারা কোনও অধিক্ষেত্র বা দেশে বিতরণ বা ব্যবহারের উদ্দেশ্যে নয় যেখানে এই ধরনের বিতরণ বা ব্যবহার আইন বা প্রবিধানের পরিপন্থী হবে বা যা এই ধরনের এখতিয়ারের মধ্যে আমাদের নিবন্ধকরণের প্রয়োজনীয়তার বিষয় হবে দেশ তদনুসারে, যে সমস্ত ব্যক্তিরা অন্যান্য স্থান থেকে পরিষেবাগুলি অ্যাক্সেস করতে বেছে নেয় তারা তাদের নিজস্ব উদ্যোগে তা করে এবং স্থানীয় আইনগুলি প্রযোজ্য হলে স্থানীয় আইন মেনে চলার জন্য সম্পূর্ণরূপে দায়ী৷<br /><br />

                    পরিষেবাগুলি শিল্প-নির্দিষ্ট প্রবিধানগুলি (হেলথ ইন্স্যুরেন্স পোর্টেবিলিটি অ্যান্ড অ্যাকাউন্টিবিলিটি অ্যাক্ট (HIPAA), ফেডারেল ইনফরমেশন সিকিউরিটি ম্যানেজমেন্ট অ্যাক্ট (FISMA), ইত্যাদি) মেনে চলার জন্য তৈরি করা হয়নি, তাই যদি আপনার মিথস্ক্রিয়াগুলি এই ধরনের আইনের অধীন হয়, আপনি নাও করতে পারেন পরিষেবাগুলি ব্যবহার করুন। আপনি এমনভাবে পরিষেবাগুলি ব্যবহার করবেন না যা গ্রাম-লিচ-ব্লিলি আইন (GLBA) লঙ্ঘন করবে৷
                </p><br /><br />
                <h3 id='মেধা সম্পত্তি অধিকার'>2.মেধা সম্পত্তি অধিকার</h3> <br />
                <h5>আমাদের বুদ্ধিবৃত্তিক সম্পত্তি</h5> <br />
                <p>আমরা আমাদের পরিষেবাগুলির সমস্ত সোর্স কোড, ডেটাবেস, কার্যকারিতা, সফ্টওয়্যার, ওয়েবসাইট ডিজাইন, অডিও, ভিডিও, পাঠ্য, ফটোগ্রাফ এবং পরিষেবাগুলিতে গ্রাফিক্স সহ সমস্ত মেধা সম্পত্তি অধিকারের মালিক বা লাইসেন্সধারী (একত্রিতভাবে, "সামগ্রী" ), সেইসাথে ট্রেডমার্ক, পরিষেবা চিহ্ন এবং এতে থাকা লোগো ("মার্কস")।<br /><br />

                    আমাদের বিষয়বস্তু এবং চিহ্নগুলি কপিরাইট এবং ট্রেডমার্ক আইন (এবং অন্যান্য বিভিন্ন মেধা সম্পত্তি অধিকার এবং অন্যায্য প্রতিযোগিতা আইন) এবং মার্কিন যুক্তরাষ্ট্র এবং সারা বিশ্বে চুক্তি দ্বারা সুরক্ষিত।<br /><br />
                    বিষয়বস্তু এবং চিহ্নগুলি শুধুমাত্র আপনার ব্যক্তিগত, অ-বাণিজ্যিক ব্যবহার বা অভ্যন্তরীণ ব্যবসায়িক উদ্দেশ্যে "AS IS" পরিষেবাগুলিতে বা এর মাধ্যমে প্রদান করা হয়।
                </p> <br /> <br />

                <h5>আপনার আমাদের পরিষেবার ব্যবহার</h5> <br />
                <p>
                    নীচের <a href="">"নিষিদ্ধ ক্রিয়াকলাপ"</a> বিভাগ সহ এই আইনী শর্তাবলীর সাথে আপনার সম্মতি সাপেক্ষে, আমরা আপনাকে একটি অ-এক্সক্লুসিভ, অ-হস্তান্তরযোগ্য, প্রত্যাহারযোগ্য লাইসেন্স প্রদান করি:<br /> < br />

                    পরিষেবাগুলি অ্যাক্সেস করুন; এবং <br />
                    আপনি সঠিকভাবে অ্যাক্সেস পেয়েছেন এমন সামগ্রীর যে কোনও অংশের একটি অনুলিপি ডাউনলোড বা মুদ্রণ করুন।
                    <br /> <br />
                    শুধুমাত্র আপনার ব্যক্তিগত, অ-বাণিজ্যিক ব্যবহার বা অভ্যন্তরীণ ব্যবসায়িক উদ্দেশ্যে।<br /> <br />

                    এই বিভাগে বা আমাদের আইনি শর্তাবলীর অন্য কোথাও উল্লেখ করা ছাড়া, পরিষেবার কোনও অংশ এবং কোনও বিষয়বস্তু বা চিহ্ন অনুলিপি, পুনরুত্পাদন, একত্রিত, পুনঃপ্রকাশ, আপলোড, পোস্ট, সর্বজনীনভাবে প্রদর্শিত, এনকোড, অনুবাদ, প্রেরণ, বিতরণ, বিক্রি করা যাবে না। , লাইসেন্সপ্রাপ্ত, বা অন্যথায় কোনো বাণিজ্যিক উদ্দেশ্যে শোষিত যাহাই হোক না কেন, আমাদের প্রকাশ্য পূর্ব লিখিত অনুমতি ছাড়াই।
                    <br /> <br />
                    আপনি যদি এই বিভাগে বা আমাদের আইনগত শর্তাবলীতে অন্য কোথাও উল্লেখ করা ব্যতীত পরিষেবা, বিষয়বস্তু বা চিহ্নগুলি ব্যবহার করতে চান, তাহলে অনুগ্রহ করে আপনার অনুরোধের ঠিকানা করুন: mdpervez946@gmail.com। যদি আমরা কখনও আপনাকে আমাদের পরিষেবা বা বিষয়বস্তুর কোনও অংশ পোস্ট, পুনরুত্পাদন বা সর্বজনীনভাবে প্রদর্শন করার অনুমতি দেই, তাহলে আপনাকে অবশ্যই আমাদের পরিষেবা, বিষয়বস্তু বা চিহ্নের মালিক বা লাইসেন্সদাতা হিসাবে শনাক্ত করতে হবে এবং নিশ্চিত করতে হবে যে কোনও কপিরাইট বা মালিকানা বিজ্ঞপ্তি প্রদর্শিত হবে বা আমাদের বিষয়বস্তু পোস্ট করা, পুনরুত্পাদন বা প্রদর্শন করার সময় দৃশ্যমান৷<br /> <br />

                    আমরা পরিষেবা, বিষয়বস্তু এবং চিহ্নগুলিতে এবং আপনাকে স্পষ্টভাবে দেওয়া হয়নি এমন সমস্ত অধিকার সংরক্ষণ করি।
                    <br /> <br />
                    এই বৌদ্ধিক সম্পত্তি অধিকারের যে কোন লঙ্ঘন আমাদের আইনি শর্তাবলীর একটি উপাদান লঙ্ঘন গঠন করবে এবং আমাদের পরিষেবাগুলি ব্যবহার করার আপনার অধিকার অবিলম্বে শেষ হয়ে যাবে।

                </p> <br /> <br />

                <h5>আপনার জমা এবং অবদান</h5> <br />
                <p>অনুগ্রহ করে আগে এই বিভাগটি এবং "নিষিদ্ধ কার্যকলাপ" বিভাগটি সাবধানে পর্যালোচনা করুন
                    (a) আপনার দেওয়া অধিকার এবং (b) আপনার বাধ্যবাধকতা বোঝার জন্য আমাদের পরিষেবাগুলি ব্যবহার করার জন্য৷
                    আপনি যখন পরিষেবাগুলির মাধ্যমে কোনও বিষয়বস্তু পোস্ট বা আপলোড করেন।
                    <br />
                    <span className='font-bold'>জমা:</span>সরাসরি আমাদের কোন প্রশ্ন, মন্তব্য, পরামর্শ, ধারণা পাঠানোর মাধ্যমে,
                    প্রতিক্রিয়া, বা পরিষেবা সম্পর্কে অন্যান্য তথ্য ("জমা"), আপনি সম্মত হন৷
                    এই ধরনের জমাতে আমাদের সমস্ত মেধা সম্পত্তি অধিকার বরাদ্দ করুন। আপনি একমত যে আমরা
                    এই জমার মালিক হবে এবং এর অবাধ ব্যবহার এবং প্রচারের অধিকারী হবে
                    কোন বৈধ উদ্দেশ্যে, বাণিজ্যিক বা অন্যথায়, স্বীকৃতি ছাড়া বা
                    আপনাকে ক্ষতিপূরণ। <br /> <br />

                    <span className='font-bold'>অবদান:</span>পরিষেবাগুলি আপনাকে চ্যাট করতে, অবদান রাখতে বা অংশগ্রহণ করতে আমন্ত্রণ জানাতে পারে৷
                    ব্লগ, বার্তা বোর্ড, অনলাইন ফোরাম এবং অন্যান্য কার্যকারিতা যা আপনি করতে পারেন
                    তৈরি, জমা, পোস্ট, প্রদর্শন, প্রেরণ, প্রকাশ, বিতরণ, বা সম্প্রচার সামগ্রী এবং
                    আমাদের কাছে বা পরিষেবাগুলির মাধ্যমে সামগ্রী, যার মধ্যে পাঠ্য, লেখাগুলি সহ কিন্তু সীমাবদ্ধ নয়,
                    ভিডিও, অডিও, ফটোগ্রাফ, সঙ্গীত, গ্রাফিক্স, মন্তব্য, পর্যালোচনা, রেটিং পরামর্শ,
                    ব্যক্তিগত তথ্য, বা অন্যান্য উপাদান ("অবদান")। যে কোনো দাখিল
                    সর্বজনীনভাবে পোস্ট করাকেও একটি অবদান হিসাবে গণ্য করা হবে৷<br /> <br />৷
                    আপনি বুঝতে পেরেছেন যে অবদানগুলি পরিষেবার অন্যান্য ব্যবহারকারীদের দ্বারা দৃশ্যমান হতে পারে৷
                    এবং সম্ভবত তৃতীয় পক্ষের ওয়েবসাইটের মাধ্যমে <br /> <br />

                    <span className='font-bold'>আপনি অবদান পোস্ট করার সময়, আপনি আমাদের একটি লাইসেন্স প্রদান করেন (আপনার ব্যবহার সহ
                        নাম, ট্রেডমার্ক এবং লোগো):</span> যেকোন অবদান পোস্ট করার মাধ্যমে আপনি আমাদের একটি অনুদান দেন
                    সীমাহীন, সীমাহীন, অপরিবর্তনীয়, চিরস্থায়ী, অ-এক্সক্লুসিভ, হস্তান্তরযোগ্য, রয়্যালটি মুক্ত, সম্পূর্ণ অর্থপ্রদান, বিশ্বব্যাপী অধিকার, এবং লাইসেন্স: ব্যবহার, অনুলিপি, পুনরুত্পাদন, বিতরণ, বিক্রয়,<br /> <br />
                    পুনঃবিক্রয় করুন, প্রকাশ করুন, সম্প্রচার করুন, রিটাইটেল করুন, সঞ্চয় করুন, সর্বজনীনভাবে সম্পাদন করুন, সর্বজনীনভাবে প্রদর্শন করুন, পুনরায় বিন্যাস করুন,
                    অনুবাদ, উদ্ধৃতি (সম্পূর্ণ বা আংশিক) এবং আপনার অবদানগুলিকে কাজে লাগান (সহ,
                    সীমাবদ্ধতা ছাড়াই, আপনার ছবি, নাম, এবং ভয়েস) যেকোনো উদ্দেশ্যে, বাণিজ্যিক,<br /> <br />
                    বিজ্ঞাপন, বা অন্যথায়, এর ডেরিভেটিভ কাজ প্রস্তুত করতে, বা অন্যের মধ্যে অন্তর্ভুক্ত করতে
                    কাজ, আপনার অবদান, এবং এই বিভাগে প্রদত্ত লাইসেন্সগুলিকে সাবলাইসেন্স করতে। আমাদের
                    ব্যবহার এবং বিতরণ যেকোনো মিডিয়া ফরম্যাটে এবং যেকোনো মিডিয়ার মাধ্যমে ঘটতে পারে
                    চ্যানেল।<br /> <br />
                    এই লাইসেন্সে আপনার নাম, কোম্পানির নাম এবং ফ্র্যাঞ্চাইজির নাম ব্যবহার করা অন্তর্ভুক্ত
                    প্রযোজ্য, এবং যেকোনো ট্রেডমার্ক, সার্ভিস মার্ক, ট্রেড নেম, লোগো এবং
                    আপনার দেওয়া ব্যক্তিগত এবং বাণিজ্যিক ছবি।<br /> <br />

                    <span className='font-bold'>আপনি যা পোস্ট বা আপলোড করেন তার জন্য আপনি দায়ী:</span> আমাদের জমা পাঠানোর মাধ্যমে
                    এবং/অথবা পরিষেবার যেকোনো অংশের মাধ্যমে অবদান পোস্ট করা বা করা
                    এর মাধ্যমে আপনার অ্যাকাউন্ট লিঙ্ক করে পরিষেবাগুলির মাধ্যমে অবদানগুলি অ্যাক্সেসযোগ্য
                    আপনার যেকোনো সামাজিক নেটওয়ার্কিং অ্যাকাউন্টে পরিষেবা, আপনি:<br /> <br />


                    <ul class="list-disc pl-[8px] sm:pl-[17px]">
                        <li className='mb-3'>নিশ্চিত করুন যে আপনি আমাদের "নিষিদ্ধ ক্রিয়াকলাপ" পড়েছেন এবং এর সাথে একমত
                            এবং পরিষেবাগুলির মাধ্যমে পোস্ট, পাঠা, প্রকাশ, আপলোড বা প্রেরণ করবে না৷
                            বেআইনি, হয়রানিমূলক, ঘৃণ্য,
                            ক্ষতিকর, মানহানিকর, অশ্লীল, ধমক, অপমানজনক, বৈষম্যমূলক, হুমকি
                            কোনো ব্যক্তি বা গোষ্ঠী, যৌন সুস্পষ্ট, মিথ্যা, ভুল, প্রতারক, বা
                            বিভ্রান্তিকর;</li>
                        <li className='mb-3'>প্রযোজ্য আইন দ্বারা অনুমোদিত পরিমাণে, যে কোনো এবং সমস্ত নৈতিক অধিকার পরিত্যাগ করুন
                            এই ধরনের কোনো জমা এবং/অথবা অবদান;</li>
                        <li className='mb-3'>ওয়্যারেন্ট যে এই ধরনের যেকোন জমা এবং/অথবা অবদানগুলি আপনার কাছে আসল অথবা
                            যে আপনার কাছে এই ধরনের দাখিল জমা দেওয়ার জন্য প্রয়োজনীয় অধিকার এবং লাইসেন্স রয়েছে
                            এবং/অথবা অবদান এবং আপনার জমা এবং/অথবা অবদানের ক্ষেত্রে আমাদের উপরে উল্লিখিত অধিকারগুলি প্রদানের সম্পূর্ণ কর্তৃত্ব রয়েছে; এবং
                        </li>
                        <li className='mb-3'>ওয়ারেন্ট এবং প্রতিনিধিত্ব করে যে আপনার জমা এবং/অথবা অবদানগুলি নয়
                            গোপন তথ্য গঠন.

                        </li>
                    </ul>
                    আপনি আপনার জমা এবং/অথবা অবদানের জন্য সম্পূর্ণরূপে দায়ী এবং আপনি
                    আমরা যে কোনও এবং সমস্ত ক্ষতির জন্য আমাদের ক্ষতিপূরণ দিতে স্পষ্টভাবে সম্মত
                    আপনার লঙ্ঘন (a) এই ধারা, (b) কোনো তৃতীয় পক্ষের মেধা সম্পত্তি অধিকার, বা (c)
                    প্রযোজ্য আইন।<br /> <br />

                    আমরা আপনার বিষয়বস্তু অপসারণ বা সম্পাদনা করতে পারি: যদিও আমাদের পর্যবেক্ষণ করার কোনো বাধ্যবাধকতা নেই
                    যেকোনো অবদান, আমাদের কাছে যেকোনো অবদানকে অপসারণ বা সম্পাদনা করার অধিকার থাকবে
                    নোটিশ ছাড়া সময় যদি আমাদের যুক্তিসঙ্গত মতামত আমরা এই ধরনের অবদান বিবেচনা
                    ক্ষতিকারক বা এই আইনি শর্তাবলী লঙ্ঘন. যদি আমরা এই ধরনের কোনো অপসারণ বা সম্পাদনা করি
                    <br /> <br />
                    অবদান, আমরা আপনার অ্যাকাউন্ট স্থগিত বা নিষ্ক্রিয় করতে পারি এবং আপনাকে রিপোর্ট করতে পারি
                    কর্তৃপক্ষ <br />
                    <span className='text-xl font-bold'>কপিরাইট লঙ্ঘন</span> <br /> <br />
                    আমরা অন্যদের মেধা সম্পত্তি অধিকার সম্মান. যদি আপনি বিশ্বাস করেন যে কোন উপাদান
                    আপনার মালিকানাধীন বা নিয়ন্ত্রণ করা কোনো কপিরাইট লঙ্ঘন করে পরিষেবাগুলির মাধ্যমে বা এর মাধ্যমে উপলব্ধ,
                    অনুগ্রহ করে অবিলম্বে নীচের "কপিরাইট লঙ্ঘন" বিভাগটি দেখুন <br /> <br />
                </p>
                <h3 id='আমাদের সেবাসমূহ'>3.আমাদের সেবাসমূহ</h3> <br />
                <p>পরিষেবাগুলি ব্যবহার করে, আপনি প্রতিনিধিত্ব করেন এবং নিশ্চিত করেন যে: (1) সমস্ত নিবন্ধন তথ্য৷
                    আপনি জমা দেবেন সত্য, নির্ভুল, বর্তমান এবং সম্পূর্ণ; (2) আপনি বজায় রাখবেন
                    এই ধরনের তথ্যের যথার্থতা এবং অবিলম্বে যেমন নিবন্ধন তথ্য আপডেট
                    প্রয়োজনীয় (3) আপনার আইনি ক্ষমতা আছে এবং আপনি এই আইন মেনে চলতে সম্মত হন
                    শর্তাবলী; (4) আপনি যে এখতিয়ারে থাকেন সেখানে আপনি নাবালক নন; (5) আপনি করবেন না
                    স্বয়ংক্রিয় বা অ-মানবিক উপায়ে পরিষেবাগুলি অ্যাক্সেস করুন, তা একটি মাধ্যমে হোক না কেন
                    বট, স্ক্রিপ্ট বা অন্যথায়; (6) আপনি কোনো বেআইনি বা পরিষেবার জন্য ব্যবহার করবেন না
                    অননুমোদিত উদ্দেশ্য; এবং (7) আপনার পরিষেবাগুলির ব্যবহার কোন প্রযোজ্য লঙ্ঘন করবে না
                    আইন বা প্রবিধান।<br /><br />
                    আপনি যদি এমন কোনো তথ্য প্রদান করেন যা অসত্য, ভুল, বর্তমান নয় বা অসম্পূর্ণ,
                    আপনার অ্যাকাউন্ট স্থগিত বা বন্ধ করার এবং যেকোনো এবং সমস্ত প্রত্যাখ্যান করার অধিকার আমাদের আছে
                    পরিষেবাগুলির বর্তমান বা ভবিষ্যতের ব্যবহার (বা এর কোনও অংশ)।
                </p><br /><br />
                <h3 id=' ব্যবহারকারী নিবন্ধন'>4. ব্যবহারকারী নিবন্ধন</h3> <br />
                <p>পরিষেবাগুলি ব্যবহার করার জন্য আপনাকে নিবন্ধন করতে হতে পারে৷ আপনি আপনার রাখতে রাজি
                    পাসওয়ার্ড গোপনীয় এবং আপনার অ্যাকাউন্টের সমস্ত ব্যবহারের জন্য দায়ী থাকবে এবং
                    পাসওয়ার্ড আমরা আপনার নির্বাচিত ব্যবহারকারীর নাম অপসারণ, পুনরুদ্ধার বা পরিবর্তন করার অধিকার সংরক্ষণ করি
                    যদি আমরা নির্ধারণ করি, আমাদের নিজস্ব বিবেচনার ভিত্তিতে, এই ধরনের ব্যবহারকারীর নাম অনুপযুক্ত, অশ্লীল,
                    অথবা অন্যথায় আপত্তিকর। <br /> <br />
                </p>
                <h3 id='ক্রয় এবং অর্থপ্রদান'>5.ক্রয় এবং অর্থপ্রদান</h3> <br />
                <p>আমরা নিম্নলিখিত ধরনের অর্থপ্রদান গ্রহণ করি:</p> <br />
                <ul class="list-disc pl-[8px] sm:pl-[17px]">
                    <li className="mb-3">ভিসা</li>
                    <li className="mb-3">মাস্টারকার্ড</li>
                    <li className="mb-3">পেপাল</li>
                </ul><br /><br />
                <p>আপনি বর্তমান, সম্পূর্ণ, এবং সঠিক ক্রয় এবং অ্যাকাউন্ট প্রদান করতে সম্মত হন
                    পরিষেবার মাধ্যমে করা সমস্ত কেনাকাটার জন্য তথ্য। আপনি আরও অবিলম্বে সম্মত হন
                    ইমেল ঠিকানা, অর্থপ্রদানের পদ্ধতি সহ অ্যাকাউন্ট এবং অর্থপ্রদানের তথ্য আপডেট করুন,
                    এবং পেমেন্ট কার্ডের মেয়াদ শেষ হওয়ার তারিখ, যাতে আমরা আপনার লেনদেন সম্পূর্ণ করতে পারি এবং
                    প্রয়োজনে আপনার সাথে যোগাযোগ করুন। বিবেচিত হিসাবে ক্রয়ের মূল্যের সাথে বিক্রয় কর যোগ করা হবে
                    আমাদের দ্বারা প্রয়োজনীয়। আমরা যেকোনো সময় দাম পরিবর্তন করতে পারি। সমস্ত অর্থপ্রদান মার্কিন যুক্তরাষ্ট্র হতে হবে
                    ডলার।<br /> <br />
                    আপনি মূল্যে সমস্ত চার্জ দিতে সম্মত হন তারপর আপনার কেনাকাটা এবং যেকোনোটির জন্য কার্যকর হবে৷
                    প্রযোজ্য শিপিং ফি, এবং আপনি আপনার নির্বাচিত অর্থপ্রদান চার্জ করার জন্য আমাদের অনুমোদন করেন
                    আপনার অর্ডার স্থাপনের পরে এই ধরনের কোনো পরিমাণের জন্য প্রদানকারী. আমরা অধিকার সংরক্ষিত
                    মূল্য নির্ধারণে কোনো ত্রুটি বা ভুল সংশোধন করুন, এমনকি যদি আমরা ইতিমধ্যে অনুরোধ করে থাকি বা
                    পেমেন্ট পেয়েছি।<br /> <br />
                    আমরা পরিষেবাগুলির মাধ্যমে দেওয়া কোনও আদেশ প্রত্যাখ্যান করার অধিকার সংরক্ষণ করি৷ আমরা, আমাদের মধ্যে হতে পারে
                    একক বিবেচনা, সীমিত বা বাতিল পরিমাণ প্রতি ব্যক্তি, পরিবার প্রতি, বা প্রতি ক্রয় করা
                    আদেশ এই বিধিনিষেধের মধ্যে একই গ্রাহকের দ্বারা বা অধীনে রাখা অর্ডার অন্তর্ভুক্ত থাকতে পারে
                    অ্যাকাউন্ট, একই অর্থপ্রদানের পদ্ধতি এবং/অথবা একই বিলিং ব্যবহার করে এমন আদেশ বা
                    প্রেরণের ঠিকানা. আমরা আদেশ সীমিত বা নিষেধ করার অধিকার সংরক্ষণ করি যে, আমাদের একমাত্র মধ্যে
                    ডিলার, রিসেলার বা ডিস্ট্রিবিউটরদের দ্বারা বিচার করা হয়েছে বলে মনে হচ্ছে।<br /> <br />

                </p>
                <h3 id='নীতি'>6.নীতি</h3> <br />
                <p>সমস্ত বিক্রয় চূড়ান্ত এবং কোন ফেরত জারি করা হবে না.</p> <br /> <br />
                <h3 id='নিষিদ্ধ কার্যকলাপ'>7.নিষিদ্ধ কার্যকলাপ</h3> <br />
                <p>আপনি আমাদের পরিষেবাগুলি ছাড়া অন্য কোনও উদ্দেশ্যে অ্যাক্সেস বা ব্যবহার করতে পারবেন না
                    সেবা উপলব্ধ করা. পরিষেবাগুলি কোনও ক্ষেত্রে ব্যবহার করা যাবে না
                    বিশেষভাবে অনুমোদিত বা অনুমোদিত যেগুলি ছাড়া বাণিজ্যিক প্রচেষ্টা
                    আমাদের।<br /> <br />
                    পরিষেবাগুলির একজন ব্যবহারকারী হিসাবে, আপনি সম্মত হন না:<br /> <br />
                    <ul class="list-disc pl-[8px] sm:pl-[17px]">
                        <li className="mb-3">নিয়মিতভাবে পরিষেবাগুলি থেকে ডেটা বা অন্যান্য সামগ্রী পুনরুদ্ধার করুন বা তৈরি করতে
                            কম্পাইল, প্রত্যক্ষ বা পরোক্ষভাবে, একটি সংগ্রহ, সংকলন, ডাটাবেস, বা ডিরেক্টরি
                            আমাদের কাছ থেকে লিখিত অনুমতি ছাড়া।
                        </li>
                        <li className="mb-3">কৌশল, প্রতারণা, বা আমাদের এবং অন্যান্য ব্যবহারকারীদের বিভ্রান্ত করা, বিশেষ করে শেখার কোনো প্রচেষ্টায়
                            সংবেদনশীল অ্যাকাউন্ট তথ্য যেমন ব্যবহারকারীর পাসওয়ার্ড</li>
                        <li className="mb-3">এর নিরাপত্তা-সম্পর্কিত বৈশিষ্ট্যগুলিকে ফাঁকি দেওয়া, অক্ষম করা বা অন্যথায় হস্তক্ষেপ করা
                            পরিষেবাগুলি, এমন বৈশিষ্ট্যগুলি সহ যা কোনও ব্যবহার বা অনুলিপি প্রতিরোধ বা সীমাবদ্ধ করে৷
                            বিষয়বস্তু বা পরিষেবা এবং/অথবা বিষয়বস্তুর ব্যবহারে সীমাবদ্ধতা প্রয়োগ করে৷
                            এর মধ্যে রয়েছে</li>
                        <li className="mb-3">আমাদের মতে, আমাদের এবং/অথবা পরিষেবাগুলিকে অপমান, কলঙ্কিত বা অন্যথায় ক্ষতি করে৷
                        </li>
                        <li className="mb-3"> হয়রানি, অপব্যবহার, বা
                            অন্য ব্যক্তির ক্ষতি</li>
                        <li className="mb-3">আমাদের সহায়তা পরিষেবাগুলির অনুপযুক্ত ব্যবহার করা বা অপব্যবহারের মিথ্যা প্রতিবেদন জমা দেওয়া বা
                            অসদাচরণ</li>
                        <li className="mb-3">কোনও প্রযোজ্য আইনের সাথে অসামঞ্জস্যপূর্ণভাবে পরিষেবাগুলি ব্যবহার করুন বা
                            আইন.
                        </li>
                        <li className="mb-3">পরিষেবাগুলির অননুমোদিত ফ্রেমিং বা লিঙ্কিংয়ে জড়িত হন৷
                        </li>
                        <li className="mb-3">ভাইরাস, ট্রোজান হর্স, আপলোড বা ট্রান্সমিট (বা আপলোড বা ট্রান্সমিট করার চেষ্টা)
                            বা অন্যান্য উপাদান, বড় অক্ষরের অত্যধিক ব্যবহার এবং স্প্যামিং সহ
                            (পুনরাবৃত্তিমূলক পাঠ্যের ক্রমাগত পোস্টিং), যা যেকোনো পক্ষের সাথে হস্তক্ষেপ করে
                            পরিষেবাগুলির নিরবচ্ছিন্ন ব্যবহার এবং উপভোগ করা বা সংশোধন, বাধা, ব্যাহত,
                            পরিবর্তন বা ব্যবহার, বৈশিষ্ট্য, ফাংশন, অপারেশন, বা রক্ষণাবেক্ষণে হস্তক্ষেপ করে
                            পরিষেবাগুলির</li>
                        <li className="mb-3">সিস্টেমটির যেকোনো স্বয়ংক্রিয় ব্যবহারে নিয়োজিত থাকুন, যেমন পাঠাতে স্ক্রিপ্ট ব্যবহার করা
                            মন্তব্য বা বার্তা, অথবা কোনো ডেটা মাইনিং, রোবট, বা অনুরূপ ডেটা ব্যবহার করে
                            সংগ্রহ এবং নিষ্কাশন সরঞ্জাম</li>
                        <li className="mb-3">কোন বিষয়বস্তু থেকে কপিরাইট বা অন্যান্য মালিকানা অধিকার বিজ্ঞপ্তি মুছে দিন৷</li>
                        <li className="mb-3">অন্য ব্যবহারকারী বা ব্যক্তির ছদ্মবেশী করার চেষ্টা বা এর ব্যবহারকারীর নাম ব্যবহার
                            অন্য ব্যবহারকারী।
                        </li>
                        <li className="mb-3"> যে কোনো উপাদান আপলোড বা ট্রান্সমিট (বা আপলোড বা ট্রান্সমিট করার চেষ্টা)
                            একটি নিষ্ক্রিয় বা সক্রিয় তথ্য সংগ্রহ বা সংক্রমণ প্রক্রিয়া হিসাবে,
                            সীমাবদ্ধতা ছাড়াই, পরিষ্কার গ্রাফিক্স ইন্টারচেঞ্জ ফরম্যাট ("gifs"), 1×1
                            পিক্সেল, ওয়েব বাগ, কুকিজ বা অন্যান্য অনুরূপ ডিভাইস (কখনও কখনও হিসাবে উল্লেখ করা হয়
                            "স্পাইওয়্যার" বা "প্যাসিভ কালেকশন মেকানিজম" বা "pcms")।
                        </li>
                        <li className="mb-3">সেবা বা
                            পরিষেবাগুলির সাথে সংযুক্ত নেটওয়ার্ক বা পরিষেবাগুলি</li>৷
                        <li className="mb-3">আমাদের যে কোনো কর্মচারী বা এজেন্টদের হয়রানি, বিরক্ত, ভয় দেখানো বা হুমকি দেওয়া
                            আপনাকে পরিষেবার কোনো অংশ প্রদানে নিযুক্ত।</li>
                        <li className="mb-3">প্রতিরোধের জন্য পরিকল্পিত পরিষেবাগুলির যেকোনো ব্যবস্থাকে বাইপাস করার প্রচেষ্টা বা
                            পরিষেবাগুলি বা পরিষেবাগুলির কোনও অংশে অ্যাক্সেস সীমাবদ্ধ করুন৷
                        </li>
                        <li className="mb-3">পরিষেবাগুলির সফ্টওয়্যার অনুলিপি করুন বা মানানসই করুন, যার মধ্যে ফ্ল্যাশ, পিএইচপি, সহ কিন্তু সীমাবদ্ধ নয়
                            এইচটিএমএল, জাভাস্ক্রিপ্ট, বা অন্য কোড</li>
                        <li className="mb-3">প্রযোজ্য আইন দ্বারা অনুমোদিত ব্যতীত, পাঠোদ্ধার, ডিকম্পাইল, বিচ্ছিন্ন করা বা
                            যেকোন সফটওয়্যারকে রিভার্স ইঞ্জিনিয়ার তৈরি করুন বা যেকোন উপায়ে ক
                            পরিষেবার অংশ</li>
                        <li className="mb-3">মান সার্চ ইঞ্জিন বা ইন্টারনেট ব্রাউজারের ফলাফল ছাড়া
                            কোন স্বয়ংক্রিয় সিস্টেম ব্যবহার, ব্যবহার, লঞ্চ, বিকাশ, বা বিতরণ সহ
                            সীমাবদ্ধতা ছাড়াই, কোনো মাকড়সা, রোবট, চিট ইউটিলিটি, স্ক্র্যাপার বা অফলাইন পাঠক
                            পরিষেবাগুলি অ্যাক্সেস করে বা অননুমোদিত স্ক্রিপ্ট বা অন্য কোনও ব্যবহার বা লঞ্চ করে৷
                            সফ্টওয়্যার</li>
                        <li className="mb-3">পরিষেবাগুলিতে কেনাকাটা করতে একটি ক্রয় এজেন্ট বা ক্রয় এজেন্ট ব্যবহার করুন৷</li>
                        <li className="mb-3">ব্যবহারকারীর নাম সংগ্রহ করা সহ পরিষেবাগুলির যেকোনো অননুমোদিত ব্যবহার করা
                            এবং/অথবা এই উদ্দেশ্যে ইলেকট্রনিক বা অন্য উপায়ে ব্যবহারকারীদের ইমেল ঠিকানা
                            অবাঞ্ছিত ইমেল পাঠানো, বা স্বয়ংক্রিয় উপায়ে ব্যবহারকারীর অ্যাকাউন্ট তৈরি করা বা
                            মিথ্যা ছলে।</li>
                        <li className="mb-3">আমাদের সাথে প্রতিদ্বন্দ্বিতা করার জন্য যেকোনো প্রচেষ্টার অংশ হিসাবে পরিষেবাগুলি ব্যবহার করুন বা অন্যথায় ব্যবহার করুন
                            পরিষেবা এবং/অথবা কোনো আয়-উৎপাদন প্রচেষ্টার জন্য সামগ্রী বা
                            বাণিজ্যিক প্রতিষ্ঠান.
                        </li>
                        <li className="mb-3">পণ্য এবং পরিষেবা বিক্রির বিজ্ঞাপন বা অফার করতে পরিষেবাগুলি ব্যবহার করুন৷
                        </li>
                        <li className="mb-3">আপনার প্রোফাইল বিক্রি করুন বা অন্যথায় স্থানান্তর করুন</li>
                    </ul> <br /> <br />
                </p> <br /> <br />
                <h3 id='ব্যবহারকারী উত্পন্ন অবদান'>8.ব্যবহারকারী উত্পন্ন অবদান</h3> <br />
                <p>পরিষেবাগুলি আপনাকে চ্যাট করতে, অবদান রাখতে বা ব্লগে, বার্তায় অংশগ্রহণের জন্য আমন্ত্রণ জানাতে পারে
                    বোর্ড, অনলাইন ফোরাম, এবং অন্যান্য কার্যকারিতা, এবং আপনাকে প্রদান করতে পারে
                    সুযোগ তৈরি, জমা, পোস্ট, প্রদর্শন, প্রেরণ, সম্পাদন, প্রকাশ, বিতরণ, বা
                    আমাদের বা পরিষেবাগুলিতে বিষয়বস্তু এবং উপকরণ সম্প্রচার করুন, যার মধ্যে সীমাবদ্ধ নয়
                    পাঠ্য, লেখা, ভিডিও, অডিও, ফটোগ্রাফ, গ্রাফিক্স, মন্তব্য, পরামর্শ, বা
                    ব্যক্তিগত তথ্য বা অন্যান্য উপাদান (সম্মিলিতভাবে, "অবদান")। অবদানসমূহ
                    পরিষেবার অন্যান্য ব্যবহারকারীদের দ্বারা এবং তৃতীয় পক্ষের ওয়েবসাইটের মাধ্যমে দেখা যেতে পারে৷ হিসাবে
                    যেমন, আপনার প্রেরণ করা যেকোন অবদানকে অ-গোপনীয় এবং অ-মালিকানা হিসাবে বিবেচনা করা যেতে পারে। আপনি যখন কোনো অবদান তৈরি করেন বা উপলব্ধ করেন, তখন আপনি এর মাধ্যমে
                    প্রতিনিধিত্ব করুন এবং নিশ্চিত করুন যে:
                </p><br /><br />
                <ul class="list-disc pl-[8px] sm:pl-[17px]">
                    <li className="mb-3">সৃষ্টি, বিতরণ, ট্রান্সমিশন, পাবলিক ডিসপ্লে, বা কর্মক্ষমতা, এবং
                        আপনার অবদানগুলি অ্যাক্সেস করা, ডাউনলোড করা বা অনুলিপি করা হয় না এবং হবে না৷
                        কপিরাইট, পেটেন্ট সহ কিন্তু সীমাবদ্ধ নয় মালিকানা অধিকার লঙ্ঘন,
                        ট্রেডমার্ক, ট্রেড সিক্রেট বা তৃতীয় পক্ষের নৈতিক অধিকার।
                    </li>
                    <li className="mb-3">আপনিই স্রষ্টা এবং মালিক বা আপনার কাছে প্রয়োজনীয় লাইসেন্স, অধিকার আছে,
                        সম্মতি, রিলিজ, এবং আমাদের পরিষেবাগুলি ব্যবহার এবং অনুমোদন করার অনুমতি,
                        এবং পরিষেবাগুলির অন্যান্য ব্যবহারকারীরা যে কোনও উপায়ে আপনার অবদানগুলি ব্যবহার করতে৷
                        পরিষেবা এবং এই আইনী শর্তাবলী দ্বারা চিন্তা করা হয়েছে৷
                    </li>
                    <li className="mb-3">আপনার প্রত্যেকের লিখিত সম্মতি, মুক্তি এবং/অথবা অনুমতি আছে
                        নাম বা উপমা ব্যবহার করার জন্য আপনার অবদানগুলিতে সনাক্তযোগ্য ব্যক্তি
                        অন্তর্ভুক্তি সক্ষম করার জন্য প্রতিটি এবং এই ধরনের প্রতিটি শনাক্তযোগ্য পৃথক ব্যক্তি এবং
                        পরিষেবাগুলির দ্বারা বিবেচনা করা যে কোনও উপায়ে আপনার অবদানগুলির ব্যবহার এবং
                        এই আইনি শর্তাবলী</li>
                    <li className="mb-3">আপনার অবদানগুলি মিথ্যা, ভুল বা বিভ্রান্তিকর নয়৷
                    </li>
                    <li className="mb-3">আপনার অবদানগুলি অযাচিত বা অননুমোদিত বিজ্ঞাপন নয়, প্রচারমূলক
                        উপকরণ, পিরামিড স্কিম, চেইন লেটার, স্প্যাম, গণ মেইলিং বা অন্যান্য
                        অনুরোধের ফর্ম
                    </li>
                    <li className="mb-3">আপনার অবদানগুলি অশ্লীল, অশ্লীল, লম্পট, নোংরা, হিংস্র, হয়রানিমূলক নয়,
                        মানহানিকর, অপবাদ, বা অন্যথায় আপত্তিকর (আমাদের দ্বারা নির্ধারিত)।
                    </li>
                    <li className="mb-3">আপনার অবদান উপহাস, উপহাস, অপমান, ভয় দেখানো বা অপব্যবহার করে না
                        যে কেউ.
                    </li>
                    <li className="mb-3">আপনার অবদানগুলি হয়রানি বা হুমকি দেওয়ার জন্য ব্যবহার করা হয় না (আইনগত অর্থে
                        এই শর্তাবলী) অন্য কোন ব্যক্তি এবং একটি নির্দিষ্ট ব্যক্তির বিরুদ্ধে সহিংসতা প্রচার করা
                        ব্যক্তি বা শ্রেণীর লোক।</li>
                    <li className="mb-3">আপনার অবদান কোনো প্রযোজ্য আইন, প্রবিধান বা নিয়ম লঙ্ঘন করে না।
                        আপনার অবদানগুলি কোনও থার পার্টির গোপনীয়তা বা প্রচারের অধিকার লঙ্ঘন করে না৷</li>
                    <li className="mb-3"></li>
                    <li className="mb-3">আপনার অবদান শিশু সংক্রান্ত কোনো প্রযোজ্য আইন লঙ্ঘন করে না
                        পর্নোগ্রাফি, বা অন্যথায় এর স্বাস্থ্য বা মঙ্গল রক্ষা করার উদ্দেশ্যে
                        নাবালক
                    </li>
                    <li className="mb-3">আপনার অবদানে সংযুক্ত কোনো আপত্তিকর মন্তব্য অন্তর্ভুক্ত নয়
                        জাতি, জাতীয় উত্স, লিঙ্গ, যৌন পছন্দ, বা শারীরিক প্রতিবন্ধকতা।
                    </li>
                    <li className="mb-3">আপনার অবদানগুলি অন্যথায় লঙ্ঘন করে না বা লঙ্ঘন করে এমন উপাদানের সাথে লিঙ্ক করে না
                        এই আইনী শর্তাবলীর বিধান, বা কোনো প্রযোজ্য আইন বা প্রবিধান।
                    </li>
                    <li className="mb-3">পূর্বোক্ত শর্তাবলী লঙ্ঘন করে পরিষেবাগুলির যে কোনও ব্যবহার এই আইনী শর্তাবলী লঙ্ঘন করে এবং
                        এর ফলে, অন্যান্য জিনিসগুলির মধ্যে, আপনার ব্যবহারের অধিকারের অবসান বা স্থগিতাদেশ হতে পারে
                        পরিষেবাগুলি</li>
                </ul><br /><br />

                <h3 id='কন্ট্রিবিউশন লাইসেন্স'>9.কন্ট্রিবিউশন লাইসেন্স</h3> <br />
                <p>পরিষেবার যেকোনো অংশে আপনার অবদান পোস্ট করার মাধ্যমে, আপনি স্বয়ংক্রিয়ভাবে মঞ্জুর করেন,
                    এবং আপনি প্রতিনিধিত্ব করেন এবং প্রতিশ্রুতি দেন যে আপনার কাছে আমাদের অবাধে দেওয়ার অধিকার রয়েছে,
                    সীমাহীন, অপরিবর্তনীয়, চিরস্থায়ী, অ-এক্সক্লুসিভ, হস্তান্তরযোগ্য, রয়্যালটি-মুক্ত, সম্পূর্ণ অর্থপ্রদান,
                    বিশ্বব্যাপী অধিকার, এবং হোস্ট, ব্যবহার, অনুলিপি, পুনরুত্পাদন, প্রকাশ, বিক্রয়, পুনরায় বিক্রয় করার লাইসেন্স,
                    প্রকাশ, সম্প্রচার, রিটাইটেল, সংরক্ষণাগার, সঞ্চয়, ক্যাশে, সর্বজনীনভাবে সম্পাদন করা, সর্বজনীনভাবে প্রদর্শন করা,
                    রিফরম্যাট, অনুবাদ, প্রেরণ, উদ্ধৃতি (সম্পূর্ণ বা আংশিক) এবং বিতরণ করুন
                    যে কোনো উদ্দেশ্যে অবদান (সীমাবদ্ধতা ছাড়াই, আপনার ছবি এবং ভয়েস সহ)
                    বাণিজ্যিক, বিজ্ঞাপন, বা অন্যথায়, এবং এর ডেরিভেটিভ কাজ প্রস্তুত করতে, বা
                    অন্যান্য কাজের মধ্যে অন্তর্ভুক্ত করা, যেমন অবদান, এবং অনুদান এবং অনুমোদন
                    পূর্বোক্ত সাবলাইসেন্স। ব্যবহার এবং বিতরণ কোনো মিডিয়া হতে পারে
                    ফরম্যাট এবং যেকোনো মিডিয়া চ্যানেলের মাধ্যমে।<br /> <br />
                    এই লাইসেন্স এখন পরিচিত বা পরবর্তী যেকোন ফর্ম, মিডিয়া বা প্রযুক্তিতে প্রযোজ্য হবে
                    বিকশিত, এবং আমাদের আপনার নাম, কোম্পানির নাম এবং ফ্র্যাঞ্চাইজির নাম ব্যবহার অন্তর্ভুক্ত করে,
                    প্রযোজ্য হিসাবে, এবং ট্রেডমার্ক, পরিষেবা চিহ্ন, ট্রেড নাম, লোগো, এবং
                    আপনার দেওয়া ব্যক্তিগত এবং বাণিজ্যিক ছবি। আপনি আপনার সব নৈতিক অধিকার পরিত্যাগ
                    অবদান, এবং আপনি নিশ্চিত যে নৈতিক অধিকার অন্যথায় জোর দেওয়া হয়নি
                    আপনার অবদান।<br /> <br />
                    আমরা আপনার অবদানের উপর কোন মালিকানা জাহির করি না। আপনি সম্পূর্ণ মালিকানা বজায় রাখা
                    আপনার সমস্ত অবদান এবং যেকোন মেধা সম্পত্তি অধিকার বা অন্যান্য মালিকানা অধিকার
                    আপনার অবদানের সাথে যুক্ত। আমরা কোনো বিবৃতি বা জন্য দায়ী নই
                    পরিষেবাগুলিতে যে কোনও ক্ষেত্রে আপনার দ্বারা প্রদত্ত আপনার অবদানগুলিতে উপস্থাপনা৷
                    আপনি পরিষেবাগুলিতে আপনার অবদানের জন্য সম্পূর্ণরূপে দায়ী এবং আপনি স্পষ্টভাবে
                    আমাদের যেকোন এবং সমস্ত দায় থেকে অব্যাহতি দিতে এবং যে কোনও আইনি কাজ থেকে বিরত থাকতে সম্মত
                    আপনার অবদানের বিষয়ে আমাদের বিরুদ্ধে ব্যবস্থা নেওয়া৷<br /> <br />৷
                    আমাদের অধিকার আছে, আমাদের একক এবং পরম বিবেচনার ভিত্তিতে, (1) সম্পাদনা, সংশোধন বা অন্যথায়
                    কোনো অবদান পরিবর্তন; (2) যেকোন অবদানকে পুনঃশ্রেণীভুক্ত করা
                    পরিষেবাগুলিতে আরও উপযুক্ত অবস্থান; এবং (3) প্রি-স্ক্রিন বা যেকোনো একটি মুছে ফেলতে
                    যে কোন সময় এবং যে কোন কারণে, নোটিশ ছাড়াই অবদান। আমাদের কোন বাধ্যবাধকতা নেই
                    আপনার অবদান নিরীক্ষণ করতে।<br /> <br />
                </p>
                <h3 id='পর্যালোচনার জন্য নির্দেশিকা'>10.পর্যালোচনার জন্য নির্দেশিকা</h3> <br />
                <p>রিভিউ বা রেটিং দেওয়ার জন্য আমরা আপনাকে পরিষেবাগুলিতে ক্ষেত্রগুলি সরবরাহ করতে পারি। পোস্ট করার সময়
                    একটি পর্যালোচনা, আপনাকে অবশ্যই নিম্নলিখিত মানদণ্ডগুলি মেনে চলতে হবে: (1) আপনার নিজের হাতে থাকা উচিত
                    পর্যালোচনা করা ব্যক্তি/সত্তার অভিজ্ঞতা; (2) আপনার পর্যালোচনা থাকা উচিত নয়
                    আপত্তিকর অশ্লীলতা, বা অপমানজনক, বর্ণবাদী, আপত্তিকর, বা ঘৃণ্য ভাষা; (3) আপনার পর্যালোচনা
                    ধর্ম, জাতি, লিঙ্গ, জাতীয় উপর ভিত্তি করে বৈষম্যমূলক উল্লেখ থাকা উচিত নয়
                    উৎপত্তি, বয়স, বৈবাহিক অবস্থা, যৌন অভিযোজন, বা অক্ষমতা; (4) আপনার পর্যালোচনা করা উচিত নয়
                    অবৈধ কার্যকলাপের উল্লেখ রয়েছে; (5) আপনি যদি প্রতিযোগীদের সাথে সংযুক্ত না হন
                    নেতিবাচক পর্যালোচনা পোস্ট করা; (6) আপনি বৈধতা হিসাবে কোন উপসংহার করা উচিত নয়
                    আচরণের; (7) আপনি কোন মিথ্যা বা বিভ্রান্তিকর বিবৃতি পোস্ট করতে পারবেন না; এবং (8) আপনি পারেন
                    ইতিবাচক হোক বা রিভিউ পোস্ট করতে অন্যদের উৎসাহিত করে এমন প্রচারাভিযান সংগঠিত করবেন না
                    নেতিবাচক।<br /><br />
                    আমরা আমাদের নিজস্ব বিবেচনার ভিত্তিতে পর্যালোচনাগুলি গ্রহণ, প্রত্যাখ্যান বা অপসারণ করতে পারি। আমরা একেবারে আছে
                    স্ক্রীন রিভিউ বা রিভিউ মুছে ফেলার কোন বাধ্যবাধকতা নেই, এমনকি যদি কেউ বিবেচনা করে
                    রিভিউ আপত্তিকর বা ভুল। পর্যালোচনা আমাদের দ্বারা অনুমোদিত হয় না, এবং না
                    অগত্যা আমাদের মতামত বা আমাদের কোনো সহযোগী বা অংশীদারদের মতামত প্রতিনিধিত্ব করে। আমরা
                    কোনো পর্যালোচনার জন্য বা কোনো দাবি, দায়, বা ক্ষতির ফলে দায় স্বীকার করবেন না
                    যেকোনো পর্যালোচনা থেকে। একটি পর্যালোচনা পোস্ট করার মাধ্যমে, আপনি এতদ্বারা আমাদের একটি চিরস্থায়ী, অ-একচেটিয়া, বিশ্বব্যাপী, রয়্যালটি-মুক্ত, সম্পূর্ণ অর্থপ্রদানযোগ্য, বরাদ্দযোগ্য এবং সাবলাইসেন্সযোগ্য অধিকার এবং<br /><br />
                    যে কোনো উপায়ে পুনরুত্পাদন, পরিবর্তন, অনুবাদ, প্রেরণ, প্রদর্শন, সম্পাদনের লাইসেন্স
                    এবং/অথবা পর্যালোচনা সম্পর্কিত সমস্ত সামগ্রী বিতরণ করুন৷<br /><br />৷
                </p>
                <h3 id='তৃতীয় পক্ষের ওয়েবসাইট এবং বিষয়বস্তু'>11.তৃতীয় পক্ষের ওয়েবসাইট এবং বিষয়বস্তু</h3> <br />
                <p>
                    পরিষেবাগুলিতে অন্যান্য ওয়েবসাইটের লিঙ্ক থাকতে পারে (বা আপনাকে সাইটের মাধ্যমে পাঠানো হতে পারে)
                    ("তৃতীয়-পক্ষের ওয়েবসাইট") সেইসাথে নিবন্ধ, ফটোগ্রাফ, পাঠ্য, গ্রাফিক্স, ছবি,
                    ডিজাইন, সঙ্গীত, শব্দ, ভিডিও, তথ্য, অ্যাপ্লিকেশন, সফ্টওয়্যার, এবং অন্যান্য সামগ্রী
                    অথবা তৃতীয় পক্ষের ("তৃতীয়-পক্ষের সামগ্রী") এর অন্তর্গত বা উৎপন্ন আইটেম। যেমন
                    তৃতীয় পক্ষের ওয়েবসাইট এবং তৃতীয় পক্ষের বিষয়বস্তু তদন্ত, নিরীক্ষণ বা
                    আমাদের দ্বারা নির্ভুলতা, উপযুক্ততা বা সম্পূর্ণতার জন্য পরীক্ষা করা হয়েছে এবং আমরা তা নই
                    পরিষেবা বা যেকোনো মাধ্যমে অ্যাক্সেস করা কোনো তৃতীয় পক্ষের ওয়েবসাইটের জন্য দায়ী
                    তৃতীয় পক্ষের সামগ্রী পোস্ট করা হয়েছে, পরিষেবাগুলির মাধ্যমে উপলব্ধ বা ইনস্টল করা হয়েছে,
                    বিষয়বস্তু, নির্ভুলতা, আপত্তিকরতা, মতামত, নির্ভরযোগ্যতা, গোপনীয়তা অনুশীলন সহ,
                    বা তৃতীয় পক্ষের ওয়েবসাইট বা তৃতীয় পক্ষের অন্যান্য নীতি
                    বিষয়বস্তু। অন্তর্ভুক্ত করা, লিঙ্ক করা, বা কোনো তৃতীয় পক্ষের ব্যবহার বা ইনস্টলেশনের অনুমতি দেওয়া
                    ওয়েবসাইট বা কোনো তৃতীয় পক্ষের বিষয়বস্তু অনুমোদন বা অনুমোদন বোঝায় না
                    আমাদের দ্বারা. আপনি যদি পরিষেবাগুলি ছেড়ে দেওয়ার সিদ্ধান্ত নেন এবং তৃতীয় পক্ষের ওয়েবসাইটগুলিতে বা অ্যাক্সেস করার সিদ্ধান্ত নেন
                    কোনো তৃতীয় পক্ষের সামগ্রী ব্যবহার বা ইনস্টল করুন, আপনি নিজের ঝুঁকিতে তা করেন এবং আপনার উচিত
                    সচেতন এই আইনি শর্তাদি আর শাসন করে না। আপনি প্রযোজ্য শর্তাবলী পর্যালোচনা করা উচিত
                    এবং নীতি, গোপনীয়তা এবং ডেটা সংগ্রহের অনুশীলন সহ যেকোন ওয়েবসাইটের
                    আপনি পরিষেবাগুলি থেকে নেভিগেট করেন বা আপনি যেকোন অ্যাপ্লিকেশন ব্যবহার করেন বা ইনস্টল করেন তার সাথে সম্পর্কিত৷
                    পরিষেবাগুলি তৃতীয় পক্ষের ওয়েবসাইটগুলির মাধ্যমে আপনি যেকোন কেনাকাটা করবেন
                    অন্যান্য ওয়েবসাইট এবং অন্যান্য কোম্পানীর কাছ থেকে, এবং আমরা কোন দায়িত্ব নিই না
                    এই ধরনের ক্রয়ের ক্ষেত্রে যা একচেটিয়াভাবে আপনার এবং প্রযোজ্যের মধ্যে
                    তৃতীয় পক্ষ আপনি সম্মত হন এবং স্বীকার করেন যে আমরা পণ্যগুলিকে সমর্থন করি না বা
                    থার্ড-পার্টি ওয়েবসাইটগুলিতে দেওয়া পরিষেবা এবং আপনি আমাদের যে কোনও থেকে নির্দোষ রাখবেন
                    আপনার এই ধরনের পণ্য বা পরিষেবা কেনার কারণে ক্ষতি হয়। উপরন্তু, আপনি হবে
                    আপনার দ্বারা সৃষ্ট কোন ক্ষতি বা আপনার সম্পর্কিত ক্ষতি থেকে আমাদেরকে নির্দোষ রাখুন
                    কোন তৃতীয় পক্ষের বিষয়বস্তু বা তৃতীয় পক্ষের ওয়েবসাইটগুলির সাথে যেকোন যোগাযোগ থেকে বা যেকোন উপায়ে ফলাফল।
                </p> <br /> <br />
                <h3 id='সেবা ব্যবস্থাপনা'>12.সেবা ব্যবস্থাপনা</h3> <br />
                <p>আমরা অধিকার সংরক্ষণ করি, কিন্তু বাধ্যবাধকতা নয়: (1) লঙ্ঘনের জন্য পরিষেবাগুলি পর্যবেক্ষণ করি
                    এই আইনী শর্তাবলী; (2) যে কারো বিরুদ্ধে যথাযথ আইনি ব্যবস্থা গ্রহণ করুন, আমাদের মধ্যে
                    একমাত্র বিবেচনার ভিত্তিতে, আইন বা এই আইনী শর্তাবলী লঙ্ঘন করে, যার মধ্যে সীমাবদ্ধতা ছাড়াই,
                    এই ধরনের ব্যবহারকারীকে আইন প্রয়োগকারী কর্তৃপক্ষের কাছে রিপোর্ট করা; (3) আমাদের নিজস্ব বিবেচনার ভিত্তিতে এবং
                    সীমাবদ্ধতা ছাড়াই, প্রত্যাখ্যান করুন, অ্যাক্সেস সীমাবদ্ধ করুন, এর প্রাপ্যতা সীমাবদ্ধ করুন বা অক্ষম করুন (
                    প্রযুক্তিগতভাবে যতটা সম্ভব) আপনার যে কোনো অবদান বা তার কোনো অংশ; (4) ইন
                    আমাদের একমাত্র বিবেচনার ভিত্তিতে এবং সীমাবদ্ধতা, বিজ্ঞপ্তি, বা দায় ছাড়াই, থেকে অপসারণ করতে
                    পরিষেবাগুলি বা অন্যথায় সমস্ত ফাইল এবং বিষয়বস্তু অক্ষম করে যা আকারে অত্যধিক বা ভিতরে রয়েছে৷
                    আমাদের সিস্টেমের জন্য যে কোন উপায়ে বোঝা; এবং (5) অন্যথায় পরিষেবাগুলি পরিচালনা করুন a
                    আমাদের অধিকার এবং সম্পত্তি রক্ষা এবং যথাযথ সুবিধার জন্য ডিজাইন করা পদ্ধতি
                    পরিষেবাগুলির কার্যকারিতা।
                </p> <br /> <br />
                <h3 id='গোপনীয়তা নীতি'>13.গোপনীয়তা নীতি</h3> <br />
                <p>আমরা ডেটা গোপনীয়তা এবং নিরাপত্তার বিষয়ে যত্নশীল। আমাদের গোপনীয়তা পর্যালোচনা করুন
                    নীতি: <span><a href="https://ipractest.com/iPractest-Privacy-Policy">https://ipractest.com/iPractest-Privacy-Policy</a></span>। পরিষেবাগুলি ব্যবহার করে, আপনি
                    আমাদের গোপনীয়তা নীতি দ্বারা আবদ্ধ হতে সম্মত, যা এই আইনের অন্তর্ভুক্ত
                    শর্তাবলী অনুগ্রহ করে পরামর্শ দিন যে পরিষেবাগুলি বাংলাদেশ, সংযুক্ত আরব-এ হোস্ট করা হয়৷
                    আমিরাত, মার্কিন যুক্তরাষ্ট্র এবং অস্ট্রেলিয়া। আপনি যদি অন্য কোনো থেকে পরিষেবাগুলি অ্যাক্সেস করেন
                    ব্যক্তিগত ডেটা নিয়ন্ত্রণকারী আইন বা অন্যান্য প্রয়োজনীয়তা সহ বিশ্বের অঞ্চল
                    সংগ্রহ, ব্যবহার বা প্রকাশ যা বাংলাদেশ, ইউনাইটেডের প্রযোজ্য আইন থেকে ভিন্ন
                    আরব আমিরাত, মার্কিন যুক্তরাষ্ট্র এবং অস্ট্রেলিয়া, তারপর আপনার ক্রমাগত ব্যবহারের মাধ্যমে
                    সেবা, আপনি বাংলাদেশ, সংযুক্ত আরব আমিরাত, ইউনাইটেড আপনার ডেটা স্থানান্তর করছেন
                    রাজ্য এবং অস্ট্রেলিয়া, এবং আপনি আপনার ডেটা স্থানান্তর করতে স্পষ্টভাবে সম্মতি দিয়েছেন এবং
                    বাংলাদেশ, সংযুক্ত আরব আমিরাত, মার্কিন যুক্তরাষ্ট্র এবং অস্ট্রেলিয়ায় প্রক্রিয়াজাত করা হয়েছে।
                </p> <br /> <br />
                <h3 id='কপিরাইট লঙ্ঘন'>14.কপিরাইট লঙ্ঘন</h3> <br />
                <p>আমরা অন্যদের মেধা সম্পত্তির অধিকারকে সম্মান করি। যদি আপনি বিশ্বাস করেন যে কোন উপাদান
                    আপনার মালিকানাধীন বা নিয়ন্ত্রণ করা কোনো কপিরাইট লঙ্ঘন করে পরিষেবাগুলির মাধ্যমে বা এর মাধ্যমে উপলব্ধ,
                    অনুগ্রহ করে অবিলম্বে নীচে দেওয়া যোগাযোগের তথ্য ব্যবহার করে আমাদের অবহিত করুন (ক
                    "বিজ্ঞপ্তি")। আপনার বিজ্ঞপ্তির একটি অনুলিপি পোস্ট করা ব্যক্তির কাছে পাঠানো হবে বা
                    বিজ্ঞপ্তিতে সম্বোধন করা উপাদান সংরক্ষণ করে। অনুগ্রহ করে পরামর্শ দেওয়া হবে
                    প্রযোজ্য আইন যদি আপনি উপাদান তৈরি করেন তাহলে ক্ষতির জন্য আপনাকে দায়ী করা হতে পারে
                    একটি বিজ্ঞপ্তিতে ভুল উপস্থাপনা। এইভাবে, যদি আপনি নিশ্চিত না হন যে উপাদানটি অবস্থিত
                    অথবা পরিষেবা দ্বারা লিঙ্ক করা আপনার কপিরাইট লঙ্ঘন করে, আপনার প্রথমে বিবেচনা করা উচিত
                    একজন অ্যাটর্নির সাথে যোগাযোগ করা <br /> <br /></p>
                <h3 id='শব্দ এবং পরিসমাপ্তি'>15.শব্দ এবং পরিসমাপ্তি</h3>  <br />
                <p>যখন আপনি পরিষেবাগুলি ব্যবহার করবেন তখন এই আইনী শর্তগুলি সম্পূর্ণ বলবৎ এবং কার্যকর থাকবে৷
                    এই আইনী শর্তাবলীর অন্য কোন বিধান সীমাবদ্ধ না করে, আমরা
                    আমাদের নিজস্ব বিবেচনার ভিত্তিতে এবং বিজ্ঞপ্তি ছাড়াই অধিকার সংরক্ষণ করুন
                    বা দায়বদ্ধতা, পরিষেবাগুলির অ্যাক্সেস এবং ব্যবহার অস্বীকার (সহ
                    নির্দিষ্ট আইপি অ্যাড্রেস ব্লক করা), যেকোনো কারণে যে কোনো ব্যক্তিকে বা
                    কোনো কারণে, কোনো লঙ্ঘনের জন্য সীমাবদ্ধতা ছাড়াই
                    প্রতিনিধিত্ব, ওয়ারেন্টি, বা চুক্তি এই আইনী অন্তর্ভুক্ত
                    শর্তাবলী বা যেকোনো প্রযোজ্য আইন বা প্রবিধান। আমরা শেষ করতে পারি
                    পরিষেবাগুলিতে আপনার ব্যবহার বা অংশগ্রহণ বা আপনার মুছে ফেলুন
                    অ্যাকাউন্ট এবং যেকোনো বিষয়বস্তু বা তথ্য যা আপনি পোস্ট করেছেন
                    সময়, সতর্কতা ছাড়াই, আমাদের নিজস্ব বিবেচনার ভিত্তিতে।<br /><br />
                    আমরা যদি কোনো কারণে আপনার অ্যাকাউন্ট বন্ধ বা স্থগিত করি, তাহলে আপনি নিষিদ্ধ
                    আপনার নামে, একটি জাল বা ধার করা নামে একটি নতুন অ্যাকাউন্ট নিবন্ধন এবং তৈরি করা,
                    অথবা কোনো তৃতীয় পক্ষের নাম, এমনকি যদি আপনি তৃতীয় পক্ষের হয়ে কাজ করছেন।
                    আপনার অ্যাকাউন্ট বন্ধ বা স্থগিত করা ছাড়াও, আমরা নেওয়ার অধিকার সংরক্ষণ করি
                    উপযুক্ত আইনি পদক্ষেপ, সীমাবদ্ধতা ছাড়াই দেওয়ানি, ফৌজদারি, এবং
                    আদেশমূলক প্রতিকার। <br /><br /></p>
                <h3 id='পরিবর্তন এবং বাধা'>16.পরিবর্তন এবং বাধা</h3> <br />
                <p>আমরা পরিষেবাগুলির বিষয়বস্তু পরিবর্তন, সংশোধন বা অপসারণ করার অধিকার সংরক্ষণ করি
                    সময় বা কোনো কারণে আমাদের একমাত্র বিবেচনার ভিত্তিতে বিজ্ঞপ্তি ছাড়াই। যাইহোক, আমাদের নেই
                    আমাদের পরিষেবাগুলিতে যে কোনও তথ্য আপডেট করার বাধ্যবাধকতা। আমরা আপনার কাছে বা দায়বদ্ধ থাকব না
                    কোনো পরিবর্তন, মূল্য পরিবর্তন, সাসপেনশন, বা বন্ধ করার জন্য কোনো তৃতীয় পক্ষ
                    পরিষেবাগুলি৷<br /><br />৷
                    আমরা গ্যারান্টি দিতে পারি না যে পরিষেবাগুলি সর্বদা উপলব্ধ থাকবে৷ আমরা অভিজ্ঞতা হতে পারে
                    হার্ডওয়্যার, সফ্টওয়্যার, বা অন্যান্য সমস্যা বা এর সাথে সম্পর্কিত রক্ষণাবেক্ষণ করতে হবে
                    পরিষেবা, যার ফলে বাধা, বিলম্ব বা ত্রুটি হয়। আমরা পরিবর্তন করার অধিকার সংরক্ষণ করি,
                    যে কোনো সময় বা পরিষেবাগুলি সংশোধন, আপডেট, স্থগিত, বন্ধ, বা অন্যথায় সংশোধন করুন
                    কোন কারণে আপনাকে নোটিশ ছাড়াই। আপনি সম্মত হন যে আমাদের কোন দায় নেই
                    অ্যাক্সেস বা ব্যবহার করতে আপনার অক্ষমতার কারণে যে কোনও ক্ষতি, ক্ষতি বা অসুবিধার জন্য
                    পরিষেবাগুলি যে কোনও ডাউনটাইম বা পরিষেবা বন্ধ করার সময়। এগুলোর মধ্যে কিছুই নেই
                    আইনি শর্তাদি আমাদের পরিষেবাগুলি বজায় রাখতে এবং সমর্থন করতে বাধ্য করতে বোঝানো হবে বা৷
                    এর সাথে সম্পর্কিত কোনো সংশোধন, আপডেট বা রিলিজ সরবরাহ করতে।<br /><br />
                </p>
                <h3 id='সরকারি আইন'>17.সরকারি আইন</h3> <br />
                <p>এই আইনী শর্তাবলীর আইন অনুসারে পরিচালিত হবে এবং সংজ্ঞায়িত হবে
                    বাংলাদেশ। iPractest.com এবং নিজেরা অপরিবর্তনীয়ভাবে সম্মতি দেন যে এর আদালত
                    উত্থাপিত যেকোনো বিরোধ সমাধানের জন্য বাংলাদেশের একচেটিয়া এখতিয়ার থাকবে
                    এই আইনী শর্তাবলীর সাথে সম্পর্কিত।<br /><br />
                </p>
                <h3 id='বিরোধ নিষ্পত্তি'>18.বিরোধ নিষ্পত্তি</h3> <br />
                <p><span className='text-xl font-bold'>অনুষ্ঠানিক আলোচনা</span><br /><br />
                    সমাধান ত্বরান্বিত করা এবং যেকোনো বিরোধ, বিতর্ক বা দাবির খরচ নিয়ন্ত্রণ করা
                    এই আইনী শর্তাবলীর সাথে সম্পর্কিত (প্রতিটি একটি "বিরোধ" এবং সম্মিলিতভাবে, "বিরোধ")
                    আপনি বা আমাদের দ্বারা আনা হয়েছে (ব্যক্তিগতভাবে, একটি "পার্টি" এবং সম্মিলিতভাবে, "পার্টি"),
                    পক্ষগুলি প্রথমে যেকোন বিরোধের আলোচনার চেষ্টা করতে সম্মত হয় (সেই বিরোধগুলি ব্যতীত
                    স্পষ্টভাবে নীচে দেওয়া) অনানুষ্ঠানিকভাবে সূচনা করার আগে কমপক্ষে __________ দিনের জন্য
                    সালিশ এই ধরনের অনানুষ্ঠানিক আলোচনা এক পক্ষের লিখিত নোটিশের ভিত্তিতে শুরু হয়
                    অন্য পক্ষের কাছে।<br /><br />
                    <span className='text-xl font-bold'>বাঁধাই সালিশ</span><br /><br />

                    এই আইনী শর্তাবলী থেকে বা এর সাথে সম্পর্কিত যেকোন বিবাদ, যেকোনও সহ
                    এর অস্তিত্ব, বৈধতা বা সমাপ্তি সম্পর্কিত প্রশ্ন উল্লেখ করা হবে এবং
                    অবশেষে ইউরোপীয় অধীনে আন্তর্জাতিক বাণিজ্যিক সালিস আদালত দ্বারা সমাধান
                    আরবিট্রেশন চেম্বার (বেলজিয়াম, ব্রাসেলস, এভিনিউ লুইস, 146) নিয়ম অনুযায়ী
                    এই ICAC এর, যা, এটি উল্লেখ করার ফলে, এটির অংশ হিসাবে বিবেচিত হয়
                    ধারা সালিসকারীদের সংখ্যা হবে __________। আসন, বা আইনি স্থান, বা
                    সালিশ হবে বাংলাদেশ। কার্যধারার ভাষা হবে
                    _________ এই আইনী শর্তাবলীর গভর্নিং আইন এর মূল আইন হবে
                    বাংলাদেশ।<br /><br />
                    <span className='text-xl font-bold'>সীমাবদ্ধতা</span><br /><br />

                    পক্ষগুলি সম্মত হয় যে কোনও সালিসি সীমাবদ্ধ থাকবে বিবাদের মধ্যে
                    স্বতন্ত্রভাবে দলগুলো। আইন দ্বারা অনুমোদিত সম্পূর্ণ পরিমাণে, (ক) কোন সালিশ হবে না
                    অন্য কোন কার্যক্রমের সাথে যোগদান; (খ) কোন বিরোধের জন্য কোন অধিকার বা কর্তৃত্ব নেই
                    ক্লাস-অ্যাকশনের ভিত্তিতে সালিশ করা বা ক্লাস অ্যাকশন পদ্ধতি ব্যবহার করা; এবং (গ)
                    কোন বিরোধের জন্য কোন অধিকার বা কর্তৃত্ব নেই একটি কথিত মধ্যে আনা
                    সাধারণ জনগণ বা অন্য কোনো ব্যক্তির পক্ষে প্রতিনিধিত্বের ক্ষমতা।<br /><br />

                    <span className='text-xl font-bold'>অনানুষ্ঠানিক আলোচনা এবং সালিশের ব্যতিক্রম</span><br /><br />

                    পক্ষগুলি সম্মত হয় যে নিম্নলিখিত বিরোধগুলি উপরোক্ত বিধানগুলির সাপেক্ষে নয়৷
                    অনানুষ্ঠানিক আলোচনার বিষয়ে বাধ্যতামূলক সালিসি: (ক) কোনো বিবাদ যা চাইছে
                    বুদ্ধিবৃত্তিক সম্পত্তি অধিকারের যেকোনও বৈধতা বলবৎ করা বা রক্ষা করা
                    একটি দলের; (b) চুরির অভিযোগ, গোপনীয়তার উপর জলদস্যুতা আক্রমণ, বা অননুমোদিত ব্যবহারের সাথে সম্পর্কিত যে কোন বিরোধ বা উদ্ভূত; এবং (গ) আদেশমূলক ত্রাণের জন্য কোন দাবি। এই যদি
                    বিধান বেআইনি বা অপ্রয়োগযোগ্য বলে প্রমাণিত হয়, তাহলে কোন পক্ষই নির্বাচন করবে না
                    এই বিধানের সেই অংশের মধ্যে পতিত যেকোন বিরোধের মধ্যস্থতা অবৈধ বা
                    অপ্রয়োগযোগ্য এবং এই ধরনের বিরোধ উপযুক্ত এখতিয়ারের আদালত দ্বারা সিদ্ধান্ত নেওয়া হবে
                    উপরে এখতিয়ারের জন্য তালিকাভুক্ত আদালতের মধ্যে, এবং পক্ষগুলি জমা দিতে সম্মত
                    সেই আদালতের ব্যক্তিগত এখতিয়ার<br /><br />
                </p>
                <h3 id='সংশোধন'>19.সংশোধন</h3> <br />
                <p>পরিষেবাগুলিতে টাইপোগ্রাফিক ত্রুটি রয়েছে এমন তথ্য থাকতে পারে,
                    বর্ণনা, মূল্য, প্রাপ্যতা এবং বিভিন্ন সহ ভুলতা, বা বাদ দেওয়া
                    অন্যান্য তথ্য. আমরা কোনো ত্রুটি, ভুল, বা সংশোধন করার অধিকার সংরক্ষণ করি
                    বাদ দেওয়া এবং পরিষেবাগুলির তথ্য যে কোনও সময়ে পরিবর্তন বা আপডেট করা,
                    পূর্ব নোটিশ ছাড়া।<br /><br />
                </p>
                <h3 id='দাবিত্যাগ'>20. দাবিত্যাগ</h3> <br />
                <p>পরিষেবাগুলি যেমন আছে তেমন এবং উপলভ্য ভিত্তিতে সরবরাহ করা হয়। আপনি
                    সম্মত হন যে আপনার পরিষেবাগুলির ব্যবহার আপনার একমাত্র ঝুঁকিতে হবে৷ প্রতি
                    আইন দ্বারা অনুমোদিত সম্পূর্ণ সীমা, আমরা সমস্ত ওয়্যারেন্টি অস্বীকার করি,
                    পরিষেবা এবং আপনার ব্যবহারের সাথে সংযোগে প্রকাশ বা উহ্য
                    তদনুসারে, সীমাবদ্ধতা ছাড়াই, এর অন্তর্নিহিত ওয়ারেন্টিগুলি
                    ব্যবসায়িকতা, একটি বিশেষ উদ্দেশ্যে উপযুক্ততা, এবং অ লঙ্ঘন. আমরা সম্পর্কে কোন ওয়্যারেন্টি বা প্রতিনিধিত্ব করা
                    পরিষেবার বিষয়বস্তুর নির্ভুলতা বা সম্পূর্ণতা বা
                    এর সাথে সংযুক্ত যেকোন ওয়েবসাইট বা মোবাইল অ্যাপ্লিকেশনের বিষয়বস্তু
                    পরিষেবা এবং আমরা এর জন্য কোন দায়বদ্ধতা বা দায়িত্ব গ্রহণ করব না
                    যেকোন (1) ত্রুটি, ভুল বা বিষয়বস্তুর ভুল এবং
                    উপাদান, (2) ব্যক্তিগত আঘাত বা সম্পত্তির ক্ষতি, যে কোনো প্রকৃতির
                    যাই হোক না কেন, আপনার অ্যাক্সেস এবং ব্যবহারের ফলে
                    পরিষেবাগুলি, (3) আমাদের সুরক্ষার কোনও অননুমোদিত অ্যাক্সেস বা ব্যবহার
                    সার্ভার এবং/অথবা যেকোনো এবং সমস্ত ব্যক্তিগত তথ্য এবং/অথবা
                    এতে সংরক্ষিত আর্থিক তথ্য, (4) কোনো বাধা বা
                    পরিষেবাগুলিতে বা থেকে ট্রান্সমিশন বন্ধ করা, (5) যে কোনও বাগ,
                    ভাইরাস, ট্রোজান হর্স, বা এর মতো যা সংক্রমণ হতে পারে
                    অথবা যেকোনো তৃতীয় পক্ষের পরিষেবার মাধ্যমে, এবং/অথবা (6) কোনো ত্রুটি
                    বা কোনো বিষয়বস্তু এবং উপাদানে বাদ দেওয়া বা কোনো ক্ষতির জন্য বা
                    যে কোনো ব্যবহারের ফলে যে কোনো ধরনের ক্ষয়ক্ষতি
                    কন্টেন্ট পোস্ট, ট্রান্সমিটেড, বা অন্যথায় এর মাধ্যমে উপলব্ধ
                    সেবা. আমরা ওয়ারেন্ট, অনুমোদন, গ্যারান্টি বা অনুমান করি না
                    বিজ্ঞাপন দেওয়া যে কোনো পণ্য বা পরিষেবার দায়বদ্ধতা বা
                    পরিষেবাগুলির মাধ্যমে তৃতীয় পক্ষের দ্বারা অফার করা, যে কোনও হাইপারলিঙ্ক করা
                    ওয়েবসাইট, বা যেকোনো ওয়েবসাইট বা মোবাইল অ্যাপ্লিকেশন
                    ব্যানার বা অন্য বিজ্ঞাপন, এবং আমরা এতে বা এতে অংশ নেব না
                    যেকোন উপায়ের মধ্যে যেকোন লেনদেন নিরীক্ষণের জন্য দায়বদ্ধ
                    আপনি এবং পণ্য বা পরিষেবাগুলির যে কোনও তৃতীয়-পক্ষ প্রদানকারী৷ এএস
                    যেকোন মাধ্যম থেকে পণ্য বা পরিষেবা কেনার সাথে
                    অথবা যেকোন পরিবেশে, আপনার সর্বোত্তম বিচার ব্যবহার করা উচিত এবং
                    যেখানে উপযুক্ত সেখানে সতর্কতা অবলম্বন করুন।
                    <br /> <br /></p>
                <h3 id='দায়বদ্ধতার সীমাবদ্ধতা'>21.দায়বদ্ধতার সীমাবদ্ধতা</h3> <br />
                <p>কোন অবস্থাতেই আমরা বা আমাদের পরিচালক, কর্মচারী, বা এজেন্টরা হব না
                    প্রত্যক্ষ, পরোক্ষের জন্য আপনার বা যেকোনো তৃতীয় পক্ষের কাছে দায়বদ্ধ,
                    ফলপ্রসূ, অনুকরণীয়, ঘটনাগত, বিশেষ, বা শাস্তিমূলক
                    ক্ষতি, হারানো লাভ, হারানো রাজস্ব, ডেটার ক্ষতি সহ
                    আপনার পরিষেবাগুলির ব্যবহার থেকে উদ্ভূত অন্যান্য ক্ষতিগুলি, এমনকি যদি আমরা
                    এই ধরনের ক্ষতির সম্ভাবনা সম্পর্কে পরামর্শ দেওয়া হয়েছে.
                    এখানে থাকা বিপরীত কিছু থাকা সত্ত্বেও,
                    যে কোনো কারণে এবং নির্বিশেষে আপনার প্রতি আমাদের দায়বদ্ধতা
                    কর্মের ফর্ম, সব সময়ে সীমাবদ্ধ থাকবে
                    তিন (3) মাস মেয়াদে আপনার দ্বারা প্রদত্ত অর্থ, যদি থাকে
                    কর্মের কোন কারণ উদ্ভূত পূর্বে. মার্কিন যুক্তরাষ্ট্রের নির্দিষ্ট কিছু আইন এবং
                    আন্তর্জাতিক আইন উহ্যের উপর সীমাবদ্ধতার অনুমতি দেয় না
                    ওয়্যারেন্টি বা কিছু ক্ষতির বর্জন বা সীমাবদ্ধতা। IF
                    এই আইনগুলি আপনার জন্য প্রযোজ্য, কিছু বা সমস্ত উপরোক্ত দাবিত্যাগ বা
                    সীমাবদ্ধতাগুলি আপনার জন্য প্রযোজ্য নাও হতে পারে এবং আপনার অতিরিক্ত কিছু থাকতে পারে
                    অধিকার
                    <br /> <br />
                </p>
                <h3 id='ক্ষতিপূরণ'>22.ক্ষতিপূরণ</h3> <br />
                <p>আপনি আমাদের সাবসিডিয়ারিগুলি সহ আমাদের রক্ষা করতে, ক্ষতিপূরণ দিতে এবং আমাদের ক্ষতিহীন রাখতে সম্মত হন,
                    অধিভুক্ত, এবং আমাদের নিজ নিজ কর্মকর্তা, এজেন্ট, অংশীদার এবং কর্মচারীদের থেকে
                    এবং যুক্তিসঙ্গত সহ যে কোনও ক্ষতি, ক্ষতি, দায়, দাবি বা দাবির বিরুদ্ধে
                    অ্যাটর্নিদের ফি এবং খরচ, যে কোন তৃতীয় পক্ষের দ্বারা করা হয়েছে বা এর ফলে উদ্ভূত: (1)
                    আপনার অবদান; (2) পরিষেবার ব্যবহার; (3) এই আইনী শর্তাবলী লঙ্ঘন; (4) যেকোনো
                    এই আইনী শর্তাবলীতে আপনার উপস্থাপনা এবং ওয়ারেন্টির লঙ্ঘন; (5) আপনার
                    তৃতীয় পক্ষের অধিকার লঙ্ঘন, যার মধ্যে বুদ্ধিবৃত্তিক সম্পত্তি সহ কিন্তু সীমাবদ্ধ নয়
                    অধিকার বা (6) পরিষেবাগুলির অন্য কোনও ব্যবহারকারীর প্রতি যে কোনও প্রকাশ্য ক্ষতিকারক কাজ যার সাথে
                    আপনি পরিষেবার মাধ্যমে সংযুক্ত। পূর্বোক্ত সত্ত্বেও, আমরা অধিকার সংরক্ষণ করি,
                    আপনার খরচে, যে কোনো বিষয়ের একচেটিয়া প্রতিরক্ষা এবং নিয়ন্ত্রণ অনুমান করার জন্য
                    যা আপনাকে আমাদের ক্ষতিপূরণ দিতে হবে, এবং আপনি সহযোগিতা করতে সম্মত হন
                    খরচ, যেমন দাবি আমাদের প্রতিরক্ষা সঙ্গে. আমরা অবহিত করার জন্য যুক্তিসঙ্গত প্রচেষ্টা ব্যবহার করব
                    এই ক্ষতিপূরণ সাপেক্ষে আপনি এই ধরনের কোনো দাবি, কর্ম, বা প্রক্রিয়া
                    এটি সম্পর্কে সচেতন হওয়ার পরে। <br /> <br />
                </p>
                <h3 id='ব্যবহারকারী তথ্য'>23.ব্যবহারকারী তথ্য</h3> <br />
                <p>আমরা নির্দিষ্ট ডেটা বজায় রাখব যা আপনি পরিষেবাগুলিতে প্রেরণ করেন
                    পরিষেবাগুলির কর্মক্ষমতা পরিচালনার পাশাপাশি আপনার ব্যবহারের সাথে সম্পর্কিত ডেটা
                    সেবা. যদিও আমরা ডেটার নিয়মিত রুটিন ব্যাকআপ সঞ্চালন করি, তবে আপনি একা
                    আপনি যে সমস্ত ডেটা প্রেরণ করেন বা আপনার যে কোনও কার্যকলাপের সাথে সম্পর্কিত সমস্ত ডেটার জন্য দায়ী৷
                    পরিষেবাগুলি ব্যবহার করে গৃহীত। আপনি সম্মত হন যে আপনার কাছে আমাদের কোন দায় থাকবে না
                    এই ধরনের কোনো তথ্যের কোনো ক্ষতি বা দুর্নীতি, এবং আপনি এতদ্বারা কোনো পদক্ষেপের অধিকার পরিত্যাগ করুন
                    এই ধরনের তথ্যের ক্ষতি বা দুর্নীতি থেকে উদ্ভূত আমাদের বিরুদ্ধে।
                    <br /> <br /></p>
                <h3 id='ইলেকট্রনিক যোগাযোগ, লেনদেন, এবং স্বাক্ষর'>24.ইলেকট্রনিক যোগাযোগ, লেনদেন, এবং স্বাক্ষর</h3> <br />
                <p>পরিষেবা পরিদর্শন করা, আমাদের ইমেল পাঠানো, এবং অনলাইন ফর্ম পূরণ করা গঠিত
                    ইলেকট্রনিক যোগাযোগ। আপনি ইলেকট্রনিক যোগাযোগ পেতে সম্মতি দিয়েছেন, এবং
                    আপনি সম্মত হন যে সমস্ত চুক্তি, নোটিশ, প্রকাশ, এবং অন্যান্য যোগাযোগ আমরা
                    আপনাকে ইলেকট্রনিকভাবে, ইমেলের মাধ্যমে এবং পরিষেবাগুলিতে সরবরাহ করে, যে কোনো আইনি সন্তুষ্ট করে
                    প্রয়োজন যে এই ধরনের যোগাযোগ লিখিত হতে হবে। আপনি এতদ্বারা সম্মত হন
                    ইলেকট্রনিক স্বাক্ষর, চুক্তি, আদেশ এবং অন্যান্য ব্যবহার
                    রেকর্ড, এবং নোটিশ, নীতি, এবং ইলেকট্রনিক বিতরণ
                    আমাদের দ্বারা বা এর মাধ্যমে শুরু বা সম্পন্ন করা লেনদেনের রেকর্ড
                    সেবা. আপনি এতদ্বারা কোনো আইনের অধীনে কোনো অধিকার বা প্রয়োজনীয়তা পরিত্যাগ করেন,
                    প্রবিধান, বিধি, অধ্যাদেশ, বা যেকোনো এখতিয়ারের অন্যান্য আইন যার প্রয়োজন
                    অ-ইলেকট্রনিক রেকর্ডের মূল স্বাক্ষর বা বিতরণ বা ধারণ, বা অর্থপ্রদান বা
                    ইলেকট্রনিক উপায় ছাড়া অন্য কোনো উপায়ে ক্রেডিট প্রদান <br /> <br />
                </p>
                <h3 id='ক্যালিফোর্নিয়া ব্যবহারকারী এবং বাসিন্দারা'>25.ক্যালিফোর্নিয়া ব্যবহারকারী এবং বাসিন্দারা</h3> <br />
                <p>আমাদের কাছে কোনো অভিযোগ সন্তোষজনকভাবে সমাধান না হলে, আপনি অভিযোগের সাথে যোগাযোগ করতে পারেন
                    ক্যালিফোর্নিয়া বিভাগের গ্রাহক পরিষেবা বিভাগের সহায়তা ইউনিট
                    1625 North Market Blvd., Suite N 112, Sacramento, এ লিখিতভাবে ভোক্তা বিষয়ক
                    ক্যালিফোর্নিয়া 95834 বা টেলিফোনের মাধ্যমে (800) 952-5210 বা (916) 445-1254 নম্বরে। <br /> <br /></p>
                <h3 id='বিবিধ'>26.বিবিধ</h3> <br />
                <p>এই আইনি শর্তাবলী এবং পরিষেবাগুলিতে আমাদের দ্বারা পোস্ট করা কোনও নীতি বা অপারেটিং নিয়ম৷
                    অথবা পরিষেবাগুলির ক্ষেত্রে সম্পূর্ণ চুক্তি এবং বোঝাপড়া গঠন করে৷
                    আপনার এবং আমাদের মধ্যে। এগুলোর কোনো অধিকার বা বিধান প্রয়োগ বা প্রয়োগ করতে আমাদের ব্যর্থতা
                    আইনি শর্তাবলী এই ধরনের অধিকার বা বিধানের মওকুফ হিসাবে কাজ করবে না। এই আইনী
                    শর্তাবলী আইন দ্বারা অনুমোদিত সম্পূর্ণ পরিমাণে কাজ করে। আমরা যে কোনো বা সমস্ত বরাদ্দ করতে পারি
                    যে কোন সময় অন্যদের প্রতি আমাদের অধিকার এবং বাধ্যবাধকতা। আমরা দায়ী বা দায়বদ্ধ হবে না
                    আমাদের <br /> <br /> এর বাইরে যে কোনও কারণে যে কোনও ক্ষতি, ক্ষতি, বিলম্ব বা কাজ করতে ব্যর্থতার জন্য
                    যুক্তিসঙ্গত নিয়ন্ত্রণ। যদি কোন বিধান বা এই আইনী শর্তাবলী একটি বিধান অংশ
                    বেআইনি, অকার্যকর, বা অপ্রয়োগযোগ্য হতে নির্ধারিত, যে বিধান বা অংশ
                    বিধান এই আইনী শর্তাবলী থেকে বিচ্ছিন্ন বলে মনে করা হয় এবং প্রভাবিত করে না
                    কোনো অবশিষ্ট বিধানের বৈধতা এবং প্রয়োগযোগ্যতা। যৌথ উদ্যোগ নেই,
                    অংশীদারিত্ব, কর্মসংস্থান বা এজেন্সি সম্পর্ক আপনার এবং আমাদের মধ্যে একটি হিসাবে তৈরি
                    এই আইনী শর্তাবলী বা পরিষেবার ব্যবহারের ফলাফল। আপনি সম্মত হন যে এই আইনী শর্তাবলী
                    তাদের খসড়া করার কারণে আমাদের বিরুদ্ধে বোঝানো হবে না। আপনি এতদ্বারা পরিত্যাগ
                    এই আইনের ইলেকট্রনিক ফর্মের উপর ভিত্তি করে আপনার যে কোনও এবং সমস্ত প্রতিরক্ষা থাকতে পারে
                    শর্তাবলী এবং এই আইনী শর্তাবলী কার্যকর করার জন্য এখানে পক্ষগুলির দ্বারা স্বাক্ষরের অভাব। <br /> <br />
                </p>
                <h3 id='যোগাযোগ করুন'>27. যোগাযোগ করুন</h3> <br />
                <p>
                    iPractest.com <br /> <br />
                    ২/৮ তাজমহল রোড, ঢাকা <br />
                    বাংলাদেশ <br />
                    +880 18843-23303 <br />
                    support@iPractest.com

                </p>

            </div>
            <FooterHomeThree />
            <BackToTop />
        </section>
    )
}

export default TermsConditions

