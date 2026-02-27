// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDimjDYoXhEr1yCKcpyDKCwHp08iHkSw9k",
  authDomain: "deeper-tool.firebaseapp.com",
  projectId: "deeper-tool",
  storageBucket: "deeper-tool.firebasestorage.app",
  messagingSenderId: "494556082147",
  appId: "1:494556082147:web:547611cd21032e41dfbad6",
  measurementId: "G-4891ETZBFS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)