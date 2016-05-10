import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import speedTyperReducer from './reducers';
import websocketPublisher from './middlewares/WebsocketPublisher'
import { sendWebsocketMessage, websocketConnectionRequested } from './actions/Websocket'
import actionsPerMinuteLogger from './middlewares/ActionsPerMinuteLogger'
import createRoutes from '../Routes'
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import { routerMiddleware } from 'react-router-redux'
import R from 'ramda'

const finalCreateStore = R.compose(
    applyMiddleware(
        thunk,websocketPublisher(sendWebsocketMessage),
        actionsPerMinuteLogger(console),
        routerMiddleware(browserHistory)
    ),
    window.devToolsExtension ? window.devToolsExtension() : R.identity
)(createStore)

let store = finalCreateStore(speedTyperReducer)

const history = syncHistoryWithStore(browserHistory, store)

let Routes = createRoutes(history)

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('content')
);

store.dispatch(websocketConnectionRequested())
