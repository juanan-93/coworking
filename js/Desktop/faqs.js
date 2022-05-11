export let faqs = () => {

    let arrows = document.querySelectorAll(".faqs-question-line-svg");
    let contents = document.querySelectorAll(".faqs-questions-content")

    if(arrows){

        arrows.forEach(arrow => {
    
            arrow.addEventListener("click", () =>{
    
                contents.forEach(content => {                        
    
                    if(arrow.dataset.button == content.dataset.content){

                        arrow.classList.toggle("active");
                        content.classList.toggle("active");
                    }
                    else{
                        content.classList.remove("active");
                        
                    }
                })
    
            })
            
        });
    }

}
