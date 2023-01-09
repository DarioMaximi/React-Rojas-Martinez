import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdNKNUP8U6xZWWonKKE72zQDqzptylH3o",
  authDomain: "react-rojas-app.firebaseapp.com",
  projectId: "react-rojas-app",
  storageBucket: "react-rojas-app.appspot.com",
  messagingSenderId: "959153947720",
  appId: "1:959153947720:web:1e5842cf6d98aaa260047d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
