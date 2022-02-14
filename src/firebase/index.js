// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBopDsw865qgy0hyMmmmML7So1-ppoltMQ",
  authDomain: "coderhouse-ecommerse.firebaseapp.com",
  projectId: "coderhouse-ecommerse",
  storageBucket: "coderhouse-ecommerse.appspot.com",
  messagingSenderId: "871030780242",
  appId: "1:871030780242:web:c859fcada2bc5de47f4a8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFireStore(app);