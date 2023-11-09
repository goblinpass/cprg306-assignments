// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoqnQUNfp3KlOCoVuW8Y8qCyR38_vliF8",
  authDomain: "cprg306-assignments-c7ead.firebaseapp.com",
  projectId: "cprg306-assignments-c7ead",
  storageBucket: "cprg306-assignments-c7ead.appspot.com",
  messagingSenderId: "652292916906",
  appId: "1:652292916906:web:64cda0941374a2a624f2d3",
  measurementId: "G-747F9BPZ7V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);