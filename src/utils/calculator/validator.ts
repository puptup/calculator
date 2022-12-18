import { CALCULATION_ERROR, Operation } from "@constants/index";

export const validateCalculationString = (formula: string[]): string[] => {
  let filteredFormula = formula.filter((element) => element !== "");
  if (!Number(filteredFormula.slice(-1)[0])) {
    filteredFormula = filteredFormula.slice(0, -1);
  }
  const leftBracketsCount = filteredFormula.filter((element) => element === "(").length;
  const rightBracketsCount = filteredFormula.filter((element) => element === ")").length;
  const difference = leftBracketsCount - rightBracketsCount;

  if (difference > 0) {
    return [...filteredFormula, ...Operation.RigthBracket.repeat(difference).split("")];
  }
  return filteredFormula;
};

export const getNumberInBrackets = (value: string): string[] => [
  Operation.LeftBracket,
  value,
  Operation.RigthBracket,
];
export const hasError = (formula: string[]): boolean => formula.includes(CALCULATION_ERROR);
export const isNumber = (value: string): boolean =>
  !Number.isNaN(value) && !Number.isNaN(parseFloat(value));

export const toFixedAndTrim = (number: number): string => {
  if (number % 1 !== 0) {
    return number.toFixed(3);
  }
  return String(number);
};
