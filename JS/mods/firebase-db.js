import {
    getDatabase,
    ref,
    set,
    push,
    update,
    remove,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js"

export function firebaseCRUD(app){
    const d = document,
    db = getDatabase(app)
    refregistro = ref(db, "registro"),
//    $table = d.getElementById("table-registro"),
    $form = d.getElementByEId("form-registro"),
    $fragment = d.createDocumentFragment(),
//    $template = d.getElementById("template-usuario").content;

    function renderUsuarios (){
        onValue(refregistro, (snapshot) => {
            //limpiar el contenido de la tabla
            $table.querySelector("tbody").innerHTML = "";

            snapshot.forEach((el) => {
                let values = el.val(),
                key = el.key;

                $template.querySelector(".key-id").id = key;
                $template.querySelector(".key").innerText = key;
                $template.querySelector(".usuario").innerText = values.usuario;
                $template.querySelector(".email").innerText = values.email;
                $template.querySelector(".password").innerText = values.password;

                let $clone = d.importNode($template, true);
                $fragment.appendChild($clone);
            });

         $tablequerySelector("tbody").appendChild($fragment);
        });
    }

    d.addEventListener("DOMComntenLoadded", (e) => renderUsuarios());

    $form.addEventListener("submit", (e) => {
        e.preventDefault();

        console.log($form.usuario.value, $form.email.value, $form.password);
        
        let key = e.target.key,
        values ={
            usuario: $form.usuario.value,
            email: $form.email.value,
            password: $form.password.value,
        };

        if (!key.value) {
            //Insertar
            push(ref(db, "email"), values);
        }
        else {
            //Actualizar
            update(ref(db), {
                ["/email/" + key.value]: values,
            });
        }

        $form.reset();
    });

    d.addEventListener("click", (e) => {
        if (!e.target.matches(".edit") && !e.target.matches(".delete"))
          return false;
    
        if (e.target.matches(".edit")) {
          //alert("Editar");
          //console.log(e.target.parentElement.parentElement.id);
          let $parent = e.target.parentElement.parentElement;
          $form.country.value = $parent.querySelector(".country").innerText;
          $form.city.value = $parent.querySelector(".email").innerText;
          $form.password.value = $parent.querySelector(".password").innerText;
          $form.key.value = $parent.id;
        }
    
        if (e.target.matches(".delete")) {
          //alert("Eliminar");
          let key = e.target.parentElement.parentElement.id,
            deleteId = confirm(`¿Estás seguro de eliminar el id ${key}?`);
    
          if (deleteId) remove(ref(db, `/email/${key}`));
        }
      });
}