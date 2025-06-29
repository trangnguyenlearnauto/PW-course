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

The basic format of XPath in Selenium is explained below.

 XPath = //tagname[@Attribute=’Value’] 
Here,

- //: denotes the current node

- tagname: tên tag name của node hiện tại

- @: denotes the Select attribute

- Attribute: thuộc tính của node

- Value: giá trị của thuộc tính của node

## Absolute Xpath

Cú pháp: bắt đầu bằng / và đi dọc theo DOM tree lấy từ thẻ gốc 

Nhược điểm: nếu DOM tree có thay đổi thì code sẽ không chạy được

## relative Xpath

cú pháp: bắt đầu bằng // 

// tên thẻ [@thuoctinh = "giatri"]

1. Xpath using contains()

 - Syntax: `//tagname[contains(@attribute,constantvalue)] `

 - example: ` //tagname[contains(@attribute,”signin”)]`
 `//button[contains(@class,'justify-center')] `

 2. XPath using logical operators ( OR & AND )

 - OR: ` XPath=//tagname[@attribute1=value1 OR @attribute2=value1] `

 example: `//input[@name="email" or contains(@placeholder,’abc’)] `
 - AND: ` XPath=//tagname[@attribute1=value1 AND @attribute2=value1] `

 example: `//input[@name="email" and contains(@placeholder,'Email')]`

 *note: khi dùng xpath với and or thì nên viết thường, nếu viết hoa sẽ hay gặp lỗi invalid xpath.*

 3. Xpath using text()

- syntax: `//tagname[text()=’Text of the WebElement’] `
- example: `//span[text()='Sign up with Google']`

 4. XPath using starts-with()

 - syntax: `//tagname[starts-with(@attribute,value)] `
 - example: `//input[starts-with(@placeholder,'Desired')] `

 5. XPath using Index
 - Syntax: `//tagname[@attribute=’value’][Index Number] `
 - Example: `(//input[contains(@class,'customPlaceholder')])[2] `

 6. XPath using the following
- Syntax: `//tagname[@attribute=’value’]//following::tagname`

trong đó: `//tagname[@attribute=’value’]` là vế current node, còn `following::tagname` là lấy tất cả tag name bên dưới current node
- example: `//form[contains(@class,'form')]//following::div//input[@id='userpassword']`

7. XPath using following-sibling
- syntax: `//tagname[@attribute=’value’]//following-sibiling::tagname`
- example: `(//div[contains(@class,'custom__border')]//following-sibling::div)[1]`

8. XPath using preceding
- syntax: `//tagname[@attribute=’value’]//preceding::tagname`
- example: `//button[@data-testid='signup-button']//preceding::input[@type='password'] `

9. XPath using preceding-sibling
- syntax: `//tagname[@attribute=’value’]//preceding-sibling::tagname`
- example: `//div[contains(@class,'custom__border')]//preceding-sibling::div`

10. XPath using child
- syntax: `//tagname[@attribute=’value’]//child::tagname`
- example: `//div[@aria-labelledby='sign_up_with_google_label']//child::span`

11. XPath using parent
- syntax: `//tagname[@attribute=’value’]/parent::tagname`
- example: `	
//button[@data-testid='signup-button']//parent::div//preceding-sibling::div//input[@type='password']`

12. XPath using descendant
- syntax: `//tagname[@attribute=’value’]//descendant::tagname`
- example: `//div[contains(@class,'overflow-hidden')]//descendant::span`

13. XPath using ancestor
- syntax: `//tagname[@attribute=’value’]//ancestors::tagname`
- example: `//input[@type='password']//ancestor::div//input[@id='email']`


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

2. Hover

await page.locator("<xpath here>").hover();

3. text()

Hàm text()dùng để tìm ra phần tử có giá trị tương ứng. Ví dụ Với DOM sau:
`<div @class=”playwright”>This is a text</div>`

Thì để chọn phần tử này, ta dùng cú pháp như sau:
`//div[text()=’This is a text’]`

4. Dialog

Sự kiện dialog phải được xuất hiện trước khi sự kiện trigger dialog được diễn ra

`page.on('dialog', dialog => dialog.accept());
await page.delete('button').click()`