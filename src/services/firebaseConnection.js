import { getFirestore } from 'firebase/firestore'
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBk2qvOBqejSd9t8aBWfuVtVbvPmPPJnf4",
  authDomain: "meuslinks-ac4d7.firebaseapp.com",
  projectId: "meuslinks-ac4d7",
  storageBucket: "meuslinks-ac4d7.appspot.com",
  messagingSenderId: "2608937198",
  appId: "1:2608937198:web:b1d94208f85781d26f9bff",
  measurementId: "G-XW9W9YWBS8"
};

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export { db, auth };
