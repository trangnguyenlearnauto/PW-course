# Git
## Các câu lệnh khi dùng git
Sau khi có các thay đổi gì từ trong code muốn commit và push lên gitHub, đùng các câu lệnh sau để commit:
- git add path_đến_file_cần_commit -> đùng để commit riêng lẻ mình file này thôi.
- git add . -> dùng để commit tất cả các file thay đổi từ local lên vùng staging area.
- git commit -"init project" -> chỉ dùng một lần duy nhất khi khởi tạo project, để đảm bảo git sẽ lưu trữ project của mình từ nay về sau.
- git commit -m "message" -> dùng để đẩy code lên gitHub. Trong đó message cần tuân thủ theo code convention.
- git status -> để check status của các file đã được commit trên staging area chưa. Màu xanh tức là file đã đưuọc commit trên stg, màu đỏ là file chưa đưuọc commit, vẫn ở trên local thôi. những file đã được push lên gitHub reporistory thì không hiện khi cạy lện git status.
- git log -> để check tất cả lịch sử nhưng lần commit lên gitHub.

## Commit convention
message convention: "type - short description"
- Các loại type:
- -  chore: là message sửa nhỏ lẻ như sai chính tả, xóa file không dùng tới
- - feat: là message khi thêm tính nắng mới
- - Fix: là message khi fix bug

# JavaScript
## Variable
- Var: khai báo biến, phạm vi toàn cục, global
- let: khai bảo biế, phạm vi cục bộ, local, nằm trong hàm {}
- const: hằng số, dùng để khai báo các giá trị không thể thay đổi

## Data type
- có 8 kiểu dữ liệu: Sring, Number, Bigint, Boolean, Underfined, Null, Symbol, Object.
## Comparision operator
- các toán tử so sánh: 
- - so sánh hơn kém: <>;
- - so sánh bằng:  == ; ===; !=; !==; >=; <=
## Unary operator
Toán tử một ngôi, dùng để tăng hoặc giảm giá trị
i++, hoặc i = i + 1
i--, hoặc i = i - 1
## Arithmetic operator
Toán tử số học, bao gồm các phép toán: +, -, *, /
## Conditional
Điều kiện, dùng để kiểm tra có nên thực hiện đoạn logic hay không.
- Cú pháp: if(<điều kiện>) {// code}
- Ví dụ: if (5>3) {console.log("5 lớn hơn 3)}
## Loops
Vòng lặp, dùng để thực hiện một đoạn logic với số lầ nhất định
- Cú pháp: for (<khởi tạo>; <điều kiện dừng>; <điều khiện tăng>) {//code}
## Format code
Dùng để đưa các dòng code về một format chuẩn, cần kiểm tra lại format trước ki push code. format bằng tổ hợp phím alt + shift + F
