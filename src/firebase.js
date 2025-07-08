// // src/firebase.js
// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
//   projectId: "YOUR_PROJECT_ID",
//   appId: "YOUR_APP_ID",
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

// export { auth, provider };





// src/firebase.js

// Import Firebase modules from CDN (ONLY works in modern browsers or bundlers with support)
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB5ZaJIE691ZamDX7I8_ymqgIH-cp54Ccw",
  authDomain: "music-d9a84.firebaseapp.com",
  projectId: "music-d9a84",
  storageBucket: "music-d9a84.firebasestorage.app",
  messagingSenderId: "800133551909",
  appId: "1:800133551909:web:c367898ec7b485d9c9eccc",
  measurementId: "G-KFTV1S0BZ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
