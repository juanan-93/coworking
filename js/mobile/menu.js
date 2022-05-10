export let renderMenu = () => {
    
    let menuButton = document.querySelector(".collapse-button");
    let menu = document.querySelector(".menu");
        // addventListener añadade un evento que en este caso es (click)
    if(menuButton){
        menuButton.addEventListener("click", () => {
            // La etiqueta toggle quita y da una clase.
            menuButton.classList.toggle("active"); 
            menu.classList.toggle("active");
        });
    }       
}

    