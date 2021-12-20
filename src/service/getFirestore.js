import firebase from "firebase/app";
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyD5d39wP1q2O5uF_GULIxIIdRejhE6etnI",
    authDomain: "e-commerce-valdivia.firebaseapp.com",
    projectId: "e-commerce-valdivia",
    storageBucket: "e-commerce-valdivia.appspot.com",
    messagingSenderId: "495325116384",
    appId: "1:495325116384:web:4cbcf45486a0febd221d85"
};

const app = firebase.initializeApp(firebaseConfig);

// agregando funciones

export function getFirestore () {
    return firebase.firestore(app)
}