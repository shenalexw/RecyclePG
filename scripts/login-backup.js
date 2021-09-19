// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-analytics.js";
import { getAuth,
         createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
        onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";

import firebaseConfig from "./config.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCOczojAYxMjj7HwhBasYdxmdtjOAD4Kd4",
//   authDomain: "recyclepg-bdd22.firebaseapp.com",
//   projectId: "recyclepg-bdd22",
//   databaseURL: "https://recyclepg-bdd22-default-rtdb.firebaseio.com",
//   storageBucket: "recyclepg-bdd22.appspot.com",
//   messagingSenderId: "75075945170",
//   appId: "1:75075945170:web:a1138b7a94b591de12a30b",
//   measurementId: "G-Z8M6V7DDPX"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();

// in the document, find the signup form
const signupForm = document.querySelector('.signup-form');
// when the submit button has been hit, perform the following steps
signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // get user info
    const signupEmail = signupForm['signup-email'].value;
    const signupUsername = signupForm['signup-username'].value;
    const signupPassword = signupForm['signup-password'].value;

    // save signed up user to authentication database in firebase
    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
    // if successful, display user on the console
    .then((cred) => {
        console.log(cred.user);
    })
    // otherwise throw an error
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
})

// check for authentication status
onAuthStateChanged(auth, (user) => {
    // console.log(user);

    // if the user has logged in, do something here
    if (user) {
        console.log('User logged in: ', user.email);
        const hideLogout = document.getElementById('.login-submit');
        // TODO: Fix this to hide logout in navbar once useer is logged in
        // hideLogout.addEventListener('click', (event)=>{
        //     hideLogout
        // })

    // otherwise, display on the console that no user has not logged in
    } else {
        console.log('No user logged in');
    }
})

// log user out if logout button has been hit
const logout = document.querySelector('#logout');
logout.addEventListener('click', (event) => {
    event.preventDefault();
    signOut(auth);
})

// login
const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    // get login information
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    signInWithEmailAndPassword(auth, email, password)
    .then((cred) => {
        console.log(cred.user);
    })
    .catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Login Failed");
    });
});

export default firebaseConfig;