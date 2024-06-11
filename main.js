//Conversion Calc
document.getElementById("convert").addEventListener("click", convLength);

function convLength() {
  //Get User Input

  let unit1 = document.getElementById("unitOne").value;
  let unit2 = document.getElementById("unitTwo").value;
  let inputVal = document.getElementById("value").value;

  //Conversion
  let result;
  switch (unit1) {
    case "milimeter":
      result = convMmTo(unit2, inputVal);
      break;
    case "centimeter":
      result = convCmTo(unit2, inputVal);
      break;
    case "meter":
      result = convMTo(unit2, inputVal);
      break;
    case "kilometer":
      result = convKmTo(unit2, inputVal);
      break;
  }

  function convMmTo(unit2, value) {
    switch (unit2) {
      case "milimeter":
        return value;
      case "centimeter":
        return value / 10;
      case "meter":
        return value / 1000;
      case "kilometer":
        return value / 1000000;
    }
  }
  function convCmTo(unit2, value) {
    switch (unit2) {
      case "milimeter":
        return value * 10;
      case "centimeter":
        return value;
      case "meter":
        return value / 100;
      case "kilometer":
        return value / 100000;
    }
  }

  function convMTo(unit2, value) {
    switch (unit2) {
      case "milimeter":
        return value * 1000;
      case "centimeter":
        return value * 100;
      case "meter":
        return value;
      case "kilometer":
        return value / 1000;
    }
  }

  function convKmTo(unit2, value) {
    switch (unit2) {
      case "milimeter":
        return value * 1000000;
      case "centimeter":
        return value * 100000;
      case "meter":
        return value * 1000;
      case "kilometer":
        return value;
    }
  }

  //Output
  let newVal = `${inputVal} ${unit1}('s) is equal to ${result} ${unit2}('s)`;
  document.getElementById("answer").innerHTML = newVal;

  document.getElementById("image").innerHTML =
    '<img width="500px" src="converter-picture.jpg">';
}
