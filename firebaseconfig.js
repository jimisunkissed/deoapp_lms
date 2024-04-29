// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASn7-_uwbRKTXNXk4EzJ9WaNVzjJul-oI",
  authDomain: "deoapp-indonesia-staging.firebaseapp.com",
  databaseURL:
    "https://deoapp-indonesia-staging-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "deoapp-indonesia-staging",
  storageBucket: "deoapp-indonesia-staging.appspot.com",
  messagingSenderId: "668514366913",
  appId: "1:668514366913:web:9e763ec42c426ade386b40",
  measurementId: "G-GTT63FV9SF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
