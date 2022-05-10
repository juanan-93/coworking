export let plusminus = () => {

    let amount = document.getElementById("amount");
    let plus = document.getElementById("plus")
    let minus = document.getElementById("minus")

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
}

