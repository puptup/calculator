import { CALCULATION_ERROR, Operation, STANDART_BRACKETS_ACTION } from "../../constants/index";
import { CalculatorState } from "../../types";
/* eslint-disable class-methods-use-this */
import { calculateExpression } from "../calculator/calculator";
import { hasError, isNumber, validateCalculationString } from "../calculator/validator";

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

export class ClearAll extends Command {
  execute(): void {
    this.state.value = "";
    this.state.formula = [];
  }
}

export class ClearEntry extends Command {
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

export class SetValue extends Command {
  execute(payload: number): void {
    const { value, formula } = this.state;
    if (!isNumber(value)) {
      this.state.formula = [...formula, value];
      this.state.value = "";
    }
    this.state.value += payload;
  }
}

export class GetValue extends Command {
  execute(): void {
    const formula = this.state.formula.join("") + this.state.value;
    const validatedFormula = validateCalculationString(formula);
    if (hasError(validatedFormula)) {
      this.state.value = CALCULATION_ERROR;
    } else {
      try {
        const value = calculateExpression(validatedFormula);
        this.state.value = value;
      } catch (e) {
        this.state.value = CALCULATION_ERROR;
      }
    }
    this.state.history = [
      ...this.state.history,
      { formula: validatedFormula, value: this.state.value },
    ];
    this.state.formula = [];
  }

  canExecute(): boolean {
    return !!this.state.formula && this.state.formula.slice(-1)[0] !== Operation.LeftBracket;
  }
}

export class ClearHistory extends Command {
  execute(): void {
    this.state.history = [];
  }
}

export class ChangeSign extends Command {
  execute(): void {
    this.state.value =
      this.state.value[0] === "-" ? this.state.value.slice(1) : `-${this.state.value}`;
  }

  canExecute(): boolean {
    const formula = this.state.formula.join("");
    return !!this.state.value && !hasError(formula);
  }
}

export class AddAction extends Command {
  execute(payload: Operation): void {
    const { formula, value } = this.state;
    if (isNumber(this.state.value)) {
      this.state.formula = [...formula, value];
    }

    this.state.value = payload;
  }
}

// LeftBracket = "(",
// RigthBracket = ")",

export class SetLeftBracket extends Command {
  execute(payload: Operation): void {
    const { formula, value } = this.state;
    if (isNumber(value)) {
      this.state.formula = [...formula, value, STANDART_BRACKETS_ACTION, payload];
    } else {
      this.state.formula = [...formula, value, payload];
    }
    this.state.value = "";
  }
}

export class SetRigthBracket extends Command {
  execute(payload: Operation): void {
    const { formula, value } = this.state;
    this.state.formula = [...formula, value, payload];
    this.state.value = "";
  }

  canExecute(): boolean {
    const { formula } = this.state;
    const leftBracketsCount = formula.filter((element) => element === "(").length;
    const rightBracketsCount = formula.filter((element) => element === ")").length;
    return rightBracketsCount < leftBracketsCount && formula.slice(-1)[0] !== Operation.LeftBracket;
  }
}

export class SetDot extends Command {
  execute(): void {
    this.state.value += Operation.Dot;
  }

  canExecute(): boolean {
    return !this.state.value.includes(Operation.Dot);
  }
}
