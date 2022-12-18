import CalculateValue from "./CalculateValue";
import { Command } from "./Command";

export default class ClearEntry extends Command {
  execute(): void {
    const { formula } = this.state;
    const lastElement = formula.slice(-1)[0];
    if (lastElement.length === 1) {
      this.state.formula = [...formula.slice(0, -1)];
      new CalculateValue(this.state).execute();
    } else {
      this.state.formula = [...formula.slice(0, -1), lastElement.slice(0, -1)];
    }
  }

  canExecute(): boolean {
    const { formula } = this.state;
    return !!formula.length;
  }
}
