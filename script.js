const buttons = document.querySelectorAll('.number');

function add(a,b) {
    return a + b;
};

function subtract(a,b) {
    return a -b;
};

function multiply(a,b) {
    return a * b;
};

function divide(a,b) {
    return a / b;
};

function operate(operator, a, b) {
    return operator(a,b);
};

function updateDisplay() {
    const display = document.querySelector(".display");
    
    console.log(buttons);

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            display.textContent += button.id;
            console.log(button);
        });
    });
};

updateDisplay();