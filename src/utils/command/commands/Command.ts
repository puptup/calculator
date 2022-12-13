/* eslint-disable class-methods-use-this */
import { Operation } from "../../../constants";
import { CalculatorState } from "../../../types";

export abstract class Command {
  state: CalculatorState;
  constructor(state: CalculatorState) {
    this.state = state;
  }

  abstract execute(payload: Operation | number): void;

  canExecute(): boolean {
    return true;
  }
}
