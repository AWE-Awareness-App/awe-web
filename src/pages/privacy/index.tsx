import React from 'react';
import Layout from "../../components/DefaultLayout.tsx";

const PrivacyPage: React.FC = () => {
    return (
        <Layout activePage="privacy">
            <div className="mx-auto max-w-6xl px-4 text-blue-950">
                <h2 className="text-4xl font-bold my-8 text-center">Privacy Policy</h2>
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
                    <ul className="list-disc ml-8">
                        <li>Use our services for unlawful, fraudulent, or harmful activities.</li>
                        <li>Share misleading or false information when registering.</li>
                        <li>Attempt to interfere with the operation of the Website.</li>
                    </ul>
                </p>
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
                    By purchasing coaching or behavioral support services from https://awedigitalwellness.com/, you acknowledge and agree that:
                    <ul className="list-disc ml-8">
                        <li>Marc Ritter and Christian Dominique are NOT licensed clinical psychologists or healthcare professionals. They are mental health coaches specializing in internet addiction and behavioral change.</li>
                        <li>Our services are not a substitute for professional medical treatment, therapy, or mental health care.</li>
                        <li>We do not diagnose, treat, or prevent medical or psychological conditions. If you require clinical therapy or medical care, you should seek a licensed professional.</li>
                        <li>Any guidance or strategies provided are for educational and personal development purposes only. Results vary based on individual commitment and effort.</li>
                        <li>We are not liable for decisions made based on our coaching, and you accept full responsibility for your well-being.</li>
                    </ul>
                </p>
                <h5 className="text-l font-bold mt-4">2.3 Medical Emergency Disclaimer</h5>
                <p>
                    If you are experiencing a mental health crisis, suicidal thoughts, or any medical emergency, please seek immediate professional assistance. We do not provide crisis intervention services. Contact:
                    <ul className="list-disc ml-8">
                        <li>911 (US) for emergency medical services.</li>
                        <li>988 (Suicide & Crisis Lifeline, US) for immediate mental health support.</li>
                        <li>988 (Talk Suicide Canada) for crisis support in Canada.</li>
                    </ul>
                </p>
                <h4 className="text-xl font-bold mt-4">3. Cancellation & Refund Policy</h4>
                <h5 className="text-l font-bold mt-4">3.1 Cancellation and Rescheduling Policy</h5>
                <ul className="list-disc ml-8">
                    <li>Clients may cancel or reschedule an appointment at least two (2) business days before the scheduled session without penalty.</li>
                    <li>Cancellations made within two (2) business days of the appointment will be subject to a cancellation fee of 50% of the session cost.</li>
                    <li>If a client does not show up for a scheduled session without prior cancellation (“no-show”), the full session fee will be charged.</li>
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
                <h4 className="text-xl font-bold mt-4">6. Changes to These Terms</h4>
                <p>
                    We may update these Terms at any time. Continued use of our services after changes take effect constitutes acceptance of the revised Terms.<br />
                    Contact Us<br />
                    For any questions about these Terms, contact us at:<br />
                    <a className="text-blue-500" href="mailto:info@awedigitalwellness.com">info@awedigitalwellness.com</a>
                </p>
            </div>
        </Layout>
    );
}

export default PrivacyPage;
