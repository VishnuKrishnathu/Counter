const buttons = document.querySelectorAll("#btn");
console.log(buttons[1].attributes[0].value);
let interv;
let stopper = true;
var count = 0;
buttons.forEach((button) => (
    button.addEventListener("click",async () => {
        if (button.attributes[0].value === "decrease"){
            await decrement(count)
            } else if (button.attributes[0].value === "reset"){
                stopper = true;
                clearInterval(interv);
                document.querySelector("#num").textContent = 0;
            }else{
                await increament(count)
            }
        }
 ) )
)
function decrement(count){
    new Promise((resolve,reject) => {
        if (stopper){
            stopper = false;
            interv =setInterval(() => {
                --count;
                resolve(document.querySelector("#num").textContent = count)
            }, 1000)
        }else {
            stopper = true;
            clearInterval(interv);
        }
    })
}
function increament(count){
    new Promise((resolve,reject) => {
        if (stopper){
            stopper = false;
            interv =setInterval(() => {
                ++count;
                resolve(document.querySelector("#num").textContent = count)
            }, 1000)
        }else {
            stopper = true;
            clearInterval(interv);
        }
    })
}