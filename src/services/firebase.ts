import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCVAH_khxNnDY4iKH5HJCaF38_ORtVE-8k",
  authDomain: "mdev1005-assignment3-360bd.firebaseapp.com",
  projectId: "mdev1005-assignment3-360bd",
  storageBucket: "mdev1005-assignment3-360bd.appspot.com",
  messagingSenderId: "789698053155",
  appId: "1:789698053155:web:7678492bb2599b658e9d96",
  measurementId: "G-PXK20EPQFZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const store = getFirestore(app);
