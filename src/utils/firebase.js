// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAySahzkjkQAfAfiNZzACpo7otn0_cl5w4",
  authDomain: "react-netflix-gpt.firebaseapp.com",
  projectId: "react-netflix-gpt",
  storageBucket: "react-netflix-gpt.appspot.com",
  messagingSenderId: "99200240885",
  appId: "1:99200240885:web:8affbe6ac5d239249b09bc",
  measurementId: "G-65KEGFEKQ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();