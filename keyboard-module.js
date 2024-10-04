export function SimulateClick(event){
    const operators = ["+", "-", "*", "/"];
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    let buttonId;

    if (numbers.includes(event.key) || operators.includes(event.key)) buttonId = event.key;
    if (event.key == "Backspace") buttonId = "backspace";
    if (event.key == "Enter") buttonId = "equals";
    if (event.key == ".") buttonId = "decimal";

    const button = document.getElementById(buttonId);

    if (button){
        button.classList.add('pressed');
        const clickEvent = new MouseEvent('click',{
            bubbles: true,
        });
        button.dispatchEvent(clickEvent);
        setTimeout(() => {
            button.classList.remove('pressed');
        }, 150);
    }
}