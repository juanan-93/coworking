export let tabsdesplegados = () => {

    let tablinks = document.querySelectorAll(".tablinks");
    let tabcontents = document.querySelectorAll(".tabcontent")

    if(tablinks){

        tablinks.forEach(tablink => {
    
            tablink.addEventListener("click", () =>{
    
                tabcontents.forEach(tabcontent => {
    
                    tabcontent.classList.remove("active");
    
                    if(tablink.dataset.tab == tabcontent.dataset.tabcontent){
                        tabcontent.classList.add("active");
                    }
                })
    
            })
            
        });
    }

}
