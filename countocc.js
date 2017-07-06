let arr = ['a','a','b','c','d','c'];
let counts = {};

for(let i = 0; i< arr.length; i++) {
    let char = arr[i];
    counts[char] = counts[char] ? counts[char]+1 : 1;
}
console.log(counts);
