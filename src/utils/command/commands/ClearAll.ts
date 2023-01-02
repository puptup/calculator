import { DEFAULT_CALCULATOR_VALUE } from "@constants";

import { Command } from "./Command";

export default class ClearAll extends Command {
  execute(): void {
    this.state.value = DEFAULT_CALCULATOR_VALUE;
    this.state.formula = [];
  }
}
