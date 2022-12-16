/* eslint-disable no-new */
import { Operation } from "../../constants";
import { CalculatorState } from "../../types";
import {
  AddAction,
  ChangeSign,
  ClearAll,
  ClearEntry,
  ClearHistory,
  Command as CommandClass,
  GetValue,
  SetDot,
  SetLeftBracket,
  SetRigthBracket,
  SetValue,
} from "./commands";

const CommandByOperation = {
  [Operation.ClearEntry]: ClearEntry,
  [Operation.Equal]: GetValue,
  [Operation.ClearHistory]: ClearHistory,
  [Operation.Clear]: ClearAll,
  [Operation.ChangeSign]: ChangeSign,
  [Operation.Add]: AddAction,
  [Operation.Subtract]: AddAction,
  [Operation.Divide]: AddAction,
  [Operation.Multiply]: AddAction,
  [Operation.Modulo]: AddAction,
  [Operation.LeftBracket]: SetLeftBracket,
  [Operation.RigthBracket]: SetRigthBracket,
  [Operation.Dot]: SetDot,
  number: SetValue,
};

type OperationKey = keyof typeof CommandByOperation;
type Operations = typeof CommandByOperation[OperationKey];

export default class CalculatorInvoker {
  static executeCommandBySign(state: CalculatorState, sign: Operation | number) {
    const Command: Operations =
      CommandByOperation[sign as OperationKey] || CommandByOperation.number;

    const action = new Command(state) as CommandClass;
    if (action.canExecute()) {
      action.execute(sign);
    }
  }
}
