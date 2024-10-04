//imports
import * as CalcModule from './calculation-module';

//click button function
function clickButton(event){
    let target = event.target;
    if (target.classList.contains("number")) clickNumber(target);
    if (target.classList.contains("operator")) clickOperator(target);
    if (target.id == "equals") clickEquals(target);
    if (target.id == "decimal") clickDecimal(target);
    if (target.id == "sign") clickSign(target);
}

//specific button functions
function clickNumber(target){

}

function clickOperator(target){

}

function clickEquals(target){

}

function clickDecimal(target){

}

function clickSign(target){
    
}