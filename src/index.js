import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import chunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducers from "./reducers/index";

const logger = createLogger();

const store = createStore(reducers, applyMiddleware(chunk, logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
