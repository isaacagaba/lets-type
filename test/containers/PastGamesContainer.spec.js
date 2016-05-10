'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { PastGameContainer } from '../../js/containers/PastGamesContainer';

describe('PastGames', () => {

    var buildSpeedTyper = ((pastGames) => {
        let renderer = TestUtils.createRenderer();
        renderer.render(
            <PastGameContainer pastGames={pastGames} />
        );
        return renderer.getRenderOutput();
    });

    it('renders the PastGamesContainer container', () => {
        const pastGames = [{
            words: ["a", "b"],
            pastInput: ["a", "c"],
            startTime: 0,
            endTime: 60
        }]
        let pastGameContainers = buildSpeedTyper(pastGames);

        let pastGame = pastGameContainers.props.children[0]
        
        expect(pastGame.key).to.eq('0');
        expect(pastGame.props.accuracy).to.eq('50');
        expect(pastGame.props.wordsPerMinute).to.eq('2.00');
        expect(pastGame.props.timeElapsed).to.eq('60');
    });
});
