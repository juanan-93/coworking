export let switchs = () =>{

    let switchButton = document.querySelector(".switchs")
    let key = document.querySelector(".key")
    let check = document.getElementById("check")

    if(check){
        key.addEventListener("click", () => {
    
            switchButton.classList.toggle("active")
    
            check.checked = !check.checked;
                    
        });
    }
        
    
        
    
}