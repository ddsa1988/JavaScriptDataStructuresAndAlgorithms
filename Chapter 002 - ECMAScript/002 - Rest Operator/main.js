"use strict";

{
    function restParameter(x, y, ...a) {
        console.log(arguments);

        return (x + y) * a.length;
    }

    console.log(restParameter(1, 2, "hello", true, 7));
}

console.log();

{
    function restParameter(x, y) {
        console.log(arguments);

        const a = Array.prototype.slice.call(arguments, 2);
        return (x + y) * a.length;
    }

    console.log(restParameter(1, 2, "hello", true, 7));
}
