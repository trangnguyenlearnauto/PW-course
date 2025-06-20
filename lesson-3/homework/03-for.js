//1
let arr = [];
for (let i = 1; i < 100; i++) {
    arr.push(i);
}
let sum = 0;
arr.forEach((s) => {
    sum = sum + s;
})
console.log(sum);

//2
let arr2 = [];
for (let i = 1; i <= 99; i++) {
    if (i % 2 != 0) {
        arr2.push(i);
    }
}
console.log(arr2);

//3
//4
let revene = [];

// For ... in
//1
const student = { name: "alex", score: 85 };
for(let key in student){
    console.log(key + "=" +student[key]);
}

//2