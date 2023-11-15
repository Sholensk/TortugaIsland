import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js"
  
  export function authEmail(app) {
    const d = document,
      auth = getAuth(app),
      $appAuthEmail = d.getElementById("app-auth-email");
  
    d.addEventListener("submit", (e) => {
      e.preventDefault();
      let $form = e.target;
  
      if ($form.matches("#form-signin")) {
        alert("Creando Cuenta");
        //console.log(form.nombre.value, form.email.value, form.pass.value);
  
        createUserWithEmailAndPassword(auth, $form.email.value, $form.pass.value)
          .then((res) => {
            console.log(res);
            $appAuthEmail.innerHTML = `<p>Usuario creado con el correo <b>${$form.email.value}</b></p>`;
            $form.reset();
          })
          .catch((err) => {
            console.log(err);
            $appAuthEmail.innerHTML = `<p>Ocurrio un error al crear la cuenta <b>${err.message}</b></p>`;
            $form.nombre.focus();
          });
      }
    });
  
    d.addEventListener("click", (e) => {
      if (e.target.matches("#logout")) {
        alert("Cerrando sesión");
        signOut(auth);
      }
    });
  }