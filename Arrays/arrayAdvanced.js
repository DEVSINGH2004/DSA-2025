// Rotate array by 1 in left

let arr = [1,2,3,4,5];
let n = arr.length;
let key = arr[0];
for(let i=1;i<n;i++){
    arr[i-1] = arr[i];
}
arr[n-1] = key;
console.log(arr);

// Rotate array by 1 in right
let arr2 = [1,2,3,4,5];
let n2 = arr2.length;
key = arr2[n2-1];
for(let i=n2-2;i>=0;i--){
    arr2[i+1] = arr2[i];
}
arr2[0] = key;
console.log(arr2);

//rotate array by k in left

let arr3 = [1,2,3,4,5];
let n3 = arr3.length;
let k = 2;
k = k%n3; // to handle the case if k is greater than n
while(k>0){
    let key2 = arr3[0];
for(let i=1;i<n3;i++){
    arr3[i-1] = arr3[i];
}
arr3[n3-1] = key2;
k--;
}

console.log("rotate array by k in left",arr3);

//subarray whose sum is equal to given number

let arr4 = [1,2,3,7,5];
let n4 = arr4.length;
let sum = 12;
let count = 0;
for(let i=0;i<n4;i++){
    let sum2 = 0
    for(let j=i;j<n4;j++){
        sum2 += arr4[j];
        if(sum2==sum){
            count++;
        }
    }
}

console.log(count);



