"use strict";

function binarySearch(arr, item) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const half = Math.ceil((low + high) / 2);
        const guess = arr[half];

        if (guess === item) {
            return half;
        }
        if (guess > item) {
            high = half - 1;
        } else low = half + 1;
    }
    return null;
}

const myArray = [1, 3, 5, 7, 9];

console.log(binarySearch(myArray, 3));
console.log(binarySearch(myArray, 7));
console.log(binarySearch(myArray, -1));
