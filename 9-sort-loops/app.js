//сортируем по возрастанию
function sort(arr) {
    
    let changed;

    do {
        changed = false;
        for (let i = 0; i < arr.length - 1; i++) {

            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                changed = true;
            }
        }
    } while(changed);
    return arr;
}

const array = [1, 40, -5, 10, 0];
console.log(sort(array));