import { Operation } from "@constants";

import { Command } from "./Command";

export default class SetDot extends Command {
  execute(): void {
    const { formula } = this.state;
    const lastElement = formula.slice(-1)[0];
    this.state.formula = [
      ...formula.slice(0, -1),
      lastElement ? lastElement + Operation.Dot : Operation.Dot,
    ];
    console.log([...this.state.formula]);
  }

  canExecute(): boolean {
    const { formula } = this.state;
    return !formula.length || !formula.slice(-1)[0].includes(Operation.Dot);
  }
}
