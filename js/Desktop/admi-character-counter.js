export let characterCounter = () =>{
   
    let inputs = document.querySelectorAll(".input-limited")

    inputs.forEach(input => {
        
        let field = input.closest(".admin-form-element")
        let counter = field.querySelector(".character-counter") 
        let maxLengthContainer = field.querySelector(".max-length")

        maxLengthContainer.innerHTML = "de " + input.dataset.max;

        input.addEventListener("input", () => {

            let inputLength = input.value.length;
            let inpuTmaxLength = input.dataset.max;

            counter.innerHTML = inputLength;

            if(inputLength >= inpuTmaxLength){
                input.maxLength = inpuTmaxLength;
            }
        });

    });
}    