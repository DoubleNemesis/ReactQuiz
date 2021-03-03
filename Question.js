import React from 'react'


function Question(props) {

    return (
        <div
            className="question"
            value={props.answer}
            explanation={props.explanation}
            points={props.points} >
            <h2 >{props.question}</h2>

            <button className='questionButtons' id={props.option1} onClick={props.onclick}>{props.option1}</button>
            <button className='questionButtons' id={props.option2} onClick={props.onclick}>{props.option2}</button>
            <button className='questionButtons' id={props.option3} onClick={props.onclick}>{props.option3}</button>
            <button className='questionButtons' id={props.option4} onClick={props.onclick}>{props.option4}</button>

        </div>
    )
}

export default Question
