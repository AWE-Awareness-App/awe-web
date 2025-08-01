import { useEffect, useState } from 'react';
import { Button, Label, TextInput, Card } from 'flowbite-react';
import { FaArrowLeft, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Layout from '@components/DefaultLayout';
import { EmailShareButton, FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';
import { MdEmail } from 'react-icons/md';
import { trackEvent } from "@services/Analytics";

export default function OnlineWellnessTest() {
    const [email, setEmail] = useState('');
    const [started, setStarted] = useState(false);
    const [consent, setConsent] = useState(false);
    const [shareUrl, setShareUrl] = useState('');

    useEffect(() => {
        // This will run only on the client side
        setShareUrl(window.location.href);
    }, []);


    const firstQuestion = "Is this assessment for you or for someone else?";
    const [firstQuestionAnswer, setFirstQuestionAnswer] = useState<'Myself' | 'A loved one' | null>(null);;

    const questionsMyself = [
        "Do you often lose track of time while using your phone or browsing online?",
        "Do you find it hard to stop using your phone or the internet, even when you know you should?",
        "Do you need to spend more and more time online to feel satisfied or entertained?",
        "Do you often jump from video to video, seeking something more exciting or stimulating?",
        "Do you feel anxious, restless, or irritable when you can't use your phone or access the internet?",
        "Do you use your phone or internet as a way to escape boredom, loneliness, grief, or negative emotions?",
        "Do you feel guilty or ashamed about how much time you spend on your phone or online?",
        "Do you find yourself promising to cut back, but going back to the same habits the next day?",
        "Have you hidden your screen time or lied about your online habits to others?",
        "Has your phone or internet use negatively affected your sleep, focus, or energy levels?",
        "Have you missed out on social events, school obligations, or romantic interests because of your screen time?",
        "Do you feel like your online habits are getting in the way of your real-life goals or relationships?"
    ];

    const questionsLovedOne = [
        "Does your loved one often lose track of time while using their phone or browsing online?",
        "Does your loved one find it hard to stop using their phone or the internet, even when they know they should?",
        "Does your loved one need to spend more and more time online to feel satisfied or entertained?",
        "Does your loved one often jump from video to video, seeking something more exciting or stimulating?",
        "Does your loved one seem to feel anxious, restless, or irritable when they can't use their phone or access the internet?",
        "Does your loved one use their phone or internet as a way to escape boredom, loneliness, grief, or negative emotions?",
        "Does your loved one feel guilty or ashamed about how much time they spend on their phone or online?",
        "Did your loved one try to cut back their phone or internet use without success?",
        "How often do you suspect your loved one to have hidden their screen time to you or others?",
        "Has their phone or internet use negatively affected their sleep, focus, or energy levels?",
        "Has your loved one missed out on social events, school obligations, or romantic interests because of their screen time?",
        "Do you feel like their online habits are getting in the way of their real-life goals or relationships?"
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<{ questionIndex: number; score: number }[]>([]);
    const [score, setScore] = useState(0);

    const handleStart = async () => {
        if (!email) {
            alert("Please enter your email.");
            return;
        }

        if (!consent) {
            alert("Please agree to receive emails.");
            return;
        }

        try {
            const res = await fetch('/api/add-email-to-contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (!res.ok) {
                console.error('Failed to add contact:', data.error);
                alert('There was an issue subscribing your email.');
                return;
            }

            setStarted(true);
        } catch (error) {
            console.error('Request failed:', error);
            alert('Something went wrong while trying to subscribe your email.');
        }
    };

    const handleFirstQuestionAnswer = (answer: 'Myself' | 'A loved one') => {
        setFirstQuestionAnswer(answer);
    };

    const handleAnswer = (scoreAnswer: number) => {
        setAnswers([...answers, { questionIndex: currentQuestionIndex, score: scoreAnswer }]);
        var updatedScore = score + scoreAnswer;
        setScore(updatedScore);
        setCurrentQuestionIndex(currentQuestionIndex + 1);

        if (currentQuestionIndex + 1 === (firstQuestionAnswer === 'Myself' ? questionsMyself.length : questionsLovedOne.length)) {
            handleCompleteQuestionnaire(updatedScore);
        }
    };

    const handleCompleteQuestionnaire = (finalScore: number) => {
        trackEvent({
            category: "User Actions",
            action: "Completed Online Wellness Test",
            label: "Completed Test",
            value: finalScore,
        });

        sendResultsEmail(finalScore);
    };

    const handleGoBack = () => {
        if (currentQuestionIndex === 0) {
            resetTest();
        } else {
            const updatedAnswers = answers.slice(0, -1);
            const lastAnswer = answers[answers.length - 1];
            setAnswers(updatedAnswers);
            setScore(score - lastAnswer.score);
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    }

    var totalScore = answers.reduce((sum, answer) => sum + answer.score, 0);
    const calculateFinalResult = () => {
        let result = '';
        if (totalScore <= 10) {
            result = 'No signs of problematic use';
        } else if (totalScore <= 20) {
            result = 'Mild use issues';
        } else if (totalScore <= 35) {
            result = 'Moderate addiction signs';
        } else {
            result = 'Severe addiction - help recommended';
        }
        return result;
    };

    const handleBookingConsultation = (event: React.MouseEvent) => {
        event.preventDefault();
        trackEvent({ category: "User Actions", action: "Clicked Book Free Consultations", label: "Online-Test" });
        window.open('https://calendly.com/marcdaritter', '_blank', 'noopener noreferrer');
    }

    const resetTest = () => {
        setFirstQuestionAnswer(null);
        setCurrentQuestionIndex(0);
        setAnswers([]);
        setScore(0);
    }

    const sendResultsEmail = async (finalScore: number) => {
        const emailSubject = "Thanks for completing the test!";
        const emailMessage = `
            <div style="font-family: Arial, sans-serif; color: #333; padding: 24px; line-height: 1.6; max-width: 600px; margin: auto; background-color: #f9f9f9; border-radius: 8px;">
                <h1 style="color: #2c3e50;">Thanks for being part of the <span style="color: #2980b9;">AWE</span> community!</h1>

                <p>We appreciate your participation in the test. Here's a summary of your results:</p>

                <p style="font-size: 18px;"><strong>Your score:</strong> <span style="color: #2980b9;"><strong>${finalScore}</strong></span> out of 52</p>

                <h2 style="margin-top: 32px;">Things we recommend you${firstQuestionAnswer === 'A loved one' ? ' and they' : ''} pay attention to:</h2>

                <h3 style="color: #34495e;">General Use & Loss of Control</h3>
                <p>Currently, ${pronoun} might have <strong>${getTextForGeneralUseScore()}</strong>.</p>

                <h3 style="color: #34495e;">Emotional Impact & Withdrawal</h3>
                <p>Currently, ${pronoun} might have <strong>${getTextForEmotionalImpactScore()}</strong>.</p>

                <h3 style="color: #34495e;">Real-Life Consequences</h3>
                <p>Currently, ${pronoun} might have <strong>${getTextForRealLifeScore()}</strong>.</p>

                <hr style="margin: 32px 0; border: none; border-top: 1px solid #ccc;">

                <h3 style="color: #34495e;">Stay connected:</h3>
                <p>Follow us for more digital awareness, tips, and features coming soon!</p>

                <p>
                    <a href="https://www.linkedin.com/company/awe-digital-wellness/" target="_blank" style="color: #0077b5; text-decoration: none;">LinkedIn</a> &nbsp;|&nbsp;
                    <a href="https://www.instagram.com/awe_digital_wellness/?igsh=MWRjcnFhbG5kNzFiMA%3D%3D&utm_source=qr#" target="_blank" style="color: #d6249f; text-decoration: none;">Instagram</a> &nbsp;|&nbsp;
                    <a href="https://x.com/awe_wellness" target="_blank" style="color: #000000; text-decoration: none;">X</a> &nbsp;|&nbsp;
                    <a href="https://www.facebook.com/p/AWE-Digital-Wellness-61566595893728/" target="_blank" style="color: #1877F2; text-decoration: none;">Facebook</a> &nbsp;|&nbsp;
                    <a href="https://www.youtube.com/@awe_digital_wellness" target="_blank" style="color: #CD201F; text-decoration: none;">YouTube</a>
                </p>
            </div>
        `;

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    recipientEmail: email,
                    subject: emailSubject,
                    message: emailMessage,
                }),
            });

            const data = await response.json();

            if (data.success) {
                console.log('Email sent successfully!');
            } else {
                console.error('Failed to send email.', data.message);
            }
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    var askEmailView =
        <div>
            <h1 className="text-2xl font-bold mb-4">Online Wellness Test</h1>
            <p className="mb-6 text-gray-600">
                Answer a few quick questions to get your personalized online wellness score.
            </p>
            <div className="mb-4">
                <Label htmlFor="email">Email</Label>
                <TextInput
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <div className="flex items-start gap-2 mt-2">
                    <input
                        id="consent"
                        type="checkbox"
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        required
                        className="w-4 h-4 border-gray-300 rounded accent-blue-600 mt-0.5"
                    />
                    <Label htmlFor="consent" className="text-sm !text-blue-950">
                        I agree to receive emails related to the wellness test and marketing updates from AWE. View our{' '}
                        <a href="/privacy" className="text-blue-600 underline">Privacy Policy</a>.
                    </Label>
                </div>
            </div>
            <Button onClick={handleStart} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Start the Quiz
            </Button>
        </div>

    var firstQuestionView =
        <div>
            <h2 className="text-xl font-semibold mb-4">Question 1</h2>
            <p className="mb-6 text-gray-700">{firstQuestion}</p>
            <div className="flex gap-4">
                <Button onClick={() => handleFirstQuestionAnswer('Myself')} color="success" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Myself
                </Button>
                <Button onClick={() => handleFirstQuestionAnswer('A loved one')} color="failure" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    A loved one
                </Button>
            </div>
        </div>

    var questionView =
        <div>
            <h2 className="text-xl font-semibold mb-4 flex">
                <Button
                    onClick={() => handleGoBack()}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 mr-4">
                    <FaArrowLeft size={12} />
                </Button>
                Question {currentQuestionIndex + 2}
            </h2>
            <p className="mb-6 text-gray-700">
                {firstQuestionAnswer == 'Myself' ? questionsMyself[currentQuestionIndex] : questionsLovedOne[currentQuestionIndex]}
            </p>
            <div className="flex flex-col md:flex-row gap-4">
                {[0, 1, 2, 3, 4].map((scoreOption) => (
                    <Button
                        key={scoreOption}
                        onClick={() => handleAnswer(scoreOption)}
                        color={scoreOption === 4 ? 'success' : scoreOption > 2 ? 'warning' : 'failure'}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white px-2"
                    >
                        {scoreOption === 0 ? 'Never' :
                            scoreOption === 1 ? 'Rarely' :
                                scoreOption === 2 ? 'Sometimes' :
                                    scoreOption === 3 ? 'Often' : 'Always'}
                    </Button>
                ))}
            </div>
        </div>

    const generalUseScores = answers.slice(1, 5).map(answer => answer.score);
    const getTextForGeneralUseScore = () => {
        const totalGeneralUseScore = generalUseScores.reduce((sum, score) => sum + score, 0);
        if (totalGeneralUseScore <= 4) {
            return "Strong control";
        } else if (totalGeneralUseScore <= 10) {
            return "Occasional loss of control";
        } else {
            return "Signs of compulsive use";
        }
    }

    const emotionalImpactScores = answers.slice(5, 9).map(answer => answer.score);
    const getTextForEmotionalImpactScore = () => {
        const totalEmotionalImpactScore = emotionalImpactScores.reduce((sum, score) => sum + score, 0);
        if (totalEmotionalImpactScore <= 4) {
            return "No emotional dependence";
        } else if (totalEmotionalImpactScore <= 10) {
            return "Some emotional triggers";
        } else {
            return "High emotional reliance";
        }
    }

    const realLifeScores = answers.slice(9, 13).map(answer => answer.score);
    const getTextForRealLifeScore = () => {
        const totalRealLifeScore = realLifeScores.reduce((sum, score) => sum + score, 0);
        if (totalRealLifeScore <= 4) {
            return "No significant impact";
        } else if (totalRealLifeScore <= 10) {
            return "Occasional consequences";
        } else {
            return "Major life interference";
        }
    }

    var pronoun = firstQuestionAnswer == 'Myself' ? "you" : "your loved one"

    var completedQuestionaireView =
        <div>
            <h2 className="text-xl font-bold mb-4">Thanks for completing the test!</h2>
            <p className="mb-2 text-gray-600">We’ll email your results to: <strong>{email}</strong></p>
            <p className="mb-4">Your score is {score} out of 52.</p>
            <p className="text-lg font-bold">{calculateFinalResult()}</p>
            {totalScore >= 21 && (
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-2 my-8" onClick={handleBookingConsultation}>
                    Book a free consultation (15 minutes)
                </Button>
            )}
            <p className='mt-4'>
                Things we recommend you{firstQuestionAnswer == 'A loved one' && (" and they")} pay attention to:
            </p>
            <p className='mt-4'>
                <span className='font-semibold'>Regarding General Use & Loss of Control</span><br />
                Currently {pronoun} might have {getTextForGeneralUseScore()}.
            </p>
            <p className='mt-4'>
                <span className='font-semibold'>Emotional Impact & Withdrawal</span><br />
                Currently {pronoun} might have {getTextForEmotionalImpactScore()}.
            </p>
            <p className='mt-4'>
                <span className='font-semibold'>Real-Life Consequences</span><br />
                Currently {pronoun} might have {getTextForRealLifeScore()}.
            </p>
            <div className="mt-6">
                <p className="font-semibold mb-2">Share this test:</p>
                <div className="flex gap-4 items-center">
                    <FacebookShareButton url={shareUrl}>
                        <FaFacebook size={48} className="text-blue-600 hover:underline" />
                    </FacebookShareButton>
                    <LinkedinShareButton url={shareUrl}>
                        <FaLinkedin size={48} className="text-blue-800" />
                    </LinkedinShareButton>
                    <TwitterShareButton url={shareUrl}>
                        <FaXTwitter size={48} className="text-black" />
                    </TwitterShareButton>
                    <EmailShareButton url={shareUrl}>
                        <MdEmail size={48} className="text-black" />
                    </EmailShareButton>
                    <button
                        onClick={() => {
                            navigator.clipboard.writeText(shareUrl);
                            alert("Link copied to clipboard!");
                        }}
                        className="text-green-600 hover:underline"
                    >
                        Copy Link
                    </button>
                </div>
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-2 my-8" onClick={resetTest}>
                Retake the test
            </Button>
        </div>

    return (
        <Layout activePage="privacy">
            <div className="min-h-[calc(100vh-15rem)] flex items-center justify-center py-12 px-4">
                <Card className="w-full max-w-md shadow-lg">
                    {!started ?
                        askEmailView :
                        firstQuestionAnswer == null ?
                            firstQuestionView
                            : currentQuestionIndex < questionsMyself.length ?
                                questionView :
                                completedQuestionaireView}
                </Card>
            </div>
        </Layout>
    );
}
