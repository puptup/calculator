import { CALCULATION_ERROR } from "../../constants";

export const validateCalculationString = (formula: string): string => {
  const leftBracketsCount = formula.split("").filter((element) => element === "(").length;
  const rightBracketsCount = formula.split("").filter((element) => element === ")").length;
  const difference = leftBracketsCount - rightBracketsCount;
  if (difference !== 0) {
    return formula.padEnd(difference + formula.length, ")");
  }
  return formula;
};

export const hasError = (formula: string): boolean => formula.includes(CALCULATION_ERROR);
export const isNumber = (value: string): boolean =>
  !Number.isNaN(value) && !Number.isNaN(parseFloat(value));
