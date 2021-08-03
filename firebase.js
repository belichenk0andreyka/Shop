import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBUGRh67C5wdW2ssZhnHxOHsAQxMnfbX0Q",
    authDomain: "shop1-bf59a.firebaseapp.com",
    projectId: "shop1-bf59a",
    storageBucket: "shop1-bf59a.appspot.com",
    messagingSenderId: "878272169334",
    appId: "1:878272169334:web:62c553b967c386e6932657"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
