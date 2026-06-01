import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
const firebaseConfig = {
  apiKey: "AIzaSyAYUnUIcBqD_XSpZWmRKyj2RHKeepRUat4",
  authDomain: "nextmerce-6efdf.firebaseapp.com",
  projectId: "nextmerce-6efdf",
  storageBucket: "nextmerce-6efdf.firebasestorage.app",
  messagingSenderId: "34227910655",
  appId: "1:34227910655:web:f18a3eaaa10aa71c6759ca",
  measurementId: "G-7N60JV5T1X",
  databaseURL:"https://nextmerce-6efdf-default-rtdb.firebaseio.com",
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);