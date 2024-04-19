// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKE5-KhwWKnjzbmdSR3PgVXRI6IWj9k_I",
  authDomain: "kulturabackend.firebaseapp.com",
  projectId: "kulturabackend",
  storageBucket: "kulturabackend.appspot.com",
  messagingSenderId: "574801949497",
  appId: "1:574801949497:web:8eef38f0105f30daeb6ee8",
  measurementId: "G-24HFWM2LQD"
};
const firebase= require('firebase');
firebase.initializeApp(firebaseConfig);
const db= firebase.firestore();
const User = db.collection("Users");
module.exports = User;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);