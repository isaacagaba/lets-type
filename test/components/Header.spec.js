'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Header from '../../js/components/Header'
describe('Header', () => {

    var buildSpeedTyper = (() => {
        let renderer = TestUtils.createRenderer();
        renderer.render(
            <Header />
        );
        return renderer.getRenderOutput();
    });

    it('renders the Header', () => {
        let appwrapper = buildSpeedTyper();

        let speedTyper = appwrapper.props.className
        expect(speedTyper).to.eq('HeaderDiv');


    });
});
