// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm1427eK2Ele2iVaV9SeynXwYimBAkz4A",
  authDomain: "stay-track-1230b.firebaseapp.com",
  projectId: "stay-track-1230b",
  storageBucket: "stay-track-1230b.firebasestorage.app",
  messagingSenderId: "728096108550",
  appId: "1:728096108550:web:0a00a1e2deb94688709387"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth