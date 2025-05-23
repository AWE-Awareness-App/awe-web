import React from 'react';
import Layout from "../../components/DefaultLayout.tsx";

const PrivacyPage: React.FC = () => {
    return (
        <Layout activePage="privacy">
            <div className="mx-auto max-w-6xl px-4 text-blue-950">
                <h2 className="text-4xl font-bold my-8 text-center">Privacy Policy</h2>
                <p className="text-gray-700 text-center my-8">At AWE Digital Wellness, we care about your privacy and will never sell your data.</p>
                <p>
                    By accessing and using <span className="font-bold">AWE | Awareness, Wellness, Enjoyment</span> , you agree to comply with these Terms and Conditions. If you do not agree with any part of these Terms, please discontinue use of our services.
                </p>
                <h4 className="text-xl font-bold mt-4">1. Terms of Use (Referenced at Registration)</h4>
                <h5 className="text-l font-bold mt-4">1.1 Acceptance of Terms</h5>
                <p>
                    By creating an account, you confirm that you have read, understood, and agreed to these Terms and Conditions, as well as our Privacy Policy.
                </p>
                <h5 className="text-l font-bold mt-4">1.2 Eligibility</h5>
                <p>
                    You must be at least 18 years old (or the age of majority in your jurisdiction) to register for an account. By registering, you represent that you are legally capable of entering into a binding agreement.
                </p>
                <h5 className="text-l font-bold mt-4">1.3 Account Security</h5>
                <p>
                    You are responsible for maintaining the confidentiality of your account credentials. Any unauthorized use of your account should be reported to us immediately. We are not liable for any loss or damage resulting from unauthorized account access.
                </p>
                <h5 className="text-l font-bold mt-4">1.4 Prohibited Activities</h5>
                <p>
                    You agree not to:
                </p>
                <ul className="list-disc ml-8">
                    <li>Use our services for unlawful, fraudulent, or harmful activities.</li>
                    <li>Share misleading or false information when registering.</li>
                    <li>Attempt to interfere with the operation of the Website.</li>
                </ul>
                <p className="mt-4">
                    We reserve the right to terminate accounts that violate these terms.
                </p>
                <h4 className="text-xl font-bold mt-4">2. Payment & Non-Clinical Therapy Disclaimer (Referenced at Payment)</h4>
                <h5 className="text-l font-bold mt-4">2.1 Payment Terms</h5>
                <ul className="list-disc ml-8">
                    <li>All fees for services are non-refundable, except as required by law.</li>
                    <li>Payments are processed securely via third-party payment processors. We do not store payment details.</li>
                    <li>Subscription-based services (if applicable) will be billed on a recurring basis unless canceled.</li>
                </ul>
                <h5 className="text-l font-bold mt-4">2.2 Non-Clinical Therapy Disclaimer</h5>
                <p>
                    By purchasing coaching or behavioral support services from https://awedigitalwellness.com/ and https://aweddiction.com/, you acknowledge and agree that:
                </p>
                <ul className="list-disc ml-8">
                    <li>Although some of our coaches are licensed psychologists, they may not be in your jurisdication. You agree to receive services as a coaching service and not a healthcare or clinical psychology consultation.</li>
                    <li>Our services are not a substitute for professional medical treatment, therapy, or mental health care.</li>
                    <li>We do not diagnose, treat, or prevent medical or psychological conditions. If you require clinical therapy or medical care, you should seek a licensed professional.</li>
                    <li>Any guidance or strategies provided are for educational and personal development purposes only. Results vary based on individual commitment and effort.</li>
                    <li>We are not liable for decisions made based on our coaching, and you accept full responsibility for your well-being.</li>
                </ul>
                <h5 className="text-l font-bold mt-4">2.3 Medical Emergency Disclaimer</h5>
                <p>
                    If you are experiencing a mental health crisis, suicidal thoughts, or any medical emergency, please seek immediate professional assistance. We do not provide crisis intervention services. Contact:
                </p>
                <ul className="list-disc ml-8">
                    <li>911 (US, Canada, Costa Rica, Mexico, Panama, Argentina, Uruguay, Jordan, Fiji, the Philippines) for emergency medical services.</li>
                    <li>112 Europe</li>
                    <li>119 South Korea</li>
                    <li>000 Australia</li>
                    <li>988 (Suicide & Crisis Lifeline, US) for immediate mental health support.</li>
                    <li>988 (Talk Suicide Canada) for crisis support in Canada.</li>
                </ul>
                <h4 className="text-xl font-bold mt-4">3. Cancellation & Refund Policy</h4>
                <h5 className="text-l font-bold mt-4">3.1 Cancellation and Rescheduling Policy</h5>
                <ul className="list-disc ml-8">
                    <li>Clients may cancel or reschedule a 1on1 or 1on2+ appointment at least two (2) business days before the scheduled session without penalty.</li>
                    <li>Reschedule made within two (2) business days of the appointment will be subject to a fee of 50% of the session cost.</li>
                    <li>After 2 rescheduling for the same appointment, or if the reschedule date is longer than 30 days, the full session fee will be charged.</li>
                    <li>If a client cancels or does not show up for a scheduled session without prior rescheduling ("no-show"), the full session fee will be charged.</li>
                </ul>
                <h5 className="text-l font-bold mt-4">3.2 Refunds</h5>
                <ul className="list-disc ml-8">
                    <li>All payments for services are non-refundable, except where required by law.</li>
                    <li>If a payment dispute arises, you agree to contact us before filing a chargeback.</li>
                </ul>
                <h4 className="text-xl font-bold mt-4">4. Limitation of Liability</h4>
                <ul className="list-disc ml-8">
                    <li>We are not liable for any indirect, incidental, or consequential damages arising from the use of our services.</li>
                    <li>You agree to release and indemnify us from any claims related to your use of the Website and services.</li>
                </ul>
                <h4 className="text-xl font-bold mt-4">5. Privacy & Data Protection</h4>
                <p>
                    We respect your privacy. Your information will be handled per our Privacy Policy, which explains how we collect, use, and protect your data.
                </p>
                <h4 className="text-xl font-bold mt-4">6. Governing Law and Jurisdiction</h4>
                <p>
                    These Terms & Conditions are governed by the laws of Canada. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the courts of Quebec, Canada.
                </p>
                <h4 className="text-xl font-bold mt-4">7. Changes to These Terms & Conditioms</h4>
                <p>
                    We reserve the right to update or modify these
                    these Terms & Conditioms
                    at any time. Any changes will be posted on this page with a revised effective date. Your continued use of the website after modifications constitutes acceptance of the updated terms.
                    By using this website, you acknowledge that you have read and understood these Terms & Conditions and agree to their terms.
                </p>
            </div>
        </Layout>
    );
}

export default PrivacyPage;
