import { getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAHV3FhBxIneWfAngm_o_wSH_svO7miRfk",
  authDomain: "dbm-113-2.firebaseapp.com",
  projectId: "dbm-113-2",
  storageBucket: "dbm-113-2.firebasestorage.app",
  messagingSenderId: "501918951192",
  appId: "1:501918951192:web:87335e641c2454fcefe06d",
  measurementId: "G-BYC1XX9B8S"
};

const app_length = getApps().length > 0;

// Initialize Firebase
const app = app_length ? getApp() : initializeApp(firebaseConfig);

// REFERENCE DB
const db = getFirestore(app);

// REFERENCE AUTH
const auth = getAuth(app);

export { db, auth };