export let tabspaneladmi = () =>{

    let tablinks = document.querySelectorAll(".admi-tabs");
    let tabcontents = document.querySelectorAll(".tab-content");
    let tabLocals = document.querySelectorAll(".tab-local")
    let tabLocalContents = document.querySelectorAll(".tab-content-local")
   

    if(tabLocals){
        tablinks.forEach(tablink =>{
            //Le damos evento de click a todos los botones 
            tablink.addEventListener("click", (event) =>{
                // desavilita la funcion de que el formulario detecte el boton para mandar este
                event.preventDefault();
                // a todos los botones de la linea de tabs en los que hagamos click le quitamos la clase activa, 
                // para cuando abra la web no salgan todos selecionados con el fondo verde por defecto.
                tablinks.forEach(tablink =>{
                    tablink.classList.remove("active");
                });

                tabcontents.forEach(tabcontent =>{
        
                    tabcontent.classList.remove("active");
        
                    if(tablink.dataset.tab == tabcontent.dataset.tabContent){
                        tablink.classList.add("active");
                        tabcontent.classList.add("active");
                    }
                });

            });
        });
        // =====================TABSLOCALS=============================================
        tabLocals.forEach(tabLocal =>{

            tabLocal.addEventListener("click", (event) =>{
                
                // para que un boton dentro de un formulario no envie el formulario cada vez que este sea pulsado.
                event.preventDefault();

                tabLocals.forEach(tabLocal =>{
                    tabLocal.classList.remove("active")
                });
                
                tabLocalContents.forEach(tabLocalContent =>{
                    
                    tabLocalContent.classList.remove("active")
        
                    if(tabLocal.dataset.tabLocal == tabLocalContent.dataset.tabLocalContent){
                        tabLocal.classList.add("active");
                        tabLocalContent.classList.add("active");
                    }
                });
            });
        });
        
    }

    

}