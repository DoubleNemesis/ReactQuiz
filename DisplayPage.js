import React, { useState } from 'react'


function DisplayPage({ children, ...props }) {
    const [gameState, setGameState] = useState('stopped')
    const [message, setMessage] = useState('Ready to test your world knowledge?')
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    let questionsArray = document.getElementsByClassName('question')
    let controlButton = document.getElementById('controlButton')

    function handleClick() {
        setMessage('')
        props.setAnswer('')
        props.setExplanation('')
        if (!props.isGameFinished) {
            if (questionsArray.length - 1 === currentQuestionIndex) {
                props.setIsGameFinished(true)
            }
            if (currentQuestionIndex > 0) {
                questionsArray[currentQuestionIndex - 1].style.display = 'none'
            }
            let myButtons = document.querySelectorAll('.questionButtons')
            let keyArray = Object.keys(myButtons)
            keyArray.forEach(function (key) { myButtons[key].style.visibility = 'visible' })
            setGameState('active')
            questionsArray[currentQuestionIndex].style.display = 'inline-block'
            setCurrentQuestionIndex(prev => prev + 1)
        }
        else {
            const pointsArea = document.getElementById('points')
            let endMessage = props.points < 2 ? 'You could do better!' : props.points > 4 ? 'Excellent! You are a genius!' : 'Not bad at all!'
            setMessage(endMessage)
            controlButton.style.display = 'none'
            let myQuestions = document.querySelectorAll('.question')
            let keyQuestionsArray = Object.keys(myQuestions)
            keyQuestionsArray.forEach(function (key) { myQuestions[key].style.display = 'none' })
            props.setAnswer('')
            props.setExplanation('')
            pointsArea.classList.add('large')
        }
    }

    return (
        <div className="game">
            <h2>{message}</h2>
            {children}
            <button id="controlButton" onClick={handleClick}>{gameState === 'stopped' ? 'Start Quiz' : gameState === 'active' ? 'next' : 'Try again'}</button>
        </div>
    )
}

export default DisplayPage
