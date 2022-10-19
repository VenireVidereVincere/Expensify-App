import { initializeApp } from 'firebase/app'
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyD76WknQtsHEkiM7EQ35ljG41TQ8cm5ADs",
    authDomain: "expensify-f7acf.firebaseapp.com",
    databaseURL: "https://expensify-f7acf-default-rtdb.firebaseio.com",
    projectId: "expensify-f7acf",
    storageBucket: "expensify-f7acf.appspot.com",
    messagingSenderId: "152088310772",
    appId: "1:152088310772:web:dedb7d7fc12d29018cbfa1",
    measurementId: "G-92R4T7H7B1"
  };

  const app = initializeApp(firebaseConfig)
  const firebaseDb = getDatabase(app)
  
  export {firebaseDb}