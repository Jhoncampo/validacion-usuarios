// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCdDNywtmI5mdDn7IwqF5PNsJs5ZSM6wrM",
    authDomain: "udemy-react-2023-da892.firebaseapp.com",
    projectId: "udemy-react-2023-da892",
    storageBucket: "udemy-react-2023-da892.appspot.com",
    messagingSenderId: "1037621938173",
    appId: "1:1037621938173:web:73341ada4186b1bfdefb94",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const login = ({email, password}) =>{
    return signInWithEmailAndPassword(auth, email, password)
}

export const register = ({email, password})=>{
    return createUserWithEmailAndPassword(auth, email, password)
}

export const logout = ()=>{
    return signOut(auth)
}