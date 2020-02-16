import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyANIIf3_9F9jnOjvS-jAX-gAWLNm0ePd6E",
  authDomain: "crown-db-efc6f.firebaseapp.com",
  databaseURL: "https://crown-db-efc6f.firebaseio.com",
  projectId: "crown-db-efc6f",
  storageBucket: "crown-db-efc6f.appspot.com",
  messagingSenderId: "606135218168",
  appId: "1:606135218168:web:da173a89ccb30bc29cf00d",
  measurementId: "G-E7558ZW453"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
