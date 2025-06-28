//1: Khởi động tàu vũ trụ 1104
let departurePlanet = "Trái Đất";
let mission = "Khám phá Vũ trụ 1104";
let crew = ["Trang", "NhatAnh", "Ha", "Thom"];

// cách 1: for of

function lauchShip(crew) {
    let crewMember = "";
    for (let crewName of crew) {
        crewMember = crewMember + ", " + crewName;
    }
    return `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crewMember} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}!`;
}
let returnMessage = lauchShip(crew);
console.log("cách 1:", returnMessage);

// cách 2: Join()

function lauchShip2(crew) {
    let crewMember2 = crew.join(", ");
    return `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crewMember2} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}!`;
}
let returnMessage2 = lauchShip(crew);
console.log("cách 2:", returnMessage2);

// cách 3: sửa dấu , ở đầu tên đầu tiên

function lauchShip(crew) {
    let crewMember3 = "";
    for (let i = 0; i < crew.length; i++) {
        if (i === 0) {
            crewMember3 = crewMember3 + crew[i];
        }
        else {
            crewMember3 = crewMember3 + ",  " + crew[i];
        }
    }
    return `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crewMember3} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}!`;
}
let returnMessage3 = lauchShip(crew);
console.log("cách 3:", returnMessage3);

// 2 Du hành đếnn hành tinh bí ẩn
// khoảng cách = tốc dộ * thời gian

function calculateDistance(speed, time) {
    let distance = speed * time;
    return distance;
}
let khoangCach = calculateDistance(1000, 24);
console.log("distance:", khoangCach);

// 3 Hành tinh kỳ lạ

function convertTimeToHex(time) {
    let hexdecimalNumber = time.toString(16);
    return hexdecimalNumber;
}
let misteriousPlanetTime = convertTimeToHex(120);
console.log("misteriousPlanetTime:", misteriousPlanetTime);

//4 Khám phá kho báu

function decryptCode(code) {
    let converted = "";
    for (text of code) {
        if (text === text.toUpperCase()) {
            converted = converted + text.toLowerCase();
        }
        else if (text === text.toLowerCase()) {
            converted = converted + text.toUpperCase();
        }
        else {
            converted = converted + text;
        }
    }
    return converted;
}
let converted = decryptCode("1104 Challenge");
console.log("code:", converted);

// 5 Trở về trái đất

function returnToEarth() {
    console.log("Chuẩn bị trở về Trái Đất!");
}
returnToEarth();