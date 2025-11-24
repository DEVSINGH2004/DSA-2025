// Linear Search

let arr = [23,43,65,56,76,89,100,102,1,3];
let target = 89;
let flag = 0;

arr.forEach((i)=>{
   
    if(i === target){
        console.log("Element " + target + " found at index " + i);
        flag++;
    }
})

if(flag === 0){
    console.log("Element not found");
}