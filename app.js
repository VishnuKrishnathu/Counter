const buttons = document.querySelectorAll("#btn");
console.log(buttons[1].attributes[0].value);
buttons.forEach((button) => (
    button.addEventListener("click",async () => {
        let count = 0;
        if (button.attributes[0].value === "decrease"){
            while(true){
                count++
                await setTimeout(decrement(count), 1000)
                
            }
        }
    } )
))
function decrement(count){
    document.querySelector("#num").textContent = count
}