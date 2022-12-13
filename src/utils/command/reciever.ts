// unused
export default class CalculatorReceiver {
  value: string;
  formula: string;
  history: {
    value: string;
    formula: string;
  }[];

  constructor() {
    this.value = "";
    this.formula = "";
    this.history = [];
  }

  getData() {
    return {
      value: this.value,
      formula: this.formula,
      history: this.history,
    };
  }
}
