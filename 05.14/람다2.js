let arr = [1,255, 4, 100, 9, 8, 45, 21, 17];
// arr.forEach(
//     (item, i) => {
//         console.log(item, i);
//     }
// );

// let arr2 = arr.map((item, i) => item + i);
// console.log(arr2);


arr = [
    [1,2,3],
    [3,4,5],
    [10,20,30,40],
    [50,60,70,80,90,100]
]

// arr.forEach((item, idx) => {
//     item.forEach((item, idx) => {
//         console.log(item, idx);
//     })
// })

// result = arr.find(x => x % 2 == 0);
// console.log(result);

// result = arr.filter(x => x % 2 == 0);
// console.log(result);

// let sum = arr.reduce((prev, item) => {
//     console.log(prev, item);
//     return prev + item;
// })

// console.log(sum);

//console.log(arr.flat());


let sentence = "green blue magenta cyan yellow gray black pink brown";

let words = sentence.split(" ");

words.filter(x => x.length >= 5).forEach(x => console.log(x)); 
console.log("-------------------------------------");
words.forEach(x => console.log(x.toUpperCase()));
console.log("-------------------------------------");
words.filter(x => x.length < 5).forEach(x => console.log(x.toUpperCase()));
console.log("-------------------------------------");
words.filter(x => x.includes("r")).forEach(x => console.log(x));
console.log("-------------------------------------");


