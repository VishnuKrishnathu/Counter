const buttons = document.querySelectorAll("#btn");
console.log(buttons[1].attributes[0].value);
var count = 0;
buttons.forEach((button) => (
    button.addEventListener("click",async () => {
        if (button.attributes[0].value === "decrease"){
            await decrement(count);
            }
        }
 ) )
)
function decrement(count){
    new Promise((resolve,reject) => {
        setTimeout(() => {
            count++
            document.querySelector("#num").textContent = count
        }, 1000)
    })
}