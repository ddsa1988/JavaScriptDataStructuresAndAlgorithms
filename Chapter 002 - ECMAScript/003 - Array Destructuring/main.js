"use strict";

{
    const [x, y] = ["a", "b"];

    console.log(x, y);
}

{
    let [x, y] = ["a", "b"];

    [x, y] = [y, x];

    console.log(x, y);
}

console.log();

{
    const x = "a";
    const y = "b";

    console.log(x, y);
}

{
    let x = "a";
    let y = "b";

    const temp = x;
    x = y;
    y = temp;

    console.log(x, y);
}
