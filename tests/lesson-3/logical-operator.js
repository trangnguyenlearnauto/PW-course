// && cả 2 vế đều đúng thì chạy lệnh
let a = true;
let b = false;
if (a && b) {
    console.log("run code");
}

b = true;
if (a && b) {
    console.log("run code");
}

//|| một trong 2 vế đúng thì chạy lệnh
if (a || b) {
    console.log("run code");
}
// ! đảo ngược giá trị của mệnh đề

const newA= !a
const newB= !!b
console.log(newA);
console.log(newB);