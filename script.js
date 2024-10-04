//imports
import * as ClickModule from './click-module.js';

//variables

//qeuery selectors
const buttonArea = document.querySelector("#button-area");

//event listeners
buttonArea.addEventListener('click', (event) => ClickModule.clickButton(event));