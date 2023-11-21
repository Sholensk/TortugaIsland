import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js"
import { auth } from "./firebase-config.js"

const registro = document.querySelector('#registro')

registro.addEventListener('submit', async (e) => {
    e.preventDefault()

   
   const email = registro['registro-email'].value
   const password = registro['registro-password'].value

   console.log(email, password)
   
   try {
    const idUsuario = await createUserWithEmailAndPassword(auth, email, password)
    console.log(idUsuario) 
   } catch (error) {
    console.log(error.message)
    console.log(error.code)

    if (error.code === 'auth/email-already-in-use'){
        alert('Correo registrado')
    }
    else if(error.code === 'auth/invalid-email'){
        alert('Correo no valido')
    }
    else if(error.code === 'auth/weak-password'){
        alert('Contraseña debil')
    }
    else if(error.code){
        alert('¡Algo salio mal!')
    }

   }

})