export interface CalculatorState {
  value: string;
  intermediateResult: string;
  formula: string[]; // 2+2+3+4
  history: {
    value: string;
    formula: string[];
  }[];
}
