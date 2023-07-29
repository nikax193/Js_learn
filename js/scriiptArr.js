const arr = [10, 2, 13, 4, 50];
arr.sort(compareNum);
console.log(arr)

function compareNum(a, b) {
    return a - b;
}

// arr[99] = 0
// console.log(arr.length)
// console.log(arr)

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} into arry ${arr}`);
// });

// arr.pop();
// arr.push(6)

// console.log(arr)

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// for (let value of arr) {
//     console.log(value)
// }

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '))

// const arry = [1, 2, 3, 4];
// arry.shift(1);
// // arry.unshift(0);

// console.log(arry);