/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
import { Operation } from "../../constants";

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
  [Operation.Modulo, Operation.Divide, Operation.Multiply],
  [Operation.Add, Operation.Subtract],
];

type OperatorKey = keyof typeof operatorToFunction;

const searchLastDigit = /-?\d*\.?\d*$/g;
const searchFirstDigit = /^-?\d*\.?\d*/g;

const calculateAction = (expression: string): string => {
  if (!expression) return "0";
  for (const priorityLevel of operatorPriority) {
    for (const operator of priorityLevel) {
      const splittedExpression = expression.split(operator);
      if (splittedExpression.length > 1) {
        expression = splittedExpression.reduce((acc, element) => {
          const numA = acc.match(searchLastDigit)![0];
          const numB = element.match(searchFirstDigit)![0];

          const operationResult = operatorToFunction[operator as OperatorKey](+numA, +numB);
          if (!Number.isFinite(operationResult) && operator === Operation.Divide) {
            throw new Error("Devision by zero");
          }
          return acc.slice(0, -numA.length) + operationResult + element.slice(numB.length);
        });
      }
    }
  }
  return expression;
};

export const calculateExpression = (formula: string) => {
  let clearFormula = formula.split(" ").join("");
  const regExp = /\(([^()]*)\)/g;
  let matches = clearFormula.match(regExp);
  while (matches?.length) {
    for (const expression of matches) {
      const index = clearFormula.indexOf(expression);
      clearFormula =
        clearFormula.slice(0, index) +
        calculateAction(expression.slice(1, -1)) +
        clearFormula.slice(index + expression.length);
    }
    matches = clearFormula.match(regExp);
  }
  return calculateAction(clearFormula);
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
