// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg-1h5zr9yNDL1b_sh6ZMajKu0NGGQyes",
  authDomain: "dragon-news-auth-dda05.firebaseapp.com",
  projectId: "dragon-news-auth-dda05",
  storageBucket: "dragon-news-auth-dda05.firebasestorage.app",
  messagingSenderId: "86572570806",
  appId: "1:86572570806:web:da529a33e0fa009b1a2e17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;