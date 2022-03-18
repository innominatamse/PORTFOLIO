import {
    filterActiveTask,
    filterAllTask,
    filterCompletedTask
} from "./filter.js";

document.addEventListener('DOMContentLoaded', function () {

    let ulList = document.querySelector('.list');
    let inputValue = document.querySelector('.input-t');
    let buttonsСondition = document.querySelectorAll('.button');
    let listItem = document.querySelectorAll('.list__item')
    let newElement = '';

    // create span elemnt 
    let spanElement = document.createElement('span');
    spanElement.classList.add('error');
    spanElement.textContent = "Enter a task";

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
            // console.log(event.key)
            if (event.key == 'Enter' && inputValue.value.length == 0) {
                inputValue.insertAdjacentElement('beforebegin', spanElement);
                return;
            } else if (event.key !== 'Enter') {
                spanElement.remove();
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

    // element filtering function
    function filterElement() {
        buttonsСondition.forEach(function (elem) {
            if (elem.dataset.filtertype == 'active') {
                elem.addEventListener('click', function () {
                    filterActiveTask(listItem);
                })
            } else if (elem.dataset.filtertype == 'all') {
                elem.addEventListener('click', function () {
                    listItem.forEach(function () {
                        filterAllTask(listItem);
                    });
                });
            } else if (elem.dataset.filtertype == 'completed') {
                elem.addEventListener('click', function () {
                    listItem.forEach(function () {
                        filterCompletedTask(listItem);

                    });
                });
            }
        })
    }
    filterElement();
});