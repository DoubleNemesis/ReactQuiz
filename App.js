import React, { useState } from 'react'
import QuestionProvider from './QuestionProvider'
import ScoreBoard from './ScoreBoard'
import DisplayPage from './DisplayPage'

function App() {
    const [points, setPoints] = useState(0)
    const [colorClass, setColorClass] = useState('noColor')
    const [answer, setAnswer] = useState('')
    const [explanation, setExplanation] = useState('')
    const [isGameFinished, setIsGameFinished] = useState(false)
    return (
        <>
            <div className="container">
                <div className="header">
                </div>
                <ScoreBoard points={points} answer={answer} explanation={explanation} colorClass={colorClass} />

                <DisplayPage setIsGameFinished={setIsGameFinished} isGameFinished={isGameFinished} setAnswer={setAnswer} setExplanation={setExplanation} points={points}>
                    <QuestionProvider
                        setPoints={setPoints}
                        setAnswer={setAnswer}
                        setExplanation={setExplanation}
                        setColorClass={setColorClass}
                    />
                </DisplayPage>
            </div>
        </>
    )
}

export default App