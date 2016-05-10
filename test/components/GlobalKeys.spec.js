'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import GlobalKeys  from '../../js/components/GlobalKeys'
import KeyPressListener from '../../js/components/KeyPressListener'
describe('Globalkey', () => {

    var buildGlobalKey = (() => {
        let renderer = TestUtils.createRenderer();
        renderer.render(
            <GlobalKeys />
        );
        return renderer.getRenderOutput();
    });

    it('renders the GlobalKeys', () => {
        let globalkey = buildGlobalKey();

        let div = globalkey.props.children[0]
        expect(div.type).to.eq('div');

        let keyPressListener = globalkey.props.children[1]
        expect(keyPressListener.type).to.eq(KeyPressListener);
        
    });
});
