"use strict";

{
    const arr = [1, 2, 3];

    console.log(arr);
    console.log(...arr);
}

console.log();

{
    function sum(x, y, z) {
        console.log(arguments);

        return x, y, z;
    }

    const params = [10, 20, 30];

    console.log(sum(...params));
    console.log(sum.apply(undefined, params));
}
