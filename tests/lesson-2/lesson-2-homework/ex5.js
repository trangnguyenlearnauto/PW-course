for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(`số ${i} là số chẵn`); // console.log("số" + i + là số chẵn")
    }
    if (i % 2 === 1) { // (i % 2 !== 0)
        console.log(`số ${i} là số lẻ`);
    }
}
