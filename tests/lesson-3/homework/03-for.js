const { urlToHttpOptions } = require("url");

//1
let arr = [];
for (let i = 1; i <= 100; i++) {
    arr.push(i);
}
let sum = 0;
arr.forEach((s) => {
    sum = sum + s;
})
console.log(sum);

//2 In bảng cửu chương từ 2 đến 9.
let start = 2;
let end = 9;
function bangCuuChuong(){
    for(let i =2; i <= 9; i ++){
        console.log(`bảng cửu chương ${i}:`);
        for(let j = 1; j <=10; j++) {
            console.log(`${i} x ${j}= ${i*j}`);
        }
        console.log("")
    }
}
bangCuuChuong();

//3
let arr2 = [];
for (let i = 1; i < 100; i++) {
    if (i % 2 != 0) {
        arr2.push(i);
    }
}
console.log(arr2);


//4
// Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và in ra tổng doanh thu. Biết cấu trúc object của mảng doanh thu như sau:
// {“month”: 2, “total”: 100}
let revenueArray = [
    {month: 1, total: 100},
    {month: 2, total: 150},
    {month: 3, total: 200},
    {month: 4, total: 300},
    {month: 5, total: 200},
    {month: 6, total: 100},
    {month: 7, total: 90},
    {month: 8, total: 500},
    {month: 9, total: 400},
    {month: 10, total: 200},
    {month: 11, total: 300},
    {month: 12, total: 100},
];
let totalRevenue = 0;
for (let i = 0; i < revenueArray.length; i++){
    totalRevenue = totalRevenue + revenueArray[i].total;
}
console.log(`tổng doanh thu 12 tháng là: ${totalRevenue}`)

