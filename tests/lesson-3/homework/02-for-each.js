//1 In ra tất cả các phần tử của một mảng. Ví dụ mảng [1, 2, 3] thì in ra
let array = [1, 2, 3, 4, 5];
array.forEach((value) => {
    console.log(value);
})

//2 Tính tổng, tìm giá trị lớn nhất và nhỏ nhất trong một mảng. Ví dụ mảng [1, 2,3] thì tổng sẽ là 6 (1+2+3) và giá trị lớn nhất là 3
let array2 = [10, 25, 13, 40, 65];
let sum = 0;
let min = array2[0]; // dùng để so sánh với index đầu tiên trong array
let max = array2[0];
array2.forEach((number) => {
    // console.log(number);
    sum = sum + number;
    if (number < min) { // chạy các phần tử trong array, so sánh với min (phần tử đầu tiên trong array)
        min = number; // nếu number < min, thì update min = number
        console.log(number, "giá trị nhỏ nhất");
    }
    else if (number > max) {
        max = number;
        console.log(number, "giá trị lớn nhất")
    }
    else {
        console.log("invalid number");
    }
    
})
console.log("tổng =", sum);
console.log("giá trị lớn nhất =", max);
console.log("giá trị nhỏ nhất =", min);


//3 Tạo một mảng mới từ một mảng đã cho, trong đó mỗi phần tử được nhân đôi. Ví dụ mảng [1, 2, 3] thì mảng mới sẽ là [2, 4, 6]
let array3 = [1, 2, 3, 4, 5];
let newArr = [];
array3.forEach((newNumber) => {
    // console.log(newNumber);
    newArr.push(newNumber * 2);

})
console.log(newArr);