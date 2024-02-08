// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK8UdEyuoIEcardrySfaxY4SQtemOBKtk",
  authDomain: "react-note-96850.firebaseapp.com",
  projectId: "react-note-96850",
  storageBucket: "react-note-96850.appspot.com",
  messagingSenderId: "297864480835",
  appId: "1:297864480835:web:4a6f7d0322106b93bbacf6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")