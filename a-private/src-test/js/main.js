/** @format */

import "../css/mainstyle.css";
import { greet } from "./main-depend";
import src from "../img/love.png";
// import "purecss";  he import works because webpack will resolve against "browser": "build/pure-min.css", field in the package.json file of Pure.css due to resolve.mainFields.

document.body.textContent = `${greet()} A tak wywolana funkcja pokaże swoją treść: ${greet}`;

$(document).ready(function main() {
  const msg = greet();
  $("body").append("<div><ul id='solution'></ul></div>");
  $("#solution").append(
    `${"<li style='color:blue' >Some blue text, <br>"}${msg}</li>`
  );
  $("#solution").append(
    "<li>This text should be purple on yellowgreen bgr!<br></li>"
  );

  $("body").text("The love picture has been inserted by import in JS file:  ");
  const love = `<img src=${src} />`;
  $("body").append(love);

  //-------------------------------
  /*  const element = document.createElement("div");
  element.className = "pure-button";
  element.innerHTML = "Hello world";
  $("body").append(element); */
});
