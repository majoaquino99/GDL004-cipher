function changeTitle() {
  document.getElementById("headerOne").innerHTML = "Cipher";
}

const buttonCipher = document.getElementById("Cipher");
const buttonDecipher = document.getElementById("Decipher");
const buttonCopy = document.getElementById("copyText");
const buttonClear = document.getElementById("clearText");
const iconMoreInfo = document.getElementById("moreInfo");

buttonCipher.addEventListener("click", functionCipher);
buttonDecipher.addEventListener("click", functionDecipher);
buttonCopy.addEventListener("click", copy);
buttonClear.addEventListener("click", clear);
iconMoreInfo.addEventListener("click", showMoreInfo);

function functionCipher() {
  let value = document.getElementById("textAreaOne").value;

  let valueUpperCase = value.toUpperCase();

  let shiftingValue = parseInt(document.getElementById("shiftRegulator").value);
  //if (shiftingValue == " ")
  let result = window.cipher.encode(shiftingValue, valueUpperCase);

  document.getElementById("textAreaTwo").value = result;
}

function functionDecipher() {
  let value = document.getElementById("textAreaTwo").value;

  let valueUpperCase = value.toUpperCase();

  let shiftingValue = parseInt(document.getElementById("shiftRegulator").value);

  let result = window.cipher.decode(shiftingValue, valueUpperCase);

  document.getElementById("textAreaTwo").value = result;
}

function clear() {
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
