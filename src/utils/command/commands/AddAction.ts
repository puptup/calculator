import { DEFAULT_CALCULATOR_VALUE, Operation } from "@constants/index";
import { isNumber } from "@utils/calculator/validator";

import CalculateValue from "./CalculateValue";
import { Command } from "./Command";

export default class AddAction extends Command {
  execute(payload: Operation): void {
    const command = new CalculateValue(this.state);
    if (command.canExecute(true)) {
      command.execute();
    }

    const { formula, value } = this.state;

    if (formula.length === 0) {
      if (value !== DEFAULT_CALCULATOR_VALUE) {
        this.state.formula = [value, payload];
      }
      return;
    }

    const lastElement = formula.slice(-1)[0];
    if (isNumber(lastElement) || lastElement === Operation.RigthBracket) {
      this.state.formula = [...formula, payload];
    } else {
      this.state.formula = [...formula.slice(0, -1), payload];
    }
  }

  canExecute(): boolean {
    const { formula } = this.state;
    const lastElement = formula.slice(-1)[0];
    return lastElement !== Operation.LeftBracket;
  }
}
