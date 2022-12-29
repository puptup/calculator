import { calculatorTable, largeKeys, Operation } from "@constants";
import { useAppDispatch } from "@hooks";
import { calculatorAction } from "@store/reducers/calculator";
import { Button, KeyPadWrapper, KeysRow } from "@styles/keyPad";
import React from "react";

const KeyPad = () => {
  const dispatch = useAppDispatch();

  const handleAction = (sign: Operation | number) => () => {
    dispatch(calculatorAction(sign));
  };

  return (
    <KeyPadWrapper data-test="keypad">
      {calculatorTable.map((row, index) => (
        <KeysRow key={index}>
          {row.map((element) => (
            <Button
              data-test={element}
              size={largeKeys.includes(element as Operation) ? 2 : 1}
              key={element}
              onClick={handleAction(element)}
            >
              {element}
            </Button>
          ))}
        </KeysRow>
      ))}
    </KeyPadWrapper>
  );
};

export default KeyPad;
