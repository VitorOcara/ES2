import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyDRMUdDgjPeg3NA-uePbYdqPPs5lptRFK0",
  authDomain: "funsaintluz.firebaseapp.com",
  databaseURL: "https://funsaintluz-default-rtdb.firebaseio.com",
  projectId: "funsaintluz",
  storageBucket: "funsaintluz.appspot.com",
  messagingSenderId: "799342061523",
  appId: "1:799342061523:web:17a3faa76d7aefd92f7126"
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
