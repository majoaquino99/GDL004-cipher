function changeTitle() {
  document.getElementById("headerOne").innerHTML = "Cipher";
}

function myFunction() {
  let value = document.getElementById("textAreaOne").value;

  //document.getElementById("textAreaTwo").value=value;//

  let valueUpperCase = value.toUpperCase();

  //document.getElementById("textAreaTwo").value = valueUpperCase;

  let shiftingValue = parseInt(document.getElementById("shiftRegulator").value);

  let result = window.cipher.encode(shiftingValue, valueUpperCase);

  document.getElementById("textAreaTwo").value = result;
}

function secondFunction() {
  let value = document.getElementById("textAreaTwo").value;

  //document.getElementById("textAreaTwo").value=value;//

  let valueUpperCase = value.toUpperCase();

  //document.getElementById("textAreaTwo").value = valueUpperCase;

  let shiftingValue = parseInt(document.getElementById("shiftRegulator").value);

  let result = window.cipher.decode(shiftingValue, valueUpperCase);

  document.getElementById("textAreaTwo").value = result;
}

function eraseTextAreaOne() {
  document.getElementById("textAreaOne").value = "";
  document.getElementById("textAreaTwo").value = "";
}
function copy() {
  let textAreaOne = document.getElementById("textAreaTwo");
  textAreaOne.select();
  document.execCommand("copy");
}

function showMoreInfo() {
  document.getElementById("oculto1").style.visibility = "visible"("document.");
}
