// set visualization to display the numbers
var display = 0;

// the counter will increase by 1 digit
function incrementNumber() {
    display = display + 1;
    updateValue()
}

// the counter will decrease by 1 digit
function decrementNumber() {
    display = display - 1;
    updateValue()
}

// the counter return to 0
function resetNumber() {
    display = 0;
    updateValue()
}

function updateValue() {
    let counterElement = document.getElementById("counter-display");
    counterElement.innerText = display;
}


