import React from 'react';

function Result({ score, total, userAnswers, questions, onRetry, onGoHome }) {
    const percentage = Math.round((score / total) * 100);
    const passed = percentage >= 80;

    // Filter wrong answers for review
    const wrongAnswers = questions.filter(
        (q) => userAnswers[q.id] !== q.answer
    );

    return (
        <div className="result-container">
            <h2>考試結果</h2>
            <div className={`score-circle ${passed ? 'passed' : 'failed'}`}>
                <span>{percentage}%</span>
            </div>
            <p>答對題數：{score} / {total}</p>
            <p className="status-message">
                {passed ? '恭喜通過！' : '未通過，請再接再厲！'}
            </p>

            <div className="result-actions">
                <button onClick={onRetry} className="retry-btn">重新測驗 (抽取新題目)</button>
                <button onClick={onGoHome} className="home-btn" style={{ marginLeft: '1rem' }}>回到首頁</button>
            </div>

            {wrongAnswers.length > 0 && (
                <div className="review-section">
                    <h3>錯題回顧與解析</h3>
                    {wrongAnswers.map((q) => (
                        <div key={q.id} className="review-card">
                            <p className="review-question"><strong>Q: {q.question}</strong></p>
                            <p className="review-user-answer wrong">您的答案: {userAnswers[q.id] || '未作答'}</p>
                            <p className="review-correct-answer">正確答案: {q.answer}</p>
                            <div className="review-explanation">
                                <strong>解析:</strong> {q.explanation}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Result;
