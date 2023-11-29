export default class ConverterBinary {
  constructor(binary, decimal, button) {
    this.binary = document.querySelector(binary);
    this.decimalOutput = document.querySelector(decimal);
    this.button = document.querySelector(button);
    this.putValuesInput = this.putValuesInput.bind(this);
  }

  converterToDecimal(binary) {
    const spanErro = document.createElement("span");
    spanErro.innerText = "Insira um valor binário válido";
    const parentBinary = this.binary.parentNode;

    if (!/^[01]+$/.test(binary)) {
      if (!parentBinary.lastChild.innerHTML == "") {
      } else {
        parentBinary.lastChild.innerHTML = "";
        parentBinary.appendChild(spanErro);
      }
    } else {
      parentBinary.lastChild.innerHTML = "";
      if (!isNaN(binary)) binary = binary.toString();
      let decimal = 0;
      for (let i = binary.length - 1; i >= 0; i--) {
        decimal += +binary[i] * Math.pow(2, binary.length - 1 - i);
      }
      return decimal;
    }
  }

  cleanBinaryNumber(binary) {
    return binary.replace(/( )+/g, "");
  }

  putValuesInput() {
    const binaryClean = this.cleanBinaryNumber(this.binary.value);
    const dec = this.converterToDecimal(binaryClean);
    if (dec !== undefined) {
      this.binary.value = binaryClean;
      this.decimalOutput.value = dec;
    } else {
      this.decimalOutput.value = "";
    }
  }

  addEventButton() {
    window.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        this.putValuesInput();
      }
    });
    this.button.addEventListener("click", this.putValuesInput);
  }

  init() {
    if (this.binary && this.decimalOutput && this.button) this.addEventButton();

    return this;
  }
}
