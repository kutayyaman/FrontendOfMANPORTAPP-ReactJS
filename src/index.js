import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './bootstrap-override.scss'
import './i18n';
import App from './container/App'
//import AuthenticationContext from './shared/AuthenticationContext';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
