/*
Write a JavaScript program to flatten the array, ie, turns a deep array into a plain
array.
Note: Do not use array.flat();
Sample Input:
[ 1, 2, [ 3, 4, [ 5 ] ] ]
Output:
[ 1, 2, 3, 4, 5 ]
*/

function flattenArray(arr) {
    let flattened = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flattened = flattened.concat(flattenArray(arr[i]));
        } else {
            flattened.push(arr[i]);
        }
    }

    return flattened;
}

let arr = [1, 2, [3, 4, [5]]];
console.log(flattenArray(arr));
