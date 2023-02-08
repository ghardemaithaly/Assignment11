/* Write a JavaScript program to take 2 arrays from the user and check if the
number 4 exists in any of the arrays, or both of the arrays.
Sample Input 1:
[ 1, 2, 3, 4, 5 ]
[ 4, 6, 1, 8, 2 ]
Output:

4 in both arrays
Sample Input 2:
[ 1, 2, 3, 6, 5 ]
[ 4, 6, 1, 8, 2 ]
Output:
4 in array 2
Sample Input 3:
[ 1, 2, 3, 4, 5 ]
[ 5, 6, 1, 8, 2 ]
Output:
4 in array 1
*/

function check4(arr1, arr2) {
    if (arr1.includes(4) && arr2.includes(4)) {
        return "4 in both arrays";
    } else if (arr1.includes(4)) {
        return "4 in array 1";
    } else if (arr2.includes(4)) {
        return "4 in array 2";
    } else {
        return "4 not found in either array";
    }
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [5, 6, 1, 8, 2];
console.log(check4(arr1, arr2));