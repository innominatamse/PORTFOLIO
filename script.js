document.addEventListener('DOMContentLoaded', function () {

    let buttton = document.querySelector('.calculator__list');
    let calculatorInput = document.querySelector('.calculator__input');
    let calculatorNumber = document.querySelectorAll('.calculator__item_number');

    console.log(calculatorInput.textContent)

    // function to clear the value
    function clear(value) {
        let clear = "0";
        value.textContent = " ";
        value.append(clear);
    };

    // adding/removing a module
    function module(value) {
        if (value.innerText > 0) {
            value.classList.toggle('calculator__input_minus');
        }
        return;
    };

    // calculate precent 
    function interestСalculation(value) {
        let result = value.textContent / 100;
        value.textContent = result;
    }

    function division() {
        console.log(buttton.textContent)
    }


    let mathOperations = (event) => {
        let {
            target
        } = event;
        let division = target.className == "division"
        //   console.log(target.className == "division")
        if (target.classList.contains('clear')) {
            clear(calculatorInput);
        } else if (target.classList.contains('module')) {
            module(calculatorInput)
        } else if (target.classList.contains('percent')) {
            interestСalculation(calculatorInput);
        } else if (division) {
         
        }
    };


    buttton.addEventListener('click', mathOperations);

});