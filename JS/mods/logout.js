import { signOut } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js"
import { auth } from "./firebase-config.js"

const logout = document.querySelector('#logout')

logout.addEventListener('click', async () => {
    await signOut(auth)
    console.log("sesion cerrada")
})