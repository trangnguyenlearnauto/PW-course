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
1. Khowri
## Logical operator
## Array
## for in

dùng để lặp thuộc tính của object. Truy cập được index trong array
lệnh for in:
for ()

## Function

Function là hàm, là đoạn code được đặt tên và có thể tái sử dụng, thực iện 1 nhiệm vụ hoặc một tín toán cụ thể.
1. Khai báo

`function <nameFunction>() {
  //code
}`