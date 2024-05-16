
let arr = [1, 2, 3];

let arr2 = [...arr, 4, 5];

console.log(arr2);
console.log(...arr2);

function func(...arr) {
    console.log(arr);
}

func(1,2);
func(1,2,3,4,5);

let a1 = [1,2,3];
let a2 = [4,5,6,7];
let c1 = [...a1, ...a2];
console.log(c1);

let c2 = c1.concat([10, 20, 30]);
console.log(c2);

let persons = {"name" : "홍길동","age" :23};
let {name, age} = persons;
console.log(name, age);

function func2(person) {
    const {name, age, phone} = person;
    console.log(name);
    console.log(age);
    console.log(phone);
}

func2({"name" : "mike", age : 22, "phone" : "234234324"});