import {message} from './message.js';

export let form = () =>{
    
    let save = document.getElementById("save");
    
    save.addEventListener("click", (e) =>{

        e.preventDefault();
        // declaramos la funcion message con 2 parametros: primero hacere referencia a message y el segundo a type
        // dentro declaramos sus valores para activar sus clases declaradas en css y cambiar el texto del html
        message("El formulario se ha guardo con éxito", "info")

    });

}
