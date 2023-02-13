"use strict";

{
    function lowerIndex(arr) {
        let lowerNumber = arr[0];
        let lowerNumberIndex = 0;

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < lowerNumber) {
                lowerNumber = arr[i];
                lowerNumberIndex = i;
            }
        }

        return lowerNumberIndex;
    }

    function sortArray(arr) {
        const copyArr = arr.slice();
        const sortedArray = new Array();

        while (copyArr.length > 0) {
            const lowerNumberIndex = lowerIndex(copyArr);
            sortedArray.push(copyArr.splice(lowerNumberIndex, 1)[0]);
        }

        return sortedArray;
    }

    const arr = [5, 3, 6, 2, 10, 1];

    console.log(sortArray(arr));
}

console.log();

{
    function sortArray(arr) {
        const copyArr = arr.slice();
        const sortedArray = new Array();

        while (sortedArray.length < arr.length) {
            const lowerNumber = Math.min(...copyArr);
            sortedArray.push(
                copyArr.splice(copyArr.indexOf(lowerNumber), 1)[0]
            );
        }

        return sortedArray;
    }

    const arr = [5, 3, 6, 2, 10, 1];

    console.log(sortArray(arr));
}
