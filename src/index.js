import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'app1', // app name registered
    entry: '//localhost:3001',
    container: '#app1',
    activeRule: '/app1',
    props: {
      nickname: "qdleader"
    }
  },
  {
    name: 'app2',
    // entry: { scripts: ['//localhost:7100/main.js'] },
    entry: '//localhost:3002',
    container: '#app2',
    activeRule: '/app2',
  },
]);

start();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
