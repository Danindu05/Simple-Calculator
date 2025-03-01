function appendToDisplay(value) {
    let display = document.getElementById("display");
    if (value === '()') {
        if (display.value.includes('(') && !display.value.includes(')')) {
            display.value += ')';
        } else {
            display.value += '(';
        }
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculateResult() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function toggleSign() {
    let display = document.getElementById("display");
    if (display.value) {
        display.value = display.value.startsWith('-') ? display.value.slice(1) : '-' + display.value;
    }
}
