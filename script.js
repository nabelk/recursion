// Fibonacci using iteration

function fibs(input) {
    const arr = [];
    let [a, b, c] = [0, 1, null];
    arr.push(a, b);

    for (let i = 2; i < input; i++) {
        c = a + b;
        a = b;
        b = c;
        arr.push(b);
    }

    return arr;
}

console.log(fibs(8));

// Fibonacci using recursion

function fibsRec(input, arr = [0, 1]) {
    let num = input;
    if (arr.length === 2) num -= 2;
    if (num > 0) {
        arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
        return fibsRec(num - 1, arr);
    }
    return arr;
}

console.log(fibsRec(8));

// Recursice merge sort

function mergeTwoArray(leftarr, rightarr) {
    const resultArr = [];

    while (leftarr.length && rightarr.length) {
        if (leftarr[0] < rightarr[0]) {
            resultArr.push(leftarr.shift());
        } else {
            resultArr.push(rightarr.shift());
        }
    }

    return [...resultArr, ...leftarr, ...rightarr];
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const findCenter = Math.floor(arr.length / 2);
    const leftSide = arr.slice(0, findCenter);
    const rightSide = arr.slice(findCenter);

    return mergeTwoArray(mergeSort(leftSide), mergeSort(rightSide));
}
console.log(mergeSort([7, 2, 4, 1, 3, 5, 6, 8, 9, 10]));
console.log(mergeSort([3, 2, 2, 1]));
