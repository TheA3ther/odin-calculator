//imports
import * as CalcModule from './calculation-module.js';
import * as DisplayModule from './display-module.js';

//variables
const MAXLENGTH = 20;
let calculatedFloat = undefined;
let operator = undefined;
let opCurrentArray = [];
let isReplaceable = false;
let isNegative = false;
let hasDecimal = false;

//click button function
export function clickButton(event){
    let target = event.target;
    let canUpdateOpHistory = false;
    if (target.classList.contains("number")) clickNumber(target);
    if (target.id == "decimal") clickDecimal(target);
    if (target.id == "sign") clickSign(target);
    if (target.id == "backspace") clickBackspace();
    if (target.classList.contains("operator")) {
        clickOperator(target);
        canUpdateOpHistory = true;
    }
    if (target.id == "equals") {
        clickEquals(target);
        canUpdateOpHistory = true;
    }
    DisplayModule.UpdateDisplays(opCurrentArray, isNegative, operator, canUpdateOpHistory);
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
        if (operator === undefined) calculatedFloat = undefined;
    }
    console.log("after number clicked");
    console.log(opCurrentArray);
}

function clickOperator(target){
    if (calculatedFloat === undefined){
        calculatedFloat = opCurrentArrayToFloat();  
    }
    else {
        PerformCalculation();
    }
    resetToggles();
    isReplaceable = true;
    operator = target.textContent;
    console.log("after operator clicked");
    console.log(calculatedFloat);
    console.log(operator);
    console.log(isReplaceable);
}

function clickEquals(target){
    PerformCalculation();
    operator = undefined;
}

function clickDecimal(target){
    if (!hasDecimal){
        if (opCurrentArray.length < MAXLENGTH) opCurrentArray.push('.');
        hasDecimal = true;
    }
}

function clickSign(target){
    isNegative = !isNegative;
    console.log(isNegative);
}

function clickBackspace(){
    if (!isReplaceable && opCurrentArray.length > 0){
        opCurrentArray.pop();
    }
}

//helper functions
function opCurrentArrayToFloat(){
    return parseFloat(opCurrentArray.join('')) * (isNegative ? -1 : 1);
}

function PerformCalculation(){
    if (operator !== undefined && opCurrentArray.length > 0 && !isReplaceable){
        let result = CalcModule.operate(calculatedFloat, opCurrentArrayToFloat(), operator);
        //this next line should not be here but im too lazy
        calculatedFloat = (result === undefined || result === NaN || result === Infinity || result === -Infinity) ? 0 : result;
        opCurrentArray = [...String(calculatedFloat)];
        isReplaceable = true;
        hasDecimal = false;
        isNegative = false;
    }
}

function resetToggles(){
    isNegative = false;
    hasDecimal = false;
}