import { app } from "./mods/firebase-config.js"

import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js"
import { auth } from "./mods/firebase-config.js"
import { firebaseStorage} from  './mods/img.js'

import "./mods/signUp.js"
import './mods/signIn.js'
import './mods/google-Log.js'
import './mods/logout.js'
import { loginCheck } from "./mods/loginCheck.js"

onAuthStateChanged(auth, async (idUsuario) => {
    loginCheck(idUsuario)
    //if (idUsuario) { }
   // else  {
    //    loginCheck(idUsuario) }
})