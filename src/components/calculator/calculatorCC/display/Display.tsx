import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../../store";
import { DisplayWrapper, FormulaText, ValueText } from "../../styles/display";

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
        <FormulaText>{formula.join("")}</FormulaText>
        <ValueText>{value}</ValueText>
      </DisplayWrapper>
    );
  }
}

export default connector(Display);
