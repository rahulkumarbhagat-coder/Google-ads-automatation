import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { doc, setDoc } from 'firebase/firestore'
import { db } from "../config/db.js";


const firebaseConfig = {
  apiKey: "AIzaSyBaIox6Q58ddNJ7Dnp-dPHCXA_ltOWLe_M",
  authDomain: "chatbot-8a0a0.firebaseapp.com",
  projectId: "chatbot-8a0a0",
  storageBucket: "chatbot-8a0a0.firebasestorage.app",
  messagingSenderId: "635680802858",
  appId: "1:635680802858:web:5ba132ab67c9fd61935b53",
  measurementId: "G-2GQG9VJ2JP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

//Saving trip data in database
export const saveData = async(message) =>{
  const docId = Date.now().toString()
  await setDoc(doc(db, "Chatbot", docId), {
    AssistantMessage : message,
    id : docId
  });
}