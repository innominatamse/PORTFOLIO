document.addEventListener('DOMContentLoaded', function () {
    let ulList = document.querySelector('.list');
    let inputValue = document.querySelector('.input-t');
    let newElement = '';

    //    Add task
    function addText(text) {
        let newElements = document.createElement('li');
        newElement = newElements;
        newElement.classList.add('list__item');
        newElement.append(text);
        return newElement;
    }

    // Add button remove and event remove element from DOM
    function removeButton() {
        let button = document.createElement('button');
        button.classList.add("button", "button__remove");
        newElement.append(button);

        button.addEventListener('click', function (event) {
            let {
                target
            } = event;
            target.parentElement.remove();
        });

        return newElement;
    }

    // Element rendering in DOM
    function render(position = 'afterbegin', result) {
        inputValue.addEventListener('keypress', function (event) {
            if (event.key !== 'Enter') {
                return;
            } else if (event.key == 'Enter' && inputValue.value.length == 0) {
                return;
            }
            ulList.insertAdjacentElement(position, addText(inputValue.value), removeButton());
            inputValue.value = null;
        });
    };
    render();

    // Transfer the task to the status completed
    ulList.addEventListener('click', function (event) {
        event.preventDefault();
        let {
            target
        } = event;
        if (!target.classList.contains('list__item')) {
            return
        };
        
        target.classList.add('list__item_completed');
    });

});