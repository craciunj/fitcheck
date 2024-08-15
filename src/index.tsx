import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const firebaseConfig = {
  apiKey: "AIzaSyB7AOXZlXqF--E4dgZVa8KHvkLCm8mMiCo",
  authDomain: "fitcheck-f3ed8.firebaseapp.com",
  projectId: "fitcheck-f3ed8",
  storageBucket: "fitcheck-f3ed8.appspot.com",
  messagingSenderId: "418094359923",
  appId: "1:418094359923:web:4a3a49c1c015f707c5d106"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);