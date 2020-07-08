import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAuJ9WbUcB6Ix4q_9ANcFItGhuquEoVQ5k",
  authDomain: "circulant-db-f337a.firebaseapp.com",
  databaseURL: "https://circulant-db-f337a.firebaseio.com",
  projectId: "circulant-db-f337a",
  storageBucket: "circulant-db-f337a.appspot.com",
  messagingSenderId: "659121358773",
  appId: "1:659121358773:web:e3eeb1c0dd751791367bfc",
  measurementId: "G-8LW3EK046L",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

