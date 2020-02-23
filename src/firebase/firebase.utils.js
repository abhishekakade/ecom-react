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

// takes the user auth object we got from authentication and store it in database

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // firestore returns 2 types of objects - references & snapshots.
  // They can be either Document or Collection.
  // firestore will always return these objects even if nothing exists at the query endpoint.

  // We use DocumentReference object to perform CRUD operations - set(), get(), update(), delete()

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  console.log("snapshot", snapShot);
  // exists property from this snapshot console log will tell whether any data exists on requested query

  // so if snapshot doesnt exist, this will create new user and set data on that date
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error creating user: ", error.message);
    }
  }

  // return userRef so we can use it to do more if needed
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
