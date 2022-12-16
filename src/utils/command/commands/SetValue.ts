import { Operation } from "../../../constants";
import { isNumber } from "../../calculator/validator";
import { Command } from "./Command";

export default class SetValue extends Command {
  execute(payload: number): void {
    const { value, formula } = this.state;
    if (!isNumber(value)) {
      this.state.formula = [...formula, value];
      this.state.value = "";
    }
    if (value === "0") {
      this.state.value = String(payload);
    } else {
      this.state.value += payload;
    }
  }

  canExecute(): boolean {
    const { formula, value } = this.state;
    return formula.slice(-1)[0] !== Operation.RigthBracket || !!value;
  }
}
