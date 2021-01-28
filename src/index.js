import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import { spamWordsMiddleware } from './redux/middleware';
import { rootReducer } from './redux/rootReducer';
import createSagaMiddleware from 'redux-saga'
import { sagaWatcher } from './redux/sagas';

const saga = createSagaMiddleware()

const store = createStore(
  rootReducer, 
  compose(
    applyMiddleware(thunk, spamWordsMiddleware, saga),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ))

saga.run(sagaWatcher)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
