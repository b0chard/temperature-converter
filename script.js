const tempUnitFrom = document.getElementById("tempUnitFrom");
const tempUnitTo = document.getElementById("tempUnitTo");
const result = document.getElementById("result");
const fromTxt = document.getElementById("convertFromTxt");
const toTxt = document.getElementById("convertToTxt");
const userInput = document.getElementById("userInput");

const convert = (num, from, to) => {
  let result = "";

  if (from === "Celcius") {
    if (to === "Fahrenheit") {
      result = (num * 1.8) + 32;
    } else if (to === "Kelvin") {
      result = num + 273.15;
    } else {
      result = num;
    }
  } else if (from === "Fahrenheit") {
    if (to === "Celcius") {
      result = (num - 32) / (9 / 5);
    } else if (to === "Kelvin") {
      result = (num + 459.67) / 1.8;
    } else {
      result = num;
    }
  } else if (from === "Kelvin") {
    if (to === "Celcius") {
      result = num - 273.15;
    } else if (to === "Fahrenheit") {
      result = (num * 1.8) - 459.67;
    } else {
      result = num;
    }
  }

  return result;
}

const updateOutputTxt = (from, to, num) => {
  const units = {

  }
  return `${userInput.value}&deg;${from} &equals; ${num}&deg;${to}`;
}

const updateConversionTxt = (from, to) => {
  fromTxt.innerText = from;
  toTxt.innerText = to;
  calculate(userInput);
}

const onDropdownChange = () => {
  const tempFrom = tempUnitFrom.value;
  const tempTo = tempUnitTo.value;
  updateConversionTxt(tempFrom, tempTo);
}

tempUnitFrom.addEventListener("change", onDropdownChange);
tempUnitTo.addEventListener("change", onDropdownChange);

const calculate = (value) => {
  const noSpace = value.replace(/[^\d.]/g, ""); //remove whitespaces and non-numerical characters
  const parsedInt = parseInt(noSpace);
  const from = tempUnitFrom.value;
  const to = tempUnitTo.value;

  if (!parsedInt || isNaN(parsedInt)) {
    result.innerHTML = updateOutputTxt(from, to, convert(parsedInt, from, to));
    return;
  } else {
    document.getElementById("result").innerHTML = updateOutputTxt(from, to, convert(parsedInt, from, to));
  }
}

document.addEventListener("DOMContentLoaded", onDropdownChange);