import React, { useState } from 'react';
import FeedbackModal from './FeedbackModal';

function Welcome({ onStart }) {
    const [showFeedback, setShowFeedback] = useState(false);

    return (
        <div className="welcome-container">
            <div className="welcome-content">
                <h1 className="welcome-title">PMBOK <span>PMP</span> 模擬測驗</h1>
                <p className="welcome-subtitle">專業專案管理師認證衝刺 · 隨機實戰演練</p>

                <div className="features-grid">
                    <div className="feature-item">
                        <span className="icon">⏱️</span>
                        <h3>5 分鐘衝刺</h3>
                        <p>高效率隨機 10 題</p>
                    </div>
                    <div className="feature-item">
                        <span className="icon">🎯</span>
                        <h3>80% 及格</h3>
                        <p>高標準嚴格把關</p>
                    </div>
                    <div className="feature-item">
                        <span className="icon">📚</span>
                        <h3>500+ 題庫</h3>
                        <p>海量題目隨機抽樣</p>
                    </div>
                </div>

                <div className="action-buttons">
                    <button className="start-btn" onClick={onStart}>
                        開始測驗
                    </button>
                    <button className="feedback-btn" onClick={() => setShowFeedback(true)}>
                        優化建議
                    </button>
                </div>
            </div>

            {showFeedback && <FeedbackModal onClose={() => setShowFeedback(false)} />}
        </div>
    );
}

export default Welcome;
