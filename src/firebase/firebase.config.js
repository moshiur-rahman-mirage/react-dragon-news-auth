// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiKWTDaGKbeRzfNePxA5nD9iwq8qNGRuo",
  // apiKey:import.meta.env.API_KEY,
  authDomain: "newspaper-fff6b.firebaseapp.com",
  projectId: "newspaper-fff6b",
  storageBucket: "newspaper-fff6b.appspot.com",
  messagingSenderId: "187594316896",
  appId: "1:187594316896:web:20b963274de4f134f2f705"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;