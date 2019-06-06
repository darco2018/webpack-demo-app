/** @format */

import { help } from "./helper";

// EVERYTHING will be transpiled for ie 11

// destructing assignement-----------------------

let a;
let b;

[a, b] = [10, 20];
console.log(`${a + b}, ${help}`);
a = b;
b = a;

// let i const oraz arrow functions will NOT be transpiled for Edge 17 -----------------------
const sss = 0;
const www = 1;
console.log(`${sss + www}, ${help}`);

[1, 2, 3].map(n => n + 1);
