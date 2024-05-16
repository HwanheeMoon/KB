let a = 50;
let b = 60;

//console.log(`a = ${a}, b = ${b}, res = ${a + b}`);

scores = [
    {name : "홍길동", "a" : 90, "b" : 99, "c" : 78},
    {name : "홍길동2", "a" : 80, "b" : 52, "c" : 73},
    {name : "홍길동3", "a" : 82, "b" : 43, "c" : 87},
    {name : "홍길동4", "a" : 54, "b" : 59, "c" : 54},
    {name : "홍길동5", "a" : 12, "b" : 53, "c" : 56},
    {name : "홍길동6", "a" : 56, "b" : 63, "c" : 56},
    {name : "홍길동7", "a" : 99, "b" : 87, "c" : 99}
]



function output() {
    scores.forEach(s => {
        console.log(s);
    });
}


function process() {
    scores.forEach(s => console.log(s));

    tmp = scores.toSorted((a, b) => (b.a) - (a.a));
    console.log("--------------------------------------");
    tmp.forEach(s => console.log(s));
}

process();

function search(limit = 50) {
    scores.filter(s => (s.avg >= limit))
    .forEach(s => console.log(s));
}


function compare(a, b) {

}
