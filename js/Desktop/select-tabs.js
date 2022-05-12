export let selecttabs = () => {

    let selectabs = document.querySelectorAll(".select");
    let selectabcontents = document.querySelectorAll(".select-content")

    if(selectabs){
       
        selectabs.forEach(selectab=> {
            
            selectab.addEventListener('change', () =>{
                
                selectabcontents.forEach(selectabcontent => {
    
                    selectabcontent.classList.remove("active");
    
                    if(selectab.value == selectabcontent.dataset.selectcontent){
                        selectabcontent.classList.add("active");
                    }else{
                        selectabcontent.classList.remove("active");

                    }
                })
            });
            
        });
    }

}
