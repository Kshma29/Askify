// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJ89LEYfOZkL087R89vAnNoQ4gfmWhDPo",
  authDomain: "qnaism.firebaseapp.com",
  projectId: "qnaism",
  storageBucket: "qnaism.appspot.com",
  messagingSenderId: "744202449322",
  appId: "1:744202449322:web:58568410da1b99b58a7bd3",
  measurementId: "G-R9LB76BGGH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };