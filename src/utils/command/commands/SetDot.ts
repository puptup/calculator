import { Operation } from "../../../constants";
import { Command } from "./Command";

export default class SetDot extends Command {
  execute(): void {
    this.state.value += Operation.Dot;
  }

  canExecute(): boolean {
    return !this.state.value.includes(Operation.Dot);
  }
}
