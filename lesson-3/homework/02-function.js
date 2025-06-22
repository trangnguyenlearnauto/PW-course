// //1Viết một hàm để tính chỉ số BMI (Body Mass Index) dựa trên chiều cao (mét) và cân
// nặng (kg) và trả về phân loại BMI (Thiếu cân, Bình thường, Thừa cân, Béo phì).
// Biết:
// Chiều cao được tính theo đơn vị mét (VD: 1.75m)
// Cân nặng tính theo kg
// Công thức tính BMI: cân nặng / (chiều cao*chiều cao)
// BMI < 18.5: Thiếu cân
// BMI < 25: Bình thường
// BMI < 30: Thừa cân
// BMI >= 30: Béo phì

/* tips: để đặt tên function
- cú pháp: verb + N
- Verb: get, calculate, isPrimeNumber, verifyN, completeOrder
- không nên đặt tên tắt quá
*/

let height = 150;
let weight = 45;
function getBMI(height, weight) {
    if (weight / height < 18.5) {
        return "thiếu cân";
    }
    else if (weight / (height * height) < 25) {
        return "bình thường";
    }
    else if (weight / (height * height) < 30) {
        return "thừa cân";
    }
    else {
        return "béo phì"
    }
}
const BMI = getBMI(height, weight); // có 2 cách có thể gắn biến, hoặc gắn biến vào function
console.log(BMI);
// cách 2
function calculateBMI(height, weight) {
    const BMI = weight / (height * height);
    if (BMI < 18.5) {
        return "thiếu cân";
    }
    else if (BMI < 25) {
        return "bình thường";
    }
    else if (BMI < 30) {
        return "thừa cân";
    }
    else {
        return "béo phì";
    }
}
const result = calculateBMI(height, weight);
console.log(result);

//2
// Viết một hàm để chuyển đổi nhiệt độ từ độ C sang độ F và ngược lại. Hàm sẽ nhận
// vào giá trị nhiệt độ và loại nhiệt độ ('C' hoặc 'F') và trả về nhiệt độ đã chuyển
// đổi.
// Biết công thức chuyển đổi:
// Từ độ C sang độ F: độ F = (độ C) * 9/5 + 32;
// Từ độ F sang độ C: (độ F - 32) * 5 / 9;

function getConvert(value, type) {
    if (type === '°C') {
        return value * 9 / 5 + 32;
    }
    else if (type === 'F') {
        return (value - 32) * 5 / 9
    }
    else {
        return "invalid value"
    }

}
const convert = getConvert(100, "F");
console.log(convert);

// cách 2
// let temperature = 100;
// let typeOftemperature = "F";
function changeOfTemperature(temperature, typeOftemperature) {
    if (typeOftemperature === 'C') {
        return temperature * 9 / 5 + 32;
    }
    if (temperature === 'F') {
        return (temperature - 32) * 5 / 9;
    }
}
const result2 = changeOfTemperature(100, "F")
console.log("restult2:", result2);

//3 Viết một hàm để lọc ra các số nguyên tố từ một mảng số đã cho.
// Biết:
// Số 0, số 1 không phải số nguyên tố.
// Các số nguyên tố là số chỉ chia hết cho 1 và chính nó

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12];
function filter(soNguyen) {
    arr.forEach((number) => {  // chạy qua các phần tử trong array, gọi là number, lấy number so sánh với điều kiện
        if (number === 0 || number === 1) {
            console.log(number, "không phải số nguyên tố");
        }
        else if (number % 1 === 0) {
            console.log(number, "số nguyên tố");
        }
        else if (number % number === 0) {
            console.log(number, "số nguyên tố");
        }
        else {
            console.log(number, "không phải số nguyên tố");
        }
    })
}
filter(arr);

// chữa lại
const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12];
function isPrimeNumber(number) {
    if (number <= 1) {
        return false; // kiểm tra số có <= 1 không, nếu là *số nguyên tố* thì return false
    }
    for (let i = 2; i <= Math.sqrt(number); i++) { // check tiếp những số > 1 có phải số nguyên tố hay không
        if (number % i === 0) {
            return false;
        }
    }
    /*
    - check xem number có chia hết cho số nào từ số 2 đến căn bậc 2 của số number đó không
    - number = 16 -> chỉ cần kiểm tra số từ 2 đếnc ăn bậc 2 của 16 = 4 -> 2,3,4
    */
    return true;
}
// functin filter prime number in array
function filterPrimeNumber(arr1) {
    const primeNumbers = [];
    for (let i = 0; i < arr1.length; i++) {
        if (isPrimeNumber(arr1[i])) {
            primeNumbers.push(arr1[i]);
        }
    }
    return primeNumbers;
}
const arrayPrimes = filterPrimeNumber(arr1);
console.log(arrayPrimes);




// 4
// Tạo một function để cập nhật email cho người dùng trong một danh sách, dựa trên tên người dùng.
// Đoạn code giả mã (pseudo code) như sau:
// Khai báo mảng global các object có 2 thuộc tính: name, email
// Khai báo hàm có 2 tham số: name, newEmail
// Sử dụng vòng for, duyệt trong mảng, nếu gặp phần tử nào có tên trùng với tham số name, cập nhật giá trị email về newEmail
global = [
    { name: "Linh", email: "linh@gmail.com" },
    { name: "Ha", email: "ha@gmail.com" },
    { name: "Mai", email: "mai@gmail.com" },
    { name: "Duc", email: "duc@gmail.com" }
];

function updateEmail1(name, newEmail) {
    global.forEach((user) => {
        if (user.name === name) {   // duyệt các phần tử name trong mảng biến, xem có trùng với value không
            user.email = newEmail; // nếu trùng thì gắn email = new email
        }
        else {
            console.log("không có user tên:" + name) // nếu không trùng thì print không có user tên đấy
        }
    })
}
updateEmail1("Linh", "hahihihi@gmail.com");
console.log(global);

// sửa lại
let users = [
    { name: "A", email: "A@gmail.com" },
    { name: "B", email: "B@gmail.com" },
    { name: "C", email: "C@gmail.com" },
    { name: "D", email: "D@gmail.com" }
];

function updateEmail2(name, newEmail) {
    let found = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i].name === name) {
            users[i].email = newEmail;
            console.log(`Email của ${name} đã được thay đổi thành ${newEmail}`);
            found = true;
            break;
        } 
    }

    if (!found) {
        console.log(`${name} không có trong danh sách người sử dụng`);
    }
}

updateEmail2("A", "updateA@gmail.com");
console.log("Danh sách đã cập nhật:", users);


//5
// Viết một hàm tính điểm trung bình của các sinh viên dựa trên điểm số lưu trong một mảng các object.
// Biết object có cấu trúc như sau: {“name”: “Alex”, score: 85}

const student = [
    { name: "alex", score: 85 },
    { name: "sara", score: 95 },
    { name: "michel", score: 65 },
    { name: "tim", score: 55 }
];

let sum = 0;
student.forEach((s) => {
    console.log(s.score);
    sum = sum + s.score;
});
console.log("tổng số score:", sum);
function avg() {
    console.log(sum / student.length);
}
avg();

// sửa lại
function calaculateAvg(student){
    let tong = 0;
    for (let i = 0; i < student.length; i++) {
        tong = tong + student[i].score;
    }
    return tong / student.length;
}
const diemTrungBinh = calaculateAvg(student);
console.log("điểm trung bình:", diemTrungBinh);
//6
function getFee(age) {
    if (age < 0) {
        return "invalid age";
    }
    if (age <= 5) {
        return "mien phi";
    }
    if (age <= 17) {
        return "50K";
    }
    return "100k";
    // if (age >= 18) {
    //     return "100k";
    // }

    // return "invalid age";
}
let fee = getFee(18);
console.log(fee);

//7

function findMonth(month) {
    switch (month) {
        case 11:
            console.log("november");
            break;
        case 6:
            console.log("jun");
            break;
        case 5:
            console.log("may");
            break;
        default:
            console.log("invaid month")
    }
}
findMonth(5);

//8 Viết hàm có một tham số là nhiệt độ, in ra nhiệt độ và thông báo trạng thái thời tiết: nóng (>= 30 độ C), mát (< 30 độ C và >= 20 độ C), lạnh (< 20 độ C)
function temperature(doC) {
    if (doC >= 30) {
        console.log(doC, "nóng");
    }
    else if (doC < 30 && doC >= 20) {
        console.log(doC, "mát");
    }
    else if (doC < 20) {
        console.log(doC, "lanh");
    }
}
temperature(50);
temperature(22);
temperature(10);