function filterActiveTask(value) {
    value.forEach(function (element) {
        if (element.classList.contains('list__item_completed')) {
            element.style.display = 'none';
        } else {
            element.style.display = 'flex';
        };
    });
};

function filterAllTask(value) {
    value.forEach(function (element) {
        if (element.classList.contains('list__item')) {
            element.style.display = 'flex';
        };
    });
};

function filterCompletedTask(value) {
    value.forEach(function (element) {
        if (!element.classList.contains('list__item_completed')) {
            element.style.display = 'none';
        } else {
            element.style.display = 'flex';
        };
    });
};

export {
    filterActiveTask,
    filterAllTask,
    filterCompletedTask
};