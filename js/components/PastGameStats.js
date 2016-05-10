import React from "react";

const PastGameStats = (props) => {


    return (
        <div className="StatsContainer">
            <div className="StatDiv">Word per minute: </div>
            <div className="StatDiv">{props.wordsPerMinute}</div>
            <div className="StatDiv">Accuracy: </div>
            <div className="StatDiv">{props.accuracy}%</div>
            <div className="StatDiv">Time elapsed: </div>
            <div className="StatDiv">{props.timeElapsed} seconds</div>


        </div>
    );
};
PastGameStats.propTypes = {
    wordsPerMinute: React.PropTypes.string.isRequired,
    accuracy: React.PropTypes.string.isRequired,
    timeElapsed: React.PropTypes.string.isRequired

}

export { PastGameStats as default }
