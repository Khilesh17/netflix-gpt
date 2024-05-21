// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJsUk3ieq_awxHJi-OrRz0BAczJVrKaUw",
  authDomain: "netflix-gpt-80c1b.firebaseapp.com",
  projectId: "netflix-gpt-80c1b",
  storageBucket: "netflix-gpt-80c1b.appspot.com",
  messagingSenderId: "994068887370",
  appId: "1:994068887370:web:e0c2319a08ee03355e33b3",
  measurementId: "G-SV55RG97WB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();