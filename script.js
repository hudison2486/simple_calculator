const display = document.querySelector(".display");

function appendToDisplay(v) {
    display.value += v;
}

function result(){
    try {
        const expression = display.value;
        const result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = "ERROR"
    }
}

function clearDisplay() {
    display.value = "";
}