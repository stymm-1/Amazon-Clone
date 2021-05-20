// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCIET4JaBPQlAhneaqdBqZ4jwYZ3oRcrb0",
  authDomain: "clone-b401d.firebaseapp.com",
  projectId: "clone-b401d",
  storageBucket: "clone-b401d.appspot.com",
  messagingSenderId: "327053080800",
  appId: "1:327053080800:web:4225038bed7ce0f1d2b885",
  measurementId: "G-RKPWKCZBS1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth =firebase.auth();

export { db, auth};