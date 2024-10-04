//imports
import * as ClickModule from './click-module.js';
import * as KeyboardModule from './keyboard-module.js';

//qeuery selectors
const buttonArea = document.querySelector("#button-area");

//event listeners
buttonArea.addEventListener('click', (event) => ClickModule.clickButton(event));
document.addEventListener('keydown', (event) => KeyboardModule.SimulateClick(event));