import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCpEBLHt8w0sAgbjGY9pEzgmdxYUcEBYqU",
  authDomain: "cc-assignment-ca952.firebaseapp.com",
  projectId: "cc-assignment-ca952",
  storageBucket: "cc-assignment-ca952.appspot.com",
  messagingSenderId: "3547377101",
  appId: "1:3547377101:web:991c418c87d22ce9926884",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
