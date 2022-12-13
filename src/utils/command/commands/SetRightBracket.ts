import { Operation } from "../../../constants";
import { isNumber } from "../../calculator/validator";
import { Command } from "./Command";

export default class SetRigthBracket extends Command {
  execute(payload: Operation): void {
    const { formula, value } = this.state;
    this.state.formula = [...formula, value, payload];
    this.state.value = "";
  }

  canExecute(): boolean {
    const { formula, value } = this.state;
    const leftBracketsCount = formula.filter((element) => element === "(").length;
    const rightBracketsCount = formula.filter((element) => element === ")").length;
    return (
      rightBracketsCount < leftBracketsCount &&
      formula.slice(-1)[0] !== Operation.LeftBracket &&
      (isNumber(value) || formula.slice(-1)[0] === Operation.RigthBracket)
    );
  }
}
