import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
 
const firebaseConfig = {
    apiKey: "AIzaSyBTeaoZPZRgWkcb-UOFTo1LjsUSne3D7jQ",
    authDomain: "onlineshopapp-fc033.firebaseapp.com",
    projectId: "onlineshopapp-fc033",
    storageBucket: "onlineshopapp-fc033.appspot.com",
    messagingSenderId: "214344223033",
    appId: "1:214344223033:web:9eafddb00fa4f212fe40e8"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app);

export { db, auth, createUserWithEmailAndPassword };
