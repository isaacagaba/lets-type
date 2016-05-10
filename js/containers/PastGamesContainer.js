import React from "react";
import PastGameStats from "../components/PastGameStats";
import { connect } from 'react-redux'
import {
    calculateAccuracy,
    calculateWordsPerMinute,
    calculateTimeElapsed
} from '../reducers';

export const PastGameContainer = React.createClass({
    buildPastStatsContainers: function() {
        return this.props.pastGames.map((game, index) => {
            const accuracy = calculateAccuracy(game);
            const wordsPerMinute = calculateWordsPerMinute(game, game.endTime);
            const timeElapsed = calculateTimeElapsed(game.startTime, game.endTime);
            return <PastGameStats
                key={index}
                accuracy={accuracy}
                wordsPerMinute={wordsPerMinute}
                timeElapsed={timeElapsed}
            />
        })
    },

    render: function() {
        return (
            <div>
                { this.buildPastStatsContainers() }
            </div>
        );
    }
});

const mapStateToProps = (state) => {
    return {
        pastGames: state.pastGames
    }
};

export default connect(mapStateToProps)(PastGameContainer);
