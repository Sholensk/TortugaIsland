import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDCDzxOsclXxoygFhR55aXiCJMCkqWvx2s",
  authDomain: "tortuga-island2.firebaseapp.com",
  databaseURL: "https://tortuga-island2-default-rtdb.firebaseio.com",
  projectId: "tortuga-island2",
  storageBucket: "tortuga-island2.appspot.com",
  messagingSenderId: "406756141279",
  appId: "1:406756141279:web:c13acd369d659a32ef216a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app)

//export const database = getDatabase(app);