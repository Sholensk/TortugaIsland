import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBMd2gLle-fnYDlBkw3qagrkGHfrCvujec",
    authDomain: "tortuga-island-afe8f.firebaseapp.com",
    projectId: "tortuga-island-afe8f",
    storageBucket: "tortuga-island-afe8f.appspot.com",
    messagingSenderId: "554206526935",
    appId: "1:554206526935:web:e7e789e490159ff6a3df92",
    measurementId: "G-86Q8CS1ZNV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app)

//export const database = getDatabase(app);