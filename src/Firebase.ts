// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwf8mCigzardwYUBHlE8MnId55lVwkCeM",
  authDomain: "flappy-cats.firebaseapp.com",
  projectId: "flappy-cats",
  storageBucket: "flappy-cats.appspot.com",
  messagingSenderId: "355001642536",
  appId: "1:355001642536:web:b9e7c3b09383f415c94f1d",
  measurementId: "G-T3TFYTGN4M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export default app;
