window.cipher = {
  encode: function(shiftingValue, valueUpperCase) {
    let result = "";

    // through each character in the textarea
    for (let i = 0; i < valueUpperCase.length; i++) {
      //get the character ASCII of each letter

      let chASCII = valueUpperCase.charCodeAt(i);
      let characters = ((chASCII - 65 + parseInt(shiftingValue)) % 26) + 65;

      let newCharacters = String.fromCharCode(characters);

      if (chASCII == 32) {
        result += " ";
      } else {
        result += newCharacters;
      }
    }

    return result;
  },
  decode: function(shiftingValue, valueUpperCase) {
    let secondResult = "";

    // through each character in the textarea
    for (let i = 0; i < valueUpperCase.length; i++) {
      //get the character ASCII of each letter

      let chASCII = valueUpperCase.charCodeAt(i);
      let characters = ((chASCII + 65 - parseInt(shiftingValue)) % 26) + 65;

      let newCharacters = String.fromCharCode(characters);

      if (chASCII == 32) {
        secondResult += " ";
      } else {
        secondResult += newCharacters;
      }
    }

    return secondResult;
  }
};
