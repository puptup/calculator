import { RootState } from "@store";
import { DisplayWrapper, FormulaText, ValueText } from "@styles/display";
import React from "react";
import { connect } from "react-redux";

interface DisplayProps {
  formula: string[];
  value: string;
}
class Display extends React.PureComponent<DisplayProps> {
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

const mapState = (state: RootState) => ({
  formula: state.calculator.formula,
  value: state.calculator.value,
});

export default connect(mapState)(Display);
