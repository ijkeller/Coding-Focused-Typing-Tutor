// timer based on React Stopwatch by Ray Alva - https://medium.com/codex/react-stopwatch-10bf9813d0ec

import React, { useState, useEffect } from "react";
// import Timer from './timer'

function Stats(props) {

    const [time, setTime] = useState(0)
    // const [start, setStart] = useState(false)

    const timerToggle = props.userActive
    
    // starttimer passed from typingContainer useState testing if userInput has any input

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


    return (
        <div className="data">
            <div className="stats" id="wpm">WPM: 00</div>
            <div className="stats" id="errors">Errors: 0</div>
            <div className="language" id="language">Language: JavaScript</div>
            <div className="timer" id="timer"> 
                <span className="minutes" >{("0" + Math.floor((time / 60000) % 60)).slice(-1)}:</span> 
                <span className="seconds" >{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                <span className="milliseconds" >{("0" + (time/ 10) % 1000).slice(-2)}</span>
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