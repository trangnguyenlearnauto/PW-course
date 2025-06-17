let myHeight = 150;
const ideal_weight = (myHeight % 100) * 9 / 10;
const max_weight = myHeight % 100;
const min_weight = (myHeight % 100) * 8 / 10;

console.log(ideal_weight, max_weight, min_weight);