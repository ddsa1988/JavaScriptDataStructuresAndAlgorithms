"use strict";

{
    function printNumber(number) {
        if (typeof number !== "number") {
            throw new TypeError("Function argument mus be a number!");
        }

        console.log(number);

        return number > 0 ? printNumber(--number) : 0;
    }

    printNumber(5);
}

console.log();

{
    const factorial = (number) => {
        if (typeof number !== "number") {
            throw new TypeError("Function argument mus be a number!");
        }
        if (number <= 1) return 1;

        return number * factorial(number - 1);
    };

    console.log(factorial(4));
    console.log(factorial(7));
}
