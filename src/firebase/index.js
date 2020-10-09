import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBCjtArY8kMad_oSuWLU5iUNhVo0vBOmYE",
    authDomain: "chillko-store.firebaseapp.com",
    databaseURL: "https://chillko-store.firebaseio.com",
    projectId: "chillko-store",
    storageBucket: "chillko-store.appspot.com",
    messagingSenderId: "896541213557",
    appId: "1:896541213557:web:da06802c0c29dcd43ec93c"
  });

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}