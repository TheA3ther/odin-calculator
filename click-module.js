//imports
import * as CalcModule from './calculation-module.js';

//variables
const MAXLENGTH = 20;
let operandOne = undefined;
let operandTwo = undefined;
let opCurrentArray = [];
let opHistoryString = '';
let isReplaceable = false;
let isNegative = false;

//click button function
export function clickButton(event){
    let target = event.target;
    if (target.classList.contains("number")) clickNumber(target);
    if (target.classList.contains("operator")) clickOperator(target);
    if (target.id == "equals") clickEquals(target);
    if (target.id == "decimal") clickDecimal(target);
    if (target.id == "sign") clickSign(target);
}

//specific button functions
function clickNumber(target){
    if (!isReplaceable){
        if (opCurrentArray.length < MAXLENGTH){
            opCurrentArray.push(target.textContent);
        }
    }
    else {
        opCurrentArray = [target.textContent];
        isReplaceable = false;
    }
    console.log(opCurrentArray);
}

function clickOperator(target){

}

function clickEquals(target){

}

function clickDecimal(target){

}

function clickSign(target){

}