// timer based on React Stopwatch by Ray Alva - https://medium.com/codex/react-stopwatch-10bf9813d0ec

import React, { useState, useEffect } from "react";

function Stats(props) {

    const [time, setTime] = useState(0)
    const [start, setStart] = useState(false)

    const timerToggle = props.userActive
    const timerReset = props.reset

    const minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-1)
    const seconds = ("0" + Math.floor((time / 1000) % 60)).slice(-2)
    const milliseconds = ("0" + (time/ 10) % 1000).slice(-2)
    
    const chrTyped = props.chrTyped
    let wpm = (Math.round((chrTyped / 5) / (((time / 1000) % 60) / 60)))
    if(isNaN(wpm)) {
        wpm = 0 ;
    }
    const errorCounter = props.errorCounter
    let acc = ((chrTyped - errorCounter) / chrTyped * 100) + "%"
    if(isNaN(acc)){
        acc = "0%";
    }

    useEffect(() => {
        let interval = null;

        if(timerToggle) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10)
            }, 10)
        } else {
            clearInterval(interval)
        }

        return () => clearInterval(interval)
    }, [timerToggle])

    useEffect(() => {
        if (timerReset) {
          setTime(0)
        }
      }, [timerReset])

    useEffect(() => {
        if (timerToggle) {
            
        }
    })
    
    return (
        <div className="data">
            <div className="stats" id="wpm">WPM: {wpm} </div>
            {/* <div className="stats" id="errors">Errors: {errorCounter}</div>
            <div className="stats" id="accuracy">Accuracy: {acc}</div> */}
            <div className="language" id="language">Language: JavaScript</div>
            <div className="timer" id="timer"> 
                <span className="minutes" >{minutes}:</span>
                <span className="seconds" >{seconds}:</span>
                <span className="milliseconds" >{milliseconds}</span>
            </div>
            {/* <div>
                <button onClick={() => {setTime(0); setStart(false);}}>Reset</button>
            </div> */}
        </div>
    )
}

export default Stats;