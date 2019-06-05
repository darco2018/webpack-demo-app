/* eslint-disable no-restricted-globals */
/* eslint-disable import/prefer-default-export */
export const inputsAreValid = (...input) => {
  return input.every(num => typeof num === "number" && !isNaN(num));
};
