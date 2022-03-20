let input = document.querySelector('input');
let calculatorItem = document.querySelector('.calculator__list');
let firstNumber = [];
let mainOperator = null;
let result = [];
let inputClear = false;

// function calculate
function calculate(firstItem, secondItem, operation) {
    switch (operation) {
        case 'division':
            return firstItem / secondItem;
        case 'multiplication':
            return firstItem * secondItem;
        case 'subtraction':
            return firstItem - secondItem;
        case 'addition':
            return firstItem + secondItem;

    }
};
// digit display function
let display = function (event) {
    let {
        target
    } = event;
    if (!target.dataset.number) {
        return;
    };

    if (inputClear) {
        firstNumber.push(input.valueAsNumber);
        input.value = null;
        inputClear = false;
    };

    input.value += target.dataset.number;
};

// function to display DOM result of operations
calculatorItem.addEventListener('click', display);
calculatorItem.addEventListener('click', function (event) {
    let {
        target
    } = event;
    if (!target.dataset.operator) {
        return;
    };
    inputClear = true;
    mainOperator = target.dataset.operator;

    if (firstNumber.length == 2) {
        result = firstNumber.reduce(function (firstItem, secondItem) {
            let cacl = calculate(+firstItem, +secondItem, mainOperator);
            firstNumber.splice(0);
            firstNumber.push(cacl);
            mainOperator = null;
            return;
        });
    } else {

    }

});
calculatorItem.addEventListener('click', function (event) {
    let {
        target
    } = event;
    if (target.dataset.result !== "equals") {
        return;
    }
    if (target.dataset.result == "equals") {
        if (firstNumber.length == 2) {
            firstNumber.reduce(function (firstItem, secondItem) {
                let cacl = calculate(+firstItem, +secondItem, mainOperator);
                // input.value = cacl;
                firstNumber.splice(0);
                firstNumber.push(cacl);
                return;

            });
        }
        let firstItem = +firstNumber[0];
        let secondItem = input.valueAsNumber;

        let cacl = calculate(firstItem, secondItem, mainOperator);
        firstNumber.splice(0);
        input.value = cacl;
        mainOperator = null;
    }


})