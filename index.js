document.addEventListener('DOMContentLoaded', function () {
    let ulList = document.querySelector('.list');
    let newElement = '';

    function addText(text) {
        let newElements = document.createElement('li');
        newElement = newElements;
        newElement.classList.add('list__item');
        newElement.append(text);
        return newElement;
    }

    function removeButton() {
        let button = document.createElement('button');
        button.classList.add("button", "button__remove");
        newElement.append(button)
        return newElement;
    }

    function render(text) {
        ulList.insertAdjacentElement('beforeEnd', addText(text), removeButton());
    }

    render('task 1');
    render('task 2');
    render('task 3');
    render('task 4');
    
});