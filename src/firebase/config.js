
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWy2CXraJLPzJsPJM06BNpF9tJRSypyy0",
  authDomain: "miniblog-82560.firebaseapp.com",
  projectId: "miniblog-82560",
  storageBucket: "miniblog-82560.appspot.com",
  messagingSenderId: "183212800420",
  appId: "1:183212800420:web:fa7715e71d5187bdf12931"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db };