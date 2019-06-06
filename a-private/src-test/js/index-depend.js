/** @format */

export default (text = "Hello world from index-depend.js") => {
  const element = document.createElement("ul");

  element.innerHTML = text;

  return element;
};
