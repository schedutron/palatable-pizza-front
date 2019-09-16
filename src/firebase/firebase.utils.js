import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAqrMBxbK-1ByBNoJhi-G1KLdLo0bpZAQY",
  authDomain: "palatable-pizza.firebaseapp.com",
  databaseURL: "https://palatable-pizza.firebaseio.com",
  projectId: "palatable-pizza",
  storageBucket: "",
  messagingSenderId: "1003833334107",
  appId: "1:1003833334107:web:ecbff291730fe8755f627e"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
