let arr = [1,2,3,4,5];


let arr1 = new Array(2); // it declares array but not initialize
arr1[0] = 10;
arr1[1] = 20;
arr1[2] = 30;
console.log(arr1);

//Sum of Array Elements
let sum = 0;
for(let i=0;i<arr.length;i++){
    sum += arr[i];
}

console.log(sum);

// Max elem in  Array

let max = arr[0];
for(let i=1;i<arr.length;i++){
    if(arr[i]>max){
        max = arr[i];
    }
}
console.log(max);


//Second largest elem in array

let fl = arr[0];
let sl = 0;
for(let i=1;i<arr.length;i++){
    if(arr[i]>fl){
        sl = fl;
        fl = arr[i];
    } else if(arr[i]<fl && arr[i]>sl){
        sl = arr[i];
    }
}

console.log(sl);

// Reverse an Array - with extra space approach

let arr2 = [23,45,67,87,11];
let n = arr2.length;
let arr3 = new Array(n);
let j=0;
for(let i=n-1;i>=0;i--){
    arr3[j] = arr2[i];
    j++;
}

console.log(arr3);

// Reverse an Array - without extra space approach

let si=0;
let ei = arr2.length-1;
while(si<ei){
    let temp = arr2[si];
    arr2[si] = arr2[ei];
    arr2[ei] = temp;
    si++;
    ei--;
}

console.log("Reversed Array is without extra space : ",arr2);

// All zeroes on left and ones on right 

let arr4 = [0,1,0,1,1,0];
let j1 = 0;
for(let i=0;i<arr4.length;i++){
    if(arr4[i] === 0){
        let temp = arr4[i];
        arr4[i] = arr4[j1];
        arr4[j1] = temp;
        j1++;
    }
}

console.log("All zeroes on left and ones on right : ",arr4);

// Move all negative elements to left and positive to right

let arr5 = [23,-32,45,-6,78,99,100];
let j2 = 0;
for(let i=0;i<arr5.length;i++){
    if(arr5[i]<0){
        let temp = arr5[i];
        arr5[i] = arr5[j2];
        arr5[j2] = temp;
        j2++;
    }
}

console.log("Move all negative elements to left and positive to right : ",arr5);




