//1
// let height = 1.5;
// let weight = 45;
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
//    return C = (F -32)*5/9
const convert = getConvert(30, "°C");
console.log(convert);

//3
so_nguyen = [0,1,2,3,4,5,6,7,8,9,11,12];
so_nguyen.foreach(function(n)){
    if (n % 1 === 0){
        console.log(n);
    }
    if (n === 0 && 1){
        return "khong phai so nguyen";
    }
    
}