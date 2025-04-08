import { useState } from 'react';
import { Button, Label, TextInput, Card } from 'flowbite-react';
import Layout from '@components/DefaultLayout';

export default function OnlineWellnessTest() {
    const [email, setEmail] = useState('');
    const [started, setStarted] = useState(false);
    const [consent, setConsent] = useState(false);

    const questions = [
        "Do you feel overwhelmed when using social media?",
        "Do you find it hard to concentrate online?",
        "Do you take regular breaks from your screen?",
        "Do you often feel anxious after being online?",
        "Do you feel like you’re in control of your online habits?"
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<{ questionIndex: number; answer: 'yes' | 'no' }[]>([]);

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

    const handleAnswer = (answer: 'yes' | 'no') => {
        setAnswers([...answers, { questionIndex: currentQuestionIndex, answer }]);
        setCurrentQuestionIndex(currentQuestionIndex + 1);
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

    var questionView =
        <div>
            <h2 className="text-xl font-semibold mb-4">Question {currentQuestionIndex + 1}</h2>
            <p className="mb-6 text-gray-700">{questions[currentQuestionIndex]}</p>
            <div className="flex gap-4">
                <Button onClick={() => handleAnswer('yes')} color="success" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Yes
                </Button>
                <Button onClick={() => handleAnswer('no')} color="failure" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    No
                </Button>
            </div>
        </div>

    var completedQuestionaireView =
        <div>
            <h2 className="text-xl font-bold mb-4">Thanks for completing the test!</h2>
            <p className="mb-2 text-gray-600">We’ll email your results to: <strong>{email}</strong></p>
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
                        currentQuestionIndex < questions.length ?
                            questionView :
                            completedQuestionaireView}
                </Card>
            </div>
        </Layout>
    );
}
