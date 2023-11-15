import { app } from "./mods/firebase-config.js";
import { firebaseCRUD } from "./mods/firebase-db.js";
import { authEmail } from "./mods/firebase-auth-email.js";

firebaseCRUD(app);
authEmail(app);


/*
import { authGitHub } from "./modulos/firebase-auth-github.js";
import { authGoogle } from "./modulos/firebase-auth-google.js";
import { firebaseStorage } from "./modulos/firebase-storage.js";

//console.log(app);
//firebaseCRUD(app);
authEmail(app);
/*
authGitHub(app);
authGoogle(app);
firebaseStorage(app);



/*
import { app } from "./mods/firebase-config.js";
import { database } from "./mods/firebase-config.js"

firebase.database.ref("registro");

document.getElementById("registro").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  
  usuario = getElementVal("usuario")
  email = getElementVal("email");
  password = getElementVal("password");
  
  saveUsuario(usuario, email,password)
  console.log("registrado", usuario, email, contraseña);
} 

const saveUsuario = (usuario, email, password) => {
  newUser = registro.push();

  usuario.set({
    nombre: usuario,
    email: email,
    password: password,
  })
}

const getElementVal = (id) => {
  return document.getElementById(id).value;
}
*/