import { Operation } from "@constants/index";
import { isNumber } from "@utils/calculator/validator";

import { Command } from "./Command";

export default class ChangeSign extends Command {
  execute(): void {
    const { formula } = this.state;
    const preLastElement = formula.slice(-2)[0];
    if (preLastElement === Operation.Add) {
      this.state.formula = [...formula.slice(0, -2), Operation.Subtract, ...formula.slice(-1)];
      return;
    }
    if (preLastElement === Operation.Subtract) {
      this.state.formula = [...formula.slice(0, -2), Operation.Add, ...formula.slice(-1)];
      return;
    }

    const lastElement = formula.slice(-1)[0];
    this.state.formula = [
      ...formula.slice(0, -1),
      Number(lastElement) > 0 ? `-${lastElement}` : lastElement.slice(1),
    ];
  }

  canExecute(): boolean {
    const { formula } = this.state;
    const lastElement = formula.slice(-1)[0];
    return isNumber(lastElement);
  }
}
