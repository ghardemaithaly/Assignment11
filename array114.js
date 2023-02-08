/* 
Write a JavaScript program to take an array as input from the user and:
a) Store all duplicate elements in a separate array
b) Remove the duplicate elements from the original array
Sample Input:
[ 1, 2, 3, 2, 3, 4, 5 ]
Output:
Duplicate Elements = [ 2, 3 ]
Array without duplicate elements = [ 1, 2, 3, 4, 5 ]
*/

function removeDuplicates(arr) {
    let duplicateElements = [];
    let withoutDuplicates = [];

    for (let i = 0; i < arr.length; i++) {
        if (!withoutDuplicates.includes(arr[i])) {
            withoutDuplicates.push(arr[i]);
        } else {
            duplicateElements.push(arr[i]);
        }
    }

    console.log("Duplicate Elements = " + duplicateElements);
    console.log("Array without duplicate elements = " + withoutDuplicates);
}

let arr = [1, 2, 3, 2, 3, 4, 5];
removeDuplicates(arr);

