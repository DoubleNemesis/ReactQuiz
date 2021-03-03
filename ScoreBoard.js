import React from 'react'

function ScoreBoard(props) {


    return (
        <div className="scoreBoard">
            <p id="points"> {props.points === 0 ? '' : `Score: ${props.points}`} </p>
            <h2 className={props.colorClass}> {props.answer} </h2>
            <h5> {props.explanation} </h5>
        </div>
    )
}

export default ScoreBoard