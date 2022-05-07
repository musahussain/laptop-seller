// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPqPId4yPNOx6CRAYmWmumIewaTaGcWhg",
  authDomain: "warehouse-887f5.firebaseapp.com",
  projectId: "warehouse-887f5",
  storageBucket: "warehouse-887f5.appspot.com",
  messagingSenderId: "97607514613",
  appId: "1:97607514613:web:1c3018d7a2bd554eff08bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




const auth = getAuth(app);

export default auth;