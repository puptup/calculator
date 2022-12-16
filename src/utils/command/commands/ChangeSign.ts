import { DEFAULT_CALCULATOR_VALUE } from "@constants";

import { isNumber } from "../../calculator/validator";
import { Command } from "./Command";

export default class ChangeSign extends Command {
  execute(): void {
    this.state.value =
      this.state.value[0] === "-" ? this.state.value.slice(1) : `-${this.state.value}`;
  }

  canExecute(): boolean {
    const { value } = this.state;
    return isNumber(value) && value !== DEFAULT_CALCULATOR_VALUE;
  }
}
