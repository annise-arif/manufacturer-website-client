// Import the functions you need from the SDKs you needA
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgXXaiLPAyA1KfRPlLrLIwjvasth-5fno",
  authDomain: "digital-hammer-drill-station.firebaseapp.com",
  projectId: "digital-hammer-drill-station",
  storageBucket: "digital-hammer-drill-station.appspot.com",
  messagingSenderId: "369578330622",
  appId: "1:369578330622:web:e09b0558c15b0e10fc58af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;