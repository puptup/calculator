import { Operation, STANDART_BRACKETS_ACTION } from "../../../constants";
import { isNumber } from "../../calculator/validator";
import { Command } from "./Command";

export default class SetLeftBracket extends Command {
  execute(payload: Operation): void {
    const { formula, value } = this.state;
    if (isNumber(value)) {
      if (Number(value) > 0) {
        this.state.formula = [...formula, value, STANDART_BRACKETS_ACTION, payload];
      } else {
        this.state.formula = [
          ...formula,
          Operation.LeftBracket,
          value,
          Operation.RigthBracket,
          STANDART_BRACKETS_ACTION,
          payload,
        ];
      }
    } else if (formula.slice(-1)[0] === Operation.RigthBracket) {
      this.state.formula = [...formula, value, payload];
    } else {
      this.state.formula = [...formula, value, payload];
    }
    this.state.value = "";
  }
}