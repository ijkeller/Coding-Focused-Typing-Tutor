import React from "react";
import Timer from './timer'

function Stats() {


    return (
        <div className="data">
            <div className="stats" id="wpm">WPM: 00</div>
            <div className="stats" id="errors">Errors: 0</div>
            <div className="language" id="language">Language: JavaScript</div>
            <Timer />
        </div>
    )
}
export default Stats;