// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBY3EwOeAX4MWxAsvvAGs24KcjaGUfw5G0",
  authDomain: "login-page-b1d91.firebaseapp.com",
  projectId: "login-page-b1d91",
  storageBucket: "login-page-b1d91.appspot.com",
  messagingSenderId: "244080698993",
  appId: "1:244080698993:web:7b8c0d9fc7367a08d85dd0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
export { app, auth };
