import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDr71l19PGopmRwAHk8593b40QX4HCAGEo",
    authDomain: "e-clone-704a6.firebaseapp.com",
    databaseURL: "https://e-clone-704a6.firebaseio.com",
    projectId: "e-clone-704a6",
    storageBucket: "e-clone-704a6.appspot.com",
    messagingSenderId: "352425111895",
    appId: "1:352425111895:web:44b7b3a43b6722e6870e12",
    measurementId: "G-1FEEVH4KL9"
});

const auth = firebase.auth();

export { auth };