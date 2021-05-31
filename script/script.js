let num = 266219;
let numStr = num.toString();
let mult = 1;
 for(let i = 0; i < numStr.length; i++){

    mult = mult * numStr[i];
 }
let degree = mult **3;
console.log(mult);
console.log(degree);
console.log(degree.toString().substring(0,2));

  