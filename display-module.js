//query selectors
const opCurrent = document.querySelector("#op-current");
const opHistory = document.querySelector("#op-history");

export function UpdateDisplays(opCurrentArray, isNegative, operator, canUpdateOpHistory){
    let opCurrentString = opCurrentArray.join('');
    let opHistoryString = (isNegative ? '- ' : '') + opCurrentString + (operator !== undefined ? (" " + operator) : "");
    opCurrent.textContent = opCurrentString;
    if (canUpdateOpHistory) opHistory.textContent = opHistoryString;
}