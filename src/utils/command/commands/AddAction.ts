import { Operation } from "../../../constants/index";
import { getNumberInBrackets, isNumber } from "../../calculator/validator";
import { Command } from "./Command";

export default class AddAction extends Command {
  execute(payload: Operation): void {
    const { formula, value } = this.state;
    if (isNumber(value)) {
      if (Number(value) >= 0) {
        this.state.formula = [...formula, value];
      } else {
        this.state.formula = [...formula, ...getNumberInBrackets(value)];
      }
    }

    this.state.value = payload;
  }

  canExecute(): boolean {
    const { formula, value } = this.state;
    if (formula.slice(-1)[0] === Operation.RigthBracket) return true;
    return !!value;
  }
}
