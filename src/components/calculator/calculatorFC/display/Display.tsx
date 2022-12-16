import { useAppSelector } from "@hooks";
import React from "react";

import { DisplayWrapper, FormulaText, ValueText } from "../../styles/display";

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
