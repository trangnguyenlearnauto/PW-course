//1 Tạo mảng chứa các kí tự nghịch đảo từ một chuỗi đã cho. Ví dụ với chuỗi ”Playwright” thì mảng kết quả sẽ là [“t”, “h”, “g”, “i”, “r”, “w”,“y”, “a”, “l”, “P”] => dua vao bai tap for
// cách dùng vòng lặp for
let string = ["P", "l", "a", "y", "w", "r", "i", "g", "h", "t"]
let newStr = [];
for (let i = string.length - 1; i >= 0; i--) {// có 10 phần tử, nhưng index bắt đầu từ 0 nên phải -1
    newStr.push(string[i]);
}
console.log(newStr);

// cách dùng vòn lặp for of
let revert = "";
for (let revertStr of string) {
    revert = revertStr + revert; // thên ký tự duyệt sau vào trước
}
console.log(revert);

//2 Lọc ra tất cả các phần tử duy nhất trong một mảng. Ví dụ với mảng [1, 2, 3, 1, 2, 4, 5] thì các phần tử duy nhất (xuất hiện 1 lần) là: [3, 4, 5]
let arr = [1, 1, 2, 2, 6, 6, 8, 8, 8, 8];
let newNumber = [];
banDau = null;
// for (let i = 0; i < number.length; i++){ // chạy qua tất cả các giá trị trong array
//     if (number[i] !== number[i-1]){ // so sánh giá trị đầu tiên với giá trị tiếp theo nếu khác nhau thì thêm vào newArray
//         newNumber.push(number[i])
//     }
//     else {
//         console.log("duplicate");
//     }
// }
// console.log(newNumber);

for (let A of arr) {
    if (A !== banDau) {
        newNumber.push(A);
    }
    banDau = A;//sau mỗi lần lặp thì gắn a vào prev để so sánh tiếp với giá trị tiếp theo
}
console.log(newNumber);
// => sai yêu cầu, yêu cầu là lấy ra các số unique, nhưng mình lại loại ra các số bị trùng

// sửa lại
let arr1 = [1, 1, 2, 2, 6, 6, 8, 8, 8, 8, 9, 19];
function findUiniqueNumber(arr1) {
    let result = [];// tạo mảng để chứa các phần tử unique
    for (let num of arr1) {
        let count = 0; // kiểm tra lần xuất hiện của phần tử đó trong mảng
        for (let x of arr1) {
            if (num === x) {
                count++;
            }
        }
        // kiểm tra nếu phần tử chỉ xuất hiện một lần (count -1) thì push vào mảng 
        if (count === 1) {
            result.push(num);
        }
    }
    return result;
}
let Uiniqueelement = findUiniqueNumber(arr1);
console.log(Uiniqueelement);
/*
- num = 1, count = 0
- x =1 -> 
*/