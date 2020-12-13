const buttons = document.querySelectorAll("#btn");
console.log(buttons[1].attributes[0].value);
buttons.forEach((button) => (
    button.addEventListener("click",() => {
        let count = 0;
        if (button.attributes[0].value === "decrease"){
            console.log(123);
        }
    } )
))