//Selection Sort

let arr = [64, 25, 12, 22, 11];
let n = arr.length;

let sort = (arr,n)=>{
    for(let i =0;i<n-1;i++){
        let min_element = i;
        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[min_element]){
                min_element = j;
            }
        }
        if(min_element!=i){
            let temp = arr[i];
            arr[i] = arr[min_element];
            arr[min_element] = temp;
        }
    }
    console.log(arr);
}

sort(arr,n);
