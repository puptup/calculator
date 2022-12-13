import { Operation } from "../../../constants";
import { Command } from "./Command";

export default class ClearEntry extends Command {
  execute(): void {
    const { value, formula } = this.state;
    if (value) {
      this.state.value = value.slice(0, -1);
    }

    if (formula.length > 0 && !this.state.value) {
      const newValue = this.state.formula.pop();
      if (newValue !== Operation.LeftBracket && newValue !== Operation.RigthBracket) {
        this.state.value = newValue || "";
      } else {
        this.state.value = this.state.formula.pop() || "";
      }
    }
  }
}
