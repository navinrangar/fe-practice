// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCk-c0ffJJccpEaM9rOKhPIdDX2zp3BZw8",
  authDomain: "fe-practice-proj.firebaseapp.com",
  projectId: "fe-practice-proj",
  storageBucket: "fe-practice-proj.appspot.com",
  messagingSenderId: "234898827829",
  appId: "1:234898827829:web:8a223c344e66b3dc5edf7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;