import {
    getAuth,
    onAuthStateChanged,
    SignOut,
    signInWithPopup,
    GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js"

export function authGoogle(app) {
    const d = document,
    auth = getAuth(app),
    provider = new GoogleAuthProvider(),
    $appAuthGoogle = d.getElementById("app-auth-google");
}