"use strict";

function printNumber(number) {
    if (typeof number !== "number") {
        throw new TypeError("Function argument mus be a number!");
    }

    console.log(number);

    return number > 0 ? printNumber(--number) : 0;
}

printNumber(5);
