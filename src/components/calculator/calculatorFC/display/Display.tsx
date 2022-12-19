import { useAppSelector } from "@hooks";
import { RootState } from "@store";
import { DisplayWrapper, FormulaText, ValueText } from "@styles/display";
import React from "react";

const mapState = (state: RootState) => state.calculator;

const Display = () => {
  const { formula, value } = useAppSelector(mapState);

  return (
    <DisplayWrapper>
      <FormulaText data-test="formula">{formula.join("")}</FormulaText>
      <ValueText data-test="value">{value}</ValueText>
    </DisplayWrapper>
  );
};

export default Display;
