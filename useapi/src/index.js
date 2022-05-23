import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//StrictMode removed because ALL API calls were running twice.
//https://javascript.tutorialink.com/api-called-twice-while-useeffect-triggered-once-reactjs-javascript/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

