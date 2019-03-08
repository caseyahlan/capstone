import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase/app';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCHgIzE13SFnPENyEsVi8ZxLjuFzVjVxWI",
    authDomain: "foodfluence.firebaseapp.com",
    databaseURL: "https://foodfluence.firebaseio.com",
    projectId: "foodfluence",
    storageBucket: "foodfluence.appspot.com",
    messagingSenderId: "345768678571"
};
firebase.initializeApp(config);

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
