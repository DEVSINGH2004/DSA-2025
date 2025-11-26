// Reverse a string

let s = "DEV SINGH"
console.log(s.split("").reverse().join(""));

//Check Palindrome
let s2 = "NaMaN";
let s3 = s2.split("").reverse().join("");
console.log(s2 === s3);

//TOGGLE CHARS IN A TRING

let i=0;
let s4 = "";
while(i<s2.length){
    if(s2[i] === s2[i].toUpperCase()){
        s4 +=  s2[i].toLowerCase();
    }
    else{
        s4 += s2[i].toUpperCase();
    }

    i++;
}
console.log(s4);

//Count prefix in array of words

let arr = ["pay", "paint", "painter","artist","ghost"];
let pre = "pa";
let count = 0;
arr.forEach(function(word){
    if(word.startsWith(pre)){
        count++;
    }
})
console.log(count);

//Capitalize first and last letter of each word in a string

let sentence = "hello world kk ho";
let words = sentence.split(" ");
let ans = ""
words.forEach((word)=>{
    let first = word.charAt(0).toUpperCase();
    let mid = word.substring(1,word.length-1);
    let last = word.charAt(word.length-1).toUpperCase();
    ans += (first+mid+last)+" ";
})
console.log(ans);

//count freq of each word 

let arr2 = new Array(128).fill(0);
for(let i=0;i<sentence.length-1;i++){
    let code = sentence.charCodeAt(i);
    arr2[code]++;
}

for(let i=0;i<arr2.length-1;i++){
    if(arr2[i]>0){
        console.log(String.fromCharCode(i)+"->"+arr2[i]);
    }
}

// check for anagrams in string

let str1 = "listen";
let str2 = "silent";
let arr3 = new Array(128).fill(0);
for(let i=0;i<str1.length-1;i++){
    console.log(str1[i]);
}

for(let i=0;i<str1.length;i++){
    let code = str1.charCodeAt(i);
    arr3[code]++;
}

for(let i=0;i<str2.length;i++){
    let code = str2.charCodeAt(i);
    arr3[code]--;
}

let flag = 0;

for(let i=0;i<arr3.length-1;i++){
    if(arr3[i]>0 || arr3[i]<0){
        flag = 1;
    }
}

if(flag === 1){
    console.log("Not Anagram");
} else {
    console.log("Anagram");
}

//MAXIMUM NO. OF WORDS FOUND IN A STRING

let arr_sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];
let max_len = 0;
arr_sentences.forEach((sen)=>{
    if(sen.split(" ").length > max_len){
        max_len = sen.split(" ").length;
    }
    
})

console.log(max_len);

//SORT THE WORDS IN A STRING


//predefined approach
let str = "DEV HAS A BRIGHT FUTURE";
str = str.split(" ").sort().join(" ");
console.log(str);

//custom approach - bubble sort

let split_str = str.split(" ");

for(let i=0;i<split_str.length;i++){
    for(let j=0;j<split_str.length-i-1;j++){
        if(split_str[j]>split_str[j+1]){
            let temp = split_str[j];
            split_str[j] = split_str[j+1];
            split_str[j+1] = temp;
        }
}
}
 str = split_str.join(" ");
 console.log(str);









