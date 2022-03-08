// export
// import
// import sum from './lib.js'
// import sum, { multiple } from './lib.js'
// import { sum, multiple } from './lib.js'
import * as mathLib from './lib.js'

console.log(mathLib.sum(4,5,6,7,8,9,9));
console.log(mathLib.multiple(4,5,6,7,8,9,9));

// querySelector
// querySelectorAll
let div = document.querySelector("#post-area");
let ps = document.querySelectorAll("p");
let headings = document.querySelectorAll(".heading");
let link = document.querySelector("#post-area>div>a");
// console.log(div)
// console.log(ps)
// console.log(headings)
// console.log(link)

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

console.log($("#post-area"));
console.log($$('.heading'))