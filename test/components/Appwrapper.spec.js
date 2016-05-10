'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import GlobalKeys from '../../js/containers/GlobalKeys'
import AppWrapper from '../../js/components/AppWrapper'
import Header from '../../js/components/Header'


describe('AppWrapper', () => {

    var buildSpeedTyper = (() => {
        let renderer = TestUtils.createRenderer();
        renderer.render(
            <AppWrapper />
        );
        return renderer.getRenderOutput();
    });

    it('renders the AppWrapper', () => {
        let appwrapper = buildSpeedTyper();

        let speedTyper = appwrapper.props.children[0]
        expect(speedTyper.type).to.eq('h1');

        let header = appwrapper.props.children[1]
        expect(header.type).to.eq(Header);
        let globalKeys = appwrapper.props.children[2]
        expect(globalKeys.type).to.eq(GlobalKeys);
          });
});
