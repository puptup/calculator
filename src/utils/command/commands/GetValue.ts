import { CALCULATION_ERROR, Operation } from "../../../constants";
import { calculateExpression } from "../../calculator/calculator";
import {
  getNumberInBrackets,
  hasError,
  isNumber,
  validateCalculationString,
} from "../../calculator/validator";
import { Command } from "./Command";

export default class GetValue extends Command {
  execute(): void {
    let formula: string[];
    if (isNumber(this.state.value)) {
      if (Number(this.state.value) > 0) {
        formula = [...this.state.formula, this.state.value];
      } else {
        formula = [...this.state.formula, ...getNumberInBrackets(this.state.value)];
      }
    } else {
      formula = [...this.state.formula];
    }
    const validatedFormula = validateCalculationString(formula);
    if (hasError(validatedFormula)) {
      this.state.value = CALCULATION_ERROR;
    } else {
      try {
        const value = calculateExpression(validatedFormula);
        this.state.value = value;
      } catch (e) {
        this.state.value = CALCULATION_ERROR;
      }
    }
    const jsonNewFormula = JSON.stringify(validatedFormula);
    const jsonOldFormula = JSON.stringify(this.state.history.slice(-1)[0]?.formula);
    if (jsonNewFormula === jsonOldFormula) {
      return;
    }
    console.log(jsonNewFormula, jsonOldFormula);
    this.state.history = [
      ...this.state.history,
      { formula: validatedFormula, value: this.state.value },
    ];
    this.state.formula = [];
  }

  canExecute(): boolean {
    return !!this.state.formula && this.state.formula.slice(-1)[0] !== Operation.LeftBracket;
  }
}
