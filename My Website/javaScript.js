const DISPLAY = document.getElementById('display');
let calculated = false;
function appendToDisplay(Input) {
    if(calculated == true) {
        DISPLAY.value = "";
        calculated = false;
    }
    DISPLAY.value += Input;
}

function clearDisplay() {
    DISPLAY.value = "";
}

function calculate() {
    try{
        DISPLAY.value = eval(DISPLAY.value);
    }
    catch(error) {
        DISPLAY.value = "Error"
    }
    calculated = true;
}