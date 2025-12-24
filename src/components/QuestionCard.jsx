import React from 'react';

function QuestionCard({ question, currentAnswer, onChange }) {
    return (
        <div className="question-card">
            <h2>{question.question}</h2>
            <div className="options">
                {question.options.map((option) => (
                    <label key={option} className={`option-label ${currentAnswer === option ? 'selected' : ''}`}>
                        <input
                            type="radio"
                            name={`question-${question.id}`}
                            value={option}
                            checked={currentAnswer === option}
                            onChange={() => onChange(option)}
                        />
                        {option}
                    </label>
                ))}
            </div>
        </div>
    );
}

export default QuestionCard;
