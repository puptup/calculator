import { addToast } from "puptuptoasts";

import { Command } from "./Command";

export default class ClearHistory extends Command {
  execute(): void {
    addToast({
      type: "warning",
      description: "was cleared",
      title: "History",
    });
    this.state.history = [];
  }

  canExecute(): boolean {
    return !!this.state.history.length;
  }
}
