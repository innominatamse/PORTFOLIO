let input = document.querySelector('input');
let calculatorItem = document.querySelector('.calculator__list');
let firstNumber = null;
let mainOperator = null;
let result = 0;
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
        firstNumber = input.valueAsNumber;
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
    if (!target.dataset.operator || target.dataset.operator == "equals") {
        return;
    }
    if (firstNumber) {
        let firstItems = Number(firstNumber);
        let secondItems = input.valueAsNumber;
        let operators = mainOperator;
        result = calculate(firstItems, secondItems, operators);
        // return;
    }
    inputClear = true;
    mainOperator = target.dataset.operator;

    console.log(mainOperator)

    // if (target.dataset.operator == "equals") {
    //     let firstItems = Number(firstNumber);
    //     let secondItems = input.valueAsNumber;
    //     let operators = mainOperator;
    //     result = calculate(firstItems, secondItems, operators);
    //     console.log(mainOperator);
    //     return;
    // };
});

calculatorItem.addEventListener('click', function (event) {
    let {
        target
    } = event;
    if (target.dataset.operator !== "equals") {
        return;
    }
    if (target.dataset.operator == "equals") {
        // inputClear = true;
        let firstItems = Number(firstNumber);
        let secondItems = input.valueAsNumber;
        let results = calculate(firstItems, secondItems, mainOperator);
        input.value = results;
    }

})