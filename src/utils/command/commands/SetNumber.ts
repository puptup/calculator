import { Operation } from "../../../constants/index";
import { isNumber } from "../../calculator/validator";
import { Command } from "./Command";

export default class SetNumber extends Command {
  execute(payload: number): void {
    const { formula } = this.state;
    const lastElement = formula.slice(-1)[0];
    if (isNumber(lastElement) || lastElement === Operation.Dot) {
      this.state.formula = [...formula.slice(0, -1), lastElement + String(payload)];
    } else {
      this.state.formula = [...formula, String(payload)];
    }
  }
}
