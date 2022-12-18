import { RootState } from "@store";
import { DisplayWrapper, FormulaText, ValueText } from "@styles/display";
import React from "react";
import { connect, ConnectedProps } from "react-redux";

const mapState = (state: RootState) => ({
  formula: state.calculator.formula,
  value: state.calculator.value,
});

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

class Display extends React.PureComponent<PropsFromRedux> {
  render() {
    const { formula, value } = this.props;
    return (
      <DisplayWrapper>
        <FormulaText data-test="formula">{formula.join("")}</FormulaText>
        <ValueText data-test="value">{value}</ValueText>
      </DisplayWrapper>
    );
  }
}

export default connector(Display);
