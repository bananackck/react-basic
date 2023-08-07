import React from 'react';
import ReactDOM from 'react-dom';     //react-dom/client 에서 react-dom으로 내가 변경(버전 이슈?)
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter_03/Library';
import Clock from './chpater_04/Clock';
import CommentList from './chpater_05/CommentList';
import NotificationList from './chapter_06/NotificationList';

ReactDOM.render(
  <React.StrictMode>
    <NotificationList />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
