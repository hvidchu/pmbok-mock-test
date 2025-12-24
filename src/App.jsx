import { useState } from 'react'
import Quiz from './components/Quiz'
import Welcome from './components/Welcome'

function App() {
    const [view, setView] = useState('welcome'); // 'welcome', 'quiz'

    return (
        <div className="app-container">
            {view === 'welcome' && (
                <Welcome onStart={() => setView('quiz')} />
            )}

            {view === 'quiz' && (
                <main>
                    <Quiz onGoHome={() => setView('welcome')} />
                </main>
            )}
        </div>
    )
}

export default App
