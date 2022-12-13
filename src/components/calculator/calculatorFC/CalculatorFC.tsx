import React from "react";
import { calculatorTable, Operation } from "../../../constants";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { calculatorAction } from "../../../store/reducers/calculator";

import History from "./history";

const CalculatorFC = () => {
  const { value, formula, history } = useAppSelector((state) => state.calculator);
  const dispatch = useAppDispatch();

  const handleAction = (sign: Operation | number) => () => {
    dispatch(calculatorAction(sign));
  };

  return (
    <div>
      <div>{`formula ${formula.join("")}`}</div>
      <div>{`value ${value}`}</div>

      {calculatorTable.map((row, index) => (
        <div key={index}>
          {row.map((element) => (
            <button
              style={{ minWidth: 50, height: 50 }}
              key={element}
              type="button"
              onClick={handleAction(element)}
            >
              {element}
            </button>
          ))}
        </div>
      ))}
      <History history={history} clearHistory={handleAction(Operation.ClearHistory)} />
    </div>
  );
};

export default CalculatorFC;
