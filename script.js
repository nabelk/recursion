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
