import { Operation } from "@constants";
import { isNumber } from "@utils/calculator/validator";

import { Command } from "./Command";

export default class SetRigthBracket extends Command {
  execute(payload: Operation): void {
    const { formula } = this.state;

    this.state.formula = [...formula, payload];
  }

  canExecute(): boolean {
    const { formula } = this.state;
    const lastElement = formula.slice(-1)[0];
    const leftBracketsCount = formula.filter((element) => element === "(").length;
    const rightBracketsCount = formula.filter((element) => element === ")").length;
    return rightBracketsCount < leftBracketsCount && isNumber(lastElement);
  }
}
