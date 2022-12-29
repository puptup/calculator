/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
import { calculatorTable, largeKeys, Operation } from "@constants";
import { calculatorAction } from "@store/reducers/calculator";
import { Button, KeyPadWrapper, KeysRow } from "@styles/keyPad";
import React from "react";
import { connect } from "react-redux";

interface KeyPadProps {
  calculatorAction: (sign: Operation | number) => void;
}
class KeyPad extends React.PureComponent<KeyPadProps> {
  handleAction = (sign: Operation | number) => {
    this.props.calculatorAction(sign);
  };

  render() {
    return (
      <KeyPadWrapper data-test="keypad">
        {calculatorTable.map((row, index) => (
          <KeysRow key={index}>
            {row.map((element) => (
              <Button
                data-test={element}
                size={largeKeys.includes(element as Operation) ? 2 : 1}
                key={element}
                onClick={() => this.handleAction(element)}
              >
                {element}
              </Button>
            ))}
          </KeysRow>
        ))}
      </KeyPadWrapper>
    );
  }
}

const mapDispatch = {
  calculatorAction,
};

export default connect(null, mapDispatch)(KeyPad);
