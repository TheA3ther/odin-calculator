//imports
import * as ClickModule from './click-module';

//variables

//qeuery selectors
const buttonArea = document.querySelector("#button-area");
const opCurrent = document.querySelector("#op-current");
const opHistory = document.querySelector("#op-history");

//event listeners
buttonArea.addEventListener('click', (event) => ClickModule.clickButton(event));