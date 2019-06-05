/* eslint-disable radix */
/* eslint-disable import/prefer-default-export */
export const parseInputs = (...input) => {
  return input.map(str => parseInt(str));
};
