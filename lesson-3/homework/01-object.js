//1
let student = {
    name: "Trang",
    grades: {
        math: 9,
        english: 8
    }
}
console.log([student.grades.math]);

//2
let product = {
    banana: 10,
    apple: 20,
    watermelon: 30,
    orange: 40
}
for (let properties in product) {
    console.log(properties + ":" + product[properties]);
    // console.log(product[properties]);
}

//3
let bike = {}
bike.color = "yellow";
console.log(bike);

//4
let employee = {
    name: "trang",
    age: 27,
}
delete employee.age;
console.log(employee);

//5
const school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]
}
console.log(school);