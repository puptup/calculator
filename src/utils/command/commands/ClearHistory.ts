import { Command } from "./Command";

export default class ClearHistory extends Command {
  execute(): void {
    this.state.history = [];
  }
}
