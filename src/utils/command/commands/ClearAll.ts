import { Command } from "./Command";

export default class ClearAll extends Command {
  execute(): void {
    this.state.value = "";
    this.state.formula = [];
  }
}
