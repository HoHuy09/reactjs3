import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBYqbmh1Rjyf7ZZnpPpzs7GSY1lrfiyjGs",
    authDomain: "web16201-frontend.firebaseapp.com",
    projectId: "web16201-frontend",
    storageBucket: "web16201-frontend.appspot.com",
    messagingSenderId: "1008391536569",
    appId: "1:1008391536569:web:94a49ec43b7ea14bd04068"
  };
// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();

