import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';                     //load CSS for the whole app
import App from './App';

//This is the REACT 18 method for setting up the app. It has changed from
//recent past.

//Literally, we are rendering our App to the <div> named "root"

//StrictMode removed because ALL API calls were running twice.
//https://javascript.tutorialink.com/api-called-twice-while-useeffect-triggered-once-reactjs-javascript/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

