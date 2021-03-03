import React from 'react'
import questions from './questions'
import Question from './Question'

function QuestionProvider(props) {

    function handleAnswer(e) {
        let parent = document.getElementById(e.target.id).parentElement;
        let pointsToAdd = parent.getAttribute('points')
        let answer = parent.getAttribute('value')
        let currentExplanation = parent.getAttribute('explanation')
        if (answer === e.target.id) {
            props.setPoints(prev => prev + parseInt(pointsToAdd))
            props.setColorClass('correct')
        }
        else {
            props.setColorClass('incorrect')
        }
        props.setAnswer(answer)
        props.setExplanation(currentExplanation)
        let myButtons = document.querySelectorAll('.questionButtons')
        let keyArray = Object.keys(myButtons)
        keyArray.forEach(function (key) { myButtons[key].style.visibility = 'hidden' })
    }

    const questionsList = questions.map(question => <Question
        key={question.id}
        id={question.id}
        question={question.question}
        option1={question.option1}
        option2={question.option2}
        option3={question.option3}
        option4={question.option4}
        answer={question.answer}
        explanation={question.explanation}
        points={question.points}
        onclick={handleAnswer}
    />)

    return (
        <>
            {questionsList}
        </>
    )
}

export default QuestionProvider
