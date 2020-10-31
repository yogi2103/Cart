import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD6tUczPowEMETskNZvannlyvF7hoTegls",
  authDomain: "cart-30e0a.firebaseapp.com",
  databaseURL: "https://cart-30e0a.firebaseio.com",
  projectId: "cart-30e0a",
  storageBucket: "cart-30e0a.appspot.com",
  messagingSenderId: "66299665042",
  appId: "1:66299665042:web:df8d85fa7da9a93d2ce44b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
