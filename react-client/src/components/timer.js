import React from 'react';


function startTimer() {
    timerElement.innerText = 0.0
    startTime = new Date()
    setInterval(() => {
        timer.innerText = getTimerTime()
    }, 1000)
}

function getTimerTime() {
    return Math.floor((new Date() - startTime) / 1000)
}

function Timer() {
    return (
        <div className="timer" id="timer">0.00</div>
    )
}


export default Timer;



