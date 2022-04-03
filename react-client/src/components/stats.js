// timer based on React Stopwatch by Ray Alva - https://medium.com/codex/react-stopwatch-10bf9813d0ec

import React, { useState, useEffect } from "react";
// import Timer from './timer'

function Stats(props) {

    const [time, setTime] = useState(0)

    const timerToggle = props.userActive
    const timerReset = props.reset

    const minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-1)
    const seconds = ("0" + Math.floor((time / 1000) % 60)).slice(-2)
    const milliseconds = ("0" + (time/ 10) % 1000).slice(-2)
    
    const chrTyped = props.chrTyped
    const wordsPerMinute = ((chrTyped / 5) / minutes)
    const errors = props.errorCounter
    const acc = ((chrTyped - errors) / chrTyped * 100)

    const wpm = (() => (wordsPerMinute == NaN || wordsPerMinute == Infinity) ? 0 : wordsPerMinute )

    console.log('stats chrTyped: ' + chrTyped)
    console.log("chrTyped type: " + typeof chrTyped)
    console.log('stats wordsPerMinute: ' + wordsPerMinute)
    console.log("wordsPerMinute type: " + typeof wordsPerMinute)
    console.log('stats wpm: ' + wpm)
    console.log("wpm type: " + typeof wpm)
    console.log('stats errors: ' + errors)
    console.log("errors type: " + typeof errors)
    console.log('stats acc: ' + acc)
    console.log("acc type: " + typeof acc)
    console.log('-----------------')
    
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

      
    

    return (
        <div className="data">
            <div className="stats" id="wpm">WPM: {wpm} </div>
            <div className="stats" id="errors">Errors: {errors}</div>
            <div className="stats" id="accuracy">Accuracy: {acc}%</div>
            <div className="language" id="language">Language: JavaScript</div>
            <div className="timer" id="timer"> 
                <span className="minutes" >{minutes}:</span> 
                <span className="seconds" >{seconds}:</span>
                <span className="milliseconds" >{milliseconds}</span>
            </div>
            {/* <div>
                <button onClick={() => setStart(true)}>Start</button>
                <button onClick={() => setStart(false)}>Stop</button>
                <button onClick={() => {setTime(0); setStart(false);}}>Reset</button>
            </div> */}
        </div>
    )
}
export default Stats;