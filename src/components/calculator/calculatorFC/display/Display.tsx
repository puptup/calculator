import { useAppSelector } from "@hooks";
import { DisplayWrapper, FormulaText, ValueText } from "@styles/display";
import React from "react";

const Display = () => {
  const { formula, value } = useAppSelector((state) => state.calculator);

  return (
    <DisplayWrapper>
      <FormulaText data-test="formula">{formula.join("")}</FormulaText>
      <ValueText data-test="value">{value}</ValueText>
    </DisplayWrapper>
  );
};

export default Display;
