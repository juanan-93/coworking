export let cartButtons = () =>{
    // a los foreach siempre queryselectorall.
    let amounts = document.querySelectorAll(".amount")
    // COMPRObamos que amount existe, si es asi se ejecuta todo lo de dentro para que no entre conflicto con otras paginas.
    if(amounts){

        amounts.forEach(amount => {
        
            let input = amount.closest(".cart-button")
            let plus = input.querySelector(".plus")
            let minus = input.querySelector(".minus")
    
           
            if(plus){
                plus.addEventListener("click", () => {

                    amount.value = (parseInt(amount.value) +1)
                    
                });
            }
           
            if(minus){
                minus.addEventListener("click", () => {
                    
                    if(amount.value > 1 ){
                        amount.value = (parseInt(amount.value) -1)
                    }
                });
            } 
    
        });
    }

}