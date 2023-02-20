import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import ticketsReducer from './store/tickets/reducers';

import reportWebVitals from './reportWebVitals';


const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
const store = createStore(ticketsReducer, composedEnhancer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
