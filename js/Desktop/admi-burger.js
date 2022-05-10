export let hamburger = () =>{

    let burger = document.querySelector(".hamburger")
    let menu = document.querySelector(".dropdown-display")
    
    if (burger){

        burger.addEventListener('click', ()=>{       
            burger.classList.toggle("active")
            menu.classList.toggle('active')
        });      
    }
   
    
}
