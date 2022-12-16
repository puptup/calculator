import { CALCULATION_ERROR, Operation } from "@constants/index";

export const validateCalculationString = (formula: string[]): string[] => {
  const filteredFormula = formula.filter((element) => element !== "");
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
