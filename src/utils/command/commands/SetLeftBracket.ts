/* eslint-disable no-useless-return */
import { Operation, STANDART_BRACKETS_ACTION } from "@constants";

import { isNumber } from "../../calculator/validator";
import { Command } from "./Command";

export default class SetLeftBracket extends Command {
  execute(payload: Operation): void {
    const { formula } = this.state;
    const lastElement = formula.slice(-1)[0];
    if (!lastElement) {
      this.state.formula = [payload];
      return;
    }

    if (isNumber(lastElement) || lastElement === Operation.RigthBracket) {
      this.state.formula = [...formula, STANDART_BRACKETS_ACTION, payload];
    } else {
      this.state.formula = [...formula, payload];
    }
  }
}
