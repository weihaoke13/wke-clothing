import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyCFybNhj5oNWEycH7I6SE6X8HKs_efkTBM",
    authDomain: "wke-clothing.firebaseapp.com",
    projectId: "wke-clothing",
    storageBucket: "wke-clothing.appspot.com",
    messagingSenderId: "22580479809",
    appId: "1:22580479809:web:257229edc0e069f2d1c3c0",
    measurementId: "G-BR0KPYBFVS"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;