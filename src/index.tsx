import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
// import routes from './router/index'
import reportWebVitals from './reportWebVitals';
import Home from './views/home/home';

ReactDOM.render(
  <React.StrictMode>
    <Router history={BrowserRouter}>
      <Route path="/" component={App}>
        <Route path="home" component={Home} />
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
