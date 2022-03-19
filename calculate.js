let displayInput = document.querySelector('input');
let firstNumber = null;
let operator = null;
let result = 0;
let isClearDisplay = false;

let buttons = document.querySelector('.calculator__list');

function calculate(firstNumber, SecondNumber, operation) {
    switch (operation) {
        case 'division':
            return firstNumber / SecondNumber;
        case 'multiplication':
            return firstNumber * SecondNumber;
        case 'subtraction':
            return firstNumber - SecondNumber;
        case 'addition':
            return firstNumber + SecondNumber;
    }
}

buttons.addEventListener('click', function (event) {
    let {
        target
    } = event;

    if (!target.dataset.number) {
        return;
    }
    if (isClearDisplay) {
        firstNumber = displayInput.value;
        displayInput.value = null;
        isClearDisplay = false;
        return;
    }
    displayInput.value += target.dataset.number;
});

buttons.addEventListener('click', function (event) {
    let {
        target
    } = event;

    if (!target.dataset.operator) {
        return
    }
    isClearDisplay = true;
    if (target.dataset.operator == "equals") {

        let firstArgument = Number(firstNumber);
        let SecondArgument = displayInput.valueAsNumber;
        let operators = operator;

        result = calculate(firstArgument, SecondArgument, operators);
        displayInput.value = result;
    }
    result = null;

    operator = target.dataset.operator;
});