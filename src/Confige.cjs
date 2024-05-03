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
