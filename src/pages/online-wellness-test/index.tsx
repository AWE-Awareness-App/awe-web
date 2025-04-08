import { useState } from 'react';
import { Button, Label, TextInput, Card } from 'flowbite-react';
import Layout from '@components/DefaultLayout';

export default function OnlineWellnessTest() {
    const [email, setEmail] = useState('');
    const [started, setStarted] = useState(false);
    const [consent, setConsent] = useState(false);

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
        "Does your loved one feel anxious, restless, or irritable when you can't use their phone or access the internet?",
        "Does your loved one use their phone or internet as a way to escape boredom, loneliness, grief, or negative emotions?",
        "Does your loved one feel guilty or ashamed about how much time they spend on their phone or online?",
        "Does your loved one promises to cut back, but going back to the same habits the next day?",
        "Have your loved one hidden their screen time or lied about their online habits to others?",
        "Has their phone or internet use negatively affected their sleep, focus, or energy levels?",
        "Has your loved one missed out on social events, school obligations, or romantic interests because of their screen time?",
        "Do you feel like their online habits are getting in the way of your real-life goals or relationships?"
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
        setScore(score + scoreAnswer);
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    const calculateFinalResult = () => {
        const totalScore = answers.reduce((sum, answer) => sum + answer.score, 0);
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
            <h2 className="text-xl font-semibold mb-4">Question {currentQuestionIndex + 2}</h2>
            <p className="mb-6 text-gray-700">
                {firstQuestionAnswer == 'Myself' ? questionsMyself[currentQuestionIndex] : questionsLovedOne[currentQuestionIndex]}
            </p>
            <div className="flex gap-4">
                {[0, 1, 2, 3, 4].map((scoreOption) => (
                    <Button
                        key={scoreOption}
                        onClick={() => handleAnswer(scoreOption)}
                        color={scoreOption === 4 ? 'success' : scoreOption > 2 ? 'warning' : 'failure'}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    >
                        {scoreOption === 0 ? 'Never' :
                            scoreOption === 1 ? 'Rarely' :
                                scoreOption === 2 ? 'Sometimes' :
                                    scoreOption === 3 ? 'Often' : 'Always'}
                    </Button>
                ))}
            </div>
        </div>

    var completedQuestionaireView =
        <div>
            <h2 className="text-xl font-bold mb-4">Thanks for completing the test!</h2>
            <p className="mb-2 text-gray-600">We’ll email your results to: <strong>{email}</strong></p>
            <p className="mb-4">Your score is {score} out of 52.</p>
            <p className="text-lg font-bold">{calculateFinalResult()}</p>
            <pre className="bg-gray-100 p-2 rounded text-sm mt-4">
                {JSON.stringify(answers, null, 2)}
            </pre>
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
