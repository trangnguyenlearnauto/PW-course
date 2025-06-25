//1
let student = {
    name: "Trang",
    grades: {
        math: 9,
        english: 8
    }
}
console.log(student.grades.math);
console.log(student["grades"]["math"]); // dùng được 2 cách

// //2 Tạo một object product với các thuộc tính là tên các sản phẩm và giá trị là giá
// của chúng. Dùng vòng lặp for...in để in ra tên và giá của mỗi sản phẩm.
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
let bike = {};
bike.color = "yellow";
// hoặc bike["color"] = "yellow";
console.log(bike);

//4 tạo một object emplee với các thuộc tính name, age và xóa thuộc tính age
let employee = {
    name: "trang",
    age: 27,
}
delete employee.age;
console.log(employee);

//5
// Một trường học có các lớp học và học sinh như sau:
// classA: An, Bình, Châu
// classB: Đào, Hương, Giang
// Hãy viết code để đáp ứng yêu cầu sau:
// - Khai báo tên biến: school
// - Tên class là tên thuộc tính, giá trị của các thuộc tính này là một mảng chứa
// tên các học sinh
const school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]
}
console.log(school);