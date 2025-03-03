import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "Your_Key",
  authDomain: "book-list-with-firebase-a39a8.firebaseapp.com",
  projectId: "book-list-with-firebase-a39a8",
  storageBucket: "book-list-with-firebase-a39a8.firebasestorage.app",
  messagingSenderId: "461690901612",
  appId: "1:461690901612:web:b54dabca79690f012bf449"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);