# DOM
# DOM relation

1. self : node hiện tại
2. Parent: node liền trên node hiện tại
3. Children: node liền dưới của node hiện tại
4. Ancestor: lấy Cha, ông, tổ tiên lên đến <html>, không lấy Con, cháu, anh em
5. descendant: lấy mọi con cháu chắt của node hiện tại
6. Sibling: lấy những phần tử cùng cấp và cùng cha
7. Following: lấy tất cả các node bên dưới nó, nhưng không lấy con của chính nó
8. Preceding: lấy tất cả các node phía trên nó, nhưng không lấy tổ tiên, con cháu của node hiện tại.

![ví dụ](lesson-4\images\preceding.png)

9. Following-sibling: lấy anh em phía sau, không lấy con cháu của chính nó, con cháu của anh em
10. Preceding-sibling: anh em phía trước

# Xpath

## Absolute Xpath

Cú pháp: bắt đầu bằng / và đi dọc theo DOM tree lấy từ thẻ gốc 

Nhược điểm: nếu DOM tree có thay đổi thì code sẽ không chạy được

## relative Xpath

cú pháp: bắt đầu bằng // 

// tên thẻ [@thuoctinh = "giatri"]

# Basic action on Playwright

1. Click

`await page.locator("//input[@id='female']").click();`

- nếu muốn click nhiều lần thì dùng: click({count: n})

`await page.locator("//input[@id='female']").click({ count: 2});`

- right click: 

` await page.locator("").click({ button: right})`

- click chuột kèm bấm phím khác:

` await page.locator("").click({ modifier: [`shift`]})`

- double click:

` await page.locator("").dblclick()`

