export default class ConverterBinary {
  constructor(binary, decimal, button) {
    this.binary = document.querySelector(binary);
    this.decimalOutput = document.querySelector(decimal);
    this.button = document.querySelector(button);
    this.putValuesInput = this.putValuesInput.bind(this);
  }

  converterToDecimal(binary) {
    if (!/^[01]+$/.test(binary)) {
      return window.alert("Insira um número binário valido");
    } else {
      if (!isNaN(binary)) binary = binary.toString();
      let decimal = 0;
      for (let i = binary.length - 1; i >= 0; i--) {
        decimal += +binary[i] * Math.pow(2, binary.length - 1 - i);
      }
      return decimal;
    }
  }

  putValuesInput() {
    const dec = this.converterToDecimal(this.binary.value);
    this.decimalOutput.value = dec;
  }

  addEventButton() {
    this.button.addEventListener("click", this.putValuesInput);
  }

  init() {
    if (this.binary && this.decimalOutput && this.button) this.addEventButton();
    return this;
  }
}

// const binToDecimal = function (binary) {
//   // Transformar o parametro em string, pois se for número o for não consegue acessar o método .length
//   if (!isNaN(binary)) binary = binary.toString();
//   let decimal = 0;

//   for (let i = binary.length - 1; i >= 0; i--) {
//     decimal += +binary[i] * Math.pow(2, binary.length - 1 - i);
//   }

//   return decimal;
// };
