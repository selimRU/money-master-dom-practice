function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseInt(inputFieldValueString);
    return inputFieldValue;
}

function getInnerText(textId, amount) {
    const textElement = document.getElementById(textId);
    const textElementValue = textElement.innerText;
    textElement.innerText = amount;
   return textElementValue ;
}