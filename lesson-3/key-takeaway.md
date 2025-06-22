# Git
## Undo action
1. `git commit --amend` dùng để sửa message vừa commit
- các dùng: 
 - sau khi commit: `git commit -m"message"`
 - gõ lệnh `git commit --amnend`
 - gõ i -> bật chế độ insert, insert update message
 - gõ esc để thoát chế độ insert
 - gõ :wq để back lại nơi chạy lệnh khác

 *Cách để sửa nhanh hơn: `git commit --amend -m"message"`*


2. `git restore --staged <file>` dùng để đưa file từ vùng staging về working directory(local).

3. `git reset HEAD~{số lượng commit}` đưa file từ vùng repository về working directory.
- Sẽ có 3 vùng làm việc working directory, STG, repository. 
- Để đưa file qua các vùng ta có các câu lệnh sau:
  - `Git add path file` để khởi tạo commit, đưa file từ workring directory -> STG
  - `git commit -m"message"` để đẩy STG lên Repository
  - `git push origin main` để đưa file từ Repository lên gitHub
- Vậy để đưa file từ Repository về WD dùng lệnh: `git reset HEAD~{số lượng commit}`

## Branch model
Branch (nhánh) để tạo ra một vùng làm việc mới không anrhh hưởng tới vùng làm việc ổn địn (main).
1. Cách lệnh với branch
- `git branch <ten_branch>` -> tạo branch nhưng không chuyển qua nhánh đó
- `git checkout <ten_branch>` -> Chuyển sang nhánh đã tồn tại
- `git checkout -b <ten_branch>` -> Tạo nhánh và chuyển sang nhánh đó ngay lập tức
*sau khi tạo branch luôn cần pull code từ main về, hoặc trước khi làm việc nên cần main về để đảm bảo branch luôn up to date. lệnh pull code: `git pull origin main` *

# Javascript
## Conventions
các kiểu đặt tên theo convention:
- snake_case
- kebab-case: tên file
- camelCase: tên biến
- PascalCasse: tên class
## Object

Object (đối tương) dùng để lưu trữ tập hợp các giá trị vào cùng một biến hoặc hằng số.
1. khởi tạo object

`let/const <tên_object> = {<tên_thuộc_tính>: <giá_trị>, <tên_thuộc_tính2>: <giá_trị>}

- trong đó <thuoc_tinh> giống quy tắt đặt tên biến
- <giá_trí> có kiểu giống biến, hoặc là 1 object khác

2. Thêm thuộc tính vào object

cú pháp: 

`let bike = {make: "yamaha", model:"3'};`
`bike.color = "blue";`

3. xóa thuộc tính object

cú pháp:

`delete bike.color;`

4. update thuộc tính object

`const student = {“name”: “alex”, “age”: 20}
student.name = “Nagi”; // Hợp lệ`

## Logical operator
## Array

1. Push value to array

push thêm phần tử vào mảng.

let arr = [1,2,3]
arr.push("4);

## for in

For in dùng để quyệt qua tất cả các key(tên thuộc tính) của một object hoặc index của mảng
- cú pháp:
`for(let key in object){
  //code implement
}

ví dụ:
let person = {
  name: "trang",
  age: 29
}
for (let key in person) {
  console.log(key + ":" + person[key])
}

## for each

là một phương thức của mảng dùng để chạy một hàm cho mỗi phần tử của mảng đó
- cú pháp:

array.forEach(function(value, index) {
  //code run
})

- duyệt mảng:

`let fruits = ["apple", "banana", "orange"];`

`fruits.forEach(function(fruit)=>{console.log(fruit);});`

- duyệt mảng object:

`let users = [
  {name: "Trang", age:35},
  {name: "Minh", age: 20}
];
users.forEach(function(user){
  console.log(user.name + "-" + user.age)
})`

## for of

là vòng lặp dùng để duyệt qua các giá trị trong các iterable object như array, string, set, map,..

- cú pháp:

`for (let value of iterable){
//code run
}`

## Function

Function là hàm, là đoạn code được đặt tên và có thể tái sử dụng, thực iện 1 nhiệm vụ hoặc một tín toán cụ thể.
1. Khai báo

`function <nameFunction>() {
  //code
}`

## switch case
switch case giống như if...else if .. else, nhưng được viết ngắn gọn, dễ nhìn khi bạn cần so sánh một biến với nhiều giá trị khác nhau.
- cú pháp:

`switch (biến){
  case giá_trị_1: // nếu biến == giá trị 1 -> chạy code
  break;
  case giá_trị_2: // nếu biến == giá trị 2 -> chạy code
  break;
  default: // nếu không có giá trị khớp với bất kì case nào - chạy code này
}`
