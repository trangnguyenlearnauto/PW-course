//1 
// cách dùng vòng lặp for
let string = ["P", "l", "a", "y", "w", "r", "i", "g", "h", "t"]
let newStr = [];
for (let i = string.length - 1; i > 0; i--) {// có 10 phần tử, nhưng index bắt đầu từ 0 nên phải -1
    newStr.push(string[i]);
}
console.log(newStr);

// cách dùng vòn lặp for of
let revert = "";
for (let revertStr of string) {
    revert = revertStr + revert; // thên ký tự duyệt sau vào trước
}
console.log(revert);

//2
let number = [1, 1, 2, 2, 6, 6, 8, 8, 8, 8];
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

for (let a of number) {
    if (a !== banDau) {
        newNumber.push(a);
    }
    banDau = a;//sau mỗi lần lặp thì gắn a vào prev để so sánh tiếp với giá trị tiếp theo
}
console.log(newNumber);