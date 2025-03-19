import React from 'react';
import Layout from "../components/DefaultLayout.tsx";

const AboutUsPage: React.FC = () => {
    return (
        <Layout activePage="aboutus">
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="text-4xl font-bold mb-8">About Us</h2>
                <h4 className="text-xl font-bold">Leading the Path to Digital Wellness</h4>
                <p>
                    At AWE, we are on a mission to help people reclaim their time, attention, and well - being in an increasingly
                    online world.Our team brings together world - class expertise in addiction science, technology, digital
                    health, and personal coaching to create evidence - based solutions for digital dependency towards real
                    connections and enjoyment.
                </p>
                <h2 className="text-4xl font-bold my-8">Our Leadership Team</h2>
                <h4 className="text-xl font-bold my-4">Marc Ritter, MSc - Chief Executive Officer</h4>
                <p>
                    Drawing from extensive experience coaching digital addiction patients across Europe and North
                    America, Marc brings deep insight into the personal struggles and triumphs of digital wellness journeys.
                    His hands - on approach to helping individuals overcome technology dependence has shaped our
                    platform human - centered design and supportive community features.His training in psychology,
                    neuroscience and business informs our comprehensive vision.
                </p>
                <h4 className="text-xl font-bold my-4">Christian Dominique, MBA - Chief Strategy Officer</h4>
                <p>
                    With over a decade of experience in digital health commercialization globally, Christian brings valuable
                    insights into scaling digital wellness solutions.His expertise in bringing innovative health technologies to
                    market helps ensure our platform reaches and positively impacts as many lives as possible.He is also a
                    coach, happiness expert and addiction awareness advocate, educating adults and youth aiming to
                    reduce stigma and focus on sustainable solutions.He teaches people to incorporate positive stories and
                    key relationships like family and friends to bring about a more connected and content life experience.
                    (Link to Linkedin)
                </p>
                <h4 className="text-xl font-bold my-4">Roan Brasil Monteiro, MBA - Chief Technology Officer</h4>
                <p>
                    With almost 2 decades of cutting edge IT project management and development in North and South America, Roan is the technical architect with a humane management touch and business sense.Passionate, curious and present he has worked for the biggest banking, transport, tech and gaming global companies.Author and teacher, he cares deeply about the world and is involved in many communities in need. He is compelled to lessen the negative impact identity to digital life can have through awareness and reach.
                </p>
                <h2 className="text-4xl font-bold my-8">Our Clinical and Scientific Advisors</h2>
                <h4 className="text-xl font-bold my-4">Dr. Bonnie Lee, PhD</h4>
                <span>
                    A distinguished professor, researcher, psychology clinician and therapist supervisor, Dr. Lee brings her
                    groundbreaking Congruence Couples Therapy (CCT) approach to our platform relationship welness
                    initiatives. Her expertise in understandig how addictive behaviors impact intimate relationships and
                    family dynamcs helps shape our interventions for couples and families affected by digital dependency.
                    Dr. Lee holistic approach to psychological health and relationship healing adds a crucial dimension to
                    ourtherapeutic framework.
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
                    Dr. Martin has been a researcher and advisor for addiction, harm reduction, youth training and family engagement. With a PhD in Psychiatry from McGill University, Helen's mission is to revolutionize education and mental health support for all. She is involved in many diverse communities , including advocating for women, youth, public and non for profit mental wellness tools and initiatives.
                </span>
                <h2 className="text-4xl font-bold my-8">Our Approach</h2>
                <p>
                    We believe in the power of combining:
                    <ul className="list-disc pl-5">
                        <li>Evidence-based addiction science</li>
                        <li>Human-centered technology</li>
                        <li>Personal coaching and support</li>
                        <li>Community-driven accountability</li>
                    </ul>
                    Our platform  is just about reducing screen time about helping people build meaningful
                    relationships with people and technology that enhance rather than detract from their lives.
                </p>
                <h2 className="text-4xl font-bold my-8">Our Mission</h2>
                <p>
                    In today hyper connected world, the line between healthy use and dependency has become increasingly blurred. Our mission is to empower individuals to:
                    <ul className="list-disc pl-5">
                        <li>Develop healthier digital habits</li>
                        <li>Rediscover offline joy and connection</li>
                        <li>Build sustainable relationships with technology</li>
                        <li>Access support when they need it most</li>
                    </ul>
                </p>

                <h2 className="text-4xl font-bold my-8">Our Commitment</h2>
                <p>
                    We understand that each person’s journey to digital wellness is unique. That’s why we’ve created a
                    flexible, personalized approach that adapts to individual needs while lveraging the power of
                    community support and expert guidance.
                </p>
                <h2 className="text-4xl font-bold my-8">Join Our Community</h2>
                <p>
                    Whether you’re looking to fine-tune your digital habits, provide or seek support for technology
                    dependence, our team and commu n ity are here to offer guidance and support. AWE helps everyone
                    create a more balanced use of tech and media for a meaningful fulfilling lfe.</p>
            </div>
        </Layout>
    );
}

export default AboutUsPage;
