
import React, { useState, useEffect } from 'react';
import { questions as allQuestions } from '../data/questions';
import QuestionCard from './QuestionCard';
import Result from './Result';
import Timer from './Timer';

function Quiz({ onGoHome }) {
    const [currentQuestions, setCurrentQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const [isFinished, setIsFinished] = useState(false);

    // Initialize quiz with random questions
    useEffect(() => {
        startNewQuiz();
    }, []);

    const startNewQuiz = () => {
        // Shuffle and pick 10
        const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 10);

        setCurrentQuestions(selected);
        setCurrentQuestionIndex(0);
        setUserAnswers({});
        setIsFinished(false);
    };

    const handleAnswerChange = (answer) => {
        setUserAnswers({
            ...userAnswers,
            [currentQuestions[currentQuestionIndex].id]: answer
        });
    };

    const handleNext = () => {
        if (currentQuestionIndex < currentQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            finishQuiz();
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const finishQuiz = () => {
        setIsFinished(true);
    };

    const calculateScore = () => {
        let score = 0;
        currentQuestions.forEach((q) => {
            if (userAnswers[q.id] === q.answer) {
                score += 1;
            }
        });
        return score;
    };

    if (currentQuestions.length === 0) {
        return <div>Loading questions...</div>;
    }

    if (isFinished) {
        return (
            <Result
                score={calculateScore()}
                total={currentQuestions.length}
                userAnswers={userAnswers}
                questions={currentQuestions}
                onRetry={startNewQuiz}
                onGoHome={onGoHome}
            />
        );
    }

    const currentQuestion = currentQuestions[currentQuestionIndex];
    const isLastQuestion = currentQuestionIndex === currentQuestions.length - 1;
    const hasAnsweredCurrent = !!userAnswers[currentQuestion.id];

    return (
        <div className="quiz-container">
            <div className="quiz-header">
                <span>題目 {currentQuestionIndex + 1} / {currentQuestions.length}</span>
                {/* Reset timer key to force re-render on new quiz */}
                <Timer key={currentQuestions[0].id} duration={300} onTimeUp={finishQuiz} />
            </div>

            <QuestionCard
                question={currentQuestion}
                currentAnswer={userAnswers[currentQuestion.id]}
                onChange={handleAnswerChange}
            />

            <div className="navigation-buttons">
                <button
                    onClick={handlePrevious}
                    disabled={currentQuestionIndex === 0}
                >
                    上一題
                </button>
                <button
                    onClick={handleNext}
                    disabled={!hasAnsweredCurrent}
                    title={!hasAnsweredCurrent ? "請先回答本題" : ""}
                >
                    {isLastQuestion ? '提交試卷' : '下一題'}
                </button>
            </div>
        </div>
    );
}

export default Quiz;

