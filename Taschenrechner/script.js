let displayvalue = "";

/**
 * Appends a given value to the current display value and updates the display element.
 *
 * @param {string} value - The value to append to the display.
 */
function appendToDisplay(value) {
    displayvalue += value;
    document.getElementById('display').value = displayvalue;
}
function clearDisplay() {
    displayvalue = "";
    document.getElementById('display').value = "";
}
function calculate() {
    try{
        const result = eval(displayvalue);
        document.getElementById('display').value = result;
        displayvalue = String(result);
    
    }catch (error) {
            document.getElementById('display').value = 'Error';
    }
}