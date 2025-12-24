import React, { useState } from 'react';

function FeedbackModal({ onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        suggestion: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate sending email via mailto
        const subject = `PMBOK App Feedback from ${formData.name}`;
        const body = formData.suggestion;
        window.location.href = `mailto:baichu702@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        alert('感謝您的建議！我們已嘗試開啟您的郵件軟體。');
        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>優化建議</h2>
                <p>您的意見是我們進步的動力，請填寫下表：</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>您的稱呼</label>
                        <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="請輸入您的姓名"
                        />
                    </div>
                    <div className="form-group">
                        <label>建議內容</label>
                        <textarea
                            required
                            rows="4"
                            value={formData.suggestion}
                            onChange={(e) => setFormData({ ...formData, suggestion: e.target.value })}
                            placeholder="請描述您遇到的問題或建議功能..."
                        ></textarea>
                    </div>
                    <div className="modal-actions">
                        <button type="button" className="cancel-btn" onClick={onClose}>取消</button>
                        <button type="submit" className="submit-btn">提交建議</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FeedbackModal;
