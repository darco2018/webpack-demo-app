/** @format */
import _ from "lodash";
// tak mozna wczesniej cos sciagnac: import(/* webpackPrefetch: true */ 'LoginModal');

export default (text = "Hello world") => {
  console.log(_.join(["Another", "module", "loaded!"], " "));

  const element = document.createElement("div");

  element.className = "pure-button";

  element.innerHTML = text;

  return element;
};
