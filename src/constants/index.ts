export const CALCULATION_ERROR = "Err";

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

export const calculatorTable = [
  [1, 2, 3, Operation.Clear, Operation.ClearEntry, Operation.ChangeSign, Operation.Modulo],
  [4, 5, 6, Operation.Multiply, Operation.Divide],
  [7, 8, 9, Operation.Add, Operation.Subtract, Operation.Modulo],
  [Operation.Dot, 0, Operation.LeftBracket, Operation.RigthBracket, Operation.Equal],
];
