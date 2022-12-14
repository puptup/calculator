export enum Operation {
  Clear = "C",
  Multiply = "*",
  Subtract = "-",
  Divide = "/",
  Add = "+",
  Dot = ".",
  Equal = "=",
  LeftBracket = "(",
  RigthBracket = ")",
  ClearEntry = "CE",
  ClearHistory = "ClearHistory",
  Modulo = "%",
  ChangeSign = "+/-",
}

export const STANDART_BRACKETS_ACTION = Operation.Multiply;
export const DEFAULT_CALCULATOR_VALUE = "0";
export const CALCULATION_ERROR = "Err";

export const largeKeys = [Operation.Clear, Operation.Equal, Operation.Modulo];

export const calculatorTable = [
  [Operation.LeftBracket, Operation.RigthBracket, Operation.ClearEntry, Operation.Clear],
  [1, 2, 3, Operation.Modulo],
  [4, 5, 6, Operation.Multiply, Operation.Divide],
  [7, 8, 9, Operation.Add, Operation.Subtract],
  [Operation.Dot, 0, Operation.ChangeSign, Operation.Equal],
];
