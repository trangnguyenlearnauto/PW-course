// For ... in
//1 In ra tên và giá trị của mỗi thuộc tính trong một đối tượng. Ví dụ: object student = {“name”: “Alex”, “age”: 10} thì in ra name=Alex age=10
const student = { name: "alex", score: 85 };
for (let key in student) {
    console.log(key + "=" + student[key]);
}


//2 Tính tổng các giá trị số của các thuộc tính trong một đối tượng. Ví dụ: object student={“name”: “Alex”, “age”: 10, “salary”: 20} thì in ra tổng 30 (=10+20).

const student1 = {
    name: 'alex',
    age: 30,
    salary: 20,
}
let sum = 0;
for (const key in student1) {
    if (typeof student1[key] === 'number'){
        sum += student1[key];
    }
}
console.log(`tổng các giá trị số trong object là ${sum}`);

//3 Tạo một mảng chứa tất cả các tên thuộc tính của một đối tượng. Ví dụ object student={“name”: “Alex”, “age”: 10} thì sẽ tạo ra một mảng [“name”, “age”]
const student2 = {
    "name": "alex",
    "age": 10,
}
let newObject = [];
for (let key in student2) {
    newObject.push(key);
}
console.log(newObject);