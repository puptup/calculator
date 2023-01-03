/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
import { Operation } from "@constants";
import { addToast } from "puptuptoasts";

import { toFixedAndTrim } from "./validator";

const Add = (a: number, b: number) => a + b;
const Sub = (a: number, b: number) => a - b;
const Mul = (a: number, b: number) => a * b;
const Div = (a: number, b: number) => a / b;
const Mod = (a: number, b: number) => a % b;

const operatorToFunction = {
  [Operation.Add]: Add,
  [Operation.Subtract]: Sub,
  [Operation.Multiply]: Mul,
  [Operation.Divide]: Div,
  [Operation.Modulo]: Mod,
};

const operatorPriority = [
  Operation.Modulo,
  Operation.Divide,
  Operation.Multiply,
  Operation.Add,
  Operation.Subtract,
];

type OperatorKey = keyof typeof operatorToFunction;

const calculateAction = (expression: string[]): string => {
  if (expression.length === 1) return toFixedAndTrim(Number(expression[0]));
  for (const operator of operatorPriority) {
    while (expression.includes(operator)) {
      const operatorIndex = expression.findIndex((elelement) => elelement === operator);
      const numA = expression[operatorIndex - 1];
      const numB = expression[operatorIndex + 1];
      const operationResult = operatorToFunction[operator as OperatorKey](+numA, +numB);
      if (!Number.isFinite(operationResult) && operator === Operation.Divide) {
        addToast({
          type: "error",
          description: "Devision by zero",
          title: "Error",
          position: "rightTop",
          timeToDelete: 1500,
        });
        throw new Error("Devision by zero");
      }
      expression.splice(operatorIndex - 1, 3, toFixedAndTrim(operationResult));
    }
  }
  return expression[0];
};

export const calculateExpression = (formula: string[]) => {
  while (formula.includes(Operation.RigthBracket)) {
    let indexOfRightBracket = -1;
    let indexOfLeftBracket = -1;
    for (let i = 0; i < formula.length; i += 1) {
      if (formula[i] === Operation.LeftBracket) {
        indexOfLeftBracket = i;
      } else if (formula[i] === Operation.RigthBracket) {
        indexOfRightBracket = i;
        break;
      }
    }

    const action = formula.splice(indexOfLeftBracket, indexOfRightBracket - indexOfLeftBracket + 1);
    const actionResult = calculateAction(action.slice(1, -1));
    formula.splice(indexOfLeftBracket, 0, actionResult);
  }
  return calculateAction(formula);
};

// const testCalculator = () => {
//   const expressions = [
//     "(0-1)+23/4*(4*2)",
//     "2+2*2/2-2",
//     "-(24*1.5)",
//     "2+-1",
//     "5-((((0)*(8))))",
//     "0.1+0.2",
//     "123",
//     "-123",
//     "-.23",
//     "4%2/2*3",
//     "2/0",
//   ];

//   for (const expression of expressions) {
//     try {
//       const result = calculateExpression(expression);
//       // eslint-disable-next-line no-eval
//       console.log(Number(result) === eval(expression));
//     } catch (e) {
//       console.log("take", expression);
//     }
//   }
// };

// testCalculator();

// 2 + 4 + ((2 + 3 * 3) + (4 + 5))
// 2+ 3 * 3 => '2+3', '3'
