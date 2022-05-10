// delcaramos la funcion message con 2 parametros:
export let message = (message, type) => {
    // declaramos el div del htmnl
    let messageContainer = document.querySelector(".message");
    // le añadimos la clase active para cuando hagamos el evento de click
    messageContainer.classList.add("active");
    // usamos la funcion setTimeout para cuando hagamos click, el mensaje se le quite 
    // la clase active en el tiempo puesto 
    setTimeout( () => {
        messageContainer.classList.remove("active")
    }, 5000); 
    // le añadimos la clase al div atraves del parametro type para cuando haga click
    messageContainer.classList.add(type);
    // declaramos un condicional para que cuando haga click, camibie el texto del html
    // si el valor del parametro type es igual a success, el texto del html cambiara a el valor definido en su parametro message
    if(type == "success"){

        messageContainer.innerHTML= message;
    // si tambien el valor del parametro type es igual a error, el texto del html cambiara a el valor definido en su parametro message 
    }else if(type == "error"){

        messageContainer.innerHTML= message;

    }else if(type == "info"){

        messageContainer.innerHTML= message;
    }
 
}

