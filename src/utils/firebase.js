// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-1ce9f.firebaseapp.com",
  projectId: "blog-1ce9f",
  storageBucket: "blog-1ce9f.appspot.com",
  messagingSenderId: "988582561065",
  appId: "1:988582561065:web:fa38d2d00071ffa805e338",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
