//Binary Search - works on sorted array / data

let arr = [1,10,12,34,46];
let target = 46;
let si = 0;
let ei = arr.length - 1;
console.log("Si is " + si);
console.log("Ei is " + ei);
let flag = 0;

while (si <= ei) {
    let mid = Math.floor((si + ei) / 2);
    console.log("Mid is " + mid);
    if (arr[mid] === target) {
        console.log("Element found at index " + mid);
        flag = 1;
        break;
    } else if (arr[mid] > target) {
        ei = mid - 1;
    } else {
        si = mid + 1;
    }
}

if (flag === 0) {
    console.log("Element not found or not present in array");
}


