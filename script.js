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
    console.log('enter');
    const resultArr = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftarr.length && rightIndex < rightarr.length) {
        if (leftarr[leftIndex] < rightarr[rightIndex]) {
            resultArr.push(leftarr[leftIndex]);
            leftIndex++;
        } else {
            resultArr.push(rightarr[rightIndex]);
            rightIndex++;
        }
    }

    if (leftarr[leftIndex]) {
        const getOtherEle = leftarr.slice(leftIndex);
        resultArr.push(...getOtherEle);
    } else {
        const getOtherEle = rightarr.slice(rightIndex);
        resultArr.push(...getOtherEle);
    }

    return resultArr;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const findCenter = Math.floor(arr.length / 2);
    const leftSide = arr.slice(0, findCenter);
    const rightSide = arr.slice(findCenter);

    return mergeTwoArray(mergeSort(leftSide), mergeSort(rightSide));
}
console.log(mergeSort([7, 2, 4, 1, 3, 5, 6, 8, 9, 10]));
