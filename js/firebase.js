// Firebase SDK imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// YOUR FIREBASE CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyAG_K4QbSHGxhzoTWyr2AUu5tnF9f0VMl0",
  authDomain: "dsa-visualizer-f3185.firebaseapp.com",
  projectId: "dsa-visualizer-f3185",
  storageBucket: "dsa-visualizer-f3185.firebasestorage.app",
  messagingSenderId: "461958046847",
  appId: "1:461958046847:web:2b4ac9976179916a28cb4a"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

// SIGN UP
window.signUp = function () {

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      document.getElementById("authMessage").innerText =
        "Signup Successful!";
    })
    .catch((error) => {
      document.getElementById("authMessage").innerText =
        error.message;
    });
};

// LOGIN
window.login = function () {

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      document.getElementById("authMessage").innerText =
        "Login Successful!";

      window.location.href = "index.html";
    })
    .catch((error) => {
      document.getElementById("authMessage").innerText =
        error.message;
    }); 
};

import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// CHECK LOGIN STATUS
onAuthStateChanged(auth, (user) => {

  if (user) {

    let userBox = document.getElementById("userEmail");

    if (userBox) {
      userBox.innerText =
        "👤 " + user.email;
    }

  } else {

    // Redirect if not logged in
    if (!window.location.pathname.includes("login.html")) {
      window.location.href = "login.html";
    }
  }
});

// LOGOUT
window.logout = function () {

  signOut(auth)
    .then(() => {
      window.location.href = "login.html";
    });
};