// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcpzciKkzpdDL1cNDjq2pVIHFWnNUKGL0",
  authDomain: "chat-app-pedro-a24f5.firebaseapp.com",
  projectId: "chat-app-pedro-a24f5",
  storageBucket: "chat-app-pedro-a24f5.appspot.com",
  messagingSenderId: "248377975968",
  appId: "1:248377975968:web:c434824c2a5909290495c5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
