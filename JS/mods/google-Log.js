import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js"
import { auth } from "./firebase-config.js"

const googleLog = document.querySelector('#googleLog')

googleLog.addEventListener( 'click', async () => {
    const provider = new GoogleAuthProvider()

    try {
        const credenciales = await signInWithPopup(auth, provider)
        console.log(credenciales)
    } catch (error) {
        console.log(error)
    }
})