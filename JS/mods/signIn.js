import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js"
import { auth } from "./firebase-config.js"

const signIn = document.querySelector('#login-form')

signIn.addEventListener('submit', async e => {
    e.preventDefault()

    const email = signIn['login-email'].value;
    const password = signIn['login-pass'].value;

    try {
        const credenciales = await signInWithEmailAndPassword(auth, email, password)
        console.log(credenciales)
    } catch (error) {
        console.log(error)
        console.log(error.message)
        console.log(error.code)
    
        if (error.code === 'auth/wrong-password'){
            alert('Contraseña incorrecta')
        }
        else if(error.code === 'auth/user-not-found'){
            alert('No se encontro usuario')
        }
        else if(error.code){
            alert('¡Algo salio mal!')
        }
    }

})