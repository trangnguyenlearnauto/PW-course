//1
function getBMI(height, weight) {
    if (weight / height < 18.5) {
        return "thiếu cân";
    }
    else if (weight / height < 25) {
        return "bình thường";
    }
    else if (weight / height < 30) {
        return "thừa cân";
    }
    else if (weight / height >= 30) {
        return "béo phì"
    }
    else {
        return "sai số"
    }
}
const BMI = getBMI(1.5, 45);
console.log(BMI);

//2
function getConvert(value,type) {
    if (type === '°C') {
        return value*9/5 + 31;
    }
    else if (type === 'F'){
        return (value -32)*5/9
    }
    else {
        return "invalid value"
    }
    
}
const convert = getConvert(30, "°C");
console.log(convert);

//3
// so_nguyen = [0,1,2,3,4,5,6,7,8,9,11,12];
// so_nguyen.foreach(function(n)){
//     if (n % 1 === 0){
//         console.log(n);
//     }
//     if (n === 0 && 1){
//         return "khong phai so nguyen";
//     }
    
// }

// 4
global = [
    {name: "Linh", email: "linh@gmail.com"},
    {name: "Ha", email:"ha@gmail.com"},
    {name: "Mai", email:"mai@gmail.com"},
    {name: "Duc", email:"duc@gmail.com"}
];

function update_email(name, newEmail){
    global.forEach((user) => {
        if(user.name === name) {   // duyệt các phần tử name trong mảng biến, xem có trùng với value không
            user.email = newEmail; // nếu trùng thì gắn email = new email
        }
        else {
            console.log("không có user tên:" + name) // nếu không trùng thì print không có user tên đấy
        }
    })
}
update_email("Linh", "hahihihi@gmail.com");
console.log(global);


//5

const student = [
    {name: "alex", score: 85},
    {name: "sara", score: 95},
    {name: "michel", score: 100},
    {name: "tim", score: 70}
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

//6
function getFee(age){
    if(age <= 0){
        return "invalid age"; 
    }
    if(age < 5) {
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

