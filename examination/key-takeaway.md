# kiến thứ bổ sung
1. Chuyển đổi hệ thập phân sang hệ lục phân

- hệ thập phân (decimal system): dùng để đếm, tính toán hàng ngày
- hệ lục phân(hex): dùng trong máy tính, màu sắc trong css #FF000, mã địa chỉ bộ nhớ, mã hóa dữ liệu

|thập phân | lục phân(hex) |note|
|----------|---------------|----|
|10        |A              ||
|11        |B              ||
|12        |C              ||
|13        |D              ||
|14        |E              ||
|15        |F              ||
|255        |FF              | 255 ÷ 16 = 15 dư 15 → FF|

- cú pháp: dùng toString(16) để chuyển đổi từ decimal to hex

let decimalNumber = 120;

let hexadecimalNumber = decimalNumber.toString(16)

out put : 78

2. Hàm toLowerCase và toUpperCase trong

toLowerCase(): Chuyển đổi chuỗi thành chữ thường.

toUpperCase(): Chuyển đổi chuỗi thành chữ hoa.

- Ví dụ:

`let text = "1104 Challenge";
let lowercaseText = text.toLowerCase();
let uppercaseText = text.toUpperCase();
console.log(lowercaseText); // Output: 1104 challenge
console.log(uppercaseText); // Output: 1104 CHALLENGE`
