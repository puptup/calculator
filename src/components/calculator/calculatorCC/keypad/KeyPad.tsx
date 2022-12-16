/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
import React from "react";
import { connect, ConnectedProps } from "react-redux";

import { calculatorTable, largeKeys, Operation } from "../../../../constants";
import { calculatorAction } from "../../../../store/reducers/calculator";
import { Button, KeyPadWrapper, KeysRow } from "../../styles/keyPad";

const mapDispatch = {
  calculatorAction,
};

const connector = connect(null, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

class KeyPad extends React.PureComponent<PropsFromRedux> {
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

export default connector(KeyPad);
