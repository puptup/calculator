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
      } catch (e) {
        this.state.value = CALCULATION_ERROR;
      }
    }
  }

  canExecute(): boolean {
    const { formula } = this.state;
    const NumbersCount = formula.filter((element) => isNumber(element)).length;
    return NumbersCount > 1 && formula.slice(-1)[0] !== Operation.LeftBracket;
  }
}
