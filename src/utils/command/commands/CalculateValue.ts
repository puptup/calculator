import { CALCULATION_ERROR, DEFAULT_CALCULATOR_VALUE, Operation } from "@constants";
import { calculateExpression } from "@utils/calculator/calculator";
import { hasError, isNumber, validateCalculationString } from "@utils/calculator/validator";

import { Command } from "./Command";

export default class CalculateValue extends Command {
  execute(): void {
    const { formula } = this.state;
    if (!formula.length) {
      this.state.value = DEFAULT_CALCULATOR_VALUE;
      return;
    }

    const validatedFormula = validateCalculationString(formula);

    if (hasError(validatedFormula)) {
      this.state.value = CALCULATION_ERROR;
    } else {
      try {
        this.state.value = calculateExpression(validatedFormula);
        this.state.formula = [this.state.value];
      } catch (e) {
        this.state.value = CALCULATION_ERROR;
      }
    }
  }

  canExecute(intermediate?: boolean): boolean {
    const { formula } = this.state;
    const NumbersCount = formula.filter((element) => isNumber(element)).length;
    const { leftBracketsCount, rightBracketsCount } = formula.reduce(
      (acc, element) => {
        if (element === Operation.LeftBracket) {
          acc.leftBracketsCount += 1;
        }
        if (element === Operation.RigthBracket) {
          acc.rightBracketsCount += 1;
        }
        return acc;
      },
      { leftBracketsCount: 0, rightBracketsCount: 0 }
    );
    if (intermediate) {
      return NumbersCount > 1 && leftBracketsCount - rightBracketsCount === 0;
    }
    return NumbersCount > 1;
  }
}
