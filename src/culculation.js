export function calculate(firstItem, secondItem, operation) {
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