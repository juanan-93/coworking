export let confirmation = () =>{
    
    let container = document.querySelector(".panel-display-container");
    let close = document.getElementById("close");
    let deleters = document.querySelectorAll(".delete");

    if(container){
        
        deleters.forEach(deleter =>{
            deleter.addEventListener("click",()=>{
                container.classList.add("active")
            });      
        });
    
        close.addEventListener("click",()=>{
            container.classList.remove("active")
        })
    
        // cuando hagamos click ha container se va ha lanzar todo el codigo de la funcion.
        // (e) significa es una manera de dar nombre a un evento para poder usarlo dentro de la funcion.Podemos dar el nombre que queramos
    
        container.addEventListener("click", (e)=>{
            
            if(e.target === container){
                container.classList.remove("active");
            }
    
        });

    }
    
   
}