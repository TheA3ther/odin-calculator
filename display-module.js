//query selectors
const opCurrent = document.querySelector("#op-current");
const opHistory = document.querySelector("#op-history");

export function UpdateDisplays(opCurrentArray, isNegative, operator, canUpdateOpHistory){
    let opCurrentString = (isNegative ? '- ' : '') + opCurrentArray.join('');
    let opHistoryString = opCurrentString + (operator !== undefined ? (" " + operator) : "");
    opCurrent.textContent = opCurrentString;
    if (canUpdateOpHistory) opHistory.textContent = opHistoryString;
}

export function ClearOpHistoryString(){
    opHistory.textContent = '';
}