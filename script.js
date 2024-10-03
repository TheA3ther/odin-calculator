//variables
let opCurrentValue = [];
let opHistoryValue = [];

//qeuery selectors
const buttonArea = document.querySelector("#button-area");
console.log(buttonArea);
const opCurrent = document.querySelector("#op-current");
console.log(opCurrent);
const opHistory = document.querySelector("#op-history");
console.log(opHistory);

//event listeners
buttonArea.addEventListener('click', (event) => clickButton(event));

//click button function
function clickButton(event){
    let target = event.target;
    if (event.target.classList.contains("number")){
        opCurrentValue.push(target.textContent);
    }
    if (event.target.classList.contains("operator")){

    }
    console.lo
    updateOpCurrent();
}


//display area functions
function updateOpCurrent(){
    opCurrent.textContent = opCurrentValue.join('');
}


//operation functions

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

//main operate function

function operate(a, b, operator){
    switch (operator){
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '×':
            return multiply(a, b);
        case '÷':
            return divide(a, b);
    }
}

