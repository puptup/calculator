export interface CalculatorState {
  value: string;
  formula: string[];
  history: {
    value: string;
    formula: string;
  }[];
}
