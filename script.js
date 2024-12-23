const tempUnitFrom = document.getElementById("unitFrom");
const tempUnitTo = document.getElementById("unitTo");
const result = document.getElementById("result");
const fromTxt = document.getElementById("convertFromTxt");
const toTxt = document.getElementById("convertToTxt");

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

const updateUI = () => {
  
}

const calculate = (value) => {
  const from = tempUnitFrom.value;
  const to = tempUnitTo.value;

  if (from === "Celcius") {
    if (to === "Fahrenheit") {
      fromTxt.innerText = "Celcius";
      toTxt.innerText = "Fahrenheit";
    } else if (to === "Kelvin") {
      fromTxt.innerText = "Celcius";
      toTxt.innerText = "Kelvin";
    } else {
      fromTxt.innerText = "Celcius";
      toTxt.innerText = "Celcius";
    }
  } else if (from === "Fahrenheit") {
    if (to === "Celcius") {
      fromTxt.innerText = "Fahrenheit";
      toTxt.innerText = "Celcius";
    } else if (to === "Kelvin") {
      fromTxt.innerText = "Fahrenheit";
      toTxt.innerText = "Kelvin";
    } else {
      fromTxt.innerText = "Fahrenheit";
      toTxt.innerText = "Fahrenheit";
    }
  } else if (from === "Kelvin") {
    if (to === "Celcius") {
      fromTxt.innerText = "Kelvin";
      toTxt.innerText = "Celcius";
    } else if (to === "Fahrenheit") {
      fromTxt.innerText = "Kelvin";
      toTxt.innerText = "Fahrenheit";
    } else {
      fromTxt.innerText = "Kelvin";
      toTxt.innerText = "Kelvin";
    }
  }

  const noSpace = value.replace(/[^\d]/g, ""); //remove whitespaces and non-numerical characters
  const parsedInt = parseInt(noSpace);

  if (!parsedInt || isNaN(parsedInt)) {
    result.innerHTML = `0&deg;C &equals; 32.00&deg;F`;
    return;
  } else {
    document.getElementById("result").innerHTML = convert(parsedInt, from, to);
    // updateUI();
  }
}

document.addEventListener("DOMContentLoaded", calculate);