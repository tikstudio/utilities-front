import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './assets/styles/css/modules/animations-extended.css';
import './assets/styles/css/bootstrap.css';
import './assets/styles/css/mdb.css';
import './assets/styles/css/mdb.lite.css';
import './assets/styles/css/style.css';
import './assets/styles/img/overlays/01.png'

import './assets/styles/style.scss';

import reducers from './store/reducers';

import sagas from './store/sagas';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(sagas);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);


serviceWorker.unregister();
