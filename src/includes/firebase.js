import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjC27r2I5FXfrlAnt4LbVcBOtVw4lXG4o",
  authDomain: "music-f2f1a.firebaseapp.com",
  projectId: "music-f2f1a",
  storageBucket: "music-f2f1a.appspot.com",
  messagingSenderId: "552257886534",
  appId: "1:552257886534:web:bf370e4f57936a586e2d47",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// creating collectio
const usersCollection = db.collection("users");

export { auth, db, usersCollection };
