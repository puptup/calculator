import { Operation } from "@constants";

import { isNumber, validateCalculationString } from "../../calculator/validator";
import CalculateValue from "./CalculateValue";
import { Command } from "./Command";

export default class GetValue extends Command {
  execute(): void {
    const { formula } = this.state;

    if (!formula.length) {
      this.state.value = "0";
      return;
    }

    if (!isNumber(formula.slice(-1)[0])) {
      this.state.formula = [...formula.slice(0, -1)];
    }

    const command = new CalculateValue(this.state);
    if (command.canExecute()) {
      command.execute();
      const validatedFormula = validateCalculationString(formula);
      const jsonNewFormula = JSON.stringify(validatedFormula);
      const jsonOldFormula = JSON.stringify(this.state.history.slice(-1)[0]?.formula);

      if (jsonNewFormula !== jsonOldFormula) {
        this.state.history = [
          ...this.state.history,
          { formula: validatedFormula, value: this.state.value },
        ];
      }

      this.state.formula = [];
    }
  }

  canExecute(): boolean {
    return this.state.formula.slice(-1)[0] !== Operation.LeftBracket;
  }
}
