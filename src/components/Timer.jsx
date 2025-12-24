import React, { useEffect } from 'react';

function Timer({ duration, onTimeUp }) {
    const [timeLeft, setTimeLeft] = React.useState(duration);

    useEffect(() => {
        if (timeLeft === 0) {
            onTimeUp();
            return;
        }
        const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        return () => clearTimeout(timerId);
    }, [timeLeft, onTimeUp]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <div className="timer">
            剩餘時間: {formatTime(timeLeft)}
        </div>
    );
}

export default Timer;
