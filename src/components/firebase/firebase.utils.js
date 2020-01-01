import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzl001BVMb1j-iBS8PJERLPuGyv3WZ1xY",
  authDomain: "my-e-commerce-app-a768f.firebaseapp.com",
  databaseURL: "https://my-e-commerce-app-a768f.firebaseio.com",
  projectId: "my-e-commerce-app-a768f",
  storageBucket: "my-e-commerce-app-a768f.appspot.com",
  messagingSenderId: "72180781994",
  appId: "1:72180781994:web:56afb0ed584ff6b0ad11d3",
  measurementId: "G-YKNJ4GN4PN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
