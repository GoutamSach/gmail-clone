import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1mLjMu-GrCkgFhnvXWjARByFRXymWzXM",
  authDomain: "clone-5500d.firebaseapp.com",
  projectId: "clone-5500d",
  storageBucket: "clone-5500d.appspot.com",
  messagingSenderId: "657391766492",
  appId: "1:657391766492:web:e6a6312e21d07377f5dd19",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, db, auth, provider };
