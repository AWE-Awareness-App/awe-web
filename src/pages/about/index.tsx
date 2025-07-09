import React from 'react';
import dynamic from 'next/dynamic';
import Layout from "../../components/DefaultLayout.tsx";
import { FaLinkedin } from 'react-icons/fa6';

// Dynamically import the map component to avoid SSR issues with Google Maps
const LocationMap = dynamic(
  () => import('@components/LocationMap'),
  { ssr: false }
);

const AboutUsPage: React.FC = () => {
    return (
        <Layout activePage="aboutus">
            <div className="mx-auto max-w-6xl px-4 text-blue-950">
                <div className="flex justify-center items-center space-x-4">
                    <img src="/images/APA.png" alt="American Psychological Association" className="flex-1 w-1/4 max-h-[111px] object-contain" />
                    <img src="/images/ISSBA.png" alt="ISSBA" className="flex-1 w-1/4 max-h-[111px] object-contain" />
                    <img src="/images/HBHL.png" alt="ISSBA" className="flex-1 w-1/4 max-h-[111px] object-contain" />
                    <img src="/images/20250502_SfN_logo.png" alt="Society Neruro Science" className="flex-1 w-1/4 max-h-[111px] object-contain" />
                
                </div>
                <h2 className="text-4xl font-bold mb-8">About Us</h2>
                <h4 className="text-xl font-bold">Leading the Path to Digital Wellness</h4>
                <p>
                    At AWE, we are on a mission to help people reclaim their time, attention, and well - being in an increasingly
                    online world.Our team brings together world - class expertise in addiction science, technology, digital
                    health, and personal coaching to create evidence - based solutions for digital dependency towards real
                    connections and enjoyment.
                </p>
                <h2 className="text-4xl font-bold my-8">Our Leadership Team</h2>
                <h4 className="text-xl font-bold my-4 flex items-center">
                    Marc Ritter, MSc - Chief Executive Officer
                    <a href="https://www.linkedin.com/in/marc-d-ritter-58112a82/" target="_blank" rel="noopener noreferrer" className="">
                        <FaLinkedin className="text-blue-600 p-1 w-12 h-12" />
                    </a>
                </h4>
                <p>
                    Drawing from extensive experience coaching digital addiction patients across Europe and North
                    America, Marc brings deep insight into the personal struggles and triumphs of digital wellness journeys.
                    His hands - on approach to helping individuals overcome technology dependence has shaped our
                    platform human - centered design and supportive community features.His training in psychology,
                    neuroscience and business informs our comprehensive vision.

                </p>
                <h4 className="text-xl font-bold my-4 flex items-center">
                    Christian Dominique, MBA - Chief Strategy Officer
                    <a href="https://www.linkedin.com/in/dominiquemba/" target="_blank" rel="noopener noreferrer" className="">
                        <FaLinkedin className="text-blue-600 p-1 w-12 h-12" />
                    </a>
                </h4>
                <p>
                    With over a decade of experience in digital health commercialization globally, Christian brings valuable
                    insights into scaling digital wellness solutions.His expertise in bringing innovative health technologies to
                    market helps ensure our platform reaches and positively impacts as many lives as possible.He is also a
                    coach, happiness expert and addiction awareness advocate, educating adults and youth aiming to
                    reduce stigma and focus on sustainable solutions.He teaches people to incorporate positive stories and
                    key relationships like family and friends to bring about a more connected and content life experience.
                </p>
                <h4 className="text-xl font-bold my-4 flex items-center">
                    Roan Brasil Monteiro, MBA - Chief Technology Officer
                    <a href="https://www.linkedin.com/in/roanbrasil/" target="_blank" rel="noopener noreferrer" className="">
                        <FaLinkedin className="text-blue-600 p-1 w-12 h-12" />
                    </a>
                </h4>
                <p>
                    With almost 2 decades of cutting edge IT project management and development in North and South America,
                    Roan is the technical architect with a humane management touch and business sense. Passionate,
                    curious and present he has worked for the biggest banking, transport, tech and gaming global companies.
                    Author and teacher, he cares deeply about the world and is involved in many communities in need.
                    He is compelled to lessen the negative impacts (attention, relationships, etc.) digital life can have through awareness and reach.
                </p>
                <h2 className="text-4xl font-bold my-8">Our Clinical and Scientific Advisors</h2>
                <h4 className="text-xl font-bold my-4">Dr. Bonnie Lee, PhD</h4>
                <span>
                    A distinguished professor, researcher, psychology clinician and therapist supervisor, Dr. Lee brings her
                    groundbreaking Congruence Couples Therapy (CCT) approach to our platform relationship welness
                    initiatives. Her expertise in understandig how addictive behaviors impact intimate relationships and
                    family dynamcs helps shape our interventions for couples and families affected by digital dependency.
                    Dr. Lee holistic approach to psychological health and relationship healing adds a crucial dimension to
                    our therapeutic framework.
                </span>
                <h4 className="text-xl font-bold my-4">Dr. Clara Dawkins, MD, MRCGP - Chief Clinical Officer</h4>
                <span>
                    A renowned medical expert in addiction science, Dr. Dawkins brings cutting-edge research and clinical
                    expertise to our therapeutic approach. Her pioneerig work in addiction, e d ucation and outreach has
                    helped thousands understand and overcoe compulsions and addiction. She has worked and studied in
                    Europe (UK), Oceania (NZ) and the Americas, including Boston and Boota. She spent over a decade in
                    the NH and another ecade in community and family health, specializing n addiction medicine. At
                    AWE, she leads our clinical research initiatives and ensures all our interventions are grounde in science.
                </span>
                <h4 className="text-xl font-bold my-4">Dr. Helen Martin, PhD</h4>
                <span>
                    Dr. Martin has been a researcher and advisor for addiction, harm reduction, youth training and family engagement. With a PhD in Psychiatry from McGill University, Helen's mission is to revolutionize education and mental health support for all. She is involved in many diverse communities, including advocating for women, youth, public and non for profit mental wellness tools and initiatives.
                </span>
                <h2 className="text-4xl font-bold my-8">Our Approach</h2>
                <p>
                    We believe in the power of combining:
                </p>
                <ul className="list-disc pl-5">
                    <li>Evidence-based addiction science</li>
                    <li>Human-centered technology</li>
                    <li>Personal coaching and support</li>
                    <li>Community-driven accountability</li>
                </ul>
                <p>
                    Our platform  is just about reducing screen time about helping people build meaningful
                    relationships with people and technology that enhance rather than detract from their lives.
                </p>
                <h2 className="text-4xl font-bold my-8">Our Mission</h2>
                <p>
                    In today hyper connected world, the line between healthy use and dependency has become increasingly blurred. Our mission is to empower individuals to:
                </p>
                <ul className="list-disc pl-5">
                    <li>Develop healthier digital habits</li>
                    <li>Rediscover offline joy and connection</li>
                    <li>Build sustainable relationships with technology</li>
                    <li>Access support when they need it most</li>
                </ul>

                <h2 className="text-4xl font-bold my-8">Our Commitment</h2>
                <p>
                    We understand that each person’s journey to digital wellness is unique. That’s why we’ve created a
                    flexible, personalized approach that adapts to individual needs while leveraging the power of
                    community support and expert guidance.
                </p>
                <h2 className="text-4xl font-bold my-8">Join Our Community</h2>
                <p>
                    Whether you’re looking to fine-tune your digital habits, provide or seek support for technology
                    dependence, our team and commu n ity are here to offer guidance and support. AWE helps everyone
                    create a more balanced use of tech and media for a meaningful fulfilling lfe.
                </p>
                <div className="flex justify-center items-center space-x-4 p-8">
                    <img src="/images/CPA.png" alt="Canadian Psychological Association" className="flex-1 w-1/3 max-h-[111px] object-contain" />
                    <img src="/images/LA2024.png" alt="Lisbon Addictions 2024" className="flex-1 w-1/3 max-h-[111px] object-contain" />
                    <img src="/images/ISAM.jpg" alt="ISAM 2024" className="flex-1 w-1/3 max-h-[111px] object-contain" />
                </div>

                <div className="mt-12 p-8 bg-gray-50 rounded-lg">
                    <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="h-full">
                            <LocationMap />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                            <p className="mb-4">
                                Have questions or want to learn more about our digital wellness solutions? 
                                We'd love to hear from you.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <address className="not-italic">
                                        254-5475 Rue Paré<br />
                                        Montreal, QC, Canada<br />
                                        H4P 1P7
                                    </address>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <a href="tel:+12638811555" className="hover:text-blue-600 transition-colors">
                                        +1 (263) 881-1555
                                    </a>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <a href="mailto:info@awe.com" className="hover:text-blue-600 transition-colors">
                                        info@awe.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default AboutUsPage;
