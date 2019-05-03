import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import * as serviceWorker from './serviceWorker';


import reducers from './store/reducers';

import createSagaMiddleware from 'redux-saga';
import sagas from './store/sagas';
import './Assets/stylus/manager.css'


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sagas);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);


serviceWorker.unregister();
